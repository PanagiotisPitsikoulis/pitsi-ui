export default function AccommodationBusinessesHeroSection() {
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
              className="hidden w-full max-lg:mt-1 max-lg:h-screen max-lg:overflow-y-auto lg:flex lg:pl-11"
              id="navbar"
            >
              <ul className="flex flex-col gap-4 max-lg:mb-4 max-lg:pt-4 lg:mt-0 lg:mr-auto lg:flex-row lg:items-center lg:justify-center">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block text-base font-medium text-gray-500 transition-all duration-500 hover:text-cyan-700 md:mb-0 lg:mr-6 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block font-medium text-gray-500 transition-all duration-500 hover:text-cyan-700 md:mb-0 lg:mr-6 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle hover:text-prime-blue-700 mr-auto flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-cyan-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left"
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
                    className="dropdown-toggle hover:text-prime-blue-700 mr-auto mb-2 flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-cyan-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left"
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
                <button className="cursor-pointer rounded-lg bg-cyan-50 px-5 py-2.5 text-center text-sm font-medium text-cyan-600 shadow-xs transition-all duration-500 hover:bg-cyan-100">
                  Login
                </button>
                <button className="cursor-pointer rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-xs transition-all duration-500 hover:bg-cyan-700">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative py-14 lg:pt-44 lg:pb-14">
        <div className="mx-auto mb-14 w-full max-w-7xl px-4 lg:px-8">
          <div className="relative z-10 grid grid-cols-12 lg:-mb-28">
            <h1 className="font-manrope col-span-12 mb-11 max-w-3xl pr-5 text-4xl font-bold text-black sm:text-5xl sm:leading-snug lg:col-span-8">
              Uncovering Unbeatable Deals on Kos, Greece Hotels
            </h1>
            <div className="col-span-12 rounded-xl bg-white max-lg:mb-4 lg:col-span-4 lg:p-4">
              <div className="h-full w-full rounded-xl bg-cyan-600 p-3 min-[390px]:p-7">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div className="block">
                    <div className="dropdown relative inline-flex">
                      <button
                        data-target="dropdown-check-in"
                        className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
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
                        className="dropdown-menu open absolute top-6 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                        aria-labelledby="dropdown-default"
                      >
                        <div className="mx-auto w-full max-w-[366px] px-6 py-6">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="flex items-center gap-8 rounded-full border border-gray-300 px-0.5 py-0.5 text-xs font-medium text-gray-900">
                              <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                                {/* SVG removed */}
                              </button>
                              January
                              <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                                {/* SVG removed */}
                              </button>
                            </div>
                            <button className="flex items-center gap-1.5 rounded-full border border-gray-300 py-2.5 pr-1.5 pl-3 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                              2023
                              {/* SVG removed */}
                            </button>
                          </div>
                          <table className="border-b border-gray-300 pb-3">
                            <thead className="mb-2">
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Mo
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Tu
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    We
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Th
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Fr
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Sa
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Su
                                  </p>
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    26
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    27
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    28
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    29
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    30
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    31
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    1
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    2
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    3
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    4
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    5
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    6
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    7
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    8
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    9
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    10
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    11
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    12
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                                  <p className="text-whiterounded-full flex h-full w-full items-center justify-center text-sm font-medium transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                    13
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    14
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    15
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    16
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    17
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    18
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    19
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    20
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    21
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    22
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    23
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    24
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    25
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    26
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    27
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    28
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    29
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    30
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    31
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    1
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    2
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    3
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    4
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    5
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="flex items-center justify-end gap-4 pt-3">
                            <button className="rounded-full border border-gray-300 px-3 py-2 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-cyan-700 hover:bg-cyan-100 hover:text-cyan-600">
                              Cancel
                            </button>
                            <button className="rounded-full bg-cyan-600 px-3 py-2 text-xs font-medium text-white transition-all duration-500 hover:bg-cyan-700">
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
                        className="dropdown-toggle flex flex-col items-start gap-1.5 text-lg font-medium text-white focus-within:outline-0"
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
                        className="dropdown-menu open absolute top-6 -left-24 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                        aria-labelledby="dropdown-default"
                      >
                        <div className="mx-auto w-full max-w-[366px] px-6 py-6">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="flex items-center gap-8 rounded-full border border-gray-300 px-0.5 py-0.5 text-xs font-medium text-gray-900">
                              <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                                {/* SVG removed */}
                              </button>
                              January
                              <button className="rounded-full p-2 text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                                {/* SVG removed */}
                              </button>
                            </div>
                            <button className="flex items-center gap-1.5 rounded-full border border-gray-300 py-2.5 pr-1.5 pl-3 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-cyan-100 hover:text-cyan-600">
                              2023
                              {/* SVG removed */}
                            </button>
                          </div>
                          <table className="border-b border-gray-300 pb-3">
                            <thead className="mb-2">
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Mo
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Tu
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    We
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Th
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Fr
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Sa
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    Su
                                  </p>
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    26
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    27
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    28
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    29
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    30
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    31
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    1
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    2
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    3
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    4
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    5
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    6
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    7
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    8
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    9
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    10
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    11
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    12
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                                  <p className="text-whiterounded-full flex h-full w-full items-center justify-center text-sm font-medium transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                                    13
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    14
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    15
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center rounded-l-full">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    16
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    17
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center rounded-r-full">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    18
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    19
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    20
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    21
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    22
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    23
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    24
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    25
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    26
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    27
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    28
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    29
                                  </p>
                                </td>
                              </tr>
                              <tr className="flex">
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    30
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    31
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    1
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    2
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    3
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    4
                                  </p>
                                </td>
                                <td className="flex h-10 w-10 items-center justify-center">
                                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-100 hover:text-cyan-600">
                                    5
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="flex items-center justify-end gap-4 pt-3">
                            <button className="rounded-full border border-gray-300 px-3 py-2 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-cyan-700 hover:bg-cyan-100 hover:text-cyan-600">
                              Cancel
                            </button>
                            <button className="rounded-full bg-cyan-600 px-3 py-2 text-xs font-medium text-white transition-all duration-500 hover:bg-cyan-700">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-lg font-medium text-white">Guest</p>
                  <div className="flex items-center gap-2.5">
                    <button className="minus rounded-full border border-transparent bg-transparent p-0.5 text-white transition-all duration-500 hover:bg-white hover:text-cyan-600">
                      {/* SVG removed */}
                    </button>
                    <input
                      type="text"
                      className="h-7 w-7 rounded-full border-none bg-white text-center text-sm font-medium text-cyan-600 outline-0 placeholder:text-cyan-600"
                      defaultValue={1}
                    />
                    <button className="plus rounded-full border border-transparent bg-transparent p-0.5 text-white transition-all duration-500 hover:bg-white hover:text-cyan-600">
                      {/* SVG removed */}
                    </button>
                  </div>
                </div>
                <button className="w-full rounded-lg bg-white px-6 py-3 text-center text-base font-semibold text-cyan-600 transition-all duration-500 hover:scale-105">
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
  )
}
