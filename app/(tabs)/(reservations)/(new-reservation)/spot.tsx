import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Href, router } from 'expo-router';
import { useReservationStore } from '@/store/reservationStore';
import { useParkingLotsStore } from '@/store/parkingLotsStore';
import { FlashList } from '@shopify/flash-list';
import ParkingSpotCard from '@/components/Cards/ParkingSpotCard';

const ChooseSpotScreen = () => {
	const [selectedSpot, setSelectedSpot] = useState<string>('0');

	const { updateReservation, reservation } = useReservationStore();

	const { parkingLots } = useParkingLotsStore();

	const parkingLotData = parkingLots.find(
		(parking) => parking.parkingId === reservation.parkingId
	);

	const navigateForward = (path: Href) => {
		router.push(path);
	};

	const navigateBackwards = () => {
		router.back();
	};

	return (
		<View className="flex-1 mt-10 mr-3 ml-3 mb-3 flex flex-col gap-10 items-center">
			<Text className="font-RalewayRegular text-[24px]">Wybierz miejsce</Text>
			<View className="flex flex-col gap-1 justify-center items-center">
				<Text className="font-RalewayRegular text-FontColor">
					Dostępne miejsca w {parkingLotData?.parkingName}
				</Text>
			</View>
			<View className="w-full flex h-[250px]">
				{parkingLotData && (
					<FlashList
						data={parkingLotData?.zones}
						extraData={selectedSpot}
						estimatedItemSize={10}
						renderItem={({ item }) => (
							<ParkingSpotCard
								key={item.zoneId}
								zoneId={item.zoneId}
								zoneName={item.zoneName}
								spots={item.spots}
								selectedSpot={selectedSpot}
								onPressFn={setSelectedSpot}
							/>
						)}
					/>
				)}
			</View>
			<View className="flex flex-row gap-2">
				<PrimaryButton onPressFn={() => navigateBackwards()} text="Powrót" />
				<PrimaryButton
					disabled={selectedSpot === '0'}
					onPressFn={() => {
						updateReservation({ spotId: selectedSpot.toString() });
						navigateForward('/(tabs)/(reservations)/(new-reservation)/summary');
					}}
					text="Zarezerwuj"
				/>
			</View>
		</View>
	);
};

export default ChooseSpotScreen;
