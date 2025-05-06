import { View, Text } from 'react-native';
import React, { useState } from 'react';
import UnstyledButton from '../Buttons/UnstyledButton';
import EditIcon from '@/assets/Icons/EditIcon';
import DeleteIcon from '@/assets/Icons/DeleteIcon';
import CarIcon from '@/assets/Icons/CarIcon';
import EditCarModal from '../Modals/EditCarModal';
import DeleteCarModal from '../Modals/DeleteCarModal';

type CarCardProps = {
	id: number;
	carName: string;
	carRegistrationNumber: string;
};

const CarCard = (props: CarCardProps) => {
	const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
	const [isDeleteModalVisible, setIsDeleteModalVisible] =
		useState<boolean>(false);

	return (
		<View className="bg-Khaki flex flex-row justify-between rounded-2xl">
			<EditCarModal
				isModalVisible={isEditModalVisible}
				setIsModalVisible={setIsEditModalVisible}
				carId={props.id}
				carName={props.carName}
				carRegistrationNumber={props.carRegistrationNumber}
			/>
			<DeleteCarModal
				isModalVisible={isDeleteModalVisible}
				setIsModalVisible={setIsDeleteModalVisible}
				carId={props.id}
				carName={props.carName}
				carRegistrationNumber={props.carRegistrationNumber}
			/>
			<View className="w-[15%] flex justify-center items-center pl-5">
				<CarIcon
					style={{
						width: 24,
						height: 24,
					}}
				/>
			</View>
			<View className="w-[50%] flex justify-center">
				<Text className="font-MontserratRegular text-FontColor text-[22px]">
					{props.carName},
				</Text>
				<Text className="font-MontserratRegular text-FontColor text-[24px]">
					{props.carRegistrationNumber}
				</Text>
			</View>
			<View className="w-[15%] flex justify-center">
				<UnstyledButton
					onPressFn={() => setIsEditModalVisible(true)}
					w="w-[50px]"
				>
					<EditIcon
						style={{
							width: 24,
							height: 24,
						}}
					/>
				</UnstyledButton>
				<UnstyledButton
					onPressFn={() => setIsDeleteModalVisible(true)}
					w="w-[50px]"
				>
					<DeleteIcon
						style={{
							width: 24,
							height: 24,
						}}
					/>
				</UnstyledButton>
			</View>
		</View>
	);
};

export default CarCard;
