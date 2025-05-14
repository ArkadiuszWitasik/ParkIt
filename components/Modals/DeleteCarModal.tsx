import { View, Text } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import BaseModal from './BaseModal';
import PrimaryButton from '../Buttons/PrimaryButton';

import { useUserStore } from '@/store/userStore';

type DeleteCarModalProps = {
	carId: number;
	carName: string;
	carRegistrationNumber: string;
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

const DeleteCarModal = (props: DeleteCarModalProps) => {
	const { updateUser, user } = useUserStore();

	const handleDeleteCar = () => {
		const userCarList = user?.cars || [];

		const updatedCarList = userCarList.filter(
			(car) => car.carId !== props.carId
		);

		updateUser({
			...user,
			cars: updatedCarList,
		});
	};

	return (
		<BaseModal
			w="w-[350px]"
			h="h-[250px]"
			isModalVisible={props.isModalVisible}
			setIsModalVisible={props.setIsModalVisible}
		>
			<View className="flex-1 flex-col justify-around items-center">
				<Text className="text-FontColor font-MontserratSemiBold">
					Czy chcesz usunąć auto?
				</Text>
				<Text className="text-FontColor font-MontserratRegular">
					{props.carName}, {props.carRegistrationNumber}
				</Text>
				<View className="flex flex-row gap-2">
					<PrimaryButton
						onPressFn={() => {
							props.setIsModalVisible(false);
						}}
						text="Anuluj"
					/>
					<PrimaryButton
						onPressFn={() => {
							handleDeleteCar();
							props.setIsModalVisible(false);
						}}
						text="Usuń"
					/>
				</View>
			</View>
		</BaseModal>
	);
};

export default DeleteCarModal;
