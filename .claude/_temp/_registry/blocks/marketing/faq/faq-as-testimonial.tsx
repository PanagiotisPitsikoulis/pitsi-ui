export default function FaqAsTestimonial() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex items-center flex-col justify-center gap-7 max-lg:gap-10 lg:flex-row lg:justify-between">
          <h2 className="text-4xl text-center font-bold text-gray-900 lg:text-left">
            Most people ask about{" "}
          </h2>
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
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
                  How do I change my privacy settings?
                </h4>
                <p className="text-sm leading-6 text-gray-600">
                  To change your privacy settings, log in and go to the settings
                  or account page. Look for an..
                </p>
                <a
                  href="javascript:;"
                  className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                >
                  Read More
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
                  How do I find my purchase history?
                </h4>
                <p className="text-sm leading-6 text-gray-600">
                  To find your purchase history, log in and go to the account or
                  purchase history page. Look..
                </p>
                <a
                  href="javascript:;"
                  className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                >
                  Read More
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
                  How do I cancel my subscription?
                </h4>
                <p className="text-sm leading-6 text-gray-600">
                  Log in and go to the subscription or account page. Look for an
                  option to "Cancel subscription"..
                </p>
                <a
                  href="javascript:;"
                  className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                >
                  Read More
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
                  How do I change my email address?
                </h4>
                <p className="text-sm leading-6 text-gray-600">
                  To change your email, log in and go to the settings or account
                  page. Look for an option with..
                </p>
                <a
                  href="javascript:;"
                  className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                >
                  Read More
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
                  How do I find my purchase history?
                </h4>
                <p className="text-sm leading-6 text-gray-600">
                  To find your purchase history, log in and go to the account or
                  purchase history page. Look..
                </p>
                <a
                  href="javascript:;"
                  className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                >
                  Read More
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
                  How do I change my privacy settings?
                </h4>
                <p className="text-sm leading-6 text-gray-600">
                  To change your privacy settings, log in and go to the settings
                  or account page. Look for an..
                </p>
                <a
                  href="javascript:;"
                  className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                >
                  Read More
                  {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
