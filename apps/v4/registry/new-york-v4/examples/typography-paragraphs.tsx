import Typography from "@/registry/new-york-v4/ui/typography"

export default function TypographyParagraphs() {
  return (
    <div className="space-y-4">
      <Typography variant="paragraph-xl">
        Paragraph XL - Large introductory text that draws attention.
      </Typography>
      <Typography variant="paragraph-lg">
        Paragraph LG - Default body text for articles and main content.
      </Typography>
      <Typography variant="paragraph-md">
        Paragraph MD - Component descriptions for cards and dialogs.
      </Typography>
      <Typography variant="paragraph-sm">
        Paragraph SM - Small text for captions.
      </Typography>
    </div>
  )
}
