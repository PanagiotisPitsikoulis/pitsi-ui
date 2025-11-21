export default function HeroSectionWithSeperateCardLayout() {
  return (
    <div className="w-full bg-white p-5 lg:p-10">
      <nav className="relative left-0 z-50 w-full rounded-3xl bg-indigo-400 pt-2.5 lg:fixed lg:rounded-none lg:bg-transparent">
        <div className="py-5">
          <div className="mx-auto px-8 sm:px-6 lg:px-14 xl:px-[72px] 2xl:px-20">
            <div className="flex w-full flex-col justify-between lg:flex-row">
              <div className="flex justify-between lg:flex-row">
                <a href="https://pagedone.io/" className="flex items-center">
                  {/* SVG removed */}
                </a>
                <button
                  data-collapse-toggle="navbar"
                  className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* SVG removed */}
                </button>
              </div>
              <div
                className="hidden w-full max-lg:mt-1 lg:flex lg:justify-end"
                id="navbar"
              >
                <ul className="flex flex-col gap-6 max-lg:mb-4 max-lg:pt-4 lg:mt-0 lg:ml-20 lg:flex-row lg:items-center xl:ml-[350px] 2xl:ml-96">
                  <li className="xl:px-1.5">
                    <a
                      href="javascript:;"
                      className="nav-link block text-base font-medium text-white transition-all duration-500 hover:text-gray-900 lg:text-left lg:text-gray-500 xl:px-1.5"
                    >
                      Home
                    </a>
                  </li>
                  <li className="xl:px-1.5">
                    <a
                      href="javascript:;"
                      className="nav-link block text-base font-medium text-white transition-all duration-500 hover:text-gray-900 lg:text-left lg:text-gray-500 xl:px-1.5"
                    >
                      About us
                    </a>
                  </li>
                  <li className="relative xl:px-1.5">
                    <button
                      data-target="menu1"
                      className="dropdown-toggle flex items-center justify-between text-center text-base font-medium text-white transition-all duration-500 hover:text-gray-900 lg:text-left lg:text-gray-500 xl:pl-1.5"
                    >
                      Products
                      {/* SVG removed */}
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
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50">
                                {/* SVG removed */}
                              </div>
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
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                                {/* SVG removed */}
                              </div>
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
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                                {/* SVG removed */}
                              </div>
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
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50">
                                {/* SVG removed */}
                              </div>
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
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                                {/* SVG removed */}
                              </div>
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
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                                {/* SVG removed */}
                              </div>
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
                  <li className="relative xl:px-1.5">
                    <button
                      data-target="menu2"
                      className="dropdown-toggle flex items-center justify-between text-center text-base font-medium text-white transition-all duration-500 hover:text-gray-900 lg:text-left lg:text-gray-500 xl:pl-1.5"
                    >
                      Features
                      {/* SVG removed */}
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
                <div className="flex flex-col justify-start lg:ml-5 lg:flex-row lg:items-center lg:justify-end 2xl:ml-10">
                  <button className="cursor-pointer rounded-full bg-indigo-500 px-3.5 py-2 text-center shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-600 lg:bg-indigo-400 lg:hover:bg-indigo-500">
                    <span className="px-1.5 text-sm leading-6 font-medium text-white">
                      Sign up
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-auto grid -translate-y-24 items-start justify-start gap-8 lg:-translate-y-0 lg:grid-cols-2">
        <div className="inline-flex flex-col items-start justify-center rounded-3xl bg-indigo-400 pt-2.5 pr-5 pb-10 lg:h-full lg:pr-10">
          <div className="flex flex-col items-start justify-start gap-10 pt-28 pl-5 lg:gap-20 lg:pt-48 lg:pl-10">
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="font-manrope w-full text-5xl leading-snug font-semibold text-white xl:max-w-xl">
                Welcome to Your Pet's Happy Place
              </h2>
              <p className="w-full text-base leading-relaxed font-normal text-white xl:max-w-xl">
                Discover a range of products and services designed to keep your
                pets healthy, happy, and well-loved. Join our community of
                passionate pet owners today!
              </p>
            </div>
            <button className="flex w-full items-center justify-center rounded-full bg-amber-200 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-amber-400 sm:w-fit">
              <span className="px-2 text-lg leading-8 font-semibold text-black">
                Learn More
              </span>
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-end rounded-3xl bg-amber-200 pt-2.5 lg:h-full">
          <img
            className="object-cover pt-5 xl:pt-32"
            src="https://pagedone.io/asset/uploads/1719293693.png"
          />
        </div>
      </div>
    </div>
  )
}
