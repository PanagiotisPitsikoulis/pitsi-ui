/**
 * Format a kebab-case name to Title Case
 * @example formatName("my-component") => "My Component"
 */
export function formatName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

/**
 * Format a date string to a human-readable format
 * @example formatDate("2024-01-15") => "Jan 15, 2024"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
