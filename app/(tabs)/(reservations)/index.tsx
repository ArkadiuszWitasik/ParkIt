import { View, Text } from 'react-native';
import React from 'react';

const ReservationsScreen = () => {
	return (
		<View className="flex-1 m-3 border border-sky-500 flex flex-col gap-10 justify-center items-center">
			<Text>Nowa rezeracja</Text>
			<Text>Aktualne rezerwacje</Text>
			<Text>Historia</Text>
		</View>
	);
};

export default ReservationsScreen;
