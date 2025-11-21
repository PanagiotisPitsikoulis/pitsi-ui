import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"

export function Announcement() {
  return (
    <Badge asChild variant="secondary" className="bg-transparent">
      <Link href="/docs/changelog">
        <span className="bg-primary flex size-2 rounded-full" title="New" />
        New Components: Field, Input Group, Item and more <ArrowRight />
      </Link>
    </Badge>
  )
}
