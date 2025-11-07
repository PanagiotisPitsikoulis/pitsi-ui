export default function TeamSectionWithCarouselSlider() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900">
            Meet our <span className="text-indigo-600">special</span> team{" "}
          </h2>
        </div>
        <div className="swiper mySwiper max-w-md md:max-w-2xl mx-auto lg:max-w-full">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="block">
                <div className="relative mb-7">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238755.png"
                    alt="Michael image"
                    className="w-72 h-64 rounded-2xl object-cover mx-auto"
                  />
                </div>
                <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 ">
                  Michael Cannon{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 ">
                  Founder
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="block">
                <div className="relative mb-7">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238771.png"
                    alt="Dianne image"
                    className="w-72 h-64 rounded-2xl object-cover mx-auto"
                  />
                </div>
                <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 ">
                  Dianne Russell{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 ">
                  Sales Lead
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="block">
                <div className="relative mb-7">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238665.png"
                    alt="Devona image"
                    className="w-72 h-64 rounded-2xl object-cover mx-auto"
                  />
                </div>
                <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 ">
                  Devona Lane{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 ">
                  UI Designer
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="block">
                <div className="relative mb-7">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238702.png"
                    alt="Ronald image"
                    className="w-72 h-64 rounded-2xl object-cover mx-auto"
                  />
                </div>
                <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 ">
                  Ronald Richards{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 ">
                  Product Designer
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="block">
                <div className="relative mb-7">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238771.png"
                    alt="Dianne image"
                    className="w-72 h-64 rounded-2xl object-cover mx-auto"
                  />
                </div>
                <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 ">
                  Dianne Russell{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 ">
                  Sales Lead
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="block">
                <div className="relative mb-7">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238665.png"
                    alt="Devona image"
                    className="w-72 h-64 rounded-2xl object-cover mx-auto"
                  />
                </div>
                <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 ">
                  Devona Lane{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 ">
                  UI Designer
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="block">
                <div className="relative mb-7">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238771.png"
                    alt="Dianne image"
                    className="w-72 h-64 rounded-2xl object-cover mx-auto"
                  />
                </div>
                <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 ">
                  Dianne Russell{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 ">
                  Sales Lead
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="block">
                <div className="relative mb-7">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238665.png"
                    alt="Devona image"
                    className="w-72 h-64 rounded-2xl object-cover mx-auto"
                  />
                </div>
                <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 ">
                  Devona Lane{" "}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 ">
                  UI Designer
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10">
            <button
              id="slider-button-left"
              className="swiper-button-prev p-2 top-[90%]  group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
              data-carousel-prev
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group p-2 top-[90%]  flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
              data-carousel-next
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
