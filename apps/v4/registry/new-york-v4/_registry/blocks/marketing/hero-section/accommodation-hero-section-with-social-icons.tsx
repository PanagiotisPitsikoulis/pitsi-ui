export default function AccommodationHeroSectionWithSocialIcons() {
  return (
    <div className="w-full bg-[url('https://pagedone.io/asset/uploads/1719483633.png')] bg-cover bg-center bg-no-repeat">
      <nav className="z-50 w-full border-b border-gray-500 bg-transparent py-5 transition-all duration-500 lg:fixed">
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
                    className="nav-link block text-base font-medium text-white transition-all duration-500 hover:text-gray-50 md:mb-0 lg:mx-3 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block text-base font-medium text-white transition-all duration-500 hover:text-gray-50 md:mb-0 lg:mx-3 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-white transition-all duration-500 hover:text-gray-50 lg:m-0 lg:mx-3 lg:mb-0 lg:text-left"
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
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-white transition-all duration-500 hover:text-gray-50 lg:m-0 lg:mx-3 lg:mb-0 lg:text-left"
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
                <button className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 hover:bg-gray-100">
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
        <div className="inline-flex w-full flex-col items-center justify-start pt-20 pb-20 lg:pt-48">
          <div className="flex w-full flex-col items-start justify-center gap-12 pr-8 pl-8 md:flex-row lg:pl-28">
            <div className="inline-flex w-full flex-col items-start justify-start gap-12 md:gap-48 lg:gap-56">
              <div className="flex w-full flex-col items-center justify-start gap-2.5">
                <h3 className="font-manrope text-center text-2xl font-medium tracking-[9.60px] text-white">
                  EXPLORE
                </h3>
                <h2 className="font-manrope text-center text-6xl leading-relaxed font-extrabold text-white md:text-9xl md:leading-tight">
                  Traveling
                </h2>
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-5 md:flex-row lg:gap-8">
                <div className="block w-full">
                  <div className="dropdown relative inline-flex w-full">
                    <div className="flex w-full items-center">
                      <button
                        data-target="dropdown-check-in"
                        className="dropdown-toggle flex w-full items-center gap-3 rounded-lg bg-transparent bg-white/10 px-4 py-3 text-sm leading-normal font-medium text-white backdrop-blur-lg placeholder:text-white focus-within:outline-0 max-sm:text-center md:gap-2.5 md:px-3.5 md:py-2.5 lg:gap-3.5 lg:px-5 lg:py-4"
                      >
                        {/* SVG removed */}
                        <div className="flex w-full flex-col">
                          <div className="flex w-full items-center justify-between">
                            <span className="leading-normal"> Check in</span>
                            {/* SVG removed */}
                          </div>
                          <p className="flex text-xs leading-normal font-normal text-white">
                            Sun, 20 March 2024
                          </p>
                        </div>
                      </button>
                      <div
                        id="dropdown-check-in"
                        className="dropdown-menu open absolute top-16 z-10 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
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
                </div>
                <div className="block w-full">
                  <div className="dropdown relative inline-flex w-full">
                    <div className="flex w-full items-center">
                      <button
                        data-target="dropdown-check-out"
                        className="dropdown-toggle flex w-full items-center gap-3 rounded-lg bg-transparent bg-white/10 px-4 py-3 text-sm leading-normal font-medium text-white backdrop-blur-lg placeholder:text-white focus-within:outline-0 max-sm:text-center md:gap-2.5 md:px-3.5 md:py-2.5 lg:gap-3.5 lg:px-5 lg:py-4"
                      >
                        {/* SVG removed */}
                        <div className="flex w-full flex-col">
                          <div className="flex w-full items-center justify-between">
                            <span className="leading-normal"> Check Out</span>
                            {/* SVG removed */}
                          </div>
                          <p className="flex text-xs leading-normal font-normal text-white">
                            Sun, 22 March 2024
                          </p>
                        </div>
                      </button>
                      <div
                        id="dropdown-check-out"
                        className="dropdown-menu open absolute top-16 z-10 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
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
                </div>
                <div className="block w-full">
                  <div className="dropdown relative inline-flex w-full">
                    <div className="flex w-full items-center">
                      <button
                        data-target="dropdown-guest"
                        className="dropdown-toggle flex w-full items-center gap-3 rounded-lg bg-transparent bg-white/10 px-4 py-3 text-sm leading-normal font-medium text-white backdrop-blur-lg placeholder:text-white focus-within:outline-0 max-sm:text-center md:gap-2.5 md:px-3.5 md:py-2.5 lg:gap-3.5 lg:px-5 lg:py-4"
                      >
                        {/* SVG removed */}
                        <div className="flex w-full flex-col">
                          <div className="flex w-full items-center justify-between">
                            <span className="leading-normal">Guest</span>
                            {/* SVG removed */}
                          </div>
                          <p className="flex text-xs leading-normal font-normal text-white">
                            2 Adults
                          </p>
                        </div>
                      </button>
                      <div
                        id="dropdown-guest"
                        className="dropdown-menu open absolute top-16 z-10 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                        aria-labelledby="dropdown-default"
                      >
                        <div className="mx-auto w-full max-w-[366px] px-16 py-4">
                          <div className="flex flex-col items-center gap-3 text-xs font-medium text-gray-900">
                            <span>1 Adult</span>
                            <span>2 Adults</span>
                            <span>3 Adults</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-auto w-full flex-row items-center justify-center md:h-[468px] md:w-auto md:flex-col md:justify-between">
              <div className="flex flex-row items-center justify-center gap-7 md:flex-col md:items-start md:justify-start">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <a className="hidden md:flex">{/* SVG removed */}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
