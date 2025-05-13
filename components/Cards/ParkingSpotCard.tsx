import { View, Text, Pressable } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';

type SpotType = {
	spotId: number;
	spotName: string;
	spotStatus: number;
};

type ParkingSpotCardProps = {
	zoneId: number;
	zoneName: string;
	spots: SpotType[];
	selectedSpot: string;
	onPressFn: Dispatch<SetStateAction<string>>;
};

const ParkingSpotCard = (props: ParkingSpotCardProps) => {
	return (
		<View>
			<Text className="font-RalewayBold text-FontColor mb-2 ml-3">
				Strefa {props.zoneName}
			</Text>
			<View className="w-full justify-center flex flex-row gap-2 flex-wrap">
				{props.spots.map((spot) => (
					<Pressable
						key={`${spot.spotId}-${spot.spotName}-${props.zoneName}`}
						onPress={() =>
							props.onPressFn(
								`${spot.spotId}-${spot.spotName}-${props.zoneName}`
							)
						}
						className={`${
							props.selectedSpot ===
							`${spot.spotId}-${spot.spotName}-${props.zoneName}`
								? 'bg-AppPrimaryColor'
								: 'bg-white'
						} w-[30%] h-[50px] flex justify-center items-center rounded-md`}
					>
						<Text>{spot.spotName}</Text>
					</Pressable>
				))}
			</View>
		</View>
	);
};

export default ParkingSpotCard;
