import { Pressable } from 'react-native';
import React, { ReactNode, useState } from 'react';

type UnstyledButtonProps = {
	onPressFn: () => void;
	w?: string;
	h?: string;
	bgColor?: string;
	bgPressedColor?: string;
	otherStyles?: string;
	children?: ReactNode;
};

const UnstyledButton = ({
	onPressFn,
	w = 'w-[150px]',
	h = 'h-[50px]',
	bgColor,
	bgPressedColor,
	otherStyles,
	children,
}: UnstyledButtonProps) => {
	const [isPressed, setIsPressed] = useState<boolean>(false);

	return (
		<Pressable
			onPress={onPressFn}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			className={`${
				isPressed ? bgPressedColor : bgColor
			} ${w} ${h} ${otherStyles}`}
		>
			{children}
		</Pressable>
	);
};

export default UnstyledButton;
