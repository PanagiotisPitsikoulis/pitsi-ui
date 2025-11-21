import { Container } from "@/registry/new-york-v4/ui/container"

export default function ContainerDemo() {
  return (
    <div className="w-full">
      <Container className="py-8">
        <div className="bg-card border-border text-card-foreground space-y-4 rounded-lg border p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Container Component</h2>
          <p className="text-muted-foreground">
            This content is automatically centered with responsive max-width and
            padding.
          </p>
          <div className="border-border bg-muted/50 mt-4 flex items-center gap-2 rounded-md border p-4">
            <div className="bg-muted size-10 rounded-full" />
            <div className="flex-1">
              <div className="bg-muted mb-2 h-3 w-3/4 rounded" />
              <div className="bg-muted/70 h-2 w-1/2 rounded" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
