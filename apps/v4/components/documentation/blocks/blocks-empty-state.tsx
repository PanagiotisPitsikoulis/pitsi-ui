interface BlocksEmptyStateProps {
  message?: string
}

export function BlocksEmptyState({
  message = "No blocks available.",
}: BlocksEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className="text-muted-foreground">{message}</p>
    </div>
  )
}
