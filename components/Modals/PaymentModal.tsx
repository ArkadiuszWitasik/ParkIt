import { View, Text, ActivityIndicator } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import BaseModal from './BaseModal';
import PrimaryButton from '../Buttons/PrimaryButton';
import { Reservation, useUserStore } from '@/store/userStore';
import { Href, router } from 'expo-router';

type PaymentModalProps = {
	paymentType: 'reservation' | 'top-up' | 'premium' | 'refund';
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
	paymentAmount: number;
	navigate?: Href;
	reservation?: Reservation;
};

const PaymentModal = (props: PaymentModalProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { user, updateUser } = useUserStore();

	let modalInfoText = '';

	let userLoyalityCount = user!.loyalityCount;
	let applyDiscount = false;

	if (props.paymentType === 'reservation') {
		modalInfoText = 'Czy chcesz zapłacić za rezerwację?';
	} else if (props.paymentType === 'top-up') {
		modalInfoText = 'Czy chcesz doładować konto?';
	} else if (props.paymentType === 'premium') {
		modalInfoText = 'Czy chcesz zapłacić za premium?';
	} else if (props.paymentType === 'refund') {
		modalInfoText = 'Czy chcesz otrzymać zwrot?';
	}

	const handleProcessPayment = () => {
		setIsLoading(true);

		setTimeout(() => {
			const newAccountBalance = user!.balance + props.paymentAmount;

			if (props.reservation) {
				if (user) {
					const userReservationList = user.reservations;

					userLoyalityCount += 1;

					if (userLoyalityCount === 5) {
						applyDiscount = true;
					}
					if (userLoyalityCount === 6) {
						applyDiscount = false;
						userLoyalityCount = 0;
					}

					updateUser({
						...user,
						balance: newAccountBalance,
						loyalityCount: userLoyalityCount,
						isDiscountApplyed: applyDiscount,
						reservations: [...userReservationList, props.reservation],
					});
				}
			} else {
				updateUser({
					...user,
					balance: newAccountBalance,
				});
			}
			props.setIsModalVisible(false);
			setIsLoading(false);

			if (props.navigate) {
				router.navigate(props.navigate);
			}
		}, 2000);
	};

	return (
		<BaseModal
			w="w-[350px]"
			h="h-[250px]"
			isModalVisible={props.isModalVisible}
			setIsModalVisible={props.setIsModalVisible}
		>
			{isLoading ? (
				<View className="flex-1 flex-col justify-center items-center gap-3">
					<Text className="font-RalewayRegular text-FontColor text-[22px]">
						Przetwarzanie płatności
					</Text>
					<ActivityIndicator size="large" />
				</View>
			) : (
				<View className="flex-1 flex-col items-center justify-around">
					<Text className="font-RalewayRegular text-FontColor text-[18px]">
						{modalInfoText}
					</Text>
					<Text className="font-RalewayRegular text-FontColor text-[18px]">
						Kwota {props.paymentAmount} zł
					</Text>
					<View className=" flex-row justify-center items-center gap-2">
						<PrimaryButton
							onPressFn={() => {
								props.setIsModalVisible(false);
							}}
							text="Anuluj"
						/>
						<PrimaryButton onPressFn={handleProcessPayment} text="Tak" />
					</View>
				</View>
			)}
		</BaseModal>
	);
};

export default PaymentModal;
