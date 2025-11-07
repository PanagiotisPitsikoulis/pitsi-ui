export default function HeroWithDarkTheme() {
  return (
    <div>
      <nav className="w-full border-b border-solid border-gray-700 bg-transparent py-5 transition-all duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <button
                data-collapse-toggle="navbar"
                className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* SVG removed */}
              </button>
            </div>
            <div className="hidden w-full lg:flex lg:pl-11" id="navbar">
              <ul className="mt-4 ml-auto flex flex-col max-lg:mt-1 max-lg:gap-4 max-lg:py-4 lg:mt-0 lg:flex-row lg:items-center">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block text-white md:mb-0 lg:mr-6 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block text-white md:mb-0 lg:mr-6 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle hover:text-prime-blue-700 mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-white transition-all duration-500 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    aria-labelledby="menu1"
                    className="animate-fade relative top-3 z-10 hidden min-w-full rounded-lg bg-gray-800 p-2 shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] max-lg:mb-3 md:min-w-[500px] lg:absolute lg:top-14 lg:-left-80 lg:min-w-[800px] lg:p-4 xl:p-8"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <ul
                        className="text-sm text-gray-100 md:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="mb-2 text-sm font-medium text-gray-50">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
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
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
                                Analytics
                                <span className="mr-2 ml-4 h-5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-500">
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
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
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
                        className="text-sm text-gray-700 md:w-1/2 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="mb-2 text-sm font-medium text-gray-500">
                          Services
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
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
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
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
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
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
                    className="dropdown-toggle hover:text-prime-blue-700 mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-white transition-all duration-500 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                  >
                    Features
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    aria-labelledby="menu2"
                    className="dropdown-menu relative top-3 z-10 hidden w-64 rounded-lg bg-gray-800 p-2 font-normal shadow-md shadow-gray-700 max-lg:mb-3 lg:absolute lg:top-14 lg:p-4 xl:p-8"
                  >
                    <ul
                      className="text-sm text-gray-100"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <h6 className="mb-2 text-sm font-medium text-gray-50">
                        Features
                      </h6>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Notification
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="ml-auto flex flex-col max-lg:gap-4 lg:flex-row lg:items-center lg:justify-center">
                <button className="rounded-full border border-white px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-white hover:text-gray-900">
                  Login
                </button>
                <button className="cursor-pointer rounded-full bg-indigo-500 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 lg:ml-5">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative overflow-hidden py-5 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative mb-14">
            <h1 className="font-manrope mx-auto max-w-none text-center text-5xl font-bold text-white lg:max-w-3xl">
              Make Your Payment Transaction Easy And
              <span className="text-indigo-600">Professional </span>
            </h1>
            <p className="mx-auto my-9 max-w-none text-center text-base leading-7 font-normal text-gray-400 lg:max-w-xl">
              Trusted In More Than 100 Countries And 5 Million Customers.
              Transact Easily And Quickly With Just One Click.
            </p>
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
              <div className="flex items-center gap-2 text-xl font-semibold text-white">
                {/* SVG removed */}
                Licensed and Secured
              </div>
              <div className="flex items-center gap-2 text-xl font-semibold text-white">
                {/* SVG removed */}
                Less Transaction Cost
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <a
                href="javascript:;"
                className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 md:w-auto"
              >
                Free Registration
              </a>
            </div>
          </div>
          <div className="flex translate-y-16 items-center justify-center lg:translate-y-32">
            <img
              src="https://pagedone.io/asset/uploads/1694847867.png"
              alt="John doe card image"
              className="w-2/5 max-w-sm translate-x-20 rotate-45 object-cover md:translate-x-28 lg:w-auto"
            />
            <img
              src="https://pagedone.io/asset/uploads/1694847836.png"
              alt="John doe card image"
              className="w-2/5 max-w-sm rotate-45 object-cover lg:w-auto"
            />
            <img
              src="https://pagedone.io/asset/uploads/1694847849.png"
              alt="John doe card image"
              className="w-2/5 max-w-sm -translate-x-20 rotate-45 object-cover md:-translate-x-28 lg:w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
