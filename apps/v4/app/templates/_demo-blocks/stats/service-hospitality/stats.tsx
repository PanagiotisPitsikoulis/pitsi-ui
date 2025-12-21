"use client"

export function StatsServiceHospitality() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Guest Satisfaction
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Excellence in Service
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { rating: "4.9", label: "Overall Rating", reviews: "12.4K reviews" },
              { rating: "4.8", label: "Cleanliness", reviews: "Spotless rooms" },
              { rating: "4.9", label: "Service", reviews: "Exceptional staff" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-card border rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="text-6xl font-bold text-primary">
                    {stat.rating}
                  </div>
                  <div className="text-3xl text-primary">★</div>
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">{stat.reviews}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "98%", label: "Return Guests" },
              { value: "150K+", label: "Stays Hosted" },
              { value: "24/7", label: "Concierge" },
              { value: "45", label: "Countries" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
