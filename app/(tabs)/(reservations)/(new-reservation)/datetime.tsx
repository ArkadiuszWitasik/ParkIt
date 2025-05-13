import { View, Text } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Href, router } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useReservationStore } from '@/store/reservationStore';
import DropDownPicker from 'react-native-dropdown-picker';
import { useUserStore } from '@/store/userStore';

const ChooseTimeAndDateScreen = () => {
	const { updateReservation, reservation } = useReservationStore();
	const { user } = useUserStore();

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState<number | null>(null);
	const [items, setItems] = useState(
		user?.cars.map((car) => ({
			label: `${(car.carName, car.carRegistrationNumber)}`,
			value: car.carId,
		})) || []
	);

	const [date, setDate] = useState(new Date());
	const [startTime, setStartTime] = useState(new Date());
	const [endTime, setEndTime] = useState(new Date(Date.now() + 10 * 60 * 1000));

	const navigateForward = (path: Href) => {
		router.push(path);
	};

	const navigateBackwards = () => {
		router.back();
	};

	const handleCarChange = (selectedCarId: number | null) => {
		if (selectedCarId) {
			updateReservation({ carId: selectedCarId });
		}
	};

	const handleStartDateChange = (_: any, selectedDate: Date | undefined) => {
		if (selectedDate) {
			setDate(selectedDate);
			updateReservation({ date: selectedDate });
		}
	};

	const handleStartTimeChange = (_: any, selectedDate: Date | undefined) => {
		if (selectedDate) {
			setStartTime(selectedDate);
			updateReservation({ startTime: selectedDate });
		}
	};

	const handleEndTimeChange = (_: any, selectedDate: Date | undefined) => {
		if (selectedDate) {
			setEndTime(selectedDate);
			updateReservation({ endTime: selectedDate });
		}
	};

	return (
		<View className="flex-1 mt-10 mr-3 ml-3 flex flex-col gap-10 items-center">
			<Text className="font-RalewayRegular text-[24px]">
				Wybierz datę i godzinę
			</Text>
			<View className="flex flex-col gap-2 justify-center items-center">
				<View className="flex flex-row items-center justify-center">
					<DateTimePicker
						value={date}
						mode={'date'}
						is24Hour={true}
						onChange={handleStartDateChange}
						minimumDate={new Date()}
					/>
					<DateTimePicker
						value={startTime}
						mode={'time'}
						is24Hour={true}
						onChange={handleStartTimeChange}
						minimumDate={new Date()}
					/>
					<Text className="ml-3 font-RalewaySemiBold text-FontColor">-</Text>
					<DateTimePicker
						value={endTime}
						mode={'time'}
						is24Hour={true}
						onChange={handleEndTimeChange}
						minimumDate={new Date(Date.now() + 10 * 60 * 1000)}
					/>
				</View>
			</View>
			<View className="flex flex-col gap-2 justify-center items-center m-3 w-[70%]">
				<DropDownPicker
					placeholder="Wybierz auto"
					open={open}
					value={value}
					items={items}
					setOpen={setOpen}
					setValue={setValue}
					setItems={setItems}
					onChangeValue={() => handleCarChange(value)}
				/>
			</View>

			<View className="flex flex-row gap-2">
				<PrimaryButton onPressFn={() => navigateBackwards()} text="Anuluj" />
				<PrimaryButton
					disabled={!value}
					onPressFn={() =>
						navigateForward('/(tabs)/(reservations)/(new-reservation)/parking')
					}
					text="Wyszukaj parking"
				/>
			</View>
		</View>
	);
};

export default ChooseTimeAndDateScreen;
