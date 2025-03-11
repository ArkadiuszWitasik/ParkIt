import React from 'react';
import { Tabs } from 'expo-router';
import CustomHeader from '@/components/CustomHeader';

const TabLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="(home)"
				options={{ title: 'Główna', headerShown: false }}
			/>
			<Tabs.Screen
				name="(reservations)"
				options={{ title: 'Rezerwacje', headerShown: false }}
			/>
			<Tabs.Screen
				name="(profile)"
				options={{ title: 'Profil', headerShown: false }}
			/>
			<Tabs.Screen
				name="(settings)"
				options={{ title: 'Ustawienia', headerShown: false }}
			/>
		</Tabs>
	);
};

export default TabLayout;
