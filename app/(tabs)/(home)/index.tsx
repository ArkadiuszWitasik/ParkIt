import { View } from 'react-native';
import React, { useEffect } from 'react';
import MainScreenCard from '@/components/MainViews/MainScreenCard';
import BalanceMainView from '@/components/MainViews/BalanceMainView';
import LoyalityMainView from '@/components/MainViews/LoyalityMainView';
import CarMainView from '@/components/MainViews/CarMainView';
import ReservationsMainView from '@/components/MainViews/ReservationsMainView';
import { useUserStore } from '@/store/userStore';
import { toDate } from '@/helpers/functions';

const HomeScreen = () => {
	const { user, updateUser } = useUserStore();

	const updateUserPremiumState = () => {
		if (
			user?.premiumExpireDate.toDate().toLocaleDateString() ===
			new Date().toLocaleDateString()
		) {
			updateUser({
				...user,
				isPremiumAccount: false,
			});
		}
	};

	const updateUserReservations = () => {
		if (user) {
			const updatedReservations = user.reservations.map((reservation) => {
				const formatedDate = toDate(reservation.reservationDate);
				const formatedStartTime = toDate(reservation.reservationStartTime);
				const formatedEndTime = toDate(reservation.reservationEndTime);
				if (
					formatedDate.toLocaleDateString() ===
						new Date().toLocaleDateString() &&
					new Date().toLocaleTimeString() >
						formatedStartTime.toLocaleTimeString() &&
					new Date().toLocaleTimeString() <
						formatedEndTime.toLocaleTimeString() &&
					reservation.reservationStatus === 0
				) {
					return { ...reservation, reservationStatus: 1 };
				} else if (
					formatedDate < new Date() &&
					reservation.reservationStatus < 2
				) {
					return { ...reservation, reservationStatus: 2 };
				}

				return reservation;
			});

			updateUser({
				...user,
				reservations: updatedReservations,
			});
		}
	};

	useEffect(() => {
		updateUserReservations();
		updateUserPremiumState();
	}, []);

	return (
		<View className="flex-1 m-3 gap-5 bg-AppBackground">
			<View className="flex flex-row h-[150px] gap-5">
				<MainScreenCard
					path={'/(tabs)/(profile)/balance'}
					cardStyles="flex-1 rounded-md"
					backgroundColor="bg-white"
					pressedBackgroundColor="bg-AppBackground"
				>
					<BalanceMainView />
				</MainScreenCard>
				<MainScreenCard
					path={'/(tabs)/(profile)/cars'}
					cardStyles="flex-1 rounded-md"
					backgroundColor="bg-white"
					pressedBackgroundColor="bg-AppBackground"
				>
					<CarMainView />
				</MainScreenCard>
			</View>
			<View className="h-[150px]">
				<MainScreenCard
					path={'/(tabs)/(profile)/loyality'}
					cardStyles="flex-grow rounded-md"
					backgroundColor="bg-white"
					pressedBackgroundColor="bg-AppBackground"
				>
					<LoyalityMainView />
				</MainScreenCard>
			</View>
			<View className="h-[150px]">
				<MainScreenCard
					path={'/(tabs)/(reservations)'}
					cardStyles="flex-grow rounded-md"
					backgroundColor="bg-white"
					pressedBackgroundColor="bg-AppBackground"
				>
					<ReservationsMainView />
				</MainScreenCard>
			</View>
		</View>
	);
};

export default HomeScreen;
