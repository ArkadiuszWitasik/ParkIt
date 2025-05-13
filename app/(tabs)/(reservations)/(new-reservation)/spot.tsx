import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Href, router } from 'expo-router';
import { useReservationStore } from '@/store/reservationStore';
import { useParkingLotsStore } from '@/store/parkingLotsStore';

const ChooseSpotScreen = () => {
	const [selectedSpot, setSelectedSpot] = useState<string>('0');

	const { updateReservation, reservation } = useReservationStore();

	const { parkingLots } = useParkingLotsStore();

	const navigate = (path: Href) => {
		router.replace(path);
	};

	return (
		<View className="flex-1 mt-10 mr-3 ml-3 mb-3 flex flex-col gap-10 items-center ">
			<Text className="font-RalewayRegular text-[24px]">Wybierz miejsce</Text>
			<View className="flex flex-col gap-1 justify-center items-center">
				<Text className="font-RalewayRegular text-FontColor">
					Informacje o aktualnej rezerwacji
				</Text>
				<View className="flex flex-row">
					<Text className="font-RalewayRegular text-FontColor">
						{reservation.startDate?.toLocaleDateString()}{' '}
						{reservation.startTime?.toLocaleTimeString()}
					</Text>
					<Text className="font-RalewayRegular text-FontColor"> - </Text>
					<Text className="font-RalewayRegular text-FontColor">
						{reservation.endDate?.toLocaleDateString()}{' '}
						{reservation.endTime?.toLocaleTimeString()}
					</Text>
				</View>
				<Text className="font-RalewayRegular">
					{reservation.parking} - id parkingu
				</Text>
			</View>
			<View className="w-full">
				{parkingLots
					.find((parking) => parking.parkingId === reservation.parking)
					?.zones.map((zone) => (
						<View key={zone.zoneId} className="">
							<Text className="font-RalewayBold text-FontColor mb-2 ml-3">
								{zone.zoneName}
							</Text>
							<View className="w-full justify-center flex flex-row gap-2 flex-wrap">
								{zone.spots.map((spot) => (
									<Pressable
										key={`${spot.sportId}-${spot.spotName}-${zone.zoneName}`}
										onPress={() =>
											setSelectedSpot(
												`${spot.sportId}-${spot.spotName}-${zone.zoneName}`
											)
										}
										className={`${
											selectedSpot ===
											`${spot.sportId}-${spot.spotName}-${zone.zoneName}`
												? 'bg-AppPrimaryColor'
												: 'bg-white'
										} w-[30%] h-[50px] flex justify-center items-center rounded-md`}
									>
										<Text>{spot.spotName}</Text>
									</Pressable>
								))}
							</View>
						</View>
					))}
			</View>
			<PrimaryButton
				disabled={selectedSpot === '0'}
				onPressFn={() => {
					updateReservation({ spot: selectedSpot.toString() });
					navigate('/(tabs)/(reservations)');
				}}
				text="Zarezerwuj"
			/>
		</View>
	);
};

export default ChooseSpotScreen;
