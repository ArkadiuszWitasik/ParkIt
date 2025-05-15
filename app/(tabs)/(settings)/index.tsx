import { View, Text } from 'react-native';
import React from 'react';
import UnstyledButton from '@/components/Buttons/UnstyledButton';
import Divider from '@/components/Divider';

const SettingsScreen = () => {
	const tmp = () => {
		console.log('tmp settings screen');
	};

	return (
		<View className="flex-1 m-3 flex flex-col gap-2">
			<View className="bg-white rounded-md flex flex-col gap-2 p-3">
				<Text className="font-RalewaySemiBold text-FontColor text-[16px]">
					Ustawienia aplikacji
				</Text>
				<UnstyledButton
					onPressFn={() => tmp()}
					w="w-full"
					bgColor=""
					bgPressedColor="bg-gray-300"
					otherStyles="flex justify-center items-center rounded-md"
				>
					<Text className="text-FontColor font-MontserratRegular">
						Powiadomienia
					</Text>
				</UnstyledButton>
				<UnstyledButton
					onPressFn={() => tmp()}
					w="w-full"
					bgColor=""
					bgPressedColor="bg-gray-300"
					otherStyles="flex justify-center items-center rounded-md"
				>
					<Text className="text-FontColor font-MontserratRegular">Motyw</Text>
				</UnstyledButton>
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
				onPressFn={() => tmp()}
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
