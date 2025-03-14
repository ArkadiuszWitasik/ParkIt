import { View, Text, Pressable } from 'react-native';
import React, { ReactNode, useState } from 'react';

const UnstyledButton = ({
	w,
	h,
	children = null,
	onPressFn,
}: {
	w?: string;
	h?: string;
	children?: ReactNode;
	onPressFn: () => void;
}) => {
	const [isPressed, setIsPressed] = useState<boolean>(false);

	return (
		<Pressable
			onPress={onPressFn}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			className={`${
				isPressed ? 'bg-gray-300' : ''
			} ${w} ${h} min-w-[150px] min-h-[50px] flex flex-row py-1 px-2 justify-center items-center`}
		>
			{children}
		</Pressable>
	);
};

export default UnstyledButton;
