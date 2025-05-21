import { View, Text, ActivityIndicator } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import BaseModal from './BaseModal';
import CustomInput from '../CustomInput';
import PrimaryButton from '../Buttons/PrimaryButton';
import { auth } from '@/db/store';
import { updatePassword } from '@firebase/auth';
import CancelIcon from '@/assets/Icons/CancelIcon';
import CheckIcon from '@/assets/Icons/CheckIcon';

type ChangePasswordModalProps = {
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

const ChangePasswordModal = (props: ChangePasswordModalProps) => {
	const user = auth.currentUser;

	const [password, setPassword] = useState<string>('');
	const [password2, setPassword2] = useState<string>('');

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const handleChangePassword = () => {
		if (password && password2) {
			if (user) {
				if (password === password2) {
					updatePassword(user, password)
						.then(() => {
							setIsLoading(false);
							setIsSuccess(true);
						})
						.catch(() => {
							setIsLoading(false);
							setIsError(true);
						});
				} else {
					setIsLoading(false);
					setIsError(true);
				}
			}
		}
	};

	return (
		<BaseModal
			w="w-[350px]"
			h="h-[300px]"
			isModalVisible={props.isModalVisible}
			setIsModalVisible={props.setIsModalVisible}
		>
			{isLoading && (
				<View className="flex-1 flex-col justify-center items-center gap-3">
					<Text className="font-RalewayRegular text-FontColor text-[22px]">
						Zmiana hasła
					</Text>
					<ActivityIndicator size="large" />
				</View>
			)}
			{isError && (
				<View className="flex-1 flex-col justify-center items-center gap-3">
					<CancelIcon
						color="#ef4444"
						style={{
							width: 48,
							height: 48,
						}}
					/>
					<Text className="font-RalewayRegular text-FontColor text-[20px] text-center">
						Błąd podczas zmiany hasła
					</Text>
					<View className="flex flex-row gap-2 mt-4">
						<PrimaryButton
							style="error"
							onPressFn={() => {
								props.setIsModalVisible(false);
								setIsError(false);
							}}
							text={'Anuluj'}
						/>
						<PrimaryButton
							style="primary"
							onPressFn={() => {
								props.setIsModalVisible(false);
								setIsError(false);
							}}
							text="Wróć do menu"
						/>
					</View>
				</View>
			)}
			{isSuccess && (
				<View className="flex-1 flex-col justify-center items-center gap-3">
					<CheckIcon
						color="#22c55e"
						style={{
							width: 48,
							height: 48,
						}}
					/>
					<Text className="font-RalewayRegular text-FontColor text-[20px] text-center">
						Zmiana hasła przebiegła pomyslnie!
					</Text>
					<View className="flex flex-row gap-2 mt-4">
						<PrimaryButton
							style="primary"
							onPressFn={() => {
								props.setIsModalVisible(false);
								setIsSuccess(false);
							}}
							text="Ok"
						/>
					</View>
				</View>
			)}
			{!isError && !isLoading && !isSuccess && (
				<View className="flex-1 flex-col justify-around items-center">
					<Text className="text-FontColor font-MontserratSemiBold">
						Edycja hasła
					</Text>
					<View className="w-[80%] flex flex-col gap-3">
						<CustomInput
							value={password}
							onChange={(event) => {
								setPassword(event.nativeEvent.text);
							}}
							label="Hasło"
							textInputStyles="bg-SecoundLayer w-full h-[50px] rounded-md"
							placeholder="hasło"
							inputMode="text"
							isPassword
						/>
						<CustomInput
							value={password2}
							onChange={(event) => {
								setPassword2(event.nativeEvent.text);
							}}
							label="Powtórz hasło"
							textInputStyles="bg-SecoundLayer w-full h-[50px] rounded-md"
							placeholder="hasło"
							inputMode="text"
							isPassword
						/>
					</View>

					<View className="flex flex-row gap-2">
						<PrimaryButton
							style="outline"
							onPressFn={() => {
								props.setIsModalVisible(false);
							}}
							text="Anuluj"
						/>
						<PrimaryButton
							disabled={password.length === 0 || password2.length === 0}
							style="primary"
							onPressFn={() => {
								handleChangePassword();
							}}
							text="Edytuj"
						/>
					</View>
				</View>
			)}
		</BaseModal>
	);
};

export default ChangePasswordModal;
