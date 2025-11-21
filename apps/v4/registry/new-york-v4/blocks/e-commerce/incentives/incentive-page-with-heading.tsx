export default function IncentivePageWithHeading() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <h2 className="font-manrope text-center text-4xl leading-10 font-bold text-black">
          Our Incentives
        </h2>
        <p className="mt-2 mb-14 text-center text-base leading-7 font-normal text-gray-500">
          Lowest Prices Best Quality Shoppings{" "}
        </p>
        <div className="grid grid-cols-1 gap-5 max-lg:mx-auto max-lg:max-w-xl lg:grid-cols-3 lg:gap-8">
          <div className="group flex cursor-grab gap-x-6 gap-y-2 max-sm:flex-col max-sm:items-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 p-4 shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="mb-1 text-lg leading-8 font-semibold text-black max-sm:text-center">
                Available in shop
              </h6>
              <p className="mb-4 text-sm font-normal text-gray-500 max-sm:text-center">
                Discover the convenience of shopping close to home with our
                exclusive Product.
              </p>
              <a
                href="javascript:;"
                className="text-xs leading-5 font-semibold text-indigo-600 max-sm:text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="group flex cursor-grab gap-x-6 gap-y-2 max-sm:flex-col max-sm:items-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 p-4 shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="mb-1 text-lg leading-8 font-semibold text-black max-sm:text-center">
                All category is available
              </h6>
              <p className="mb-4 text-sm font-normal text-gray-500 max-sm:text-center">
                Introducing our latest collection, where every category is a
                world of possibilities!
              </p>
              <a
                href="javascript:;"
                className="text-xs leading-5 font-semibold text-indigo-600 max-sm:text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="group flex cursor-grab gap-x-6 gap-y-2 max-sm:flex-col max-sm:items-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 p-4 shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="mb-1 text-lg leading-8 font-semibold text-black max-sm:text-center">
                Discount 100%+
              </h6>
              <p className="mb-4 text-sm font-normal text-gray-500 max-sm:text-center">
                For a limited time, enjoy a jaw-dropping 100%+ discount,
                absolutely free!
              </p>
              <a
                href="javascript:;"
                className="text-xs leading-5 font-semibold text-indigo-600 max-sm:text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
