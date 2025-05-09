import { View, Text } from 'react-native';
import React from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Href, router } from 'expo-router';
import { useReservationStore } from '@/store/reservationStore';

const spotMockUP = [
	{
		id: 1,
		name: 'Strefa A',
		spots: [
			{
				id: 1,
				name: 'A01',
				status: 'free',
			},
			{
				id: 2,
				name: 'A02',
				status: 'taken',
			},
			{
				id: 3,
				name: 'A03',
				status: 'reservation',
			},
			{
				id: 4,
				name: 'A04',
				status: 'reservation',
			},
			{
				id: 5,
				name: 'A05',
				status: 'free',
			},
			{
				id: 6,
				name: 'A06',
				status: 'reservation',
			},
			{
				id: 7,
				name: 'A07',
				status: 'free',
			},
			{
				id: 8,
				name: 'A08',
				status: 'taken',
			},
			{
				id: 9,
				name: 'A09',
				status: 'free',
			},
		],
	},
];

const ChooseSpotScreen = () => {
	const { updateReservation, reservation } = useReservationStore();

	const navigate = (path: Href) => {
		router.replace(path);
	};

	return (
		<View className="flex-1 mt-10 mr-3 ml-3 mb-3 flex flex-col gap-10 items-center ">
			<Text className="font-RalewayRegular text-[24px]">Wybierz miejsce</Text>
			<View className="flex flex-col gap-1 justify-center items-center">
				<Text className="font-RalewayRegular">
					Informacje o aktualnej rezerwacji
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
				<Text className="font-RalewayRegular">
					{reservation.parking} - id parkingu
				</Text>
			</View>
			<View className="w-full">
				{spotMockUP.map((zone) => (
					<View key={zone.id}>
						<Text>{zone.name}</Text>
						<View className="w-full justify-center flex flex-row gap-2 flex-wrap">
							{zone.spots.map((spot) => (
								<View
									key={spot.id}
									className="border border-blue-500 w-[30%] h-[50px]"
								>
									<Text>{spot.name}</Text>
								</View>
							))}
						</View>
					</View>
				))}
			</View>
			<PrimaryButton
				onPressFn={() => navigate('/(tabs)/(reservations)')}
				text="Zarezerwuj"
			/>
		</View>
	);
};

export default ChooseSpotScreen;
