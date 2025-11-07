export default function TestimonialLayoutWithFeatureCardBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-8 max-w-full text-center text-4xl leading-[3.25rem] font-bold text-gray-900 lg:mx-auto lg:max-w-3xl">
            Our dedication to our customer
          </h2>
          <p className="text-lg leading-[1.8rem] font-normal text-gray-500 lg:mx-auto lg:max-w-3xl">
            At every step of our process, we prioritize the user, ensuring that
            our products and services are designed with their needs in mind.
          </p>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row xl:justify-between">
          <div className="w-full lg:w-1/4">
            <div className="relative h-auto rounded-2xl bg-gray-50 px-6 py-9 xl:h-72">
              <h2 className="mb-5 text-center text-2xl leading-9 font-bold text-indigo-600 lg:text-left">
                Grow faster with pro’s help
              </h2>
              <p className="mb-11 text-center text-sm leading-6 text-gray-800 lg:text-left">
                Experience top-notch features with our services
              </p>
              {/* Slider controls */}
              <div className="flex items-center justify-center gap-8 lg:justify-start">
                <button
                  id="slider-button-left"
                  className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                  data-carousel-prev
                >
                  {/* SVG removed */}
                </button>
                <button
                  id="slider-button-right"
                  className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                  data-carousel-next
                >
                  {/* SVG removed */}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            {/* Carousel wrapper */}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="relative h-auto w-full rounded-2xl border border-solid border-gray-300 px-4 py-5 transition-all duration-500 sm:px-6 sm:py-8 xl:h-72">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="mb-4 text-lg font-semibold text-gray-800 sm:mb-7">
                      Customer Experience
                    </h4>
                    <p className="text-sm leading-6 text-gray-500">
                      We prioritize our customer experience, ensuring that every
                      interaction with our platform is seamless and intuitive.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative h-auto w-full rounded-2xl border border-solid border-gray-300 px-4 py-5 transition-all duration-500 sm:px-6 sm:py-8 xl:h-72">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="mb-4 text-lg font-semibold text-gray-800 sm:mb-7">
                      Sales and Marketing
                    </h4>
                    <p className="text-sm leading-6 text-gray-500">
                      Our sales and marketing team works together to provide you
                      with a comprehensive solution that is tailored to your
                      needs.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative h-auto w-full rounded-2xl border border-solid border-gray-300 px-4 py-5 transition-all duration-500 sm:px-6 sm:py-8 md:col-span-1 xl:h-72">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="mb-4 text-lg font-semibold text-gray-800 sm:mb-7">
                      Ratings and Reviews
                    </h4>
                    <p className="text-sm leading-6 text-gray-500">
                      Our focus on ratings and reviews ensures that you have
                      access to the most comprehensive and up-to-date
                      information available.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative h-auto w-full rounded-2xl border border-solid border-gray-300 px-4 py-5 transition-all duration-500 sm:px-6 sm:py-8 xl:h-72">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="mb-4 text-lg font-semibold text-gray-800 sm:mb-7">
                      Customer Experience
                    </h4>
                    <p className="text-sm leading-6 text-gray-500">
                      We prioritize our customer experience, ensuring that every
                      interaction with our platform is seamless and intuitive.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative h-auto w-full rounded-2xl border border-solid border-gray-300 px-4 py-5 transition-all duration-500 sm:px-6 sm:py-8 xl:h-72">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="mb-4 text-lg font-semibold text-gray-800 sm:mb-7">
                      Sales and Marketing
                    </h4>
                    <p className="text-sm leading-6 text-gray-500">
                      Our sales and marketing team works together to provide you
                      with a comprehensive solution that is tailored to your
                      needs.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative h-auto w-full rounded-2xl border border-solid border-gray-300 px-4 py-5 transition-all duration-500 sm:px-6 sm:py-8 md:col-span-1 xl:h-72">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="mb-4 text-lg font-semibold text-gray-800 sm:mb-7">
                      Ratings and Reviews
                    </h4>
                    <p className="text-sm leading-6 text-gray-500">
                      Our focus on ratings and reviews ensures that you have
                      access to the most comprehensive and up-to-date
                      information available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
