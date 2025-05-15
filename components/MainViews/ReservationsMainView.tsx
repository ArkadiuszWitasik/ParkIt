import { Text, View } from 'react-native';
import React from 'react';
import CalendarIcon from '@/assets/Icons/CalendarIcon';
import ArrowUpRightIcon from '@/assets/Icons/ArrowUpRightIcon';
import { useUserStore } from '@/store/userStore';
import { Timestamp } from 'firebase/firestore';
import { formatFirebaseTimestamp } from '@/helpers/functions';
import { useParkingLotsStore } from '@/store/parkingLotsStore';

const ReservationsMainView = () => {
	const { user } = useUserStore();
	const { parkingLots } = useParkingLotsStore();

	let closestReservation;
	if (user) {
		const today = new Date();

		const activeReservations = user.reservations.filter(
			(reservation) => reservation.reservationStatus <= 1
		);

		closestReservation = activeReservations?.reduce((closest, current) => {
			let tmpClosest: any = closest.reservationDate;
			let tmpCurrent: any = current.reservationDate;

			let currentDate = new Date(tmpCurrent.toDate());
			let closestdate = new Date(tmpClosest.toDate());

			const closestDiff = Math.abs(closestdate.getTime() - today.getTime());
			const currentDiff = Math.abs(currentDate.getTime() - today.getTime());

			return currentDiff < closestDiff ? current : closest;
		});
	}

	const { formatedDate, formatedStartTime, formatedEndTime } =
		formatFirebaseTimestamp(
			closestReservation!.reservationDate,
			closestReservation!.reservationStartTime,
			closestReservation!.reservationEndTime
		);

	const choosenParkingLotName = parkingLots.find(
		(parking) => parking.parkingId === closestReservation!.reservationParkingId
	)?.parkingName;

	const zoneAndSpotSplit = closestReservation!.reservationSpotId?.split('-');

	const choosenZoneAndSpot = zoneAndSpotSplit
		? zoneAndSpotSplit![2] + ' - ' + zoneAndSpotSplit![1]
		: ' ';

	return (
		<View className="p-3 flex flex-col gap-5">
			<View className="flex flex-row justify-between items-center">
				<Text className="font-MontserratRegular text-FontColor text-[18px]">
					Rezerwacje
				</Text>
			</View>
			<View className="flex flex-row justify-between items-center">
				<View className="flex-row gap-2 items-center">
					{closestReservation ? (
						<>
							<View className="bg-AppBackground w-[50] h-[50] rounded-[50] flex justify-center items-center">
								<CalendarIcon style={{ width: 24, height: 24 }} />
							</View>

							<View className="flex gap-1 flex-col">
								<Text className="font-MontserratBold text-FontColor text-[16px]">
									{choosenParkingLotName}
								</Text>
								<Text className="font-MontserratRegular text-FontColor text-[16px]">
									{choosenZoneAndSpot}
								</Text>
								<Text className="font-MontserratRegular text-FontColor text-[16px]">
									{formatedDate.toLocaleDateString()}{' '}
									{formatedStartTime.toLocaleTimeString()} -{' '}
									{formatedEndTime.toLocaleTimeString()}
								</Text>
							</View>
						</>
					) : (
						<Text className="w-[90%] font-MontserratRegular text-FontColor">
							Na twoim koncie nie zarejestrowaliśmy jeszcze żadnych rezerwacji.
							Przejdź do zakładki rezerwację by dokonać swojej pierwszej!
						</Text>
					)}
				</View>
				<ArrowUpRightIcon style={{ width: 24, height: 24 }} />
			</View>
		</View>
	);
};

export default ReservationsMainView;
