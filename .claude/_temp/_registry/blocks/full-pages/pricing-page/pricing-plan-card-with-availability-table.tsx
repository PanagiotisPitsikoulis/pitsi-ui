export default function PricingPlanCardWithAvailabilityTable() {
  return (
    <div>
      <nav className="py-5  transition-all duration-500 w-full  bg-white border-b border-solid border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex  flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className=" flex justify-between  lg:flex-row">
              <a href="javascript:;" className="flex items-center"></a>
              <button
                data-collapse-toggle="navbar-default"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div
              className="hidden w-full lg:flex lg:pl-11 "
              id="navbar-default"
            >
              <ul className="lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row lg:ml-auto">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu1"
                    className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0"
                  >
                    Products
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    className="animate-fade z-10 absolute top-14 -left-80 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
                  >
                    <div className="flex justify-between">
                      <ul
                        className="text-sm text-gray-700  w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center "
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
                        {/* <li aria-labelledby="dropdownNavbarLink">
                      <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start"  class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                          </svg></button>
                      <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                              <li>
                                  <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                              </li>
                              <li>
                                  <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                                      downloads</a>
                              </li>
                              <li>
                                  <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                              </li>
                              <li>
                                  <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                              </li>
                          </ul>
                      </div>
                  </li> */}
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
                                highly encrypted{" "}
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
                                of your time{" "}
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
                        {/* <li aria-labelledby="dropdownNavbarLink">
                      <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start"  class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                          </svg></button>
                      <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                              <li>
                                  <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                              </li>
                              <li>
                                  <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                                      downloads</a>
                              </li>
                              <li>
                                  <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                              </li>
                              <li>
                                  <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                              </li>
                          </ul>
                      </div>
                  </li> */}
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu2"
                    className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0"
                  >
                    Features
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    className="dropdown-menu z-10 absolute top-14 font-normal bg-white rounded-lg shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] w-64 xl:p-8 lg:p-4 p-2 hidden"
                  >
                    <ul
                      className=" text-sm text-gray-700 "
                      aria-labelledby="dropdownLargeButton"
                    >
                      <h6 className="text-sm text-gray-500 font-medium mb-2">
                        Features
                      </h6>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Notification
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="flex items-center ml-5 justify-center">
                <button className=" bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                  Login
                </button>
                <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm md:ml-5 hover:bg-indigo-700">
                  Sign up{" "}
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

            <p className="font-normal text-xl leading-8 text-gray-500">
              Pay Yearly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-md mx-auto md:max-w-3xl lg:max-w-full">
            <div className="starter rounded-2xl border border-gray-300 p-4 xl:p-6 flex flex-col justify-between transition-all duration-500 hover:border-indigo-600">
              <div className="data ">
                <h6 className="font-semibold text-base leading-7 text-emerald-400 mb-3">
                  Starter
                </h6>
                <h4 className="font-manrope font-bold text-3xl text-gray-900 leading-tight mb-2">
                  Free
                </h4>
                <p className="font-normal text-base leading-8 text-gray-600 mb-6">
                  No credit card required
                </p>
                <div className="items-center gap-4 mb-3 hidden lg:flex">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    100 MAUs
                  </span>
                </div>
                <div className="items-center gap-4 mb-3 hidden lg:flex">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    1 Seat
                  </span>
                </div>
                <div className="items-center gap-4 mb-3 hidden lg:flex">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    1 Seat
                  </span>
                </div>
              </div>
              <div className="card-data mt-5 block lg:hidden">
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Usage
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">MAUs</p>
                    <p className="font-normal text-sm text-gray-900">100</p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Simultaneous Connections per room
                    </p>
                    <p className="font-normal text-sm text-gray-900">10</p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Projects
                    </p>
                    <p className="font-normal text-sm text-gray-900">
                      unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">Seats</p>
                    <p className="font-normal text-sm text-gray-900">
                      unlimited
                    </p>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Collaborative document
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Presence
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Broadcast
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Conflict-free data types
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Document management
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Document browsing
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Permissions management
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Build and monitor
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      DevTools
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Starter Kit
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Analytics
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      REST API
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">Schemas</p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Support
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Community support
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Email support
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Platform Security and Compliance
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">SSO</p>
                    <p className="font-normal text-sm text-gray-900">
                      G suite, GitHub
                    </p>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">SOC 2</p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Security questionnaires
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      99.99% Uptime SLA
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Data Processing Agreement
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
              <button className="group flex items-center justify-center py-3 px-3 xl:px-6 rounded-full bg-indigo-50 shadow-sm shadow-indigo-100 mt-auto relative bottom-0 transition-all duration-500 hover:bg-indigo-600">
                <span className="px-2 font-semibold text-sm text-indigo-600 group-hover:text-white whitespace-nowrap">
                  Get started for free
                </span>
              </button>
            </div>
            <div className="Pro rounded-2xl border border-gray-300 p-4 xl:p-6 flex flex-col justify-between transition-all duration-500 hover:border-indigo-600">
              <div className="data">
                <h6 className="font-semibold text-base leading-7 text-fuchsia-400 mb-3">
                  Pro
                </h6>
                <h4 className="font-manrope font-bold text-3xl text-gray-900 leading-tight mb-2 flex items-center">
                  $29{" "}
                  <span className="font-medium text-xs leading-5 text-fuchsia-400 ml-2.5">
                    / -25%
                  </span>
                </h4>
                <p className="font-normal text-base leading-8 text-gray-600 mb-6">
                  Pre month, billed annually
                </p>
                <div className="hidden lg:flex items-center gap-4 mb-3">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    200 MAUs
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-4 mb-3">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    Unlimited Seat
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-4 mb-3">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    Email Support
                  </span>
                </div>
              </div>
              <div className="card-data mt-5 block lg:hidden">
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Usage
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">MAUs</p>
                    <p className="font-normal text-sm text-gray-900">
                      200 to 25,000
                    </p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Simultaneous Connections per room
                    </p>
                    <p className="font-normal text-sm text-gray-900">20</p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Projects
                    </p>
                    <p className="font-normal text-sm text-gray-900">
                      unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">Seats</p>
                    <p className="font-normal text-sm text-gray-900">
                      unlimited
                    </p>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Collaborative document
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Presence
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Broadcast
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Conflict-free data types
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Document management
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Document browsing
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Permissions management
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Build and monitor
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      DevTools
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Starter Kit
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Analytics
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      REST API
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">Schemas</p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Support
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Community support
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Email support
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Platform Security and Compliance
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">SSO</p>
                    <p className="font-normal text-sm text-gray-900">
                      G suite, GitHub
                    </p>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">SOC 2</p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Security questionnaires
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      99.99% Uptime SLA
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Data Processing Agreement
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
              <button className="group flex items-center justify-center py-3 px-3 xl:px-6 rounded-full bg-indigo-50 shadow-sm shadow-indigo-100 mt-auto relative bottom-0 transition-all duration-500 hover:bg-indigo-600">
                <span className="px-2 font-semibold text-sm text-indigo-600 group-hover:text-white whitespace-nowrap">
                  Get started for free
                </span>
              </button>
            </div>
            <div className="Startup rounded-2xl border border-gray-300 p-4 xl:p-6 flex flex-col justify-between transition-all duration-500 hover:border-indigo-600">
              <div className="data">
                <h6 className="font-semibold text-base leading-7 text-amber-400 mb-3">
                  Startup
                </h6>
                <h4 className="font-manrope font-bold text-3xl text-gray-900 leading-tight mb-2 flex items-center">
                  $299{" "}
                  <span className="font-medium text-xs leading-5 text-fuchsia-400 ml-2.5">
                    / -25%
                  </span>
                </h4>
                <p className="font-normal text-base leading-8 text-gray-600 mb-6">
                  Pre month, billed annually
                </p>
                <div className="hidden lg:flex items-center gap-4 mb-3">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    2000 MAUs
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-4 mb-3">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    Unlimited Seat
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-4 mb-3">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    Email Support
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-4 mb-12">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    webhooks
                  </span>
                </div>
              </div>
              <div className="card-data mt-5 block lg:hidden">
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Usage
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">MAUs</p>
                    <p className="font-normal text-sm text-gray-900">
                      2,000 to 250,000
                    </p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Simultaneous Connections per room
                    </p>
                    <p className="font-normal text-sm text-gray-900">30</p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Projects
                    </p>
                    <p className="font-normal text-sm text-gray-900">
                      unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">Seats</p>
                    <p className="font-normal text-sm text-gray-900">
                      unlimited
                    </p>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Collaborative document
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Presence
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Broadcast
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Conflict-free data types
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Document management
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Document browsing
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Permissions management
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Build and monitor
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      DevTools
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Starter Kit
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Analytics
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      REST API
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">Schemas</p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Support
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Community support
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Email support
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Platform Security and Compliance
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">SSO</p>
                    <p className="font-normal text-sm text-gray-900">
                      G suite, GitHub
                    </p>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">SOC 2</p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Security questionnaires
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      99.99% Uptime SLA
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden md:flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Data Processing Agreement
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
              <button className="group flex items-center justify-center py-3 px-3 xl:px-6 rounded-full bg-indigo-50 shadow-sm shadow-indigo-100 mt-auto relative bottom-0 transition-all duration-500 hover:bg-indigo-600">
                <span className="px-2 font-semibold text-sm text-indigo-600 group-hover:text-white whitespace-nowrap">
                  Get started for free
                </span>
              </button>
            </div>
            <div className="Enterprise rounded-2xl border border-gray-300 p-4 xl:p-6 flex flex-col justify-between transition-all duration-500 hover:border-indigo-600">
              <div className="data">
                <h6 className="font-semibold text-base leading-7 text-blue-400 mb-3">
                  Enterprise
                </h6>
                <h4 className="font-manrope font-bold text-3xl text-gray-900 leading-tight mb-2 flex items-center">
                  Contact us{" "}
                </h4>
                <p className="font-normal text-base leading-8 text-gray-600 mb-6">
                  For custom needs
                </p>
                <div className="hidden lg:flex items-center gap-4 mb-3">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    custom MAUs
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-4 mb-3">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    Custom seats
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-4 mb-3">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    Priority support
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-4 mb-3">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    Webhooks
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-4 mb-3">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    Optional custom solution
                  </span>
                </div>
                <div className="hidden lg:flex items-center gap-4 mb-12">
                  <span className="font-normal text-sm leading-6 text-gray-500">
                    Optional SLAs and DPAs
                  </span>
                </div>
              </div>
              <div className="card-data mt-5 block lg:hidden">
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Usage
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">MAUs</p>
                    <p className="font-normal text-sm text-gray-900">Custom</p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Simultaneous Connections per room
                    </p>
                    <p className="font-normal text-sm text-gray-900">Custom</p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Projects
                    </p>
                    <p className="font-normal text-sm text-gray-900">Custom</p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">Seats</p>
                    <p className="font-normal text-sm text-gray-900">Custom</p>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Collaborative document
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Presence
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Broadcast
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Conflict-free data types
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Document management
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Document browsing
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Permissions management
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Build and monitor
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      DevTools
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Starter Kit
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Analytics
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      REST API
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">Schemas</p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Support
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Community support
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Email support
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                  Platform Security and Compliance
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">SSO</p>
                    <p className="font-normal text-sm text-gray-900">
                      G suite, GitHub
                    </p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">SOC 2</p>
                    <p className="font-normal text-sm text-gray-900">
                      Coming soon
                    </p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Security questionnaires
                    </p>
                    <p className="font-normal text-sm text-gray-900">Custom</p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      99.99% Uptime SLA
                    </p>
                    <p className="font-normal text-sm text-gray-900">
                      Optional
                    </p>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-gray-100">
                    <p className="font-normal text-sm text-gray-400">
                      Data Processing Agreement
                    </p>
                    <p className="font-normal text-sm text-gray-900">
                      Optional
                    </p>
                  </li>
                </ul>
              </div>
              <button className="group flex items-center justify-center py-3 px-3 xl:px-6 rounded-full bg-indigo-50 shadow-sm shadow-indigo-100 mt-auto relative bottom-0 transition-all duration-500 hover:bg-indigo-600">
                <span className="px-2 font-semibold text-sm text-indigo-600 group-hover:text-white whitespace-nowrap">
                  Get started for free
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-14 lg:pb-24 relative hidden lg:block before:">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="main relative z-10 py-4 table-responsive">
            <div className="w-36 lg:w-44 xl:w-56 h-full absolute -z-10 bg-indigo-50 rounded-xl right-[20%] top-0 hidden lg:block"></div>
            <div className="table-data">
              <table className="table-auto w-full mr-8 mb-14 relative whitespace-nowrap">
                <tbody>
                  <tr>
                    <td className="w-80" />
                    <td className="w-[161px]">
                      <h6 className="font-medium text-xl leading-8 text-gray-900 mb-2">
                        Starter
                      </h6>
                      <button className="outline-0 flex items-center gap-2 font-semibold text-sm leading-6 text-emerald-400">
                        Get started for free
                      </button>
                    </td>
                    <td className="w-[161px]">
                      <h6 className="font-medium text-xl leading-8 text-gray-900 mb-2">
                        Pro
                      </h6>
                      <button className="outline-0 flex items-center gap-2 font-semibold text-sm leading-6 text-fuchsia-400">
                        Get started
                      </button>
                    </td>
                    <td className="w-[161px]">
                      <h6 className="font-medium text-xl leading-8 text-gray-900 mb-2">
                        Startup
                      </h6>
                      <button className="outline-0 flex items-center gap-2 font-semibold text-sm leading-6 text-amber-400">
                        Get started
                      </button>
                    </td>
                    <td className="w-[161px]">
                      <h6 className="font-medium text-xl leading-8 text-gray-900 mb-2">
                        Enterprise
                      </h6>
                      <button className="outline-0 flex items-center gap-2 font-semibold text-sm leading-6 text-blue-400">
                        Contact Us
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                Usage
              </h5>
              <table className="table-auto w-full mb-12 whitespace-nowrap">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500 w-80">
                      MAUs
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      100
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      200 to 25,000
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      2,000 to 250,000
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      Custom
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 ">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500 whitespace-nowrap">
                      Simultaneous Connections per room
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      10
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      20
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      30
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      Custom
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      Projects
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      Unlimited
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      Unlimited
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      Unlimited
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      Custom
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      Seats
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      Unlimited
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      Unlimited
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      Unlimited
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px] px-2">
                      Custom
                    </td>
                  </tr>
                </tbody>
              </table>
              <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                Collaborative document
              </h5>
              <table className="table-auto w-full mb-12">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500 w-80">
                      Presence
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                  <tr className="border-b border-gray-100 ">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      Simultaneous Connections per room
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      Projects
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                </tbody>
              </table>
              <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                Document management
              </h5>
              <table className="table-auto w-full mb-12">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500 w-80">
                      Document browsing
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                  <tr className="border-b border-gray-100 ">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      Permissions management
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                </tbody>
              </table>
              <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                Build and monitor
              </h5>
              <table className="table-auto w-full mb-12">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500 w-80">
                      DevTools
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                  <tr className="border-b border-gray-100 ">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      Starter Kit
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500 w-80">
                      Analytics
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                  <tr className="border-b border-gray-100 ">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      REST API
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500 w-80">
                      Schemas
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                  <tr className="border-b border-gray-100 ">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      Priority support
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                </tbody>
              </table>
              <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                Support
              </h5>
              <table className="table-auto w-full mb-12">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500 w-80">
                      Community support
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                  <tr className="border-b border-gray-100 ">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      Email support
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500 w-80">
                      Priority support
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                  </tr>
                </tbody>
              </table>
              <h5 className="font-medium text-xl leading-8 text-gray-900 mb-4">
                Platform Security and Compliance
              </h5>
              <table className="table-auto w-full mb-12">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500 w-80">
                      SSO
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]">
                      G suite, GitHub
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]">
                      G suite, GitHub
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]">
                      G suite, GitHub
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]">
                      G suite, GitHub
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 ">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      SOC 2
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]">
                      Coming soon
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      Security questionnaires
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]">
                      Custom
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      99.99% Uptime SLA
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]">
                      Optional
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-normal text-sm leading-6 text-gray-500">
                      Data Processing Agreement
                    </td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]"></td>
                    <td className="py-4 font-normal text-sm leading-6 text-gray-900 w-[161px]">
                      Optional
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-14 lg:pb-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center  gap-6  xl:gap-12 lg:flex-row lg:justify-between ">
            <div className="w-full  lg:w-2/5">
              <div className="mb-16">
                <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-8 lg:text-left">
                  Frequently asked questions
                </h2>
                <p className="text-gray-500 text-lg text-center mb-12 lg:mb-24 lg:text-left">
                  Trusted in more than 100 countries and 5 million customers.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="py-3 px-7 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-white font-semibold  hover:bg-indigo-700">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full  max-lg:max-w-2xl max-lg:mx-auto lg:w-3/5 ">
              <div className="accordion-group">
                <div
                  className="accordion pb-6 border-b border-solid border-gray-100"
                  id="basic-heading-one-with-arrow"
                >
                  <button
                    className="accordion-toggle group  inline-flex items-center justify-between text-left text-xl leading-8 text-gray-900 w-full transition duration-500  hover:text-indigo-600 accordion-active:text-indigo-600 "
                    aria-controls="basic-collapse-one-with-arrow"
                  >
                    <h5>How to create an account?</h5>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow"
                    className="accordion-content w-full px-0 overflow-hidden transition-[height] duration-300 mt-3"
                    aria-labelledby="basic-heading-one-with-arrow"
                  >
                    <p className=" text-gray-900 leading-6">
                      To create an account, find the "Sign up" or "Create
                      account" button, fill out the registration form with your
                      personal information, and click "Create account" or "Sign
                      up." Verify your email address if needed, and then log in
                      to start using the platform.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-6 border-b border-solid border-gray-100"
                  id="basic-heading-two-with-arrow"
                >
                  <button
                    className="accordion-toggle group  inline-flex items-center justify-between text-left text-xl leading-8 text-gray-900 w-full transition duration-500  hover:text-indigo-600 accordion-active:text-indigo-600 "
                    aria-controls="basic-collapse-two-with-arrow"
                  >
                    <h5>What is the payment process?</h5>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow"
                    className="accordion-content w-full px-0 hidden overflow-hidden transition-[height] duration-300 mt-3"
                    aria-labelledby="basic-heading-two-with-arrow"
                  >
                    <p className=" text-gray-900 leading-6">
                      To create an account, find the "Sign up" or "Create
                      account" button, fill out the registration form with your
                      personal information, and click "Create account" or "Sign
                      up." Verify your email address if needed, and then log in
                      to start using the platform.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-6 border-b border-solid border-gray-100"
                  id="basic-heading-three-with-arrow"
                >
                  <button
                    className="accordion-toggle group  inline-flex items-center justify-between text-left text-xl leading-8 text-gray-900 w-full transition duration-500  hover:text-indigo-600 accordion-active:text-indigo-600 "
                    aria-controls="basic-collapse-three-with-arrow"
                  >
                    <h5>How can I reset my password?</h5>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow"
                    className="accordion-content w-full px-0 hidden overflow-hidden transition-[height] duration-300 mt-3"
                    aria-labelledby="basic-heading-three-with-arrow"
                  >
                    <p className=" text-gray-900 leading-6">
                      To create an account, find the "Sign up" or "Create
                      account" button, fill out the registration form with your
                      personal information, and click "Create account" or "Sign
                      up." Verify your email address if needed, and then log in
                      to start using the platform.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion pt-6 "
                  id="basic-heading-four-with-arrow"
                >
                  <button
                    className="accordion-toggle group  inline-flex items-center justify-between text-left text-xl leading-8 text-gray-900 w-full transition duration-500  hover:text-indigo-600 accordion-active:text-indigo-600 "
                    aria-controls="basic-collapse-four-with-arrow"
                  >
                    <h5>Have any trust issue?</h5>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow"
                    className="accordion-content w-full px-0 hidden overflow-hidden transition-[height] duration-300 mt-3"
                    aria-labelledby="basic-heading-four-with-arrow"
                  >
                    <p className=" text-gray-900 leading-6">
                      To create an account, find the "Sign up" or "Create
                      account" button, fill out the registration form with your
                      personal information, and click "Create account" or "Sign
                      up." Verify your email address if needed, and then log in
                      to start using the platform.
                    </p>
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
          <div className="grid grid-cols-2 min-[690px]:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-w-md mx-auto min-[690px]:max-w-2xl lg:max-w-full">
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
                className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
              >
                Contact us
              </a>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Pagedone
              </h4>
              <ul className="text-sm  transition-all duration-500">
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
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
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
              <ul className="text-sm  transition-all duration-500">
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
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
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
              <ul className="text-sm  transition-all duration-500">
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
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Quick Start
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    User Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
              <ul className="text-sm  transition-all duration-500">
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
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Tips &amp; Tricks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    New Updates
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Grid*/}
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm text-gray-500 ">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
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
