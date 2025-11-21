import Typography from "@/registry/new-york-v4/ui/typography"

export default function TypographyLabels() {
  return (
    <div className="space-y-4">
      <Typography variant="label-xl">
        Label XL - Lead text and feature introductions
      </Typography>
      <Typography variant="label-lg">
        Label LG - Important form labels and emphasis
      </Typography>
      <Typography variant="label-md">
        Label MD - Standard form labels and UI labels
      </Typography>
      <Typography variant="label-sm">
        Label SM - Small labels, badges, and metadata
      </Typography>
      <Typography variant="label-xs">
        Label XS - Tiny indicators and micro copy
      </Typography>
    </div>
  )
}
