import { View, Text, ActivityIndicator } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import BaseModal from './BaseModal';
import PrimaryButton from '../Buttons/PrimaryButton';
import CustomInput from '../CustomInput';
import { auth } from '@/db/store';
import { updateEmail } from '@firebase/auth';
import CancelIcon from '@/assets/Icons/CancelIcon';
import CheckIcon from '@/assets/Icons/CheckIcon';

type ChangeEmailModalProps = {
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

const ChangeEmailModal = (props: ChangeEmailModalProps) => {
	const user = auth.currentUser;

	const [email, setEmail] = useState<string>(user!.email || '');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const handleChangeEmail = () => {
		if (user) {
			updateEmail(user, email)
				.then(() => {
					setIsLoading(false);
					setIsSuccess(true);
				})
				.catch(() => {
					setIsLoading(false);
					setIsError(true);
				});
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
					<Text className="font-MontserratRegular text-FontColor text-[22px]">
						Zmiana adresu e-mail
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
					<Text className="font-MontserratRegular text-FontColor text-[20px] text-center">
						Błąd podczas zmiany adresu e-mail
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
					<Text className="font-MontserratRegular text-FontColor text-[20px] text-center">
						Zmiana adresu e-mail przebiegła pomyslnie!
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
			{!isLoading && !isError && !isSuccess && (
				<View className="flex-1 flex-col justify-around items-center">
					<Text className="text-FontColor font-MontserratSemiBold">
						Edycja adresu e-mail
					</Text>
					<View className="w-[80%] flex flex-col gap-3">
						<CustomInput
							value={email}
							onChange={(event) => {
								setEmail(event.nativeEvent.text);
							}}
							label="Adres e-mail"
							textInputStyles="bg-SecoundLayer w-full h-[50px] rounded-md"
							placeholder="user@test.pl"
							inputMode="email"
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
							style="primary"
							onPressFn={() => {
								setIsLoading(true);
								handleChangeEmail();
							}}
							text="Edytuj"
						/>
					</View>
				</View>
			)}
		</BaseModal>
	);
};

export default ChangeEmailModal;
