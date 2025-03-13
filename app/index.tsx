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
		'Raleway-SemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
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
		<View className="flex-1 flex justify-between items-center bg-AppBackground mt-[25vh] mb-[5vh]">
			<View className="w-[80%] flex gap-3">
				<Text className="font-BebasNeueRegular text-[56px] text-center text-FontColor">
					Park It
				</Text>
				<TextInput
					className="bg-SecoundLayer w-full h-[50px] px-4 font-RalewayRegular rounded-md placeholder:color-GrayFontColor"
					placeholder="e-mail"
				/>
				<TextInput
					className="bg-SecoundLayer w-full h-[50px] px-4 font-RalewayRegular rounded-md placeholder:color-GrayFontColor"
					placeholder="hasło"
				/>

				{/* Here will be button */}
				<Link
					href={'/(tabs)/(home)'}
					className="bg-Khaki w-full text-center pt-4 h-[50px] font-RalewayRegular rounded-md"
				>
					<Text>Zaloguj się</Text>
				</Link>

				<View className="flex flex-row justify-between">
					<Text className="text-FontColor font-RalewayRegular">
						Zapamiętaj mnie
					</Text>
					<Text className="text-FontColor font-RalewayRegular">
						Resetuj hasło
					</Text>
				</View>
			</View>

			{/* Here will be button */}
			<Link
				href={'/sign-up'}
				className="w-[80%] h-[50px] font-RalewayRegular color-FontColor text-center"
			>
				Nie masz konta?{' '}
				<Text className="text-FontColor font-RalewaySemiBold">
					Utwórz już dziś!
				</Text>
			</Link>
		</View>
	);
};

export default SignInScreen;
