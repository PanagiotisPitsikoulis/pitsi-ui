import Typography from "@/registry/new-york-v4/ui/typography"

export default function TypographyVariantsDemo() {
  return (
    <div className="space-y-8">
      {/* Title Variants */}
      <section className="space-y-4">
        <Typography variant="subheading-sm">Title Styles</Typography>
        <Typography variant="h1">Heading 1 - Hero Title</Typography>
        <Typography variant="h2">Heading 2 - Section Title</Typography>
        <Typography variant="h3">Heading 3 - Subsection Title</Typography>
        <Typography variant="h4">Heading 4 - Component Title</Typography>
        <Typography variant="h5">Heading 5 - Small Component</Typography>
        <Typography variant="h6">Heading 6 - Card Title</Typography>
      </section>

      {/* Label Variants */}
      <section className="space-y-4">
        <Typography variant="subheading-sm">Label Styles</Typography>
        <Typography variant="label-xl">Label XL - Lead Text</Typography>
        <Typography variant="label-lg">Label LG - Important Label</Typography>
        <Typography variant="label-md">Label MD - Standard Label</Typography>
        <Typography variant="label-sm">Label SM - Small Label</Typography>
        <Typography variant="label-xs">Label XS - Tiny Label</Typography>
      </section>

      {/* Paragraph Variants */}
      <section className="space-y-4">
        <Typography variant="subheading-sm">Paragraph Styles</Typography>
        <Typography variant="paragraph-xl">
          Paragraph XL - Lead paragraph with larger size for introductions and
          feature descriptions.
        </Typography>
        <Typography variant="paragraph-lg">
          Paragraph LG - Default body text for articles and main content areas
          with comfortable reading experience.
        </Typography>
        <Typography variant="paragraph-md">
          Paragraph MD - Component descriptions used in cards, dialogs, and
          alerts.
        </Typography>
        <Typography variant="paragraph-sm">
          Paragraph SM - Small body text for captions and helper text.
        </Typography>
        <Typography variant="paragraph-xs">
          Paragraph XS - Extra small text for legal copy and footnotes.
        </Typography>
      </section>

      {/* Subheading Variants */}
      <section className="space-y-4">
        <Typography variant="subheading-sm">Subheading Styles</Typography>
        <Typography variant="subheading-md">Subheading MD</Typography>
        <Typography variant="subheading-sm">Subheading SM</Typography>
        <Typography variant="subheading-xs">Subheading XS</Typography>
        <Typography variant="subheading-2xs">Subheading 2XS</Typography>
      </section>

      {/* Real-world Examples */}
      <section className="space-y-6">
        <Typography variant="subheading-sm">Real-world Examples</Typography>

        {/* Card Example */}
        <div className="bg-card text-card-foreground rounded-lg border p-6">
          <Typography variant="subheading-xs">New Feature</Typography>
          <Typography variant="h4" className="mt-2">
            Advanced Analytics
          </Typography>
          <Typography variant="paragraph-md" className="mt-2">
            Track your performance with detailed insights and metrics that help
            you make better decisions.
          </Typography>
        </div>

        {/* Pricing Example */}
        <div className="bg-card text-card-foreground rounded-lg border p-6">
          <Typography variant="subheading-sm">Pro Plan</Typography>
          <div className="mt-2 flex items-baseline gap-2">
            <Typography variant="h2">$29</Typography>
            <Typography
              variant="paragraph-sm"
              className="text-muted-foreground"
            >
              /month
            </Typography>
          </div>
          <Typography
            variant="paragraph-sm"
            className="text-muted-foreground mt-2"
          >
            Perfect for growing teams
          </Typography>
        </div>

        {/* Feature List */}
        <div className="space-y-3">
          <div>
            <Typography variant="label-md">Fast Performance</Typography>
            <Typography
              variant="paragraph-sm"
              className="text-muted-foreground"
            >
              Lightning-fast load times for optimal user experience
            </Typography>
          </div>
          <div>
            <Typography variant="label-md">Secure by Default</Typography>
            <Typography
              variant="paragraph-sm"
              className="text-muted-foreground"
            >
              Enterprise-grade security built into every feature
            </Typography>
          </div>
        </div>
      </section>
    </div>
  )
}
