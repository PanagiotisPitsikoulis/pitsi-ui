export default function BookingHeroSectionWithFullBackgroundHeroImageTailwind() {
  return (
    <div>
      <nav className="py-5 lg:fixed transition-all top-0 left-0 z-50 duration-500 w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
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
                  className="lg:hidden flex items-center gap-2.5 text-sm font-medium text-emerald-700"
                >
                  {/* SVG removed */}
                </a>
                <a
                  href="javascript:;"
                  className="lg:hidden flex items-center gap-2.5 text-sm font-medium text-emerald-700"
                >
                  {/* SVG removed */}
                </a>
                <button
                  data-collapse-toggle="navbar"
                  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div
              className="hidden w-full lg:flex lg:pl-11 max-lg:mt-1 max-lg:h-screen max-lg:overflow-y-auto"
              id="navbar"
            >
              <ul className="flex lg:items-center lg:justify-center flex-col gap-4 max-lg:pt-4 max-lg:mb-4 lg:mt-0 lg:flex-row lg:mx-auto ">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-base text-gray-500 font-medium transition-all duration-500 hover:text-emerald-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-gray-500 font-medium transition-all duration-500 hover:text-emerald-700"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium transition-all duration-500 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-emerald-700"
                  >
                    Products
                    {/* SVG removed */}
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
                            <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
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
                            <div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
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
                            <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
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
                            <div className="bg-rose-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
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
                            <div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
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
                            <div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
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
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-emerald-700"
                  >
                    Features
                    {/* SVG removed */}
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
              <div className="flex lg:items-center w-full justify-start flex-col lg:flex-row gap-4 lg:w-max max-lg:gap-4 lg:ml-14 lg:justify-end">
                <div className="relative">
                  <input
                    type="search"
                    className="w-10 h-10 rounded-lg px-2 py-4 outline-0 border border-gray-100 focus-within:pl-10 transition-all duration-500 focus-within:border-gray-300 focus-within:rounded-lg focus-within:w-44"
                  />
                  {/* SVG removed */}
                </div>
                <button className="bg-emerald-700 text-white rounded-lg cursor-pointer font-medium text-center shadow-xs transition-all duration-500 py-2.5 px-5 text-sm hover:bg-emerald-900">
                  sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative p-5 pt-20  lg:h-full bg-cover ">
        <div className="w-full h-full bg-center bg-cover pt-24 pb-12 overflow-hidden rounded-3xl relative  z-0">
          <div className="absolute w-full h-full top-0 left-0 bg-black/40 z-10" />
          <div className="w-full px-8 lg:px-24 h-full relative z-20">
            <div className="flex w-full h-full items-center justify-between flex-col">
              <div className="block">
                <h1 className="font-cormorent font-semibold text-4xl sm:text-5xl md:text-6xl md:leading-snug text-white max-w-xl mx-auto mb-4 text-center">
                  THE BEST LUXURY HOTELS
                </h1>
                <p className="text-center text-lg font-normal text-white mb-7">
                  Discover pure luxury in every corner of our hotel.
                </p>
                <div className="flex flex-col md:flex-row items-center p-3 border border-white/60 rounded-2xl lg:mt-20 gap-6 bg-white/5 backdrop-blur-md sm:w-max mx-auto">
                  <div className="flex flex-col sm:flex-row items-center gap-10 sm:divide-x divide-white/60">
                    <div className="block">
                      <div className="dropdown relative inline-flex">
                        <button
                          data-target="dropdown-check-in"
                          className="dropdown-toggle flex flex-col items-start gap-2.5 text-base font-medium text-white max-sm:text-center bg-transparent mb-1.5 placeholder:text-white focus-within:outline-0"
                        >
                          Check In
                          <p className="text-xs font-medium text-gray-300 max-sm:text-center">
                            Sun, 20 March 2022
                          </p>
                        </button>
                        <div
                          id="dropdown-check-in"
                          className="dropdown-menu rounded-xl shadow-lg bg-white absolute  w-max top-6 mt-2 open hidden"
                          aria-labelledby="dropdown-default"
                        >
                          <div className="w-full max-w-[366px] mx-auto px-6 py-6">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex items-center gap-8 border border-gray-300 rounded-full py-0.5 px-0.5 text-xs font-medium text-gray-900 ">
                                <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                  {/* SVG removed */}
                                </button>
                                January
                                <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                  {/* SVG removed */}
                                </button>
                              </div>
                              <button className="flex items-center gap-1.5 py-2.5 pr-1.5 pl-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:text-indigo-600 hover:bg-indigo-100">
                                2023
                                {/* SVG removed */}
                              </button>
                            </div>
                            <table className="pb-3 border-b border-gray-300">
                              <thead className="mb-2">
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Mo
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Tu
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      We
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Th
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Fr
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Sa
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Su
                                    </p>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      26
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      27
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      28
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      29
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      30
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      31
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      1
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      2
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      3
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      4
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      5
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      6
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      7
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      8
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      9
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      10
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      11
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      12
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                                    <p className="text-sm font-medium text-whiterounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      13
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10 ">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      14
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10  rounded-r-full">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      15
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      16
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10 ">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      17
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10 rounded-r-full">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      18
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      19
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      20
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      21
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      22
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      23
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      24
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      25
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      26
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      27
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      28
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      29
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      30
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      31
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      1
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      2
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      3
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      4
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      5
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="flex items-center justify-end pt-3 gap-4">
                              <button className="py-2 px-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:text-indigo-600 hover:bg-indigo-100">
                                Cancel
                              </button>
                              <button className="py-2 px-3 rounded-full text-xs font-medium bg-indigo-600 text-white transition-all duration-500 hover:bg-indigo-700">
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
                          className="dropdown-toggle flex flex-col items-start gap-2.5 text-base font-medium text-white max-sm:text-center bg-transparent mb-1.5 placeholder:text-white focus-within:outline-0"
                        >
                          Check Out
                          <p className="text-xs font-medium text-gray-300 max-sm:text-center">
                            Mon, 21 March 2022
                          </p>
                        </button>
                        <div
                          id="dropdown-check-out"
                          className="dropdown-menu rounded-xl shadow-lg bg-white -left-24 absolute w-max top-6 mt-2 open hidden"
                          aria-labelledby="dropdown-default"
                        >
                          <div className="w-full max-w-[366px] mx-auto px-6 py-6">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex items-center gap-8 border border-gray-300 rounded-full py-0.5 px-0.5 text-xs font-medium text-gray-900 ">
                                <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                  {/* SVG removed */}
                                </button>
                                January
                                <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
                                  {/* SVG removed */}
                                </button>
                              </div>
                              <button className="flex items-center gap-1.5 py-2.5 pr-1.5 pl-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:text-indigo-600 hover:bg-indigo-100">
                                2023
                                {/* SVG removed */}
                              </button>
                            </div>
                            <table className="pb-3 border-b border-gray-300">
                              <thead className="mb-2">
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Mo
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Tu
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      We
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Th
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Fr
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Sa
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      Su
                                    </p>
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      26
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      27
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      28
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      29
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      30
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      31
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      1
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      2
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      3
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      4
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      5
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      6
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      7
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      8
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      9
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      10
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      11
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      12
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                                    <p className="text-sm font-medium text-whiterounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      13
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10 ">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      14
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10  rounded-r-full">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      15
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      16
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10 ">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      17
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10 rounded-r-full">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      18
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      19
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      20
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      21
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      22
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      23
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      24
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      25
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      26
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      27
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      28
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      29
                                    </p>
                                  </td>
                                </tr>
                                <tr className="flex">
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      30
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      31
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      1
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      2
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      3
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      4
                                    </p>
                                  </td>
                                  <td className="flex items-center justify-center w-10 h-10">
                                    <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                      5
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="flex items-center justify-end pt-3 gap-4">
                              <button className="py-2 px-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:text-indigo-600 hover:bg-indigo-100">
                                Cancel
                              </button>
                              <button className="py-2 px-3 rounded-full text-xs font-medium bg-indigo-600 text-white transition-all duration-500 hover:bg-indigo-700">
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
                          className="dropdown-toggle block text-xs font-medium text-gray-300 max-sm:text-center bg-transparent focus-within:outline-0"
                        >
                          <p className="text-base font-medium text-white mb-1.5 max-sm:text-center">
                            Guest
                          </p>
                          1 Adults
                        </button>
                        <div
                          id="dropdown-Guest"
                          className="dropdown-menu rounded-xl shadow-lg bg-white -left-24 absolute top-full w-48 mt-2 hidden"
                          aria-labelledby="dropdown-Guest"
                        >
                          <ul className="py-2">
                            <li>
                              <a
                                className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                                href="javascript:;"
                              >
                                2 Adults
                              </a>
                            </li>
                            <li>
                              <a
                                className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                                href="javascript:;"
                              >
                                3 Adults
                              </a>
                            </li>
                            <li>
                              <a
                                className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                                href="javascript:;"
                              >
                                4 Adults
                              </a>
                            </li>
                            <li>
                              <a
                                className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                                href="javascript:;"
                              >
                                5 Adults
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="block w-full relative"></div>
                    </div>
                  </div>
                  <button className="rounded-xl py-3.5 px-8 bg-white text-lg font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-800 hover:text-white">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="flex flex-col max-lg:mt-16 max-lg:gap-10 lg:flex-row lg:mt-16 lg:items-center justify-between w-full">
                <p className="text-base font-normal text-white max-w-2xl max-lg:mx-auto max-lg:text-center pr-10">
                  We embrace the allure of wanderlust, recognizing that everyone
                  deserves the chance to embark on their own hotel adventure,
                  discovering <br />
                  comfort and style amidst new surroundings.
                </p>
                <div className="flex flex-col min-[470px]:flex-row items-center gap-8 max-lg:justify-center">
                  <div className="block">
                    <h4 className="font-manrope max-[470px]:text-center font-semibold text-4xl leading-snug text-white mb-2">
                      121+
                    </h4>
                    <p className="text-base font-normal max-[470px]:text-center text-white whitespace-nowrap">
                      Capital Raised
                    </p>
                  </div>
                  <div className="block">
                    <h4 className="font-manrope font-semibold max-[470px]:text-center text-4xl leading-snug text-white mb-2">
                      90+
                    </h4>
                    <p className="text-base font-normal text-white max-[470px]:text-center whitespace-nowrap">
                      Happy Customer
                    </p>
                  </div>
                  <div className="block">
                    <h4 className="font-manrope font-semibold text-4xl max-[470px]:text-center leading-snug text-white mb-2">
                      1.5K+
                    </h4>
                    <p className="text-base font-normal text-white max-[470px]:text-center whitespace-nowrap">
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
  );
}
