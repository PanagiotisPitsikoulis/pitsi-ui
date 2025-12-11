import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import * as schema from "./schema"

// Lazy initialization to avoid connecting during build time
let _db: ReturnType<typeof drizzle> | null = null
let _initError: Error | null = null

function initDb(): ReturnType<typeof drizzle> | null {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL is not set - database features will be unavailable")
    _initError = new Error("DATABASE_URL is not set")
    return null
  }

  try {
    const queryClient = postgres(process.env.DATABASE_URL)
    return drizzle(queryClient, { schema })
  } catch (error) {
    console.warn("Failed to initialize database:", error)
    _initError = error instanceof Error ? error : new Error(String(error))
    return null
  }
}

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(target, prop) {
    if (_db === null && _initError === null) {
      _db = initDb()
    }
    if (_db === null) {
      throw _initError || new Error("Database not initialized")
    }
    return (_db as any)[prop]
  },
})
