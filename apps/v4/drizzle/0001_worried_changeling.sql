ALTER TABLE "user" ADD COLUMN "stripeCustomerId" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "isPro" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "stripePaymentId" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "proUpgradedAt" timestamp;