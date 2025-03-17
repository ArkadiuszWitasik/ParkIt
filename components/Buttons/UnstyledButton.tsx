import { Pressable } from 'react-native';
import React, { ReactNode, useState } from 'react';

type UnstyledButtonProps = {
	onPressFn: () => void;
	w?: string;
	h?: string;
	children?: ReactNode;
};

const UnstyledButton = (props: UnstyledButtonProps) => {
	const [isPressed, setIsPressed] = useState<boolean>(false);

	return (
		<Pressable
			onPress={props.onPressFn}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			className={`${isPressed ? 'bg-gray-300' : ''} ${props.w} ${
				props.h
			} min-w-[150px] min-h-[50px] flex flex-row py-1 px-2 items-center`}
		>
			{props.children}
		</Pressable>
	);
};

export default UnstyledButton;
