export default function Default404Page() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="top-0 left-0 z-50 w-full border-b border-indigo-100 bg-white py-5 transition-all duration-500 lg:fixed">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex w-full flex-col lg:flex-row">
              <div className="flex justify-between lg:flex-row">
                <a
                  href="
                https://pagedone.io/"
                  className="flex items-center"
                ></a>
                <button
                  data-collapse-toggle="navbar"
                  className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                </button>
              </div>
              <div
                className="hidden w-full max-lg:mt-1 max-lg:overflow-y-auto lg:flex lg:pl-11"
                id="navbar"
              >
                <ul className="flex flex-col gap-4 max-lg:mb-4 max-lg:pt-4 lg:mx-auto lg:mt-0 lg:flex-row lg:items-center lg:justify-center lg:gap-6">
                  <li>
                    <a
                      href="javascript:;"
                      className="nav-link block text-base font-medium text-gray-900 transition-all duration-500 hover:text-gray-500 lg:px-2 lg:text-left"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="nav-link block text-base font-medium text-gray-900 transition-all duration-500 hover:text-gray-500 lg:px-2 lg:text-left"
                    >
                      About us
                    </a>
                  </li>
                  <li className="relative">
                    <button
                      data-target="menu1"
                      className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-gray-900 transition-all duration-500 hover:text-gray-500 lg:m-0 lg:px-2 lg:text-left"
                    >
                      Products
                    </button>
                    {/* Dropdown menu */}
                    <div
                      id="menu1"
                      aria-labelledby="menu1"
                      className="animate-fade relative top-3 z-10 hidden min-w-full rounded-lg bg-white p-2 shadow-lg shadow-gray-200 max-lg:mb-3 max-lg:shadow-inner md:min-w-[500px] lg:absolute lg:top-14 lg:-left-80 lg:min-w-[800px] lg:p-4 xl:p-8"
                    >
                      <div className="flex flex-col justify-between md:flex-row">
                        <ul
                          className="text-sm text-gray-700 md:w-1/2"
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
                                  Analyze data to make more informed and
                                  accurate business decision
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
                                                <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                                                    downloads</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li> */}
                        </ul>
                        <ul
                          className="text-sm text-gray-700 md:w-1/2 dark:text-gray-400"
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
                                  Organized documentation will help you save
                                  tone of your time
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
                  <li className="relative">
                    <button
                      data-target="menu2"
                      className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-gray-900 transition-all duration-500 hover:text-gray-500 lg:m-0 lg:px-2 lg:text-left"
                    >
                      Features
                    </button>
                    {/* Dropdown menu */}
                    <div
                      id="menu2"
                      aria-labelledby="menu2"
                      className="dropdown-menu relative top-3 z-10 hidden w-64 rounded-lg bg-white p-2 font-normal shadow-md shadow-gray-200 max-lg:mb-3 lg:absolute lg:top-14 lg:p-4 xl:p-8"
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
                <div className="flex w-full flex-col justify-start gap-5 lg:ml-14 lg:w-max lg:flex-row lg:items-center lg:justify-end">
                  <button className="cursor-pointer rounded-full bg-indigo-50 px-5 py-2 text-center text-sm leading-6 font-medium text-indigo-500 transition-all duration-500 hover:bg-indigo-100">
                    Login
                  </button>
                  <button className="cursor-pointer rounded-full bg-indigo-500 px-5 py-2 text-center text-sm leading-6 font-medium text-white shadow-xs transition-all duration-500 hover:bg-indigo-600">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 pt-12 pb-12 lg:gap-16 lg:pt-[180px] lg:pb-28">
          <div className="h-[550px] w-full rounded-lg border border-indigo-300">
            <div className="flex items-center justify-between border-b border-indigo-100 p-8">
              <div className="block"></div>
              <div className="block"></div>
            </div>
            <div className="relative flex h-[calc(550px-85px)] flex-col items-center justify-center">
              <div className="mt-5 block text-center">
                <h5 className="mb-1.5 text-lg leading-8 font-medium text-gray-900 md:text-xl">
                  <span className="font-semibold text-indigo-600">Oops!</span>{" "}
                  It seems like you've taken a wrong turn
                </h5>
                <p className="text-sm text-gray-500">
                  We're working to bring it back.
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full border-t border-gray-200">
          <div className="mx-auto max-w-7xl">
            {/*Grid*/}
            <div className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-4 2xl:grid-cols-6">
              <div className="col-span-full mb-10 flex flex-col items-center lg:mb-0 2xl:col-span-2 2xl:items-start">
                <a
                  href="https://pagedone.io/"
                  className="flex justify-center lg:justify-start"
                ></a>
                <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-between 2xl:flex-col 2xl:items-start">
                  <p className="py-4 text-center text-sm text-gray-500 lg:text-left 2xl:max-w-xs 2xl:py-8">
                    Trusted in more than 100 countries &amp; 5 million
                    customers. Have any query ?
                  </p>
                  <a
                    href="javascript:;"
                    className="mx-auto block w-fit rounded-full bg-indigo-600 px-5 py-2 text-xs text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
                  >
                    {" "}
                    Contact us{" "}
                  </a>
                </div>
              </div>
              {/*End Col*/}
              <div className="text-left lg:mx-auto">
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Pagedone
                </h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="text-left lg:mx-auto">
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Products
                </h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      Figma UI System
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      Icons Assets
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      Responsive Blocks
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      Components Library
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="text-left lg:mx-auto">
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Resources
                </h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      Quick Start
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      User Guide
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="text-left lg:mx-auto">
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Blogs
                </h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      News
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      Tips &amp; Tricks
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
                    >
                      New Updates
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900"
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
                  ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
                  reserved.
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
    </section>
  )
}
