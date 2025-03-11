import React from 'react';
import { Stack } from 'expo-router';

const ProfileLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="balance" options={{ headerShown: false }} />
			<Stack.Screen name="cars" options={{ headerShown: false }} />
			<Stack.Screen name="loyality" options={{ headerShown: false }} />
		</Stack>
	);
};

export default ProfileLayout;
