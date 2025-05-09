import { View, Text } from 'react-native';
import React from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Href, router } from 'expo-router';
import { useReservationStore } from '@/store/reservationStore';

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
		</View>
	);
};

export default ReservationsScreen;
