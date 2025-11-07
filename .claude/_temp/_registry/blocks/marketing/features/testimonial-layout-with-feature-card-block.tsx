export default function TestimonialLayoutWithFeatureCardBlock() {
  return (
    <section className="py-24 ">
      <div className="mx-auto lg:max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-8 max-w-full lg:max-w-3xl lg:mx-auto">
            Our dedication to our customer
          </h2>
          <p className="text-lg font-normal text-gray-500 leading-[1.8rem] lg:max-w-3xl lg:mx-auto ">
            At every step of our process, we prioritize the user, ensuring that
            our products and services are designed with their needs in mind.
          </p>
        </div>
        <div className="flex justify-center items-center lg:flex-row flex-col xl:justify-between gap-8 mx-auto">
          <div className="w-full lg:w-1/4">
            <div className="relative bg-gray-50 rounded-2xl py-9 px-6 h-auto xl:h-72">
              <h2 className="text-2xl text-indigo-600 font-bold leading-9 mb-5 lg:text-left text-center">
                Grow faster with pro’s help
              </h2>
              <p className="text-sm text-gray-800 leading-6 mb-11 lg:text-left text-center">
                Experience top-notch features with our services
              </p>
              {/* Slider controls */}
              <div className="flex items-center gap-8 lg:justify-start justify-center">
                <button
                  id="slider-button-left"
                  className="swiper-button-prev group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                  data-carousel-prev
                >
                  {/* SVG removed */}
                </button>
                <button
                  id="slider-button-right"
                  className="swiper-button-next group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
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
                  <div className="relative w-full border border-solid border-gray-300 rounded-2xl py-5 sm:py-8 px-4 sm:px-6 transition-all duration-500 h-auto xl:h-72">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-7">
                      Customer Experience
                    </h4>
                    <p className="text-sm text-gray-500 leading-6">
                      We prioritize our customer experience, ensuring that every
                      interaction with our platform is seamless and intuitive.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative w-full border border-solid border-gray-300 rounded-2xl py-5 sm:py-8 px-4 sm:px-6 transition-all duration-500 h-auto xl:h-72">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-7">
                      Sales and Marketing
                    </h4>
                    <p className="text-sm text-gray-500 leading-6">
                      Our sales and marketing team works together to provide you
                      with a comprehensive solution that is tailored to your
                      needs.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative w-full border border-solid border-gray-300 rounded-2xl py-5 sm:py-8 px-4 sm:px-6 transition-all duration-500 h-auto xl:h-72 md:col-span-1">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-7">
                      Ratings and Reviews
                    </h4>
                    <p className="text-sm text-gray-500 leading-6">
                      Our focus on ratings and reviews ensures that you have
                      access to the most comprehensive and up-to-date
                      information available.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative w-full border border-solid border-gray-300 rounded-2xl py-5 sm:py-8 px-4 sm:px-6 transition-all duration-500 h-auto xl:h-72">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-7">
                      Customer Experience
                    </h4>
                    <p className="text-sm text-gray-500 leading-6">
                      We prioritize our customer experience, ensuring that every
                      interaction with our platform is seamless and intuitive.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative w-full border border-solid border-gray-300 rounded-2xl py-5 sm:py-8 px-4 sm:px-6 transition-all duration-500 h-auto xl:h-72">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-7">
                      Sales and Marketing
                    </h4>
                    <p className="text-sm text-gray-500 leading-6">
                      Our sales and marketing team works together to provide you
                      with a comprehensive solution that is tailored to your
                      needs.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative w-full border border-solid border-gray-300 rounded-2xl py-5 sm:py-8 px-4 sm:px-6 transition-all duration-500 h-auto xl:h-72 md:col-span-1">
                    <div className="mb-4 sm:mb-7"></div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-7">
                      Ratings and Reviews
                    </h4>
                    <p className="text-sm text-gray-500 leading-6">
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
  );
}
