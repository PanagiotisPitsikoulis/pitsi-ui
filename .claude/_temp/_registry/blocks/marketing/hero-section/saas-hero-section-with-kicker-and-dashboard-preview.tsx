export default function SaasHeroSectionWithKickerAndDashboardPreview() {
  return (
    <div>
      <nav
        className="py-5 border-b-default border-solid border-gray-200 z-10 w-full bg-inherit lg:fixed"
        id="topnav"
      >
        <div className="mx-auto max-w-7xl  lg:px-8">
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
              className="hidden w-full lg:flex justify-between max-lg:bg-white py-5 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200 "
              id="navbar"
            >
              <ul className="flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row">
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 lg:mr-6 lg:mb-0 mr-auto lg:text-left  lg:m-0 hover:text-gray-900"
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
                <li className="relative">
                  <div className="dropdown relative inline-flex">
                    <button
                      data-target="dropdown-feature"
                      className="dropdown-toggle flex items-center justify-between text-gray-500 text-sm max-lg:h-max text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
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
              <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
                <button className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                  Login
                </button>
                <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-700">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
            <span className="font-inter text-xs font-medium text-gray-900 ml-3">
              Explore how to use for brands.
            </span>
            <a
              href="javascript:;"
              className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
            >
              {/* SVG removed */}
            </a>
          </div>
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
            Control your Finances with our
            <span className="text-indigo-600">Smart Tool </span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Invest intelligently and discover a better way to manage your entire
            wealth easily.
          </p>
          <a
            href="javascript:;"
            className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
          >
            Create an account
            {/* SVG removed */}
          </a>
          <div className="flex justify-center">
            <img
              src="https://pagedone.io/asset/uploads/1691054543.png"
              alt="Dashboard image"
              className="rounded-t-3xl h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
