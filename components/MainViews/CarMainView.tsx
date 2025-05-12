import { View, Text } from 'react-native';
import React from 'react';
import CarIcon from '@/assets/Icons/CarIcon';

const CarMainView = () => {
	return (
		<View className=" flex flex-col">
			<View className=" p-3 flex flex-row justify-between items-end">
				<Text className="font-MontserratRegular text-FontColor text-[24px]">
					Moje
				</Text>
				<View className="bg-AppBackground w-[50] h-[50] rounded-[50] flex justify-center items-center">
					<CarIcon
						style={{
							width: 24,
							height: 24,
						}}
					/>
				</View>
			</View>
			<View className="pl-3 pr-3">
				<Text className="font-MontserratRegular text-FontColor text-[24px]">
					Samochody
				</Text>
			</View>
		</View>
	);
};

export default CarMainView;
