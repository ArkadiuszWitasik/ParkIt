import { Pressable } from 'react-native';
import React, { ReactNode, useState } from 'react';

const MainScreenCard = ({
	cardStyles,
	backgroundColor,
	children = null,
}: {
	cardStyles?: string;
	backgroundColor?: string;
	children?: ReactNode;
}) => {
	const [isPressed, setIsPressed] = useState<boolean>(false);

	return (
		<Pressable
			className={`${cardStyles} ${isPressed ? 'bg-gray-500' : backgroundColor}`}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
		>
			{children}
		</Pressable>
	);
};

export default MainScreenCard;
