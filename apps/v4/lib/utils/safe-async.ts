/**
 * Safely execute an async function with a fallback value on error
 * Useful for preventing Server Component crashes from async operations
 *
 * @param fn - The async function to execute
 * @param fallback - Value to return if the function throws
 * @param context - Optional context string for logging
 * @returns The result of fn() or fallback on error
 *
 * @example
 * const item = await safeAsync(
 *   () => getRegistryItem(name, style),
 *   null,
 *   'getRegistryItem'
 * )
 */
export async function safeAsync<T>(
  fn: () => Promise<T>,
  fallback: T,
  context?: string
): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    const prefix = context ? `[${context}]` : "[safeAsync]"
    console.warn(`${prefix} Operation failed:`, error)
    return fallback
  }
}

/**
 * Safely execute an async function, returning null on error
 * Shorthand for safeAsync(fn, null, context)
 */
export async function safeAsyncNull<T>(
  fn: () => Promise<T>,
  context?: string
): Promise<T | null> {
  return safeAsync(fn, null as T | null, context)
}

/**
 * Safely execute an async function, returning empty array on error
 * Shorthand for safeAsync(fn, [], context)
 */
export async function safeAsyncArray<T>(
  fn: () => Promise<T[]>,
  context?: string
): Promise<T[]> {
  return safeAsync(fn, [] as T[], context)
}

/**
 * Wrap a function to make it safe (returns fallback on error)
 * Useful for creating safe versions of existing functions
 *
 * @example
 * const safeGetUser = withFallback(getUser, null, 'getUser')
 * const user = await safeGetUser(userId)
 */
export function withFallback<TArgs extends unknown[], TReturn>(
  fn: (...args: TArgs) => Promise<TReturn>,
  fallback: TReturn,
  context?: string
): (...args: TArgs) => Promise<TReturn> {
  return async (...args: TArgs) => {
    return safeAsync(() => fn(...args), fallback, context)
  }
}
