export default function StatsWithBrandLogos() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 min-[1080px]:grid-cols-3 min-[1080px]:gap-0 mb-10 min-[1080px]:mb-20">
          <div className="w-full min-[1080px]:border-r-2 border-gray-100 min-[1080px]:px-8 xl:px-16">
            <div>
              <div className="font-manrope font-semibold text-5xl text-indigo-600 mb-3 text-center ">
                90%
              </div>
              <p className="text-xl text-gray-500 leading-7 text-center border-b border-indigo-600 mb-4 pb-4 lg:mb-9 lg:pb-9 w-max mx-auto px-8">
                Increase in new leads
              </p>
            </div>
            <div className="relative flex justify-center">
              {/* SVG removed */}
            </div>
          </div>
          <div className="w-full min-[1080px]:border-r-2 border-gray-100 min-[1080px]:px-8 xl:px-16">
            <div>
              <div className="font-manrope font-semibold text-5xl text-indigo-600 mb-3 text-center ">
                70%
              </div>
              <p className="text-xl text-gray-500 leading-7 text-center border-b border-indigo-600 mb-4 pb-4 lg:mb-9 lg:pb-9 w-max mx-auto">
                Increase in form conversions
              </p>
            </div>
            <div className="relative flex justify-center">
              {/* SVG removed */}
            </div>
          </div>
          <div className="w-full min-[1080px]:px-8 xl:px-16 md:col-span-2 min-[1080px]:col-span-1">
            <div>
              <div className="font-manrope font-semibold text-5xl text-indigo-600 mb-3 text-center ">
                50%
              </div>
              <p className="text-xl text-gray-500 leading-7 text-center border-b border-indigo-600 mb-4 pb-4 lg:mb-9 lg:pb-9 w-max mx-auto px-5">
                Decrease in cost per lead
              </p>
            </div>
            <div className="relative flex justify-center">
              {/* SVG removed */}
            </div>
          </div>
        </div>
        <button className="bg-indigo-600 shadow-sm py-4 px-8 w-64 rounded-full mx-auto text-lg font-semibold text-white flex justify-center transition-all duration-500 hover:bg-indigo-700">
          Explore More
        </button>
      </div>
    </section>
  );
}
