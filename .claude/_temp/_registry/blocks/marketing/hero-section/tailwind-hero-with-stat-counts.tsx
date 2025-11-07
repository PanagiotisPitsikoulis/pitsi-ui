export default function TailwindHeroWithStatCounts() {
  return (
    <div className="bg-sky-50">
      <nav className="pt-6 pb-5 lg:fixed w-full transition-all z-50 duration-500">
        <div className="mx-auto max-w-7xl lg:px-8 sm:px-6 px-4">
          <div className="w-full flex flex-col lg:flex-row py-3 lg:px-8 px-4 bg-white lg:rounded-full rounded-xl">
            <div className="flex justify-between lg:flex-row">
              <a
                href="
        https://pagedone.io/"
                className="flex items-center"
              >
                {/* SVG removed */}
              </a>
              <div className="flex items-center justify-end gap-5 relative">
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
              className="hidden w-full lg:flex xl:pl-11 lg:pl-8 max-lg:mt-1 max-lg:overflow-y-auto"
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
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-gray-500 font-medium transition-all duration-500 hover:text-indigo-600 whitespace-nowrap"
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
              <div className="flex lg:items-center w-full justify-start flex-col lg:flex-row gap-5 lg:w-max max-lg:gap-5 xl:ml-14 lg:ml-10 lg:justify-end">
                <div className="w-fit dropdown relative items-center flex px-1.5 py-0.5 bg-gray-100 rounded-full gap-1 h-[22px] ">
                  <a className="absolute z-10 top-1 mr-1">
                    {/* SVG removed */}
                  </a>
                  <select
                    id="countries"
                    className="focus:outline-none placeholder-gray-400 text-gray-700 bg-gray-100 rounded-full pl-4 text-xs font-medium justify-start items-center gap-2 inline-flex
              h-[22px] w-[59px]"
                  >
                    <option value={1} selected>
                      IN
                    </option>
                    <option value={2}>UK</option>
                    <option value={3}>US</option>
                    <option value={4}>UAE</option>
                  </select>
                </div>
                <button className="flex items-center justify-center bg-blue-500 rounded-full cursor-pointer shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out py-2 px-3.5 hover:bg-blue-600">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Contact Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full">
        <div className="mx-auto max-w-7xl lg:px-8 sm:px-6 px-4">
          <div className="w-full lg:pt-[152px] pt-8 justify-start items-center grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-24 gap-12 inline-flex lg:pb-10">
              <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-12 gap-9 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-5xl font-bold font-manrope leading-snug lg:text-start text-center">
                    Your Journey to Better Health Starts Here
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    At Trinity Care Clinic, we are dedicated to providing
                    exceptional medical services with a compassionate touch. Our
                    team of experienced professionals is here to ensure your
                    well-being and recovery.
                  </p>
                </div>
                <button className="sm:w-fit w-full px-5 py-2.5 bg-blue-500 hover:bg-blue-600 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    Book an Appointment
                  </span>
                </button>
              </div>
              <div className="w-full justify-start lg:items-start items-center gap-4 grid sm:grid-cols-3 grid-cols-1">
                <div className="px-5 py-4 bg-white rounded-xl flex-col justify-start items-center gap-2 inline-flex">
                  <h3 className="text-center text-gray-900 text-2xl font-bold font-manrope leading-9">
                    90%
                  </h3>
                  <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed whitespace-nowrap">
                    Patient Satisfaction
                  </h6>
                </div>
                <div className="p-4 bg-white rounded-xl flex-col justify-start items-center gap-2 inline-flex">
                  <h3 className="text-center text-gray-900 text-2xl font-bold font-manrope leading-9">
                    50k+
                  </h3>
                  <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed whitespace-nowrap">
                    Specialist Doctor
                  </h6>
                </div>
                <div className="p-4 bg-white rounded-xl flex-col justify-start items-center gap-2 inline-flex">
                  <h3 className="text-center text-gray-900 text-2xl font-bold font-manrope leading-9">
                    95%
                  </h3>
                  <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed whitespace-nowrap">
                    Our Success
                  </h6>
                </div>
              </div>
            </div>
            <img
              className="w-full lg:h-full md:h-[750px] h-[600px] object-cover"
              src="https://pagedone.io/asset/uploads/1719311026.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
