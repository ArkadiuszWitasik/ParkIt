import { View, Text } from 'react-native';
import React from 'react';
import FireIcon from '@/assets/Icons/FireIcon';
import { useUserStore } from '@/store/userStore';

const LoyalityMainView = () => {
	const { user } = useUserStore();

	let reservaionWordVariety = '';

	if (5 - user!.loyalityCount === 1) {
		reservaionWordVariety = 'rezerwacja';
	} else if (5 - user!.loyalityCount === 5) {
		reservaionWordVariety = 'rezerwacji';
	} else if (5 - user!.loyalityCount > 1) {
		reservaionWordVariety = 'rezerwacje';
	}

	return (
		<View className="flex-1 p-3 justify-between ">
			<View className="flex flex-row justify-between">
				<View>
					<Text className="font-MontserratRegular text-FontColor text-[18px]">
						Program lojalnościowy
					</Text>
				</View>
			</View>
			<View className="flex flex-row justify-center items-center gap-3">
				{[...Array(5)].map((_, index) => (
					<View
						key={index}
						className={`w-[42] h-[42] rounded-[50] flex justify-center items-center ${
							index < user!.loyalityCount
								? 'bg-AppPrimaryColor'
								: 'bg-AppBackground'
						}`}
					>
						<FireIcon
							style={{
								width: 20,
								height: 20,
							}}
						/>
					</View>
				))}
			</View>
			<View className="flex justify-center flex-row items-center">
				{5 - user!.loyalityCount === 0 ? (
					<>
						<Text>
							Hurra! Do następnej rezerwacji zostanie naliczona zniżka!
						</Text>
					</>
				) : (
					<>
						<Text className="font-MontserratRegular text-FontColor">
							Jeszcze{' '}
						</Text>
						<Text className="font-MontserratSemiBold text-FontColor">
							{5 - user!.loyalityCount}
						</Text>
						<Text className="font-MontserratRegular text-FontColor">
							{' '}
							{reservaionWordVariety} by uzyskać{' '}
						</Text>
						<Text className="font-MontserratSemiBold text-FontColor">-5%</Text>
						<Text className="font-MontserratRegular text-FontColor">
							{' '}
							zniżki!
						</Text>
					</>
				)}
			</View>
		</View>
	);
};

export default LoyalityMainView;
