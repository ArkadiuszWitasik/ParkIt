import { create } from 'zustand';

export interface Reservation {
	id: number;
	date: Date;
	startTime: Date;
	endTime: Date;
	parkingId: string;
	spotId: string;
	carId: number;
	price: number;
}

const defaultDates = () => {
	return {
		date: new Date(),
		startTime: new Date(),
		endTime: new Date(Date.now() + 10 * 60 * 1000),
	};
};

const initialReservation: Partial<Reservation> = {
	...defaultDates(),
	parkingId: '0',
	spotId: '',
	carId: 0,
	price: 0,
};

export interface ReservationState {
	reservation: Partial<Reservation>;
	updateReservation: (data: Partial<Reservation>) => void;
	resetReservation: () => void;
}

export const useReservationStore = create<ReservationState>()((set) => ({
	reservation: initialReservation,

	updateReservation: (data) =>
		set((state) => ({
			reservation: { ...state.reservation, ...data },
		})),

	resetReservation: () =>
		set({
			reservation: {
				...defaultDates(),
				parkingId: '0',
				spotId: '',
				carId: 0,
				price: 0,
			},
		}),
}));
