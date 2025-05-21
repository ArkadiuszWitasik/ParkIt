import { Text, Pressable } from 'react-native';
import React from 'react';

type ParkingCardProps = {
	parkingId: string;
	parkingName: string;
	parkingSpacesLeft: number;
	selectedParking: string;
	onPressFn: () => void;
};

const ParkingCard = (props: ParkingCardProps) => {
	return (
		<Pressable
			onPress={props.onPressFn}
			className={`${
				props.parkingId === props.selectedParking
					? 'bg-AppPrimaryColor'
					: 'bg-white'
			} min-h-[50] p-3 rounded-md mb-4 z-30`}
		>
			<Text
				className={`font-MontserratRegular text-[18px] ${
					props.parkingId === props.selectedParking
						? 'text-white'
						: 'text-FontColor'
				}`}
			>
				{props.parkingName}
			</Text>
			<Text
				className={`font-MontserratRegular ${
					props.parkingId === props.selectedParking
						? 'text-white'
						: 'text-FontColor'
				}`}
			>
				{props.parkingSpacesLeft} wolnych miejsc
			</Text>
		</Pressable>
	);
};

export default ParkingCard;
