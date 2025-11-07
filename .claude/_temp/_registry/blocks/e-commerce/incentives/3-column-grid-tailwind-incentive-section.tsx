export default function ThreeColumnGridTailwindIncentiveSection() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">
          <div className="flex gap-6 max-lg:max-w-xl max-lg:mx-auto group">
            <span className="w-16 h-16 rounded-[50px] p-4 flex items-center justify-center bg-indigo-50 cursor-pointer transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="font-semibold text-lg leading-8 text-black mb-1">
                Available in the word
              </h6>
              <p className="font-normal text-sm text-gray-500 mb-4">
                Introducing our latest product, crafted to perfection and now
                available worldwide!
              </p>
              <a
                href="javascript:;"
                className="font-semibold text-xs leading-5 text-indigo-600"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex gap-6 max-lg:max-w-xl max-lg:mx-auto group">
            <span className="w-16 h-16 rounded-[50px] p-4 flex items-center justify-center bg-indigo-50 cursor-pointer transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="font-semibold text-lg leading-8 text-black mb-1">
                Available in shop
              </h6>
              <p className="font-normal text-sm text-gray-500 mb-4">
                Discover the convenience of shopping close to home with our
                exclusive Product.
              </p>
              <a
                href="javascript:;"
                className="font-semibold text-xs leading-5 text-indigo-600"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex gap-6 max-lg:max-w-xl max-lg:mx-auto group">
            <span className="w-16 h-16 rounded-[50px] p-4 flex items-center justify-center bg-indigo-50 cursor-pointer transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="font-semibold text-lg leading-8 text-black mb-1">
                All category is available
              </h6>
              <p className="font-normal text-sm text-gray-500 mb-4">
                Introducing our latest collection, where every category is a
                world of possibilities!
              </p>
              <a
                href="javascript:;"
                className="font-semibold text-xs leading-5 text-indigo-600"
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
