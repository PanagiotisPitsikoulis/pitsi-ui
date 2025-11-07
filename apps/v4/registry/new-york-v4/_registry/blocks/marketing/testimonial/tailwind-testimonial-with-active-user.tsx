export default function TailwindTestimonialWithActiveUser() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-start gap-2.5 pb-8 lg:pb-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <div className="flex items-center justify-start gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5">
              <span className="text-center text-xs leading-normal font-medium text-emerald-600">
                Testimonial
              </span>
            </div>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Customer Testimonials
            </h2>
          </div>
          <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-3xl">
            Discover what our customers have to say about their experiences.
            Their testimonials highlight the positive impact our solutions have
            had on their success.
          </p>
        </div>
        {/*Slider Wrapper*/}
        <div className="relative mx-auto h-max w-auto overflow-hidden">
          <div className="swiper-container gallery-top">
            <button
              id="slider-button-left"
              className="swiper-button-prev group group bottom-12 left-[30%] hidden h-[34px] w-[34px] items-center justify-center rounded-md border border-gray-300 shadow-xs transition-all duration-700 ease-in-out hover:border-gray-500 md:flex lg:left-auto"
            >
              {/* SVG removed */}
            </button>
            <div className="swiper-wrapper mx-auto w-max">
              <div className="swiper-slide grid max-w-full gap-40 sm:gap-32 md:gap-24">
                <div className="relative flex w-full flex-col items-start justify-start">
                  <span className="font-manrope text-center text-9xl leading-[156px] font-extrabold text-gray-200">
                    “
                  </span>
                  <div className="absolute top-[74px] left-0 flex w-full flex-col items-center justify-start gap-8">
                    <h5 className="max-w-7xl text-center text-lg leading-relaxed font-normal text-gray-900">
                      “ We've experienced outstanding results since implementing
                      their services. Our productivity has soared, and the
                      intuitive tools have made our work much smoother. ”
                    </h5>
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="inline-flex w-full items-center justify-between gap-2.5">
                  <div className="swiper-boxes hidden w-full flex-col items-center justify-start gap-2.5 md:flex lg:md:w-[340px]">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695070.png"
                    />
                    <div className="flex flex-col items-center justify-start gap-1">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                        Henry Clark
                      </h5>
                      <div className="inline-flex items-center justify-center gap-3">
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          @henry._
                        </h6>
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box inline-flex w-full flex-col items-center justify-start gap-2.5 lg:md:w-[340px]">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695085.png"
                    />
                    <div className="flex flex-col items-center justify-start gap-1">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                        Emily Sharma
                      </h5>
                      <div className="inline-flex items-center justify-center gap-3">
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          @emily_01
                        </h6>
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-boxes hidden w-full flex-col items-center justify-start gap-2.5 md:flex lg:md:w-[340px]">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695028.png"
                    />
                    <div className="flex flex-col items-center justify-start gap-1">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                        Jack Peterson
                      </h5>
                      <div className="inline-flex items-center justify-center gap-3">
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          @.__.jack12
                        </h6>
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide grid max-w-full gap-40 sm:gap-32 md:gap-24">
                <div className="relative flex w-full flex-col items-start justify-start">
                  <span className="font-manrope text-center text-9xl leading-[156px] font-extrabold text-gray-200">
                    “
                  </span>
                  <div className="absolute top-[74px] left-0 flex w-full flex-col items-center justify-start gap-8">
                    <h5 className="max-w-7xl text-center text-lg leading-relaxed font-normal text-gray-900">
                      “ We've experienced outstanding results since implementing
                      their services. Our productivity has soared, and intuitive
                      tools have work much smoother. ”
                    </h5>
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="inline-flex w-full items-center justify-between gap-2.5">
                  <div className="swiper-boxes hidden w-full flex-col items-center justify-start gap-2.5 md:flex lg:md:w-[340px]">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695085.png"
                    />
                    <div className="flex flex-col items-center justify-start gap-1">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                        Emily Sharma
                      </h5>
                      <div className="inline-flex items-center justify-center gap-3">
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          @emily_01
                        </h6>
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box inline-flex w-full flex-col items-center justify-start gap-2.5 lg:md:w-[340px]">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695028.png"
                    />
                    <div className="flex flex-col items-center justify-start gap-1">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                        Jack Peterson
                      </h5>
                      <div className="inline-flex items-center justify-center gap-3">
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          @.__.jack12
                        </h6>
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-boxes hidden w-full flex-col items-center justify-start gap-2.5 md:flex lg:md:w-[340px]">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695070.png"
                    />
                    <div className="flex flex-col items-center justify-start gap-1">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                        Henry Clark
                      </h5>
                      <div className="inline-flex items-center justify-center gap-3">
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          @henry._
                        </h6>
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide grid max-w-full gap-40 sm:gap-32 md:gap-24">
                <div className="relative flex w-full flex-col items-start justify-start">
                  <span className="font-manrope text-center text-9xl leading-[156px] font-extrabold text-gray-200">
                    “
                  </span>
                  <div className="absolute top-[74px] left-0 flex w-full flex-col items-center justify-start gap-8">
                    <h5 className="max-w-7xl text-center text-lg leading-relaxed font-normal text-gray-900">
                      “ We've experienced outstanding results since implementing
                      their services. Our productivity has soared, and the
                      intuitive tools have made our work much smoother.Also
                      tools made our work much smoother”
                    </h5>
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="inline-flex w-full items-center justify-between gap-2.5">
                  <div className="swiper-boxes hidden w-full flex-col items-center justify-start gap-2.5 md:flex lg:md:w-[340px]">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695028.png"
                    />
                    <div className="flex flex-col items-center justify-start gap-1">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                        Jack Peterson
                      </h5>
                      <div className="inline-flex items-center justify-center gap-3">
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          @.__.jack12
                        </h6>
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box inline-flex w-full flex-col items-center justify-start gap-2.5 lg:md:w-[340px]">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695070.png"
                    />
                    <div className="flex flex-col items-center justify-start gap-1">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                        Henry Clark
                      </h5>
                      <div className="inline-flex items-center justify-center gap-3">
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          @henry._
                        </h6>
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-boxes hidden w-full flex-col items-center justify-start gap-2.5 md:flex lg:md:w-[340px]">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695085.png"
                    />
                    <div className="flex flex-col items-center justify-start gap-1">
                      <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                        Emily Sharma
                      </h5>
                      <div className="inline-flex items-center justify-center gap-3">
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          @emily_01
                        </h6>
                        <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="slider-button-right"
              className="swiper-button-next group group right-[30%] bottom-12 hidden h-[34px] w-[34px] items-center justify-center rounded-md border border-gray-300 shadow-xs transition-all duration-700 ease-in-out hover:border-gray-500 md:flex lg:right-0"
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
