CREATE TABLE IF NOT EXISTS "budget" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"currency_id" serial NOT NULL,
	"amount" integer NOT NULL,
	"category_id" serial NOT NULL,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "category" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"parent_category_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "currency" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"symbol" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "expenses" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"currency_id" serial NOT NULL,
	"money_account_id" serial NOT NULL,
	"amount" integer NOT NULL,
	"category_id" serial NOT NULL,
	"date" timestamp NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "income" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"currency_id" serial NOT NULL,
	"amount" integer NOT NULL,
	"category" text,
	"date" timestamp NOT NULL,
	"description" text,
	"created_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "money_account" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"currency_id" serial NOT NULL,
	"balance" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subscription" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"stripeSubscriptionId" text NOT NULL,
	"stripeCustomerId" text NOT NULL,
	"stripePriceId" text NOT NULL,
	"start" timestamp NOT NULL,
	"end" timestamp NOT NULL,
	CONSTRAINT "subscription_userId_unique" UNIQUE("userId")
);
--> statement-breakpoint
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
DROP TABLE "subscriptions";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "budget" ADD CONSTRAINT "budget_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "budget" ADD CONSTRAINT "budget_currency_id_currency_id_fk" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "budget" ADD CONSTRAINT "budget_category_id_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE restrict ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "category" ADD CONSTRAINT "category_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "currency" ADD CONSTRAINT "currency_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expenses" ADD CONSTRAINT "expenses_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expenses" ADD CONSTRAINT "expenses_currency_id_currency_id_fk" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expenses" ADD CONSTRAINT "expenses_money_account_id_money_account_id_fk" FOREIGN KEY ("money_account_id") REFERENCES "public"."money_account"("id") ON DELETE restrict ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expenses" ADD CONSTRAINT "expenses_category_id_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE restrict ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "income" ADD CONSTRAINT "income_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "income" ADD CONSTRAINT "income_currency_id_currency_id_fk" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "money_account" ADD CONSTRAINT "money_account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "money_account" ADD CONSTRAINT "money_account_currency_id_currency_id_fk" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subscription" ADD CONSTRAINT "subscription_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
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
