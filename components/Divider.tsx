import { View, Text } from 'react-native';
import React from 'react';

const Divider = ({ text }: { text?: string }) => {
	return (
		<View className="flex flex-row items-center gap-3 px-2">
			{text && (
				<Text className="font-MontserratSemiBold text-GrayFontColor">
					{text}
				</Text>
			)}
			<View className="bg-GrayFontColor h-[1.5px] flex-1" />
		</View>
	);
};

export default Divider;
