export default function Default404Page() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="py-5 lg:fixed transition-all top-0 left-0 z-50 duration-500 w-full bg-white border-b border-indigo-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col lg:flex-row">
              <div className="flex justify-between lg:flex-row">
                <a
                  href="
                https://pagedone.io/"
                  className="flex items-center"
                ></a>
                <button
                  data-collapse-toggle="navbar"
                  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                </button>
              </div>
              <div
                className="hidden w-full lg:flex lg:pl-11 max-lg:mt-1 max-lg:overflow-y-auto"
                id="navbar"
              >
                <ul className="flex lg:items-center lg:justify-center flex-col lg:gap-6 gap-4 max-lg:pt-4 max-lg:mb-4 lg:mt-0 lg:flex-row lg:mx-auto ">
                  <li>
                    <a
                      href="javascript:;"
                      className="nav-link block lg:px-2 lg:text-left text-base text-gray-900 font-medium transition-all duration-500 hover:text-gray-500"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="nav-link block lg:px-2 lg:text-left text-gray-900 text-base font-medium transition-all duration-500 hover:text-gray-500"
                    >
                      About us
                    </a>
                  </li>
                  <li className="relative">
                    <button
                      data-target="menu1"
                      className="dropdown-toggle flex items-center justify-between text-gray-900 text-center text-base font-medium transition-all duration-500 lg:px-2 mr-auto lg:text-left lg:m-0 hover:text-gray-500"
                    >
                      Products
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
                              <div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                  <li className="relative">
                    <button
                      data-target="menu2"
                      className="dropdown-toggle flex items-center justify-between text-gray-900 text-center text-base font-medium transition-all duration-500 lg:px-2 mr-auto lg:text-left lg:m-0 hover:text-gray-500"
                    >
                      Features
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
                <div className="flex lg:items-center w-full justify-start flex-col lg:flex-row lg:w-max gap-5 lg:ml-14 lg:justify-end">
                  <button className="bg-indigo-50 text-indigo-500 rounded-full cursor-pointer leading-6 font-medium text-center transition-all duration-500 py-2 px-5 text-sm hover:bg-indigo-100">
                    Login
                  </button>
                  <button className="bg-indigo-500 text-white rounded-full cursor-pointer leading-6 font-medium text-center shadow-xs transition-all duration-500 py-2 px-5 text-sm hover:bg-indigo-600">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="w-full flex-col justify-start items-center lg:gap-16 gap-10 inline-flex lg:pt-[180px] pt-12 lg:pb-28 pb-12">
          <div className="border border-indigo-300 h-[550px] rounded-lg w-full">
            <div className="p-8 flex justify-between items-center border-b border-indigo-100">
              <div className="block"></div>
              <div className="block"></div>
            </div>
            <div className="relative h-[calc(550px-85px)] flex justify-center items-center flex-col">
              <div className="block text-center mt-5">
                <h5 className="md:text-xl text-lg leading-8 text-gray-900 font-medium mb-1.5">
                  <span className="text-indigo-600 font-semibold ">Oops!</span>{" "}
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
            <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-8 py-10 ">
              <div className="col-span-full mb-10 2xl:col-span-2 lg:mb-0 flex items-center flex-col 2xl:items-start">
                <a
                  href="https://pagedone.io/"
                  className="flex justify-center lg:justify-start"
                ></a>
                <div className="flex items-center justify-between w-full max-w-xl mx-auto flex-col  2xl:flex-col 2xl:items-start">
                  <p className="2xl:py-8 py-4 text-sm text-gray-500 2xl:max-w-xs text-center lg:text-left">
                    Trusted in more than 100 countries &amp; 5 million
                    customers. Have any query ?
                  </p>
                  <a
                    href="javascript:;"
                    className="py-2 px-5 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
                  >
                    {" "}
                    Contact us{" "}
                  </a>
                </div>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto text-left">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Pagedone
                </h4>
                <ul className="text-sm  transition-all duration-500 ">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto text-left">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Products
                </h4>
                <ul className="text-sm  transition-all duration-500">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      Figma UI System
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      Icons Assets
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      Responsive Blocks
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      Components Library
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto text-left">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Resources
                </h4>
                <ul className="text-sm  transition-all duration-500">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      Quick Start
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      User Guide
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto text-left">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Blogs
                </h4>
                <ul className="text-sm  transition-all duration-500">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      News
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      Tips &amp; Tricks
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
                    >
                      New Updates
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className=" text-gray-600 text-sm font-normal hover:text-gray-900"
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
                  ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
                  reserved.
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
    </section>
  );
}
