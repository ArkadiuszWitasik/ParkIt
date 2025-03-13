import React from 'react';
import { Tabs } from 'expo-router';
import HomeIcon from '@/assets/Icons/HomeIcon';
import CalendarIcon from '@/assets/Icons/CalendarIcon';
import ProfileIcon from '@/assets/Icons/ProfileIcon';
import SettingsIcon from '@/assets/Icons/SettingsIcon';
import { View } from 'react-native';

const TabLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					position: 'absolute',
					bottom: 35,
					backgroundColor: '#ffffff',
					width: '60%',
					height: 65,
					borderRadius: '12%',
					marginLeft: '20%',
					margin: 0,
				},
			}}
		>
			<Tabs.Screen
				name="(home)"
				options={{
					title: 'Główna',
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View
							className={`${
								focused ? 'bg-Khaki' : 'bg-ThirdLayer'
							} w-[50] h-[50] mt-[25px] rounded-[50] flex justify-center items-center`}
						>
							<HomeIcon
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="(reservations)"
				options={{
					title: 'Rezerwacje',
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View
							className={`${
								focused ? 'bg-Khaki' : 'bg-ThirdLayer'
							} w-[50] h-[50] mt-[25px] rounded-[50] flex justify-center items-center`}
						>
							<CalendarIcon
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="(profile)"
				options={{
					title: 'Profil',
					headerShown: false,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<View
							className={`${
								focused ? 'bg-Khaki' : 'bg-ThirdLayer'
							} w-[50] h-[50] mt-[25px] rounded-[50] flex justify-center items-center`}
						>
							<ProfileIcon
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="(settings)"
				options={{
					title: 'Ustawienia',
					headerShown: false,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<View
							className={`${
								focused ? 'bg-Khaki' : 'bg-ThirdLayer'
							} w-[50] h-[50] mt-[25px] rounded-[50] flex justify-center items-center`}
						>
							<SettingsIcon
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabLayout;
