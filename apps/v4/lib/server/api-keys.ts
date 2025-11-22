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
}

export async function getUserApiKeys(userId: string) {
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
}

export async function deleteApiKey(userId: string, keyId: string) {
  const result = await db
    .delete(apiKey)
    .where(eq(apiKey.id, keyId))
    .returning()

  // Verify the key belonged to the user
  if (result.length > 0 && result[0].userId !== userId) {
    throw new Error("Unauthorized")
  }

  return result.length > 0
}

export async function validateApiKey(key: string) {
  const [result] = await db
    .select()
    .from(apiKey)
    .where(eq(apiKey.key, key))
    .limit(1)

  if (!result) {
    return null
  }

  // Update last used timestamp
  await db
    .update(apiKey)
    .set({ lastUsedAt: new Date() })
    .where(eq(apiKey.id, result.id))

  return {
    userId: result.userId,
    keyId: result.id,
  }
}
