import { View, Text, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const SignInScreen = () => {
	const [loaded, error] = useFonts({
		'BebasNeue-Regular': require('../assets/fonts/BebasNeue-Regular.ttf'),
		'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<View className="border border-red-700 h-[70%] flex justify-center items-center gap-3">
			<Text className="font-BebasNeue text-[40px]">ParkIt</Text>
			<TextInput
				className="bg-gray-300 w-[50%] h-[50px] font-RalewayRegular"
				placeholder="e-mail"
			/>
			<TextInput
				className="bg-gray-300 w-[50%] h-[50px] font-RalewayRegular"
				placeholder="hasło"
			/>
			<Link
				href={'/(tabs)/(home)'}
				className="bg-gray-300 w-[50%] text-center h-[50px] font-RalewayRegular"
			>
				Zaloguj się
			</Link>
			<Link
				href={'/sign-up'}
				className="bg-gray-300 w-[50%] h-[50px] font-RalewayRegular"
			>
				Nie masz konta? Utwórz już dziś!
			</Link>
		</View>
	);
};

export default SignInScreen;
