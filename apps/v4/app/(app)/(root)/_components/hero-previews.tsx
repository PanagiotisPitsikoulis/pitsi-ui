export function DesktopHeroPreview() {
  return (
    <div className="relative mt-8 w-full">
      {/*Overlay*/}
      <div className="sr-hidden from-background-elevation-0 absolute inset-0 z-10 h-full w-full bg-gradient-to-t to-transparent"></div>
      <div className="border-border-elevation-1 bg-background-elevation-1 relative w-full rounded-3xl border p-3">
        <div className="bg-background-elevation-2 border-border-elevation-2 aspect-video w-full overflow-hidden rounded-xl border"></div>
      </div>
    </div>
  )
}
