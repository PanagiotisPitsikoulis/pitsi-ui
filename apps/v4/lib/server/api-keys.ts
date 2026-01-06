import { randomBytes } from "crypto"
import { eq } from "drizzle-orm"

import { db } from "./db"
import { apiKey } from "./db/schema"

function generateApiKey(): string {
  const prefix = "pk_live_"
  const key = randomBytes(24).toString("hex")
  return `${prefix}${key}`
}

function generateId(): string {
  return randomBytes(12).toString("hex")
}

export async function createApiKey(userId: string, name: string) {
  try {
    const key = generateApiKey()
    const id = generateId()
    const keyPrefix = key.substring(0, 12) + "..."

    const [newKey] = await db
      .insert(apiKey)
      .values({
        id,
        name,
        key,
        keyPrefix,
        userId,
        createdAt: new Date(),
      })
      .returning()

    return {
      ...newKey,
      fullKey: key, // Only return full key on creation
    }
  } catch (error) {
    console.error("Failed to create API key:", error)
    throw error // Re-throw for API routes to handle
  }
}

export async function getUserApiKeys(userId: string) {
  try {
    const keys = await db
      .select({
        id: apiKey.id,
        name: apiKey.name,
        keyPrefix: apiKey.keyPrefix,
        createdAt: apiKey.createdAt,
        lastUsedAt: apiKey.lastUsedAt,
      })
      .from(apiKey)
      .where(eq(apiKey.userId, userId))
      .orderBy(apiKey.createdAt)

    return keys
  } catch (error) {
    console.error("Failed to get user API keys:", error)
    return [] // Return empty array on failure
  }
}

export async function deleteApiKey(userId: string, keyId: string) {
  try {
    const result = await db
      .delete(apiKey)
      .where(eq(apiKey.id, keyId))
      .returning()

    // Verify the key belonged to the user
    if (result.length > 0 && result[0].userId !== userId) {
      throw new Error("Unauthorized")
    }

    return result.length > 0
  } catch (error) {
    console.error("Failed to delete API key:", error)
    throw error // Re-throw for API routes to handle
  }
}

export async function validateApiKey(key: string) {
  try {
    const [result] = await db
      .select()
      .from(apiKey)
      .where(eq(apiKey.key, key))
      .limit(1)

    if (!result) {
      return null
    }

    // Update last used timestamp (fire and forget, don't block on error)
    db.update(apiKey)
      .set({ lastUsedAt: new Date() })
      .where(eq(apiKey.id, result.id))
      .catch((err) => console.warn("Failed to update lastUsedAt:", err))

    return {
      userId: result.userId,
      keyId: result.id,
    }
  } catch (error) {
    console.error("Failed to validate API key:", error)
    return null // Return null on failure (invalid key)
  }
}
