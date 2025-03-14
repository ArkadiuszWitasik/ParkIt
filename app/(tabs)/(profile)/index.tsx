import { View, Text } from 'react-native';
import React from 'react';

const ProfileScreen = () => {
	return (
		<View className="flex-1 m-3 flex flex-col gap-2 items-center">
			<Text>Portfel</Text>
			<Text>Samochody</Text>
			<Text>Premium</Text>
		</View>
	);
};

export default ProfileScreen;
