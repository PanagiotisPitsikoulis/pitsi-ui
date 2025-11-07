export default function TailwindProductListWithThreeColumnGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-8 text-3xl font-bold text-black max-lg:text-center min-[400px]:text-4xl">
          Available Products
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <a href="javascript:;" className="mx-auto max-w-[384px]">
            <div className="aspect-square w-full max-w-sm">
              <img
                src="https://pagedone.io/asset/uploads/1701157806.png"
                alt="cream image"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="mb-2 text-xl leading-8 font-medium text-black">
                  Skin care cream
                </h6>
                <h6 className="text-xl leading-8 font-semibold text-indigo-600">
                  $74.99
                </h6>
              </div>
              <button className="group flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200 min-[400px]:p-4"></button>
            </div>
          </a>
          <a href="javascript:;" className="mx-auto max-w-[384px]">
            <div className="aspect-square w-full max-w-sm">
              <img
                src="https://pagedone.io/asset/uploads/1701157826.png"
                alt="cream image"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="mb-2 text-xl leading-8 font-medium text-black">
                  Men’s Facial
                </h6>
                <h6 className="text-xl leading-8 font-semibold text-indigo-600">
                  $25
                </h6>
              </div>
              <button className="group flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200 min-[400px]:p-4"></button>
            </div>
          </a>
          <a href="javascript:;" className="mx-auto max-w-[384px]">
            <div className="relative aspect-square w-full max-w-sm">
              <img
                src="https://pagedone.io/asset/uploads/1701157844.png"
                alt="serum bottle image"
                className="h-full w-full rounded-xl object-cover"
              />
              <span className="absolute top-3 right-3 z-10 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 px-2 py-1 text-base leading-7 font-medium text-white min-[400px]:px-4 min-[400px]:py-2">
                20% Off
              </span>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h6 className="mb-2 text-xl leading-8 font-medium text-black">
                  Dark circles serum
                </h6>
                <h6 className="text-xl leading-8 font-semibold text-indigo-600">
                  $199.99
                </h6>
              </div>
              <button className="group flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200 min-[400px]:p-4"></button>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
