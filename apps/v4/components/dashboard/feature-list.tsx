import { Check } from "@/lib/icons"

interface FeatureListProps {
  features: string[]
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-2 text-sm">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2">
          <Check className="text-primary size-4" />
          {feature}
        </li>
      ))}
    </ul>
  )
}
