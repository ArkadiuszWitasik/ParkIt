import { View, Text, Linking } from 'react-native';
import React, { useState } from 'react';
import { useParkingLotsStore } from '@/store/parkingLotsStore';
import { Reservation, useUserStore } from '@/store/userStore';
import CancelIcon from '@/assets/Icons/CancelIcon';
import UnstyledButton from '../Buttons/UnstyledButton';
import Divider from '../Divider';
import CancelReservationModal from '../Modals/CancelReservationModal';
import NavIcon from '@/assets/Icons/NavIcon';
import { toDate } from '@/helpers/functions';

type ReservationCardProps = {
	reservation: Reservation;
	isHistoryCard: boolean;
};

export default function ReservationCard(props: ReservationCardProps) {
	const [isCancelModalVisible, setIsCancelModalVisible] =
		useState<boolean>(false);
	const { parkingLots } = useParkingLotsStore();
	const { user } = useUserStore();

	let statusText = '';
	let statusColor = '';
	let statusTextColor = '';

	if (props.reservation.reservationStatus === 0) {
		statusText = 'Nadchodzące';
		statusColor = 'bg-gray-200';
		statusTextColor = 'text-gray-500';
	} else if (props.reservation.reservationStatus === 1) {
		statusText = 'W trakcie';
		statusColor = 'bg-blue-200';
		statusTextColor = 'text-blue-500';
	} else if (props.reservation.reservationStatus === 2) {
		statusText = 'Zakończono';
		statusColor = 'bg-green-200';
		statusTextColor = 'text-green-500';
	} else if (props.reservation.reservationStatus === 3) {
		statusText = 'Anulowano';
		statusColor = 'bg-red-200';
		statusTextColor = 'text-red-500';
	} else {
		statusText = 'Nieznany status';
		statusColor = 'bg-gray-200';
		statusTextColor = 'text-gray-500';
	}

	const choosenParkingLot = parkingLots.find(
		(parking) => parking.parkingId === props.reservation.reservationParkingId
	);

	const zoneAndSpotSplit = props.reservation.reservationSpotId?.split('-');

	const choosenZoneAndSpot = zoneAndSpotSplit
		? zoneAndSpotSplit![2] + ' - ' + zoneAndSpotSplit![1]
		: ' ';

	const choosenCar = user?.cars.find(
		(car) => car.carId === props.reservation.carId
	);

	const formatedDate = toDate(props.reservation.reservationDate);
	const formatedStartTime = toDate(props.reservation.reservationStartTime);
	const formatedEndTime = toDate(props.reservation.reservationEndTime);

	return (
		<View className="flex-col gap-3 bg-white rounded-md p-3">
			{!props.isHistoryCard && (
				<CancelReservationModal
					reservation={props.reservation}
					isModalVisible={isCancelModalVisible}
					setIsModalVisible={setIsCancelModalVisible}
				/>
			)}
			<View className="flex flex-row justify-between">
				<View>
					<Text className="font-RalewaySemiBold text-FontColor">
						{choosenParkingLot?.parkingName}
					</Text>
					<Text className="font-RalewayRegular text-FontColor">
						{choosenZoneAndSpot}
					</Text>
				</View>
				{!props.isHistoryCard ? (
					<View className="flex flex-row gap-5">
						<UnstyledButton
							onPressFn={() => {
								const url = `https://www.google.com/maps/dir/?api=1&destination=${choosenParkingLot?.parkingLocation.latitude},${choosenParkingLot?.parkingLocation.longitude}`;
								Linking.openURL(url);
							}}
							w="w-[30px]"
							h="h-[30px]"
							bgColor=""
							bgPressedColor="bg-gray-300"
							otherStyles="flex justify-center items-center rounded-md"
						>
							<NavIcon style={{ width: 25, height: 25 }} />
						</UnstyledButton>
						<UnstyledButton
							onPressFn={() => setIsCancelModalVisible(true)}
							w="w-[30px]"
							h="h-[30px]"
							bgColor=""
							bgPressedColor="bg-gray-300"
							otherStyles="flex justify-center items-center rounded-md"
						>
							<CancelIcon style={{ width: 25, height: 25 }} />
						</UnstyledButton>
					</View>
				) : (
					<Text className="font-RalewaySemiBold text-FontColor">
						{props.reservation.reservationPrice} zł
					</Text>
				)}
			</View>
			<Divider />
			<View className="flex flex-row justify-between gap-1">
				<View>
					<Text className="font-RalewayRegular text-FontColor">
						{choosenCar?.carName}, {choosenCar?.carRegistrationNumber}
					</Text>
					<Text className="font-RalewayRegular text-FontColor">
						{formatedDate.toLocaleDateString()}{' '}
						{formatedStartTime.toLocaleTimeString()} -{' '}
						{formatedEndTime.toLocaleTimeString()}
					</Text>
				</View>
				<Text
					className={`font-RalewaySemiBold ${statusColor} p-2 rounded-full ${statusTextColor}`}
				>
					{statusText}
				</Text>
			</View>
		</View>
	);
}
