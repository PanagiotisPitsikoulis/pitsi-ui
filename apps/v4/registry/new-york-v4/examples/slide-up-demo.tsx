import SlideUp from "@/registry/new-york-v4/animations/slide-up/slide-up"

export default function SlideUpDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-8">
      <SlideUp>
        <div className="bg-card rounded-lg border p-8 text-center">
          <h3 className="text-2xl font-bold">Animation Demo</h3>
          <p className="text-muted-foreground mt-2">
            Scroll or interact to see the animation effect
          </p>
        </div>
      </SlideUp>
    </div>
  )
}
