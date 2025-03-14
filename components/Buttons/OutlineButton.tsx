import { Text, Pressable } from 'react-native';
import React, { useState } from 'react';

const OutlineButton = ({
	text,
	w,
	h,
	onPressFn,
}: {
	text: string;
	w?: string;
	h?: string;
	onPressFn: () => void;
}) => {
	const [isPressed, setIsPressed] = useState<boolean>(false);

	return (
		<Pressable
			onPress={onPressFn}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			className={`${
				isPressed ? 'bg-Khaki' : 'bg-LightKhaki'
			} ${w} ${h} min-w-[150px] min-h-[50px] flex flex-row rounded-md py-1 px-2 justify-center items-center border-[2px] border-Khaki`}
		>
			<Text className="font-MontserratRegular text-FontColor">{text}</Text>
		</Pressable>
	);
};

export default OutlineButton;
