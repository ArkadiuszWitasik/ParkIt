import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Href, router } from 'expo-router';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { useReservationStore } from '@/store/reservationStore';
import ParkingCard from '@/components/Cards/ParkingCard';

// Trzeba zrobić coś takiego, że zapisuje id parkingu, a wszystkie parkingi będą pobierać się z firebase do store

const parkingMockUP = [
	{
		id: 1,
		name: 'Aura',
		spacesLeft: 42,
	},
	{
		id: 2,
		name: 'Galeria Warmińska',
		spacesLeft: 10,
	},
];

const ChooseParkingScreen = () => {
	const { updateReservation, reservation } = useReservationStore();

	const [selectedParking, setSelectedParking] = useState<number>(0);

	const navigate = (path: Href) => {
		router.replace(path);
	};

	return (
		<View className="flex-1 mt-10 mr-3 ml-3 mb-3 flex flex-col gap-10 items-center ">
			<Text className="font-RalewayRegular text-[24px]">Wybierz parking</Text>
			<View className="flex flex-col gap-1 justify-center items-center">
				<Text className="font-RalewayRegular">
					Informacje o miejscach wyświetlone dla przedziału
				</Text>
				<View className="flex flex-row">
					<Text className="font-RalewayRegular">
						{reservation.startDate?.toLocaleDateString()}{' '}
						{reservation.startTime?.toLocaleTimeString()}
					</Text>
					<Text className="font-RalewayRegular"> - </Text>
					<Text className="font-RalewayRegular">
						{reservation.endDate?.toLocaleDateString()}{' '}
						{reservation.endTime?.toLocaleTimeString()}
					</Text>
				</View>
			</View>

			<View className=" w-full flex flex-col gap-3">
				{parkingMockUP.map((parking) => (
					<ParkingCard
						key={parking.id}
						parkingId={parking.id}
						parkingName={parking.name}
						parkingSpacesLeft={parking.spacesLeft}
						selectedParking={selectedParking}
						onPressFn={() => setSelectedParking(parking.id)}
					/>
				))}
			</View>

			<PrimaryButton
				disabled={selectedParking === 0}
				onPressFn={() => {
					updateReservation({ parking: selectedParking });
					navigate('/(tabs)/(reservations)/(new-reservation)/spot');
				}}
				text="Wybierz miejsce"
			/>
		</View>
	);
};

export default ChooseParkingScreen;
