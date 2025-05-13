import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Href, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import UnstyledButton from '@/components/Buttons/UnstyledButton';
import CustomInput from '@/components/CustomInput';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../db/store';
import { useParkingLotsStore } from '@/store/parkingLotsStore';
import { signInWithEmailAndPassword } from 'firebase/auth';

SplashScreen.preventAutoHideAsync();

const SignInScreen = () => {
	const [loaded, error] = useFonts({
		'BebasNeue-Regular': require('../assets/fonts/BebasNeue-Regular.ttf'),
		'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
		'Raleway-SemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
		'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
		'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
	});

	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState<string>('');

	const { setParkingLots } = useParkingLotsStore();

	const fetchParkingLots = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, 'parking_lots'));
			const data = querySnapshot.docs.map((doc) => ({
				parkingId: doc.id,
				parkingName: doc.data().parkingName,
				parkingLocation: doc.data().parkingLocation || '',
				parkingSpacesLeft: doc.data().parkingSpacesLeft || 0,
				zones: doc.data().zones || [],
			}));
			setParkingLots(data);
		} catch (error) {
			console.error('Błąd podczas pobierania danych:', error);
		}
	};

	// const handleSignIn = async (email: string, password: string) => {
	// 	try {
	// 		const userCredential = await signInWithEmailAndPassword(
	// 			auth,
	// 			email,
	// 			password
	// 		);
	// 		console.log('Zalogowano użytkownika:', userCredential.user);
	// 		navigate('/(tabs)/(home)');
	// 	} catch (error: any) {
	// 		console.error('Błąd logowania:', error.message);
	// 	}
	// };

	const navigate = (path: Href) => {
		//futher logics

		router.navigate(path);
		// router.replace(path);

		// console.log('email', userEmail);
		// console.log('haslo', userPassword);

		// setUserEmail('');
		// setUserPassword('');
	};

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
		fetchParkingLots();
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View className="flex-1 flex justify-between items-center bg-AppBackground pt-[25vh] mb-[5vh]">
				<View className="w-[80%] flex gap-3">
					<Text className="font-BebasNeueRegular text-[56px] text-center text-FontColor">
						Park It
					</Text>
					<CustomInput
						value={userEmail}
						onChange={(event) => {
							setUserEmail(event.nativeEvent.text);
						}}
						label="Adres e-mail"
						textInputStyles="bg-SecoundLayer w-full h-[50px] rounded-md"
						placeholder="e-mail"
						inputMode="email"
						textContentType="emailAddress"
					/>

					<CustomInput
						value={userPassword}
						onChange={(event) => {
							setUserPassword(event.nativeEvent.text);
						}}
						label="Hasło"
						textInputStyles="bg-SecoundLayer w-full h-[50px] rounded-md"
						placeholder="hasło"
						textContentType="password"
						isPassword
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
		</TouchableWithoutFeedback>
	);
};

export default SignInScreen;
