import { View, Text } from 'react-native';
import React from 'react';
import { Payment } from '@/store/userStore';

type PaymentHistoryCardProps = {
	payment: Payment;
};

const PaymentHistoryCard = (props: PaymentHistoryCardProps) => {
	let paymentDesc = '';

	if (props.payment.paymentDesc === 'top-up') {
		paymentDesc = 'Doładowanie konta';
	} else if (props.payment.paymentDesc === 'reservation') {
		paymentDesc = 'Rezerwacja';
	} else if (props.payment.paymentDesc === 'premium') {
		paymentDesc = 'Aktywacja konta premium';
	} else if (props.payment.paymentDesc === 'refund') {
		paymentDesc = 'Zwrot środków';
	}
	return (
		<View className="mt-3 flex flex-row gap-3">
			<Text className="font-RalewayRegular text-FontColor text-[16px]">
				{props.payment.paymentDate.toDate().toLocaleDateString()}
			</Text>
			<Text className="font-RalewayRegular text-FontColor text-[16px]">|</Text>
			<Text className="font-RalewayRegular text-FontColor text-[16px]">
				{paymentDesc}
			</Text>
			<Text
				className={`font-RalewaySemiBold ${
					props.payment.paymentAmount < 0 ? 'text-red-500' : 'text-green-500'
				} text-[16px]`}
			>
				{props.payment.paymentAmount} zł
			</Text>
		</View>
	);
};

export default PaymentHistoryCard;
