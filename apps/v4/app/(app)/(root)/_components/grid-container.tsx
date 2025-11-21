import clsx from "clsx"

export default function GridContainer({
  children,
  className,
  direction = "full",
  showTop = true,
  showBottom = true,
}: {
  children: React.ReactNode
  className?: string
  direction?: "full" | "to-left" | "to-right"
  showTop?: boolean
  showBottom?: boolean
}) {
  let topDirection = ""
  let bottomDirection = ""
  switch (direction) {
    case "full":
      topDirection = "before:-left-[100vw]"
      bottomDirection = "after:-left-[100vw]"
      break
    case "to-left":
      topDirection = "before:right-0"
      bottomDirection = "after:right-0"
      break
    case "to-right":
      topDirection = "before:left-0"
      bottomDirection = "after:left-0"
      break
  }

  return (
    <div
      className={clsx(
        "relative",
        showTop &&
          "before:bg-border before:absolute before:top-0 before:h-px before:w-[200vw]",
        showTop && topDirection,
        showBottom &&
          "after:bg-border after:absolute after:bottom-0 after:h-px after:w-[200vw]",
        showBottom && bottomDirection,
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}
