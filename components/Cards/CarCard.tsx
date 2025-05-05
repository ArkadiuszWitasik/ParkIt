import { View, Text } from 'react-native';
import React, { useState } from 'react';
import UnstyledButton from '../Buttons/UnstyledButton';
import EditIcon from '@/assets/Icons/EditIcon';
import DeleteIcon from '@/assets/Icons/DeleteIcon';

type CarCardProps = {
	carName: string;
	carRegistrationNumber: string;
};

const CarCard = (props: CarCardProps) => {
	const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
	const [isDeleteModalVisible, setIsDeleteModalVisible] =
		useState<boolean>(false);

	return (
		<View className="bg-Khaki flex flex-row justify-between rounded-tl-2xl rounded-bl-2xl">
			<View className="flex justify-center items-center p-2">
				<View className="w-3 h-3 bg-black rounded-full" />
			</View>
			<View className="w-[50%] flex justify-center">
				<Text className="font-MontserratRegular text-FontColor text-[22px]">
					{props.carName},
				</Text>
				<Text className="font-MontserratRegular text-FontColor text-[24px]">
					{props.carRegistrationNumber}
				</Text>
			</View>
			<View>
				<UnstyledButton onPressFn={() => setIsEditModalVisible(true)}>
					<EditIcon
						style={{
							width: 24,
							height: 24,
						}}
					/>
				</UnstyledButton>
				<UnstyledButton onPressFn={() => setIsDeleteModalVisible(true)}>
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
