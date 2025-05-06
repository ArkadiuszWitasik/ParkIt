import { View, Text } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import BaseModal from './BaseModal';
import PrimaryButton from '../Buttons/PrimaryButton';
import CustomInput from '../CustomInput';
import OutlineButton from '../Buttons/OutlineButton';
import { useCarStore } from '@/store/carStore';

type DeleteCarModalProps = {
	carId: number;
	carName: string;
	carRegistrationNumber: string;
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

const DeleteCarModal = (props: DeleteCarModalProps) => {
	const { deleteCar } = useCarStore();

	const handleDeleteCar = () => {
		deleteCar({
			id: props.carId,
			carName: props.carName,
			carRegistrationNumber: props.carRegistrationNumber,
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
					<OutlineButton
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
