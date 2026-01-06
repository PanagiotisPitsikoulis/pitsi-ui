import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core"

// Plan types
export type PlanType = "free" | "pro" | "exclusive" | "team" | "enterprise"

// BetterAuth User Table
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull(),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
  // Stripe subscription fields
  stripeCustomerId: text("stripeCustomerId"),
  isPro: boolean("isPro").default(false).notNull(),
  planType: text("planType").$type<PlanType>().default("free").notNull(),
  stripePaymentId: text("stripePaymentId"),
  proUpgradedAt: timestamp("proUpgradedAt"),
})

// BetterAuth Session Table
export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
})

// BetterAuth Account Table
export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
})

// BetterAuth Verification Table
export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt"),
  updatedAt: timestamp("updatedAt"),
})

// API Keys Table
export const apiKey = pgTable("api_key", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  key: text("key").notNull().unique(),
  keyPrefix: text("keyPrefix").notNull(), // First 8 chars for display
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  createdAt: timestamp("createdAt").notNull(),
  lastUsedAt: timestamp("lastUsedAt"),
  expiresAt: timestamp("expiresAt"),
})

// Team Members Table
export const teamMember = pgTable("team_member", {
  id: text("id").primaryKey(),
  teamOwnerId: text("teamOwnerId")
    .notNull()
    .references(() => user.id),
  memberEmail: text("memberEmail").notNull(),
  memberUserId: text("memberUserId").references(() => user.id), // Linked when user signs up
  status: text("status")
    .$type<"pending" | "active">()
    .default("pending")
    .notNull(),
  invitedAt: timestamp("invitedAt").notNull(),
  acceptedAt: timestamp("acceptedAt"),
})
