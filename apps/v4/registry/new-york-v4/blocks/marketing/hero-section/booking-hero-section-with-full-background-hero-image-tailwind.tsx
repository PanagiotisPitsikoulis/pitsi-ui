export default function BookingHeroSectionWithFullBackgroundHeroImageTailwind() {
  return (
    <div>
      <nav className="top-0 left-0 z-50 w-full bg-white py-5 transition-all duration-500 lg:fixed">
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
                <a
                  href="javascript:;"
                  className="flex items-center gap-2.5 text-sm font-medium text-emerald-700 lg:hidden"
                >
                  {/* SVG removed */}
                </a>
                <a
                  href="javascript:;"
                  className="flex items-center gap-2.5 text-sm font-medium text-emerald-700 lg:hidden"
                >
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
            </div>
            <div
              className="hidden w-full max-lg:mt-1 max-lg:h-screen max-lg:overflow-y-auto lg:flex lg:pl-11"
              id="navbar"
            >
              <ul className="flex flex-col gap-4 max-lg:mb-4 max-lg:pt-4 lg:mx-auto lg:mt-0 lg:flex-row lg:items-center lg:justify-center">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-700 md:mb-0 lg:mr-6 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block font-medium text-gray-500 transition-all duration-500 hover:text-emerald-700 md:mb-0 lg:mr-6 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left"
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
                    className="dropdown-toggle mr-auto mb-2 flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left"
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
              <div className="flex w-full flex-col justify-start gap-4 max-lg:gap-4 lg:ml-14 lg:w-max lg:flex-row lg:items-center lg:justify-end">
                <div className="relative">
                  <input
                    type="search"
                    className="h-10 w-10 rounded-lg border border-gray-100 px-2 py-4 outline-0 transition-all duration-500 focus-within:w-44 focus-within:rounded-lg focus-within:border-gray-300 focus-within:pl-10"
                  />
                  {/* SVG removed */}
                </div>
                <button className="cursor-pointer rounded-lg bg-emerald-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-xs transition-all duration-500 hover:bg-emerald-900">
                  sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative bg-cover p-5 pt-20 lg:h-full">
        <div className="relative z-0 h-full w-full overflow-hidden rounded-3xl bg-cover bg-center pt-24 pb-12">
          <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/40" />
          <div className="relative z-20 h-full w-full px-8 lg:px-24">
            <div className="flex h-full w-full flex-col items-center justify-between">
              <div className="block">
                <h1 className="font-cormorent mx-auto mb-4 max-w-xl text-center text-4xl font-semibold text-white sm:text-5xl md:text-6xl md:leading-snug">
                  THE BEST LUXURY HOTELS
                </h1>
                <p className="mb-7 text-center text-lg font-normal text-white">
                  Discover pure luxury in every corner of our hotel.
                </p>
                <div className="mx-auto flex flex-col items-center gap-6 rounded-2xl border border-white/60 bg-white/5 p-3 backdrop-blur-md sm:w-max md:flex-row lg:mt-20">
                  <div className="flex flex-col items-center gap-10 divide-white/60 sm:flex-row sm:divide-x">
                    <div className="block">
                      <div className="dropdown relative inline-flex">
                        <button
                          data-target="dropdown-check-in"
                          className="dropdown-toggle mb-1.5 flex flex-col items-start gap-2.5 bg-transparent text-base font-medium text-white placeholder:text-white focus-within:outline-0 max-sm:text-center"
                        >
                          Check In
                          <p className="text-xs font-medium text-gray-300 max-sm:text-center">
                            Sun, 20 March 2022
                          </p>
                        </button>
                        <div
                          id="dropdown-check-in"
                          className="dropdown-menu open absolute top-6 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                          aria-labelledby="dropdown-default"
                        >
                          <div className="mx-auto w-full max-w-[366px] px-6 py-6">
                            <div className="mb-2 flex items-center gap-2">
                              <div className="flex items-center gap-8 rounded-full border border-gray-300 px-0.5 py-0.5 text-xs font-medium text-gray-900">
                                <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                  {/* SVG removed */}
                                </button>
                                January
                                <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                  {/* SVG removed */}
                                </button>
                              </div>
                              <button className="flex items-center gap-1.5 rounded-full border border-gray-300 py-2.5 pr-1.5 pl-3 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                2023
                                {/* SVG removed */}
                              </button>
                            </div>
                            <table className="border-b border-gray-300 pb-3">
                              <thead className="mb-2">
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Mo
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Tu
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      We
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Th
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Fr
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Sa
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Su
                                    </p>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      26
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      27
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      28
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      29
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      30
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      31
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      1
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      2
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      3
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      4
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      5
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      6
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      7
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      8
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      9
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      10
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      11
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      12
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                                    <p className="text-whiterounded-full flex h-full w-full items-center justify-center text-sm font-medium transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      13
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      14
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      15
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      16
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      17
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      18
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      19
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      20
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      21
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      22
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      23
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      24
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      25
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      26
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      27
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      28
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      29
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      30
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      31
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      1
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      2
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      3
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      4
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      5
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="flex items-center justify-end gap-4 pt-3">
                              <button className="rounded-full border border-gray-300 px-3 py-2 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                Cancel
                              </button>
                              <button className="rounded-full bg-indigo-600 px-3 py-2 text-xs font-medium text-white transition-all duration-500 hover:bg-indigo-700">
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block sm:pl-10">
                      <div className="dropdown relative inline-flex">
                        <button
                          data-target="dropdown-check-out"
                          className="dropdown-toggle mb-1.5 flex flex-col items-start gap-2.5 bg-transparent text-base font-medium text-white placeholder:text-white focus-within:outline-0 max-sm:text-center"
                        >
                          Check Out
                          <p className="text-xs font-medium text-gray-300 max-sm:text-center">
                            Mon, 21 March 2022
                          </p>
                        </button>
                        <div
                          id="dropdown-check-out"
                          className="dropdown-menu open absolute top-6 -left-24 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                          aria-labelledby="dropdown-default"
                        >
                          <div className="mx-auto w-full max-w-[366px] px-6 py-6">
                            <div className="mb-2 flex items-center gap-2">
                              <div className="flex items-center gap-8 rounded-full border border-gray-300 px-0.5 py-0.5 text-xs font-medium text-gray-900">
                                <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                  {/* SVG removed */}
                                </button>
                                January
                                <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                  {/* SVG removed */}
                                </button>
                              </div>
                              <button className="flex items-center gap-1.5 rounded-full border border-gray-300 py-2.5 pr-1.5 pl-3 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                2023
                                {/* SVG removed */}
                              </button>
                            </div>
                            <table className="border-b border-gray-300 pb-3">
                              <thead className="mb-2">
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Mo
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Tu
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      We
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Th
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Fr
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Sa
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Su
                                    </p>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      26
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      27
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      28
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      29
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      30
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      31
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      1
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      2
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      3
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      4
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      5
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      6
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      7
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      8
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      9
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      10
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      11
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      12
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                                    <p className="text-whiterounded-full flex h-full w-full items-center justify-center text-sm font-medium transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      13
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      14
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      15
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      16
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      17
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      18
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      19
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      20
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      21
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      22
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      23
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      24
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      25
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      26
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      27
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      28
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      29
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      30
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      31
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      1
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      2
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      3
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      4
                                    </p>
                                  </td>
                                  <td className="flex h-10 w-10 items-center justify-center">
                                    <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      5
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="flex items-center justify-end gap-4 pt-3">
                              <button className="rounded-full border border-gray-300 px-3 py-2 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                Cancel
                              </button>
                              <button className="rounded-full bg-indigo-600 px-3 py-2 text-xs font-medium text-white transition-all duration-500 hover:bg-indigo-700">
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block sm:pl-10">
                      <div className="dropdown relative inline-flex">
                        <button
                          data-target="dropdown-Guest"
                          className="dropdown-toggle block bg-transparent text-xs font-medium text-gray-300 focus-within:outline-0 max-sm:text-center"
                        >
                          <p className="mb-1.5 text-base font-medium text-white max-sm:text-center">
                            Guest
                          </p>
                          1 Adults
                        </button>
                        <div
                          id="dropdown-Guest"
                          className="dropdown-menu absolute top-full -left-24 mt-2 hidden w-48 rounded-xl bg-white shadow-lg"
                          aria-labelledby="dropdown-Guest"
                        >
                          <ul className="py-2">
                            <li>
                              <a
                                className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                                href="javascript:;"
                              >
                                2 Adults
                              </a>
                            </li>
                            <li>
                              <a
                                className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                                href="javascript:;"
                              >
                                3 Adults
                              </a>
                            </li>
                            <li>
                              <a
                                className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                                href="javascript:;"
                              >
                                4 Adults
                              </a>
                            </li>
                            <li>
                              <a
                                className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                                href="javascript:;"
                              >
                                5 Adults
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="relative block w-full"></div>
                    </div>
                  </div>
                  <button className="rounded-xl bg-white px-8 py-3.5 text-lg font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-800 hover:text-white">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="flex w-full flex-col justify-between max-lg:mt-16 max-lg:gap-10 lg:mt-16 lg:flex-row lg:items-center">
                <p className="max-w-2xl pr-10 text-base font-normal text-white max-lg:mx-auto max-lg:text-center">
                  We embrace the allure of wanderlust, recognizing that everyone
                  deserves the chance to embark on their own hotel adventure,
                  discovering <br />
                  comfort and style amidst new surroundings.
                </p>
                <div className="flex flex-col items-center gap-8 max-lg:justify-center min-[470px]:flex-row">
                  <div className="block">
                    <h4 className="font-manrope mb-2 text-4xl leading-snug font-semibold text-white max-[470px]:text-center">
                      121+
                    </h4>
                    <p className="text-base font-normal whitespace-nowrap text-white max-[470px]:text-center">
                      Capital Raised
                    </p>
                  </div>
                  <div className="block">
                    <h4 className="font-manrope mb-2 text-4xl leading-snug font-semibold text-white max-[470px]:text-center">
                      90+
                    </h4>
                    <p className="text-base font-normal whitespace-nowrap text-white max-[470px]:text-center">
                      Happy Customer
                    </p>
                  </div>
                  <div className="block">
                    <h4 className="font-manrope mb-2 text-4xl leading-snug font-semibold text-white max-[470px]:text-center">
                      1.5K+
                    </h4>
                    <p className="text-base font-normal whitespace-nowrap text-white max-[470px]:text-center">
                      Property Option
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
