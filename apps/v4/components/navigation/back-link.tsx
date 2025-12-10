import Link from "next/link"
import { IconArrowLeft } from "@tabler/icons-react"

interface BackLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function BackLink({ href, children, className }: BackLinkProps) {
  return (
    <Link
      href={href}
      className={`text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors ${className ?? ""}`}
    >
      <IconArrowLeft size={14} />
      {children}
    </Link>
  )
}
