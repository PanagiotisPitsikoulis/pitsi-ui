import { CollapsibleGallery } from "@/registry/new-york-v4/ui/collapsible-gallery"

const items = [
  {
    id: "1",
    title: "Mountain Retreat",
    description: "A peaceful cabin in the mountains",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    title: "Beach House",
    description: "Modern beachfront property",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    title: "City Loft",
    description: "Urban living at its finest",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    title: "Forest Cabin",
    description: "Secluded retreat in nature",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400&h=300&fit=crop",
  },
  {
    id: "5",
    title: "Lake House",
    description: "Waterfront living with stunning views",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop",
  },
]

function ItemCard({ item }: { item: (typeof items)[0] }) {
  return (
    <div className="group flex flex-col gap-3">
      <div className="bg-muted aspect-[4/3] overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="group-hover:text-primary text-sm font-medium transition-colors">
          {item.title}
        </span>
        <p className="text-muted-foreground text-xs">{item.description}</p>
      </div>
    </div>
  )
}

export default function CollapsibleGalleryDemo() {
  return (
    <div className="w-full max-w-4xl">
      <CollapsibleGallery
        title="Featured Properties"
        items={items}
        renderItem={(item) => <ItemCard item={item} />}
        keyExtractor={(item) => item.id}
        itemWidth={200}
        gridCols={{ default: 2, md: 3, lg: 4 }}
      />
    </div>
  )
}
