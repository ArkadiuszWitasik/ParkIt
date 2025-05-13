import { View, Text } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { Href, router } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useReservationStore } from '@/store/reservationStore';
import DropDownPicker from 'react-native-dropdown-picker';

const ChooseTimeAndDateScreen = () => {
	const { updateReservation, reservation } = useReservationStore();

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState<string | null>(null);
	const [items, setItems] = useState([
		{ label: 'Opcja 1', value: 'option1' },
		{ label: 'Opcja 2', value: 'option2' },
		{ label: 'Opcja 3', value: 'option3' },
	]);

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [startTime, setStartTime] = useState(new Date());
	const [endTime, setEndTime] = useState(new Date(Date.now() + 10 * 60 * 1000));

	const navigate = (path: Href) => {
		router.replace(path);
	};

	const handleStartDateChange = (_: any, selectedDate: Date | undefined) => {
		if (selectedDate) {
			setStartDate(selectedDate);
			updateReservation({ startDate: selectedDate });
		}
	};

	const handleEndDateChange = (_: any, selectedDate: Date | undefined) => {
		if (selectedDate) {
			setEndDate(selectedDate);
			updateReservation({ endDate: selectedDate });
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
		<View className="flex-1 mt-10 mr-3 ml-3 mb- flex flex-col gap-10 items-center">
			<Text className="font-RalewayRegular text-[24px]">
				Wybierz datę i godzinę
			</Text>
			<View className="flex flex-col gap-2 justify-center items-center">
				<Text className="font-RalewayRegular ">Początek rezerwacji</Text>
				<View className="flex flex-row gap-2">
					<DateTimePicker
						value={startDate}
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
				</View>
			</View>
			<View className="flex flex-col gap-2 justify-center items-center">
				<Text className="font-RalewayRegular ">Koniec rezerwacji</Text>
				<View className="flex flex-row gap-2">
					<DateTimePicker
						value={endDate}
						mode={'date'}
						is24Hour={true}
						onChange={handleEndDateChange}
						minimumDate={new Date()}
					/>
					<DateTimePicker
						value={endTime}
						mode={'time'}
						is24Hour={true}
						onChange={handleEndTimeChange}
						minimumDate={
							startDate.toDateString() === endDate.toDateString()
								? new Date(Date.now() + 10 * 60 * 1000)
								: undefined
						}
					/>
				</View>
				<DropDownPicker
					open={open}
					value={value}
					items={items}
					setOpen={setOpen}
					setValue={setValue}
					setItems={setItems}
				/>
			</View>

			<PrimaryButton
				onPressFn={() =>
					navigate('/(tabs)/(reservations)/(new-reservation)/parking')
				}
				text="Wyszukaj parking"
			/>
		</View>
	);
};

export default ChooseTimeAndDateScreen;
