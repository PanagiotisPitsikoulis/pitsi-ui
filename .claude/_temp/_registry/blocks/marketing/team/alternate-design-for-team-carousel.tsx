export default function AlternateDesignForTeamCarousel() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-2/5">
            <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-9 text-center lg:text-left">
              Brains behind our success team{" "}
            </h2>
            <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">
              These people work on making our product best.
            </p>
            {/*Slider Controls*/}
            <div className="flex items-center justify-center lg:justify-start gap-8">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            {/*Slider Wrapper*/}
            <div className="swiper mySwiper max-w-xs md:max-w-2xl mx-auto">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="block">
                    <div className="relative mb-7">
                      <img
                        src="https://pagedone.io/asset/uploads/1696238786.png"
                        alt="Michael image"
                        className="w-80 h-[25rem] rounded-2xl object-cover"
                      />
                    </div>
                    <h4 className="font-manrope text-2xl text-gray-900 font-semibold  mb-2 transition-all duration-500 ">
                      Michael Cannon{" "}
                    </h4>
                    <span className="text-gray-600 text-sm  block transition-all duration-500 ">
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
                        className="w-80 h-[25rem] rounded-2xl object-cover"
                      />
                    </div>
                    <h4 className="font-manrope text-2xl text-gray-900 font-semibold  mb-2 transition-all duration-500 ">
                      Sylvia Morales{" "}
                    </h4>
                    <span className="text-gray-600 text-sm  block transition-all duration-500 ">
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
                        className="w-80 h-[25rem] rounded-2xl object-cover"
                      />
                    </div>
                    <h4 className="font-manrope text-2xl text-gray-900 font-semibold  mb-2 transition-all duration-500 ">
                      Michael Cannon{" "}
                    </h4>
                    <span className="text-gray-600 text-sm  block transition-all duration-500 ">
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
                        className="w-80 h-[25rem] rounded-2xl object-cover"
                      />
                    </div>
                    <h4 className="font-manrope text-2xl text-gray-900 font-semibold  mb-2 transition-all duration-500 ">
                      Sylvia Morales{" "}
                    </h4>
                    <span className="text-gray-600 text-sm  block transition-all duration-500 ">
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
  );
}
