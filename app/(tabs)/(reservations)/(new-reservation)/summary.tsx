import { View, Text, ActivityIndicator, Modal } from 'react-native';
import React, { useState } from 'react';
import { useReservationStore } from '@/store/reservationStore';
import { useUserStore } from '@/store/userStore';
import { useParkingLotsStore } from '@/store/parkingLotsStore';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Href, router } from 'expo-router';

const SummaryScreen = () => {
	const [isPaymentInProgress, setIsPlaymentInProgress] =
		useState<boolean>(false);

	const { reservation } = useReservationStore();
	const { user, updateUser } = useUserStore();
	const { parkingLots } = useParkingLotsStore();

	const choosenParkingLotName = parkingLots.find(
		(parking) => parking.parkingId === reservation!.reservationParkingId
	)?.parkingName;

	const choosenCar = user?.cars.find((car) => car.carId === reservation!.carId);

	const zoneAndSpotSplit = reservation!.reservationSpotId?.split('-');

	const choosenZoneAndSpot = zoneAndSpotSplit
		? zoneAndSpotSplit![2] + ' - ' + zoneAndSpotSplit![1]
		: ' ';

	const navigateForward = (path: Href) => {
		router.replace(path);
	};

	const navigateBackwards = () => {
		router.back();
	};

	//TODO: Zrobić funkcję, która będzie odpowiedzialna za logikę zakończenia zapłaty
	const handlePayment = () => {
		setIsPlaymentInProgress(true);

		if (user && reservation) {
			const userReservationList = user.reservations;

			updateUser({
				...user,
				reservations: [...userReservationList, reservation],
			});
		}

		setTimeout(() => {
			setIsPlaymentInProgress(false);
			navigateForward('/(tabs)/(reservations)');
		}, 2000);
	};

	return (
		<View className="flex-1 mr-3 ml-3 mb-3 flex flex-col gap-10 items-center">
			<Modal visible={isPaymentInProgress}>
				<View className="flex-1 justify-center items-center bg-AppBackground gap-3">
					<Text className="text-[56px] font-BebasNeueRegular pt-[40px] text-FontColor">
						Park It
					</Text>
					<View className="flex flex-col justify-center items-center">
						<Text className="text-2xl font-RalewaySemiBold text-FontColor">
							Przetwarzanie płatności
						</Text>
						<Text className="text-2xl font-RalewaySemiBold text-FontColor">
							za rezerwację...
						</Text>
					</View>
					<ActivityIndicator size="large" className="mt-3" />
				</View>
			</Modal>
			<Text className="font-RalewayRegular text-[24px]">
				Podsumowanie rezerwacji
			</Text>
			<View className=" flex flex-col gap-3 w-[75%]">
				<View className=" flex flex-row justify-between">
					<Text className="text-FontColor font-RalewayRegular">
						Data rezerwacji
					</Text>
					<Text className="text-FontColor font-RalewayRegular">
						{reservation!.reservationDate?.toLocaleDateString()}
					</Text>
				</View>
				<View className=" flex flex-row justify-between">
					<Text className="text-FontColor font-RalewayRegular">
						Godziny rezerwacji
					</Text>
					<Text className="text-FontColor font-RalewayRegular">
						{reservation!.reservationStartTime?.toLocaleTimeString()} -{' '}
						{reservation!.reservationEndTime?.toLocaleTimeString()}
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
						{reservation.reservationPrice} zł
					</Text>
				</View>
			</View>
			<View className="flex flex-row gap-2">
				<PrimaryButton onPressFn={() => navigateBackwards()} text="Powrót" />
				<PrimaryButton onPressFn={() => handlePayment()} text="Zapłać" />
			</View>
		</View>
	);
};

export default SummaryScreen;
