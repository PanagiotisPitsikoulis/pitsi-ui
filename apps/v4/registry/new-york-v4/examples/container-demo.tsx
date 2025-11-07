import { Container } from "@/registry/new-york-v4/ui/container"

export default function ContainerDemo() {
  return (
    <Container>
      <div className="bg-muted rounded-lg p-6">
        <h2 className="text-2xl font-bold">Container Component</h2>
        <p className="text-muted-foreground mt-2">
          This content is automatically centered with responsive gutters.
        </p>
      </div>
    </Container>
  )
}
