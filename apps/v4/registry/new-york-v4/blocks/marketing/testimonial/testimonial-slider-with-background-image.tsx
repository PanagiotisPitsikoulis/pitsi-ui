export default function TestimonialSliderWithBackgroundImage() {
  return (
    <section className="flex h-full min-h-[600px] w-full items-center justify-center bg-[url('https://pagedone.io/asset/uploads/1696239474.png')] bg-cover bg-no-repeat">
      <div className="absolute h-full w-full bg-black/60" />
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="m-auto flex h-full max-w-xl items-center justify-center lg:max-w-2xl xl:max-w-4xl">
              <div className="px-0 lg:px-16">
                <div className="mb-12 pl-14">
                  <h5 className="font-manrope mb-3 text-2xl font-bold text-white">
                    Edward Hisley
                  </h5>
                  <span className="text-lg font-medium text-gray-300">
                    Chief Marketing Officer
                  </span>
                </div>
                <div className="flex gap-6">
                  <div className="w-8"></div>
                  <p className="leading-7 text-gray-100">
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
            <div className="m-auto flex h-full max-w-xl items-center justify-center lg:max-w-2xl xl:max-w-4xl">
              <div className="px-0 lg:px-16">
                <div className="mb-12 pl-14">
                  <h5 className="font-manrope mb-3 text-2xl font-bold text-white">
                    Edward Hisley
                  </h5>
                  <span className="text-lg font-medium text-gray-300">
                    Chief Marketing Officer
                  </span>
                </div>
                <div className="flex gap-6">
                  <div className="w-8"></div>
                  <p className="leading-7 text-gray-100">
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
            <div className="m-auto flex h-full max-w-xl items-center justify-center lg:max-w-2xl xl:max-w-4xl">
              <div className="px-0 lg:px-16">
                <div className="mb-12 pl-14">
                  <h5 className="font-manrope mb-3 text-2xl font-bold text-white">
                    Edward Hisley
                  </h5>
                  <span className="text-lg font-medium text-gray-300">
                    Chief Marketing Officer
                  </span>
                </div>
                <div className="flex gap-6">
                  <div className="w-8"></div>
                  <p className="leading-7 text-gray-100">
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
            <div className="m-auto flex h-full max-w-xl items-center justify-center lg:max-w-2xl xl:max-w-4xl">
              <div className="px-0 lg:px-16">
                <div className="mb-12 pl-14">
                  <h5 className="font-manrope mb-3 text-2xl font-bold text-white">
                    Edward Hisley
                  </h5>
                  <span className="text-lg font-medium text-gray-300">
                    Chief Marketing Officer
                  </span>
                </div>
                <div className="flex gap-6">
                  <div className="w-8"></div>
                  <p className="leading-7 text-gray-100">
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
          className="swiper-button-prev group relative -top-36 left-[40%] hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-solid border-white p-3 transition-all duration-500 lg:absolute lg:top-1/2 lg:left-24 lg:flex"
          data-carousel-prev
        >
          {/* SVG removed */}
        </button>
        <button
          id="slider-button-right"
          className="swiper-button-next group relative -top-44 hidden h-14 w-14 items-center justify-center rounded-full border border-solid border-white p-3 transition-all duration-500 max-lg:left-[60%] lg:absolute lg:top-1/2 lg:right-24 lg:flex"
          data-carousel-next
        >
          {/* SVG removed */}
        </button>
      </div>
    </section>
  )
}
