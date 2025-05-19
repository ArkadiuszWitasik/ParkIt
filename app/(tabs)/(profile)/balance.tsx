import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useUserStore } from '@/store/userStore';
import UnstyledButton from '@/components/Buttons/UnstyledButton';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import PaymentModal from '@/components/Modals/PaymentModal';

const AccountBalanceScreen = () => {
	const { user } = useUserStore();
	const [isPaymentModalVisible, setIsPaymentModalVisible] =
		useState<boolean>(false);

	const [value, setValue] = useState<number>(10);

	return (
		<View className="flex-1 m-3 flex gap-5 mt-10">
			<PaymentModal
				paymentType="top-up"
				isModalVisible={isPaymentModalVisible}
				setIsModalVisible={setIsPaymentModalVisible}
				paymentAmount={value}
			/>
			<View>
				<Text className="font-RalewaySemiBold text-FontColor text-[18px]">
					Aktualny stan konta
				</Text>
				<Text className="font-RalewaySemiBold text-[50px] text-center bg-white rounded-md p-3">
					{user?.balance}{' '}
					<Text className="text-[35px] font-RalewaySemiBold">zł</Text>
				</Text>
			</View>
			<View>
				<Text className="font-RalewaySemiBold text-FontColor text-[18px]">
					Doładuj konto
				</Text>
				<View className="flex bg-white p-3 rounded-md justify-center items-center gap-2">
					<View className="flex flex-row  items-center justify-center gap-5">
						<UnstyledButton
							w="w-[50px]"
							h="h-[50px]"
							onPressFn={() => {
								setValue((prev) => {
									const newValue = prev - 10;
									return newValue <= 10 ? 10 : newValue;
								});
							}}
							bgColor="bg-AppBackground"
							otherStyles="flex justify-center items-center rounder-md"
						>
							<Text className="text-[25px] font-RalewayRegular text-FontColor">
								-
							</Text>
						</UnstyledButton>
						<Text className="text-[25px] w-[70px] text-center font-RalewayRegular text-FontColor">
							{value} zł
						</Text>
						<UnstyledButton
							w="w-[50px]"
							h="h-[50px]"
							onPressFn={() => {
								setValue((prev) => prev + 10);
							}}
							bgColor="bg-AppBackground"
							otherStyles="flex justify-center items-center rounder-lg"
						>
							<Text className="text-[25px] font-RalewayRegular text-FontColor">
								+
							</Text>
						</UnstyledButton>
					</View>
					<Text className="font-RalewayRegular text-[12px] text-FontColor">
						Minimalna kwota doładowania to 10zł
					</Text>
					<PrimaryButton
						onPressFn={() => {
							setIsPaymentModalVisible(true);
						}}
						text="Doładuj konto"
					/>
				</View>
			</View>
			<View>
				<Text className="font-RalewaySemiBold text-FontColor text-[18px]">
					Historia transakcji
				</Text>
				<ScrollView className="h-[250px]">
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
					<Text>Test</Text>
				</ScrollView>
			</View>
		</View>
	);
};

export default AccountBalanceScreen;
