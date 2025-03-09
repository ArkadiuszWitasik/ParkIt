import { View, Text } from 'react-native';
import React from 'react';
import MainScreenCard from '@/components/Cards/MainScreenCard';

const HomeScreen = () => {
	return (
		<View className="flex-1 m-3 gap-4">
			<View>
				<Text>Gdzie jedziemy tym razem?</Text>
			</View>
			<View className="flex flex-row h-[150px] gap-3">
				<MainScreenCard
					path={'/(tabs)/(profile)/balance'}
					cardStyles="flex-1 rounded-md"
					backgroundColor="bg-gray-300"
				>
					<Text>Stan konta</Text>
				</MainScreenCard>
				<MainScreenCard
					path={'/(tabs)/(profile)/cars'}
					cardStyles="flex-1 rounded-md"
					backgroundColor="bg-gray-300"
				>
					<Text>Moje pojazdy</Text>
				</MainScreenCard>
			</View>
			<View className="h-[150px]">
				<MainScreenCard
					path={'/(tabs)/(profile)/loyality'}
					cardStyles="flex-grow rounded-md"
					backgroundColor="bg-gray-300"
				>
					<Text>Program lojalnościowy</Text>
				</MainScreenCard>
			</View>
			<View className="h-[150px]">
				<MainScreenCard
					path={'/(tabs)/(home)'}
					cardStyles="flex-grow rounded-md"
					backgroundColor="bg-gray-300"
				>
					<Text>Aktualna rezerwacja</Text>
				</MainScreenCard>
			</View>
		</View>
	);
};

export default HomeScreen;
