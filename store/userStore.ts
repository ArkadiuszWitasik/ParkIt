import { db } from '@/db/store';
import { doc, setDoc } from 'firebase/firestore';
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
	updateUser: (data: Partial<User>) => void;
}

export const useUserStore = create<UserState>()((set) => ({
	user: null,
	setUser: (data) =>
		set(() => ({
			user: data,
		})),
	updateUser: (data: Partial<User>) =>
		set((state) => {
			if (!state.user) {
				return state;
			}

			const updatedUser = { ...state.user, ...data };

			saveUserToFirebase(updatedUser).catch((error) => {
				console.error('Error during saving user data to Firebase:', error);
			});

			return {
				user: updatedUser,
			};
		}),
}));

const saveUserToFirebase = async (user: User) => {
	if (!user.userId) {
		throw new Error('No userId provided');
	}

	const userDocRef = doc(db, 'users', user.userId);
	await setDoc(userDocRef, user);
};
