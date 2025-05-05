import { View, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';

type BaseModalProps = {
	w: string;
	h: string;
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
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View className="flex-1 flex items-center justify-center">
					<View className="w-[100vw] h-[100vh] absolute bg-black opacity-20" />
					<View
						className={`bg-AppBackground rounded-md z-10 ${props.w} ${props.h}`}
					>
						{props.children}
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

export default BaseModal;
