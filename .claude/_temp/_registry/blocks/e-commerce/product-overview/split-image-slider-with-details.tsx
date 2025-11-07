export default function SplitImageSliderWithDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
            <div className="swiper main-slide-carousel swiper-container relative mb-6">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1700472379.png"
                      alt="Summer Travel Bag image"
                      className="max-lg:mx-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1711622397.png"
                      alt="Summer Travel Bag image"
                      className="max-lg:mx-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1711622408.png"
                      alt="Summer Travel Bag image"
                      className="max-lg:mx-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1711622419.png"
                      alt="Summer Travel Bag image"
                      className="max-lg:mx-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <img
                      src="https://pagedone.io/asset/uploads/1711622437.png"
                      alt="Summer Travel Bag image"
                      className="max-lg:mx-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-for-slider ">
              <div className="swiper-wrapper">
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700472379.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl transition-all duration-500 object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700472430.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700472416.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700472446.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700472467.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
              <div className="flex items-center justify-between gap-6 mb-6">
                <div className="text">
                  <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
                    Yellow Summer Travel Bag
                  </h2>
                  <p className="font-normal text-base text-gray-500">
                    ABS LUGGAGE
                  </p>
                </div>
                <button className="group transition-all duration-500 p-0.5"></button>
              </div>
              <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                <div className="flex items-center">
                  <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
                    $ 199.00{" "}
                  </h5>
                  <span className="ml-3 font-semibold text-lg text-indigo-600">
                    30% off
                  </span>
                </div>

                <button className="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
                  <span className="text-base font-medium text-white">4.8</span>
                </button>
              </div>
              <p className="font-medium text-lg text-gray-900 mb-2">Color</p>
              <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm">
                <div className="color-box group">
                  <div>
                    <img
                      src="https://pagedone.io/asset/uploads/1700472379.png"
                      alt="Summer Travel Bag image"
                      className="min-[400px]:h-[100px] aspect-square border-2 border-gray-100 rounded-xl transition-all duration-500 group-hover:border-indigo-600 object-cover"
                    />
                    <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-indigo-600 ">
                      Black
                    </p>
                  </div>
                </div>
                <div className="color-box group">
                  <div>
                    <img
                      src="https://pagedone.io/asset/uploads/1700472517.png"
                      alt="Summer Travel Bag image"
                      className="border-2 border-gray-100 rounded-xl transition-all duration-500 group-hover:border-indigo-600 object-cover"
                    />
                    <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-indigo-600 ">
                      Brown
                    </p>
                  </div>
                </div>
                <div className="color-box group">
                  <div>
                    <img
                      src="https://pagedone.io/asset/uploads/1700472529.png"
                      alt="Summer Travel Bag image"
                      className="border-2 border-gray-100 rounded-xl transition-all duration-500 group-hover:border-indigo-600 object-cover"
                    />
                    <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-indigo-600 ">
                      Beige
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-medium text-lg text-gray-900 mb-2">
                Size (KG)
              </p>
              <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-3 mb-3 min-[400px]:mb-8">
                <button className="border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                  Full Set
                </button>
                <button className="border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                  10 kg
                </button>
                <button className="border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                  25 kg
                </button>
                <button className="border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                  35 kg
                </button>
              </div>
              <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                <div className=" flex items-center justify-center border border-gray-400 rounded-full">
                  <button className="group py-[14px] px-3 w-full border-r border-gray-400 rounded-l-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300"></button>
                  <input
                    type="text"
                    className="font-semibold text-gray-900 text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder:text-gray-900 text-center hover:text-indigo-600 outline-0 hover:placeholder:text-indigo-600"
                  />
                  <button className="group py-[14px] px-3 w-full border-l border-gray-400 rounded-r-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300"></button>
                </div>
                <button className="group py-3 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-100">
                  Add to cart
                </button>
              </div>
              <button className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
