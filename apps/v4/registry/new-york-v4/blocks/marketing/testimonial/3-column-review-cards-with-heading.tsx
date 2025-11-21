export default function ThreeColumnReviewCardsWithHeading() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-lg flex-wrap items-center justify-center gap-y-8 md:max-w-3xl md:flex-wrap md:gap-y-0 lg:max-w-4xl xl:max-w-full xl:flex-row xl:flex-nowrap xl:justify-between xl:gap-x-8">
          <div className="w-full xl:w-1/3">
            <span className="mb-4 block text-sm font-medium text-indigo-600">
              Testimonial
            </span>
            <h2 className="font-manrope mb-4 text-4xl leading-[3.25rem] font-bold text-gray-900">
              What our users says about us
            </h2>
            <p className="mb-14 text-base text-gray-500">
              knowledge, expertise, advices &amp; confidence
            </p>
            <button className="flex items-center gap-4 rounded-full bg-indigo-50 px-7 py-3 font-semibold text-indigo-600 shadow-sm transition-all duration-500 hover:bg-indigo-100">
              View all testimonials {/* SVG removed */}
            </button>
          </div>
          <div className="relative w-full md:-mt-20 xl:mt-0 xl:w-2/3">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="w-full xl:w-1/2">
                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-500 transition-all duration-500">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="py-6 text-lg leading-8 text-gray-500">
                    Pagedone has made it possible for me to stay on top of my
                    portfolio and make informed decisions quickly and easily.
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://pagedone.io/asset/uploads/1704349534.png"
                        alt="Emily image"
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <h6 className="font-medium text-gray-900">
                        Emily Johnson
                      </h6>
                    </div>
                    <span className="ml-4 border-l border-solid border-gray-300 pl-4 text-sm font-medium text-indigo-600">
                      Product Designer
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid w-full gap-8 xl:w-1/2">
                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-500 transition-all duration-500">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="py-6 text-lg leading-8 text-gray-500">
                    I was hesitant to try pagedone at first, but I'm so glad I
                    did - it's exceeded all of my expectations.
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://pagedone.io/asset/uploads/1704349514.png"
                        alt="Olivia image"
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <h6 className="font-medium text-gray-900">
                        Olivia Carter
                      </h6>
                    </div>
                    <span className="ml-4 border-l border-solid border-gray-300 pl-4 text-sm font-medium text-indigo-600">
                      Sales Manger
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-500 transition-all duration-500">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="py-6 text-lg leading-8 text-gray-500">
                    Pagedone stands out as the most user-friendly and effective
                    solution I've ever used.
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://pagedone.io/asset/uploads/1704351062.png"
                        alt="Wyatt image"
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <h6 className="font-medium text-gray-900">
                        Wyatt Turner
                      </h6>
                    </div>
                    <span className="ml-4 border-l border-solid border-gray-300 pl-4 text-sm font-medium text-indigo-600">
                      CTO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
