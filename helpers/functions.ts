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

export { formatFirebaseTimestamp };
