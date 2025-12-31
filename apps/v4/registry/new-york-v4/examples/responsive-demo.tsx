import { Monitor, Smartphone } from "@/lib/icons"
import { Responsive } from "@/registry/new-york-v4/ui/responsive"

export default function ResponsiveDemo() {
  return (
    <Responsive
      mobile={
        <div className="bg-muted flex items-center gap-2 rounded-lg border p-4">
          <Smartphone className="size-5" />
          <span className="font-medium">Mobile View</span>
          <span className="text-muted-foreground text-sm">
            (Resize to see desktop)
          </span>
        </div>
      }
      desktop={
        <div className="bg-muted flex items-center gap-2 rounded-lg border p-4">
          <Monitor className="size-5" />
          <span className="font-medium">Desktop View</span>
          <span className="text-muted-foreground text-sm">
            (Resize to see mobile)
          </span>
        </div>
      }
    />
  )
}
