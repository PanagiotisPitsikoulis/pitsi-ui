import { ReactNode } from "react"
import { LucideIcon } from "@/lib/icons"

import {
  Card,
  CardContent,
} from "@/registry/new-york-v4/ui/card"

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: ReactNode
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <Icon className="text-muted-foreground mb-4 size-12" />
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground mb-4 max-w-sm text-sm">{description}</p>
      {action}
    </div>
  )
}

interface EmptyStateCardProps extends EmptyStateProps {}

export function EmptyStateCard(props: EmptyStateCardProps) {
  return (
    <Card>
      <CardContent className="py-4">
        <EmptyState {...props} />
      </CardContent>
    </Card>
  )
}
