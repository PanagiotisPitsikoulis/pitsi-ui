import { cn } from "@/lib/utils"

export function PageNav({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex scroll-mt-24 items-center justify-between gap-4 py-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
