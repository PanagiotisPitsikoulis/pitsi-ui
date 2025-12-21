"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogFoodJuice() {
  const recipes = [
    {
      title: "Tropical Green Detox Smoothie",
      description: "Start your day with this vibrant blend of spinach, mango, and coconut water packed with vitamins and energy.",
      ingredients: ["2 cups spinach", "1 mango", "1 banana", "1 cup coconut water"],
      prepTime: "5 min",
      servings: "2",
      category: "Smoothies",
      image: "/placeholders/blocks/food-juice/1.webp",
    },
    {
      title: "Beetroot Immunity Booster",
      description: "A powerful juice blend that combines earthy beetroot with zesty citrus for a nutrient-dense immunity boost.",
      ingredients: ["2 beetroots", "3 oranges", "1 inch ginger", "1 carrot"],
      prepTime: "10 min",
      servings: "2",
      category: "Fresh Juice",
      image: "/placeholders/blocks/food-juice/2.webp",
    },
    {
      title: "Berry Antioxidant Bowl",
      description: "Thick and creamy smoothie bowl topped with fresh berries, granola, and a drizzle of honey for the perfect breakfast.",
      ingredients: ["Mixed berries", "Banana", "Greek yogurt", "Granola"],
      prepTime: "8 min",
      servings: "1",
      category: "Smoothie Bowls",
      image: "/placeholders/blocks/food-juice/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">Fresh Recipes</span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
            Juice & Smoothie Guide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delicious, nutritious recipes to fuel your healthy lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                <div className="relative w-full h-full rounded-[1.375rem] overflow-hidden bg-muted">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {recipe.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{recipe.servings} servings</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{recipe.prepTime}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {recipe.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {recipe.description}
                </p>

                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Key Ingredients
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <span key={idx} className="text-xs text-foreground bg-muted px-2 py-1 rounded">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
