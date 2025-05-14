import { create } from 'zustand';

export interface Reservation {
	reservationId: number;
	reservationDate: Date;
	reservationStartTime: Date;
	reservationEndTime: Date;
	reservationParkingId: string;
	reservationSpotId: string;
	reservationPrice: number;
	reservationStatus: number;
	carId: number;
}

export interface ReservationState {
	reservation: Reservation;
	updateReservation: (data: Partial<Reservation>) => void;
	resetReservation: () => void;
}

export const useReservationStore = create<ReservationState>()((set) => ({
	reservation: {
		reservationId: 1,
		reservationDate: new Date(),
		reservationStartTime: new Date(),
		reservationEndTime: new Date(Date.now() + 10 * 60 * 1000),
		reservationParkingId: '0',
		reservationSpotId: '',
		reservationPrice: 0,
		reservationStatus: 0,
		carId: 0,
	},

	updateReservation: (data: Partial<Reservation>) =>
		set((state) => {
			if (!state.reservation) {
				return state;
			}
			const updatedReservation = { ...state.reservation, ...data };

			return {
				reservation: updatedReservation,
			};
		}),

	resetReservation: () =>
		set({
			reservation: {
				reservationId: 1,
				reservationDate: new Date(),
				reservationStartTime: new Date(),
				reservationEndTime: new Date(Date.now() + 10 * 60 * 1000),
				reservationParkingId: '0',
				reservationSpotId: '',
				reservationStatus: 0,
				reservationPrice: 0,
				carId: 0,
			},
		}),
}));
