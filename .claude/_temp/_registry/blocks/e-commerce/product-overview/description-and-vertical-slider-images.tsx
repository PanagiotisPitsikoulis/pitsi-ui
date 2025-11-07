export default function DescriptionAndVerticalSliderImages() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:grid grid-cols-12 gap-8 mx-auto">
          <div className="col-span-12 md:col-span-6  flex items-center">
            <div className="w-full max-w-[480px] md:max-w-[608px] max-xl:mx-auto  xl:max-w-lg">
              <div className="flex items-center justify-between gap-4 mb-5">
                <h2 className="font-manrope font-bold text-2xl sm:text-3xl leading-10 text-gray-900 max-w-xs">
                  Headset Neon HM760 White Version
                </h2>
                <button className="group transition-all duration-500 p-0.5"></button>
              </div>
              <div className="flex min-[400px]:items-center justify-between mb-5 min-[400px]:mb-11 flex-col max-[400px]:gap-3 min-[400px]:flex-row">
                <div className="flex items-center gap-2">
                  <span className="font-semibold font-manrope text-2xl leading-9 text-gray-900">
                    $80.00{" "}
                  </span>
                  <h5 className="font-normal text-base text-gray-400 line-through">
                    $100.00
                  </h5>
                  <span className="pl-1 font-semibold text-lg leading-8 text-indigo-600">
                    20% off
                  </span>
                </div>
                <span className="flex items-center gap-1 font-medium text-base text-amber-400 py-1.5 px-2.5 border border-gray-200 rounded-md w-max">
                  4.8
                </span>
              </div>
              <div className="flex min-[400px]:items-center justify-between mb-5 min-[400px]:mb-11 gap-y-3 flex-col min-[400px]:flex-row">
                <p className="font-medium text-xl leading-8 text-gray-900 ">
                  Bag Color
                </p>
                <div className="flex items-center gap-3 relative min-[400px]:pl-3">
                  <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-emerald-500"></button>
                  <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-amber-400"></button>
                  <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-red-500"></button>
                  <button className="p-2.5 border border-gray-200 rounded-full  transition-all duration-300 hover:border-blue-400"></button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 min-[400px]:mb-6">
                <div className="flex items-center justify-center w-full">
                  <button className="py-[14px] px-[18px] border border-gray-400 rounded-l-full group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:border-gray-400 hover:bg-gray-50"></button>
                  <input
                    type="text"
                    className="font-semibold text-gray-900 text-lg py-[11px] px-6 w-full xl:max-w-[126px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center focus-within:bg-gray-50 outline-0 focus-within:text-gray-900"
                  />
                  <button className="py-[14px] px-[18px] border border-gray-400 rounded-r-full group transition-all duration-500 hover:bg-gray-50 hover:border-gray-400 hover:shadow-gray-300"></button>
                </div>
                <button className="group py-3 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-200 ">
                  Add to cart
                </button>
              </div>
              <button className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700">
                Buy Now
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 ">
            <div className="slider-box flex flex-col xl:flex-row gap-8">
              <div className="box xl:w-4/5 w-full">
                <div className="swiper main-slide-carousel swiper-container relative ">
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
              <div className="xl:w-1/6 w-full">
                <div className="nav-for-slider">
                  <div className="swiper-wrapper justify-center gap-4 xl:flex-col">
                    <div className="swiper-slide thumbs-slide lg:!w-28 lg:!h-28  !w-20 !h-20">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473740.png"
                        alt="kids shoes image"
                        className="w-full sm:max-w-[108px] cursor-pointer h-auto rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide lg:!w-28 lg:!h-28  !w-20 !h-20">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473769.png"
                        alt="kids shoes image"
                        className="w-full sm:max-w-[108px] cursor-pointer h-auto rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide lg:!w-28 lg:!h-28  !w-20 !h-20">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473786.png"
                        alt="kids shoes image"
                        className="w-full sm:max-w-[108px] cursor-pointer h-auto rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide lg:!w-28 lg:!h-28  !w-20 !h-20">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473802.png"
                        alt="kids shoes image"
                        className="w-full sm:max-w-[108px] cursor-pointer h-auto rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
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
  );
}
