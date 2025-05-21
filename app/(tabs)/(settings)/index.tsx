import { View, Text, Switch } from 'react-native';
import React, { useState } from 'react';
import UnstyledButton from '@/components/Buttons/UnstyledButton';
import { signOut } from 'firebase/auth';
import { auth } from '@/db/store';
import { router } from 'expo-router';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import ChangeEmailModal from '@/components/Modals/ChangeEmailModal';
import ChangePasswordModal from '@/components/Modals/ChangePasswordModal';
import DeleteAccountModal from '@/components/Modals/DeleteAccountModal';

const SettingsScreen = () => {
	const [isNotificationSwitchEnabled, setIsNotificationSwitchEnable] =
		useState(false);
	const toggleNotificationSwitch = () =>
		setIsNotificationSwitchEnable((previousState) => !previousState);

	const [isThemeSwitchEnabled, setIsThemeSwitchEnable] = useState(false);
	const toggleThemeSwitch = () =>
		setIsThemeSwitchEnable((previousState) => !previousState);

	const [isChangePasswordModalVisible, setIsChangePasswordModalVisible] =
		useState<boolean>(false);
	const [isChangeEmailModalVisible, setIsChangeEmailModalVisible] =
		useState<boolean>(false);
	const [isDeleteAccountModalVisible, setIsDeleteAccountModalVisible] =
		useState<boolean>(false);

	const handleChangeEmailAddress = () => {
		setIsChangeEmailModalVisible(true);
	};

	const handleChangePassword = () => {
		setIsChangePasswordModalVisible(true);
	};

	const handleDeleteAccount = () => {
		setIsDeleteAccountModalVisible(true);
	};

	const handleSingOut = () => {
		signOut(auth)
			.then(() => {
				router.dismissAll();
			})
			.catch((error) => {
				console.error(error.message);
			});
	};

	return (
		<View className="flex-1 m-3 flex flex-col gap-2">
			<ChangeEmailModal
				isModalVisible={isChangeEmailModalVisible}
				setIsModalVisible={setIsChangeEmailModalVisible}
			/>
			<ChangePasswordModal
				isModalVisible={isChangePasswordModalVisible}
				setIsModalVisible={setIsChangePasswordModalVisible}
			/>
			<DeleteAccountModal
				isModalVisible={isDeleteAccountModalVisible}
				setIsModalVisible={setIsDeleteAccountModalVisible}
			/>
			<View className="bg-white rounded-md flex flex-col gap-2 p-3">
				<Text className="font-MontserratSemiBold text-FontColor text-[16px]">
					Ustawienia aplikacji
				</Text>
				<View className="flex justify-center rounded-md w-full h-[50px]">
					<View className="flex flex-row justify-between items-center">
						<Text className="text-FontColor font-MontserratRegular">
							Powiadomienia
						</Text>
						<Switch
							trackColor={{ false: '#767577', true: '#66affa' }}
							thumbColor={isNotificationSwitchEnabled ? '#fff' : '#f4f3f4'}
							ios_backgroundColor="#3e3e3e"
							onChange={toggleNotificationSwitch}
							value={isNotificationSwitchEnabled}
						/>
					</View>
				</View>
				<View className="flex justify-center rounded-md w-full h-[50px]">
					<View className="flex flex-row justify-between items-center">
						<Text className="text-FontColor font-MontserratRegular">Motyw</Text>
						<Switch
							trackColor={{ false: '#767577', true: '#66affa' }}
							thumbColor={isThemeSwitchEnabled ? '#fff' : '#f4f3f4'}
							ios_backgroundColor="#3e3e3e"
							onChange={toggleThemeSwitch}
							value={isThemeSwitchEnabled}
						/>
					</View>
				</View>
			</View>
			<View className="bg-white rounded-md flex flex-col gap-2 p-3">
				<Text className="font-MontserratSemiBold text-FontColor text-[16px]">
					Ustawienia konta
				</Text>
				<UnstyledButton
					onPressFn={handleChangeEmailAddress}
					w="w-full"
					bgColor=""
					bgPressedColor="bg-gray-200"
					otherStyles="flex justify-center items-center rounded-md"
				>
					<Text className="text-FontColor font-MontserratRegular">
						Zmień adres e-mail
					</Text>
				</UnstyledButton>
				<UnstyledButton
					onPressFn={handleChangePassword}
					w="w-full"
					bgColor=""
					bgPressedColor="bg-gray-200"
					otherStyles="flex justify-center items-center rounded-md"
				>
					<Text className="text-FontColor font-MontserratRegular">
						Zmień hasło
					</Text>
				</UnstyledButton>
			</View>
			<UnstyledButton
				onPressFn={() => handleSingOut()}
				w="w-full"
				bgColor="bg-white"
				bgPressedColor="bg-gray-200"
				otherStyles="flex justify-center items-center rounded-md"
			>
				<Text className="text-FontColor font-MontserratRegular">
					Wyloguj się
				</Text>
			</UnstyledButton>
			<PrimaryButton
				style="error"
				onPressFn={handleDeleteAccount}
				text="Usuń konto"
			/>
		</View>
	);
};

export default SettingsScreen;
