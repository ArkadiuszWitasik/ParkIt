import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { Href, router } from 'expo-router';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import UnstyledButton from '@/components/Buttons/UnstyledButton';
import CustomInput from '@/components/CustomInput';
import { auth, db } from '@/db/store';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const SignUpScreen = () => {
	const [userEmail, setUserEmail] = useState<string>('');
	const [userPassword, setUserPassword] = useState<string>('');
	const [userPassword2, setUserPassword2] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const navigate = (path: Href) => {
		router.navigate(path);
	};

	const handleSingUp = async (
		email: string,
		password: string,
		password2: string
	) => {
		Keyboard.dismiss();
		const isPasswordMatch = password === password2;
		if (!isPasswordMatch) {
			setIsError(true);
		} else {
			try {
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				console.log(userCredential);
				if (userCredential.user) {
					setIsLoading(true);

					await setDoc(doc(db, 'users', userCredential.user.uid), {
						balance: 0,
						cars: [],
						isDiscountApplyed: false,
						loyalityCount: 0,
						reservations: [],
						userId: userCredential.user.uid,
					});
				}

				setTimeout(() => {
					setIsLoading(false);
					navigate('/');
				}, 2000);
			} catch (error: any) {
				setIsError(true);
			}
		}
	};

	if (isLoading) {
		return (
			<View className="flex-1 justify-center items-center bg-AppBackground gap-3">
				<Text className="text-[56px] font-BebasNeueRegular pt-[40px] text-FontColor">
					Park It
				</Text>
				<View className="flex flex-col justify-center items-center">
					<Text className="text-2xl font-MontserratSemiBold text-FontColor">
						Tworzymy własnie
					</Text>
					<Text className="text-2xl font-MontserratSemiBold text-FontColor">
						twoje konto...
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

					<CustomInput
						value={userPassword2}
						onChange={(event) => {
							setIsError(false);
							setUserPassword2(event.nativeEvent.text);
						}}
						label="Potwierdź hasło"
						textInputStyles="bg-SecoundLayer w-full h-[50px] rounded-md"
						placeholder="potwierdź hasło"
						textContentType="password"
						isPassword
						isError={isError}
					/>

					<PrimaryButton
						style="primary"
						text="Zarejestruj się"
						onPressFn={() =>
							handleSingUp(userEmail, userPassword, userPassword2)
						}
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
