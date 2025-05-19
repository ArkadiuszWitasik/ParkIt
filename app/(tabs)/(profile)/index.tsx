import { View, Text } from 'react-native';
import React from 'react';
import UnstyledButton from '@/components/Buttons/UnstyledButton';
import { Href, router } from 'expo-router';
import { useUserStore } from '@/store/userStore';

const ProfileScreen = () => {
	const navigate = (path: Href) => {
		router.navigate(path);
	};

	const { user } = useUserStore();

	return (
		<View className="flex-1 m-3 flex flex-col gap-2 items-center">
			<Text className="text-FontColor font-MontserratRegular text-[16px]">
				Status konta: {user?.isPremiumAccount ? 'Premium' : 'Standard'}
			</Text>
			<UnstyledButton
				onPressFn={() => navigate('/(tabs)/(profile)/loyality')}
				w="w-full"
				bgColor="bg-white"
				bgPressedColor="bg-gray-300"
				otherStyles="flex justify-center items-center rounded-md"
			>
				<Text className="text-FontColor font-MontserratRegular">Premium</Text>
			</UnstyledButton>
			<UnstyledButton
				onPressFn={() => navigate('/(tabs)/(profile)/balance')}
				w="w-full"
				bgColor="bg-white"
				bgPressedColor="bg-gray-300"
				otherStyles="flex justify-center items-center rounded-md"
			>
				<Text className="text-FontColor font-MontserratRegular">Płatności</Text>
			</UnstyledButton>
			<UnstyledButton
				onPressFn={() => navigate('/(tabs)/(profile)/cars')}
				w="w-full"
				bgColor="bg-white"
				bgPressedColor="bg-gray-300"
				otherStyles="flex justify-center items-center rounded-md"
			>
				<Text className="text-FontColor font-MontserratRegular">Samochody</Text>
			</UnstyledButton>
			<View className="rounded-md flex flex-col gap-2 bg-white w-full p-3">
				<Text className="text-FontColor font-RalewaySemiBold text-[18px]">
					Statystyki
				</Text>
				<Text className="text-FontColor font-MontserratRegular text-[16px]">
					Rezerwacje - {user?.reservations.length}
				</Text>
				<Text className="text-FontColor font-MontserratRegular text-[16px]">
					Zastosowane zniżki
				</Text>
				<Text className="text-FontColor font-MontserratRegular text-[16px]">
					Statystyki aut
				</Text>
				<Text className="text-FontColor font-MontserratRegular text-[16px]">
					Rezerwacje w przeciągu roku
				</Text>
			</View>
		</View>
	);
};

export default ProfileScreen;
