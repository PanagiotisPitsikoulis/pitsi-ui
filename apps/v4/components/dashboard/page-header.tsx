import { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description: string
  badge?: ReactNode
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {badge}
    </div>
  )
}
