export default function HeroWithGridColumnImages() {
  return (
    <div>
      <nav className="py-5 lg:fixed w-full bg-white transition-all z-50 duration-500">
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
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
              <ul className="flex lg:items-center lg:justify-center flex-col gap-6 max-lg:pt-4 max-lg:mb-4 lg:mt-0 lg:flex-row lg:mx-auto ">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-base text-gray-500 font-medium transition-all duration-500 hover:text-indigo-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-base text-gray-500 font-medium transition-all duration-500 hover:text-indigo-600"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-indigo-600"
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
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-indigo-600"
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
              <div className="flex lg:items-center w-full justify-start flex-col lg:flex-row gap-5 lg:w-max max-lg:gap-5 lg:ml-14 lg:justify-end">
                <button className="flex items-center justify-center bg-indigo-600 rounded-lg cursor-pointer shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 py-2 px-3.5 hover:bg-indigo-800">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="lg:pt-[84px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-col lg:flex-row lg:py-14 py-10 xl:gap-20 lg:gap-10 gap-14">
            <div className="w-full lg:w-1/2 flex flex-col lg:gap-14 gap-11">
              <div className="flex flex-col lg:gap-12 gap-8">
                <div className="flex flex-col lg:gap-7 gap-4">
                  <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-snug text-center lg:text-left">
                    A Practical Guide for Creative Entrepreneurs
                  </h2>
                  <p className="text-lg text-gray-500 font-normal leading-8 text-center lg:text-left">
                    This practical guide is your roadmap to success, offering
                    invaluable insights, strategies, and actionable advice
                    tailored to the unique challenges faced by creative
                    entrepreneurs.
                  </p>
                </div>
                <button className="sm:w-fit w-full py-2.5 px-5 bg-indigo-600 justify-center items-center transition-all duration-500 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] rounded-lg hover:bg-indigo-700 mx-auto lg:mx-0 flex items-center">
                  <span className="px-2 text-white text-base font-semibold leading-7">
                    Get started
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
              <div className="lg:justify-start justify-center items-center xl:gap-10 lg:gap-7 gap-8 inline-flex">
                <div className="flex-col justify-start items-start gap-2 inline-flex xl:pr-10 lg:pr-7 pr-8 border-r border-gray-200">
                  <h3 className="text-indigo-600 text-3xl font-bold font-manrope leading-normal">
                    500K+
                  </h3>
                  <h4 className="text-gray-500 text-xl font-normal leading-8">
                    In Revenue
                  </h4>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex xl:pr-10 lg:pr-7 pr-8 border-r border-gray-200">
                  <h3 className="text-indigo-600 text-3xl font-bold font-manrope leading-normal">
                    200K+
                  </h3>
                  <h4 className="text-gray-500 text-xl font-normal leading-8">
                    Businesses
                  </h4>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <h3 className="text-indigo-600 text-3xl font-bold font-manrope leading-normal">
                    100K+
                  </h3>
                  <h4 className="text-gray-500 text-xl font-normal leading-8">
                    Customers
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-3 xl:gap-8 gap-5">
                <div className="w-full flex flex-col xl:gap-8 gap-5">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238644.png"
                    alt="Team tailwind section"
                    className="lg:w-44 w-full md:h-56 h-auto rounded-2xl object-cover"
                  />
                  <img
                    src="https://pagedone.io/asset/uploads/1719401967.png"
                    alt="Team tailwind section"
                    className="lg:w-44 w-full md:h-56 h-auto rounded-2xl object-cover"
                  />
                  <img
                    src="https://pagedone.io/asset/uploads/1696238665.png"
                    alt="Team tailwind section"
                    className="lg:w-44 w-full md:h-56 h-auto rounded-2xl object-cover"
                  />
                </div>
                <div className="w-full flex flex-col justify-center xl:gap-8 gap-5">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238684.png"
                    alt="Team tailwind section"
                    className="lg:w-44 w-full md:h-56 h-auto rounded-2xl object-cover"
                  />
                  <img
                    src="https://pagedone.io/asset/uploads/1696238702.png"
                    alt="Team tailwind section"
                    className="lg:w-44 w-full md:h-56 h-auto rounded-2xl object-cover"
                  />
                </div>
                <div className="w-full flex flex-col xl:gap-8 gap-5">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238720.png"
                    alt="Team tailwind section"
                    className="lg:w-44 w-full md:h-56 h-auto rounded-2xl object-cover"
                  />
                  <img
                    src="https://pagedone.io/asset/uploads/1696238737.png"
                    alt="Team tailwind section"
                    className="lg:w-44 w-full md:h-56 h-auto rounded-2xl object-cover"
                  />
                  <img
                    src="https://pagedone.io/asset/uploads/1719402204.png"
                    alt="Team tailwind section"
                    className="lg:w-44 w-full md:h-56 h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
