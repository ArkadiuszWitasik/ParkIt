import { Text, Pressable } from 'react-native';
import React, { useState } from 'react';

type PrimaryButtonProps = {
	onPressFn: () => void;
	h?: string;
	w?: string;
	text?: string;
	disabled?: boolean;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
	const [isPressed, setIsPressed] = useState<boolean>(false);

	return (
		<Pressable
			disabled={props.disabled}
			onPress={props.onPressFn}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			className={`${isPressed ? 'bg-AppBackground' : 'bg-white'} ${props.w} ${
				props.h
			} ${
				props.disabled ? 'bg-red-500' : ''
			} min-w-[150px] min-h-[50px] flex flex-row rounded-md py-1 px-2 justify-center items-center`}
		>
			<Text className="font-MontserratRegular text-FontColor">
				{props.text}
			</Text>
		</Pressable>
	);
};

export default PrimaryButton;
