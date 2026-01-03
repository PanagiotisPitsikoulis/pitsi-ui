import { cn } from "@/lib/utils"

interface StatCardClassNames {
  root?: string
  label?: string
  value?: string
  unit?: string
  change?: string
}

interface StatCardProps {
  label: string
  value: string | number
  unit?: string
  change?: string
  positive?: boolean
  classNames?: StatCardClassNames
}

export function StatCard({
  label,
  value,
  unit,
  change,
  positive = true,
  classNames = {},
}: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-xl p-4 shadow-sm transition-shadow hover:shadow-md",
        classNames.root
      )}
    >
      <p
        className={cn(
          "text-muted-foreground text-[10px] font-medium tracking-wider uppercase",
          classNames.label
        )}
      >
        {label}
      </p>
      <div className="mt-1 flex items-baseline gap-1">
        <span
          className={cn("text-2xl font-bold tabular-nums", classNames.value)}
        >
          {value}
        </span>
        {unit && (
          <span
            className={cn("text-muted-foreground text-sm", classNames.unit)}
          >
            {unit}
          </span>
        )}
      </div>
      {change && (
        <p
          className={cn(
            "mt-0.5 text-xs font-medium",
            positive ? "text-emerald-600" : "text-muted-foreground",
            classNames.change
          )}
        >
          {change}
        </p>
      )}
    </div>
  )
}
