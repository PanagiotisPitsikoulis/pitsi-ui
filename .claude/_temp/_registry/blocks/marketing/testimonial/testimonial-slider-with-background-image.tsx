export default function TestimonialSliderWithBackgroundImage() {
  return (
    <section className="bg-[url('https://pagedone.io/asset/uploads/1696239474.png')] bg-no-repeat w-full h-full bg-cover min-h-[600px] flex items-center justify-center">
      <div className="absolute h-full w-full bg-black/60" />
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="max-w-xl h-full flex items-center justify-center m-auto lg:max-w-2xl xl:max-w-4xl">
              <div className="px-0 lg:px-16">
                <div className="mb-12 pl-14">
                  <h5 className="text-white font-manrope text-2xl font-bold mb-3">
                    Edward Hisley
                  </h5>
                  <span className="text-lg text-gray-300 font-medium">
                    Chief Marketing Officer
                  </span>
                </div>
                <div className="flex gap-6">
                  <div className="w-8"></div>
                  <p className="text-gray-100 leading-7 ">
                    I have been using pagedone for several months now, and I
                    must say that it has made my life a lot easier. The
                    platform's intuitive interface and ease of use have allowed
                    me to manage my finances more effectively and make informed
                    investment decisions. I particularly like the product's
                    auto-tracking feature, which has saved me a lot of time and
                    effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="max-w-xl h-full flex items-center justify-center m-auto lg:max-w-2xl xl:max-w-4xl">
              <div className="px-0 lg:px-16">
                <div className="mb-12 pl-14">
                  <h5 className="text-white font-manrope text-2xl font-bold mb-3">
                    Edward Hisley
                  </h5>
                  <span className="text-lg text-gray-300 font-medium">
                    Chief Marketing Officer
                  </span>
                </div>
                <div className="flex gap-6">
                  <div className="w-8"></div>
                  <p className="text-gray-100 leading-7 ">
                    I have been using pagedone for several months now, and I
                    must say that it has made my life a lot easier. The
                    platform's intuitive interface and ease of use have allowed
                    me to manage my finances more effectively and make informed
                    investment decisions. I particularly like the product's
                    auto-tracking feature, which has saved me a lot of time and
                    effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="max-w-xl h-full flex items-center justify-center m-auto lg:max-w-2xl xl:max-w-4xl">
              <div className="px-0 lg:px-16">
                <div className="mb-12 pl-14">
                  <h5 className="text-white font-manrope text-2xl font-bold mb-3">
                    Edward Hisley
                  </h5>
                  <span className="text-lg text-gray-300 font-medium">
                    Chief Marketing Officer
                  </span>
                </div>
                <div className="flex gap-6">
                  <div className="w-8"></div>
                  <p className="text-gray-100 leading-7 ">
                    I have been using pagedone for several months now, and I
                    must say that it has made my life a lot easier. The
                    platform's intuitive interface and ease of use have allowed
                    me to manage my finances more effectively and make informed
                    investment decisions. I particularly like the product's
                    auto-tracking feature, which has saved me a lot of time and
                    effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="max-w-xl h-full flex items-center justify-center m-auto lg:max-w-2xl xl:max-w-4xl">
              <div className="px-0 lg:px-16">
                <div className="mb-12 pl-14">
                  <h5 className="text-white font-manrope text-2xl font-bold mb-3">
                    Edward Hisley
                  </h5>
                  <span className="text-lg text-gray-300 font-medium">
                    Chief Marketing Officer
                  </span>
                </div>
                <div className="flex gap-6">
                  <div className="w-8"></div>
                  <p className="text-gray-100 leading-7 ">
                    I have been using pagedone for several months now, and I
                    must say that it has made my life a lot easier. The
                    platform's intuitive interface and ease of use have allowed
                    me to manage my finances more effectively and make informed
                    investment decisions. I particularly like the product's
                    auto-tracking feature, which has saved me a lot of time and
                    effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          id="slider-button-left"
          className="swiper-button-prev hidden  relative lg:absolute -top-36 left-[40%] -translate-x-1/2 lg:top-1/2 lg:left-24 group lg:flex p-3 justify-center items-center border border-solid border-white w-14 h-14 transition-all duration-500 rounded-full"
          data-carousel-prev
        >
          {/* SVG removed */}
        </button>
        <button
          id="slider-button-right"
          className="swiper-button-next hidden  relative lg:absolute  -top-44 max-lg:left-[60%] lg:top-1/2 lg:right-24  group lg:flex p-3 justify-center items-center border border-solid border-white w-14 h-14 transition-all duration-500 rounded-full "
          data-carousel-next
        >
          {/* SVG removed */}
        </button>
      </div>
    </section>
  );
}
