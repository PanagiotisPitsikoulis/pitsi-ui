export default function ProductHeroSectionWithCarousel() {
  return (
    <div>
      <nav className="fixed z-10 w-full bg-transparent py-5 transition-all duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <button
                data-collapse-toggle="navbar"
                className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* SVG removed */}
              </button>
            </div>
            <div
              className="mt-5 hidden w-full rounded-lg bg-zinc-700 p-4 backdrop-blur-3xl max-lg:py-4 lg:mt-0 lg:flex lg:bg-transparent lg:pl-10 lg:backdrop-blur-none"
              id="navbar"
            >
              <ul className="mt-4 flex flex-col gap-6 max-lg:mb-4 lg:mt-0 lg:flex-row lg:items-center">
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-white transition-all duration-500 hover:text-gray-400 lg:px-1.5 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-white transition-all duration-500 hover:text-gray-400 lg:px-1.5 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-base font-medium text-white transition-all duration-500 hover:text-gray-400 lg:m-0 lg:text-left"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="megamenu"
                    aria-labelledby="megamenu"
                    className="animate-fade open relative top-2 z-10 hidden min-w-full rounded-lg bg-white p-2 shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] md:min-w-[500px] lg:absolute lg:top-14 lg:-left-20 lg:min-w-[800px] lg:p-4 xl:p-8"
                  >
                    <div className="flex flex-col sm:flex-row lg:justify-between">
                      <ul className="text-sm text-gray-700 lg:w-1/2">
                        <h6 className="mb-2 text-sm font-medium text-gray-500">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
                                Analytics
                                <span className="mr-2 ml-4 h-5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-500">
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                        className="text-sm text-gray-700 lg:w-1/2 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="mb-2 text-sm font-medium text-gray-500">
                          Services
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                      className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-white transition-all duration-500 hover:text-gray-400 max-lg:h-max lg:m-0 lg:text-left"
                    >
                      Features
                      {/* SVG removed */}
                    </button>
                    <div
                      id="dropdown-feature"
                      className="dropdown-menu relative mt-2 hidden rounded-xl shadow-lg max-lg:top-4 max-lg:-left-14 max-lg:bg-white lg:absolute lg:top-full lg:w-72 lg:bg-white"
                      aria-labelledby="dropdown-feature"
                    >
                      <ul className="py-2">
                        <li>
                          <a
                            className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                            href="#"
                          >
                            Downloads
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                            href="#"
                          >
                            Saved Files
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
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
              <div className="flex flex-col justify-start gap-5 lg:flex-1 lg:flex-row lg:items-center lg:justify-end">
                <button className="rounded-full border border-white px-3.5 py-2 text-center shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500 hover:border-gray-400">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Login
                  </span>
                </button>
                <button className="rounded-full bg-white px-3.5 py-2 text-center shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500 hover:bg-gray-200">
                  <span className="px-1.5 text-sm leading-6 font-medium text-gray-900">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="h-screen w-full">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide min-h-[800px] w-full bg-[url('https://pagedone.io/asset/uploads/1720172752.png')] bg-cover bg-center bg-no-repeat pb-24 lg:pt-[84px]">
              <section className="pt-8 pt-[120px] pb-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-14">
                    <div className="inline-flex items-center justify-center gap-[492px]">
                      <div className="inline-flex flex-col items-start justify-start gap-10 lg:gap-14">
                        <div className="flex flex-col items-start justify-start gap-4">
                          <h5 className="text-lg leading-relaxed font-medium text-white">
                            Products / Headphone
                          </h5>
                          <div className="flex flex-col items-start justify-start gap-2">
                            <h2 className="font-manrope text-6xl leading-snug font-bold text-white md:text-8xl md:leading-snug">
                              AirPods Max
                            </h2>
                            <p className="w-full text-lg leading-normal font-normal text-gray-200/80 lg:max-w-xl">
                              You can listen to music, make phone calls, use
                              Siri, and more with your AirPods Max. The AirPods
                              Max feature a stainless steel frame with a
                              breathable knit mesh canopy and memory foam ear
                              cushions for comfort.
                            </p>
                          </div>
                        </div>
                        <button className="flex items-center justify-center rounded-xl bg-white px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-200">
                          <span className="px-2 py-px text-base leading-relaxed font-semibold text-gray-900">
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
            <div className="swiper-slide min-h-[800px] w-full bg-[url('https://pagedone.io/asset/uploads/1720172793.png')] bg-cover bg-center bg-no-repeat pb-24 lg:pt-[84px]">
              <section className="pt-8 pt-[120px] pb-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-14">
                    <div className="inline-flex items-center justify-center gap-[492px]">
                      <div className="inline-flex flex-col items-start justify-start gap-10 lg:gap-14">
                        <div className="flex flex-col items-start justify-start gap-4">
                          <h5 className="text-lg leading-relaxed font-medium text-white">
                            Products
                            <span className="text-indigo-400">
                              {" "}
                              / Headphone
                            </span>
                          </h5>
                          <div className="flex flex-col items-start justify-start gap-2">
                            <h2 className="font-manrope text-6xl leading-snug font-bold text-white md:text-8xl md:leading-snug">
                              AirPods Max
                            </h2>
                            <p className="w-full text-lg leading-normal font-normal text-gray-200/80 lg:max-w-xl">
                              You can listen to music, make phone calls, use
                              Siri, and more with your AirPods Max. The AirPods
                              Max feature a stainless steel frame with a
                              breathable knit mesh canopy and memory foam ear
                              cushions for comfort.
                            </p>
                          </div>
                        </div>
                        <button className="flex items-center justify-center rounded-xl bg-white px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-200">
                          <span className="px-2 py-px text-base leading-relaxed font-semibold text-gray-900">
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
            <div className="swiper-slide min-h-[800px] w-full bg-[url('https://pagedone.io/asset/uploads/1720172806.png')] bg-cover bg-center bg-no-repeat pb-24 lg:pt-[84px]">
              <section className="pt-8 pt-[120px] pb-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="inline-flex w-full flex-col items-start justify-start gap-14">
                    <div className="inline-flex items-center justify-center gap-[492px]">
                      <div className="inline-flex flex-col items-start justify-start gap-10 lg:gap-14">
                        <div className="flex flex-col items-start justify-start gap-4">
                          <h5 className="text-lg leading-relaxed font-medium text-white">
                            Products
                            <span className="text-indigo-400">
                              {" "}
                              / Headphone
                            </span>
                          </h5>
                          <div className="flex flex-col items-start justify-start gap-2">
                            <h2 className="font-manrope text-6xl leading-snug font-bold text-white md:text-8xl md:leading-snug">
                              AirPods Max
                            </h2>
                            <p className="w-full text-lg leading-normal font-normal text-gray-200/80 lg:max-w-xl">
                              You can listen to music, make phone calls, use
                              Siri, and more with your AirPods Max. The AirPods
                              Max feature a stainless steel frame with a
                              breathable knit mesh canopy and memory foam ear
                              cushions for comfort.
                            </p>
                          </div>
                        </div>
                        <button className="flex items-center justify-center rounded-xl bg-white px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-200">
                          <span className="px-2 py-px text-base leading-relaxed font-semibold text-gray-900">
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
          <div className="absolute relative bottom-44 z-10 mx-auto mt-7 flex max-w-[320px] items-center justify-between lg:bottom-44 lg:mt-0 xl:bottom-48 2xl:bottom-40">
            <button
              id="slider-button-left"
              className="swiper-button-prev group relative z-50 items-center justify-center transition-all duration-700 ease-in-out"
            >
              {/* SVG removed */}
            </button>
            <div className="swiper-scrollbar mx-14" />
            {/*Slider Pagination*/}
            <button
              id="slider-button-right"
              className="swiper-button-next group relative z-50 items-center justify-center transition-all duration-700 ease-in-out"
            >
              {/* SVG removed */}
            </button>
          </div>
          <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal left-[-48%] lg:top-[40%] lg:-left-[18%]" />
        </div>
      </section>
    </div>
  )
}
