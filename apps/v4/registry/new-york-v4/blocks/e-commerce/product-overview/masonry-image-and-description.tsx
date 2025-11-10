export default function MasonryImageAndDescription() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="box relative mx-auto h-full w-full max-lg:max-w-xl">
              <img
                src="https://pagedone.io/asset/uploads/1700475349.png"
                alt="Leather jacket image"
                className="mx-auto rounded-3xl object-cover"
              />
              <span className="absolute top-5 right-5 z-10 rounded-full bg-white px-4 py-2 text-base leading-7 font-medium text-indigo-600">
                Special Edition
              </span>
            </div>
            <div className="box">
              <div className="grid grid-cols-1 gap-8 max-lg:mx-auto max-lg:max-w-xl sm:grid-cols-2">
                <div className="box">
                  <img
                    src="https://pagedone.io/asset/uploads/1700475364.png"
                    alt="Leather jacket image"
                    className="mx-auto rounded-3xl object-cover max-sm:w-full"
                  />
                </div>
                <div className="box max-sm:hidden">
                  <img
                    src="https://pagedone.io/asset/uploads/1700475364.png"
                    alt="Leather jacket image"
                    className="mx-auto rounded-3xl object-cover"
                  />
                </div>
              </div>
              <div className="box mt-8 max-lg:mx-auto max-lg:max-w-xl">
                <img
                  src="https://pagedone.io/asset/uploads/1700475386.png"
                  alt="Leather jacket image"
                  className="rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 max-lg:mx-auto max-lg:max-w-xl lg:grid-cols-2">
            <div className="pro-detail">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="font-manrope max-w-xs text-2xl leading-normal font-bold text-gray-900 sm:text-3xl">
                  Headset Neon HM760 White Version
                </h2>
                <button className="group p-0.5 transition-all duration-500"></button>
              </div>
              <div className="mb-4 flex flex-col justify-between gap-3 min-[450px]:mb-8 min-[450px]:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-amber-400 px-1.5 py-0.5 text-base leading-7 font-medium text-white">
                    4.8
                  </span>
                  <p className="text-base leading-7 font-medium text-gray-900">
                    1624 Reviews
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-base leading-7 font-medium text-gray-900">
                    1250 <span className="text-gray-400">Sold</span>
                  </p>

                  <p className="text-base leading-7 font-medium text-indigo-600">
                    750 <span className="text-gray-900">In Stock</span>
                  </p>
                </div>
              </div>
              <p className="mb-5 text-base leading-7 font-normal text-gray-500">
                Elevate your outerwear collection with the Leather Jacket
                Special Black Edition. Meticulously crafted for the discerning
                individual, this jacket seamlessly fuses edgy aesthetics with
                premium quality, making it a standout piece in any wardrobe.
              </p>
              <div className="w-full">
                <p className="mb-2 text-base leading-7 font-medium text-gray-900">
                  Size (kg)
                </p>
                <div className="grid grid-cols-3 gap-3 min-[400px]:grid-cols-5">
                  <button className="font-manrope flex w-full max-w-[110px] items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-gray-600 shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    S
                  </button>
                  <button className="font-manrope flex w-full max-w-[110px] items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-gray-600 shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    M
                  </button>
                  <button className="font-manrope flex w-full max-w-[110px] items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-gray-600 shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    L
                  </button>
                  <button className="font-manrope flex w-full max-w-[110px] items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-gray-600 shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    XL
                  </button>
                  <button className="font-manrope flex w-full max-w-[110px] items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-gray-600 shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                    2XL
                  </button>
                </div>
              </div>
            </div>
            <div className="por-price">
              <div className="mb-8 flex flex-col items-center justify-between rounded-[30px] bg-indigo-50 p-6 min-[400px]:flex-row">
                <h6 className="font-manrope text-3xl leading-10 font-bold text-gray-900">
                  $80.00
                </h6>
                <div className="btns flex w-full items-center justify-center gap-5 max-[400px]:mt-3 min-[400px]:justify-end">
                  <button className="group flex aspect-square h-11 items-center justify-center rounded-full border-[0.8px] border-gray-300 bg-white transition-all duration-500 hover:bg-indigo-600"></button>
                  <button className="flex h-11 w-full max-w-[126px] items-center justify-center rounded-full bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-500 hover:bg-indigo-700 hover:text-white">
                    But now
                  </button>
                </div>
              </div>
              <p className="mb-2 text-base leading-7 font-medium text-gray-900">
                Sleeve
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="group rounded-xl border border-gray-300 bg-white p-5 transition-all duration-500 hover:border-indigo-600">
                  <h6 className="text-lg leading-8 font-medium text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                    Full Sleeve
                  </h6>
                  <p className="mt-3 text-base leading-7 font-normal tracking-tight text-gray-400 transition-all duration-500 group-hover:text-gray-900">
                    Stay cool and casual with our Half Sleeve collection – the
                    perfect blend of comfort and style for any occasion
                  </p>
                </div>
                <div className="group rounded-xl border border-gray-300 bg-white p-5 transition-all duration-500 hover:border-indigo-600">
                  <h6 className="text-lg leading-8 font-medium text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                    Half Sleeve
                  </h6>
                  <p className="mt-3 text-base leading-7 font-normal tracking-tight text-gray-400 transition-all duration-500 group-hover:text-gray-900">
                    Wrap yourself in timeless sophistication with our Full
                    Sleeve collection – where comfort meets elegance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
