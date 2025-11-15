import clsx from "clsx"

export default function GridContainer({
  children,
  className,
  direction = "full",
}: {
  children: React.ReactNode
  className?: string
  direction?: "full" | "to-left" | "to-right"
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
        "before:bg-border-elevation-0 before:absolute before:top-0 before:h-px before:w-[200vw]",
        topDirection,
        "after:bg-border-elevation-0 after:absolute after:bottom-0 after:h-px after:w-[200vw]",
        bottomDirection,
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}
