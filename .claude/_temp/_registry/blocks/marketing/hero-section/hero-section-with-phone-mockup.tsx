export default function HeroSectionWithPhoneMockup() {
  return (
    <div>
      <nav className="py-5 z-10 w-full bg-inherit lg:fixed" id="topnav">
        <div className="mx-auto max-w-7xl lg:px-8 sm:px-6 px-4">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:hidden px-4">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <button
                data-collapse-toggle="navbar"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* SVG removed */}
              </button>
            </div>
            <div
              className="hidden w-full lg:flex justify-between max-lg:mt-1 max-lg:px-4 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200 "
              id="navbar"
            >
              <ul className="flex lg:items-center gap-6 max-lg:mb-4 flex-col mt-4 lg:mr-7 lg:flex-1 lg:mt-0 lg:flex-row">
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 px-1.5 text-base font-medium hover:text-prime-blue-700 transition-all duration-500 block lg:text-base md:mb-0 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 whitespace-nowrap px-1.5 text-base font-medium hover:text-prime-blue-700 transition-all duration-500 block lg:text-base md:mb-0 hover:text-gray-900"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle pl-1.5 flex items-center justify-between text-gray-500 text-base lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 lg:mb-0 mr-auto lg:text-left  lg:m-0 hover:text-gray-900"
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
                      className="dropdown-toggle pl-1.5 flex items-center justify-between text-gray-500 text-base max-lg:h-max text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
                    >
                      Features
                      {/* SVG removed */}
                    </button>
                    <div
                      id="dropdown-feature"
                      className="dropdown-menu rounded-xl shadow-lg lg:bg-white relative lg:absolute max-lg:-left-14 max-lg:top-2 max-lg:bg-white lg:top-full lg:w-72 mt-2 hidden"
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
              <a
                href="https://pagedone.io/"
                className="hidden lg:flex items-center"
              >
                {/* SVG removed */}
              </a>
              <div className="flex lg:items-center justify-start flex-col lg:flex-row gap-5 lg:flex-1 lg:justify-end">
                <div className="relative">
                  <input
                    type="search"
                    className="w-9 h-9 rounded-full flex items-center justify-center outline-0 border border-gray-200 focus-within:pl-10 transition-all duration-500 focus-within:border-gray-300 focus-within:rounded-full xl:focus-within:w-44 lg:focus-within:w-28 focus-within:w-44"
                  />
                  {/* SVG removed */}
                </div>
                <button className="bg-indigo-50 rounded-full cursor-pointer text-center transition-all duration-500 py-2 px-3.5 hover:bg-indigo-100">
                  <span className="px-1 text font-medium leading-6">Login</span>
                </button>
                <button className="bg-indigo-600 rounded-full cursor-pointer text-center shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500 py-2 px-3.5 hover:bg-indigo-700">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full">
        <div className="w-full 2xl:px-0 px-5 lg:pt-28 pt-8 pb-20 rounded-3xl flex-col justify-center items-center gap-2.5 flex">
          <div className="w-full rounded-3xl grid lg:grid-cols-12 grid-cols-1">
            <div className="2xl:col-span-1 2xl:grid hidden" />
            <div className="2xl:col-span-6 lg:col-span-7 col-span-12 h-full xl:px-20 sm:px-10 px-5 xl:py-16 sm:py-10 py-5 bg-blue-600 flex-col lg:rounded-l-3xl lg:rounded-tr-none rounded-t-3xl justify-start items-start lg:gap-16 gap-10 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-3 flex">
                <h2 className="lg:max-w-xl w-full text-white lg:text-6xl text-5xl font-extrabold font-manrope lg:leading-normal leading-snug">
                  Empowering Marketplaces with Smart Payment Solutions
                </h2>
                <p className="lg:max-w-2xl w-full text-white text-base font-normal leading-relaxed">
                  Our advanced payment solutions are designed to streamline your
                  marketplace transactions, ensuring security, speed, and
                  reliability. Enhance your user experience with our seamless
                  integration and comprehensive support.
                </p>
              </div>
              <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                <button className="sm:w-fit w-full px-5 py-2.5 bg-blue-50 hover:bg-blue-100 transition-all duration-700 ease-in-out rounded-full justify-center items-center flex">
                  {/* SVG removed */}
                  <span className="px-2 py-px text-blue-600 text-base font-semibold leading-relaxed">
                    Contact Us
                  </span>
                </button>
                <button className="sm:w-fit w-full px-5 py-2.5 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 hover:border-gray-50 transition-all duration-700 ease-in-out justify-center items-center flex">
                  <span className="px-2 text-white text-base font-semibold leading-relaxed">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
            <div className="2xl:col-span-4 lg:col-span-5 col-span-12 h-full lg:py-16 py-10 lg:rounded-r-3xl lg:rounded-b-none rounded-b-3xl bg-blue-500 justify-center items-center gap-[6.79px] flex">
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1719299373.png"
                alt="Mobile mockup image"
              />
            </div>
            <div className="2xl:col-span-1 2xl:grid hidden" />
          </div>
        </div>
      </section>
    </div>
  );
}
