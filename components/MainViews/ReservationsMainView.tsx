import { Text, View } from 'react-native';
import React from 'react';
import CalendarIcon from '@/assets/Icons/CalendarIcon';
import ArrowUpRightIcon from '@/assets/Icons/ArrowUpRightIcon';

const ReservationsMainView = () => {
	return (
		<View className="p-3 flex flex-col gap-5">
			<View className="flex flex-row justify-between items-center">
				<Text className="font-MontserratRegular text-FontColor text-[18px]">
					Rezerwacje
				</Text>
			</View>
			<View className="flex flex-row justify-between items-center">
				<View className="flex-row gap-2 items-center">
					<View className="bg-LightKhaki w-[50] h-[50] rounded-[50] flex justify-center items-center">
						<CalendarIcon style={{ width: 24, height: 24 }} />
					</View>
					<View className="flex gap-1 flex-col">
						<Text className="font-MontserratBold text-FontColor text-[16px]">
							Aura
						</Text>
						<Text className="font-MontserratRegular text-FontColor text-[16px]">
							Parking 15A
						</Text>
						<Text className="font-MontserratRegular text-FontColor text-[16px]">
							17:00 - 20:30
						</Text>
					</View>
				</View>
				<ArrowUpRightIcon style={{ width: 24, height: 24 }} />
			</View>
		</View>
	);
};

export default ReservationsMainView;
