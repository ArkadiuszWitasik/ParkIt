import { View, Text } from 'react-native';
import React from 'react';
import Divider from '../Divider';

type ReservationHistoryCardProps = {
	reservationId: number;
	startDate: string;
	startTime: string;
	endDate: string;
	endTime: string;
	parkingId: string;
	spotId: string;
	reservationStatus: number;
	price: number;
};

const ReservationHistoryCard = (props: ReservationHistoryCardProps) => {
	let statusText = '';
	let statusColor = '';
	let statusTextColor = '';

	switch (props.reservationStatus) {
		case 1:
			statusText = 'Anulowano';
			statusColor = 'bg-red-200';
			statusTextColor = 'text-red-500';
			break;
		case 2:
			statusText = 'Zakończono';
			statusColor = 'bg-green-200';
			statusTextColor = 'text-green-500';
			break;
		case 3:
			statusText = 'W trakcie';
			statusColor = 'bg-yellow-200';
			statusTextColor = 'text-yellow-500';
			break;
		default:
			statusText = 'Nieznany status';
			statusColor = 'bg-gray-200';
			statusTextColor = 'text-gray-500';
			break;
	}

	return (
		<View className="flex-column gap-3 bg-white rounded-md p-3">
			<View className="flex flex-row justify-between">
				<View>
					<Text className="font-RalewaySemiBold text-FontColor">
						{props.parkingId}
					</Text>
					<Text className="font-RalewayRegular text-FontColor">
						{props.spotId}
					</Text>
				</View>
				<Text className={`font-RalewaySemiBold  text-FontColor`}>
					{props.price}zł
				</Text>
			</View>

			<Divider />

			<View className="flex flex-row justify-between gap-1">
				<Text className="font-RalewayRegular text-FontColor">
					{props.startDate} {props.startTime} - {props.endTime}
				</Text>
				<Text
					className={`font-RalewaySemiBold  ${statusColor} p-2 rounded-full ${statusTextColor}`}
				>
					{statusText}
				</Text>
			</View>
		</View>
	);
};

export default ReservationHistoryCard;
