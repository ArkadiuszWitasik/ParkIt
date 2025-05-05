import { View, Text, Modal } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import BaseModal from '@/components/Modals/BaseModal';
import AddCarModal from '@/components/Modals/AddCarModal';
import Divider from '@/components/Divider';
import CarCard from '@/components/Cards/CarCard';

type CarListMockUpType = {
	carName: string;
	carRegistrationNumber: string;
}[];

const CarListMockUp: CarListMockUpType = [
	{
		carName: 'Volvo',
		carRegistrationNumber: 'NNI 24654',
	},
	{
		carName: 'Mazda',
		carRegistrationNumber: 'WWA 12342',
	},
];

const CarsScreen = () => {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const [carName, setCarName] = useState<string>('');

	const [carRegistrationNumber, setCarRegistrationNumber] =
		useState<string>('');

	console.log('Nazwa auta', carName);
	console.log('Nr rejestracyjny', carRegistrationNumber);

	return (
		<View className="flex-1 m-3 flex gap-3">
			<PrimaryButton
				onPressFn={() => setIsModalVisible(true)}
				text="Dodaj samochód"
			/>
			<AddCarModal
				carName={carName}
				setCarName={setCarName}
				carRegistrationNumber={carRegistrationNumber}
				setCarRegistrationNumber={setCarRegistrationNumber}
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			/>
			<Divider />
			{CarListMockUp.map((item, index) => (
				<CarCard
					carName={item.carName}
					carRegistrationNumber={item.carRegistrationNumber}
					key={index}
				/>
			))}
		</View>
	);
};

export default CarsScreen;
