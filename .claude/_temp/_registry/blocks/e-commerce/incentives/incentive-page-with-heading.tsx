export default function IncentivePageWithHeading() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
          Our Incentives
        </h2>
        <p className="mt-2 font-normal text-base leading-7 text-gray-500 text-center mb-14">
          Lowest Prices Best Quality Shoppings{" "}
        </p>
        <div className="grid grid-cols-1 max-lg:max-w-xl max-lg:mx-auto lg:grid-cols-3 gap-5 lg:gap-8">
          <div className="flex max-sm:flex-col max-sm:items-center group gap-x-6 gap-y-2 cursor-grab">
            <span className="w-16 h-16 rounded-full p-4 flex items-center justify-center bg-indigo-50 shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="font-semibold text-lg leading-8 text-black mb-1 max-sm:text-center">
                Available in shop
              </h6>
              <p className="font-normal text-sm text-gray-500 mb-4 max-sm:text-center">
                Discover the convenience of shopping close to home with our
                exclusive Product.
              </p>
              <a
                href="javascript:;"
                className="font-semibold text-xs leading-5 text-indigo-600 max-sm:text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex max-sm:flex-col max-sm:items-center group gap-x-6 gap-y-2 cursor-grab">
            <span className="w-16 h-16 rounded-full p-4 flex items-center justify-center bg-indigo-50 shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="font-semibold text-lg leading-8 text-black mb-1 max-sm:text-center">
                All category is available
              </h6>
              <p className="font-normal text-sm text-gray-500 mb-4 max-sm:text-center">
                Introducing our latest collection, where every category is a
                world of possibilities!
              </p>
              <a
                href="javascript:;"
                className="font-semibold text-xs leading-5 text-indigo-600 max-sm:text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex max-sm:flex-col max-sm:items-center group gap-x-6 gap-y-2 cursor-grab">
            <span className="w-16 h-16 rounded-full p-4 flex items-center justify-center bg-indigo-50 shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="font-semibold text-lg leading-8 text-black mb-1 max-sm:text-center">
                Discount 100%+
              </h6>
              <p className="font-normal text-sm text-gray-500 mb-4 max-sm:text-center">
                For a limited time, enjoy a jaw-dropping 100%+ discount,
                absolutely free!
              </p>
              <a
                href="javascript:;"
                className="font-semibold text-xs leading-5 text-indigo-600 max-sm:text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
