export default function AccommodationBusinessesHeroSection() {
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
            <div
              className="hidden w-full lg:flex lg:pl-11 max-lg:mt-1 max-lg:h-screen max-lg:overflow-y-auto"
              id="navbar"
            >
              <ul className="flex lg:items-center lg:justify-center flex-col gap-4 max-lg:pt-4 max-lg:mb-4 lg:mt-0 lg:flex-row lg:mr-auto ">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-base text-gray-500 font-medium transition-all duration-500 hover:text-cyan-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-gray-500 font-medium transition-all duration-500 hover:text-cyan-700"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium hover:text-prime-blue-700 transition-all duration-500 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-cyan-700"
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
                        {/* <li aria-labelledby="dropdownNavbarLink">
                        <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start"  class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg></button>
                        <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                <li>
                                    <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                </li>
                                <li>
                                    <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                                        downloads</a>
                                </li>
                                <li>
                                    <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                </li>
                                <li>
                                    <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                </li>
                            </ul>
                        </div>
                    </li> */}
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
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-cyan-700"
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
                <button className="bg-cyan-50 text-cyan-600 rounded-lg cursor-pointer font-medium text-center shadow-xs transition-all duration-500 py-2.5 px-5 text-sm hover:bg-cyan-100">
                  Login
                </button>
                <button className="bg-cyan-600 text-white rounded-lg cursor-pointer font-medium text-center shadow-xs transition-all duration-500 py-2.5 px-5 text-sm hover:bg-cyan-700">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative py-14 lg:pt-44 lg:pb-14 ">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 mb-14">
          <div className="grid grid-cols-12 lg:-mb-28  relative z-10">
            <h1 className="col-span-12 lg:col-span-8 text-4xl sm:text-5xl font-manrope font-bold text-black sm:leading-snug max-w-3xl pr-5 mb-11">
              Uncovering Unbeatable Deals on Kos, Greece Hotels
            </h1>
            <div className="col-span-12 lg:col-span-4 lg:p-4 max-lg:mb-4 bg-white rounded-xl">
              <div className="p-3 min-[390px]:p-7 bg-cyan-600 w-full h-full rounded-xl">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="block">
                    <div className="dropdown relative inline-flex">
                      <button
                        data-target="dropdown-check-in"
                        className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                      >
                        <div className="flex items-center gap-6">
                          Check In
                          {/* SVG removed */}
                        </div>
                        <p className="text-sm font-normal text-white">
                          Sun, 20 March 2022
                        </p>
                      </button>
                      <div
                        id="dropdown-check-in"
                        className="dropdown-menu rounded-xl shadow-lg bg-white absolute w-max top-6 mt-2 open hidden"
                        aria-labelledby="dropdown-default"
                      >
                        <div className="w-full max-w-[366px] mx-auto px-6 py-6">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-8 border border-gray-300 rounded-full py-0.5 px-0.5 text-xs font-medium text-gray-900 ">
                              <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                                {/* SVG removed */}
                              </button>
                              January
                              <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                                {/* SVG removed */}
                              </button>
                            </div>
                            <button className="flex items-center gap-1.5 py-2.5 pr-1.5 pl-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:text-cyan-600 hover:bg-cyan-100">
                              2023
                              {/* SVG removed */}
                            </button>
                          </div>
                          <table className="pb-3 border-b border-gray-300">
                            <thead className="mb-2">
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Mo
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Tu
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    We
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Th
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Fr
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Sa
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Su
                                  </p>
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    26
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    27
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    28
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    29
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    30
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    31
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    1
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    2
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    3
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    4
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    5
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    6
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    7
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    8
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    9
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    10
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    11
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    12
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                                  <p className="text-sm font-medium text-whiterounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                    13
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10 ">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    14
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10  rounded-r-full">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    15
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    16
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10 ">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    17
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10 rounded-r-full">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    18
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    19
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    20
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    21
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    22
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    23
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    24
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    25
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    26
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    27
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    28
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    29
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    30
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    31
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    1
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    2
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    3
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    4
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    5
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="flex items-center justify-end pt-3 gap-4">
                            <button className="py-2 px-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-cyan-700 hover:text-cyan-600 hover:bg-cyan-100">
                              Cancel
                            </button>
                            <button className="py-2 px-3 rounded-full text-xs font-medium bg-cyan-600 text-white transition-all duration-500 hover:bg-cyan-700">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="dropdown relative inline-flex">
                      <button
                        data-target="dropdown-check-out"
                        className="dropdown-toggle flex items-start flex-col gap-1.5 text-lg font-medium text-white focus-within:outline-0"
                      >
                        <div className="flex items-center gap-6">
                          Check In
                          {/* SVG removed */}
                        </div>
                        <p className="text-sm font-normal text-white">
                          Sun, 20 March 2022
                        </p>
                      </button>
                      <div
                        id="dropdown-check-out"
                        className="dropdown-menu rounded-xl shadow-lg bg-white absolute -left-24 w-max top-6 mt-2 open hidden"
                        aria-labelledby="dropdown-default"
                      >
                        <div className="w-full max-w-[366px] mx-auto px-6 py-6">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-8 border border-gray-300 rounded-full py-0.5 px-0.5 text-xs font-medium text-gray-900 ">
                              <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                                {/* SVG removed */}
                              </button>
                              January
                              <button className="text-gray-900 p-2 rounded-full transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                                {/* SVG removed */}
                              </button>
                            </div>
                            <button className="flex items-center gap-1.5 py-2.5 pr-1.5 pl-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:text-cyan-600 hover:bg-cyan-100">
                              2023
                              {/* SVG removed */}
                            </button>
                          </div>
                          <table className="pb-3 border-b border-gray-300">
                            <thead className="mb-2">
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Mo
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Tu
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    We
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Th
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Fr
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Sa
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Su
                                  </p>
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    26
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    27
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    28
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    29
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    30
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    31
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    1
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    2
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    3
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    4
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    5
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    6
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    7
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    8
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    9
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    10
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    11
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    12
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                                  <p className="text-sm font-medium text-whiterounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                    13
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10 ">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    14
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10  rounded-r-full">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    15
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    16
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10 ">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    17
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10 rounded-r-full">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    18
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    19
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    20
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    21
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    22
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    23
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    24
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    25
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    26
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    27
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    28
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    29
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    30
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    31
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    1
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    2
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    3
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    4
                                  </p>
                                </td>
                                <td className="flex items-center justify-center w-10 h-10">
                                  <p className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    5
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="flex items-center justify-end pt-3 gap-4">
                            <button className="py-2 px-3 rounded-full border border-gray-300 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-cyan-700 hover:text-cyan-600 hover:bg-cyan-100">
                              Cancel
                            </button>
                            <button className="py-2 px-3 rounded-full text-xs font-medium bg-cyan-600 text-white transition-all duration-500 hover:bg-cyan-700">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-8">
                  <p className="text-lg font-medium text-white">Guest</p>
                  <div className="flex items-center gap-2.5">
                    <button className="minus p-0.5 bg-transparent rounded-full border border-transparent text-white transition-all duration-500 hover:text-cyan-600 hover:bg-white">
                      {/* SVG removed */}
                    </button>
                    <input
                      type="text"
                      className="w-7 h-7 rounded-full text-center border-none bg-white placeholder:text-cyan-600 text-cyan-600 font-medium text-sm outline-0"
                      defaultValue={1}
                    />
                    <button className="plus p-0.5 bg-transparent rounded-full border border-transparent text-white transition-all duration-500 hover:text-cyan-600 hover:bg-white">
                      {/* SVG removed */}
                    </button>
                  </div>
                </div>
                <button className="w-full py-3 px-6 text-center bg-white rounded-lg text-base font-semibold text-cyan-600 transition-all duration-500 hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1710221360.png"
            className="relative z-0 rounded-2xl object-cover"
          />
        </div>
      </section>
    </div>
  );
}
