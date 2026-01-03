import { cn } from "@/lib/utils"

interface SectionHeaderClassNames {
  root?: string
  badge?: string
  title?: string
  description?: string
}

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
  as?: "h1" | "h2" | "h3"
  classNames?: SectionHeaderClassNames
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  classNames = {},
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        classNames.root
      )}
    >
      {badge && (
        <p
          className={cn(
            "text-brand mb-4 text-sm font-medium tracking-[0.3em] uppercase",
            classNames.badge
          )}
        >
          {badge}
        </p>
      )}
      <Tag
        className={cn(
          "font-display text-foreground text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl",
          classNames.title
        )}
      >
        {title.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < title.split("\n").length - 1 && <br />}
          </span>
        ))}
      </Tag>
      {description && (
        <p
          className={cn(
            "text-muted-foreground mt-6 text-lg md:text-xl",
            align === "center" && "mx-auto max-w-2xl",
            classNames.description
          )}
        >
          {description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
      )}
    </div>
  )
}
