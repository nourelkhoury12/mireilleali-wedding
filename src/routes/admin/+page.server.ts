import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { reservations } from '$lib/server/schema';
import { desc } from 'drizzle-orm';

export const load: PageServerLoad = async () => {
	const data = await db
		.select()
		.from(reservations)
		.orderBy(desc(reservations.createdAt));

	return {
		reservations: data
	};
};