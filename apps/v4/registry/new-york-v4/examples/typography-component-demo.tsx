import Typography from "@/registry/new-york-v4/ui/typography"

export default function TypographyComponentDemo() {
  return (
    <div className="space-y-6">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="paragraph-lg">
        This is a paragraph with the paragraph-lg variant. It uses CSS custom
        properties for consistent typography across your application.
      </Typography>
      <Typography variant="label-md">
        This is a label with label-md variant
      </Typography>
    </div>
  )
}
