import { create } from 'zustand';

export interface Car {
	id: number;
	carName: string;
	carRegistrationNumber: string;
}

export interface CarState {
	cars: Array<Car>;
	addCar: (car: Car) => void;
	editCar: (car: Car) => void;
	deleteCar: (car: Car) => void;
}

export const useCarStore = create<CarState>()((set, get) => ({
	cars: [
		{ id: 1, carName: 'Volvo', carRegistrationNumber: 'NNI 12345' },
		{ id: 2, carName: 'Mazda', carRegistrationNumber: 'WWA 12342' },
		{ id: 3, carName: 'BMW', carRegistrationNumber: 'NO 12342' },
	],
	addCar: (car: Car) => {
		set((state) => ({
			cars: [...state.cars, car],
		}));
	},
	editCar: (updatedCar: Car) => {
		set((state) => ({
			cars: state.cars.map((car) =>
				car.id === updatedCar.id ? updatedCar : car
			),
		}));
	},
	deleteCar: (carToDelete: Car) => {
		set((state) => ({
			cars: state.cars.filter((car) => car.id !== carToDelete.id),
		}));
	},
}));
