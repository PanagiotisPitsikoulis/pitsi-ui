import Typography from "@/registry/new-york-v4/ui/typography"

export default function TypographyPolymorphic() {
  return (
    <div className="space-y-4">
      <Typography
        variant="paragraph-md"
        as="a"
        href="#"
        className="text-primary hover:underline"
      >
        This is a paragraph rendered as a link
      </Typography>

      <div>
        <Typography variant="label-md" as="label" htmlFor="email">
          Email Address
        </Typography>
        <input
          id="email"
          type="email"
          className="mt-1 block w-full rounded-md border px-3 py-2"
          placeholder="you@example.com"
        />
      </div>
    </div>
  )
}
