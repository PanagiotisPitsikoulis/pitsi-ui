"use client"

export function StatsFoodJuice() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Nutrition Facts
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Fresh by the Numbers
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="border-4 border-foreground bg-background p-8">
            <div className="border-b-8 border-foreground pb-2 mb-4">
              <h3 className="text-2xl font-black text-foreground">
                Cold-Pressed Stats
              </h3>
            </div>
            {[
              { label: "Bottles Pressed Daily", value: "2,500+" },
              { label: "Organic Ingredients", value: "100%" },
              { label: "Happy Customers", value: "45K+" },
              { label: "Local Farms Partnered", value: "28" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex justify-between items-center py-3 ${
                  i !== 3 ? "border-b border-foreground" : ""
                }`}
              >
                <span className="text-foreground font-medium">{stat.label}</span>
                <span className="text-2xl font-black text-primary">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
