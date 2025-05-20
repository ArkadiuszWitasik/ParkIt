import { create } from 'zustand';

export interface Spot {
	spotId: number;
	spotName: string;
	spotStatus: number;
}

export interface Zone {
	zoneId: number;
	zoneName: string;
	spots: Spot[];
}

export interface Parking {
	parkingId: string;
	parkingName: string;
	parkingLocation: {
		latitude: number;
		longitude: number;
	};
	parkingSpacesLeft: number;
	parkingRatePerMin: number;
	zones: Zone[];
}

export interface ParkingLotsState {
	parkingLots: Parking[];
	setParkingLots: (data: Parking[]) => void;
	updateParkingLots: (data: Parking[]) => void;
}

export const useParkingLotsStore = create<ParkingLotsState>()((set) => ({
	parkingLots: [],
	setParkingLots: (data) =>
		set(() => ({
			parkingLots: data,
		})),
	updateParkingLots: (data) =>
		set((state) => ({
			parkingLots: [...state.parkingLots, ...data],
		})),
}));
