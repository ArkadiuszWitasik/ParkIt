import React from 'react';
import { Tabs } from 'expo-router';

const TabLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen name="(profile)" />
			<Tabs.Screen name="(home)" />
			<Tabs.Screen name="(settings)" />
		</Tabs>
	);
};

export default TabLayout;
