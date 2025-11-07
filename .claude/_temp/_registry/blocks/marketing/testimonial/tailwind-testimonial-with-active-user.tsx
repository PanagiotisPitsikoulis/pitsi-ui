export default function TailwindTestimonialWithActiveUser() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="w-full flex-col justify-start items-center gap-2.5 flex lg:pb-12 pb-8">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <div className="px-2.5 py-0.5 bg-emerald-50 rounded-full justify-start items-center gap-1.5 flex">
              <span className="text-center text-emerald-600 text-xs font-medium leading-normal">
                Testimonial
              </span>
            </div>
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Customer Testimonials
            </h2>
          </div>
          <p className="lg:max-w-3xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
            Discover what our customers have to say about their experiences.
            Their testimonials highlight the positive impact our solutions have
            had on their success.
          </p>
        </div>
        {/*Slider Wrapper*/}
        <div className="mx-auto w-auto relative overflow-hidden h-max">
          <div className="swiper-container gallery-top">
            <button
              id="slider-button-left"
              className="swiper-button-prev bottom-12  lg:left-auto left-[30%] md:flex hidden items-center justify-center border border-gray-300 group transition-all duration-700 ease-in-out w-[34px] h-[34px] rounded-md shadow-xs group hover:border-gray-500"
            >
              {/* SVG removed */}
            </button>
            <div className="swiper-wrapper w-max mx-auto">
              <div className="swiper-slide max-w-full grid md:gap-24 sm:gap-32 gap-40">
                <div className="w-full flex-col justify-start items-start flex relative">
                  <span className="text-center text-gray-200 text-9xl font-extrabold font-manrope leading-[156px]">
                    “
                  </span>
                  <div className="w-full flex-col justify-start items-center gap-8 flex absolute left-0 top-[74px]">
                    <h5 className="max-w-7xl text-center text-gray-900 text-lg font-normal leading-relaxed">
                      “ We've experienced outstanding results since implementing
                      their services. Our productivity has soared, and the
                      intuitive tools have made our work much smoother. ”
                    </h5>
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="w-full justify-between items-center gap-2.5 inline-flex">
                  <div className="swiper-boxes lg:md:w-[340px] w-full flex-col justify-start items-center gap-2.5 md:flex hidden">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695070.png"
                    />
                    <div className="flex-col justify-start items-center gap-1 flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                        Henry Clark
                      </h5>
                      <div className="justify-center items-center gap-3 inline-flex">
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          @henry._
                        </h6>
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box lg:md:w-[340px] w-full flex-col justify-start items-center gap-2.5 inline-flex">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695085.png"
                    />
                    <div className="flex-col justify-start items-center gap-1 flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                        Emily Sharma
                      </h5>
                      <div className="justify-center items-center gap-3 inline-flex">
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          @emily_01
                        </h6>
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-boxes lg:md:w-[340px] w-full flex-col justify-start items-center gap-2.5 md:flex hidden">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695028.png"
                    />
                    <div className="flex-col justify-start items-center gap-1 flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                        Jack Peterson
                      </h5>
                      <div className="justify-center items-center gap-3 inline-flex">
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          @.__.jack12
                        </h6>
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide max-w-full grid md:gap-24 sm:gap-32 gap-40">
                <div className="w-full flex-col justify-start items-start flex relative">
                  <span className="text-center text-gray-200 text-9xl font-extrabold font-manrope leading-[156px]">
                    “
                  </span>
                  <div className="w-full flex-col justify-start items-center gap-8 flex absolute left-0 top-[74px]">
                    <h5 className="max-w-7xl text-center text-gray-900 text-lg font-normal leading-relaxed">
                      “ We've experienced outstanding results since implementing
                      their services. Our productivity has soared, and intuitive
                      tools have work much smoother. ”
                    </h5>
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="w-full justify-between items-center gap-2.5 inline-flex">
                  <div className="swiper-boxes lg:md:w-[340px] w-full flex-col justify-start items-center gap-2.5 md:flex hidden">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695085.png"
                    />
                    <div className="flex-col justify-start items-center gap-1 flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                        Emily Sharma
                      </h5>
                      <div className="justify-center items-center gap-3 inline-flex">
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          @emily_01
                        </h6>
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box lg:md:w-[340px] w-full flex-col justify-start items-center gap-2.5 inline-flex">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695028.png"
                    />
                    <div className="flex-col justify-start items-center gap-1 flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                        Jack Peterson
                      </h5>
                      <div className="justify-center items-center gap-3 inline-flex">
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          @.__.jack12
                        </h6>
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-boxes lg:md:w-[340px] w-full flex-col justify-start items-center gap-2.5 md:flex hidden">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695070.png"
                    />
                    <div className="flex-col justify-start items-center gap-1 flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                        Henry Clark
                      </h5>
                      <div className="justify-center items-center gap-3 inline-flex">
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          @henry._
                        </h6>
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide max-w-full grid md:gap-24 sm:gap-32 gap-40">
                <div className="w-full flex-col justify-start items-start flex relative">
                  <span className="text-center text-gray-200 text-9xl font-extrabold font-manrope leading-[156px]">
                    “
                  </span>
                  <div className="w-full flex-col justify-start items-center gap-8 flex absolute left-0 top-[74px]">
                    <h5 className="max-w-7xl text-center text-gray-900 text-lg font-normal leading-relaxed">
                      “ We've experienced outstanding results since implementing
                      their services. Our productivity has soared, and the
                      intuitive tools have made our work much smoother.Also
                      tools made our work much smoother”
                    </h5>
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="w-full justify-between items-center gap-2.5 inline-flex">
                  <div className="swiper-boxes lg:md:w-[340px] w-full flex-col justify-start items-center gap-2.5 md:flex hidden">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695028.png"
                    />
                    <div className="flex-col justify-start items-center gap-1 flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                        Jack Peterson
                      </h5>
                      <div className="justify-center items-center gap-3 inline-flex">
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          @.__.jack12
                        </h6>
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-box lg:md:w-[340px] w-full flex-col justify-start items-center gap-2.5 inline-flex">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695070.png"
                    />
                    <div className="flex-col justify-start items-center gap-1 flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                        Henry Clark
                      </h5>
                      <div className="justify-center items-center gap-3 inline-flex">
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          @henry._
                        </h6>
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          Co-fonder
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-boxes lg:md:w-[340px] w-full flex-col justify-start items-center gap-2.5 md:flex hidden">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720695085.png"
                    />
                    <div className="flex-col justify-start items-center gap-1 flex">
                      <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                        Emily Sharma
                      </h5>
                      <div className="justify-center items-center gap-3 inline-flex">
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
                          @emily_01
                        </h6>
                        <h6 className="text-center text-gray-500 text-sm font-normal leading-normal">
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
              className="swiper-button-next bottom-12  lg:right-0 right-[30%] md:flex hidden items-center justify-center border border-gray-300 group transition-all duration-700 ease-in-out w-[34px] h-[34px] rounded-md shadow-xs group hover:border-gray-500"
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
