export default function PricingPlanCardWithAvailabilityTable() {
  return (
    <div>
      <nav className="w-full border-b border-solid border-gray-200 bg-white py-5 transition-all duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex justify-between lg:flex-row">
              <a href="javascript:;" className="flex items-center"></a>
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
                    className="nav-link mb-2 block text-center md:mb-0 lg:mr-6 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block text-center md:mb-0 lg:mr-6 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu1"
                    className="hover:text-prime-blue-700 m-auto mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-500 transition-all duration-500 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                  >
                    Products
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    className="animate-fade absolute top-14 -left-80 z-10 hidden min-w-full rounded-lg bg-white p-2 shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] md:min-w-[500px] lg:min-w-[800px] lg:p-4 xl:p-8"
                  >
                    <div className="flex justify-between">
                      <ul
                        className="w-1/2 text-sm text-gray-700"
                        aria-labelledby="dropdownLargeButton"
                      >
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
                                highly encrypted{" "}
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
                                of your time{" "}
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
                    className="hover:text-prime-blue-700 m-auto mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-500 transition-all duration-500 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                  >
                    Features
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    className="dropdown-menu absolute top-14 z-10 hidden w-64 rounded-lg bg-white p-2 font-normal shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] lg:p-4 xl:p-8"
                  >
                    <ul
                      className="text-sm text-gray-700"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <h6 className="mb-2 text-sm font-medium text-gray-500">
                        Features
                      </h6>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block py-3 text-base font-semibold text-gray-900 transition-all duration-500"
                        >
                          Notification
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block py-3 text-base font-semibold text-gray-900 transition-all duration-500"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block py-3 text-base font-semibold text-gray-900 transition-all duration-500"
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block py-3 text-base font-semibold text-gray-900 transition-all duration-500"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block py-3 text-base font-semibold text-gray-900 transition-all duration-500"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block py-3 text-base font-semibold text-gray-900 transition-all duration-500"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="ml-5 flex items-center justify-center">
                <button className="cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-center text-sm font-semibold text-indigo-600 shadow-xs transition-all duration-500 hover:bg-indigo-100">
                  Login
                </button>
                <button className="cursor-pointer rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 md:ml-5">
                  Sign up{" "}
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

            <p className="text-xl leading-8 font-normal text-gray-500">
              Pay Yearly
            </p>
          </div>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 lg:max-w-full lg:grid-cols-4">
            <div className="starter flex flex-col justify-between rounded-2xl border border-gray-300 p-4 transition-all duration-500 hover:border-indigo-600 xl:p-6">
              <div className="data">
                <h6 className="mb-3 text-base leading-7 font-semibold text-emerald-400">
                  Starter
                </h6>
                <h4 className="font-manrope mb-2 text-3xl leading-tight font-bold text-gray-900">
                  Free
                </h4>
                <p className="mb-6 text-base leading-8 font-normal text-gray-600">
                  No credit card required
                </p>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    100 MAUs
                  </span>
                </div>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    1 Seat
                  </span>
                </div>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    1 Seat
                  </span>
                </div>
              </div>
              <div className="card-data mt-5 block lg:hidden">
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Usage
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">MAUs</p>
                    <p className="text-sm font-normal text-gray-900">100</p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Simultaneous Connections per room
                    </p>
                    <p className="text-sm font-normal text-gray-900">10</p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Projects
                    </p>
                    <p className="text-sm font-normal text-gray-900">
                      unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">Seats</p>
                    <p className="text-sm font-normal text-gray-900">
                      unlimited
                    </p>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Collaborative document
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Presence
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Broadcast
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Conflict-free data types
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Document management
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Document browsing
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Permissions management
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Build and monitor
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      DevTools
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Starter Kit
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Analytics
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      REST API
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">Schemas</p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Support
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Community support
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Email support
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Platform Security and Compliance
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">SSO</p>
                    <p className="text-sm font-normal text-gray-900">
                      G suite, GitHub
                    </p>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">SOC 2</p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Security questionnaires
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      99.99% Uptime SLA
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Data Processing Agreement
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
              <button className="group relative bottom-0 mt-auto flex items-center justify-center rounded-full bg-indigo-50 px-3 py-3 shadow-sm shadow-indigo-100 transition-all duration-500 hover:bg-indigo-600 xl:px-6">
                <span className="px-2 text-sm font-semibold whitespace-nowrap text-indigo-600 group-hover:text-white">
                  Get started for free
                </span>
              </button>
            </div>
            <div className="Pro flex flex-col justify-between rounded-2xl border border-gray-300 p-4 transition-all duration-500 hover:border-indigo-600 xl:p-6">
              <div className="data">
                <h6 className="mb-3 text-base leading-7 font-semibold text-fuchsia-400">
                  Pro
                </h6>
                <h4 className="font-manrope mb-2 flex items-center text-3xl leading-tight font-bold text-gray-900">
                  $29{" "}
                  <span className="ml-2.5 text-xs leading-5 font-medium text-fuchsia-400">
                    / -25%
                  </span>
                </h4>
                <p className="mb-6 text-base leading-8 font-normal text-gray-600">
                  Pre month, billed annually
                </p>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    200 MAUs
                  </span>
                </div>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    Unlimited Seat
                  </span>
                </div>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    Email Support
                  </span>
                </div>
              </div>
              <div className="card-data mt-5 block lg:hidden">
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Usage
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">MAUs</p>
                    <p className="text-sm font-normal text-gray-900">
                      200 to 25,000
                    </p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Simultaneous Connections per room
                    </p>
                    <p className="text-sm font-normal text-gray-900">20</p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Projects
                    </p>
                    <p className="text-sm font-normal text-gray-900">
                      unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">Seats</p>
                    <p className="text-sm font-normal text-gray-900">
                      unlimited
                    </p>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Collaborative document
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Presence
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Broadcast
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Conflict-free data types
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Document management
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Document browsing
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Permissions management
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Build and monitor
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      DevTools
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Starter Kit
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Analytics
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      REST API
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">Schemas</p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Support
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Community support
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Email support
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Platform Security and Compliance
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">SSO</p>
                    <p className="text-sm font-normal text-gray-900">
                      G suite, GitHub
                    </p>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">SOC 2</p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Security questionnaires
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      99.99% Uptime SLA
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Data Processing Agreement
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
              <button className="group relative bottom-0 mt-auto flex items-center justify-center rounded-full bg-indigo-50 px-3 py-3 shadow-sm shadow-indigo-100 transition-all duration-500 hover:bg-indigo-600 xl:px-6">
                <span className="px-2 text-sm font-semibold whitespace-nowrap text-indigo-600 group-hover:text-white">
                  Get started for free
                </span>
              </button>
            </div>
            <div className="Startup flex flex-col justify-between rounded-2xl border border-gray-300 p-4 transition-all duration-500 hover:border-indigo-600 xl:p-6">
              <div className="data">
                <h6 className="mb-3 text-base leading-7 font-semibold text-amber-400">
                  Startup
                </h6>
                <h4 className="font-manrope mb-2 flex items-center text-3xl leading-tight font-bold text-gray-900">
                  $299{" "}
                  <span className="ml-2.5 text-xs leading-5 font-medium text-fuchsia-400">
                    / -25%
                  </span>
                </h4>
                <p className="mb-6 text-base leading-8 font-normal text-gray-600">
                  Pre month, billed annually
                </p>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    2000 MAUs
                  </span>
                </div>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    Unlimited Seat
                  </span>
                </div>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    Email Support
                  </span>
                </div>
                <div className="mb-12 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    webhooks
                  </span>
                </div>
              </div>
              <div className="card-data mt-5 block lg:hidden">
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Usage
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">MAUs</p>
                    <p className="text-sm font-normal text-gray-900">
                      2,000 to 250,000
                    </p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Simultaneous Connections per room
                    </p>
                    <p className="text-sm font-normal text-gray-900">30</p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Projects
                    </p>
                    <p className="text-sm font-normal text-gray-900">
                      unlimited
                    </p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">Seats</p>
                    <p className="text-sm font-normal text-gray-900">
                      unlimited
                    </p>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Collaborative document
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Presence
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Broadcast
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Conflict-free data types
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Document management
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Document browsing
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Permissions management
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Build and monitor
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      DevTools
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Starter Kit
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Analytics
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      REST API
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">Schemas</p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Support
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Community support
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Email support
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Platform Security and Compliance
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">SSO</p>
                    <p className="text-sm font-normal text-gray-900">
                      G suite, GitHub
                    </p>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">SOC 2</p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Security questionnaires
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      99.99% Uptime SLA
                    </p>
                    <span></span>
                  </li>
                  <li className="hidden items-center justify-between border-b border-gray-100 py-1.5 md:flex">
                    <p className="text-sm font-normal text-gray-400">
                      Data Processing Agreement
                    </p>
                    <span></span>
                  </li>
                </ul>
              </div>
              <button className="group relative bottom-0 mt-auto flex items-center justify-center rounded-full bg-indigo-50 px-3 py-3 shadow-sm shadow-indigo-100 transition-all duration-500 hover:bg-indigo-600 xl:px-6">
                <span className="px-2 text-sm font-semibold whitespace-nowrap text-indigo-600 group-hover:text-white">
                  Get started for free
                </span>
              </button>
            </div>
            <div className="Enterprise flex flex-col justify-between rounded-2xl border border-gray-300 p-4 transition-all duration-500 hover:border-indigo-600 xl:p-6">
              <div className="data">
                <h6 className="mb-3 text-base leading-7 font-semibold text-blue-400">
                  Enterprise
                </h6>
                <h4 className="font-manrope mb-2 flex items-center text-3xl leading-tight font-bold text-gray-900">
                  Contact us{" "}
                </h4>
                <p className="mb-6 text-base leading-8 font-normal text-gray-600">
                  For custom needs
                </p>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    custom MAUs
                  </span>
                </div>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    Custom seats
                  </span>
                </div>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    Priority support
                  </span>
                </div>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    Webhooks
                  </span>
                </div>
                <div className="mb-3 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    Optional custom solution
                  </span>
                </div>
                <div className="mb-12 hidden items-center gap-4 lg:flex">
                  <span className="text-sm leading-6 font-normal text-gray-500">
                    Optional SLAs and DPAs
                  </span>
                </div>
              </div>
              <div className="card-data mt-5 block lg:hidden">
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Usage
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">MAUs</p>
                    <p className="text-sm font-normal text-gray-900">Custom</p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Simultaneous Connections per room
                    </p>
                    <p className="text-sm font-normal text-gray-900">Custom</p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Projects
                    </p>
                    <p className="text-sm font-normal text-gray-900">Custom</p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">Seats</p>
                    <p className="text-sm font-normal text-gray-900">Custom</p>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Collaborative document
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Presence
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Broadcast
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Conflict-free data types
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Document management
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Document browsing
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Permissions management
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Build and monitor
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      DevTools
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Starter Kit
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Analytics
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      REST API
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">Schemas</p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Support
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Community support
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Email support
                    </p>
                    <span></span>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Priority support
                    </p>
                    <span></span>
                  </li>
                </ul>
                <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                  Platform Security and Compliance
                </h5>
                <ul className="mb-7">
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">SSO</p>
                    <p className="text-sm font-normal text-gray-900">
                      G suite, GitHub
                    </p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">SOC 2</p>
                    <p className="text-sm font-normal text-gray-900">
                      Coming soon
                    </p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Security questionnaires
                    </p>
                    <p className="text-sm font-normal text-gray-900">Custom</p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      99.99% Uptime SLA
                    </p>
                    <p className="text-sm font-normal text-gray-900">
                      Optional
                    </p>
                  </li>
                  <li className="flex items-center justify-between border-b border-gray-100 py-1.5">
                    <p className="text-sm font-normal text-gray-400">
                      Data Processing Agreement
                    </p>
                    <p className="text-sm font-normal text-gray-900">
                      Optional
                    </p>
                  </li>
                </ul>
              </div>
              <button className="group relative bottom-0 mt-auto flex items-center justify-center rounded-full bg-indigo-50 px-3 py-3 shadow-sm shadow-indigo-100 transition-all duration-500 hover:bg-indigo-600 xl:px-6">
                <span className="px-2 text-sm font-semibold whitespace-nowrap text-indigo-600 group-hover:text-white">
                  Get started for free
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="before: relative hidden pb-14 lg:block lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="main table-responsive relative z-10 py-4">
            <div className="absolute top-0 right-[20%] -z-10 hidden h-full w-36 rounded-xl bg-indigo-50 lg:block lg:w-44 xl:w-56"></div>
            <div className="table-data">
              <table className="relative mr-8 mb-14 w-full table-auto whitespace-nowrap">
                <tbody>
                  <tr>
                    <td className="w-80" />
                    <td className="w-[161px]">
                      <h6 className="mb-2 text-xl leading-8 font-medium text-gray-900">
                        Starter
                      </h6>
                      <button className="flex items-center gap-2 text-sm leading-6 font-semibold text-emerald-400 outline-0">
                        Get started for free
                      </button>
                    </td>
                    <td className="w-[161px]">
                      <h6 className="mb-2 text-xl leading-8 font-medium text-gray-900">
                        Pro
                      </h6>
                      <button className="flex items-center gap-2 text-sm leading-6 font-semibold text-fuchsia-400 outline-0">
                        Get started
                      </button>
                    </td>
                    <td className="w-[161px]">
                      <h6 className="mb-2 text-xl leading-8 font-medium text-gray-900">
                        Startup
                      </h6>
                      <button className="flex items-center gap-2 text-sm leading-6 font-semibold text-amber-400 outline-0">
                        Get started
                      </button>
                    </td>
                    <td className="w-[161px]">
                      <h6 className="mb-2 text-xl leading-8 font-medium text-gray-900">
                        Enterprise
                      </h6>
                      <button className="flex items-center gap-2 text-sm leading-6 font-semibold text-blue-400 outline-0">
                        Contact Us
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                Usage
              </h5>
              <table className="mb-12 w-full table-auto whitespace-nowrap">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="w-80 py-4 text-sm leading-6 font-normal text-gray-500">
                      MAUs
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      100
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      200 to 25,000
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      2,000 to 250,000
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      Custom
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal whitespace-nowrap text-gray-500">
                      Simultaneous Connections per room
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      10
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      20
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      30
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      Custom
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      Projects
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      Unlimited
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      Unlimited
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      Unlimited
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      Custom
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      Seats
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      Unlimited
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      Unlimited
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      Unlimited
                    </td>
                    <td className="w-[161px] px-2 py-4 text-sm leading-6 font-normal text-gray-900">
                      Custom
                    </td>
                  </tr>
                </tbody>
              </table>
              <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                Collaborative document
              </h5>
              <table className="mb-12 w-full table-auto">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="w-80 py-4 text-sm leading-6 font-normal text-gray-500">
                      Presence
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      Simultaneous Connections per room
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      Projects
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                </tbody>
              </table>
              <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                Document management
              </h5>
              <table className="mb-12 w-full table-auto">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="w-80 py-4 text-sm leading-6 font-normal text-gray-500">
                      Document browsing
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      Permissions management
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                </tbody>
              </table>
              <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                Build and monitor
              </h5>
              <table className="mb-12 w-full table-auto">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="w-80 py-4 text-sm leading-6 font-normal text-gray-500">
                      DevTools
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      Starter Kit
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="w-80 py-4 text-sm leading-6 font-normal text-gray-500">
                      Analytics
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      REST API
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="w-80 py-4 text-sm leading-6 font-normal text-gray-500">
                      Schemas
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      Priority support
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                </tbody>
              </table>
              <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                Support
              </h5>
              <table className="mb-12 w-full table-auto">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="w-80 py-4 text-sm leading-6 font-normal text-gray-500">
                      Community support
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      Email support
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="w-80 py-4 text-sm leading-6 font-normal text-gray-500">
                      Priority support
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                  </tr>
                </tbody>
              </table>
              <h5 className="mb-4 text-xl leading-8 font-medium text-gray-900">
                Platform Security and Compliance
              </h5>
              <table className="mb-12 w-full table-auto">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="w-80 py-4 text-sm leading-6 font-normal text-gray-500">
                      SSO
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900">
                      G suite, GitHub
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900">
                      G suite, GitHub
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900">
                      G suite, GitHub
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900">
                      G suite, GitHub
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      SOC 2
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900">
                      Coming soon
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      Security questionnaires
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900">
                      Custom
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      99.99% Uptime SLA
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900">
                      Optional
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm leading-6 font-normal text-gray-500">
                      Data Processing Agreement
                    </td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900"></td>
                    <td className="w-[161px] py-4 text-sm leading-6 font-normal text-gray-900">
                      Optional
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-14 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center gap-6 lg:flex-row lg:justify-between xl:gap-12">
            <div className="w-full lg:w-2/5">
              <div className="mb-16">
                <h2 className="mb-8 text-center text-4xl leading-[3.25rem] font-bold text-gray-900 lg:text-left">
                  Frequently asked questions
                </h2>
                <p className="mb-12 text-center text-lg text-gray-500 lg:mb-24 lg:text-left">
                  Trusted in more than 100 countries and 5 million customers.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <button className="rounded-full bg-indigo-600 px-7 py-3 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:mx-auto max-lg:max-w-2xl lg:w-3/5">
              <div className="accordion-group">
                <div
                  className="accordion border-b border-solid border-gray-100 pb-6"
                  id="basic-heading-one-with-arrow"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-xl leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-one-with-arrow"
                  >
                    <h5>How to create an account?</h5>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow"
                    className="accordion-content mt-3 w-full overflow-hidden px-0 transition-[height] duration-300"
                    aria-labelledby="basic-heading-one-with-arrow"
                  >
                    <p className="leading-6 text-gray-900">
                      To create an account, find the "Sign up" or "Create
                      account" button, fill out the registration form with your
                      personal information, and click "Create account" or "Sign
                      up." Verify your email address if needed, and then log in
                      to start using the platform.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion border-b border-solid border-gray-100 py-6"
                  id="basic-heading-two-with-arrow"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-xl leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-two-with-arrow"
                  >
                    <h5>What is the payment process?</h5>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow"
                    className="accordion-content mt-3 hidden w-full overflow-hidden px-0 transition-[height] duration-300"
                    aria-labelledby="basic-heading-two-with-arrow"
                  >
                    <p className="leading-6 text-gray-900">
                      To create an account, find the "Sign up" or "Create
                      account" button, fill out the registration form with your
                      personal information, and click "Create account" or "Sign
                      up." Verify your email address if needed, and then log in
                      to start using the platform.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion border-b border-solid border-gray-100 py-6"
                  id="basic-heading-three-with-arrow"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-xl leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-three-with-arrow"
                  >
                    <h5>How can I reset my password?</h5>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow"
                    className="accordion-content mt-3 hidden w-full overflow-hidden px-0 transition-[height] duration-300"
                    aria-labelledby="basic-heading-three-with-arrow"
                  >
                    <p className="leading-6 text-gray-900">
                      To create an account, find the "Sign up" or "Create
                      account" button, fill out the registration form with your
                      personal information, and click "Create account" or "Sign
                      up." Verify your email address if needed, and then log in
                      to start using the platform.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion pt-6"
                  id="basic-heading-four-with-arrow"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-xl leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-four-with-arrow"
                  >
                    <h5>Have any trust issue?</h5>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow"
                    className="accordion-content mt-3 hidden w-full overflow-hidden px-0 transition-[height] duration-300"
                    aria-labelledby="basic-heading-four-with-arrow"
                  >
                    <p className="leading-6 text-gray-900">
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
          <div className="mx-auto grid max-w-md grid-cols-2 gap-8 py-10 min-[690px]:max-w-2xl min-[690px]:grid-cols-4 lg:max-w-full lg:grid-cols-6">
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
            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
              <span className="text-sm text-gray-500">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
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
