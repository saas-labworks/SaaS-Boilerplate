CREATE TABLE IF NOT EXISTS "transference" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"from_currency_id" serial NOT NULL,
	"to_currency_id" serial NOT NULL,
	"amount" integer NOT NULL,
	"date" timestamp NOT NULL,
	"description" text,
	"created_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transference" ADD CONSTRAINT "transference_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transference" ADD CONSTRAINT "transference_from_currency_id_currency_id_fk" FOREIGN KEY ("from_currency_id") REFERENCES "public"."currency"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transference" ADD CONSTRAINT "transference_to_currency_id_currency_id_fk" FOREIGN KEY ("to_currency_id") REFERENCES "public"."currency"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
