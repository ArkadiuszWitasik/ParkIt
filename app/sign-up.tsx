import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const SignUpScreen = () => {
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
					<Text>Zarejestruj się</Text>
				</Link>
			</View>

			{/* Here will be button */}
			<Link
				href={'/'}
				className="w-[80%] h-[50px] font-RalewayRegular color-FontColor text-center"
			>
				Masz już konto?{' '}
				<Text className="text-FontColor font-RalewaySemiBold">
					Zaloguj się!
				</Text>
			</Link>
		</View>
	);
};

export default SignUpScreen;
