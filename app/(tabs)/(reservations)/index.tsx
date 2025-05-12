import { Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Href, router } from 'expo-router';
import { useReservationStore } from '@/store/reservationStore';
import ReservationHistoryCard from '@/components/Cards/ReservationHistoryCard';

const mockUP = [
	{
		reservationId: 1,
		startDate: '11/05/2025',
		startTime: '17:00',
		endDate: '11/05/2025',
		endTime: '20:30',
		parkingId: 'Aura',
		spotId: 'Strefa A15',
		reservationStatus: 2,
		price: 33,
	},
	{
		reservationId: 2,
		startDate: '11/05/2025',
		startTime: '17:00',
		endDate: '11/05/2025',
		endTime: '20:30',
		parkingId: 'Aura',
		spotId: 'Strefa A15',
		reservationStatus: 1,
		price: 15,
	},
];

const ReservationsScreen = () => {
	const { resetReservation } = useReservationStore();

	const navigate = (path: Href) => {
		router.navigate(path);
	};

	return (
		<View className="flex-1 m-3 flex flex-col gap-3">
			<PrimaryButton
				onPressFn={() => {
					resetReservation();
					navigate('/(tabs)/(reservations)/(new-reservation)/datetime');
				}}
				text="Nowa rezerwacja"
			/>
			<Text>Aktualne rezerwacje</Text>
			<Text>Historia</Text>
			{mockUP.map((reservation) => (
				<ReservationHistoryCard
					key={reservation.reservationId}
					reservationId={reservation.reservationId}
					startDate={reservation.startDate}
					startTime={reservation.startTime}
					endDate={reservation.endDate}
					endTime={reservation.endTime}
					parkingId={reservation.parkingId}
					spotId={reservation.spotId}
					price={15}
					reservationStatus={reservation.reservationStatus}
				/>
			))}
		</View>
	);
};

export default ReservationsScreen;
