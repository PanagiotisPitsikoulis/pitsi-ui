export default function ThreeColumnGridWithSliderAndDetails() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-medium text-lg text-indigo-600 mb-5 ">
          Travel &nbsp; / &nbsp; Bags
        </p>
        <div className="flex xl:flex-nowrap flex-wrap justify-between gap-8">
          <div className="flex justify-between flex-col w-full xl:w-1/3 lg:w-2/5">
            <div className="box-1">
              <div className="flex items-center justify-between max-[400px]:gap-0 gap-3 mb-6 max-[400px]:flex-col">
                <h2 className="font-manrope font-bold text-2xl sm:text-3xl leading-10 text-gray-900 ">
                  White Rally Running sport shoes
                </h2>
                <button className="group transition-all duration-500 p-0.5"></button>
              </div>
              <p className="text-base leading-7 font-normal text-gray-500 max-lg:mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industry.
              </p>
            </div>
            <div className="box-2 ml-0 ">
              <div className="flex py-6 items-center justify-between w-full border-y border-gray-100">
                <div className="flex items-center gap-2">
                  <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900">
                    $80.00
                  </h6>
                  <p className="text-base leading-8 font-normal text-gray-400 line-through">
                    $100.00
                  </p>
                </div>
                <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                  20% off
                </h6>
              </div>
              <div className="flex items-center justify-between py-6 border-b border-gray-100">
                <div className="flex items-center gap-2"></div>
                <h6 className="font-medium text-lg leading-8 text-gray-500">
                  1624 review
                </h6>
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 w-full lg:w-2/5">
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
            <div className="nav-for-slider ">
              <div className="swiper-wrapper">
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700473407.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl transition-all duration-500 object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700473407.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700473407.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1700473407.png"
                    alt="Summer Travel Bag image"
                    className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 w-full  ">
            <div className="pb-8 border-b border-gray-100">
              <p className="font-medium text-lg leading-8 text-gray-900 mb-4  ">
                Bag Color
              </p>
              <div className="flex items-center justify-start gap-3 lg:gap-5 relative  ">
                <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-emerald-500"></button>
                <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-amber-400"></button>
                <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-red-500"></button>
                <button className="p-2.5 border border-gray-200 rounded-full  transition-all duration-300 hover:border-blue-400"></button>
                <button className="p-2.5 border border-gray-200 rounded-full  transition-all duration-300 hover:border-black"></button>
              </div>
            </div>
            <div className="py-6 border-b border-gray-100 mb-8">
              <p className="font-medium text-lg leading-8 text-gray-900 mb-4 ">
                Bag Size
              </p>
              <div className="flex items-center gap-3 lg:gap-5 relative ">
                <button className="h-[50px] flex items-center justify-center border border-gray-200 bg-white aspect-square font-semibold text-lg text-gray-900 rounded-full shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:border-gray-300 hover:bg-gray-50">
                  16
                </button>
                <button className="h-[50px] flex items-center justify-center border border-gray-200 bg-white aspect-square font-semibold text-lg text-gray-900 rounded-full shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:border-gray-300 hover:bg-gray-50">
                  18
                </button>
                <button className="h-[50px] flex items-center justify-center border border-gray-200 bg-white aspect-square font-semibold text-lg text-gray-900 rounded-full shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:border-gray-300 hover:bg-gray-50">
                  20
                </button>
                <button className="h-[50px] flex items-center justify-center border border-gray-200 bg-white aspect-square font-semibold text-lg text-gray-900 rounded-full shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:border-gray-300 hover:bg-gray-50">
                  24
                </button>
                <button className="h-[50px] flex items-center justify-center border border-gray-200 bg-white aspect-square font-semibold text-lg text-gray-900 rounded-full shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:border-gray-300 hover:bg-gray-50">
                  28
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between w-full mb-8">
              <h5 className="font-manrope font-bold text-3xl leading-10 text-indigo-600">
                $220
              </h5>
              <div className="flex items-center justify-center w-full max-w-[197px] border border-gray-400 rounded-full">
                <button className="group py-[14px] px-5 border-r border-gray-400 rounded-l-full h-full bg-white shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:border-gray-300 hover:bg-gray-50"></button>
                <input
                  type="text"
                  className="font-semibold text-gray-900 text-lg py-3 px-6 w-full max-w-[118px] h-full bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50 hover:text-indigo-600 outline-0 hover:placeholder:text-gray-900"
                />
                <button className="group py-[14px] px-5 border-l border-gray-400 rounded-r-full h-full bg-white shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:border-gray-300 hover:bg-gray-50"></button>
              </div>
            </div>
            <button className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
