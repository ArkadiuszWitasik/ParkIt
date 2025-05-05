import { View, Text } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import BaseModal from './BaseModal';
import PrimaryButton from '../Buttons/PrimaryButton';
import CustomInput from '../CustomInput';
import OutlineButton from '../Buttons/OutlineButton';

type AddCarModalProps = {
	carName: string;
	setCarName: Dispatch<SetStateAction<string>>;
	carRegistrationNumber: string;
	setCarRegistrationNumber: Dispatch<SetStateAction<string>>;
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

const AddCarModal = (props: AddCarModalProps) => {
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
						value={props.carName}
						onChange={(event) => {
							props.setCarName(event.nativeEvent.text);
						}}
						label="Nazwa auta"
						textInputStyles="bg-SecoundLayer w-full h-[50px] rounded-md"
						placeholder="Auto"
						inputMode="text"
					/>

					<CustomInput
						value={props.carRegistrationNumber}
						onChange={(event) => {
							props.setCarRegistrationNumber(event.nativeEvent.text);
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
							props.setCarName('');
							props.setCarRegistrationNumber('');
						}}
						text="Anuluj"
					/>
					<PrimaryButton
						onPressFn={() => {
							props.setIsModalVisible(false);
							props.setCarName('');
							props.setCarRegistrationNumber('');
						}}
						text="Dodaj"
					/>
				</View>
			</View>
		</BaseModal>
	);
};

export default AddCarModal;
