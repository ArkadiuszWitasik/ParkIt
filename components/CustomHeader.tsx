import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomHeader = () => {
	return (
		<SafeAreaView className="flex items-center border border-blue-500">
			<View>
				<Text className="text-[48px] font-BebasNeueRegular">Park It</Text>
			</View>
		</SafeAreaView>
	);
};

export default CustomHeader;
