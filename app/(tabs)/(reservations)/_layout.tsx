import React from 'react';
import { Stack } from 'expo-router';

const ReservationsLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
		</Stack>
	);
};

export default ReservationsLayout;
