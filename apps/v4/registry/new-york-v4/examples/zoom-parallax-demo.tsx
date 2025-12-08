"use client"

import {
  ZoomParallaxImage,
} from "@/registry/new-york-v4/animations/zoom-parallax/zoom-parallax"

export default function ZoomParallaxDemo() {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center gap-8 p-8">
      <div className="grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
        <ZoomParallaxImage
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
          alt="Mountain landscape"
          className="aspect-[4/3] w-full"
          scaleRange={[0.95, 1.05]}
        />
        <ZoomParallaxImage
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
          alt="Forest landscape"
          className="aspect-[4/3] w-full"
          scaleRange={[0.95, 1.05]}
        />
        <ZoomParallaxImage
          src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop"
          alt="Nature path"
          className="aspect-[4/3] w-full"
          scaleRange={[0.95, 1.05]}
        />
        <ZoomParallaxImage
          src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
          alt="Waterfall"
          className="aspect-[4/3] w-full"
          scaleRange={[0.95, 1.05]}
        />
        <ZoomParallaxImage
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop"
          alt="Lake view"
          className="aspect-[4/3] w-full"
          scaleRange={[0.95, 1.05]}
        />
        <ZoomParallaxImage
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop"
          alt="Foggy mountains"
          className="aspect-[4/3] w-full"
          scaleRange={[0.95, 1.05]}
        />
      </div>
      <p className="text-muted-foreground text-center text-sm">
        Scroll to see the zoom effect on each image
      </p>
    </div>
  )
}
