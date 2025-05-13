import { create } from 'zustand';

export interface Car {
	carId: number;
	carName: string;
	carRegistrationNumber: string;
}

export interface Reservation {
	reservationId: number;
	reservationDate: Date;
	reservationStartTime: Date;
	reservationEndTime: Date;
	reservationParkingId: string;
	reservationSpotId: string;
}

export interface User {
	userId: string;
	isDiscountApplyed: boolean;
	loyalityCount: number;
	reservations: Reservation[];
	cars: Car[];
	balance: number;
}

export interface UserState {
	user: User | null;
	setUser: (data: User) => void;
	updateUser: (data: User) => void;
}

export const useUserStore = create<UserState>()((set) => ({
	user: null,
	setUser: (data) =>
		set(() => ({
			user: data,
		})),
	updateUser: (data) =>
		set((state) => ({
			user: { ...state.user, ...data },
		})),
}));
