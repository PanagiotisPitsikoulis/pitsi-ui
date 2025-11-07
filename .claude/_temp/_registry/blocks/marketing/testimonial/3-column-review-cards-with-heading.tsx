export default function ThreeColumnReviewCardsWithHeading() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-y-8 md:gap-y-0 flex-wrap md:flex-wrap xl:flex-nowrap xl:flex-row xl:justify-between xl:gap-x-8 max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto xl:max-w-full">
          <div className="w-full xl:w-1/3">
            <span className="text-sm text-indigo-600 font-medium mb-4 block">
              Testimonial
            </span>
            <h2 className="font-manrope text-4xl font-bold text-gray-900 leading-[3.25rem] mb-4">
              What our users says about us
            </h2>
            <p className="text-base text-gray-500 mb-14">
              knowledge, expertise, advices &amp; confidence
            </p>
            <button className="bg-indigo-50 rounded-full shadow-sm py-3 px-7 flex items-center gap-4 font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100">
              View all testimonials {/* SVG removed */}
            </button>
          </div>
          <div className="w-full xl:w-2/3 relative md:-mt-20 xl:mt-0">
            <div className="flex flex-col items-center md:flex-row gap-8">
              <div className="w-full xl:w-1/2">
                <div className="bg-white shadow-sm rounded-2xl p-8">
                  <div className="flex items-center gap-2 text-amber-500 transition-all duration-500  ">
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
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <h6 className="font-medium text-gray-900">
                        Emily Johnson
                      </h6>
                    </div>
                    <span className="text-sm font-medium text-indigo-600 ml-4 pl-4 border-l border-solid border-gray-300">
                      Product Designer
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2 grid gap-8">
                <div className="bg-white shadow-sm rounded-2xl p-8">
                  <div className="flex items-center gap-2 text-amber-500 transition-all duration-500  ">
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
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <h6 className="font-medium text-gray-900">
                        Olivia Carter
                      </h6>
                    </div>
                    <span className="text-sm font-medium text-indigo-600 ml-4 pl-4 border-l border-solid border-gray-300">
                      Sales Manger
                    </span>
                  </div>
                </div>
                <div className="bg-white shadow-sm rounded-2xl p-8">
                  <div className="flex items-center gap-2 text-amber-500 transition-all duration-500  ">
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
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <h6 className="font-medium text-gray-900">
                        Wyatt Turner
                      </h6>
                    </div>
                    <span className="text-sm font-medium text-indigo-600 ml-4 pl-4 border-l border-solid border-gray-300">
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
  );
}
