export default function FaqAsTestimonial() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center justify-center gap-7 max-lg:gap-10 lg:flex-row lg:justify-between">
          <h2 className="text-center text-4xl font-bold text-gray-900 lg:text-left">
            Most people ask about{" "}
          </h2>
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
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
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
              <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
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
              <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
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
              <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
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
              <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
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
              <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
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
  )
}
