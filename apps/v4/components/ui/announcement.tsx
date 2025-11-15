import Link from "next/link"
import { RiArrowRightLine } from '@remixicon/react'

import { Badge } from "@/registry/new-york-v4/ui/badge"

export function Announcement() {
  return (
    <Badge asChild variant="secondary" className="bg-transparent">
      <Link href="/docs/changelog">
        <span className="flex size-2 rounded-full bg-blue-500" title="New" />
        New Components: Field, Input Group, Item and more <RiArrowRightLine />
      </Link>
    </Badge>
  )
}
