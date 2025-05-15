import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Href, router } from 'expo-router';
import { useFonts } from 'expo-font';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import UnstyledButton from '@/components/Buttons/UnstyledButton';
import CustomInput from '@/components/CustomInput';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db, auth } from '../db/store';
import { useParkingLotsStore } from '@/store/parkingLotsStore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useUserStore } from '@/store/userStore';

export default function SignInScreen() {
	const [loaded, error] = useFonts({
		'BebasNeue-Regular': require('../assets/fonts/BebasNeue-Regular.ttf'),
		'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
		'Raleway-SemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
		'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
		'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
	});

	const [userEmail, setUserEmail] = useState<string>('user@test.com');
	const [userPassword, setUserPassword] = useState<string>('PASSWORD123');
	const [isUserDataLoading, setIsUserDataLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const { setParkingLots } = useParkingLotsStore();
	const { setUser } = useUserStore();

	const fetchParkingLots = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, 'parking_lots'));
			const data = querySnapshot.docs.map((doc) => ({
				parkingId: doc.id,
				parkingName: doc.data().parkingName,
				parkingLocation: doc.data().parkingLocation || '',
				parkingSpacesLeft: doc.data().parkingSpacesLeft || 0,
				parkingRatePerMin: doc.data().parkingRatePerMin || 0,
				zones: doc.data().zones || [],
			}));
			setParkingLots(data);
		} catch (error) {
			console.error('Błąd podczas pobierania danych:', error);
		}
	};

	const navigate = (path: Href) => {
		router.navigate(path);
	};

	const handleSignIn = async (email: string, password: string) => {
		Keyboard.dismiss();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			if (userCredential.user) {
				setIsUserDataLoading(true);

				const docUserRef = doc(db, 'users', userCredential.user.uid);

				const docUserSnap = await getDoc(docUserRef);

				if (docUserSnap.exists()) {
					const formaterUserData = {
						userId: docUserSnap.id,
						isDiscountApplyed: docUserSnap.data().isDiscountApplyed,
						loyalityCount: docUserSnap.data().loyalityCount,
						balance: docUserSnap.data().balance,
						reservations: docUserSnap.data().reservations,
						cars: docUserSnap.data().cars,
					};
					setUser(formaterUserData);
				}

				setTimeout(() => {
					setIsUserDataLoading(false);
					navigate('/(tabs)/(home)');
				}, 2000);
			}
		} catch (error: any) {
			setIsError(true);
		}
	};

	useEffect(() => {
		fetchParkingLots();
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	if (isUserDataLoading) {
		return (
			<View className="flex-1 justify-center items-center bg-AppBackground gap-3">
				<Text className="text-[56px] font-BebasNeueRegular pt-[40px] text-FontColor">
					Park It
				</Text>
				<View className="flex flex-col justify-center items-center">
					<Text className="text-2xl font-RalewaySemiBold text-FontColor">
						Ładowanie informacji
					</Text>
					<Text className="text-2xl font-RalewaySemiBold text-FontColor">
						o użytkowniku...
					</Text>
				</View>
				<ActivityIndicator size="large" className="mt-3" />
			</View>
		);
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
							setIsError(false);
							setUserEmail(event.nativeEvent.text);
						}}
						label="Adres e-mail"
						textInputStyles="bg-SecoundLayer w-full h-[50px] rounded-md"
						placeholder="e-mail"
						inputMode="email"
						textContentType="emailAddress"
						isError={isError}
					/>

					<CustomInput
						value={userPassword}
						onChange={(event) => {
							setIsError(false);
							setUserPassword(event.nativeEvent.text);
						}}
						label="Hasło"
						textInputStyles="bg-SecoundLayer w-full h-[50px] rounded-md"
						placeholder="hasło"
						textContentType="password"
						isPassword
						isError={isError}
					/>

					<PrimaryButton
						text="Zaloguj się"
						onPressFn={() => {
							handleSignIn(userEmail, userPassword);
						}}
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

				<UnstyledButton
					onPressFn={() => navigate('/sign-up')}
					bgColor=""
					bgPressedColor="bg-gray-300"
					otherStyles="flex items-center justify-center rounded-md"
				>
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
}

// export default SignInScreen;
