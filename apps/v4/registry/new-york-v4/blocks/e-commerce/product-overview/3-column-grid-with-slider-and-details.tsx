export default function ThreeColumnGridWithSliderAndDetails() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-lg font-medium text-indigo-600">
          Travel &nbsp; / &nbsp; Bags
        </p>
        <div className="flex flex-wrap justify-between gap-8 xl:flex-nowrap">
          <div className="flex w-full flex-col justify-between lg:w-2/5 xl:w-1/3">
            <div className="box-1">
              <div className="mb-6 flex items-center justify-between gap-3 max-[400px]:flex-col max-[400px]:gap-0">
                <h2 className="font-manrope text-2xl leading-10 font-bold text-gray-900 sm:text-3xl">
                  White Rally Running sport shoes
                </h2>
                <button className="group p-0.5 transition-all duration-500"></button>
              </div>
              <p className="text-base leading-7 font-normal text-gray-500 max-lg:mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industry.
              </p>
            </div>
            <div className="box-2 ml-0">
              <div className="flex w-full items-center justify-between border-y border-gray-100 py-6">
                <div className="flex items-center gap-2">
                  <h6 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                    $80.00
                  </h6>
                  <p className="text-base leading-8 font-normal text-gray-400 line-through">
                    $100.00
                  </p>
                </div>
                <h6 className="text-xl leading-8 font-semibold text-indigo-600">
                  20% off
                </h6>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 py-6">
                <div className="flex items-center gap-2"></div>
                <h6 className="text-lg leading-8 font-medium text-gray-500">
                  1624 review
                </h6>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 xl:w-1/3">
            <div className="swiper main-slide-carousel swiper-container relative mb-6">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1700473391.png"
                      alt="Summer Travel Bag image"
                      className="mx-auto rounded-3xl object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1700473391.png"
                      alt="Summer Travel Bag image"
                      className="mx-auto rounded-3xl object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1700473391.png"
                      alt="Summer Travel Bag image"
                      className="mx-auto rounded-3xl object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1700473391.png"
                      alt="Summer Travel Bag image"
                      className="mx-auto rounded-3xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-for-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700473407.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl object-cover transition-all duration-500"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700473407.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl border object-cover transition-all duration-500 hover:border-indigo-600"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700473407.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl border object-cover transition-all duration-500 hover:border-indigo-600"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700473407.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl border object-cover transition-all duration-500 hover:border-indigo-600"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/3">
            <div className="border-b border-gray-100 pb-8">
              <p className="mb-4 text-lg leading-8 font-medium text-gray-900">
                Bag Color
              </p>
              <div className="relative flex items-center justify-start gap-3 lg:gap-5">
                <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 hover:border-emerald-500"></button>
                <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 hover:border-amber-400"></button>
                <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 hover:border-red-500"></button>
                <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 hover:border-blue-400"></button>
                <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 hover:border-black"></button>
              </div>
            </div>
            <div className="mb-8 border-b border-gray-100 py-6">
              <p className="mb-4 text-lg leading-8 font-medium text-gray-900">
                Bag Size
              </p>
              <div className="relative flex items-center gap-3 lg:gap-5">
                <button className="flex aspect-square h-[50px] items-center justify-center rounded-full border border-gray-200 bg-white text-lg font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300">
                  16
                </button>
                <button className="flex aspect-square h-[50px] items-center justify-center rounded-full border border-gray-200 bg-white text-lg font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300">
                  18
                </button>
                <button className="flex aspect-square h-[50px] items-center justify-center rounded-full border border-gray-200 bg-white text-lg font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300">
                  20
                </button>
                <button className="flex aspect-square h-[50px] items-center justify-center rounded-full border border-gray-200 bg-white text-lg font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300">
                  24
                </button>
                <button className="flex aspect-square h-[50px] items-center justify-center rounded-full border border-gray-200 bg-white text-lg font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300">
                  28
                </button>
              </div>
            </div>
            <div className="mb-8 flex w-full items-center justify-between">
              <h5 className="font-manrope text-3xl leading-10 font-bold text-indigo-600">
                $220
              </h5>
              <div className="flex w-full max-w-[197px] items-center justify-center rounded-full border border-gray-400">
                <button className="group h-full rounded-l-full border-r border-gray-400 bg-white px-5 py-[14px] shadow-sm shadow-transparent transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300"></button>
                <input
                  type="text"
                  className="h-full w-full max-w-[118px] bg-transparent px-6 py-3 text-center text-lg font-semibold text-gray-900 outline-0 placeholder:text-gray-900 hover:bg-gray-50 hover:text-indigo-600 hover:placeholder:text-gray-900"
                />
                <button className="group h-full rounded-r-full border-l border-gray-400 bg-white px-5 py-[14px] shadow-sm shadow-transparent transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300"></button>
              </div>
            </div>
            <button className="flex w-full items-center justify-center rounded-[100px] bg-indigo-600 px-5 py-4 text-center text-lg font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
