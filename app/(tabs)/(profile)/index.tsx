import { View, Text } from 'react-native';
import React from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import OutlineButton from '@/components/Buttons/OutlineButton';
import UnstyledButton from '@/components/Buttons/UnstyledButton';

const ProfileScreen = () => {
	return (
		<View className="flex-1 border border-sky-500 flex flex-col gap-10 justify-center items-center">
			<PrimaryButton onPressFn={() => console.log('')} text="Abc" />
			<OutlineButton onPressFn={() => console.log('')} text="Xyz" />
			<UnstyledButton onPressFn={() => console.log('')}>
				<Text>ABC</Text>
				<Text>XYZ</Text>
			</UnstyledButton>
		</View>
	);
};

export default ProfileScreen;
