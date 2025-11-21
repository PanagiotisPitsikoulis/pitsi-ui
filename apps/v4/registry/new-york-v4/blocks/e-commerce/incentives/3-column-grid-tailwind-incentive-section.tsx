export default function ThreeColumnGridTailwindIncentiveSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8">
          <div className="group flex gap-6 max-lg:mx-auto max-lg:max-w-xl">
            <span className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-[50px] bg-indigo-50 p-4 transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="mb-1 text-lg leading-8 font-semibold text-black">
                Available in the word
              </h6>
              <p className="mb-4 text-sm font-normal text-gray-500">
                Introducing our latest product, crafted to perfection and now
                available worldwide!
              </p>
              <a
                href="javascript:;"
                className="text-xs leading-5 font-semibold text-indigo-600"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="group flex gap-6 max-lg:mx-auto max-lg:max-w-xl">
            <span className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-[50px] bg-indigo-50 p-4 transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="mb-1 text-lg leading-8 font-semibold text-black">
                Available in shop
              </h6>
              <p className="mb-4 text-sm font-normal text-gray-500">
                Discover the convenience of shopping close to home with our
                exclusive Product.
              </p>
              <a
                href="javascript:;"
                className="text-xs leading-5 font-semibold text-indigo-600"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="group flex gap-6 max-lg:mx-auto max-lg:max-w-xl">
            <span className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-[50px] bg-indigo-50 p-4 transition-all duration-500 group-hover:bg-indigo-100"></span>
            <div className="data flex flex-col justify-between">
              <h6 className="mb-1 text-lg leading-8 font-semibold text-black">
                All category is available
              </h6>
              <p className="mb-4 text-sm font-normal text-gray-500">
                Introducing our latest collection, where every category is a
                world of possibilities!
              </p>
              <a
                href="javascript:;"
                className="text-xs leading-5 font-semibold text-indigo-600"
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
