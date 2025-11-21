export default function TeamSectionWithCarouselSlider() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="font-manrope text-center text-5xl font-bold text-gray-900">
            Meet our <span className="text-indigo-600">special</span> team{" "}
          </h2>
        </div>
        <div className="swiper mySwiper mx-auto max-w-md md:max-w-2xl lg:max-w-full">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="block">
                <div className="relative mb-7">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238755.png"
                    alt="Michael image"
                    className="mx-auto h-64 w-72 rounded-2xl object-cover"
                  />
                </div>
                <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                  Michael Cannon{" "}
                </h4>
                <span className="block text-center text-gray-500 transition-all duration-500">
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
                    className="mx-auto h-64 w-72 rounded-2xl object-cover"
                  />
                </div>
                <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                  Dianne Russell{" "}
                </h4>
                <span className="block text-center text-gray-500 transition-all duration-500">
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
                    className="mx-auto h-64 w-72 rounded-2xl object-cover"
                  />
                </div>
                <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                  Devona Lane{" "}
                </h4>
                <span className="block text-center text-gray-500 transition-all duration-500">
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
                    className="mx-auto h-64 w-72 rounded-2xl object-cover"
                  />
                </div>
                <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                  Ronald Richards{" "}
                </h4>
                <span className="block text-center text-gray-500 transition-all duration-500">
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
                    className="mx-auto h-64 w-72 rounded-2xl object-cover"
                  />
                </div>
                <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                  Dianne Russell{" "}
                </h4>
                <span className="block text-center text-gray-500 transition-all duration-500">
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
                    className="mx-auto h-64 w-72 rounded-2xl object-cover"
                  />
                </div>
                <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                  Devona Lane{" "}
                </h4>
                <span className="block text-center text-gray-500 transition-all duration-500">
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
                    className="mx-auto h-64 w-72 rounded-2xl object-cover"
                  />
                </div>
                <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                  Dianne Russell{" "}
                </h4>
                <span className="block text-center text-gray-500 transition-all duration-500">
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
                    className="mx-auto h-64 w-72 rounded-2xl object-cover"
                  />
                </div>
                <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                  Devona Lane{" "}
                </h4>
                <span className="block text-center text-gray-500 transition-all duration-500">
                  UI Designer
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10">
            <button
              id="slider-button-left"
              className="swiper-button-prev group top-[90%] flex h-11 w-11 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
              data-carousel-prev
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group top-[90%] flex h-11 w-11 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
              data-carousel-next
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
