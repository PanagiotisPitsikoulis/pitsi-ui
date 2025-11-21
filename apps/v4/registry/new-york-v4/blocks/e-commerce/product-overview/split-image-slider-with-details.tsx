export default function SplitImageSliderWithDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="slider-box mx-0 h-full w-full max-lg:mx-auto">
            <div className="swiper main-slide-carousel swiper-container relative mb-6">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1700472379.png"
                      alt="Summer Travel Bag image"
                      className="rounded-2xl object-cover max-lg:mx-auto"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1711622397.png"
                      alt="Summer Travel Bag image"
                      className="rounded-2xl object-cover max-lg:mx-auto"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1711622408.png"
                      alt="Summer Travel Bag image"
                      className="rounded-2xl object-cover max-lg:mx-auto"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1711622419.png"
                      alt="Summer Travel Bag image"
                      className="rounded-2xl object-cover max-lg:mx-auto"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1711622437.png"
                      alt="Summer Travel Bag image"
                      className="rounded-2xl object-cover max-lg:mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-for-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700472379.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl object-cover transition-all duration-500"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700472430.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl border object-cover transition-all duration-500 hover:border-indigo-600"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700472416.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl border object-cover transition-all duration-500 hover:border-indigo-600"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700472446.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl border object-cover transition-all duration-500 hover:border-indigo-600"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700472467.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl border object-cover transition-all duration-500 hover:border-indigo-600"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="pro-detail w-full max-lg:mx-auto max-lg:mt-8 max-lg:max-w-[608px] lg:pl-8 xl:pl-16">
              <div className="mb-6 flex items-center justify-between gap-6">
                <div className="text">
                  <h2 className="font-manrope mb-2 text-3xl leading-10 font-bold text-gray-900">
                    Yellow Summer Travel Bag
                  </h2>
                  <p className="text-base font-normal text-gray-500">
                    ABS LUGGAGE
                  </p>
                </div>
                <button className="group p-0.5 transition-all duration-500"></button>
              </div>
              <div className="mb-8 flex flex-col gap-y-3 min-[400px]:flex-row min-[400px]:items-center">
                <div className="flex items-center">
                  <h5 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                    $ 199.00{" "}
                  </h5>
                  <span className="ml-3 text-lg font-semibold text-indigo-600">
                    30% off
                  </span>
                </div>

                <button className="flex w-max items-center gap-1 rounded-lg bg-amber-400 px-2.5 py-1.5">
                  <span className="text-base font-medium text-white">4.8</span>
                </button>
              </div>
              <p className="mb-2 text-lg font-medium text-gray-900">Color</p>
              <div className="mb-6 grid max-w-sm grid-cols-3 gap-3">
                <div className="color-box group">
                  <div>
                    <img
                      src="https://pagedone.io/asset/uploads/1700472379.png"
                      alt="Summer Travel Bag image"
                      className="aspect-square rounded-xl border-2 border-gray-100 object-cover transition-all duration-500 group-hover:border-indigo-600 min-[400px]:h-[100px]"
                    />
                    <p className="mt-2 text-center text-sm leading-6 font-normal text-gray-400 group-hover:text-indigo-600">
                      Black
                    </p>
                  </div>
                </div>
                <div className="color-box group">
                  <div>
                    <img
                      src="https://pagedone.io/asset/uploads/1700472517.png"
                      alt="Summer Travel Bag image"
                      className="rounded-xl border-2 border-gray-100 object-cover transition-all duration-500 group-hover:border-indigo-600"
                    />
                    <p className="mt-2 text-center text-sm leading-6 font-normal text-gray-400 group-hover:text-indigo-600">
                      Brown
                    </p>
                  </div>
                </div>
                <div className="color-box group">
                  <div>
                    <img
                      src="https://pagedone.io/asset/uploads/1700472529.png"
                      alt="Summer Travel Bag image"
                      className="rounded-xl border-2 border-gray-100 object-cover transition-all duration-500 group-hover:border-indigo-600"
                    />
                    <p className="mt-2 text-center text-sm leading-6 font-normal text-gray-400 group-hover:text-indigo-600">
                      Beige
                    </p>
                  </div>
                </div>
              </div>
              <p className="mb-2 text-lg font-medium text-gray-900">
                Size (KG)
              </p>
              <div className="mb-3 grid grid-cols-2 gap-3 min-[400px]:mb-8 min-[400px]:grid-cols-4">
                <button className="w-full rounded-full border border-gray-200 px-5 py-2.5 text-center text-sm leading-6 font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                  Full Set
                </button>
                <button className="w-full rounded-full border border-gray-200 px-5 py-2.5 text-center text-sm leading-6 font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                  10 kg
                </button>
                <button className="w-full rounded-full border border-gray-200 px-5 py-2.5 text-center text-sm leading-6 font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                  25 kg
                </button>
                <button className="w-full rounded-full border border-gray-200 px-5 py-2.5 text-center text-sm leading-6 font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                  35 kg
                </button>
              </div>
              <div className="mb-3 flex flex-col items-center gap-3 min-[400px]:mb-8 min-[400px]:flex-row">
                <div className="flex items-center justify-center rounded-full border border-gray-400">
                  <button className="group flex h-full w-full items-center justify-center rounded-l-full border-r border-gray-400 bg-white px-3 py-[14px] shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300"></button>
                  <input
                    type="text"
                    className="h-full w-full bg-transparent px-2 py-3 text-center text-lg font-semibold text-gray-900 outline-0 placeholder:text-gray-900 hover:text-indigo-600 hover:placeholder:text-indigo-600 min-[400px]:min-w-[75px]"
                  />
                  <button className="group flex h-full w-full items-center justify-center rounded-r-full border-l border-gray-400 bg-white px-3 py-[14px] shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300"></button>
                </div>
                <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-indigo-50 px-5 py-3 text-lg font-semibold text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-300">
                  Add to cart
                </button>
              </div>
              <button className="flex w-full items-center justify-center rounded-[100px] bg-indigo-600 px-5 py-4 text-center text-lg font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
