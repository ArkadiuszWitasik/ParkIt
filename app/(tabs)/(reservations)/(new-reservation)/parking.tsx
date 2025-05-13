import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Href, router } from 'expo-router';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { useReservationStore } from '@/store/reservationStore';
import ParkingCard from '@/components/Cards/ParkingCard';
import { FlashList } from '@shopify/flash-list';
import { useParkingLotsStore } from '@/store/parkingLotsStore';

const ChooseParkingScreen = () => {
	const { updateReservation, reservation } = useReservationStore();

	const { parkingLots } = useParkingLotsStore();

	const [selectedParking, setSelectedParking] = useState<string>('0');

	const navigateForward = (path: Href) => {
		router.push(path);
	};

	const navigateBackwards = () => {
		router.back();
	};

	return (
		<View className="flex-1 mt-10 mr-3 ml-3 mb-3 flex flex-col gap-10 items-center ">
			<Text className="font-RalewayRegular text-[24px]">Wybierz parking</Text>
			<View className="flex flex-col gap-1 justify-center items-center">
				<Text className="font-RalewayRegular text-center">
					Ilość dostępnych miejsc w przedziale
				</Text>
				<View className="flex flex-row">
					<Text className="font-RalewayRegular">
						{reservation.date?.toLocaleDateString()}{' '}
						{reservation.startTime?.toLocaleTimeString()}
					</Text>
					<Text className="font-RalewayRegular"> - </Text>
					<Text className="font-RalewayRegular">
						{reservation.endTime?.toLocaleTimeString()}
					</Text>
				</View>
			</View>

			<View className="h-[200px] w-full flex">
				<FlashList
					data={parkingLots}
					extraData={selectedParking}
					estimatedItemSize={10}
					renderItem={({ item }) => (
						<ParkingCard
							key={item.parkingId}
							parkingId={item.parkingId}
							parkingName={item.parkingName}
							parkingSpacesLeft={item.parkingSpacesLeft}
							selectedParking={selectedParking}
							onPressFn={() => setSelectedParking(item.parkingId)}
						/>
					)}
				/>
			</View>

			<View className="flex flex-row gap-2">
				<PrimaryButton onPressFn={() => navigateBackwards()} text="Powrót" />
				<PrimaryButton
					disabled={selectedParking === '0'}
					onPressFn={() => {
						updateReservation({ parkingId: selectedParking });
						navigateForward('/(tabs)/(reservations)/(new-reservation)/spot');
					}}
					text="Wybierz miejsce"
				/>
			</View>
		</View>
	);
};

export default ChooseParkingScreen;
