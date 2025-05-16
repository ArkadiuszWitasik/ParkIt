import { View, Text } from 'react-native';
import React from 'react';
import { useUserStore } from '@/store/userStore';
import FireIcon from '@/assets/Icons/FireIcon';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

const LoyalityScreen = () => {
	const { user } = useUserStore();

	let reservaionWordVariety = '';

	if (5 - user!.loyalityCount === 1) {
		reservaionWordVariety =
			'została ' + (5 - user!.loyalityCount) + ' rezeracja';
	} else if (5 - user!.loyalityCount === 5) {
		reservaionWordVariety =
			'zostało ' + (5 - user!.loyalityCount) + ' rezeracji';
	} else if (5 - user!.loyalityCount > 1) {
		reservaionWordVariety =
			'zostały ' + (5 - user!.loyalityCount) + ' rezerwacje';
	} else if (5 - user!.loyalityCount === 0) {
		reservaionWordVariety =
			'Hurra! Do następnej rezerwacji zostanie naliczona zniżka!';
	}

	return (
		<View className="flex-1 m-3 flex gap-3 mt-10">
			<Text className="font-RalewayRegular text-FontColor text-center text-[18px]">
				Witaj w naszym programie lojalnościowym!
			</Text>
			<Text className="font-RalewayRegular text-FontColor text-[16px]">
				W darmowej wersji konta po{' '}
				<Text className="font-RalewaySemiBold text-FontColor">5</Text>{' '}
				rezerwacjach twoje konto zostaje nagrodzone{' '}
				<Text className="font-RalewaySemiBold text-FontColor">-5%</Text> zniżką
				na kolejną rezerwację.
			</Text>

			<View className="bg-white rounded-md flex items-center justify-center gap-3 p-3">
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
				<Text>Do odebrania zniżki {reservaionWordVariety}!</Text>
			</View>

			<Text className="font-RalewayRegular text-FontColor text-[16px] mt-5 mb-5">
				Zachęcamy również do ulepszenia konta do wersji premium gdzie za cenę{' '}
				<Text className="font-RalewaySemiBold text-FontColor text-[16px]">
					40zł
				</Text>{' '}
				miesięcznie. Po{' '}
				<Text className="font-RalewaySemiBold text-FontColor text-[16px]">
					5
				</Text>{' '}
				rezerwacjach otrzymasz aż{' '}
				<Text className="font-RalewaySemiBold text-FontColor text-[16px]">
					-15%
				</Text>{' '}
				zniżki a anulowanie rezerwacji zwróci{' '}
				<Text className="font-RalewaySemiBold text-FontColor text-[16px]">
					100%
				</Text>{' '}
				kwoty.
			</Text>

			<View className="flex items-center">
				<PrimaryButton
					onPressFn={() => console.log()}
					text="Ulepsz konto"
					w="w-[50px]"
				/>
			</View>
		</View>
	);
};

export default LoyalityScreen;
