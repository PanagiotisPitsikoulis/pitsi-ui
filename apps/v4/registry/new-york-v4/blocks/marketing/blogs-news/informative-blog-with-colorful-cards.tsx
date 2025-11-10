export default function InformativeBlogWithColorfulCards() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="gap inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
              Our Blog
            </h6>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Explore our informative blog here.
            </h2>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-6 lg:gap-8">
            <div className="grid w-full items-center justify-start gap-6 lg:grid-cols-12 lg:gap-8">
              <div className="group col-span-12 inline-flex h-full w-full flex-col items-start justify-between gap-10 rounded-2xl bg-sky-100 p-5 lg:col-span-8 lg:gap-0">
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="inline-flex w-full items-center justify-between gap-3">
                    <div className="flex items-center justify-start gap-2">
                      <div className="relative h-6 w-6">
                        {/* SVG removed */}
                      </div>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        June 25, 2024
                      </h6>
                    </div>
                    <div className="flex items-center justify-start gap-1.5 rounded-full border border-sky-400 bg-sky-50 px-2.5 py-0.5">
                      <span className="text-center text-xs leading-normal font-medium text-sky-600">
                        Technology
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                      The Rise of Smart Cities: How Technology is Shaping Urban
                      Development
                    </h3>
                    <p className="text-lg leading-relaxed font-normal text-gray-500">
                      Discusses how advancements in technology are transforming
                      urban environments into smart cities with improved
                      infrastructure and services.
                    </p>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-white px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-gray-100 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium text-gray-900">
                    Read More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
              <div className="group col-span-12 inline-flex h-full w-full flex-col items-start justify-start gap-10 rounded-2xl bg-fuchsia-100 p-5 lg:col-span-4">
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="inline-flex w-full items-center justify-between gap-3">
                    <div className="flex items-center justify-start gap-2">
                      <div className="relative h-6 w-6">
                        {/* SVG removed */}
                      </div>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        June 25, 2024
                      </h6>
                    </div>
                    <div className="flex items-center justify-start gap-1.5 rounded-full border border-fuchsia-400 bg-fuchsia-50 px-2.5 py-0.5">
                      <span className="text-center text-xs leading-normal font-medium text-fuchsia-600">
                        E-commerce
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                      Trends Driving Online Shopping in 2024
                    </h3>
                    <p className="text-lg leading-relaxed font-normal text-gray-500">
                      Explore how gadgets and apps are transforming personal
                      training.
                    </p>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-white px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-gray-100 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium text-gray-900">
                    Read More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-center justify-start gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="group inline-flex h-full w-full flex-col items-start justify-start gap-10 rounded-2xl bg-emerald-100 p-5">
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="inline-flex w-full items-center justify-between gap-3">
                    <div className="flex items-center justify-start gap-2">
                      <div className="relative h-6 w-6">
                        {/* SVG removed */}
                      </div>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        June 25, 2024
                      </h6>
                    </div>
                    <div className="flex items-center justify-start gap-1.5 rounded-full border border-emerald-500 bg-emerald-50 px-2.5 py-0.5">
                      <span className="text-center text-xs leading-normal font-medium text-emerald-700">
                        Lifestyle
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                      Foods That Boost Your Mood and Cognitive Function
                    </h3>
                    <p className="text-lg leading-relaxed font-normal text-gray-500">
                      Find out which foods enhance both mood and cognitive
                      performance.
                    </p>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-white px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-gray-100 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium text-gray-900">
                    Read More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
              <div className="group inline-flex h-full w-full flex-col items-start justify-start gap-10 rounded-2xl bg-orange-100 p-5">
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="inline-flex w-full items-center justify-between gap-3">
                    <div className="flex items-center justify-start gap-2">
                      <div className="relative h-6 w-6">
                        {/* SVG removed */}
                      </div>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        June 25, 2024
                      </h6>
                    </div>
                    <div className="flex items-center justify-start gap-1.5 rounded-full border border-orange-400 bg-orange-50 px-2.5 py-0.5">
                      <span className="text-center text-xs leading-normal font-medium text-orange-600">
                        Economy
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                      A Guide to Investing and Trading Digital Assets
                    </h3>
                    <p className="text-lg leading-relaxed font-normal text-gray-500">
                      Get essential insights on investing and trading digital
                      assets with our guide.
                    </p>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-white px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-gray-100 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium text-gray-900">
                    Read More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
              <div className="group inline-flex h-full w-full flex-col items-start justify-start gap-10 rounded-2xl bg-lime-100 p-5">
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="inline-flex w-full items-center justify-between gap-3">
                    <div className="flex items-center justify-start gap-2">
                      <div className="relative h-6 w-6">
                        {/* SVG removed */}
                      </div>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        June 25, 2024
                      </h6>
                    </div>
                    <div className="flex items-center justify-start gap-1.5 rounded-full border border-lime-400 bg-lime-50 px-2.5 py-0.5">
                      <span className="text-center text-xs leading-normal font-medium text-lime-600">
                        Innovation
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                      Gadgets and Apps Revolutionizing Training
                    </h3>
                    <p className="text-lg leading-relaxed font-normal text-gray-500">
                      Discover how gadgets and apps are revolutionizing the way
                      we train.
                    </p>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-white px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:bg-gray-100 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium text-gray-900">
                    Read More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
