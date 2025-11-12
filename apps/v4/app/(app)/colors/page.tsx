import { cacheLife } from "next/cache"

import { getColors } from "@/lib/colors"
import { ColorPalette } from "@/components/color-palette"

export default async function ColorsPage() {
  "use cache"
  const colors = getColors()

  return (
    <div className="grid gap-8 lg:gap-16 xl:gap-20">
      {colors.map((colorPalette) => (
        <ColorPalette key={colorPalette.name} colorPalette={colorPalette} />
      ))}
    </div>
  )
}
