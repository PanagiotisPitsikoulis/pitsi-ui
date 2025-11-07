export default function TailwindTeamCarousel() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-between lg:gap-8 gap-12">
          <div className="flex-col justify-start lg:items-start items-center lg:gap-6 gap-3 inline-flex">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Our Amazing Team
            </h2>
            <p className="lg:max-w-xl w-full text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
              {" "}
              Each team member contributes their unique talents and expertise,
              working together to achieve our shared goals.
            </p>
          </div>
          {/* Slider controls */}
          <div className="flex items-center gap-6">
            <button
              id="slider-button-left"
              className="swiper-button-prev group mr-6 w-[52px] h-[52px] p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-orange-600 hover:border-transparent bg-transparent hover:bg-orange-600 transition-all duration-700 ease-in-out justify-center items-center flex"
              data-carousel-prev
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next  group w-[52px] h-[52px] p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-orange-600 hover:border-transparent bg-transparent hover:bg-orange-600 transition-all duration-700 ease-in-out justify-center items-center flex"
              data-carousel-next
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        {/*Slider wrapper*/}
        <div className="justify-center items-center gap-8 swiper mySwiper">
          <div className="swiper-wrapper w-max">
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853616.png"
                      alt="Team Member ImageBenjamin Evans Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="w-full relative">
                    <div className="absolute right-0 bottom-0 group z-50 speeddial-button">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex flex-col items-center hidden group-hover:flex"
                      >
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex items-center justify-center text-white bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-[52px] h-[52px] focus:outline-none "
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-center gap-1 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-gray-600 text-base font-normal leading-relaxed">
                    Co-Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853629.png"
                      alt="Team Member ImageAmelia Clark Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="w-full relative">
                    <div className="absolute right-0 bottom-0 group z-50 speeddial-button">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex flex-col items-center hidden group-hover:flex"
                      >
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex items-center justify-center text-white bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-[52px] h-[52px] focus:outline-none "
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-center gap-1 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Amelia Clark
                  </h3>
                  <span className="text-center text-gray-600 text-base font-normal leading-relaxed">
                    Design UI/UX
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853646.png"
                      alt="Team Member Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="w-full relative">
                    <div className="absolute right-0 bottom-0 group z-50 speeddial-button">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex flex-col items-center hidden group-hover:flex"
                      >
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex items-center justify-center text-white bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-[52px] h-[52px] focus:outline-none "
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-center gap-1 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-gray-600 text-base font-normal leading-relaxed">
                    Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full bg-[#cdd3c5] justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853657.png"
                      alt="Team Member Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="w-full relative">
                    <div className="absolute right-0 bottom-0 group z-50 speeddial-button">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex flex-col items-center hidden group-hover:flex"
                      >
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex items-center justify-center text-white bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-[52px] h-[52px] focus:outline-none "
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-center gap-1 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-gray-600 text-base font-normal leading-relaxed">
                    Seo Manager
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853616.png"
                      alt="Team Member ImageBenjamin Evans Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="w-full relative">
                    <div className="absolute right-0 bottom-0 group z-50 speeddial-button">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex flex-col items-center hidden group-hover:flex"
                      >
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex items-center justify-center text-white bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-[52px] h-[52px] focus:outline-none "
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-center gap-1 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-gray-600 text-base font-normal leading-relaxed">
                    Co-Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853629.png"
                      alt="Team Member ImageAmelia Clark Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="w-full relative">
                    <div className="absolute right-0 bottom-0 group z-50 speeddial-button">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex flex-col items-center hidden group-hover:flex"
                      >
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex items-center justify-center text-white bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-[52px] h-[52px] focus:outline-none "
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-center gap-1 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Amelia Clark
                  </h3>
                  <span className="text-center text-gray-600 text-base font-normal leading-relaxed">
                    Design UI/UX
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853646.png"
                      alt="Team Member Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="w-full relative">
                    <div className="absolute right-0 bottom-0 group z-50 speeddial-button">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex flex-col items-center hidden group-hover:flex"
                      >
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex items-center justify-center text-white bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-[52px] h-[52px] focus:outline-none "
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-center gap-1 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-gray-600 text-base font-normal leading-relaxed">
                    Founder
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full bg-[#cdd3c5] justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722853657.png"
                      alt="Team Member Image"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="w-full relative">
                    <div className="absolute right-0 bottom-0 group z-50 speeddial-button">
                      <div
                        id="speed-dial-menu-default"
                        className="speed-dial-menu flex flex-col items-center hidden group-hover:flex"
                      >
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                        <button className="flex justify-center items-center w-[52px] h-[52px] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-orange-600 focus:outline-none relative">
                          {/* SVG removed */}
                        </button>
                      </div>
                      <button
                        aria-expanded="false"
                        className="flex items-center justify-center text-white bg-orange-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-[52px] h-[52px] focus:outline-none "
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-center gap-1 flex">
                  <h3 className="text-center text-black text-2xl font-semibold font-manrope leading-9">
                    Benjamin Evans
                  </h3>
                  <span className="text-center text-gray-600 text-base font-normal leading-relaxed">
                    Seo Manager
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
