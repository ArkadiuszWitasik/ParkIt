import { View, Text, Modal } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import BaseModal from '@/components/Modals/BaseModal';

const CarsScreen = () => {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	return (
		<View className="flex-1 m-3 flex">
			<PrimaryButton
				onPressFn={() => setIsModalVisible(true)}
				text="Dodaj samochód"
			/>
			<BaseModal
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			>
				<PrimaryButton
					onPressFn={() => setIsModalVisible(false)}
					text="Zamknij"
				/>
			</BaseModal>
		</View>
	);
};

export default CarsScreen;
