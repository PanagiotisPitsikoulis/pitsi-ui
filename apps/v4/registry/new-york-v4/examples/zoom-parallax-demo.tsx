"use client"

import {
  ZoomGalleryContainer,
  ZoomGalleryImage,
} from "@/registry/new-york-v4/animations/zoom-parallax/zoom-parallax"

const pictures = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    targetScale: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    targetScale: 5,
    style: { top: "-30vh", left: "5vw", width: "35vw", height: "30vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
    targetScale: 6,
    style: { top: "-10vh", left: "-25vw", width: "20vw", height: "45vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    targetScale: 5,
    style: { left: "27.5vw", width: "25vw", height: "25vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
    targetScale: 6,
    style: { top: "27.5vh", left: "5vw", width: "20vw", height: "25vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
    targetScale: 8,
    style: { top: "27.5vh", left: "-22.5vw", width: "30vw", height: "25vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop",
    targetScale: 9,
    style: { top: "22.5vh", left: "25vw", width: "15vw", height: "15vh" },
  },
]

export default function ZoomParallaxDemo() {
  return (
    <ZoomGalleryContainer height="300vh">
      {pictures.map((picture, index) => (
        <ZoomGalleryImage
          key={index}
          src={picture.src}
          targetScale={picture.targetScale}
          style={picture.style}
          alt={`Gallery image ${index + 1}`}
        />
      ))}
    </ZoomGalleryContainer>
  )
}
