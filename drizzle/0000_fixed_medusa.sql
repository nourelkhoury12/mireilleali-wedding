CREATE TABLE "reservations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(150) NOT NULL,
	"email" varchar(255),
	"phone" varchar(30) NOT NULL,
	"attend" boolean NOT NULL,
	"guests" integer DEFAULT 0 NOT NULL,
	"message" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
