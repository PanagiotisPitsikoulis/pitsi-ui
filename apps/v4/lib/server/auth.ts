import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"

import { db } from "./db"
import * as schema from "./db/schema"

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:4000",
  trustedOrigins: [
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:4000",
    "http://localhost:4000",
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.user,
      session: schema.session,
      account: schema.account,
      verification: schema.verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
      enabled: !!process.env.GITHUB_CLIENT_ID,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      enabled: !!process.env.GOOGLE_CLIENT_ID,
      scope: ["openid", "email", "profile"],
    },
  },
  user: {
    additionalFields: {
      isPro: {
        type: "boolean",
        defaultValue: false,
        required: false,
      },
      stripeCustomerId: {
        type: "string",
        required: false,
      },
      stripePaymentId: {
        type: "string",
        required: false,
      },
      proUpgradedAt: {
        type: "date",
        required: false,
      },
    },
  },
})
