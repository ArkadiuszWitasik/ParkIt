import React from 'react';
import { Tabs } from 'expo-router';

const TabLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="(home)"
				options={{ title: 'Główna', headerShown: true }}
			/>
			<Tabs.Screen
				name="(reservations)"
				options={{ title: 'Rezerwacje', headerShown: true }}
			/>
			<Tabs.Screen
				name="(profile)"
				options={{ title: 'Profil', headerShown: true }}
			/>
			<Tabs.Screen
				name="(settings)"
				options={{ title: 'Ustawienia', headerShown: true }}
			/>
		</Tabs>
	);
};

export default TabLayout;
