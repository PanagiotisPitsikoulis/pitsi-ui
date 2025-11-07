export default function ProductImageWithExpandableDetails() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 mx-auto">
          <div className="col-span-12 xl:col-span-8 lg:col-span-6">
            <div className="slider-box flex flex-col-reverse xl:flex-row">
              <div className="xl:w-1/6 w-full">
                <div className="nav-for-slider">
                  <div className="swiper-wrapper justify-center gap-4 xl:flex-col">
                    <div className="swiper-slide thumbs-slide xl:!w-28 xl:!h-28 lg:!w-20 lg:!h-20 !w-16 !h-16">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473007.png"
                        alt="kids shoes image"
                        className="w-full sm:max-w-[108px] cursor-pointer h-auto rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide xl:!w-28 xl:!h-28 lg:!w-20 lg:!h-20 !w-16 !h-16">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473024.png"
                        alt="kids shoes image"
                        className="w-full sm:max-w-[108px] cursor-pointer h-auto rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide xl:!w-28 xl:!h-28 lg:!w-20 lg:!h-20 !w-16 !h-16">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473042.png"
                        alt="kids shoes image"
                        className="w-full sm:max-w-[108px] cursor-pointer h-auto rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide xl:!w-28 xl:!h-28 lg:!w-20 lg:!h-20 !w-16 !h-16">
                      <img
                        src="https://pagedone.io/asset/uploads/1700472988.png"
                        alt="kids shoes image"
                        className="w-full sm:max-w-[108px] cursor-pointer h-auto rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                    </div>
                    <div className="swiper-slide thumbs-slide xl:!w-28 xl:!h-28 lg:!w-20 lg:!h-20 !w-16 !h-16">
                      <img
                        src="https://pagedone.io/asset/uploads/1700473076.png"
                        alt="kids shoes image"
                        className="w-full sm:max-w-[108px] cursor-pointer h-auto rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="box xl:w-4/5 w-full">
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
          <div className="col-span-12 xl:col-span-4 lg:col-span-6 flex items-center">
            <div className="flex flex-col max-lg:justify-center max-lg:items-center max-xl:mx-auto w-full">
              <div className="box-1 w-full pb-8 border-b border-gray-100">
                <div className="flex items-center justify-between gap-1 mb-6">
                  <div className="text">
                    <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
                      Camper Kids
                    </h2>
                    <p className="font-medium text-base text-gray-500">
                      Lace-up Low-Top Sneakers
                    </p>
                  </div>
                  <button className="group shadow-sm shadow-transparent rounded-full transition-all duration-500 p-0.5"></button>
                </div>
                <div className="flex items-start w-full min-[400px]:items-center flex-col min-[400px]:flex-row">
                  <div className="flex items-center gap-3 pr-5 min-[400px]:border-r border-gray-200 mr-5">
                    <span className="font-semibold font-manrope text-2xl leading-9 text-gray-900">
                      $80.00
                    </span>
                    <h5 className="line-through font-normal text-base leading-7 text-gray-400">
                      $100.00
                    </h5>
                    <span className="font-semibold text-lg text-indigo-600">
                      20% off
                    </span>
                  </div>
                  <span className="flex items-center gap-1 font-medium text-base text-amber-400 py-1.5 px-2.5 border border-gray-200 rounded-md">
                    4.8
                  </span>
                </div>
              </div>
              <div className="box-2 my-8 w-full">
                <div className="acc-container">
                  <div className="acc border-b border-gray-200">
                    <div className="py-6 cursor-pointer acc-head flex items-center justify-between group">
                      <p className="font-medium text-base leading-7 text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                        Style Details
                      </p>
                    </div>
                  </div>
                  <div className="acc border-b border-gray-200">
                    <div className="py-6 cursor-pointer acc-head flex items-center justify-between group">
                      <p className="font-medium text-base leading-7 text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                        Size &amp; Fit
                      </p>
                    </div>
                  </div>
                  <div className="acc border-b border-gray-200">
                    <div className="py-6 cursor-pointer acc-head flex items-center justify-between group">
                      <p className="font-medium text-base leading-7 text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                        Delivery &amp; Free Returns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mb-3 min-[400px]:mb-6 w-full">
                <select
                  name="Size"
                  id="size"
                  className="appearance-none outline-0 select-none py-3 px-5 w-full border border-gray-300 rounded-xl font-semibold text-base leading-7 text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-300"
                >
                  <option value="Choose Your Size">Choose Your Size</option>
                  <option value="Choose Your Size">12</option>
                  <option value="Choose Your Size">14</option>
                  <option value="Choose Your Size">16</option>
                </select>
              </div>
              <div className="flex items-center flex-col min-[400px]:flex-row gap-3 w-full">
                <button className="rounded-xl py-4 text-center bg-indigo-50 text-indigo-600 text-lg font-semibold w-full min-[400px]:w-1/2 transition-all duration-500 hover:bg-indigo-100">
                  Add To Cart
                </button>
                <button className="rounded-xl py-4 text-center bg-indigo-600 text-white text-lg font-semibold w-full min-[400px]:w-1/2 transition-all duration-500 hover:bg-indigo-700">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
