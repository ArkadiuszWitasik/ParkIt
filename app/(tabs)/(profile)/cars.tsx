import { View } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import AddCarModal from '@/components/Modals/AddCarModal';
import Divider from '@/components/Divider';
import CarCard from '@/components/Cards/CarCard';
import { useUserStore } from '@/store/userStore';

const CarsScreen = () => {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const { user } = useUserStore();

	return (
		<View className="flex-1 m-3 flex gap-3">
			<PrimaryButton
				style="primary"
				onPressFn={() => setIsModalVisible(true)}
				text="Dodaj samochód"
			/>
			<AddCarModal
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			/>
			<Divider />
			{user?.cars.map((car) => (
				<CarCard
					id={car.carId}
					carName={car.carName}
					carRegistrationNumber={car.carRegistrationNumber}
					key={car.carId}
				/>
			))}
		</View>
	);
};

export default CarsScreen;
