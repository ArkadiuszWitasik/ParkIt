import { View } from 'react-native';
import React from 'react';

const Divider = () => {
	return (
		<View className="flex flex-row items-center gap-3">
			<View className="bg-AppBackground h-[2px] flex-1" />
		</View>
	);
};

export default Divider;
