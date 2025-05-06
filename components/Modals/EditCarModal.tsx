import { View, Text } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import BaseModal from './BaseModal';
import PrimaryButton from '../Buttons/PrimaryButton';
import CustomInput from '../CustomInput';
import OutlineButton from '../Buttons/OutlineButton';
import { useCarStore } from '@/store/carStore';

type EditCarModalProps = {
	carId: number;
	carName: string;
	carRegistrationNumber: string;
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

const EditCarModal = (props: EditCarModalProps) => {
	const [carName, setCarName] = useState<string>(props.carName);

	const [carRegistrationNumber, setCarRegistrationNumber] = useState<string>(
		props.carRegistrationNumber
	);

	const { editCar } = useCarStore();

	const handleEditCar = () => {
		editCar({
			id: props.carId,
			carName: carName,
			carRegistrationNumber: carRegistrationNumber,
		});
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
					Edytowanie auta
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
					<OutlineButton
						onPressFn={() => {
							props.setIsModalVisible(false);
						}}
						text="Anuluj"
					/>
					<PrimaryButton
						onPressFn={() => {
							handleEditCar();
							props.setIsModalVisible(false);
						}}
						text="Edytuj"
					/>
				</View>
			</View>
		</BaseModal>
	);
};

export default EditCarModal;
