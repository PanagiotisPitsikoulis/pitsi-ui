import Grid from "@/registry/new-york-v4/ui/grid"

export default function GridDemo() {
  return (
    <Grid cols={3} gap="md" colsMobile={1}>
      <div className="bg-muted flex h-24 items-center justify-center rounded-lg">
        1
      </div>
      <div className="bg-muted flex h-24 items-center justify-center rounded-lg">
        2
      </div>
      <div className="bg-muted flex h-24 items-center justify-center rounded-lg">
        3
      </div>
      <div className="bg-muted flex h-24 items-center justify-center rounded-lg">
        4
      </div>
      <div className="bg-muted flex h-24 items-center justify-center rounded-lg">
        5
      </div>
      <div className="bg-muted flex h-24 items-center justify-center rounded-lg">
        6
      </div>
    </Grid>
  )
}
