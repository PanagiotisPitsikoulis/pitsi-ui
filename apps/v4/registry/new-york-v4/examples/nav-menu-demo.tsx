"use client"

import { NavMenu } from "@/registry/new-york-v4/animations/nav-menu/nav-menu"

const links = [
  {
    title: "Home",
    href: "#",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
  {
    title: "Shop",
    href: "#",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
  },
  {
    title: "About Us",
    href: "#",
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop",
  },
  {
    title: "Lookbook",
    href: "#",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop",
  },
  {
    title: "Contact",
    href: "#",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop",
  },
]

export default function NavMenuDemo() {
  return (
    <div className="bg-background relative min-h-screen">
      <NavMenu
        brand="Olivier"
        links={links}
        rightContent={
          <div className="flex items-center gap-2">
            <span className="text-foreground text-sm">Cart(0)</span>
          </div>
        }
      />
      <div className="flex h-screen items-center justify-center pt-20">
        <p className="text-muted-foreground text-center text-lg">
          Click the menu button to see the navigation animation
        </p>
      </div>
    </div>
  )
}
