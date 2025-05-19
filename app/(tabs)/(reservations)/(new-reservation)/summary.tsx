import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useReservationStore } from '@/store/reservationStore';
import { useUserStore } from '@/store/userStore';
import { useParkingLotsStore } from '@/store/parkingLotsStore';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { router } from 'expo-router';
import PaymentModal from '@/components/Modals/PaymentModal';

const SummaryScreen = () => {
	const [isPaymentInProgress, setIsPlaymentInProgress] =
		useState<boolean>(false);

	const { reservation } = useReservationStore();
	const { user } = useUserStore();
	const { parkingLots } = useParkingLotsStore();

	const choosenParkingLotName = parkingLots.find(
		(parking) => parking.parkingId === reservation!.reservationParkingId
	)?.parkingName;

	const choosenCar = user?.cars.find((car) => car.carId === reservation!.carId);

	const zoneAndSpotSplit = reservation!.reservationSpotId?.split('-');

	const choosenZoneAndSpot = zoneAndSpotSplit
		? zoneAndSpotSplit![2] + ' - ' + zoneAndSpotSplit![1]
		: ' ';

	const navigateBackwards = () => {
		router.back();
	};

	return (
		<View className="flex-1 mr-3 ml-3 mb-3 mt-10 flex flex-col gap-10 items-center">
			<PaymentModal
				paymentType="reservation"
				isModalVisible={isPaymentInProgress}
				setIsModalVisible={setIsPlaymentInProgress}
				paymentAmount={reservation.reservationPrice * -1}
				navigate={'/(tabs)/(home)'}
				reservation={reservation}
			/>
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
				{user?.isDiscountApplyed &&
					(user.isPremiumAccount ? (
						<View className="flex flex-row justify-between">
							<Text className="text-FontColor font-RalewayRegular">Zniżka</Text>
							<Text className="text-FontColor font-RalewayRegular">-15%</Text>
						</View>
					) : (
						<View className="flex flex-row justify-between">
							<Text className="text-FontColor font-RalewayRegular">Zniżka</Text>
							<Text className="text-FontColor font-RalewayRegular">-5%</Text>
						</View>
					))}
				<View className="flex flex-row justify-between">
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
				<PrimaryButton
					onPressFn={() => setIsPlaymentInProgress(true)}
					text="Zapłać"
				/>
			</View>
		</View>
	);
};

export default SummaryScreen;
