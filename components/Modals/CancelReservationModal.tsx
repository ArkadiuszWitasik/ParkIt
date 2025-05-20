import { Text, View } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import BaseModal from './BaseModal';
import PrimaryButton from '../Buttons/PrimaryButton';
import { Reservation, useUserStore } from '@/store/userStore';
import { formatFirebaseTimestamp } from '@/helpers/functions';
import { useParkingLotsStore } from '@/store/parkingLotsStore';
import { Timestamp } from 'firebase/firestore';

type CancelReservationModalProps = {
	reservation: Reservation;
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

const CancelReservationModal = (props: CancelReservationModalProps) => {
	const { parkingLots } = useParkingLotsStore();
	const { user, updateUser } = useUserStore();
	const { formatedDate, formatedStartTime, formatedEndTime } =
		formatFirebaseTimestamp(
			props.reservation.reservationDate,
			props.reservation.reservationStartTime,
			props.reservation.reservationEndTime
		);

	const choosenParkingLotName = parkingLots.find(
		(parking) => parking.parkingId === props.reservation.reservationParkingId
	)?.parkingName;

	const handleCancelReservation = () => {
		if (!user) return;
		const updatedReservationList = user.reservations.map((reservation) => {
			if (reservation.reservationId === props.reservation.reservationId) {
				return { ...reservation, reservationStatus: 3 };
			}
			return reservation;
		});

		const userPaymentHistoryList = user?.paymentHistory || [];

		let refundAmount = 0;

		if (user.isPremiumAccount) {
			refundAmount = props.reservation.reservationPrice;
		} else {
			refundAmount = props.reservation.reservationPrice * 0.75;
		}

		const newPayment = {
			paymentDate: Timestamp.fromDate(new Date()),
			paymentAmount: refundAmount,
			paymentDesc: 'refund',
		};

		updateUser({
			...user,
			balance: user.balance + refundAmount,
			reservations: updatedReservationList,
			paymentHistory: [...userPaymentHistoryList, newPayment],
		});
	};

	return (
		<BaseModal
			w="w-[350px]"
			h="h-[250px]"
			isModalVisible={props.isModalVisible}
			setIsModalVisible={props.setIsModalVisible}
		>
			<View className="flex-1 flex-col justify-around items-center">
				<Text className="font-RalewayRegular text-FontColor">
					Czy chcesz anulować rezerwację?
				</Text>
				<View className="flex flex-col items-center">
					<Text>{choosenParkingLotName}</Text>
					<Text className="font-RalewayRegular text-FontColor">
						{formatedDate.toLocaleDateString()} w godzinach{' '}
						{formatedStartTime.toLocaleTimeString()} -{' '}
						{formatedEndTime.toLocaleTimeString()}
					</Text>
				</View>
				<View className="flex flex-col gap-2">
					{user?.isPremiumAccount ? (
						<Text className="text-[10px] font-RalewayRegular text-FontColor">
							Dzięki statusie premium otrzymasz 100% zwrotu!
						</Text>
					) : (
						<Text className="text-[10px] font-RalewayRegular text-FontColor">
							Uwaga! Anulowanie rezerwacji zwróci tylko 75% ceny rezerwacji.
						</Text>
					)}
					<View className="flex flex-row gap-2">
						<PrimaryButton
							onPressFn={() => {
								props.setIsModalVisible(false);
							}}
							text="Powrót"
						/>
						<PrimaryButton
							onPressFn={() => {
								handleCancelReservation();
								props.setIsModalVisible(false);
							}}
							text="Anuluj rezerwację"
						/>
					</View>
				</View>
			</View>
		</BaseModal>
	);
};

export default CancelReservationModal;
