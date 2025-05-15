import { Text, View } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import BaseModal from './BaseModal';
import PrimaryButton from '../Buttons/PrimaryButton';
import { Reservation, useUserStore } from '@/store/userStore';
import { formatFirebaseTimestamp } from '@/helpers/functions';
import { useParkingLotsStore } from '@/store/parkingLotsStore';

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

		const refundAmount = props.reservation.reservationPrice * 0.75;

		updateUser({
			...user,
			balance: user.balance + refundAmount,
			reservations: updatedReservationList,
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
					<Text className="text-[10px] font-RalewayRegular text-FontColor">
						Uwaga! Anulowanie rezerwacji zwróci tylko 75% ceny rezerwacji.
					</Text>
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
							text="Anuluj"
						/>
					</View>
				</View>
			</View>
		</BaseModal>
	);
};

export default CancelReservationModal;
