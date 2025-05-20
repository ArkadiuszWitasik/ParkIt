import { View, Text, Switch } from 'react-native';
import React, { useState } from 'react';
import UnstyledButton from '@/components/Buttons/UnstyledButton';
import { signOut } from 'firebase/auth';
import { auth } from '@/db/store';
import { router } from 'expo-router';

const SettingsScreen = () => {
	const [isNotificationSwitchEnabled, setIsNotificationSwitchEnable] =
		useState(false);
	const toggleNotificationSwitch = () =>
		setIsNotificationSwitchEnable((previousState) => !previousState);

	const [isThemeSwitchEnabled, setIsThemeSwitchEnable] = useState(false);
	const toggleThemeSwitch = () =>
		setIsThemeSwitchEnable((previousState) => !previousState);

	const tmp = () => {
		console.log('tmp settings screen');
	};

	const handleSingOut = () => {
		signOut(auth)
			.then(() => {
				router.dismissAll();
			})
			.catch((error) => {
				console.error(error.message);
			});
	};

	return (
		<View className="flex-1 m-3 flex flex-col gap-2">
			<View className="bg-white rounded-md flex flex-col gap-2 p-3">
				<Text className="font-RalewaySemiBold text-FontColor text-[16px]">
					Ustawienia aplikacji
				</Text>
				<View className="flex justify-center rounded-md w-full h-[50px]">
					<View className="flex flex-row justify-between items-center">
						<Text className="text-FontColor font-MontserratRegular">
							Powiadomienia
						</Text>
						<Switch
							trackColor={{ false: '#767577', true: '#66affa' }}
							thumbColor={isNotificationSwitchEnabled ? '#fff' : '#f4f3f4'}
							ios_backgroundColor="#3e3e3e"
							onChange={toggleNotificationSwitch}
							value={isNotificationSwitchEnabled}
						/>
					</View>
				</View>
				<View className="flex justify-center rounded-md w-full h-[50px]">
					<View className="flex flex-row justify-between items-center">
						<Text className="text-FontColor font-MontserratRegular">Motyw</Text>
						<Switch
							trackColor={{ false: '#767577', true: '#66affa' }}
							thumbColor={isThemeSwitchEnabled ? '#fff' : '#f4f3f4'}
							ios_backgroundColor="#3e3e3e"
							onChange={toggleThemeSwitch}
							value={isThemeSwitchEnabled}
						/>
					</View>
				</View>
			</View>
			<View className="bg-white rounded-md flex flex-col gap-2 p-3">
				<Text className="font-RalewaySemiBold text-FontColor text-[16px]">
					Ustawienia konta
				</Text>
				<UnstyledButton
					onPressFn={() => tmp()}
					w="w-full"
					bgColor=""
					bgPressedColor="bg-gray-300"
					otherStyles="flex justify-center items-center rounded-md"
				>
					<Text className="text-FontColor font-MontserratRegular">
						Zmień adres e-mail
					</Text>
				</UnstyledButton>
				<UnstyledButton
					onPressFn={() => tmp()}
					w="w-full"
					bgColor=""
					bgPressedColor="bg-gray-300"
					otherStyles="flex justify-center items-center rounded-md"
				>
					<Text className="text-FontColor font-MontserratRegular">
						Zmień hasło
					</Text>
				</UnstyledButton>
				<UnstyledButton
					onPressFn={() => tmp()}
					w="w-full"
					bgColor=""
					bgPressedColor="bg-gray-300"
					otherStyles="flex justify-center items-center rounded-md"
				>
					<Text className="text-FontColor font-MontserratRegular">
						Ustawienia płatności
					</Text>
				</UnstyledButton>
			</View>
			<UnstyledButton
				onPressFn={() => handleSingOut()}
				w="w-full"
				bgColor="bg-white"
				bgPressedColor="bg-gray-300"
				otherStyles="flex justify-center items-center rounded-md"
			>
				<Text className="text-FontColor font-MontserratRegular">
					Wyloguj się
				</Text>
			</UnstyledButton>
			<UnstyledButton
				onPressFn={() => tmp()}
				w="w-full"
				bgColor="bg-red-100"
				bgPressedColor="bg-gray-300"
				otherStyles="flex justify-center items-center rounded-md"
			>
				<Text className="text-FontColor font-MontserratRegular">
					Usuń konto
				</Text>
			</UnstyledButton>
		</View>
	);
};

export default SettingsScreen;
