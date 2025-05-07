import { View, Text } from 'react-native';
import React from 'react';
import FireIcon from '@/assets/Icons/FireIcon';

const LoyalityMainView = () => {
	return (
		<View className="flex-1 p-3 justify-between ">
			<View className="flex flex-row justify-between">
				<View>
					<Text className="font-MontserratRegular text-FontColor text-[18px]">
						Program lojalnościowy
					</Text>
				</View>
			</View>
			{/* Loop with amount reservations in color */}
			<View className="flex flex-row justify-center items-center gap-3">
				<View className="bg-LightKhaki w-[42] h-[42] rounded-[50] flex justify-center items-center">
					<FireIcon
						style={{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View className="bg-LightKhaki w-[42] h-[42] rounded-[50] flex justify-center items-center">
					<FireIcon
						style={{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View className="bg-LightKhaki w-[42] h-[42] rounded-[50] flex justify-center items-center">
					<FireIcon
						style={{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View className="bg-LightKhaki w-[42] h-[42] rounded-[50] flex justify-center items-center">
					<FireIcon
						style={{
							width: 20,
							height: 20,
						}}
					/>
				</View>
				<View className="bg-LightKhaki w-[42] h-[42] rounded-[50] flex justify-center items-center">
					<FireIcon
						style={{
							width: 20,
							height: 20,
						}}
					/>
				</View>
			</View>
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
