import { View, Text } from 'react-native';
import React from 'react';
import UnstyledButton from '@/components/Buttons/UnstyledButton';
import { Href, router } from 'expo-router';
import { useUserStore } from '@/store/userStore';
import { count } from 'firebase/firestore';

const ProfileScreen = () => {
	const navigate = (path: Href) => {
		router.navigate(path);
	};

	const { user } = useUserStore();

	const userCarList = user!.cars;
	const userReservationList = user!.reservations;

	const carStatistics: Record<string, number> = {};

	const getReservationLabel = (count: number) => {
		if (count === 0) {
			return 'rezerwacji';
		} else if (count === 1) {
			return 'rezerwacja';
		} else if (count > 1 && count < 5) {
			return 'rezerwacje';
		} else {
			return 'rezerwacji';
		}
	};

	const getDiscountLabel = (count: number) => {
		if (count === 0) {
			return 'zniżek';
		} else if (count === 1) {
			return 'zniżka';
		} else if (count > 1 && count < 5) {
			return 'zniżki';
		} else {
			return 'zniżek';
		}
	};

	userReservationList.forEach((reservation) => {
		const carId = reservation.carId;
		if (carId) {
			carStatistics[carId] = (carStatistics[carId] || 0) + 1;
		}
	});

	const carIdToName = Object.fromEntries(
		userCarList.map((car) => [
			car.carId,
			`${car.carName}, ${car.carRegistrationNumber}`,
		])
	);

	const yearAgo = new Date();
	yearAgo.setFullYear(yearAgo.getFullYear() - 1);

	const lastYearReservationsCount = userReservationList.filter(
		(reservation) => {
			let dateTypeSwitch: any = reservation.reservationDate;
			const date =
				dateTypeSwitch.toDate?.() || new Date(reservation.reservationDate);
			return date >= yearAgo;
		}
	).length;

	return (
		<View className="flex-1 m-3 flex flex-col gap-2 items-center">
			<Text className="text-FontColor font-MontserratRegular text-[16px]">
				Status konta: {user?.isPremiumAccount ? 'Premium' : 'Standard'}
			</Text>
			<UnstyledButton
				onPressFn={() => navigate('/(tabs)/(profile)/loyality')}
				w="w-full"
				bgColor="bg-white"
				bgPressedColor="bg-gray-300"
				otherStyles="flex justify-center items-center rounded-md"
			>
				<Text className="text-FontColor font-MontserratRegular">Premium</Text>
			</UnstyledButton>
			<UnstyledButton
				onPressFn={() => navigate('/(tabs)/(profile)/balance')}
				w="w-full"
				bgColor="bg-white"
				bgPressedColor="bg-gray-300"
				otherStyles="flex justify-center items-center rounded-md"
			>
				<Text className="text-FontColor font-MontserratRegular">Płatności</Text>
			</UnstyledButton>
			<UnstyledButton
				onPressFn={() => navigate('/(tabs)/(profile)/cars')}
				w="w-full"
				bgColor="bg-white"
				bgPressedColor="bg-gray-300"
				otherStyles="flex justify-center items-center rounded-md"
			>
				<Text className="text-FontColor font-MontserratRegular">Samochody</Text>
			</UnstyledButton>
			<View className="rounded-md flex flex-col gap-2 bg-white w-full p-3">
				<Text className="text-FontColor font-RalewaySemiBold text-[18px]">
					Statystyki
				</Text>
				<View className="flex flex-row justify-between">
					<Text className="text-FontColor font-MontserratRegular text-[16px]">
						Rezerwacje
					</Text>
					<Text className="text-FontColor font-MontserratRegular text-[16px]">
						{user?.reservations.length}{' '}
						{getReservationLabel(user!.reservations.length)}
					</Text>
				</View>
				<View className="flex flex-row justify-between">
					<Text className="text-FontColor font-MontserratRegular text-[16px]">
						Zastosowane zniżki
					</Text>
					<Text className="text-FontColor font-MontserratRegular text-[16px]">
						{user?.totalLoyalityCount}{' '}
						{getDiscountLabel(user!.totalLoyalityCount)}
					</Text>
				</View>
				<Text className="text-FontColor font-MontserratRegular text-[16px]">
					Statystyki aut
				</Text>
				{Object.entries(carStatistics).map(([carId, count]) => (
					<View
						key={`${carId}-container`}
						className="flex flex-row justify-between"
					>
						<Text
							key={`${carId}-carName`}
							className="text-FontColor font-MontserratRegular text-[16px]"
						>
							&nbsp;&nbsp;&nbsp;{carIdToName[carId] || carId}
						</Text>
						<Text
							key={`${carId}-value`}
							className="text-FontColor font-MontserratRegular text-[16px]"
						>
							{count} {getReservationLabel(count)}
						</Text>
					</View>
				))}
				<View className="flex flex-row justify-between">
					<Text className="text-FontColor font-MontserratRegular text-[16px]">
						Rezerwacje w przeciągu roku
					</Text>
					<Text className="text-FontColor font-MontserratRegular text-[16px]">
						{lastYearReservationsCount}{' '}
						{getReservationLabel(lastYearReservationsCount)}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default ProfileScreen;
