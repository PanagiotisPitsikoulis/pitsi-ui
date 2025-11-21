export default function StatsWithBrandLogos() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-x-5 gap-y-10 min-[1080px]:mb-20 min-[1080px]:grid-cols-3 min-[1080px]:gap-0 md:grid-cols-2">
          <div className="w-full border-gray-100 min-[1080px]:border-r-2 min-[1080px]:px-8 xl:px-16">
            <div>
              <div className="font-manrope mb-3 text-center text-5xl font-semibold text-indigo-600">
                90%
              </div>
              <p className="mx-auto mb-4 w-max border-b border-indigo-600 px-8 pb-4 text-center text-xl leading-7 text-gray-500 lg:mb-9 lg:pb-9">
                Increase in new leads
              </p>
            </div>
            <div className="relative flex justify-center">
              {/* SVG removed */}
            </div>
          </div>
          <div className="w-full border-gray-100 min-[1080px]:border-r-2 min-[1080px]:px-8 xl:px-16">
            <div>
              <div className="font-manrope mb-3 text-center text-5xl font-semibold text-indigo-600">
                70%
              </div>
              <p className="mx-auto mb-4 w-max border-b border-indigo-600 pb-4 text-center text-xl leading-7 text-gray-500 lg:mb-9 lg:pb-9">
                Increase in form conversions
              </p>
            </div>
            <div className="relative flex justify-center">
              {/* SVG removed */}
            </div>
          </div>
          <div className="w-full min-[1080px]:col-span-1 min-[1080px]:px-8 md:col-span-2 xl:px-16">
            <div>
              <div className="font-manrope mb-3 text-center text-5xl font-semibold text-indigo-600">
                50%
              </div>
              <p className="mx-auto mb-4 w-max border-b border-indigo-600 px-5 pb-4 text-center text-xl leading-7 text-gray-500 lg:mb-9 lg:pb-9">
                Decrease in cost per lead
              </p>
            </div>
            <div className="relative flex justify-center">
              {/* SVG removed */}
            </div>
          </div>
        </div>
        <button className="mx-auto flex w-64 justify-center rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700">
          Explore More
        </button>
      </div>
    </section>
  )
}
