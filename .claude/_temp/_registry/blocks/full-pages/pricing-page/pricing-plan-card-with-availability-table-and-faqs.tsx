export default function PricingPlanCardWithAvailabilityTableAndFaqs() {
  return (
    <div>
      <nav className="py-5 transition-all duration-500 w-full bg-white border-b border-solid border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex justify-between lg:flex-row">
              <a href="#" className="flex items-center"></a>
              <button
                data-collapse-toggle="navbar-default"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden w-full lg:flex lg:pl-11" id="navbar-default">
              <ul className="lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row lg:ml-auto">
                <li>
                  <a
                    href="javascript:;"
                    className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0"
                  >
                    Products
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="megamenu"
                    aria-labelledby="megamenu"
                    className="animate-fade z-10 absolute top-14 -left-80 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full open hidden"
                  >
                    <div className="flex justify-between">
                      <ul className="text-sm text-gray-700 w-1/2">
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                          >
                            <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                            <div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                            <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                        className="text-sm text-gray-700 dark:text-gray-400 w-1/2"
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
                            <div className="bg-rose-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                            <div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                            <div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                      data-target="dropdown-default"
                      className="dropdown-toggle flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0"
                    >
                      Features
                    </button>
                    <div
                      id="dropdown-default"
                      className="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full w-72 mt-2 hidden"
                      aria-labelledby="dropdown-default"
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
              <div className="flex items-center ml-5 justify-center">
                <button className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                  Login
                </button>
                <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm md:ml-5 hover:bg-indigo-700">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-manrope font-bold text-5xl text-gray-900 text-center mb-4">
            Choose your plan
          </h1>
          <p className="font-normal text-base leading-7 text-gray-500 mb-8 text-center">
            7 Days free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center gap-4 mb-20">
            <p className="font-medium text-xl leading-8 text-gray-900">
              Pay Monthly
            </p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700" />
            </label>
            <p className="font-normal text-xl leading-8 text-gray-500">
              Pay Yearly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-8 max-w-lg md:max-w-3xl lg:max-w-full mx-auto">
            <div className="starter group rounded-2xl border bg-white border-gray-300 py-9 px-5 xl:px-8 flex flex-col justify-between transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600">
              <div className="data">
                <h6 className="font-semibold text-base leading-7 text-indigo-600 mb-3 group-hover:text-white">
                  Free
                </h6>
                <h4 className="font-manrope font-bold text-4xl text-gray-900 leading-tight flex items-center gap-3 mb-9 group-hover:text-white">
                  $0
                  <span className="font-normal text-xl leading-8 text-gray-500 group-hover:text-gray-300">
                    | Month
                  </span>
                </h4>
                <button className="py-3 px-6 w-full mb-9 text-center rounded-full bg-indigo-600 shadow-sm shadow-indigo-100 mt-auto relative bottom-0 transition-all duration-500 group-hover:bg-white">
                  <span className="px-2 font-semibold text-base text-white group-hover:text-indigo-600">
                    Get Started
                  </span>
                </button>

                <div className="hidden lg:flex items-center gap-3 mb-6">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Full Text log search
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-3 mb-6">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Basic alarms
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-3">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Community support
                  </span>
                </div>
              </div>
              <div className="card-data block lg:hidden">
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Core features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Total Limit
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Transaction fee
                    </p>
                    <p className="font-normal text-sm text-indigo-600 group-hover:text-white">
                      2.9% +AED 1
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="font-normal text-sm text-indigo-600 group-hover:text-white">
                      + 2%
                    </p>
                  </li>
                  <li className="hidden md:flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      -
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Settlement options
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Day of week fee
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Day of Month fee
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Added features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Secure payment
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Apply tax rate
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Multi-currency
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Auto exchange rate
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="starter group rounded-2xl border bg-white border-gray-300 py-9 px-5 xl:px-8 flex flex-col justify-between transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600">
              <div className="data w-full">
                <h6 className="font-semibold text-base leading-7 text-indigo-600 mb-3 group-hover:text-white">
                  Starter
                </h6>
                <h4 className="font-manrope font-bold text-4xl text-gray-900 leading-tight flex items-center gap-3 mb-9 group-hover:text-white">
                  $48
                  <span className="font-normal text-xl leading-8 text-gray-500 group-hover:text-gray-300">
                    | Month
                  </span>
                </h4>
                <button className="py-3 px-4 w-full mb-9 text-center rounded-full bg-indigo-600 shadow-sm whitespace-nowrap shadow-indigo-100 mt-auto relative bottom-0 transition-all duration-500 group-hover:bg-white">
                  <span className="px-2 font-semibold text-base text-white group-hover:text-indigo-600">
                    Try Free for 14 days
                  </span>
                </button>

                <div className="hidden lg:flex items-center gap-3 mb-6">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Unlimited AWS acounts
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-3 mb-6">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Unlimited invocations
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-3 mb-6">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Advanced Alarms
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-3 mb-6">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Email support
                  </span>
                </div>
              </div>
              <div className="card-data block lg:hidden">
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Core features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Total Limit
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Transaction fee
                    </p>
                    <p className="font-normal text-sm text-indigo-600 group-hover:text-white">
                      2.7% +AED 0.9
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="font-normal text-sm text-indigo-600 group-hover:text-white">
                      + 1.8%
                    </p>
                  </li>
                  <li className="hidden md:flex items-center justify-between pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      -
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Settlement options
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Day of week fee
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Day of Month fee
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Added features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Secure payment
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Apply tax rate
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Multi-currency
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Auto exchange rate
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="starter group rounded-2xl border bg-white border-gray-300 py-9 px-5 xl:px-8 flex flex-col justify-between transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600">
              <div className="data">
                <h6 className="font-semibold text-base leading-7 text-indigo-600 mb-3 group-hover:text-white">
                  Pro
                </h6>
                <h4 className="font-manrope font-bold text-4xl text-gray-900 leading-tight flex items-center gap-3 mb-9 group-hover:text-white">
                  $250
                  <span className="font-normal text-xl leading-8 text-gray-500 group-hover:text-gray-300">
                    | Month
                  </span>
                </h4>
                <button className="py-3 px-4 w-full mb-9 text-center rounded-full bg-indigo-600 whitespace-nowrap shadow-sm shadow-indigo-100 mt-auto relative bottom-0 transition-all duration-500 group-hover:bg-white">
                  <span className="px-2 font-semibold text-base text-white group-hover:text-indigo-600">
                    Try Free for 14 days
                  </span>
                </button>

                <div className="hidden lg:flex items-center gap-3 mb-6">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Smart Insights
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-3 mb-6">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Premium notification channels
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-3">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Email &amp; Chat support
                  </span>
                </div>
              </div>
              <div className="card-data block lg:hidden">
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Core features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Total Limit
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Transaction fee
                    </p>
                    <p className="font-normal text-sm text-indigo-600 group-hover:text-white">
                      2.5% +AED 0.5
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="font-normal text-sm text-indigo-600 group-hover:text-white">
                      + 1.5%
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Settlement options
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Day of week fee
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Day of Month fee
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Added features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Secure payment
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Apply tax rate
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Multi-currency
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Auto exchange rate
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="starter group rounded-2xl border bg-white border-gray-300 py-9 px-5 xl:px-8 flex flex-col justify-between transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600">
              <div className="data">
                <h6 className="font-semibold text-base leading-7 text-indigo-600 mb-3 group-hover:text-white">
                  Enterprise
                </h6>
                <h4 className="font-manrope font-bold text-4xl text-gray-900 leading-tight flex items-center gap-3 mb-9 group-hover:text-white">
                  Custom
                </h4>
                <button className="py-3 px-6 w-full mb-9 text-center rounded-full whitespace-nowrap bg-indigo-600 shadow-sm shadow-indigo-100 mt-auto relative bottom-0 transition-all duration-500 group-hover:bg-white">
                  <span className="px-2 font-semibold text-base text-white group-hover:text-indigo-600">
                    contact sales
                  </span>
                </button>

                <div className="hidden lg:flex items-center gap-3 mb-6">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Dedicated acccount manager
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-3 mb-6">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Integration support
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-3">
                  <span className="font-normal text-base leading-7 text-gray-800 group-hover:text-white">
                    Email &amp; Chat support
                  </span>
                </div>
              </div>
              <div className="card-data block lg:hidden">
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Core features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Total Limit
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Transaction fee
                    </p>
                    <p className="font-normal text-sm text-indigo-600 group-hover:text-white">
                      2.3% +AED 0.3
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="font-normal text-sm text-indigo-600 group-hover:text-white">
                      + 1%
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Settlement options
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Day of week fee
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Day of Month fee
                    </p>
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope font-semibold text-2xl md:text-3xl text-black mb-3 md:mb-7 bg-transparent group-hover:text-white md:py-3">
                  Added features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Secure payment
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Apply tax rate
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Multi-currency
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="font-normal text-sm text-gray-900 group-hover:text-white">
                      Auto exchange rate
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-14 lg:pb-24 relative hidden lg:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-3xl text-black text-center mb-12 hidden lg:block">
            Compare Plans
          </h2>
          <div className="main-table">
            <table className="table-auto w-full mb-12">
              <thead>
                <tr className="bg-gray-50">
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[270px] pl-5">
                    Core features
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Free
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Starter
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Pro
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7 pl-5">
                    Total Limit
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Unlimited
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Unlimited
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Unlimited
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7 pl-5">
                    Transaction fee
                  </td>
                  <td className="font-normal text-sm leading-6 text-indigo-600 pt-7">
                    2.9% +AED 1
                  </td>
                  <td className="font-normal text-sm leading-6 text-indigo-600 pt-7">
                    2.7% +AED 0.9
                  </td>
                  <td className="font-normal text-sm leading-6 text-indigo-600 pt-7">
                    2.5% +AED 0.5
                  </td>
                  <td className="font-normal text-sm leading-6 text-indigo-600 pt-7">
                    2.3% +AED 0.3
                  </td>
                </tr>
                <tr>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7 pl-5">
                    Receie payment in USD
                  </td>
                  <td className="font-normal text-sm leading-6 text-indigo-600 pt-7">
                    + 2%
                  </td>
                  <td className="font-normal text-sm leading-6 text-indigo-600 pt-7">
                    + 1.8%
                  </td>
                  <td className="font-normal text-sm leading-6 text-indigo-600 pt-7">
                    + 1.5%
                  </td>
                  <td className="font-normal text-sm leading-6 text-indigo-600 pt-7">
                    + 1%
                  </td>
                </tr>
                <tr>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7 pl-5">
                    Disbursement Fee
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    -
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    -
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Free
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Free
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table-auto w-full mb-12">
              <thead>
                <tr className="bg-gray-50">
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[270px] pl-5">
                    Settlement options
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Free
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Starter
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Pro
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7 pl-5">
                    Day of week fee
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Free
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Free
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Free
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Free
                  </td>
                </tr>
                <tr>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7 pl-5">
                    Day of Month fee
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Free
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Free
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Free
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7">
                    Free
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[270px] pl-5">
                    Core features
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Free
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Starter
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Pro
                  </th>
                  <th className="font-normal text-sm leading-6 text-gray-600 py-4 text-left w-[240px]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7 pl-5">
                    Secure payment
                  </td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7"></td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7"></td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7"></td>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7"></td>
                </tr>
                <tr>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7 pl-5">
                    Transaction fee
                  </td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                </tr>
                <tr>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7 pl-5">
                    Transaction fee
                  </td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                </tr>
                <tr>
                  <td className="font-normal text-sm leading-6 text-gray-900 pt-7 pl-5">
                    Transaction fee
                  </td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="pb-14 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-5 md:py-16 lg:py-20 rounded-2xl max-lg:max-w-3xl max-lg:mx-auto">
            <div className="mb-16">
              <h6 className="text-base text-indigo-600 font-medium mb-2">
                HOW TO GET STARTED
              </h6>
              <h2 className="text-4xl font-manrope font-bold text-gray-900 leading-[3.25rem]">
                Frequently asked questions
              </h2>
            </div>
            <div className="flex flex-col justify-center lg:flex-row gap-8 lg:justify-between lg:gap-14 xl:gap-20">
              <div className="w-full lg:w-52 border-solid border-gray-200 border-b border-r-0 lg:border-r lg:border-b-0">
                <nav className="flex items-center overflow-x-auto lg:block gap-5">
                  <a
                    href="javascript:;"
                    className="group flex items-center py-5 lg:py-0 lg:mb-10 gap-2 text-lg font-medium text-gray-500 transition-all duration-500 w-full whitespace-nowrap hover:text-indigo-600 active:text-indigo-600"
                    data-tab="#tabs-with-icon-1"
                    aria-controls="tabs-with-icon-1"
                    role="tab"
                  >
                    <span></span>
                    General
                  </a>
                  <a
                    href="javascript:;"
                    className="group flex items-center py-5 lg:py-0 lg:mb-10 gap-2 text-lg font-medium text-gray-500 transition-all duration-500 w-full whitespace-nowrap hover:text-indigo-600 active:text-indigo-600"
                    data-tab="#tabs-with-icon-2"
                    aria-controls="tabs-with-icon-2"
                    role="tab"
                  >
                    <span></span>
                    Support
                  </a>
                  <a
                    href="javascript:;"
                    className="group flex items-center py-5 lg:py-0 lg:mb-10 gap-2 text-lg font-medium text-gray-500 transition-all duration-500 w-full whitespace-nowrap hover:text-indigo-600 active:text-indigo-600"
                    data-tab="#tabs-with-icon-3"
                    aria-controls="tabs-with-icon-3"
                    role="tab"
                  >
                    <span></span>
                    Others
                  </a>
                </nav>
              </div>
              <div className="w-full">
                <div id="tabs-with-icon-1" role="tabpanel">
                  <div
                    className="accordion-group"
                    data-accordion="default-accordion"
                  >
                    <div
                      className="accordion pb-4 border-b border-solid border-gray-200 active"
                      id="basic-heading-one-default"
                    >
                      <button
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                        aria-controls="basic-collapse-one-default"
                      >
                        <h5>How to create an account?</h5>
                      </button>
                      <div
                        id="basic-collapse-one-default"
                        className="accordion-content w-full px-0 overflow-hidden pr-4"
                        aria-labelledby="basic-heading-one-default"
                      >
                        <p className="text-base text-gray-600 leading-6">
                          To create an account, find the 'Sign up' or 'Create
                          account' button, fill out the registration form with
                          your personal information, and click 'Create account'
                          or 'Sign up.' Verify your email address if needed, and
                          then log in to start using the platform.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion py-4 border-b border-solid border-gray-200"
                      id="basic-heading-two-default"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-two-default"
                      >
                        <h5>Have any trust issue?</h5>
                      </button>
                      <div
                        id="basic-collapse-two-default"
                        className="accordion-content w-full px-0 overflow-hidden pr-4"
                        aria-labelledby="basic-heading-two-default"
                      >
                        <p className="text-sm text-gray-500 leading-6">
                          Our focus on providing robust and user-friendly
                          content management capabilities ensures that you can
                          manage your content with confidence, and achieve your
                          content marketing goals with ease.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion py-4 border-b border-solid border-gray-200"
                      id="basic-heading-three-default"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-three-default"
                      >
                        <h5>How can I reset my password?</h5>
                      </button>
                      <div
                        id="basic-collapse-three-default"
                        className="accordion-content w-full px-0 overflow-hidden pr-4"
                        aria-labelledby="basic-heading-three-default"
                      >
                        <p className="text-sm text-gray-500 leading-6">
                          Our focus on providing robust and user-friendly
                          content management capabilities ensures that you can
                          manage your content with confidence, and achieve your
                          content marketing goals with ease.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tabs-with-icon-2" role="tabpanel" className="hidden">
                  <div className="accordion-group">
                    <div
                      className="accordion pb-12 transition-all duration-500"
                      id="basic-heading-one-with-arrow-2"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-lg leading-8 text-gray-900 font-medium w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-one-with-arrow-2"
                      >
                        <h5>How to create an account?</h5>
                      </button>
                      <div
                        id="basic-collapse-one-with-arrow-2"
                        className="accordion-content w-full px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                        aria-labelledby="basic-heading-one-with-arrow-2"
                      >
                        <p className="text-sm text-gray-500 leading-6">
                          To reset your password, go to the login page and click
                          on the "Forgot password" link. Enter the email address
                          associated with your account, and you will receive an
                          email with instructions on how to reset your password.
                          Follow the instructions in the email to create a new
                          password.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion pb-12 transition-all duration-500"
                      id="basic-heading-two-with-arrow-2"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-lg leading-8 text-gray-900 font-medium w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-two-with-arrow-2"
                      >
                        <h5>Have any trust issue?</h5>
                      </button>
                      <div
                        id="basic-collapse-two-with-arrow-2"
                        className="accordion-content w-full px-0 hidden overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                        aria-labelledby="basic-heading-two-with-arrow-2"
                      >
                        <p className="text-sm text-gray-500 leading-6">
                          To reset your password, go to the login page and click
                          on the "Forgot password" link. Enter the email address
                          associated with your account, and you will receive an
                          email with instructions on how to reset your password.
                          Follow the instructions in the email to create a new
                          password.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion pb-12 transition-all duration-500"
                      id="basic-heading-three-with-arrow-2"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-lg leading-8 text-gray-900 font-medium w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-three-with-arrow-2"
                      >
                        <h5>How can I reset my password?</h5>
                      </button>
                      <div
                        id="basic-collapse-three-with-arrow-2"
                        className="accordion-content w-full px-0 hidden overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                        aria-labelledby="basic-heading-three-with-arrow-2"
                      >
                        <p className="text-sm text-gray-500 leading-6">
                          To reset your password, go to the login page and click
                          on the "Forgot password" link. Enter the email address
                          associated with your account, and you will receive an
                          email with instructions on how to reset your password.
                          Follow the instructions in the email to create a new
                          password.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion transition-all duration-500"
                      id="basic-heading-four-with-arrow-2"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-lg leading-8 text-gray-900 font-medium w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-four-with-arrow-2"
                      >
                        <h5>What is the payment process?</h5>
                      </button>
                      <div
                        id="basic-collapse-four-with-arrow-2"
                        className="accordion-content w-full px-0 hidden overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                        aria-labelledby="basic-heading-four-with-arrow-2"
                      >
                        <p className="text-sm text-gray-500 leading-6">
                          To reset your password, go to the login page and click
                          on the "Forgot password" link. Enter the email address
                          associated with your account, and you will receive an
                          email with instructions on how to reset your password.
                          Follow the instructions in the email to create a new
                          password.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tabs-with-icon-3" role="tabpanel" className="hidden">
                  <div className="accordion-group">
                    <div
                      className="accordion pb-12 transition-all duration-500"
                      id="basic-heading-one-with-arrow-3"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-lg leading-8 text-gray-900 font-medium w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-one-with-arrow-3"
                      >
                        <h5>How to create an account?</h5>
                      </button>
                      <div
                        id="basic-collapse-one-with-arrow-3"
                        className="accordion-content w-full px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                        aria-labelledby="basic-heading-one-with-arrow-3"
                      >
                        <p className="text-sm text-gray-500 leading-6">
                          To reset your password, go to the login page and click
                          on the "Forgot password" link. Enter the email address
                          associated with your account, and you will receive an
                          email with instructions on how to reset your password.
                          Follow the instructions in the email to create a new
                          password.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion pb-12 transition-all duration-500"
                      id="basic-heading-two-with-arrow-3"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-lg leading-8 text-gray-900 font-medium w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-two-with-arrow-3"
                      >
                        <h5>Have any trust issue?</h5>
                      </button>
                      <div
                        id="basic-collapse-two-with-arrow-3"
                        className="accordion-content w-full px-0 hidden overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                        aria-labelledby="basic-heading-two-with-arrow-3"
                      >
                        <p className="text-sm text-gray-500 leading-6">
                          To reset your password, go to the login page and click
                          on the "Forgot password" link. Enter the email address
                          associated with your account, and you will receive an
                          email with instructions on how to reset your password.
                          Follow the instructions in the email to create a new
                          password.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion pb-12 transition-all duration-500"
                      id="basic-heading-three-with-arrow-3"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-lg leading-8 text-gray-900 font-medium w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-three-with-arrow-3"
                      >
                        <h5>How can I reset my password?</h5>
                      </button>
                      <div
                        id="basic-collapse-three-with-arrow-3"
                        className="accordion-content w-full px-0 hidden overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                        aria-labelledby="basic-heading-three-with-arrow-3"
                      >
                        <p className="text-sm text-gray-500 leading-6">
                          To reset your password, go to the login page and click
                          on the "Forgot password" link. Enter the email address
                          associated with your account, and you will receive an
                          email with instructions on how to reset your password.
                          Follow the instructions in the email to create a new
                          password.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion transition-all duration-500"
                      id="basic-heading-four-with-arrow-3"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-lg leading-8 text-gray-900 font-medium w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-four-with-arrow-3"
                      >
                        <h5>What is the payment process?</h5>
                      </button>
                      <div
                        id="basic-collapse-four-with-arrow-3"
                        className="accordion-content w-full px-0 hidden overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                        aria-labelledby="basic-heading-four-with-arrow-3"
                      >
                        <p className="text-sm text-gray-500 leading-6">
                          To reset your password, go to the login page and click
                          on the "Forgot password" link. Enter the email address
                          associated with your account, and you will receive an
                          email with instructions on how to reset your password.
                          Follow the instructions in the email to create a new
                          password.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-10 max-w-md mx-auto md:max-w-3xl lg:max-w-full">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a
                href="javascript:;"
                className="flex justify-center lg:justify-start"
              ></a>
              <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                Trusted in more than 100 countries &amp; 5 million customers.
                Have any query ?
              </p>
              <a
                href="javascript:;"
                className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
              >
                Contact us
              </a>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Pagedone
              </h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Products
              </h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Figma UI System
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Components Library
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Resources
              </h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    FAQs
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Quick Start
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    User Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    News
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Tips &amp; Tricks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    New Updates
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Grid*/}
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row gap-4">
              <span className="text-sm text-gray-500">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
