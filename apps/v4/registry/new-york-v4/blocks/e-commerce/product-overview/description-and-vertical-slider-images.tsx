export default function DescriptionAndVerticalSliderImages() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex grid-cols-12 flex-col-reverse gap-8 md:grid">
          <div className="col-span-12 flex items-center md:col-span-6">
            <div className="w-full max-w-[480px] max-xl:mx-auto md:max-w-[608px] xl:max-w-lg">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="font-manrope max-w-xs text-2xl leading-10 font-bold text-gray-900 sm:text-3xl">
                  Headset Neon HM760 White Version
                </h2>
                <button className="group p-0.5 transition-all duration-500"></button>
              </div>
              <div className="mb-5 flex flex-col justify-between max-[400px]:gap-3 min-[400px]:mb-11 min-[400px]:flex-row min-[400px]:items-center">
                <div className="flex items-center gap-2">
                  <span className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                    $80.00{" "}
                  </span>
                  <h5 className="text-base font-normal text-gray-400 line-through">
                    $100.00
                  </h5>
                  <span className="pl-1 text-lg leading-8 font-semibold text-indigo-600">
                    20% off
                  </span>
                </div>
                <span className="flex w-max items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-base font-medium text-amber-400">
                  4.8
                </span>
              </div>
              <div className="mb-5 flex flex-col justify-between gap-y-3 min-[400px]:mb-11 min-[400px]:flex-row min-[400px]:items-center">
                <p className="text-xl leading-8 font-medium text-gray-900">
                  Bag Color
                </p>
                <div className="relative flex items-center gap-3 min-[400px]:pl-3">
                  <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 hover:border-emerald-500"></button>
                  <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 hover:border-amber-400"></button>
                  <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 hover:border-red-500"></button>
                  <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 hover:border-blue-400"></button>
                </div>
              </div>
              <div className="mb-3 grid grid-cols-1 gap-3 min-[400px]:mb-6 sm:grid-cols-2">
                <div className="flex w-full items-center justify-center">
                  <button className="group rounded-l-full border border-gray-400 px-[18px] py-[14px] shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-300"></button>
                  <input
                    type="text"
                    className="w-full border-y border-gray-400 bg-transparent px-6 py-[11px] text-center text-lg font-semibold text-gray-900 outline-0 placeholder:text-gray-900 focus-within:bg-gray-50 focus-within:text-gray-900 xl:max-w-[126px]"
                  />
                  <button className="group rounded-r-full border border-gray-400 px-[18px] py-[14px] transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-300"></button>
                </div>
                <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-indigo-50 px-5 py-3 text-lg font-semibold text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-200 hover:shadow-indigo-300">
                  Add to cart
                </button>
              </div>
              <button className="flex w-full items-center justify-center rounded-[100px] bg-indigo-600 px-5 py-4 text-center text-lg font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                Buy Now
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="slider-box flex flex-col gap-8 xl:flex-row">
              <div className="box w-full xl:w-4/5">
                <div className="swiper main-slide-carousel swiper-container relative">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="block">
                        <img
                          src="https://pagedone.io/asset/uploads/1700473740.png"
                          alt="headphone"
                          className="mx-auto rounded-3xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="block">
                        <img
                          src="https://pagedone.io/asset/uploads/1711703819.png"
                          alt="headphone"
                          className="mx-auto rounded-3xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="block">
                        <img
                          src="https://pagedone.io/asset/uploads/1711703810.png"
                          alt="headphone"
                          className="mx-auto rounded-3xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="block">
                        <img
                          src="https://pagedone.io/asset/uploads/1711703801.png"
                          alt="headphone"
                          className="mx-auto rounded-3xl object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/6">
                <div className="nav-for-slider">
                  <div className="swiper-wrapper justify-center gap-4 xl:flex-col">
                    <div className="swiper-slide thumbs-slide !h-20 !w-20 lg:!h-28 lg:!w-28">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473740.png"
                        alt="kids shoes image"
                        className="h-auto w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600 sm:max-w-[108px]"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide !h-20 !w-20 lg:!h-28 lg:!w-28">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473769.png"
                        alt="kids shoes image"
                        className="h-auto w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600 sm:max-w-[108px]"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide !h-20 !w-20 lg:!h-28 lg:!w-28">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473786.png"
                        alt="kids shoes image"
                        className="h-auto w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600 sm:max-w-[108px]"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide !h-20 !w-20 lg:!h-28 lg:!w-28">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473802.png"
                        alt="kids shoes image"
                        className="h-auto w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600 sm:max-w-[108px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
