import { type BlogCategory, categoryLabels } from "@/lib/blog/source"
import { Badge } from "@/registry/new-york-v4/ui/badge"

interface CategoryBadgeProps {
  category: BlogCategory
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <Badge variant="outline" className="font-mono text-xs">
      {categoryLabels[category]}
    </Badge>
  )
}
