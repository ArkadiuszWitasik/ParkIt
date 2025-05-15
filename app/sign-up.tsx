import {
	View,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import React from 'react';
import { Href, Link, router } from 'expo-router';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import UnstyledButton from '@/components/Buttons/UnstyledButton';

const SignUpScreen = () => {
	const navigate = (path: Href) => {
		router.navigate(path);
		// router.replace(path);
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View className="flex-1 flex justify-between items-center bg-AppBackground pt-[25vh] mb-[5vh]">
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
						text="Zarejestruj się"
						onPressFn={() => navigate('/(tabs)/(home)')}
					/>
				</View>

				<UnstyledButton
					onPressFn={() => navigate('/')}
					bgColor=""
					bgPressedColor="bg-gray-300"
					otherStyles="flex items-center justify-center rounded-md"
				>
					<Text className="text-FontColor font-MontserratRegular">
						Masz już konto?{' '}
					</Text>
					<Text className="text-FontColor font-MontserratSemiBold">
						Zaloguj się!
					</Text>
				</UnstyledButton>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default SignUpScreen;
