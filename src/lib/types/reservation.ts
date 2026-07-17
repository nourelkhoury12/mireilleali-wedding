export interface ReservationRequest {
	name: string;
	email?: string;
	phone: string;
	attend: boolean;
	guests: number;
	message?: string;
}

export interface ReservationResponse {
	success: boolean;
	message: string;
}