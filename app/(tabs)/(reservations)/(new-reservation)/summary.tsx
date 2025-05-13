import { View, Text } from 'react-native';
import React from 'react';
import { useReservationStore } from '@/store/reservationStore';
import { useUserStore } from '@/store/userStore';
import { useParkingLotsStore } from '@/store/parkingLotsStore';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Href, router } from 'expo-router';

const SummaryScreen = () => {
	const { reservation, updateReservation } = useReservationStore();
	const { user } = useUserStore();
	const { parkingLots } = useParkingLotsStore();

	const choosenParkingLotName = parkingLots.find(
		(parking) => parking.parkingId === reservation.parkingId
	)?.parkingName;

	const choosenParkingLotRate = parkingLots.find(
		(parking) => parking.parkingId === reservation.parkingId
	)?.parkingRatePerMin;

	const choosenCar = user?.cars.find((car) => car.carId === reservation.carId);

	const zoneAndSpotSplit = reservation.spotId?.split('-');

	const choosenZoneAndSpot = zoneAndSpotSplit
		? zoneAndSpotSplit![2] + ' - ' + zoneAndSpotSplit![1]
		: ' ';

	const reservationPrice =
		reservation.endTime && reservation.startTime && choosenParkingLotRate
			? (reservation.endTime.getMinutes() -
					reservation.startTime.getMinutes()) *
			  choosenParkingLotRate
			: 0;

	const navigateForward = (path: Href) => {
		router.push(path);
	};

	const navigateBackwards = () => {
		router.back();
	};

	return (
		<View className="flex-1 mt-10 mr-3 ml-3 mb-3 flex flex-col gap-10 items-center">
			<Text className="font-RalewayRegular text-[24px]">
				Podsumowanie rezerwacji
			</Text>
			<View className=" flex flex-col gap-3 w-[75%]">
				<View className=" flex flex-row justify-between">
					<Text className="text-FontColor font-RalewayRegular">
						Data rezerwacji
					</Text>
					<Text className="text-FontColor font-RalewayRegular">
						{reservation.date?.toLocaleDateString()}
					</Text>
				</View>
				<View className=" flex flex-row justify-between">
					<Text className="text-FontColor font-RalewayRegular">
						Godziny rezerwacji
					</Text>
					<Text className="text-FontColor font-RalewayRegular">
						{reservation.startTime?.toLocaleTimeString()} -{' '}
						{reservation.endTime?.toLocaleTimeString()}
					</Text>
				</View>
				<View className=" flex flex-row justify-between">
					<Text className="text-FontColor font-RalewayRegular">
						Wybrane auto
					</Text>
					<Text className="text-FontColor font-RalewayRegular">
						{choosenCar?.carName}, {choosenCar?.carRegistrationNumber}
					</Text>
				</View>
				<View className=" flex flex-row justify-between">
					<Text className="text-FontColor font-RalewayRegular">
						Wybrany parking
					</Text>
					<Text className="text-FontColor font-RalewayRegular">
						{choosenParkingLotName}
					</Text>
				</View>
				<View className=" flex flex-row justify-between">
					<Text className="text-FontColor font-RalewayRegular">
						Strefa i numer miejsca
					</Text>
					<Text className="text-FontColor font-RalewayRegular">
						{choosenZoneAndSpot}
					</Text>
				</View>
				<View className=" flex flex-row justify-between">
					<Text className="text-FontColor font-RalewaySemiBold">
						Do zapłaty
					</Text>
					<Text className="text-FontColor font-RalewaySemiBold">
						{reservationPrice} zł
					</Text>
				</View>
			</View>
			<View className="flex flex-row gap-2">
				<PrimaryButton onPressFn={() => navigateBackwards()} text="Powrót" />
				<PrimaryButton
					onPressFn={() => {
						updateReservation({ price: reservationPrice });
						navigateForward('/(tabs)/(reservations)');
					}}
					text="Zapłać"
				/>
			</View>
		</View>
	);
};

export default SummaryScreen;
