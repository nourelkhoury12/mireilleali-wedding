import {
	boolean,
	integer,
	pgTable,
	serial,
	text,
	timestamp,
	varchar
} from 'drizzle-orm/pg-core';

export const reservations = pgTable('reservations', {

	id: serial('id').primaryKey(),
	name: varchar('name', { length: 150 }).notNull(),
	email: varchar('email', { length: 255 }).notNull(),
	phone: varchar('phone', { length: 30 }).notNull(),
	attend: boolean('attend').notNull(),
	guests: integer('guests').notNull().default(0),
	message: text('message'),
	createdAt: timestamp('created_at').defaultNow().notNull()

});
