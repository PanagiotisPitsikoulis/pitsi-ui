interface ErrorContentProps {
  message: string
  errorDigest?: string
}

export function ErrorContent({ message, errorDigest }: ErrorContentProps) {
  return (
    <>
      <p className="text-muted-foreground leading-relaxed">{message}</p>
      {errorDigest && (
        <p className="text-muted-foreground font-mono text-xs">
          Error ID: {errorDigest}
        </p>
      )}
    </>
  )
}

export function NotFoundContent() {
  return (
    <p className="text-muted-foreground leading-relaxed">
      You may have followed an outdated link, mistyped the URL, or the page may
      have been removed. Try checking the URL for errors, or use one of the
      options below to find what you're looking for.
    </p>
  )
}
