export default function SplitImageTestimonialTailwind() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center xl:gap-20">
          <div className="swiper mySwiper2 max-lg:w-full lg:w-1/3">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1696230617.png"
                  alt="image"
                  className="mx-auto h-[30rem] w-96 rounded-2xl object-cover lg:mx-0"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1696230660.png"
                  alt="image"
                  className="mx-auto h-[30rem] w-96 rounded-2xl object-cover lg:mx-0"
                />
              </div>
            </div>
          </div>
          <div className="swiper mySwiper mx-auto max-lg:w-full max-lg:max-w-xl lg:w-2/3">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="w-full max-w-xl lg:max-w-2xl xl:max-w-2xl">
                  <div className="mb-8 xl:mb-12">
                    <h2 className="font-manrope mb-4 text-center text-2xl leading-[3.25rem] font-bold text-gray-900 min-[585px]:text-4xl lg:text-left">
                      What our customers are saying{" "}
                    </h2>
                    <h2>
                      <p className="text-center text-lg text-gray-500 lg:text-left">
                        Serving over 50k+ customers every month{" "}
                      </p>
                    </h2>
                  </div>
                  <div className="relative mb-14 flex items-center justify-center gap-6 lg:justify-start xl:mb-20">
                    {/*Slider Controls*/}
                  </div>
                  <div className="rounded-2xl border border-solid border-gray-200 bg-gray-50 p-4 shadow-sm min-[585px]:p-8">
                    <div className="mb-6 flex items-center gap-2 text-amber-500 transition-all duration-500">
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </div>
                    <p className="mb-9 text-lg leading-8 text-gray-800 xl:mb-14">
                      As a busy professional, I don't have a lot of time to
                      manage my investments, but pagedone has made it possible
                      for me to stay on top of my portfolio and make informed
                      decisions quickly and easily.
                    </p>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <h6 className="font-medium text-gray-900">Harsh P.</h6>
                      </div>
                      <span className="ml-4 border-l border-solid border-gray-300 pl-4 text-sm font-medium text-indigo-600">
                        Product Designer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="w-full max-w-xl lg:max-w-2xl xl:max-w-2xl">
                  <div className="mb-8 xl:mb-12">
                    <h2 className="font-manrope mb-4 text-center text-2xl leading-[3.25rem] font-bold text-gray-900 min-[585px]:text-4xl lg:text-left">
                      What our customers are saying{" "}
                    </h2>
                    <h2>
                      <p className="text-center text-lg text-gray-500 lg:text-left">
                        Serving over 50k+ customers every month{" "}
                      </p>
                    </h2>
                  </div>
                  <div className="mb-14 flex items-center justify-center gap-6 lg:justify-start xl:mb-20"></div>
                  <div className="rounded-2xl border border-solid border-gray-200 bg-gray-50 p-4 shadow-sm min-[585px]:p-8">
                    <div className="mb-6 flex items-center gap-2 text-amber-500 transition-all duration-500">
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </div>
                    <p className="mb-9 text-lg leading-8 text-gray-800 xl:mb-14">
                      As a busy professional, I don't have a lot of time to
                      manage my investments, but pagedone has made it possible
                      for me to stay on top of my portfolio and make informed
                      decisions quickly and easily.
                    </p>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <h6 className="font-medium text-gray-900">
                          Rayna Aminof
                        </h6>
                      </div>
                      <span className="ml-4 border-l border-solid border-gray-300 pl-4 text-sm font-medium text-indigo-600">
                        Founder Sisyphus Ventures
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="swiper-pagination left-1/2 max-lg:-translate-x-1/2 lg:left-12 lg:-translate-y-2.5" />
                <button
                  id="slider-button-left"
                  className="swiper-button-prev group left-[15%] flex items-center justify-center transition-all duration-500 max-lg:-translate-x-[40%] md:top-36 md:left-[40%] lg:left-0"
                  data-carousel-prev
                >
                  {/* SVG removed */}
                </button>
                {/*Slider Pagination*/}
                <button
                  id="slider-button-right"
                  className="swiper-button-next group left-[85%] flex items-center justify-center rounded-full transition-all duration-500 max-lg:-translate-x-[60%] md:top-36 md:left-[60%] lg:left-24"
                  data-carousel-next
                >
                  {/* SVG removed */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
