export default function ThereeColumnWithTagOverlap() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-14 text-center text-4xl font-bold text-gray-900">
          Popular News
        </h2>
        <div className="mb-14 flex flex-wrap justify-center gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
          <div className="group w-full max-lg:max-w-xl lg:w-1/3">
            <div className="relative mb-8 flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696244795.png"
                alt="Global image"
                className="w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-0 flex items-center rounded-tr-2xl bg-white px-5 py-4 pl-2">
                <span className="mr-5 border-r border-gray-200 pr-5 text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-900">
                  21 Nov 2023
                </span>
                <span className="text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-900">
                  Global
                </span>
              </div>
            </div>
            <div className="block">
              <a
                href="#"
                className="cursor-pointer text-xl leading-8 font-semibold text-gray-900 transition-all duration-300 group-hover:text-indigo-600"
              >
                How technology is revolutionizing the travel experience
              </a>
            </div>
          </div>
          <div className="group w-full max-lg:max-w-xl lg:w-1/3">
            <div className="relative mb-8 flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696244813.png"
                alt="Global image"
                className="w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-0 flex items-center rounded-tr-2xl bg-white px-5 py-4 pl-2">
                <span className="mr-5 border-r border-gray-200 pr-5 text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-900">
                  21 Nov 2023
                </span>
                <span className="text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-900">
                  Global
                </span>
              </div>
            </div>
            <div className="block">
              <a
                href="#"
                className="cursor-pointer text-xl leading-8 font-semibold text-gray-900 transition-all duration-300 group-hover:text-indigo-600"
              >
                Tech enhanced journeys: How travel industry embraces innovation
              </a>
            </div>
          </div>
          <div className="group w-full max-lg:max-w-xl lg:w-1/3">
            <div className="relative mb-8 flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696244838.png"
                alt="Global image"
                className="w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-0 flex items-center rounded-tr-2xl bg-white px-5 py-4 pl-2">
                <span className="mr-5 border-r border-gray-200 pr-5 text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-900">
                  05 Dec 2023
                </span>
                <span className="text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-900">
                  Global
                </span>
              </div>
            </div>
            <div className="block">
              <a
                href="#"
                className="cursor-pointer text-xl leading-8 font-semibold text-gray-900 transition-all duration-300 group-hover:text-indigo-600"
              >
                A Journey of a thousand miles begins with a single step{" "}
              </a>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="mx-auto flex w-52 cursor-pointer items-center justify-center rounded-full border border-gray-300 px-7 py-3.5 font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-100"
        >
          View All
        </a>
      </div>
    </section>
  )
}
