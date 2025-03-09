import { View, Text } from 'react-native';
import React from 'react';
import MainScreenCard from '@/components/Cards/MainScreenCard';

const HomeScreen = () => {
	return (
		<View className="border border-red-500 flex-1 p-3 gap-4">
			<View>
				<Text>Gdzie jedziemy tym razem?</Text>
			</View>
			<View className="flex flex-row gap-6 h-[150px] w-full">
				{/* Sizing of these cards needs to be fixed. */}
				{/* They Suppose to be even in width */}
				<MainScreenCard
					path={'/(tabs)/(profile)/balance'}
					cardStyles="flex-grow rounded-md"
					backgroundColor="bg-gray-300"
				>
					<Text>Stan konta</Text>
				</MainScreenCard>
				<MainScreenCard
					path={'/(tabs)/(profile)/cars'}
					cardStyles="flex-grow rounded-md"
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
