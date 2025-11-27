"use client"

import { FloatingImageGallery } from "@/registry/new-york-v4/animations/floating-image-gallery/floating-image-gallery"

const layers = [
  {
    speed: 1,
    brightness: 0.7,
    images: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        width: 300,
        style: { left: "90%", top: "70%" },
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
        width: 300,
        style: { left: "5%", top: "65%" },
      },
      {
        src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
        width: 225,
        style: { left: "35%", top: "0%" },
      },
    ],
  },
  {
    speed: 0.5,
    brightness: 0.6,
    images: [
      {
        src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
        width: 250,
        style: { left: "5%", top: "10%" },
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
        width: 200,
        style: { left: "80%", top: "5%" },
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
        width: 225,
        style: { left: "60%", top: "60%" },
      },
    ],
  },
  {
    speed: 0.25,
    brightness: 0.5,
    images: [
      {
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop",
        width: 150,
        style: { left: "65%", top: "2.5%" },
      },
      {
        src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
        width: 200,
        style: { left: "40%", top: "75%" },
      },
    ],
  },
]

export default function FloatingImageGalleryDemo() {
  return (
    <FloatingImageGallery layers={layers}>
      <div className="text-lg">
        <h1 className="m-0 text-center font-normal text-white">
          Floating Images Gallery
        </h1>
        <p className="m-0 mt-2 text-center text-gray-400">
          Move your mouse to see the effect
        </p>
      </div>
    </FloatingImageGallery>
  )
}
