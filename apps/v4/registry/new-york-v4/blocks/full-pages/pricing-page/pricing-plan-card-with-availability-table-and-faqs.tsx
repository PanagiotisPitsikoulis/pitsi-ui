export default function PricingPlanCardWithAvailabilityTableAndFaqs() {
  return (
    <div>
      <nav className="w-full border-b border-solid border-gray-200 bg-white py-5 transition-all duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex justify-between lg:flex-row">
              <a href="#" className="flex items-center"></a>
              <button
                data-collapse-toggle="navbar-default"
                className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden w-full lg:flex lg:pl-11" id="navbar-default">
              <ul className="mt-4 flex-col items-center lg:mt-0 lg:ml-auto lg:flex lg:flex-row">
                <li>
                  <a
                    href="javascript:;"
                    className="m-auto mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="m-auto mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle hover:text-prime-blue-700 m-auto mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-500 transition-all duration-500 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                  >
                    Products
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="megamenu"
                    aria-labelledby="megamenu"
                    className="animate-fade open absolute top-14 -left-80 z-10 hidden min-w-full rounded-lg bg-white p-2 shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] md:min-w-[500px] lg:min-w-[800px] lg:p-4 xl:p-8"
                  >
                    <div className="flex justify-between">
                      <ul className="w-1/2 text-sm text-gray-700">
                        <h6 className="mb-2 text-sm font-medium text-gray-500">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50"></div>
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50"></div>
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50"></div>
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
                        className="w-1/2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="mb-2 text-sm font-medium text-gray-500">
                          Services
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50"></div>
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50"></div>
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50"></div>
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
                <li className="relative">
                  <div className="dropdown relative inline-flex">
                    <button
                      data-target="dropdown-default"
                      className="dropdown-toggle hover:text-prime-blue-700 m-auto mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-500 transition-all duration-500 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                    >
                      Features
                    </button>
                    <div
                      id="dropdown-default"
                      className="dropdown-menu absolute top-full mt-2 hidden w-72 rounded-xl bg-white shadow-lg"
                      aria-labelledby="dropdown-default"
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
              <div className="ml-5 flex items-center justify-center">
                <button className="cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-center text-sm font-semibold text-indigo-600 shadow-xs transition-all duration-500 hover:bg-indigo-100">
                  Login
                </button>
                <button className="cursor-pointer rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 md:ml-5">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-manrope mb-4 text-center text-5xl font-bold text-gray-900">
            Choose your plan
          </h1>
          <p className="mb-8 text-center text-base leading-7 font-normal text-gray-500">
            7 Days free trial. No credit card required.
          </p>
          <div className="mb-20 flex items-center justify-center gap-4">
            <p className="text-xl leading-8 font-medium text-gray-900">
              Pay Monthly
            </p>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <div className="peer h-5 w-9 rounded-full bg-gray-200 transition-all duration-500 ease-in-out peer-checked:bg-indigo-600 peer-focus:ring-transparent peer-focus:outline-0 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white hover:bg-gray-300 hover:peer-checked:bg-indigo-700" />
            </label>
            <p className="text-xl leading-8 font-normal text-gray-500">
              Pay Yearly
            </p>
          </div>
          <div className="mx-auto grid max-w-lg grid-cols-1 gap-5 md:max-w-3xl md:grid-cols-2 lg:max-w-full lg:grid-cols-4 xl:gap-8">
            <div className="starter group flex flex-col justify-between rounded-2xl border border-gray-300 bg-white px-5 py-9 transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600 xl:px-8">
              <div className="data">
                <h6 className="mb-3 text-base leading-7 font-semibold text-indigo-600 group-hover:text-white">
                  Free
                </h6>
                <h4 className="font-manrope mb-9 flex items-center gap-3 text-4xl leading-tight font-bold text-gray-900 group-hover:text-white">
                  $0
                  <span className="text-xl leading-8 font-normal text-gray-500 group-hover:text-gray-300">
                    | Month
                  </span>
                </h4>
                <button className="relative bottom-0 mt-auto mb-9 w-full rounded-full bg-indigo-600 px-6 py-3 text-center shadow-sm shadow-indigo-100 transition-all duration-500 group-hover:bg-white">
                  <span className="px-2 text-base font-semibold text-white group-hover:text-indigo-600">
                    Get Started
                  </span>
                </button>

                <div className="mb-6 hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Full Text log search
                  </span>
                </div>
                <div className="mb-6 hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Basic alarms
                  </span>
                </div>
                <div className="hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Community support
                  </span>
                </div>
              </div>
              <div className="card-data block lg:hidden">
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Core features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Total Limit
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Transaction fee
                    </p>
                    <p className="text-sm font-normal text-indigo-600 group-hover:text-white">
                      2.9% +AED 1
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="text-sm font-normal text-indigo-600 group-hover:text-white">
                      + 2%
                    </p>
                  </li>
                  <li className="hidden items-center justify-between pt-3 md:flex md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      -
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Settlement options
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Day of week fee
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Day of Month fee
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Added features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Secure payment
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between pt-7 md:flex">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Apply tax rate
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between pt-7 md:flex">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Multi-currency
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between pt-7 md:flex">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Auto exchange rate
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="starter group flex flex-col justify-between rounded-2xl border border-gray-300 bg-white px-5 py-9 transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600 xl:px-8">
              <div className="data w-full">
                <h6 className="mb-3 text-base leading-7 font-semibold text-indigo-600 group-hover:text-white">
                  Starter
                </h6>
                <h4 className="font-manrope mb-9 flex items-center gap-3 text-4xl leading-tight font-bold text-gray-900 group-hover:text-white">
                  $48
                  <span className="text-xl leading-8 font-normal text-gray-500 group-hover:text-gray-300">
                    | Month
                  </span>
                </h4>
                <button className="relative bottom-0 mt-auto mb-9 w-full rounded-full bg-indigo-600 px-4 py-3 text-center whitespace-nowrap shadow-sm shadow-indigo-100 transition-all duration-500 group-hover:bg-white">
                  <span className="px-2 text-base font-semibold text-white group-hover:text-indigo-600">
                    Try Free for 14 days
                  </span>
                </button>

                <div className="mb-6 hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Unlimited AWS acounts
                  </span>
                </div>
                <div className="mb-6 hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Unlimited invocations
                  </span>
                </div>
                <div className="mb-6 hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Advanced Alarms
                  </span>
                </div>
                <div className="mb-6 hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Email support
                  </span>
                </div>
              </div>
              <div className="card-data block lg:hidden">
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Core features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Total Limit
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Transaction fee
                    </p>
                    <p className="text-sm font-normal text-indigo-600 group-hover:text-white">
                      2.7% +AED 0.9
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="text-sm font-normal text-indigo-600 group-hover:text-white">
                      + 1.8%
                    </p>
                  </li>
                  <li className="hidden items-center justify-between pt-7 md:flex">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      -
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Settlement options
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Day of week fee
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Day of Month fee
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Added features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Secure payment
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Apply tax rate
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between pt-7 md:flex">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Multi-currency
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between pt-7 md:flex">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Auto exchange rate
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="starter group flex flex-col justify-between rounded-2xl border border-gray-300 bg-white px-5 py-9 transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600 xl:px-8">
              <div className="data">
                <h6 className="mb-3 text-base leading-7 font-semibold text-indigo-600 group-hover:text-white">
                  Pro
                </h6>
                <h4 className="font-manrope mb-9 flex items-center gap-3 text-4xl leading-tight font-bold text-gray-900 group-hover:text-white">
                  $250
                  <span className="text-xl leading-8 font-normal text-gray-500 group-hover:text-gray-300">
                    | Month
                  </span>
                </h4>
                <button className="relative bottom-0 mt-auto mb-9 w-full rounded-full bg-indigo-600 px-4 py-3 text-center whitespace-nowrap shadow-sm shadow-indigo-100 transition-all duration-500 group-hover:bg-white">
                  <span className="px-2 text-base font-semibold text-white group-hover:text-indigo-600">
                    Try Free for 14 days
                  </span>
                </button>

                <div className="mb-6 hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Smart Insights
                  </span>
                </div>
                <div className="mb-6 hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Premium notification channels
                  </span>
                </div>
                <div className="hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Email &amp; Chat support
                  </span>
                </div>
              </div>
              <div className="card-data block lg:hidden">
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Core features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Total Limit
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Transaction fee
                    </p>
                    <p className="text-sm font-normal text-indigo-600 group-hover:text-white">
                      2.5% +AED 0.5
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="text-sm font-normal text-indigo-600 group-hover:text-white">
                      + 1.5%
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Settlement options
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Day of week fee
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Day of Month fee
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Added features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Secure payment
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Apply tax rate
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Multi-currency
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between pt-7 md:flex">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Auto exchange rate
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="starter group flex flex-col justify-between rounded-2xl border border-gray-300 bg-white px-5 py-9 transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600 xl:px-8">
              <div className="data">
                <h6 className="mb-3 text-base leading-7 font-semibold text-indigo-600 group-hover:text-white">
                  Enterprise
                </h6>
                <h4 className="font-manrope mb-9 flex items-center gap-3 text-4xl leading-tight font-bold text-gray-900 group-hover:text-white">
                  Custom
                </h4>
                <button className="relative bottom-0 mt-auto mb-9 w-full rounded-full bg-indigo-600 px-6 py-3 text-center whitespace-nowrap shadow-sm shadow-indigo-100 transition-all duration-500 group-hover:bg-white">
                  <span className="px-2 text-base font-semibold text-white group-hover:text-indigo-600">
                    contact sales
                  </span>
                </button>

                <div className="mb-6 hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Dedicated acccount manager
                  </span>
                </div>
                <div className="mb-6 hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Integration support
                  </span>
                </div>
                <div className="hidden items-center gap-3 lg:flex">
                  <span className="text-base leading-7 font-normal text-gray-800 group-hover:text-white">
                    Email &amp; Chat support
                  </span>
                </div>
              </div>
              <div className="card-data block lg:hidden">
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Core features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Total Limit
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Transaction fee
                    </p>
                    <p className="text-sm font-normal text-indigo-600 group-hover:text-white">
                      2.3% +AED 0.3
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="text-sm font-normal text-indigo-600 group-hover:text-white">
                      + 1%
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Receie payment in USD
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Settlement options
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Day of week fee
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Day of Month fee
                    </p>
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Free
                    </p>
                  </li>
                </ul>
                <h4 className="font-manrope mb-3 bg-transparent text-2xl font-semibold text-black group-hover:text-white md:mb-7 md:py-3 md:text-3xl">
                  Added features
                </h4>
                <ul className="mb-5 md:mb-11">
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Secure payment
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Apply tax rate
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
                      Multi-currency
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between pt-3 md:pt-7">
                    <p className="text-sm font-normal text-gray-900 group-hover:text-white">
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
      <section className="relative hidden pb-14 lg:block lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope mb-12 hidden text-center text-3xl font-bold text-black lg:block">
            Compare Plans
          </h2>
          <div className="main-table">
            <table className="mb-12 w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[270px] py-4 pl-5 text-left text-sm leading-6 font-normal text-gray-600">
                    Core features
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Free
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Starter
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Pro
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-7 pl-5 text-sm leading-6 font-normal text-gray-900">
                    Total Limit
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Unlimited
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Unlimited
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Unlimited
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="pt-7 pl-5 text-sm leading-6 font-normal text-gray-900">
                    Transaction fee
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-indigo-600">
                    2.9% +AED 1
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-indigo-600">
                    2.7% +AED 0.9
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-indigo-600">
                    2.5% +AED 0.5
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-indigo-600">
                    2.3% +AED 0.3
                  </td>
                </tr>
                <tr>
                  <td className="pt-7 pl-5 text-sm leading-6 font-normal text-gray-900">
                    Receie payment in USD
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-indigo-600">
                    + 2%
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-indigo-600">
                    + 1.8%
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-indigo-600">
                    + 1.5%
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-indigo-600">
                    + 1%
                  </td>
                </tr>
                <tr>
                  <td className="pt-7 pl-5 text-sm leading-6 font-normal text-gray-900">
                    Disbursement Fee
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    -
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    -
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Free
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Free
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="mb-12 w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[270px] py-4 pl-5 text-left text-sm leading-6 font-normal text-gray-600">
                    Settlement options
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Free
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Starter
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Pro
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-7 pl-5 text-sm leading-6 font-normal text-gray-900">
                    Day of week fee
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Free
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Free
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Free
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Free
                  </td>
                </tr>
                <tr>
                  <td className="pt-7 pl-5 text-sm leading-6 font-normal text-gray-900">
                    Day of Month fee
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Free
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Free
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Free
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900">
                    Free
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[270px] py-4 pl-5 text-left text-sm leading-6 font-normal text-gray-600">
                    Core features
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Free
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Starter
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Pro
                  </th>
                  <th className="w-[240px] py-4 text-left text-sm leading-6 font-normal text-gray-600">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-7 pl-5 text-sm leading-6 font-normal text-gray-900">
                    Secure payment
                  </td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900"></td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900"></td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900"></td>
                  <td className="pt-7 text-sm leading-6 font-normal text-gray-900"></td>
                </tr>
                <tr>
                  <td className="pt-7 pl-5 text-sm leading-6 font-normal text-gray-900">
                    Transaction fee
                  </td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                </tr>
                <tr>
                  <td className="pt-7 pl-5 text-sm leading-6 font-normal text-gray-900">
                    Transaction fee
                  </td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                  <td className="pt-7"></td>
                </tr>
                <tr>
                  <td className="pt-7 pl-5 text-sm leading-6 font-normal text-gray-900">
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
          <div className="rounded-2xl bg-white p-5 max-lg:mx-auto max-lg:max-w-3xl md:py-16 lg:py-20">
            <div className="mb-16">
              <h6 className="mb-2 text-base font-medium text-indigo-600">
                HOW TO GET STARTED
              </h6>
              <h2 className="font-manrope text-4xl leading-[3.25rem] font-bold text-gray-900">
                Frequently asked questions
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-8 lg:flex-row lg:justify-between lg:gap-14 xl:gap-20">
              <div className="w-full border-r-0 border-b border-solid border-gray-200 lg:w-52 lg:border-r lg:border-b-0">
                <nav className="flex items-center gap-5 overflow-x-auto lg:block">
                  <a
                    href="javascript:;"
                    className="group flex w-full items-center gap-2 py-5 text-lg font-medium whitespace-nowrap text-gray-500 transition-all duration-500 hover:text-indigo-600 active:text-indigo-600 lg:mb-10 lg:py-0"
                    data-tab="#tabs-with-icon-1"
                    aria-controls="tabs-with-icon-1"
                    role="tab"
                  >
                    <span></span>
                    General
                  </a>
                  <a
                    href="javascript:;"
                    className="group flex w-full items-center gap-2 py-5 text-lg font-medium whitespace-nowrap text-gray-500 transition-all duration-500 hover:text-indigo-600 active:text-indigo-600 lg:mb-10 lg:py-0"
                    data-tab="#tabs-with-icon-2"
                    aria-controls="tabs-with-icon-2"
                    role="tab"
                  >
                    <span></span>
                    Support
                  </a>
                  <a
                    href="javascript:;"
                    className="group flex w-full items-center gap-2 py-5 text-lg font-medium whitespace-nowrap text-gray-500 transition-all duration-500 hover:text-indigo-600 active:text-indigo-600 lg:mb-10 lg:py-0"
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
                      className="accordion active border-b border-solid border-gray-200 pb-4"
                      id="basic-heading-one-default"
                    >
                      <button
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                        aria-controls="basic-collapse-one-default"
                      >
                        <h5>How to create an account?</h5>
                      </button>
                      <div
                        id="basic-collapse-one-default"
                        className="accordion-content w-full overflow-hidden px-0 pr-4"
                        aria-labelledby="basic-heading-one-default"
                      >
                        <p className="text-base leading-6 text-gray-600">
                          To create an account, find the 'Sign up' or 'Create
                          account' button, fill out the registration form with
                          your personal information, and click 'Create account'
                          or 'Sign up.' Verify your email address if needed, and
                          then log in to start using the platform.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion border-b border-solid border-gray-200 py-4"
                      id="basic-heading-two-default"
                    >
                      <button
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600"
                        aria-controls="basic-collapse-two-default"
                      >
                        <h5>Have any trust issue?</h5>
                      </button>
                      <div
                        id="basic-collapse-two-default"
                        className="accordion-content w-full overflow-hidden px-0 pr-4"
                        aria-labelledby="basic-heading-two-default"
                      >
                        <p className="text-sm leading-6 text-gray-500">
                          Our focus on providing robust and user-friendly
                          content management capabilities ensures that you can
                          manage your content with confidence, and achieve your
                          content marketing goals with ease.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion border-b border-solid border-gray-200 py-4"
                      id="basic-heading-three-default"
                    >
                      <button
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600"
                        aria-controls="basic-collapse-three-default"
                      >
                        <h5>How can I reset my password?</h5>
                      </button>
                      <div
                        id="basic-collapse-three-default"
                        className="accordion-content w-full overflow-hidden px-0 pr-4"
                        aria-labelledby="basic-heading-three-default"
                      >
                        <p className="text-sm leading-6 text-gray-500">
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
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-medium text-gray-900 transition duration-500 hover:text-indigo-600"
                        aria-controls="basic-collapse-one-with-arrow-2"
                      >
                        <h5>How to create an account?</h5>
                      </button>
                      <div
                        id="basic-collapse-one-with-arrow-2"
                        className="accordion-content mt-3 w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                        aria-labelledby="basic-heading-one-with-arrow-2"
                      >
                        <p className="text-sm leading-6 text-gray-500">
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
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-medium text-gray-900 transition duration-500 hover:text-indigo-600"
                        aria-controls="basic-collapse-two-with-arrow-2"
                      >
                        <h5>Have any trust issue?</h5>
                      </button>
                      <div
                        id="basic-collapse-two-with-arrow-2"
                        className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                        aria-labelledby="basic-heading-two-with-arrow-2"
                      >
                        <p className="text-sm leading-6 text-gray-500">
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
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-medium text-gray-900 transition duration-500 hover:text-indigo-600"
                        aria-controls="basic-collapse-three-with-arrow-2"
                      >
                        <h5>How can I reset my password?</h5>
                      </button>
                      <div
                        id="basic-collapse-three-with-arrow-2"
                        className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                        aria-labelledby="basic-heading-three-with-arrow-2"
                      >
                        <p className="text-sm leading-6 text-gray-500">
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
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-medium text-gray-900 transition duration-500 hover:text-indigo-600"
                        aria-controls="basic-collapse-four-with-arrow-2"
                      >
                        <h5>What is the payment process?</h5>
                      </button>
                      <div
                        id="basic-collapse-four-with-arrow-2"
                        className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                        aria-labelledby="basic-heading-four-with-arrow-2"
                      >
                        <p className="text-sm leading-6 text-gray-500">
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
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-medium text-gray-900 transition duration-500 hover:text-indigo-600"
                        aria-controls="basic-collapse-one-with-arrow-3"
                      >
                        <h5>How to create an account?</h5>
                      </button>
                      <div
                        id="basic-collapse-one-with-arrow-3"
                        className="accordion-content mt-3 w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                        aria-labelledby="basic-heading-one-with-arrow-3"
                      >
                        <p className="text-sm leading-6 text-gray-500">
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
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-medium text-gray-900 transition duration-500 hover:text-indigo-600"
                        aria-controls="basic-collapse-two-with-arrow-3"
                      >
                        <h5>Have any trust issue?</h5>
                      </button>
                      <div
                        id="basic-collapse-two-with-arrow-3"
                        className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                        aria-labelledby="basic-heading-two-with-arrow-3"
                      >
                        <p className="text-sm leading-6 text-gray-500">
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
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-medium text-gray-900 transition duration-500 hover:text-indigo-600"
                        aria-controls="basic-collapse-three-with-arrow-3"
                      >
                        <h5>How can I reset my password?</h5>
                      </button>
                      <div
                        id="basic-collapse-three-with-arrow-3"
                        className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                        aria-labelledby="basic-heading-three-with-arrow-3"
                      >
                        <p className="text-sm leading-6 text-gray-500">
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
                        className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-medium text-gray-900 transition duration-500 hover:text-indigo-600"
                        aria-controls="basic-collapse-four-with-arrow-3"
                      >
                        <h5>What is the payment process?</h5>
                      </button>
                      <div
                        id="basic-collapse-four-with-arrow-3"
                        className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                        aria-labelledby="basic-heading-four-with-arrow-3"
                      >
                        <p className="text-sm leading-6 text-gray-500">
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
          <div className="mx-auto grid max-w-md grid-cols-2 gap-8 pb-10 md:max-w-3xl md:grid-cols-4 lg:max-w-full lg:grid-cols-6">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a
                href="javascript:;"
                className="flex justify-center lg:justify-start"
              ></a>
              <p className="py-8 text-center text-sm text-gray-500 lg:max-w-xs lg:text-left">
                Trusted in more than 100 countries &amp; 5 million customers.
                Have any query ?
              </p>
              <a
                href="javascript:;"
                className="mx-auto block h-9 w-fit rounded-full bg-indigo-600 px-5 py-2.5 text-xs text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
              >
                Contact us
              </a>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="mb-7 text-lg font-medium text-gray-900">
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
              <h4 className="mb-7 text-lg font-medium text-gray-900">
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
              <h4 className="mb-7 text-lg font-medium text-gray-900">
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
              <h4 className="mb-7 text-lg font-medium text-gray-900">Blogs</h4>
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
          <div className="border-t border-gray-200 py-7">
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
              <span className="text-sm text-gray-500">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
