export default function ProductHeroSectionWithCarousel() {
  return (
    <div>
      <nav className="py-5 fixed w-full bg-transparent transition-all duration-500 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <button
                data-collapse-toggle="navbar"
                className="inline-flex items-center p-2 ml-3 text-sm text-white hover:text-gray-900 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* SVG removed */}
              </button>
            </div>
            <div
              className="hidden w-full lg:flex lg:pl-10 max-lg:py-4 p-4 lg:bg-transparent bg-zinc-700 lg:mt-0 mt-5 rounded-lg lg:backdrop-blur-none backdrop-blur-3xl"
              id="navbar"
            >
              <ul className="flex lg:items-center flex-col gap-6 mt-4 lg:mt-0 lg:flex-row max-lg:mb-4">
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="text-white text-base font-medium hover:text-gray-400 transition-all duration-500 lg:px-1.5 block lg:text-left "
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="text-white text-base font-medium hover:text-gray-400 transition-all duration-500 lg:px-1.5 block lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle flex items-center justify-between text-white text-base font-medium transition-all duration-500 mr-auto lg:text-left lg:m-0 hover:text-gray-400"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="megamenu"
                    aria-labelledby="megamenu"
                    className="animate-fade z-10 relative lg:absolute top-2 lg:top-14  lg:-left-20 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full open hidden"
                  >
                    <div className="flex flex-col sm:flex-row lg:justify-between">
                      <ul className="text-sm text-gray-700 lg:w-1/2">
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                          >
                            <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                Notification
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                Real time notification always keep you up to
                                date in realtime
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-2 lg:px-3 py-2 lg:py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                Analytics
                                <span className="bg-indigo-50 text-indigo-500 text-xs font-medium mr-2 px-2.5 py-1 rounded-full h-5 ml-4">
                                  New
                                </span>
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                Analyze data to make more informed and accurate
                                business decision
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-2 lg:px-3 py-2 lg:py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                Integrations
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                Get started by taking advantage of integration
                                with other services
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <ul
                        className="text-sm text-gray-700 dark:text-gray-400 lg:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
                          Services
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-2 lg:px-3 py-2 lg:py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-rose-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                Security
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                To ensure your privacy all information are
                                highly encrypted
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-2 lg:px-3 py-2 lg:py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                Documentation
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                Organized documentation will help you save tone
                                of your time
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-2 lg:px-3 py-2 lg:py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                Support
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                Need help? our customer support is here to help
                                you anytime
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative px-1.5">
                  <div className="dropdown relative inline-flex">
                    <button
                      data-target="dropdown-feature"
                      className="dropdown-toggle flex items-center justify-between text-white max-lg:h-max text-center text-base font-medium transition-all duration-500 mr-auto lg:text-left lg:m-0 hover:text-gray-400"
                    >
                      Features
                      {/* SVG removed */}
                    </button>
                    <div
                      id="dropdown-feature"
                      className="dropdown-menu rounded-xl shadow-lg lg:bg-white relative lg:absolute max-lg:-left-14 max-lg:top-4 max-lg:bg-white lg:top-full lg:w-72 mt-2 hidden"
                      aria-labelledby="dropdown-feature"
                    >
                      <ul className="py-2">
                        <li>
                          <a
                            className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                            href="#"
                          >
                            Downloads
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                            href="#"
                          >
                            Saved Files
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                            href="#"
                          >
                            Notifications
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="flex lg:items-center justify-start flex-col lg:flex-row gap-5 lg:flex-1 lg:justify-end">
                <button className="border border-white rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-center transition-all duration-500 py-2 px-3.5 hover:border-gray-400">
                  <span className="px-1.5 text-sm font-medium leading-6 text-white">
                    Login
                  </span>
                </button>
                <button className="bg-white rounded-full text-center shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500 py-2 px-3.5 hover:bg-gray-200">
                  <span className="px-1.5 text-gray-900 font-medium text-sm leading-6">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full h-screen">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide bg-[url('https://pagedone.io/asset/uploads/1720172752.png')] w-full  bg-no-repeat bg-cover bg-center lg:pt-[84px] pb-24 min-h-[800px]">
              <section className="pt-[120px] pt-8 pb-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="w-full flex-col justify-start items-start gap-14 inline-flex">
                    <div className="justify-center items-center gap-[492px] inline-flex">
                      <div className="flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
                        <div className="flex-col justify-start items-start gap-4 flex">
                          <h5 className="text-white text-lg font-medium leading-relaxed">
                            Products / Headphone
                          </h5>
                          <div className="flex-col justify-start items-start gap-2 flex">
                            <h2 className="text-white md:text-8xl text-6xl font-bold font-manrope md:leading-snug leading-snug">
                              AirPods Max
                            </h2>
                            <p className="lg:max-w-xl w-full text-gray-200/80 text-lg font-normal leading-normal">
                              You can listen to music, make phone calls, use
                              Siri, and more with your AirPods Max. The AirPods
                              Max feature a stainless steel frame with a
                              breathable knit mesh canopy and memory foam ear
                              cushions for comfort.
                            </p>
                          </div>
                        </div>
                        <button className="px-5 py-2.5 bg-white hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                          <span className="px-2 py-px text-gray-900 text-base font-semibold leading-relaxed">
                            Buy Now
                          </span>
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="swiper-slide bg-[url('https://pagedone.io/asset/uploads/1720172793.png')] w-full  bg-no-repeat bg-cover bg-center lg:pt-[84px] pb-24 min-h-[800px]">
              <section className="pt-[120px] pt-8 pb-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="w-full flex-col justify-start items-start gap-14 inline-flex">
                    <div className="justify-center items-center gap-[492px] inline-flex">
                      <div className="flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
                        <div className="flex-col justify-start items-start gap-4 flex">
                          <h5 className="text-white text-lg font-medium leading-relaxed">
                            Products
                            <span className="text-indigo-400">
                              {" "}
                              / Headphone
                            </span>
                          </h5>
                          <div className="flex-col justify-start items-start gap-2 flex">
                            <h2 className="text-white md:text-8xl text-6xl font-bold font-manrope md:leading-snug leading-snug">
                              AirPods Max
                            </h2>
                            <p className="lg:max-w-xl w-full text-gray-200/80 text-lg font-normal leading-normal">
                              You can listen to music, make phone calls, use
                              Siri, and more with your AirPods Max. The AirPods
                              Max feature a stainless steel frame with a
                              breathable knit mesh canopy and memory foam ear
                              cushions for comfort.
                            </p>
                          </div>
                        </div>
                        <button className="px-5 py-2.5 bg-white hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                          <span className="px-2 py-px text-gray-900 text-base font-semibold leading-relaxed">
                            Buy Now
                          </span>
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="swiper-slide bg-[url('https://pagedone.io/asset/uploads/1720172806.png')] w-full  bg-no-repeat bg-cover bg-center lg:pt-[84px] pb-24 min-h-[800px]">
              <section className="pt-[120px] pt-8 pb-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="w-full flex-col justify-start items-start gap-14 inline-flex">
                    <div className="justify-center items-center gap-[492px] inline-flex">
                      <div className="flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
                        <div className="flex-col justify-start items-start gap-4 flex">
                          <h5 className="text-white text-lg font-medium leading-relaxed">
                            Products
                            <span className="text-indigo-400">
                              {" "}
                              / Headphone
                            </span>
                          </h5>
                          <div className="flex-col justify-start items-start gap-2 flex">
                            <h2 className="text-white md:text-8xl text-6xl font-bold font-manrope md:leading-snug leading-snug">
                              AirPods Max
                            </h2>
                            <p className="lg:max-w-xl w-full text-gray-200/80 text-lg font-normal leading-normal">
                              You can listen to music, make phone calls, use
                              Siri, and more with your AirPods Max. The AirPods
                              Max feature a stainless steel frame with a
                              breathable knit mesh canopy and memory foam ear
                              cushions for comfort.
                            </p>
                          </div>
                        </div>
                        <button className="px-5 py-2.5 bg-white hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                          <span className="px-2 py-px text-gray-900 text-base font-semibold leading-relaxed">
                            Buy Now
                          </span>
                          {/* SVG removed */}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="flex items-center justify-between relative lg:mt-0 mt-7 absolute 2xl:bottom-40 xl:bottom-48 lg:bottom-44 bottom-44 max-w-[320px] mx-auto z-10">
            <button
              id="slider-button-left"
              className="relative z-50 swiper-button-prev   items-center justify-center group transition-all duration-700 ease-in-out"
            >
              {/* SVG removed */}
            </button>
            <div className="swiper-scrollbar mx-14" />
            {/*Slider Pagination*/}
            <button
              id="slider-button-right"
              className="relative swiper-button-next  z-50  items-center justify-center group transition-all duration-700 ease-in-out"
            >
              {/* SVG removed */}
            </button>
          </div>
          <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal lg:top-[40%] lg:-left-[18%] left-[-48%]" />
        </div>
      </section>
    </div>
  );
}
