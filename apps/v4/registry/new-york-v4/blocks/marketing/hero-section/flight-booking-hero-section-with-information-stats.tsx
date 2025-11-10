export default function FlightBookingHeroSectionWithInformationStats() {
  return (
    <div>
      <nav className="w-full bg-white py-5 transition-all duration-500 lg:fixed">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <button
                data-collapse-toggle="navbar"
                className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* SVG removed */}
              </button>
            </div>
            <div
              className="hidden w-full max-lg:py-4 lg:flex lg:pl-10"
              id="navbar"
            >
              <ul className="mt-4 flex flex-col gap-6 max-lg:mb-4 lg:mt-0 lg:flex-row lg:items-center">
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-gray-400 transition-all duration-500 hover:text-gray-900 lg:px-1.5 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-gray-400 transition-all duration-500 hover:text-gray-900 lg:px-1.5 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-base font-medium text-gray-400 transition-all duration-500 hover:text-gray-900 lg:m-0 lg:text-left"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="megamenu"
                    aria-labelledby="megamenu"
                    className="animate-fade open relative top-2 z-10 hidden min-w-full rounded-lg bg-white p-2 shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] md:min-w-[500px] lg:absolute lg:top-14 lg:-left-20 lg:min-w-[800px] lg:p-4 xl:p-8"
                  >
                    <div className="flex flex-col sm:flex-row lg:justify-between">
                      <ul className="text-sm text-gray-700 lg:w-1/2">
                        <h6 className="mb-2 text-sm font-medium text-gray-500">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
                        className="text-sm text-gray-700 lg:w-1/2 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="mb-2 text-sm font-medium text-gray-500">
                          Services
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
              </ul>
              <div className="flex flex-col justify-start gap-5 lg:flex-1 lg:flex-row lg:items-center lg:justify-end">
                <button className="rounded-full bg-black px-3.5 py-2 text-center transition-all duration-500 hover:bg-gray-800">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Login
                  </span>
                </button>
                <button className="rounded-full bg-emerald-600 px-3.5 py-2 text-center shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500 hover:bg-emerald-700">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Sign up{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full lg:pt-[84px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center justify-center gap-8 py-8 lg:grid-cols-2 lg:gap-4 lg:py-14">
            <div className="inline-flex flex-col items-center justify-start gap-10 lg:items-start lg:gap-20">
              <div className="flex flex-col items-center justify-start gap-10 lg:items-start lg:gap-12">
                <div className="flex flex-col items-center justify-start gap-4 lg:items-start">
                  <h2 className="font-manrope text-center text-5xl leading-snug font-semibold text-gray-900 sm:text-6xl sm:leading-snug lg:text-start">
                    We make your Flight
                    <span className="text-emerald-600"> journey</span> as easy
                    as possible
                  </h2>
                  <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                    Embarking on a flight journey can be an exhilarating
                    experience, filled with anticipation for the adventures
                    ahead. To ensure a smooth and enjoyable trip, it's important
                    to prepare adequately.{" "}
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-8 sm:flex-row lg:justify-start">
                  <button className="flex w-full items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-700 sm:w-fit">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                      Booking Now
                    </span>
                    {/* SVG removed */}
                  </button>
                  <button className="flex w-full items-center justify-center rounded-xl bg-emerald-100 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-emerald-200 sm:w-fit">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                      Download App
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-5 sm:gap-6 lg:grid lg:grid-cols-3 lg:items-start lg:justify-start lg:gap-3 xl:gap-9">
                <div className="inline-flex flex-col items-start justify-start gap-2 border-r border-gray-200 pr-5 sm:pr-6 lg:pr-3 xl:pr-9">
                  <h6 className="text-base leading-relaxed font-normal whitespace-nowrap text-gray-500">
                    Years Operated
                  </h6>
                  <h3 className="font-manrope text-2xl leading-9 font-extrabold whitespace-nowrap text-black">
                    48+ Years
                  </h3>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-2 border-r border-gray-200 pr-5 sm:pr-6 lg:pr-3 xl:pr-9">
                  <h6 className="text-base leading-relaxed font-normal whitespace-nowrap text-gray-500">
                    Satisfied Travelers
                  </h6>
                  <h3 className="font-manrope text-2xl leading-9 font-extrabold text-black">
                    50,000+
                  </h3>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-2">
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Satisfied Rate
                  </h6>
                  <h3 className="font-manrope text-2xl leading-9 font-extrabold text-black">
                    90+
                  </h3>
                </div>
              </div>
            </div>
            <img
              src="https://pagedone.io/asset/uploads/1719819219.png"
              alt="hero section image"
              className="h-auto w-full rounded-[24px] object-cover lg:h-full"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
