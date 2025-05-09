import React from 'react';
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import Stepper from '@/components/Stepper';

const NewReservationLayout = () => {
	return (
		<>
			<Stepper />
			<Stack>
				<Stack.Screen name="datetime" options={{ headerShown: false }} />
				<Stack.Screen name="parking" options={{ headerShown: false }} />
				<Stack.Screen name="spot" options={{ headerShown: false }} />
			</Stack>
		</>
	);
};

export default NewReservationLayout;
