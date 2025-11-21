import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import * as schema from "./schema"

// Lazy initialization to avoid connecting during build time
let _db: ReturnType<typeof drizzle> | null = null

function initDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set")
  }

  const queryClient = postgres(process.env.DATABASE_URL)
  return drizzle(queryClient, { schema })
}

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(target, prop) {
    if (!_db) {
      _db = initDb()
    }
    return (_db as any)[prop]
  },
})
