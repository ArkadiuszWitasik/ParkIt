import { View, Text } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import BaseModal from './BaseModal';
import PrimaryButton from '../Buttons/PrimaryButton';
import CustomInput from '../CustomInput';
import { useCarStore } from '@/store/carStore';

type AddCarModalProps = {
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

const AddCarModal = (props: AddCarModalProps) => {
	const [carName, setCarName] = useState<string>('');

	const [carRegistrationNumber, setCarRegistrationNumber] =
		useState<string>('');

	const { addCar } = useCarStore();

	const handleAddNewCar = () => {
		addCar({
			id: 4,
			carName: carName,
			carRegistrationNumber: carRegistrationNumber,
		});
		setCarName('');
		setCarRegistrationNumber('');
	};

	return (
		<BaseModal
			w="w-[350px]"
			h="h-[300px]"
			isModalVisible={props.isModalVisible}
			setIsModalVisible={props.setIsModalVisible}
		>
			<View className="flex-1 flex-col justify-around items-center">
				<Text className="text-FontColor font-MontserratSemiBold">
					Dodawanie auta
				</Text>
				<View className="w-[80%] flex flex-col gap-3">
					<CustomInput
						value={carName}
						onChange={(event) => {
							setCarName(event.nativeEvent.text);
						}}
						label="Nazwa auta"
						textInputStyles="bg-SecoundLayer w-full h-[50px] rounded-md"
						placeholder="Auto"
						inputMode="text"
					/>

					<CustomInput
						value={carRegistrationNumber}
						onChange={(event) => {
							setCarRegistrationNumber(event.nativeEvent.text);
						}}
						label="Numer rejestracyjny"
						textInputStyles="bg-SecoundLayer w-full h-[50px] rounded-md"
						placeholder="Numer"
						inputMode="text"
					/>
				</View>

				<View className="flex flex-row gap-2">
					<PrimaryButton
						onPressFn={() => {
							props.setIsModalVisible(false);
							setCarName('');
							setCarRegistrationNumber('');
						}}
						text="Anuluj"
					/>
					<PrimaryButton
						onPressFn={() => {
							handleAddNewCar();
							props.setIsModalVisible(false);
						}}
						text="Dodaj"
					/>
				</View>
			</View>
		</BaseModal>
	);
};

export default AddCarModal;
