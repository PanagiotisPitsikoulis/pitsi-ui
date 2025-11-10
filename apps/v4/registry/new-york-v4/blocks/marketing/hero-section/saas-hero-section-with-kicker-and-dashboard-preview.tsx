export default function SaasHeroSectionWithKickerAndDashboardPreview() {
  return (
    <div>
      <nav
        className="border-b-default z-10 w-full border-solid border-gray-200 bg-inherit py-5 lg:fixed"
        id="topnav"
      >
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between px-4 lg:hidden">
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
              className="hidden w-full justify-between py-5 transition-all delay-200 duration-500 max-lg:mt-1 max-lg:h-auto max-lg:overflow-auto max-lg:bg-white max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 lg:flex"
              id="navbar"
            >
              <ul className="mt-4 flex flex-col max-lg:mb-4 max-lg:gap-4 md:mt-0 lg:flex-1 lg:flex-row lg:items-center">
                <li>
                  <a
                    href="javascript:;"
                    className="hover:text-prime-blue-700 mb-2 block text-sm font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 md:mr-3 md:mb-0 lg:mr-6 lg:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="hover:text-prime-blue-700 mb-2 block text-sm font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 md:mr-3 md:mb-0 lg:mr-6 lg:text-base"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle hover:text-prime-blue-700 mr-auto flex items-center justify-between text-sm font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
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
                      className="dropdown-toggle hover:text-prime-blue-700 mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 max-lg:h-max lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                    >
                      Features
                      {/* SVG removed */}
                    </button>
                    <div
                      id="dropdown-feature"
                      className="dropdown-menu relative mt-2 hidden rounded-xl shadow-lg max-lg:top-2 max-lg:-left-14 max-lg:bg-white lg:absolute lg:top-full lg:w-72 lg:bg-white"
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
              <a
                href="https://pagedone.io/"
                className="hidden items-center lg:flex"
              >
                {/* SVG removed */}
              </a>
              <div className="flex flex-col justify-start max-lg:gap-4 lg:flex-1 lg:flex-row lg:items-center lg:justify-end">
                <button className="cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-center text-sm font-semibold text-indigo-600 shadow-xs transition-all duration-500 hover:bg-indigo-100">
                  Login
                </button>
                <button className="cursor-pointer rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 lg:ml-5">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-cover bg-center pt-8 lg:pt-32">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-4 flex w-60 items-center justify-between rounded-full border border-indigo-600 p-1">
            <span className="font-inter ml-3 text-xs font-medium text-gray-900">
              Explore how to use for brands.
            </span>
            <a
              href="javascript:;"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600"
            >
              {/* SVG removed */}
            </a>
          </div>
          <h1 className="font-manrope mx-auto mb-5 max-w-2xl text-center text-4xl leading-[50px] font-bold text-gray-900 md:text-5xl">
            Control your Finances with our
            <span className="text-indigo-600">Smart Tool </span>
          </h1>
          <p className="mx-auto mb-9 max-w-sm text-center text-base leading-7 font-normal text-gray-500">
            Invest intelligently and discover a better way to manage your entire
            wealth easily.
          </p>
          <a
            href="javascript:;"
            className="mb-14 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-7 py-3 text-center text-base font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 md:w-auto"
          >
            Create an account
            {/* SVG removed */}
          </a>
          <div className="flex justify-center">
            <img
              src="https://pagedone.io/asset/uploads/1691054543.png"
              alt="Dashboard image"
              className="h-auto rounded-t-3xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
