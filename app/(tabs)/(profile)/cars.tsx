import { View } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import AddCarModal from '@/components/Modals/AddCarModal';
import Divider from '@/components/Divider';
import CarCard from '@/components/Cards/CarCard';
import { useCarStore } from '@/store/carStore';

const CarsScreen = () => {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const { cars } = useCarStore();

	return (
		<View className="flex-1 m-3 flex gap-3">
			<PrimaryButton
				onPressFn={() => setIsModalVisible(true)}
				text="Dodaj samochód"
			/>
			<AddCarModal
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			/>
			<Divider />
			{cars.map((car) => (
				<CarCard
					id={car.id}
					carName={car.carName}
					carRegistrationNumber={car.carRegistrationNumber}
					key={car.id}
				/>
			))}
		</View>
	);
};

export default CarsScreen;
