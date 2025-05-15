const formatFirebaseTimestamp = (
	date: Date,
	startTime: Date,
	endTime: Date
) => {
	const tmpReservationDate: any = date;
	const tmpReservationStartTime: any = startTime;
	const tmpReservationEndTime: any = endTime;

	const formatedDate = new Date(
		tmpReservationDate.seconds * 1000 + tmpReservationDate.nanoseconds / 1000000
	);

	const formatedStartTime = new Date(
		tmpReservationStartTime.seconds * 1000 +
			tmpReservationStartTime.nanoseconds / 1000000
	);

	const formatedEndTime = new Date(
		tmpReservationEndTime.seconds * 1000 +
			tmpReservationEndTime.nanoseconds / 1000000
	);

	return { formatedDate, formatedStartTime, formatedEndTime };
};

const reservationStatusDecrypt = (status: number) => {
	let statusText = '';
	let statusColor = '';
	let statusTextColor = '';

	switch (status) {
		case 0:
			statusText = 'Nadchodzące';
			statusColor = 'bg-gray-200';
			statusTextColor = 'text-gray-500';
			break;
		case 1:
			statusText = 'W trakcie';
			statusColor = 'bg-blue-200';
			statusTextColor = 'text-blue-500';
			break;
		case 2:
			statusText = 'Zakończono';
			statusColor = 'bg-green-200';
			statusTextColor = 'text-green-500';
			break;
		case 3:
			statusText = 'Anulowano';
			statusColor = 'bg-red-200';
			statusTextColor = 'text-red-500';
			break;

		default:
			statusText = 'Nieznany status';
			statusColor = 'bg-gray-200';
			statusTextColor = 'text-gray-500';
			break;
	}

	return { statusText, statusColor, statusTextColor };
};

export { formatFirebaseTimestamp, reservationStatusDecrypt };
