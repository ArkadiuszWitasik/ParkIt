import { Pressable } from 'react-native';
import React, { ReactNode, useState } from 'react';

type UnstyledButtonProps = {
	onPressFn: () => void;
	w?: string;
	h?: string;
	children?: ReactNode;
};

const UnstyledButton = ({
	onPressFn,
	w = 'w-[150px]',
	h = 'h-[50px]',
	children,
}: UnstyledButtonProps) => {
	const [isPressed, setIsPressed] = useState<boolean>(false);

	return (
		<Pressable
			onPress={onPressFn}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			className={`${
				isPressed ? 'bg-gray-300' : ''
			} ${w} ${h}  flex flex-row py-1 px-2 items-center justify-center`}
		>
			{children}
		</Pressable>
	);
};

export default UnstyledButton;
