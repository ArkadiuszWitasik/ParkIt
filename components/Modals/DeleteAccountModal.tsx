import { View, Text, ActivityIndicator } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import BaseModal from './BaseModal';
import PrimaryButton from '../Buttons/PrimaryButton';
import CancelIcon from '@/assets/Icons/CancelIcon';
import CheckIcon from '@/assets/Icons/CheckIcon';
import { router } from 'expo-router';
import { auth, db } from '@/db/store';
import { deleteUser } from '@firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';

type DeleteAccountModalProps = {
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

const DeleteAccountModal = (props: DeleteAccountModalProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const user = auth.currentUser;

	const handleDeleteAccount = async () => {
		if (user) {
			await deleteDoc(doc(db, 'users', user.uid));

			deleteUser(user)
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
						Usuwanie konta
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
						Błąd podczas usuwania konta
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
						Usuwanie hasła przebiegła pomyślnie!
					</Text>
					<View className="flex flex-row gap-2 mt-4">
						<PrimaryButton
							style="primary"
							onPressFn={() => {
								props.setIsModalVisible(false);
								setIsSuccess(false);
								router.dismissAll();
							}}
							text="Ok"
						/>
					</View>
				</View>
			)}
			{!isLoading && !isError && !isSuccess && (
				<View className="flex-1 flex-col justify-around items-center">
					<Text className="text-FontColor font-MontserratSemiBold">
						Czy na pewno chcesz usunąć konto?
					</Text>
					<View className="flex flex-row gap-2">
						<PrimaryButton
							style="outline"
							onPressFn={() => {
								props.setIsModalVisible(false);
								setIsLoading(false);
								setIsError(false);
								setIsSuccess(false);
							}}
							text="Anuluj"
						/>
						<PrimaryButton
							style="primary"
							onPressFn={() => {
								setIsLoading(true);
								handleDeleteAccount();
							}}
							text="Usuń"
						/>
					</View>
				</View>
			)}
		</BaseModal>
	);
};

export default DeleteAccountModal;
