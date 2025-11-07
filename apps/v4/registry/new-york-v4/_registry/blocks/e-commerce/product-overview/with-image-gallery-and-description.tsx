export default function WithImageGalleryAndDescription() {
  return (
    <section className="relative py-10 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="pro-detail order-last flex w-full flex-col justify-center max-lg:mx-auto max-lg:max-w-[608px] lg:order-none">
            <p className="mb-4 text-lg font-medium text-indigo-600">
              Travel &nbsp; / &nbsp; Menswear
            </p>
            <h2 className="font-manrope mb-2 text-3xl leading-10 font-bold text-gray-900">
              Yellow Summer Travel Bag
            </h2>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
              <h6 className="font-manrope mr-5 border-gray-200 pr-5 text-2xl leading-9 font-semibold text-gray-900 sm:border-r">
                $220
              </h6>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1"></div>
                <span className="pl-2 text-sm leading-7 font-normal text-gray-500">
                  1624 review
                </span>
              </div>
            </div>
            <p className="mb-8 text-base font-normal text-gray-500">
              the perfect companion for your next adventure! Embrace the spirit
              of sunny escapades with this vibrant and versatile bag designed to
              cater to your travel needs while adding a pop of color to your
              journey.
            </p>
            <div className="block w-full">
              <p className="mb-4 text-lg leading-8 font-medium text-gray-900">
                Bag Color
              </p>
              <div className="text">
                <div className="relative mb-6 flex items-center justify-start gap-3 md:gap-6">
                  <button
                    data-ui="checked active"
                    className=":border-emerald-500 rounded-full border border-gray-200 p-2.5 transition-all duration-300 hover:border-emerald-500"
                  ></button>
                  <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 focus-within:border-amber-400 hover:border-amber-400"></button>
                  <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 focus-within:border-red-500 hover:border-red-500"></button>
                  <button className="rounded-full border border-gray-200 p-2.5 transition-all duration-300 focus-within:border-blue-400 hover:border-blue-400"></button>
                </div>
                <div className="mb-6 block w-full">
                  <p className="mb-4 text-lg leading-8 font-medium text-gray-900">
                    Bag size
                  </p>
                  <div className="grid grid-cols-2 gap-3 min-[400px]:grid-cols-3">
                    <button className="w-full rounded-full border border-gray-200 px-1.5 py-2 text-lg font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300 sm:px-6">
                      56 cm (S)
                    </button>
                    <button className="w-full rounded-full border border-gray-200 px-1.5 py-2 text-lg font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300 sm:px-6">
                      67 cm (M)
                    </button>
                    <button className="w-full rounded-full border border-gray-200 px-1.5 py-2 text-lg font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300 sm:px-6">
                      77 cm (L)
                    </button>
                  </div>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex w-full items-center justify-center">
                    <button className="group rounded-l-full border border-gray-400 px-6 py-4 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-300"></button>
                    <input
                      type="text"
                      className="w-full border-y border-gray-400 bg-transparent px-6 py-[13px] text-center text-lg font-semibold text-gray-900 outline-0 placeholder:text-gray-900 focus-within:bg-gray-50 hover:bg-gray-50 lg:max-w-[118px]"
                    />
                    <button className="group rounded-r-full border border-gray-400 px-6 py-4 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-300"></button>
                  </div>
                  <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-indigo-50 px-5 py-4 text-lg font-semibold text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                    Add to cart
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="group rounded-full bg-indigo-50 p-4 transition-all duration-500 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300"></button>
                  <button className="flex w-full items-center justify-center rounded-[100px] bg-indigo-600 px-5 py-4 text-center text-lg font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="swiper product-prev mb-6">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700471851.png"
                    alt="Yellow Travel Bag image"
                    className="mx-auto object-cover"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1711514857.png"
                    alt="Yellow Travel Bag image"
                    className="mx-auto object-cover"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1711514875.png"
                    alt="Yellow Travel Bag image"
                    className="mx-auto object-cover"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1711514892.png"
                    alt="Yellow Travel Bag image"
                    className="mx-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="swiper product-thumb mx-auto max-w-[608px]">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700471871.png"
                    alt="Travel Bag image"
                    className="slide:border-indigo-600 cursor-pointer border-2 border-gray-50 object-cover transition-all duration-500 hover:border-indigo-600"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1711514930.png"
                    alt="Travel Bag image"
                    className="slide:border-indigo-600 cursor-pointer border-2 border-gray-50 object-cover transition-all duration-500 hover:border-indigo-600"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700471908.png"
                    alt="Travel Bag image"
                    className="slide:border-indigo-600 cursor-pointer border-2 border-gray-50 object-cover transition-all duration-500 hover:border-indigo-600"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700471925.png"
                    alt="Travel Bag image"
                    className="slide:border-indigo-600 cursor-pointer border-2 border-gray-50 object-cover transition-all duration-500 hover:border-indigo-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
