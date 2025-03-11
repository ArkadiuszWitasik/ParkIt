import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const SignInScreen = () => {
	return (
		<View className="border border-red-700 h-[70%] flex justify-center items-center gap-3">
			<Text>ParkIt</Text>
			<TextInput
				className="bg-gray-300 w-[50%] h-[50px]"
				placeholder="e-mail"
			/>
			<TextInput className="bg-gray-300 w-[50%] h-[50px]" placeholder="hasło" />
			<Link
				href={'/(tabs)/(home)'}
				className="bg-gray-300 w-[50%] text-center h-[50px]"
			>
				Zaloguj się
			</Link>
			<Link href={'/sign-up'} className="bg-gray-300 w-[50%] h-[50px]">
				Nie masz konta? Utwórz już dziś!
			</Link>
		</View>
	);
};

export default SignInScreen;
