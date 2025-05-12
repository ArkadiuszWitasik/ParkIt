import { View, Text } from 'react-native';
import React from 'react';
import UnstyledButton from '@/components/Buttons/UnstyledButton';
import Divider from '@/components/Divider';

const SettingsScreen = () => {
	const tmp = () => {
		console.log('tmp settings screen');
	};

	return (
		<View className="flex-1 m-3 flex flex-col gap-2">
			<Text>Ustawienia aplikacji</Text>
			<UnstyledButton onPressFn={() => tmp()}>
				<Text className="text-FontColor font-MontserratRegular">
					Powiadomienia
				</Text>
			</UnstyledButton>
			<UnstyledButton onPressFn={() => tmp()}>
				<Text className="text-FontColor font-MontserratRegular">
					Uprawnienia
				</Text>
			</UnstyledButton>
			<UnstyledButton onPressFn={() => tmp()}>
				<Text className="text-FontColor font-MontserratRegular">Motyw</Text>
			</UnstyledButton>
			<Text>Ustawienia konta</Text>
			<UnstyledButton onPressFn={() => tmp()}>
				<Text className="text-FontColor font-MontserratRegular">
					Zmień adres e-mail
				</Text>
			</UnstyledButton>
			<UnstyledButton onPressFn={() => tmp()}>
				<Text className="text-FontColor font-MontserratRegular">
					Zmień hasło
				</Text>
			</UnstyledButton>
			<UnstyledButton onPressFn={() => tmp()}>
				<Text className="text-FontColor font-MontserratRegular">
					Ustawienia płatności
				</Text>
			</UnstyledButton>
			<Divider />
			<UnstyledButton onPressFn={() => tmp()}>
				<Text className="text-FontColor font-MontserratRegular">
					Usuń konto
				</Text>
			</UnstyledButton>
		</View>
	);
};

export default SettingsScreen;
