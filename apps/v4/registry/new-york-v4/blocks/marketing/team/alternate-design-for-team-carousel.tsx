export default function AlternateDesignForTeamCarousel() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
          <div className="w-full lg:w-2/5">
            <h2 className="font-manrope mb-9 text-center text-5xl leading-[4rem] font-bold text-gray-900 lg:text-left">
              Brains behind our success team{" "}
            </h2>
            <p className="mb-16 text-center text-lg text-gray-500 lg:text-left">
              These people work on making our product best.
            </p>
            {/*Slider Controls*/}
            <div className="flex items-center justify-center gap-8 lg:justify-start">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            {/*Slider Wrapper*/}
            <div className="swiper mySwiper mx-auto max-w-xs md:max-w-2xl">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="block">
                    <div className="relative mb-7">
                      <img
                        src="https://pagedone.io/asset/uploads/1696238786.png"
                        alt="Michael image"
                        className="h-[25rem] w-80 rounded-2xl object-cover"
                      />
                    </div>
                    <h4 className="font-manrope mb-2 text-2xl font-semibold text-gray-900 transition-all duration-500">
                      Michael Cannon{" "}
                    </h4>
                    <span className="block text-sm text-gray-600 transition-all duration-500">
                      Sales Lead
                    </span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <div className="relative mb-7">
                      <img
                        src="https://pagedone.io/asset/uploads/1696238771.png"
                        alt="Sylvia image"
                        className="h-[25rem] w-80 rounded-2xl object-cover"
                      />
                    </div>
                    <h4 className="font-manrope mb-2 text-2xl font-semibold text-gray-900 transition-all duration-500">
                      Sylvia Morales{" "}
                    </h4>
                    <span className="block text-sm text-gray-600 transition-all duration-500">
                      Product Manager
                    </span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <div className="relative mb-7">
                      <img
                        src="https://pagedone.io/asset/uploads/1696238786.png"
                        alt="Michael image"
                        className="h-[25rem] w-80 rounded-2xl object-cover"
                      />
                    </div>
                    <h4 className="font-manrope mb-2 text-2xl font-semibold text-gray-900 transition-all duration-500">
                      Michael Cannon{" "}
                    </h4>
                    <span className="block text-sm text-gray-600 transition-all duration-500">
                      Sales Lead
                    </span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="block">
                    <div className="relative mb-7">
                      <img
                        src="https://pagedone.io/asset/uploads/1696238771.png"
                        alt="Sylvia image"
                        className="h-[25rem] w-80 rounded-2xl object-cover"
                      />
                    </div>
                    <h4 className="font-manrope mb-2 text-2xl font-semibold text-gray-900 transition-all duration-500">
                      Sylvia Morales{" "}
                    </h4>
                    <span className="block text-sm text-gray-600 transition-all duration-500">
                      Product Manager
                    </span>
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
