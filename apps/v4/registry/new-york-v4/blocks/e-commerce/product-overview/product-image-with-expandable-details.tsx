export default function ProductImageWithExpandableDetails() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6 xl:col-span-8">
            <div className="slider-box flex flex-col-reverse xl:flex-row">
              <div className="w-full xl:w-1/6">
                <div className="nav-for-slider">
                  <div className="swiper-wrapper justify-center gap-4 xl:flex-col">
                    <div className="swiper-slide thumbs-slide !h-16 !w-16 lg:!h-20 lg:!w-20 xl:!h-28 xl:!w-28">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473007.png"
                        alt="kids shoes image"
                        className="h-auto w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600 sm:max-w-[108px]"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide !h-16 !w-16 lg:!h-20 lg:!w-20 xl:!h-28 xl:!w-28">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473024.png"
                        alt="kids shoes image"
                        className="h-auto w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600 sm:max-w-[108px]"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide !h-16 !w-16 lg:!h-20 lg:!w-20 xl:!h-28 xl:!w-28">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473042.png"
                        alt="kids shoes image"
                        className="h-auto w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600 sm:max-w-[108px]"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide !h-16 !w-16 lg:!h-20 lg:!w-20 xl:!h-28 xl:!w-28">
                      <img
                        src="https://pagedone.io/asset/uploads/1700472988.png"
                        alt="kids shoes image"
                        className="h-auto w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600 sm:max-w-[108px]"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide !h-16 !w-16 lg:!h-20 lg:!w-20 xl:!h-28 xl:!w-28">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473076.png"
                        alt="kids shoes image"
                        className="h-auto w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600 sm:max-w-[108px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box w-full xl:w-4/5">
                <div className="swiper main-slide-carousel swiper-container relative mb-6">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="block">
                        <img
                          src="https://pagedone.io/asset/uploads/1711691275.png"
                          alt="Summar Shoes"
                          className="mx-auto rounded-3xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="block">
                        <img
                          src="https://pagedone.io/asset/uploads/1711691286.png"
                          alt="Summar Shoes"
                          className="mx-auto rounded-3xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="block">
                        <img
                          src="https://pagedone.io/asset/uploads/1711691296.png"
                          alt="Summar Shoes"
                          className="mx-auto rounded-3xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="block">
                        <img
                          src="https://pagedone.io/asset/uploads/1711691310.png"
                          alt="Summar Shoes"
                          className="mx-auto rounded-3xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="block">
                        <img
                          src="https://pagedone.io/asset/uploads/1711691320.png"
                          alt="Summar Shoes"
                          className="mx-auto rounded-3xl object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex items-center lg:col-span-6 xl:col-span-4">
            <div className="flex w-full flex-col max-xl:mx-auto max-lg:items-center max-lg:justify-center">
              <div className="box-1 w-full border-b border-gray-100 pb-8">
                <div className="mb-6 flex items-center justify-between gap-1">
                  <div className="text">
                    <h2 className="font-manrope mb-2 text-3xl leading-10 font-bold text-gray-900">
                      Camper Kids
                    </h2>
                    <p className="text-base font-medium text-gray-500">
                      Lace-up Low-Top Sneakers
                    </p>
                  </div>
                  <button className="group rounded-full p-0.5 shadow-sm shadow-transparent transition-all duration-500"></button>
                </div>
                <div className="flex w-full flex-col items-start min-[400px]:flex-row min-[400px]:items-center">
                  <div className="mr-5 flex items-center gap-3 border-gray-200 pr-5 min-[400px]:border-r">
                    <span className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                      $80.00
                    </span>
                    <h5 className="text-base leading-7 font-normal text-gray-400 line-through">
                      $100.00
                    </h5>
                    <span className="text-lg font-semibold text-indigo-600">
                      20% off
                    </span>
                  </div>
                  <span className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-base font-medium text-amber-400">
                    4.8
                  </span>
                </div>
              </div>
              <div className="box-2 my-8 w-full">
                <div className="acc-container">
                  <div className="acc border-b border-gray-200">
                    <div className="acc-head group flex cursor-pointer items-center justify-between py-6">
                      <p className="text-base leading-7 font-medium text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                        Style Details
                      </p>
                    </div>
                  </div>
                  <div className="acc border-b border-gray-200">
                    <div className="acc-head group flex cursor-pointer items-center justify-between py-6">
                      <p className="text-base leading-7 font-medium text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                        Size &amp; Fit
                      </p>
                    </div>
                  </div>
                  <div className="acc border-b border-gray-200">
                    <div className="acc-head group flex cursor-pointer items-center justify-between py-6">
                      <p className="text-base leading-7 font-medium text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                        Delivery &amp; Free Returns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mb-3 w-full min-[400px]:mb-6">
                <select
                  name="Size"
                  id="size"
                  className="w-full appearance-none rounded-xl border border-gray-300 px-5 py-3 text-base leading-7 font-semibold text-gray-900 shadow-sm shadow-transparent outline-0 transition-all duration-500 select-none hover:bg-gray-50 hover:shadow-gray-300"
                >
                  <option value="Choose Your Size">Choose Your Size</option>
                  <option value="Choose Your Size">12</option>
                  <option value="Choose Your Size">14</option>
                  <option value="Choose Your Size">16</option>
                </select>
              </div>
              <div className="flex w-full flex-col items-center gap-3 min-[400px]:flex-row">
                <button className="w-full rounded-xl bg-indigo-50 py-4 text-center text-lg font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100 min-[400px]:w-1/2">
                  Add To Cart
                </button>
                <button className="w-full rounded-xl bg-indigo-600 py-4 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-indigo-700 min-[400px]:w-1/2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
