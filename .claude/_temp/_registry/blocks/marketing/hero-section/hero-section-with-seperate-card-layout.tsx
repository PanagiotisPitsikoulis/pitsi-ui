export default function HeroSectionWithSeperateCardLayout() {
  return (
    <div className="w-full lg:p-10 p-5 bg-white">
      <nav className="pt-2.5 lg:fixed left-0 w-full lg:bg-transparent bg-indigo-400 relative z-50 lg:rounded-none rounded-3xl">
        <div className="py-5">
          <div className="mx-auto px-8 sm:px-6 2xl:px-20 xl:px-[72px] lg:px-14">
            <div className="w-full flex justify-between flex-col lg:flex-row">
              <div className="flex justify-between lg:flex-row">
                <a href="https://pagedone.io/" className="flex items-center">
                  {/* SVG removed */}
                </a>
                <button
                  data-collapse-toggle="navbar"
                  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* SVG removed */}
                </button>
              </div>
              <div
                className="hidden w-full lg:flex lg:justify-end max-lg:mt-1"
                id="navbar"
              >
                <ul className="flex lg:items-center flex-col gap-6 max-lg:pt-4 max-lg:mb-4 lg:mt-0 lg:flex-row 2xl:ml-96 xl:ml-[350px] lg:ml-20">
                  <li className="xl:px-1.5">
                    <a
                      href="javascript:;"
                      className="nav-link block lg:text-left xl:px-1.5 text-base lg:text-gray-500 text-white font-medium transition-all duration-500 hover:text-gray-900"
                    >
                      Home
                    </a>
                  </li>
                  <li className="xl:px-1.5">
                    <a
                      href="javascript:;"
                      className="nav-link block lg:text-left xl:px-1.5 lg:text-gray-500 text-white text-base font-medium transition-all duration-500 hover:text-gray-900"
                    >
                      About us
                    </a>
                  </li>
                  <li className="relative xl:px-1.5">
                    <button
                      data-target="menu1"
                      className="dropdown-toggle flex items-center xl:pl-1.5 justify-between lg:text-gray-500 text-white text-center text-base font-medium transition-all duration-500  lg:text-left hover:text-gray-900"
                    >
                      Products
                      {/* SVG removed */}
                    </button>
                    {/* Dropdown menu */}
                    <div
                      id="menu1"
                      aria-labelledby="menu1"
                      className="animate-fade z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 lg:-left-80 bg-white rounded-lg shadow-lg max-lg:shadow-inner shadow-gray-200 xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
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
                                  Analyze data to make more informed and
                                  accurate business decision
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
                                  Organized documentation will help you save
                                  tone of your time
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
                                  Need help? our customer support is here to
                                  help you anytime
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="relative xl:px-1.5">
                    <button
                      data-target="menu2"
                      className="dropdown-toggle flex items-center justify-between xl:pl-1.5 lg:text-gray-500 text-white text-center text-base font-medium transition-all duration-500 lg:text-left hover:text-gray-900"
                    >
                      Features
                      {/* SVG removed */}
                    </button>
                    {/* Dropdown menu */}
                    <div
                      id="menu2"
                      aria-labelledby="menu2"
                      className="dropdown-menu z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 font-normal bg-white rounded-lg shadow-md shadow-gray-200 w-64 xl:p-8 lg:p-4 p-2 hidden"
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
                <div className="flex lg:items-center justify-start flex-col lg:flex-row 2xl:ml-10 lg:ml-5 lg:justify-end">
                  <button className="lg:bg-indigo-400 bg-indigo-500 rounded-full cursor-pointer text-center transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] py-2 px-3.5 lg:hover:bg-indigo-500 hover:bg-indigo-600">
                    <span className="px-1.5 text-white text-sm font-medium leading-6">
                      Sign up
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className=" mx-auto justify-start items-start gap-8 grid lg:grid-cols-2 lg:-translate-y-0 -translate-y-24">
        <div className="lg:pr-10 pr-5 pt-2.5 pb-10 bg-indigo-400 rounded-3xl flex-col justify-center items-start inline-flex lg:h-full">
          <div className="lg:pl-10 pl-5 flex-col justify-start items-start lg:gap-20 gap-10 lg:pt-48 pt-28 flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <h2 className="xl:max-w-xl w-full text-white text-5xl font-semibold font-manrope leading-snug">
                Welcome to Your Pet's Happy Place
              </h2>
              <p className="xl:max-w-xl w-full text-white text-base font-normal leading-relaxed">
                Discover a range of products and services designed to keep your
                pets healthy, happy, and well-loved. Join our community of
                passionate pet owners today!
              </p>
            </div>
            <button className="sm:w-fit w-full px-6 py-3 bg-amber-200 hover:bg-amber-400 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 text-black text-lg font-semibold leading-8">
                Learn More
              </span>
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <div className="pt-2.5 bg-amber-200 rounded-3xl flex-col justify-end items-center inline-flex lg:h-full">
          <img
            className="xl:pt-32 pt-5 object-cover"
            src="https://pagedone.io/asset/uploads/1719293693.png"
          />
        </div>
      </div>
    </div>
  );
}
