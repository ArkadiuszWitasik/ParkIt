import { View, Text } from 'react-native';
import React from 'react';
import MainScreenCard from '@/components/Cards/MainScreenCard';
import BalanceMainView from '@/components/MainViews/BalanceMainView';

const HomeScreen = () => {
	return (
		<View className="flex-1 m-3 gap-5 bg-AppBackground">
			<View className="flex flex-row h-[150px] gap-5">
				<MainScreenCard
					path={'/(tabs)/(profile)/balance'}
					cardStyles="flex-1 rounded-md"
					backgroundColor="bg-Khaki"
					pressedBackgroundColor="bg-LightKhaki"
				>
					<BalanceMainView />
				</MainScreenCard>
				<MainScreenCard
					path={'/(tabs)/(profile)/cars'}
					cardStyles="flex-1 rounded-md"
					backgroundColor="bg-Khaki"
					pressedBackgroundColor="bg-LightKhaki"
				>
					<Text>Moje pojazdy</Text>
				</MainScreenCard>
			</View>
			<View className="h-[150px]">
				<MainScreenCard
					path={'/(tabs)/(profile)/loyality'}
					cardStyles="flex-grow rounded-md"
					backgroundColor="bg-Khaki"
					pressedBackgroundColor="bg-LightKhaki"
				>
					<Text>Program lojalnościowy</Text>
				</MainScreenCard>
			</View>
			<View className="h-[150px]">
				<MainScreenCard
					path={'/(tabs)/(reservations)'}
					cardStyles="flex-grow rounded-md"
					backgroundColor="bg-Khaki"
					pressedBackgroundColor="bg-LightKhaki"
				>
					<Text>Aktualna rezerwacja</Text>
				</MainScreenCard>
			</View>
		</View>
	);
};

export default HomeScreen;
