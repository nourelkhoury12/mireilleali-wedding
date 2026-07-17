import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { db } from '$lib/server/db';
import { reservations } from '$lib/server/schema';

import type {
	ReservationRequest,
	ReservationResponse
} from '$lib/types/reservation';

export const POST: RequestHandler = async ({ request }) => {
	try {
		console.log("=== RSVP API CALLED ===");
		console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);

		const body: ReservationRequest = await request.json();
		console.log("Request body:", body);
		//const body: ReservationRequest = await request.json();

		const {
			name,
			email,
			phone,
			attend,
			guests,
			message
		} = body;

		// Required fields
		if (!name || !phone) {
			const response: ReservationResponse = {
				success: false,
				message: 'Please complete all required fields.'
			};

			return json(response, { status: 400 });
		}

		// Validate guest count
		const guestCount = attend ? guests : 0;

		if (attend && ![1, 2].includes(guestCount)) {
			const response: ReservationResponse = {
				success: false,
				message: 'Guests must be either 1 or 2.'
			};

			return json(response, { status: 400 });
		}

		await db.insert(reservations).values({
			name,
			email: email || null,
			phone,
			attend,
			guests: guestCount,
			message: message || null
		});

		console.log("Reservation inserted successfully");
		const response: ReservationResponse = {
			success: true,
			message: 'Thank you! Your RSVP has been received.'
		};

		return json(response);
	} catch (error) {
		console.error('RSVP API Error:', error);

		const response: ReservationResponse = {
			success: false,
			message: 'An unexpected error occurred.'
		};

		return json(response, { status: 500 });
	}
};