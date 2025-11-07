export default function SvgIllustrationWithSearchBar() {
  return (
    <section>
      <nav className="py-5 lg:fixed w-full transition-all z-50 bg-white duration-500 border-b border-indigo-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a
                href="
                https://pagedone.io/"
                className="flex items-center"
              ></a>
              <div className="flex items-center justify-end gap-5">
                <button
                  data-collapse-toggle="navbar"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                </button>
              </div>
            </div>
            <div
              className="hidden w-full lg:flex xl:pl-11 lg:pl-8 max-lg:mt-1 max-lg:overflow-y-auto"
              id="navbar"
            >
              <ul className="flex lg:items-center lg:justify-center flex-col xl:gap-6 gap-4 max-lg:pt-4 max-lg:mb-4 lg:mt-0 lg:flex-row lg:mx-auto ">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-base text-gray-500 font-medium transition-all duration-500 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-gray-500 font-medium transition-all duration-500 hover:text-gray-900 whitespace-nowrap"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
                  >
                    Products
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
                  <button
                    data-target="menu2"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
                  >
                    Features
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
                  <a className="absolute z-10 top-1 mr-1"></a>
                  <select
                    id="countries"
                    className="focus:outline-none placeholder-gray-400 text-gray-700 bg-gray-100 rounded-full pl-3.5 text-xs font-medium justify-start items-center gap-2 inline-flex
                      h-[22px] w-[52px]"
                  >
                    <option value={1} selected>
                      IN
                    </option>
                    <option value={2}>UK</option>
                    <option value={3}>US</option>
                    <option value={4}>UAE</option>
                  </select>
                </div>
                <button className="flex items-center justify-center bg-gray-100 rounded-lg cursor-pointer transition-all duration-700 ease-in-out py-2 px-3.5 hover:bg-gray-200">
                  <span className="px-1.5 text-gray-900 text-sm font-medium leading-6">
                    Login
                  </span>
                </button>
                <button className="flex items-center justify-center bg-gray-900 rounded-lg cursor-pointer shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out py-2 px-3.5 hover:bg-gray-700">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full lg:pt-[180px] pt-12 lg:pb-28 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:py-40 sm:py-20 py-12 bg-gray-50 rounded-3xl flex-col justify-center items-center gap-1 inline-flex">
            <div className="justify-center items-center gap-2.5 inline-flex">
              <h2 className="text-right text-black text-9xl font-semibold font-manrope leading-tight">
                4
              </h2>

              <h2 className="text-black text-9xl font-semibold font-manrope leading-tight">
                4
              </h2>
            </div>
            <div className="w-full flex-col justify-start items-center gap-10 flex">
              <div className="w-full flex-col justify-start items-center gap-1.5 flex">
                <h3 className="text-center text-black text-2xl font-bold font-manrope leading-9">
                  Oh No... We Lost This Page
                </h3>
                <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  We suggest you go to homepage while we fixing the problem.
                </p>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-lg shadow-xs justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Back to Home
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:py-10 py-7 flex justify-between items-center flex-col lg:gap-8 gap-6 lg:flex-row">
            <div className="flex items-center flex-col lg:flex-row ">
              <a
                href="https://pagedone.io/"
                className="flex justify-center"
              ></a>
              <ul className="text-lg  flex items-center flex-col sm:flex-row lg:pt-8 pt-6 lg:pb-8 gap-6 xl:gap-12 lg:gap-8 lg:border-l border-gray-200 xl:ml-11 lg:ml-7 xl:pl-11 lg:pl-7 transition-all duration-500">
                <li>
                  <a href="#" className="text-gray-800 hover:text-indigo-600">
                    Pagedone
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-indigo-600">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-indigo-600">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-indigo-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-indigo-600">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex  space-x-4 sm:justify-center  ">
              <a
                href="#"
                className="group w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-500 hover:border-indigo-600"
              ></a>
              <a
                href="#"
                className="group w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-500  hover:border-indigo-600"
              ></a>
              <a
                href="#"
                className="group w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-500  hover:border-indigo-600"
              ></a>
              <a
                href="#"
                className="group w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-500  hover:border-indigo-600"
              ></a>
            </div>
          </div>
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <span className="text-gray-400 ">
                ©<a href="https://pagedone.io/">pagedone</a> 2023, All rights
                reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
