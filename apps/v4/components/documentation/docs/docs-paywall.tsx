import Link from "next/link"
import { Lock, LogIn } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

interface DocsPaywallProps {
  title: string
  type?: "component" | "block" | "animation"
}

export function DocsPaywall({ title, type = "component" }: DocsPaywallProps) {
  const browseLink =
    type === "block"
      ? "/blocks"
      : type === "animation"
        ? "/docs/animations"
        : "/docs/components"
  const browseLabel =
    type === "block"
      ? "Browse Free Blocks"
      : type === "animation"
        ? "Browse Free Animations"
        : "Browse Free Components"

  return (
    <div className="py-16">
      <div className="mx-auto max-w-lg text-center">
        <div className="bg-muted/50 mx-auto mb-6 flex size-16 items-center justify-center rounded-full">
          <Lock className="text-muted-foreground size-8" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground mt-2">
          This {type} is part of the Pro plan. Upgrade to get access to all
          premium {type}s and templates.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/#pricing">Upgrade to Pro</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={browseLink}>{browseLabel}</Link>
          </Button>
        </div>
        <p className="text-muted-foreground mt-8 text-sm">
          Already a Pro member?{" "}
          <Link
            href="/signin"
            className="text-primary inline-flex items-center gap-1.5 underline"
          >
            <LogIn className="size-4" />
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
