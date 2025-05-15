import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Href, router } from 'expo-router';
import { useReservationStore } from '@/store/reservationStore';
import { useUserStore } from '@/store/userStore';
import ReservationCard from '@/components/Cards/ReservationCard';

const ReservationsScreen = () => {
	const { resetReservation } = useReservationStore();

	const { user } = useUserStore();

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
			<ScrollView className="max-h-[75%]" showsVerticalScrollIndicator={false}>
				<Text className="text-[18px] font-RalewaySemiBold text-FontColor mt-2 mb-2">
					Aktualne rezerwacje
				</Text>
				<View className="flex flex-col gap-3">
					{user &&
						user.reservations
							.filter((reservation) => reservation.reservationStatus < 2)
							.sort((a, b) => b.reservationStatus - a.reservationStatus)
							.map((reservation) => (
								<ReservationCard
									key={reservation.reservationId}
									reservation={reservation}
									isHistoryCard={false}
								/>
							))}
				</View>
				<Text className="text-[18px] font-RalewaySemiBold text-FontColor mt-5 mb-2">
					Historia
				</Text>
				<View className="flex flex-col gap-3">
					{user &&
						user.reservations
							.filter((reservation) => reservation.reservationStatus > 0)
							.map((reservation) => (
								<ReservationCard
									key={reservation.reservationId}
									reservation={reservation}
									isHistoryCard={true}
								/>
							))}
				</View>
			</ScrollView>
		</View>
	);
};

export default ReservationsScreen;
