import { View, Modal } from 'react-native';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';

type BaseModalProps = {
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
	children?: ReactNode;
};

const BaseModal = (props: BaseModalProps) => {
	return (
		<Modal
			visible={props.isModalVisible}
			transparent={true}
			animationType="fade"
		>
			<View className="flex-1 flex items-center justify-center">
				<View className="w-[100vw] h-[100vh] absolute bg-black opacity-20" />
				<View className="min-w-[250px] min-h-[200px] bg-AppBackground rounded-md z-10">
					{props.children}
				</View>
			</View>
		</Modal>
	);
};

export default BaseModal;
