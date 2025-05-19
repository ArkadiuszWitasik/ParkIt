import React from 'react';
import { Stack, usePathname } from 'expo-router';
import Stepper from '@/components/Stepper';

const NewReservationLayout = () => {
	const pathname = usePathname();

	return (
		<>
			{pathname !== '/summary' && <Stepper />}
			<Stack>
				<Stack.Screen name="datetime" options={{ headerShown: false }} />
				<Stack.Screen name="parking" options={{ headerShown: false }} />
				<Stack.Screen name="spot" options={{ headerShown: false }} />
				<Stack.Screen name="summary" options={{ headerShown: false }} />
			</Stack>
		</>
	);
};

export default NewReservationLayout;
