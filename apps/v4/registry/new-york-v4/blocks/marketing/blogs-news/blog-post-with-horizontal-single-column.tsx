export default function BlogPostWithHorizontalSingleColumn() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center justify-between gap-8 lg:flex-row">
          <h2 className="font-manrope text-4xl font-bold text-gray-900">
            Our latest blogs
          </h2>
          <a
            href="javascript:;"
            className="flex w-52 cursor-pointer justify-center rounded-full border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
          >
            View All
          </a>
        </div>
        <div className="relative block">
          <div className="group mb-14 max-lg:mx-auto max-lg:max-w-lg">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="relative mx-auto h-72 max-w-lg xl:max-w-xl">
                <img
                  src="https://pagedone.io/asset/uploads/1696246283.png"
                  alt="blogs tailwind section"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
              <div className="block flex-1">
                <span className="mb-6 block text-center text-gray-500 lg:text-left">
                  FEBRUARY 10, 2023
                </span>
                <h4 className="font-manrope mb-5 text-center text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-indigo-600 lg:text-left">
                  Tech essentials: exploring the latest electronic gadgets and
                  innovations
                </h4>
                <p className="mb-8 text-center text-lg leading-8 text-gray-500 lg:text-left">
                  Discovering the must-have electronic devices and
                  groundbreaking innovations in the tech world.
                </p>
                <a
                  href="javascript:;"
                  className="mx-auto flex w-44 cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 text-gray-900 shadow-sm transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white lg:mx-0"
                >
                  Read more {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
          <div className="group mb-14 max-lg:mx-auto max-lg:max-w-lg">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="relative mx-auto h-72 max-w-lg xl:max-w-xl">
                <img
                  src="https://pagedone.io/asset/uploads/1696246303.png"
                  alt="blogs tailwind section"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
              <div className="block flex-1">
                <span className="mb-6 block text-center text-gray-500 lg:text-left">
                  March 10, 2023
                </span>
                <h4 className="font-manrope mb-5 text-center text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-indigo-600 lg:text-left">
                  Unlocking financial inclusion: how fintech is bridging the gap
                </h4>
                <p className="mb-8 text-center text-lg leading-8 text-gray-500 lg:text-left">
                  Examining how fintech is promoting access to financial
                  services for underserved populations.
                </p>
                <a
                  href="javascript:;"
                  className="mx-auto flex w-44 cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 text-gray-900 shadow-sm transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white lg:mx-0"
                >
                  Read more {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
