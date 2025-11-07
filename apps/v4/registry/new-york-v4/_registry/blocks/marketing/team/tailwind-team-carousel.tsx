export default function TailwindTeamCarousel() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="inline-flex flex-col items-center justify-start gap-3 lg:items-start lg:gap-6">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Our Amazing Team
            </h2>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-xl lg:text-start">
              {" "}
              Each team member contributes their unique talents and expertise,
              working together to achieve our shared goals.
            </p>
          </div>
          {/* Slider controls */}
          <div className="flex items-center gap-6">
            <button
              id="slider-button-left"
              className="swiper-button-prev group mr-6 flex h-[52px] w-[52px] items-center justify-center border border-orange-600 bg-transparent p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-orange-600"
              data-carousel-prev
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex h-[52px] w-[52px] items-center justify-center border border-orange-600 bg-transparent p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-orange-600"
              data-carousel-next
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        {/*Slider wrapper*/}
        <div className="swiper mySwiper items-center justify-center gap-8">
          <div className="swiper-wrapper w-max">
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853616.png"
                      alt="Team Member ImageBenjamin Evans Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="relative w-full">
                    <div className="group speeddial-button absolute right-0 bottom-0 z-50">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex hidden flex-col items-center group-hover:flex"
                      >
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex h-[52px] w-[52px] items-center justify-center bg-orange-600 text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-1">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-base leading-relaxed font-normal text-gray-600">
                    Co-Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853629.png"
                      alt="Team Member ImageAmelia Clark Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="relative w-full">
                    <div className="group speeddial-button absolute right-0 bottom-0 z-50">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex hidden flex-col items-center group-hover:flex"
                      >
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex h-[52px] w-[52px] items-center justify-center bg-orange-600 text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-1">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Amelia Clark
                  </h3>
                  <span className="text-center text-base leading-relaxed font-normal text-gray-600">
                    Design UI/UX
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853646.png"
                      alt="Team Member Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="relative w-full">
                    <div className="group speeddial-button absolute right-0 bottom-0 z-50">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex hidden flex-col items-center group-hover:flex"
                      >
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex h-[52px] w-[52px] items-center justify-center bg-orange-600 text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-1">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-base leading-relaxed font-normal text-gray-600">
                    Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5 bg-[#cdd3c5]">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853657.png"
                      alt="Team Member Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="relative w-full">
                    <div className="group speeddial-button absolute right-0 bottom-0 z-50">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex hidden flex-col items-center group-hover:flex"
                      >
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex h-[52px] w-[52px] items-center justify-center bg-orange-600 text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-1">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-base leading-relaxed font-normal text-gray-600">
                    Seo Manager
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853616.png"
                      alt="Team Member ImageBenjamin Evans Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="relative w-full">
                    <div className="group speeddial-button absolute right-0 bottom-0 z-50">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex hidden flex-col items-center group-hover:flex"
                      >
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex h-[52px] w-[52px] items-center justify-center bg-orange-600 text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-1">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-base leading-relaxed font-normal text-gray-600">
                    Co-Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853629.png"
                      alt="Team Member ImageAmelia Clark Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="relative w-full">
                    <div className="group speeddial-button absolute right-0 bottom-0 z-50">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex hidden flex-col items-center group-hover:flex"
                      >
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex h-[52px] w-[52px] items-center justify-center bg-orange-600 text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-1">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Amelia Clark
                  </h3>
                  <span className="text-center text-base leading-relaxed font-normal text-gray-600">
                    Design UI/UX
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853646.png"
                      alt="Team Member Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="relative w-full">
                    <div className="group speeddial-button absolute right-0 bottom-0 z-50">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex hidden flex-col items-center group-hover:flex"
                      >
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex h-[52px] w-[52px] items-center justify-center bg-orange-600 text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-1">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-base leading-relaxed font-normal text-gray-600">
                    Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5 bg-[#cdd3c5]">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853657.png"
                      alt="Team Member Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="relative w-full">
                    <div className="group speeddial-button absolute right-0 bottom-0 z-50">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex hidden flex-col items-center group-hover:flex"
                      >
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                        <button className="relative flex h-[52px] w-[52px] items-center justify-center bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex h-[52px] w-[52px] items-center justify-center bg-orange-600 text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-1">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-black">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-base leading-relaxed font-normal text-gray-600">
                    Seo Manager
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
