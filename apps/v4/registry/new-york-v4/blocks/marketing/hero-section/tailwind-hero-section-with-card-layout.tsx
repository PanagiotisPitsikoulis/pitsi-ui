export default function TailwindHeroSectionWithCardLayout() {
  return (
    <div>
      <nav className="z-50 w-full bg-white py-5 transition-all duration-500 lg:fixed">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a
                href="
        https://pagedone.io/"
                className="flex items-center"
              >
                {/* SVG removed */}
              </a>
              <div className="flex items-center justify-end gap-5">
                <button
                  data-collapse-toggle="navbar"
                  className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div
              className="hidden w-full max-lg:mt-1 max-lg:overflow-y-auto lg:flex lg:pl-11"
              id="navbar"
            >
              <ul className="flex flex-col gap-6 max-lg:mb-4 max-lg:pt-4 lg:mx-auto lg:mt-0 lg:flex-row lg:items-center lg:justify-center">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-600 md:mb-0 lg:mx-3 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block font-medium text-gray-500 transition-all duration-500 hover:text-indigo-600 md:mb-0 lg:mx-3 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-600 lg:m-0 lg:mx-3 lg:mb-0 lg:text-left"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    aria-labelledby="menu1"
                    className="animate-fade relative top-3 z-10 hidden min-w-full rounded-lg bg-white p-2 max-lg:mb-3 md:min-w-[500px] lg:absolute lg:top-14 lg:-left-80 lg:min-w-[800px] lg:p-4 xl:p-8"
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
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                              {/* SVG removed */}
                            </div>
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
                  <button
                    data-target="menu2"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-600 lg:m-0 lg:mx-3 lg:mb-0 lg:text-left"
                  >
                    Features
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    aria-labelledby="menu2"
                    className="dropdown-menu relative top-3 z-10 hidden w-64 rounded-lg bg-white p-2 font-normal max-lg:mb-3 lg:absolute lg:top-14 lg:p-4 xl:p-8"
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
              <div className="flex w-full flex-col justify-start gap-5 max-lg:gap-5 lg:ml-14 lg:w-max lg:flex-row lg:items-center lg:justify-end">
                <div className="relative">
                  <input
                    type="search"
                    className="h-10 w-10 rounded-full border border-gray-200 px-2 py-4 outline-0 transition-all duration-500 focus-within:w-44 focus-within:rounded-full focus-within:border-gray-300 focus-within:pl-10"
                  />
                  {/* SVG removed */}
                </div>
                <button className="flex cursor-pointer items-center justify-center rounded-full bg-gray-900 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 hover:bg-gray-800">
                  {/* SVG removed */}
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative pt-10 pb-10 lg:pt-52 lg:pb-32">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
          <div className="inline-flex w-full flex-col items-center justify-start gap-16 lg:gap-24">
            <div className="flex w-full flex-col items-center justify-start gap-9">
              <div className="flex flex-col items-center justify-start gap-3">
                <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                  Unlock Innovation and Drive
                </h6>
                <h2 className="font-playfairDisplay max-w-2xl text-center text-5xl leading-[62px] font-bold text-gray-900">
                  AI Solutions for a Smarter Tomorrow
                </h2>
              </div>
              <button className="flex items-center justify-center rounded-full bg-gray-100 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-gray-200">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-gray-900">
                  Get Started
                </span>
                {/* SVG removed */}
              </button>
            </div>
            <div className="gri-col-1 grid w-full items-start justify-center gap-6 md:grid-cols-3 md:justify-start lg:gap-8">
              <div className="inline-flex h-full w-full flex-col items-end justify-center gap-16 rounded-[32px] bg-purple-100 p-8 md:p-6 lg:p-8">
                <div className="flex w-full flex-col items-start justify-end gap-5">
                  <h3 className="font-playfairDisplay text-3xl leading-9 font-bold text-gray-900">
                    About Us
                  </h3>
                  <p className="text-base leading-relaxed font-normal text-gray-900">
                    We provide innovative AI solutions that drive growth and
                    efficiency in businesses.
                  </p>
                </div>
                <button className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0px_3px_40px_0px_rgba(16,_24,_40,_0.08)]">
                  {/* SVG removed */}
                </button>
              </div>
              <div className="inline-flex h-full w-full flex-col items-end justify-start gap-16 rounded-[32px] bg-orange-100 p-8 md:p-6 lg:p-8">
                <div className="flex w-full flex-col items-start justify-end gap-5">
                  <h3 className="font-playfairDisplay text-3xl leading-9 font-bold text-gray-900">
                    Our Team
                  </h3>
                  <p className="text-base leading-relaxed font-normal text-gray-900">
                    Our dynamic AI experts consistently deliver impactful
                    solutions for clients.
                  </p>
                </div>
                <button className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0px_3px_40px_0px_rgba(16,_24,_40,_0.08)]">
                  {/* SVG removed */}
                </button>
              </div>
              <div className="inline-flex h-full w-full flex-col items-end justify-start gap-16 rounded-[32px] bg-emerald-100 p-8 md:p-6 lg:p-8">
                <div className="flex w-full flex-col items-start justify-end gap-5">
                  <h3 className="font-playfairDisplay text-3xl leading-9 font-bold text-gray-900">
                    Our Work
                  </h3>
                  <p className="text-base leading-relaxed font-normal text-gray-900">
                    Our AI-powered solutions transform operations and unlock new
                    opportunities.
                  </p>
                </div>
                <button className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0px_3px_40px_0px_rgba(16,_24,_40,_0.08)]">
                  {/* SVG removed */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
