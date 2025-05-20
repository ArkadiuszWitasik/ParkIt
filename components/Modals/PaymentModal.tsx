import { View, Text, ActivityIndicator } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import BaseModal from './BaseModal';
import PrimaryButton from '../Buttons/PrimaryButton';
import { Reservation, useUserStore } from '@/store/userStore';
import { Href, router } from 'expo-router';
import CancelIcon from '@/assets/Icons/CancelIcon';
import { useReservationStore } from '@/store/reservationStore';
import CheckIcon from '@/assets/Icons/CheckIcon';
import { Timestamp } from 'firebase/firestore';

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
	const [isPaymentSuccess, setIsPaymentSuccess] = useState<boolean>(false);
	const [isPaymentError, setIsPaymentError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>('');

	const { user, updateUser } = useUserStore();

	const { resetReservation } = useReservationStore();

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

			if (newAccountBalance < 0) {
				setErrorMessage('Nie wystarczająca ilość środków.');
				setIsLoading(false);
				setIsPaymentError(true);
				return;
			}

			const userPaymentHistoryList = user?.paymentHistory || [];

			const newPayment = {
				paymentDate: Timestamp.fromDate(new Date()),
				paymentAmount: props.paymentAmount,
				paymentDesc: props.paymentType,
			};

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
						paymentHistory: [...userPaymentHistoryList, newPayment],
					});
				}
			} else if (props.paymentType === 'premium') {
				updateUser({
					...user,
					balance: newAccountBalance,
					isPremiumAccount: true,
					premiumExpireDate: Timestamp.fromDate(
						new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
					),
					paymentHistory: [...userPaymentHistoryList, newPayment],
				});
			} else if (props.paymentType === 'top-up') {
				updateUser({
					...user,
					balance: newAccountBalance,
					paymentHistory: [...userPaymentHistoryList, newPayment],
				});
			}
			setIsLoading(false);
			setIsPaymentSuccess(true);
		}, 2000);
	};

	return (
		<BaseModal
			w="w-[350px]"
			h="h-[250px]"
			isModalVisible={props.isModalVisible}
			setIsModalVisible={props.setIsModalVisible}
		>
			{!isLoading && !isPaymentError && !isPaymentSuccess && (
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
			{isLoading && (
				<View className="flex-1 flex-col justify-center items-center gap-3">
					<Text className="font-RalewayRegular text-FontColor text-[22px]">
						Przetwarzanie płatności
					</Text>
					<ActivityIndicator size="large" />
				</View>
			)}
			{isPaymentError && (
				<View className="flex-1 flex-col justify-center items-center gap-3">
					<CancelIcon
						color="#ef4444"
						style={{
							width: 48,
							height: 48,
						}}
					/>
					<Text className="font-RalewayRegular text-FontColor text-[20px]">
						{errorMessage}
					</Text>
					<View className="flex flex-row gap-2 mt-4">
						<PrimaryButton
							onPressFn={() => {
								props.setIsModalVisible(false);
								resetReservation();
								if (props.paymentType === 'reservation') {
									router.replace('/(tabs)/(reservations)');
								} else if (props.paymentType === 'premium') {
									router.replace('/(tabs)/(profile)/loyality');
								}
							}}
							text={
								props.paymentType === 'reservation'
									? 'Anuluj rezerwację'
									: 'Anuluj'
							}
						/>
						<PrimaryButton
							onPressFn={() => {
								props.setIsModalVisible(false);
								resetReservation();
								router.replace('/(tabs)/(profile)/balance');
							}}
							text="Doładuj konto"
						/>
					</View>
				</View>
			)}
			{isPaymentSuccess && (
				<View className="flex-1 flex-col justify-center items-center gap-3">
					<CheckIcon
						color="#22c55e"
						style={{
							width: 48,
							height: 48,
						}}
					/>
					<Text className="font-RalewayRegular text-FontColor text-[20px]">
						Płatność przebiegła pomyslnie!
					</Text>
					<Text className="font-RalewayRegular text-FontColor text-[16px] text-center">
						Dziekujemy za korzystanie z naszych uslug!
					</Text>
					<View className="flex flex-row gap-2 mt-4">
						<PrimaryButton
							onPressFn={() => {
								props.setIsModalVisible(false);
								resetReservation();
								if (props.paymentType === 'reservation') {
									router.replace('/(tabs)/(reservations)');
								}
							}}
							text="Ok"
						/>
					</View>
				</View>
			)}
		</BaseModal>
	);
};

export default PaymentModal;
