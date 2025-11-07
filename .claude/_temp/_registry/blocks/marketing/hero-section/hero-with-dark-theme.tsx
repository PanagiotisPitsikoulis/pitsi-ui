export default function HeroWithDarkTheme() {
  return (
    <div>
      <nav className="py-5 transition-all duration-500 w-full bg-transparent border-b border-solid border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
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
            <div className="hidden w-full lg:flex lg:pl-11" id="navbar">
              <ul className="flex max-lg:gap-4 max-lg:py-4 max-lg:mt-1 lg:items-center flex-col mt-4 lg:mt-0 lg:flex-row ml-auto">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-white"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-white text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    aria-labelledby="menu1"
                    className="animate-fade z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 lg:-left-80 bg-gray-800 rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <ul
                        className="text-sm text-gray-100 md:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-sm text-gray-50 mb-2">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 group transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                          >
                            <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
                                Notification
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
                                Real time notification always keep you up to
                                date in realtime
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 group hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
                                Analytics
                                <span className="bg-indigo-50 text-indigo-500 text-xs font-medium mr-2 px-2.5 py-1 rounded-full h-5 ml-4">
                                  New
                                </span>
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
                                Analyze data to make more informed and accurate
                                business decision
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 group hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
                                Integrations
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
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
                            className="px-3 py-5 group hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-rose-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
                                Security
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
                                To ensure your privacy all information are
                                highly encrypted
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 group hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
                                Documentation
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
                                Organized documentation will help you save tone
                                of your time
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 group hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
                                Support
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
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
                    className="dropdown-toggle flex items-center justify-between text-white text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0"
                  >
                    Features
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    aria-labelledby="menu2"
                    className="dropdown-menu z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 font-normal bg-gray-800 rounded-lg shadow-md shadow-gray-700 w-64 xl:p-8 lg:p-4 p-2 hidden"
                  >
                    <ul
                      className="text-sm text-gray-100"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <h6 className="text-sm text-gray-50 font-medium mb-2">
                        Features
                      </h6>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Notification
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col lg:flex-row lg:items-center ml-auto lg:justify-center max-lg:gap-4">
                <button className="py-2.5 px-5 text-xs rounded-full shadow-xs border border-white font-semibold text-white transition-all duration-500 hover:text-gray-900 hover:bg-white">
                  Login
                </button>
                <button className="py-2.5 px-5 text-xs bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700 lg:ml-5">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative py-5 lg:py-20 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative mb-14">
            <h1 className="max-w-none mx-auto text-center font-manrope font-bold text-5xl text-white lg:max-w-3xl">
              Make Your Payment Transaction Easy And
              <span className="text-indigo-600">Professional </span>
            </h1>
            <p className="max-w-none mx-auto text-center text-base font-normal leading-7 text-gray-400 my-9 lg:max-w-xl">
              Trusted In More Than 100 Countries And 5 Million Customers.
              Transact Easily And Quickly With Just One Click.
            </p>
            <div className="flex items-center justify-center flex-col gap-10 md:flex-row">
              <div className="flex items-center gap-2 text-white text-xl font-semibold">
                {/* SVG removed */}
                Licensed and Secured
              </div>
              <div className="flex items-center gap-2 text-white text-xl font-semibold">
                {/* SVG removed */}
                Less Transaction Cost
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <a
                href="javascript:;"
                className="w-full md:w-auto inline-flex items-center justify-center py-4 px-8 text-lg font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
              >
                Free Registration
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center translate-y-16 lg:translate-y-32">
            <img
              src="https://pagedone.io/asset/uploads/1694847867.png"
              alt="John doe card image"
              className="w-2/5 rotate-45 translate-x-20 max-w-sm lg:w-auto md:translate-x-28 object-cover"
            />
            <img
              src="https://pagedone.io/asset/uploads/1694847836.png"
              alt="John doe card image"
              className="w-2/5 rotate-45 max-w-sm lg:w-auto object-cover"
            />
            <img
              src="https://pagedone.io/asset/uploads/1694847849.png"
              alt="John doe card image"
              className="w-2/5 rotate-45 -translate-x-20 max-w-sm lg:w-auto md:-translate-x-28 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
