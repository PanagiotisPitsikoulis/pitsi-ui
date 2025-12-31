import { Loader2, type IconProps } from "@/lib/icons"
import { cn } from "@/registry/new-york-v4/lib/utils"

function Spinner({ className, ...props }: IconProps) {
  return <Loader2 className={cn("size-4 animate-spin", className)} {...props} />
}

export default function SpinnerCustom() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  )
}
