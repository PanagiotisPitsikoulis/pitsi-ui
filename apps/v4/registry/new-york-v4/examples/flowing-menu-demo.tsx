import FlowingMenu from "@/registry/new-york-v4/animations/flowing-menu/flowing-menu"

const menuItems = [
  { link: "#", text: "Home", image: "https://picsum.photos/600/400?random=1" },
  { link: "#", text: "About", image: "https://picsum.photos/600/400?random=2" },
  { link: "#", text: "Work", image: "https://picsum.photos/600/400?random=3" },
  {
    link: "#",
    text: "Contact",
    image: "https://picsum.photos/600/400?random=4",
  },
]

export default function FlowingMenuDemo() {
  return (
    <div className="h-full w-full">
      <FlowingMenu items={menuItems} />
    </div>
  )
}
