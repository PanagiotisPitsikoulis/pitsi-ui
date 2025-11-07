export default function TailwindCssCustomerReviewSlider() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 xl:px-8">
        <div className="w-full xl:gap-24 lg:gap-16 gap-6 flex lg:flex-row flex-col items-center lg:pb-12 pb-10">
          <h2 className="w-full text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
            Discover how this platform is helping professionals manage.
          </h2>
          <p className="w-full text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
            Discover how Pagedone involves crafting a comprehensive approach
            focused on attracting new customers while ensuring the loyalty and
            satisfaction of existing ones.
          </p>
        </div>
        {/*Slider Indicator*/}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="xl:max-w-[1058px] lg:max-w-[880px] w-full mx-auto justify-start items-center xl:gap-8 gap-5 flex lg:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1721122635.png"
                />
                <div className="p-4 rounded-2xl border border-gray-200 flex-col justify-start lg:items-start items-center inline-flex">
                  <div className="flex-col justify-start lg:items-start items-center xl:gap-16 gap-9 flex">
                    <h3 className="text-gray-900 text-3xl font-semibold font-manrope leading-normal lg:text-start text-center">
                      As a busy professional, managing investments can be
                      challenging, but Pagedone simplifies this task by
                      providing me with the tools to stay on top of my portfolio{" "}
                    </h3>
                    <div className="flex-col justify-start lg:items-start items-center gap-1 flex">
                      <h4 className="text-gray-700 text-xl font-medium leading-8 lg:text-start text-center">
                        Isabella Martinez
                      </h4>
                      <h6 className="text-indigo-600 text-sm font-normal leading-normal lg:text-start text-center">
                        Product and Sales Manager
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="xl:max-w-[1058px] lg:max-w-[880px] w-full mx-auto justify-start items-center xl:gap-8 gap-5 flex lg:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1721122635.png"
                />
                <div className="p-4 rounded-2xl border border-gray-200 flex-col justify-start lg:items-start items-center inline-flex">
                  <div className="flex-col justify-start lg:items-start items-center xl:gap-16 gap-9 flex">
                    <h3 className="text-gray-900 text-3xl font-semibold font-manrope leading-normal lg:text-start text-center">
                      As a busy professional, managing investments can be
                      challenging, but Pagedone simplifies this task by
                      providing me with the tools to stay on top of my portfolio{" "}
                    </h3>
                    <div className="flex-col justify-start lg:items-start items-center gap-1 flex">
                      <h4 className="text-gray-700 text-xl font-medium leading-8 lg:text-start text-center">
                        Isabella Martinez
                      </h4>
                      <h6 className="text-indigo-600 text-sm font-normal leading-normal lg:text-start text-center">
                        Product and Sales Manager
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="xl:max-w-[1058px] lg:max-w-[880px] w-full mx-auto justify-start items-center xl:gap-8 gap-5 flex lg:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1721122635.png"
                />
                <div className="p-4 rounded-2xl border border-gray-200 flex-col justify-start lg:items-start items-center inline-flex">
                  <div className="flex-col justify-start lg:items-start items-center xl:gap-16 gap-9 flex">
                    <h3 className="text-gray-900 text-3xl font-semibold font-manrope leading-normal lg:text-start text-center">
                      As a busy professional, managing investments can be
                      challenging, but Pagedone simplifies this task by
                      providing me with the tools to stay on top of my portfolio{" "}
                    </h3>
                    <div className="flex-col justify-start lg:items-start items-center gap-1 flex">
                      <h4 className="text-gray-700 text-xl font-medium leading-8 lg:text-start text-center">
                        Isabella Martinez
                      </h4>
                      <h6 className="text-indigo-600 text-sm font-normal leading-normal lg:text-start text-center">
                        Product and Sales Manager
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            id="slider-button-left"
            className="swiper-button-prev group hidden w-11 h-11 mr-8 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out justify-center items-center transition-all duration-500 rounded-full lg:flex"
            data-carousel-prev
          >
            {/* SVG removed */}
          </button>
          <button
            id="slider-button-right"
            className="swiper-button-next group hidden w-11 h-11 ml-8 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out justify-center items-center transition-all duration-500 rounded-full lg:flex"
            data-carousel-next
          >
            {/* SVG removed */}
          </button>
        </div>
      </div>
    </section>
  );
}
