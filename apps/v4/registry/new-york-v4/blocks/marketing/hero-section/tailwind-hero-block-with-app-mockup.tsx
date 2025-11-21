export default function TailwindHeroBlockWithAppMockup() {
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
                className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* SVG removed */}
              </button>
            </div>
            <div
              className="hidden w-full max-lg:py-4 lg:flex lg:pl-11"
              id="navbar"
            >
              <ul className="mt-4 flex flex-col max-lg:mb-4 max-lg:gap-4 lg:mt-0 lg:flex-row lg:items-center">
                <li>
                  <a
                    href="javascript:;"
                    className="mb-2 block text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:mr-6 lg:text-left lg:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="mb-2 block text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:mr-6 lg:text-left lg:text-base"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle hover:text-prime-blue-700 mr-auto flex items-center justify-between text-base font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left"
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
                <li className="relative">
                  <div className="dropdown relative inline-flex">
                    <button
                      data-target="dropdown-feature"
                      className="dropdown-toggle hover:text-prime-blue-700 mr-auto mb-2 flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 max-lg:h-max lg:m-0 lg:mr-6 lg:mb-0 lg:text-left"
                    >
                      Features
                      {/* SVG removed */}
                    </button>
                    <div
                      id="dropdown-feature"
                      className="dropdown-menu relative mt-2 hidden rounded-xl shadow-lg max-lg:top-4 max-lg:-left-14 max-lg:bg-white lg:absolute lg:top-full lg:w-72 lg:bg-white"
                      aria-labelledby="dropdown-feature"
                    >
                      <ul className="py-2">
                        <li>
                          <a
                            className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                            href="#"
                          >
                            Downloads
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                            href="#"
                          >
                            Saved Files
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                            href="#"
                          >
                            Notifications
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col justify-start max-lg:gap-4 lg:flex-1 lg:flex-row lg:items-center lg:justify-end">
                <button className="cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-center text-sm font-semibold text-indigo-600 shadow-xs transition-all duration-500 hover:bg-indigo-100">
                  Login
                </button>
                <button className="cursor-pointer rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 lg:ml-5">
                  Sign up{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="h-full pt-0 lg:pt-20 lg:pl-8">
        <div className="m-5 overflow-hidden rounded-2xl bg-indigo-50 py-10 lg:m-0 lg:rounded-tl-2xl lg:rounded-bl-2xl xl:py-8 2xl:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:gap32 grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
              <div className="w-full lg:col-span-6 xl:col-span-5 xl:-mx-0 2xl:-mx-5">
                <div className="flex items-center justify-center text-sm font-medium text-gray-500 lg:justify-start">
                  <span className="mr-3 rounded-2xl bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                    #1
                  </span>
                  Investment app
                </div>
                <h1 className="font-manrope py-8 text-center text-5xl leading-[70px] font-bold text-gray-900 lg:text-left">
                  The new standard for{" "}
                  <span className="text-indigo-600">Modern investor</span>
                </h1>
                <p className="text-center text-lg text-gray-500 lg:text-left">
                  When you’re ready to invest, quickly execute your orders with
                  Complex and outdated.
                </p>
                <div className="md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] relative my-10 flex h-auto flex-col items-center justify-between gap-y-4 rounded-full border border-transparent p-1.5 transition-all duration-500 focus-within:border-indigo-600 hover:border-indigo-600 md:h-16 md:flex-row md:bg-white">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter email to get started"
                    className="shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] w-full flex-1 rounded-full bg-white px-6 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none md:w-fit md:bg-transparent md:shadow-none"
                  />
                  <button className="w-full cursor-pointer rounded-full bg-indigo-600 px-7 py-3 text-base font-semibold text-white transition-all duration-500 hover:bg-indigo-700 md:w-fit">
                    Get Started
                  </button>
                </div>
                <div className="flex flex-col items-center lg:flex-row">
                  <div className="flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1694846673.png"
                      alt="Rounded image "
                      className="relative z-50 rounded-full border-2 border-solid border-indigo-50 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1694846691.png"
                      alt="Rounded image"
                      className="relative z-30 -ml-3 rounded-full border-2 border-solid border-indigo-50 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1694846704.png"
                      alt="Rounded image"
                      className="relative z-20 -ml-3 rounded-full border-2 border-solid border-indigo-50 object-cover"
                    />
                  </div>
                  <span className="mt-3 text-base font-medium text-gray-600 lg:ml-3">
                    People have joined
                  </span>
                </div>
              </div>
              <div className="block w-full lg:col-span-6 xl:col-span-7">
                <div className="w-full sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                  <img
                    src="https://pagedone.io/asset/uploads/1694846193.png"
                    alt="Dashboard image"
                    className="rounded-l-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
