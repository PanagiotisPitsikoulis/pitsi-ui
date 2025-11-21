import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export default function SpacerSizes() {
  const sizes = ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"] as const

  return (
    <div className="space-y-4">
      {sizes.map((size) => (
        <div key={size} className="flex items-center gap-4">
          <span className="text-muted-foreground w-12 text-sm">{size}</span>
          <div className="bg-foreground h-2 w-2 rounded-full" />
          <Spacer size={size} axis="horizontal" />
          <div className="bg-foreground h-2 w-2 rounded-full" />
        </div>
      ))}
    </div>
  )
}
