export default function TailwindCssCustomerReviewSlider() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 xl:px-8">
        <div className="flex w-full flex-col items-center gap-6 pb-10 lg:flex-row lg:gap-16 lg:pb-12 xl:gap-24">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
            Discover how this platform is helping professionals manage.
          </h2>
          <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
            Discover how Pagedone involves crafting a comprehensive approach
            focused on attracting new customers while ensuring the loyalty and
            satisfaction of existing ones.
          </p>
        </div>
        {/*Slider Indicator*/}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="mx-auto flex w-full flex-col items-center justify-start gap-5 lg:max-w-[880px] lg:flex-row xl:max-w-[1058px] xl:gap-8">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1721122635.png"
                />
                <div className="inline-flex flex-col items-center justify-start rounded-2xl border border-gray-200 p-4 lg:items-start">
                  <div className="flex flex-col items-center justify-start gap-9 lg:items-start xl:gap-16">
                    <h3 className="font-manrope text-center text-3xl leading-normal font-semibold text-gray-900 lg:text-start">
                      As a busy professional, managing investments can be
                      challenging, but Pagedone simplifies this task by
                      providing me with the tools to stay on top of my
                      portfolio{" "}
                    </h3>
                    <div className="flex flex-col items-center justify-start gap-1 lg:items-start">
                      <h4 className="text-center text-xl leading-8 font-medium text-gray-700 lg:text-start">
                        Isabella Martinez
                      </h4>
                      <h6 className="text-center text-sm leading-normal font-normal text-indigo-600 lg:text-start">
                        Product and Sales Manager
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="mx-auto flex w-full flex-col items-center justify-start gap-5 lg:max-w-[880px] lg:flex-row xl:max-w-[1058px] xl:gap-8">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1721122635.png"
                />
                <div className="inline-flex flex-col items-center justify-start rounded-2xl border border-gray-200 p-4 lg:items-start">
                  <div className="flex flex-col items-center justify-start gap-9 lg:items-start xl:gap-16">
                    <h3 className="font-manrope text-center text-3xl leading-normal font-semibold text-gray-900 lg:text-start">
                      As a busy professional, managing investments can be
                      challenging, but Pagedone simplifies this task by
                      providing me with the tools to stay on top of my
                      portfolio{" "}
                    </h3>
                    <div className="flex flex-col items-center justify-start gap-1 lg:items-start">
                      <h4 className="text-center text-xl leading-8 font-medium text-gray-700 lg:text-start">
                        Isabella Martinez
                      </h4>
                      <h6 className="text-center text-sm leading-normal font-normal text-indigo-600 lg:text-start">
                        Product and Sales Manager
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="mx-auto flex w-full flex-col items-center justify-start gap-5 lg:max-w-[880px] lg:flex-row xl:max-w-[1058px] xl:gap-8">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1721122635.png"
                />
                <div className="inline-flex flex-col items-center justify-start rounded-2xl border border-gray-200 p-4 lg:items-start">
                  <div className="flex flex-col items-center justify-start gap-9 lg:items-start xl:gap-16">
                    <h3 className="font-manrope text-center text-3xl leading-normal font-semibold text-gray-900 lg:text-start">
                      As a busy professional, managing investments can be
                      challenging, but Pagedone simplifies this task by
                      providing me with the tools to stay on top of my
                      portfolio{" "}
                    </h3>
                    <div className="flex flex-col items-center justify-start gap-1 lg:items-start">
                      <h4 className="text-center text-xl leading-8 font-medium text-gray-700 lg:text-start">
                        Isabella Martinez
                      </h4>
                      <h6 className="text-center text-sm leading-normal font-normal text-indigo-600 lg:text-start">
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
            className="swiper-button-prev group mr-8 hidden h-11 w-11 items-center justify-center rounded-full bg-indigo-600 transition-all duration-500 duration-700 ease-in-out hover:bg-indigo-800 lg:flex"
            data-carousel-prev
          >
            {/* SVG removed */}
          </button>
          <button
            id="slider-button-right"
            className="swiper-button-next group ml-8 hidden h-11 w-11 items-center justify-center rounded-full bg-indigo-600 transition-all duration-500 duration-700 ease-in-out hover:bg-indigo-800 lg:flex"
            data-carousel-next
          >
            {/* SVG removed */}
          </button>
        </div>
      </div>
    </section>
  )
}
