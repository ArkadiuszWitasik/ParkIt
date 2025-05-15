import { View } from 'react-native';
import React from 'react';

type DividerProps = {
	color?: string;
	h?: string;
};

const Divider = ({
	color = 'bg-AppBackground',
	h = 'h-[2px]',
}: DividerProps) => {
	return (
		<View className="flex flex-row items-center gap-3">
			<View className={`${color}  ${h} flex-1`} />
		</View>
	);
};

export default Divider;
