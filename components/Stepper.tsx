import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { usePathname } from 'expo-router';

const Stepper = () => {
	const pathname = usePathname();
	let pathNumber = 1;

	if (pathname === '/datetime') {
		pathNumber = 1;
	} else if (pathname === '/parking') {
		pathNumber = 2;
	} else if (pathname === '/spot') {
		pathNumber = 3;
	}

	return (
		<View className="mt-3 ml-3 mr-3 flex flex-row justify-center gap-2 items-center">
			<View
				className={`
					${
						pathNumber >= 1 ? 'bg-AppPrimaryColor' : 'bg-white'
					} h-[30] w-[30]  rounded-full flex items-center justify-center`}
			>
				<Text>1</Text>
			</View>
			<View
				className={` ${
					pathNumber >= 2 ? 'bg-AppPrimaryColor' : 'bg-white'
				} h-[5] w-[70] bg-AppPrimaryColor rounded-full`}
			/>
			<View
				className={`
					${
						pathNumber >= 2 ? 'bg-AppPrimaryColor' : 'bg-white'
					} h-[30] w-[30]  rounded-full flex items-center justify-center`}
			>
				<Text>2</Text>
			</View>
			<View
				className={` ${
					pathNumber >= 3 ? 'bg-AppPrimaryColor' : 'bg-white'
				} h-[5] w-[70] bg-AppPrimaryColor rounded-full`}
			/>
			<View
				className={`
					${
						pathNumber >= 3 ? 'bg-AppPrimaryColor' : 'bg-white'
					} h-[30] w-[30]  rounded-full flex items-center justify-center`}
			>
				<Text>3</Text>
			</View>
		</View>
	);
};

export default Stepper;
