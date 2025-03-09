import React from 'react';
import { Stack } from 'expo-router';

const ProfileLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" />
			<Stack.Screen name="balance" />
			<Stack.Screen name="cars" />
			<Stack.Screen name="loyality" />
		</Stack>
	);
};

export default ProfileLayout;
