export function DesktopHeroPreview() {
  return (
    <div className="relative mt-8 w-full">
      {/*Overlay*/}
      <div className="sr-hidden from-background absolute inset-0 z-10 h-full w-full bg-gradient-to-t to-transparent"></div>
      <div className="border-border bg-card relative w-full rounded-3xl border p-3">
        <div className="bg-muted border-border aspect-video w-full overflow-hidden rounded-xl border"></div>
      </div>
    </div>
  )
}
