import { Text, Pressable } from 'react-native';
import React, { useState } from 'react';

type PrimaryButtonProps = {
	onPressFn: () => void;
	style: 'primary' | 'white' | 'outline' | 'error';
	h?: string;
	w?: string;
	text?: string;
	disabled?: boolean;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
	const [isPressed, setIsPressed] = useState<boolean>(false);

	let bgColor = 'bg-white';
	let pressedBgColor = 'bg-AppBackground';
	let additionalStyles = '';
	let textColor = 'text-FontColor';

	if (props.style === 'primary') {
		bgColor = 'bg-AppPrimaryColor';
		pressedBgColor = 'bg-AppLightPrimaryColor';
		additionalStyles = '';
		textColor = 'text-white';
	} else if (props.style === 'outline') {
		bgColor = 'bg-AppBackground';
		pressedBgColor = 'bg-white';
		additionalStyles = 'border';
		textColor = '';
	} else if (props.style === 'error') {
		bgColor = 'bg-red-300';
		pressedBgColor = 'bg-red-400';
		additionalStyles = '';
		textColor = 'text-red-600';
	}

	return (
		<Pressable
			disabled={props.disabled}
			onPress={props.onPressFn}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			className={`
				${isPressed ? pressedBgColor : bgColor}
				${props.w} 
				${props.h} 
				${props.disabled ? 'bg-gray-200' : ''} 
				min-w-[150px] min-h-[50px] flex flex-row rounded-md py-1 px-2 justify-center items-center ${additionalStyles}`}
		>
			<Text
				className={`font-MontserratRegular ${
					props.disabled ? 'text-gray-400' : textColor
				}`}
			>
				{props.text}
			</Text>
		</Pressable>
	);
};

export default PrimaryButton;
