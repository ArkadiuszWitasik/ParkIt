import { View, Text } from 'react-native';
import React from 'react';
import WalletIcon from '@/assets/Icons/WalletIcon';
import { useUserStore } from '@/store/userStore';

const BalanceMainView = () => {
	const { user } = useUserStore();

	return (
		<View className="flex-1 p-3 justify-between">
			<View className="flex flex-row justify-between">
				<View>
					<Text className="font-MontserratRegular text-FontColor text-[18px]">
						Stan
					</Text>
					<Text className="font-MontserratRegular text-FontColor text-[18px]">
						konta
					</Text>
				</View>
				<View className="bg-AppBackground w-[50] h-[50] rounded-[50] flex justify-center items-center">
					<WalletIcon
						style={{
							width: 24,
							height: 24,
						}}
					/>
				</View>
			</View>
			<View className="flex flex-row items-start gap-2 justify-start">
				<Text className="font-MontserratSemiBold text-FontColor text-[34px]">
					{user?.balance}
				</Text>
				<Text className="font-MontserratSemiBold text-FontColor text-[16px] pt-2">
					ZŁ
				</Text>
			</View>
		</View>
	);
};

export default BalanceMainView;
