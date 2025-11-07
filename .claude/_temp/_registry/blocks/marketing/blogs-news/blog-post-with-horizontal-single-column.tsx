export default function BlogPostWithHorizontalSingleColumn() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex items-center justify-between flex-col lg:flex-row gap-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 ">
            Our latest blogs
          </h2>
          <a
            href="javascript:;"
            className="text-lg font-semibold cursor-pointer transition-all duration-500 border border-gray-300 py-4 px-8 rounded-full text-gray-900 w-52 flex justify-center hover:bg-gray-50"
          >
            View All
          </a>
        </div>
        <div className="relative block">
          <div className="group mb-14 max-lg:max-w-lg max-lg:mx-auto">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="relative max-w-lg xl:max-w-xl h-72 mx-auto">
                <img
                  src="https://pagedone.io/asset/uploads/1696246283.png"
                  alt="blogs tailwind section"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div className="block flex-1">
                <span className="mb-6 text-gray-500 block text-center lg:text-left">
                  FEBRUARY 10, 2023
                </span>
                <h4 className="font-manrope text-2xl text-gray-900 font-bold mb-5 transition-all duration-300 text-center lg:text-left group-hover:text-indigo-600">
                  Tech essentials: exploring the latest electronic gadgets and
                  innovations
                </h4>
                <p className="text-lg text-gray-500 leading-8 mb-8 text-center lg:text-left">
                  Discovering the must-have electronic devices and
                  groundbreaking innovations in the tech world.
                </p>
                <a
                  href="javascript:;"
                  className="flex cursor-pointer items-center justify-center gap-2 border border-gray-300 shadow-sm text-gray-900 py-3.5 px-7 w-44 rounded-full transition-all duration-300 mx-auto lg:mx-0 group-hover:bg-indigo-600 group-hover:text-white"
                >
                  Read more {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
          <div className="group mb-14 max-lg:max-w-lg max-lg:mx-auto">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="relative max-w-lg xl:max-w-xl h-72 mx-auto">
                <img
                  src="https://pagedone.io/asset/uploads/1696246303.png"
                  alt="blogs tailwind section"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div className="block flex-1">
                <span className="mb-6 text-gray-500 block text-center lg:text-left">
                  March 10, 2023
                </span>
                <h4 className="font-manrope text-2xl text-gray-900 font-bold mb-5 transition-all duration-300 text-center lg:text-left group-hover:text-indigo-600">
                  Unlocking financial inclusion: how fintech is bridging the gap
                </h4>
                <p className="text-lg text-gray-500 leading-8 mb-8 text-center lg:text-left">
                  Examining how fintech is promoting access to financial
                  services for underserved populations.
                </p>
                <a
                  href="javascript:;"
                  className="flex cursor-pointer items-center justify-center gap-2 border border-gray-300 shadow-sm text-gray-900 py-3.5 px-7 w-44 rounded-full transition-all duration-300 mx-auto lg:mx-0 group-hover:bg-indigo-600 group-hover:text-white"
                >
                  Read more {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
