import { Pressable } from 'react-native';
import React, { ReactNode, useState } from 'react';
import { Href, router } from 'expo-router';

const MainScreenCard = ({
	path,
	cardStyles,
	backgroundColor,
	pressedBackgroundColor,
	children = null,
}: {
	path: Href;
	cardStyles?: string;
	backgroundColor?: string;
	pressedBackgroundColor?: string;
	children?: ReactNode;
}) => {
	const [isPressed, setIsPressed] = useState<boolean>(false);

	const navigate = (path: Href) => {
		router.navigate(path);
	};

	return (
		<Pressable
			className={`${cardStyles} ${
				isPressed ? pressedBackgroundColor : backgroundColor
			}`}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
			onPress={() => navigate(path)}
		>
			{children}
		</Pressable>
	);
};

export default MainScreenCard;
