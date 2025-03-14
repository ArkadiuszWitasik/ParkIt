import { View, Text, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { Href, Link, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import UnstyledButton from '@/components/Buttons/UnstyledButton';

SplashScreen.preventAutoHideAsync();

const SignInScreen = () => {
	const [loaded, error] = useFonts({
		'BebasNeue-Regular': require('../assets/fonts/BebasNeue-Regular.ttf'),
		'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
		'Raleway-SemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
		'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
		'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	const navigate = (path: Href) => {
		router.navigate(path);
		// router.replace(path);
	};

	return (
		<View className="flex-1 flex justify-between items-center bg-AppBackground mt-[25vh] mb-[5vh]">
			<View className="w-[80%] flex gap-3">
				<Text className="font-BebasNeueRegular text-[56px] text-center text-FontColor">
					Park It
				</Text>
				<TextInput
					className="bg-SecoundLayer w-full h-[50px] px-4 font-MontserratRegular rounded-md placeholder:color-GrayFontColor"
					placeholder="e-mail"
				/>
				<TextInput
					className="bg-SecoundLayer w-full h-[50px] px-4 font-MontserratRegular rounded-md placeholder:color-GrayFontColor"
					placeholder="hasło"
				/>

				<PrimaryButton
					text="Zaloguj się"
					onPressFn={() => navigate('/(tabs)/(home)')}
				/>

				<View className="flex flex-row justify-between">
					<Text className="text-FontColor font-MontserratRegular">
						Zapamiętaj mnie
					</Text>
					<Text className="text-FontColor font-MontserratRegular">
						Resetuj hasło
					</Text>
				</View>
			</View>

			<UnstyledButton onPressFn={() => navigate('/sign-up')}>
				<Text className="text-FontColor font-MontserratRegular">
					Nie masz konta?{' '}
				</Text>
				<Text className="text-FontColor font-MontserratSemiBold">
					Utwórz już dziś!
				</Text>
			</UnstyledButton>
		</View>
	);
};

export default SignInScreen;
