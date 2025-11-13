export function DesktopHeroPreview() {
  return (
    <div className="w-full mt-8 relative">
      {/*Overlay*/}
      <div className="sr-hidden bg-gradient-to-t from-background-elevation-0 to-transparent absolute inset-0 h-full w-full z-10"></div>
      <div className="relative w-full rounded-3xl p-3 border border-border-elevation-1 bg-background-elevation-1">
        <div className="w-full rounded-xl aspect-video bg-background-elevation-2 overflow-hidden border border-border-elevation-2"></div>
      </div>
    </div>
  );
}
