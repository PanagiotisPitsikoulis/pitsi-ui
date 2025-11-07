export default function HorizontalCardsBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            What our happy users says!{" "}
          </h2>
        </div>
        <div className="mx-auto grid max-w-lg grid-cols-1 flex-wrap items-center justify-center gap-8 md:max-w-full md:grid-cols-2 md:flex-row md:flex-nowrap lg:flex lg:justify-between">
          <div className="relative flex w-full flex-col py-6 lg:w-1/2 lg:flex-row lg:gap-0 lg:py-11 xl:gap-8">
            <div className="absolute top-0 h-full w-full rounded-xl bg-gray-100 lg:w-60 xl:h-56" />
            <div className="relative flex flex-col items-center justify-center p-5 lg:items-start">
              <h6 className="text-base font-medium whitespace-nowrap text-gray-900">
                Isabella Martinez
              </h6>
              <span className="text-sm text-indigo-600">Product Designer</span>
              <div className="mt-5 flex items-center gap-1">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-8 px-5 lg:flex-row lg:px-0">
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1709788090.png"
                alt="Harsh image"
              />
              <p className="w-full text-center text-lg text-gray-600 lg:w-56 lg:text-left">
                I've been using pagedone for a year now and it's made managing
                my finances easier.
              </p>
            </div>
          </div>
          <div className="relative flex w-full flex-col py-6 max-lg:h-full lg:w-1/2 lg:flex-row lg:gap-0 lg:py-11 xl:gap-8">
            <div className="absolute top-0 h-full w-full rounded-xl bg-gray-100 lg:w-60 xl:h-56" />
            <div className="relative flex flex-col items-center justify-center p-5 lg:items-start">
              <h6 className="text-base font-medium text-gray-900">
                Matthew Be.
              </h6>
              <span className="text-sm text-indigo-600">Sales Manager</span>
              <div className="mt-5 flex items-center gap-1">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
            </div>
            <div className="relative flex flex-col items-center gap-8 px-5 lg:flex-row lg:px-0">
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1709788110.png"
                alt="Naina image"
              />
              <p className="w-full text-center text-lg text-gray-600 lg:w-56 lg:text-left">
                Our revenue grew to 144% more after just one month of use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
