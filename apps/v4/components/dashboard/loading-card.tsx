import { Loader2 } from "lucide-react"

import {
  Card,
  CardContent,
} from "@/registry/new-york-v4/ui/card"

export function LoadingCard() {
  return (
    <Card>
      <CardContent className="flex items-center justify-center py-12">
        <Loader2 className="size-6 animate-spin" />
      </CardContent>
    </Card>
  )
}
