import { ReactNode } from "react"

interface ListItemRowProps {
  title: string
  subtitle?: string
  icon?: ReactNode
  badge?: ReactNode
  actions?: ReactNode
}

export function ListItemRow({
  title,
  subtitle,
  icon,
  badge,
  actions,
}: ListItemRowProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="font-medium">{title}</p>
          {subtitle && (
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {badge}
        {actions}
      </div>
    </div>
  )
}
