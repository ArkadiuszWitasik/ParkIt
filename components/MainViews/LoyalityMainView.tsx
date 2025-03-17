import { View, Text } from 'react-native';
import React from 'react';
import FireIcon from '@/assets/Icons/FireIcon';

const LoyalityMainView = () => {
	return (
		<View className="flex-1 p-3 justify-between ">
			<View className="flex flex-row justify-between">
				<View>
					<Text className="font-MontserratRegular text-FontColor text-[18px]">
						Program
					</Text>
					<Text className="font-MontserratRegular text-FontColor text-[18px]">
						lojalnościowy
					</Text>
				</View>
				<View className="bg-LightKhaki w-[50] h-[50] rounded-[50] flex justify-center items-center">
					<FireIcon
						style={{
							width: 24,
							height: 24,
						}}
					/>
				</View>
			</View>
			<View className="border border-sky-500"></View>
			<View className="flex justify-center flex-row items-center">
				<Text className="font-MontserratRegular text-FontColor">Jeszcze </Text>
				<Text className="font-MontserratSemiBold text-FontColor">3</Text>
				<Text className="font-MontserratRegular text-FontColor">
					{' '}
					rezerwacje by uzyskać{' '}
				</Text>
				<Text className="font-MontserratSemiBold text-FontColor">-10%</Text>
				<Text className="font-MontserratRegular text-FontColor"> zniżki</Text>
			</View>
		</View>
	);
};

export default LoyalityMainView;
