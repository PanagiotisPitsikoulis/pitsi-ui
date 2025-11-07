export default function SplitImageTestimonialTailwind() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14 xl:gap-20 lg:flex-row lg:items-center ">
          <div className="swiper mySwiper2 max-lg:w-full lg:w-1/3">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1696230617.png"
                  alt="image"
                  className="w-96 h-[30rem] mx-auto rounded-2xl lg:mx-0 object-cover"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1696230660.png"
                  alt="image"
                  className="w-96 h-[30rem] rounded-2xl mx-auto lg:mx-0 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="swiper mySwiper max-lg:w-full max-lg:max-w-xl mx-auto lg:w-2/3">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="w-full max-w-xl lg:max-w-2xl xl:max-w-2xl">
                  <div className="mb-8 xl:mb-12">
                    <h2 className="font-manrope text-2xl min-[585px]:text-4xl leading-[3.25rem] text-gray-900 font-bold mb-4 text-center lg:text-left">
                      What our customers are saying{" "}
                    </h2>
                    <h2>
                      <p className="text-lg text-gray-500 text-center lg:text-left">
                        Serving over 50k+ customers every month{" "}
                      </p>
                    </h2>
                  </div>
                  <div className="mb-14 xl:mb-20 flex items-center relative gap-6 justify-center lg:justify-start">
                    {/*Slider Controls*/}
                  </div>
                  <div className="bg-gray-50 shadow-sm rounded-2xl p-4 min-[585px]:p-8 border border-solid border-gray-200 ">
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500 mb-6 ">
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </div>
                    <p className="mb-9 xl:mb-14 text-lg leading-8 text-gray-800">
                      As a busy professional, I don't have a lot of time to
                      manage my investments, but pagedone has made it possible
                      for me to stay on top of my portfolio and make informed
                      decisions quickly and easily.
                    </p>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <h6 className="font-medium text-gray-900">Harsh P.</h6>
                      </div>
                      <span className="text-sm font-medium text-indigo-600 ml-4 pl-4 border-l border-solid border-gray-300">
                        Product Designer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="w-full max-w-xl lg:max-w-2xl xl:max-w-2xl">
                  <div className="mb-8 xl:mb-12">
                    <h2 className="font-manrope text-2xl min-[585px]:text-4xl leading-[3.25rem] text-gray-900 font-bold mb-4 text-center lg:text-left">
                      What our customers are saying{" "}
                    </h2>
                    <h2>
                      <p className="text-lg text-gray-500 text-center lg:text-left">
                        Serving over 50k+ customers every month{" "}
                      </p>
                    </h2>
                  </div>
                  <div className="mb-14 xl:mb-20 flex items-center gap-6 justify-center lg:justify-start"></div>
                  <div className="bg-gray-50 shadow-sm rounded-2xl p-4 min-[585px]:p-8 border border-solid border-gray-200 ">
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500 mb-6 ">
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </div>
                    <p className="mb-9 xl:mb-14 text-lg leading-8 text-gray-800">
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
                      <span className="text-sm font-medium text-indigo-600 ml-4 pl-4 border-l border-solid border-gray-300">
                        Founder Sisyphus Ventures
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="swiper-pagination left-1/2 lg:left-12 max-lg:-translate-x-1/2 lg:-translate-y-2.5" />
                <button
                  id="slider-button-left"
                  className="swiper-button-prev left-[15%] md:top-36 md:left-[40%] max-lg:-translate-x-[40%] lg:left-0 group flex justify-center items-center transition-all duration-500 "
                  data-carousel-prev
                >
                  {/* SVG removed */}
                </button>
                {/*Slider Pagination*/}
                <button
                  id="slider-button-right"
                  className="swiper-button-next left-[85%] md:top-36 md:left-[60%] max-lg:-translate-x-[60%] lg:left-24 group flex justify-center items-center transition-all duration-500 rounded-full "
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
  );
}
