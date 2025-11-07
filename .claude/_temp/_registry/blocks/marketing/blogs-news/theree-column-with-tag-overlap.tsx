export default function ThereeColumnWithTagOverlap() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
          Popular News
        </h2>
        <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="group w-full max-lg:max-w-xl lg:w-1/3  ">
            <div className="relative flex items-center mb-8">
              <img
                src="https://pagedone.io/asset/uploads/1696244795.png"
                alt="Global image"
                className="rounded-lg w-full object-cover"
              />
              <div className="flex items-center absolute bottom-0 bg-white rounded-tr-2xl py-4 px-5 pl-2">
                <span className="text-sm text-gray-500 border-r border-gray-200 transition-all duration-300 mr-5 pr-5 group-hover:text-gray-900">
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
                className="cursor-pointer text-xl text-gray-900 leading-8 font-semibold transition-all duration-300 group-hover:text-indigo-600 "
              >
                How technology is revolutionizing the travel experience
              </a>
            </div>
          </div>
          <div className="group w-full max-lg:max-w-xl lg:w-1/3  ">
            <div className="relative flex items-center mb-8">
              <img
                src="https://pagedone.io/asset/uploads/1696244813.png"
                alt="Global image"
                className="rounded-lg w-full object-cover"
              />
              <div className="flex items-center absolute bottom-0 bg-white rounded-tr-2xl py-4 px-5 pl-2">
                <span className="text-sm text-gray-500 border-r border-gray-200 transition-all duration-300 mr-5 pr-5 group-hover:text-gray-900">
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
                className="cursor-pointer text-xl text-gray-900 leading-8 font-semibold transition-all duration-300 group-hover:text-indigo-600 "
              >
                Tech enhanced journeys: How travel industry embraces innovation
              </a>
            </div>
          </div>
          <div className="group w-full max-lg:max-w-xl lg:w-1/3  ">
            <div className="relative flex items-center mb-8">
              <img
                src="https://pagedone.io/asset/uploads/1696244838.png"
                alt="Global image"
                className="rounded-lg w-full object-cover"
              />
              <div className="flex items-center absolute bottom-0 bg-white rounded-tr-2xl py-4 px-5 pl-2">
                <span className="text-sm text-gray-500 border-r border-gray-200 transition-all duration-300 mr-5 pr-5 group-hover:text-gray-900">
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
                className="cursor-pointer text-xl text-gray-900 leading-8 font-semibold transition-all duration-300 group-hover:text-indigo-600 "
              >
                A Journey of a thousand miles begins with a single step{" "}
              </a>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
        >
          View All
        </a>
      </div>
    </section>
  );
}
