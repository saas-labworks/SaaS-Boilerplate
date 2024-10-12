ALTER TABLE "category" RENAME COLUMN "user_id" TO "userId";--> statement-breakpoint
ALTER TABLE "category" RENAME COLUMN "parent_category_id" TO "parentCategoryId";--> statement-breakpoint
ALTER TABLE "currency" RENAME COLUMN "user_id" TO "userId";--> statement-breakpoint
ALTER TABLE "category" DROP CONSTRAINT "category_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "currency" DROP CONSTRAINT "currency_user_id_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "category" ADD CONSTRAINT "category_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "currency" ADD CONSTRAINT "currency_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
