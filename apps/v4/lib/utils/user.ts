/**
 * Get user initials from name
 * This is a shared utility that can be used on both client and server
 */
export function getUserInitials(name: string): string {
  const names = name.split(" ")
  if (names.length >= 2) {
    return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}
