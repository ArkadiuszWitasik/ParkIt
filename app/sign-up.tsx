import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const SignUpScreen = () => {
	return (
		<View className="border border-red-700 h-[70%] flex justify-center items-center gap-3">
			<Text>ParkIt</Text>
			<TextInput className="bg-gray-300 w-[50%]" placeholder="e-mail" />
			<TextInput className="bg-gray-300 w-[50%]" placeholder="hasło" />
			<Link href={'/(tabs)/(home)'} className="bg-gray-300 w-[50%] text-center">
				Zarejestruj się
			</Link>
			<Link href={'/'} className="border border-red-500">
				Masz już konto? Zaloguj się!
			</Link>
		</View>
	);
};

export default SignUpScreen;
