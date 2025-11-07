export default function HeroSectionWithThumbnailCarousel() {
  return (
    <div className="bg-[url('https://pagedone.io/asset/uploads/1719567529.png')] w-full bg-no-repeat bg-cover bg-center">
      <nav className="py-5 lg:fixed w-full bg-transparent transition-all z-50 duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a
                href="
            https://pagedone.io/"
                className="flex items-center"
              >
                {/* SVG removed */}
              </a>
              <div className="flex items-center justify-end gap-5">
                <button
                  data-collapse-toggle="navbar"
                  className="inline-flex items-center p-2 text-sm text-white hover:text-gray-900 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div
              className="hidden w-full lg:flex lg:pl-11 max-lg:mt-1 max-lg:overflow-y-auto"
              id="navbar"
            >
              <ul className="flex lg:items-center lg:justify-center flex-col gap-6 max-lg:pt-4 max-lg:mb-4 lg:mt-0 lg:flex-row lg:ml-auto ">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-base text-white font-medium transition-all duration-500 hover:text-gray-400"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-base text-white font-medium transition-all duration-500 hover:text-gray-400"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-white text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-400"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    aria-labelledby="menu1"
                    className="animate-fade z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 lg:-left-80 bg-white rounded-lg xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
                  >
                    <div className="flex flex-col md:flex-row justify-between">
                      <ul
                        className="text-sm text-gray-700 md:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
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
                            className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                            className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                        className="text-sm text-gray-700 dark:text-gray-400 md:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
                          Services
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                            className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                            className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                <li className="relative">
                  <button
                    data-target="menu2"
                    className="dropdown-toggle flex items-center justify-between text-white text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-400"
                  >
                    Features
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    aria-labelledby="menu2"
                    className="dropdown-menu z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 font-normal bg-white rounded-lg w-64 xl:p-8 lg:p-4 p-2 hidden"
                  >
                    <ul
                      className="text-sm text-gray-700"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <h6 className="text-sm text-gray-500 font-medium mb-2">
                        Features
                      </h6>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Notification
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full lg:pt-[84px] pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="swiper-container slider w-full lg:pt-28 pt-10 flex-col justify-start items-start md:gap-24 gap-12 inline-flex">
            <div className="swiper-wrapper">
              <div className="swiper-slide ">
                <div className="w-full flex-col justify-start items-start gap-8 flex">
                  <div className="flex flex-col">
                    <h2 className="text-white xl:text-[90px] md:text-7xl text-6xl font-normal xl:leading-snug md:leading-normal leading-snug font-playfairDisplay">
                      A Journey of{" "}
                    </h2>
                    <h2 className="text-white xl:text-[90px] md:text-7xl text-6xl font-normal xl:leading-snug md:leading-normal leading-snug font-playfairDisplay">
                      Discovery and Survival
                    </h2>
                  </div>
                  <p className="lg:max-w-xl w-full text-gray-300 text-base font-medium leading-relaxed md:pb-28 pb-14">
                    Embark on an unforgettable expedition into the unknown,
                    where every step reveals both the wonders and challenges of
                    the wilderness. As the journey unfolds, characters confront
                    their deepest fears
                  </p>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="w-full flex-col justify-start items-start gap-8 flex">
                  <div className="flex flex-col">
                    <h2 className="text-white xl:text-[90px] md:text-7xl text-6xl font-normal xl:leading-snug md:leading-normal leading-snug font-playfairDisplay">
                      A Journey of{" "}
                    </h2>
                    <h2 className="text-white xl:text-[90px] md:text-7xl text-6xl font-normal xl:leading-snug md:leading-normal leading-snug font-playfairDisplay">
                      Discovery and Survival
                    </h2>
                  </div>
                  <p className="lg:max-w-xl w-full text-gray-300 text-base font-medium leading-relaxed md:pb-28 pb-14">
                    Embark on an unforgettable expedition into the unknown,
                    where every step reveals both the wonders and challenges of
                    the wilderness. As the journey unfolds, characters confront
                    their deepest fears
                  </p>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="w-full flex-col justify-start items-start gap-8 flex">
                  <div className="flex flex-col">
                    <h2 className="text-white xl:text-[90px] md:text-7xl text-6xl font-normal xl:leading-snug md:leading-normal leading-snug font-playfairDisplay">
                      A Journey of{" "}
                    </h2>
                    <h2 className="text-white xl:text-[90px] md:text-7xl text-6xl font-normal xl:leading-snug md:leading-normal leading-snug font-playfairDisplay">
                      Discovery and Survival
                    </h2>
                  </div>
                  <p className="lg:max-w-xl w-full text-gray-300 text-base font-medium leading-relaxed md:pb-28 pb-14">
                    Embark on an unforgettable expedition into the unknown,
                    where every step reveals both the wonders and challenges of
                    the wilderness. As the journey unfolds, characters confront
                    their deepest fears
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-container slider-thumbnail relative">
            <div className="swiper-wrapper lg:flex-row flex-col">
              <div className="swiper-slide ">
                <div className="text-white text-lg font-normal leading-relaxed whitespace-nowrap">
                  01. While every moment of solitude.
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="text-white text-lg font-normal leading-relaxed whitespace-nowrap">
                  02. A Journey of Discovery and Survival.
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="text-white text-lg font-normal leading-relaxed whitespace-nowrap">
                  03. That captures the thrill of exploration.
                </div>
              </div>
            </div>
            <div className="swiper-scrollbar" />
          </div>
        </div>
      </section>
    </div>
  );
}
