export default function HeroSectionWithCustomerLogos() {
  return (
    <div>
      <nav className="z-50 w-full bg-white pt-6 pb-5 transition-all duration-500 lg:fixed">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 2xl:px-0">
          <div className="flex w-full flex-col rounded-2xl bg-stone-100 px-8 py-3 lg:flex-row lg:rounded-full">
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
                    className="nav-link block text-base font-medium text-gray-500 transition-all duration-500 hover:text-orange-500 md:mb-0 lg:mx-3 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block text-base font-medium text-gray-500 transition-all duration-500 hover:text-orange-500 md:mb-0 lg:mx-3 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-orange-500 lg:m-0 lg:mx-3 lg:mb-0 lg:text-left"
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
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-orange-500 lg:m-0 lg:mx-3 lg:mb-0 lg:text-left"
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
              <div className="flex w-full flex-col justify-start gap-5 lg:ml-14 lg:w-max lg:flex-row lg:items-center lg:justify-end">
                <button className="flex cursor-pointer items-center justify-center rounded-full bg-orange-500 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 hover:bg-orange-600">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Sign Up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="lg:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 2xl:px-0">
          <div className="inline-flex w-full flex-col items-start justify-start gap-16 pt-8 pb-14">
            <div className="grid grid-cols-1 items-start justify-start gap-6 lg:grid-cols-2 lg:gap-5 xl:gap-8">
              <img
                className="h-auto w-full object-cover md:h-[600px] lg:h-full"
                src="https://pagedone.io/asset/uploads/1719574404.png"
                alt="hero section image"
              />
              <div className="inline-flex flex-col items-start justify-start gap-8">
                <div className="flex flex-col items-start justify-start rounded-2xl bg-emerald-900 p-8">
                  <div className="flex flex-col items-start justify-start gap-5">
                    <div className="flex flex-col items-start justify-start gap-3">
                      <p className="text-sm leading-normal font-medium text-white">
                        Your Online Learning Hub
                      </p>
                      <h2 className="font-manrope text-4xl leading-normal font-extrabold text-white">
                        Begin Your Learning Adventure Today
                      </h2>
                      <p className="text-sm leading-normal font-normal text-gray-200">
                        learning journey today with our curated resources and
                        expert guidance. Explore diverse topics, expand your
                        skills, and achieve your learning goals at your own
                        pace.
                      </p>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-full bg-orange-500 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-orange-600 sm:w-fit">
                      <span className="px-1.5 text-sm leading-6 font-medium text-white">
                        Start for Free
                      </span>
                      {/* SVG removed */}
                    </button>
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 items-start justify-start gap-6 md:grid-cols-2 lg:gap-4 xl:gap-8">
                  <div className="inline-flex h-full w-full flex-col items-start justify-start gap-3.5 rounded-2xl bg-gray-50 p-5 lg:p-4 xl:p-6">
                    <h3 className="font-manrope text-2xl leading-9 font-bold text-black">
                      500K+
                    </h3>
                    <p className="text-xs leading-normal font-normal text-gray-700">
                      learning journey today with our curated resources and
                      expert guidance. Explore diverse topics.{" "}
                    </p>
                  </div>
                  <div className="inline-flex h-full w-full flex-col items-start justify-between gap-3.5 rounded-2xl bg-gray-50 p-5 md:gap-0 lg:p-4 xl:p-6">
                    <h4 className="text-xl leading-8 font-semibold text-black">
                      Over 3000+ Satisfied customers
                    </h4>
                    <div className="inline-flex items-center justify-start gap-3 lg:gap-2 xl:gap-4">
                      <div className="flex items-start justify-start -space-x-2.5">
                        <a className="avatar-item flex items-start justify-start rounded-full border-2 border-white">
                          <img
                            className="avatar rounded-full object-cover lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
                            src="https://pagedone.io/asset/uploads/1719398834.png"
                          />
                        </a>
                        <a className="avatar-item flex items-start justify-start rounded-full border-2 border-white">
                          <img
                            className="avatar rounded-full object-cover lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
                            src="https://pagedone.io/asset/uploads/1719398846.png"
                          />
                        </a>
                        <a className="avatar-item flex items-start justify-start rounded-full border-2 border-white">
                          <img
                            className="avatar rounded-full object-cover lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
                            src="https://pagedone.io/asset/uploads/1719398855.png"
                          />
                        </a>
                        <a className="avatar-item flex items-start justify-start rounded-full border-2 border-white">
                          <img
                            className="avatar rounded-full object-cover lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
                            src="https://pagedone.io/asset/uploads/1719398863.png"
                          />
                        </a>
                      </div>
                      <h6 className="text-sm leading-snug font-medium whitespace-nowrap text-black">
                        People have joined
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-6">
              <h3 className="text-center text-xl leading-8 font-semibold text-black">
                Your Partner in Excellence
              </h3>
              <div className="flex w-full flex-wrap items-center justify-center gap-8 md:justify-between md:gap-4">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
