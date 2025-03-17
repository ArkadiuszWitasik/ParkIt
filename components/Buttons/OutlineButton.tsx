import { Text, Pressable } from 'react-native';
import React, { useState } from 'react';

type OutlineButtonProps = {
	onPressFn: () => void;
	h?: string;
	w?: string;
	text?: string;
};

const OutlineButton = (props: OutlineButtonProps) => {
	const [isPressed, setIsPressed] = useState<boolean>(false);

	return (
		<Pressable
			onPress={props.onPressFn}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			className={`${isPressed ? 'bg-Khaki' : 'bg-LightKhaki'} ${props.w} ${
				props.h
			} min-w-[150px] min-h-[50px] flex flex-row rounded-md py-1 px-2 justify-center items-center border-[2px] border-Khaki`}
		>
			<Text className="font-MontserratRegular text-FontColor">
				{props.text}
			</Text>
		</Pressable>
	);
};

export default OutlineButton;
