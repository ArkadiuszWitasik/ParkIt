import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomHeader = () => {
	return (
		<SafeAreaView className="flex items-center top-[20px]">
			<View>
				<Text className="text-[56px] font-BebasNeueRegular text-FontColor">
					Park It
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default CustomHeader;
