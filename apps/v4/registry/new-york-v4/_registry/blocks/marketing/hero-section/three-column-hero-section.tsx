export default function ThreeColumnHeroSection() {
  return (
    <div className="w-full bg-black">
      <nav className="z-50 w-full bg-transparent py-5 transition-all duration-500 lg:fixed">
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
                  className="inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
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
                    className="nav-link block text-base font-medium text-white transition-all duration-500 hover:text-gray-400 md:mb-0 lg:mx-3 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block text-base font-medium text-white transition-all duration-500 hover:text-gray-400 md:mb-0 lg:mx-3 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-white transition-all duration-500 hover:text-gray-400 lg:m-0 lg:mx-3 lg:mb-0 lg:text-left"
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
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-white transition-all duration-500 hover:text-gray-400 lg:m-0 lg:mx-3 lg:mb-0 lg:text-left"
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
                <button className="flex cursor-pointer items-center justify-center rounded-lg bg-lime-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 hover:bg-lime-400">
                  <span className="px-1.5 text-sm leading-6 font-medium text-black">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full lg:pt-[84px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-start justify-start gap-4 pt-9 pb-10 lg:flex-row lg:pt-12 xl:pb-0">
            <div className="mx-auto inline-flex w-full flex-col items-center justify-start gap-9 sm:w-[500px] lg:w-[388px] lg:items-start lg:gap-20">
              <div className="flex w-full flex-col items-center justify-start gap-4 lg:items-start lg:gap-10">
                <h2 className="font-manrope text-center text-5xl leading-normal font-semibold text-white lg:text-start xl:text-6xl xl:leading-snug">
                  John Smith is Right Here!
                </h2>
                <p className="text-center text-base leading-relaxed font-normal text-gray-300 lg:text-start">
                  My approach blends creativity with functionality, ensuring
                  each design not only looks impressive but also performs
                  seamlessly
                </p>
                <button className="flex w-full items-center justify-center rounded-xl bg-lime-300 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-lime-400 sm:w-fit">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                    Start for Free
                  </span>
                </button>
              </div>
              <div className="flex w-full items-center justify-center gap-7 lg:items-start lg:justify-start">
                <div className="inline-flex w-fit flex-col items-start justify-start gap-2 lg:w-full">
                  <h3 className="font-manrope text-3xl leading-normal font-bold text-lime-300">
                    500K+
                  </h3>
                  <h4 className="text-xl leading-8 font-normal text-gray-300">
                    In Revenue
                  </h4>
                </div>
                <div className="inline-flex w-fit flex-col items-start justify-start gap-2 lg:w-full">
                  <h3 className="font-manrope text-3xl leading-normal font-bold text-lime-300">
                    200K+
                  </h3>
                  <h4 className="text-xl leading-8 font-normal text-gray-300">
                    Businesses
                  </h4>
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <img
                src="https://pagedone.io/asset/uploads/1720171944.png"
                alt="John Smith image"
                className="mx-auto object-cover"
              />
            </div>
            <div className="mx-auto inline-flex w-full flex-col items-start justify-start gap-8 sm:w-[500px] lg:w-[296px]">
              <div className="group flex w-full flex-col items-start justify-start gap-5">
                <a className="inline-flex items-start justify-start gap-2.5 rounded bg-lime-300 p-3 transition-all duration-700 ease-in-out group-hover:bg-lime-400">
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col items-start justify-start gap-3">
                  <h5 className="text-lg leading-relaxed font-medium text-white">
                    Revolutionary Projectview
                  </h5>
                  <p className="text-sm leading-normal font-normal text-gray-300">
                    Plan and structure work how you want. Quickly organizing
                    tasks.
                  </p>
                </div>
              </div>
              <div className="group flex w-full flex-col items-start justify-start gap-5">
                <a className="inline-flex items-start justify-start gap-2.5 rounded bg-lime-300 p-3 transition-all duration-700 ease-in-out group-hover:bg-lime-400">
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col items-start justify-start gap-3">
                  <h5 className="text-lg leading-relaxed font-medium text-white">
                    App Integrations
                  </h5>
                  <p className="text-sm leading-normal font-normal text-gray-300">
                    Bring all your tools and data together. Also join with
                    hundreds of other apps.
                  </p>
                </div>
              </div>
              <div className="group flex w-full flex-col items-start justify-start gap-5">
                <a className="inline-flex items-start justify-start gap-2.5 rounded bg-lime-300 p-3 transition-all duration-700 ease-in-out group-hover:bg-lime-400">
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col items-start justify-start gap-3">
                  <h5 className="text-lg leading-relaxed font-medium text-white">
                    Data Reporting
                  </h5>
                  <p className="text-sm leading-normal font-normal text-gray-300">
                    Get real time insight into progress and allows teams to
                    track their work habits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
