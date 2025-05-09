import React from 'react';
import { Stack } from 'expo-router';

const ReservationsLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="(new-reservation)" options={{ headerShown: false }} />
		</Stack>
	);
};

export default ReservationsLayout;
