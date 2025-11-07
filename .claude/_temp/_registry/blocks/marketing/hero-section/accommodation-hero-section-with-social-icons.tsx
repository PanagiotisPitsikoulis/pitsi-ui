export default function AccommodationHeroSectionWithSocialIcons() {
  return (
    <div className="bg-[url('https://pagedone.io/asset/uploads/1719483633.png')] bg-no-repeat bg-cover w-full bg-center ">
      <nav className="py-5 lg:fixed w-full bg-transparent transition-all z-50 duration-500 border-b border-gray-500">
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
                <button
                  data-collapse-toggle="navbar"
                  className="inline-flex items-center p-2 text-sm text-white hover:text-gray-900 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div
              className="hidden w-full lg:flex lg:pl-11 max-lg:mt-1 max-lg:overflow-y-auto"
              id="navbar"
            >
              <ul className="flex lg:items-center lg:justify-center flex-col gap-6 max-lg:pt-4 max-lg:mb-4 lg:mt-0 lg:flex-row lg:mx-auto ">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-base text-white font-medium transition-all duration-500 hover:text-gray-50"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-base text-white font-medium transition-all duration-500 hover:text-gray-50"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-white text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-50"
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
                    className="dropdown-toggle flex items-center justify-between text-white text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-50"
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
              <div className="flex lg:items-center w-full justify-start flex-col lg:flex-row gap-5 lg:w-max max-lg:gap-5 lg:ml-14 lg:justify-end">
                <button className="flex items-center justify-center bg-white rounded-lg cursor-pointer shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 py-2 px-3.5 hover:bg-gray-100">
                  <span className="px-1.5 text-black text-sm font-medium leading-6">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full lg:pt-[84px] ">
        <div className="w-full pb-20 lg:pt-48 pt-20 flex-col justify-start items-center inline-flex">
          <div className="w-full lg:pl-28 pl-8 pr-8 justify-center items-start gap-12 flex md:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start lg:gap-56 md:gap-48 gap-12 inline-flex">
              <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                <h3 className="text-center text-white text-2xl font-medium font-manrope tracking-[9.60px]">
                  EXPLORE
                </h3>
                <h2 className="text-center text-white md:text-9xl text-6xl font-extrabold font-manrope md:leading-tight leading-relaxed">
                  Traveling
                </h2>
              </div>
              <div className="w-full justify-center items-start lg:gap-8 gap-5 flex md:flex-row flex-col">
                <div className="w-full block">
                  <div className="w-full dropdown relative inline-flex">
                    <div className="w-full flex items-center ">
                      <button
                        data-target="dropdown-check-in"
                        className="w-full dropdown-toggle flex items-center lg:gap-3.5 md:gap-2.5 gap-3 lg:px-5 md:px-3.5 px-4 lg:py-4 md:py-2.5 py-3 bg-white/10 rounded-lg backdrop-blur-lg text-sm font-medium text-white leading-normal max-sm:text-center bg-transparent placeholder:text-white focus-within:outline-0"
                      >
                        {/* SVG removed */}
                        <div className="w-full flex flex-col">
                          <div className="w-full flex justify-between items-center">
                            <span className="leading-normal"> Check in</span>
                            {/* SVG removed */}
                          </div>
                          <p className="text-xs font-normal leading-normal text-white flex">
                            Sun, 20 March 2024
                          </p>
                        </div>
                      </button>
                      <div
                        id="dropdown-check-in"
                        className="dropdown-menu rounded-xl shadow-lg bg-white absolute z-10 w-max top-16 mt-2 open hidden"
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
                </div>
                <div className="w-full block">
                  <div className="w-full dropdown relative inline-flex">
                    <div className="w-full flex items-center ">
                      <button
                        data-target="dropdown-check-out"
                        className="w-full dropdown-toggle flex items-center lg:gap-3.5 md:gap-2.5 gap-3 lg:px-5 md:px-3.5 px-4 lg:py-4 md:py-2.5 py-3 bg-white/10 rounded-lg backdrop-blur-lg text-sm font-medium text-white leading-normal max-sm:text-center bg-transparent placeholder:text-white focus-within:outline-0"
                      >
                        {/* SVG removed */}
                        <div className="w-full flex flex-col">
                          <div className="w-full flex justify-between items-center">
                            <span className="leading-normal"> Check Out</span>
                            {/* SVG removed */}
                          </div>
                          <p className="text-xs font-normal leading-normal text-white flex">
                            Sun, 22 March 2024
                          </p>
                        </div>
                      </button>
                      <div
                        id="dropdown-check-out"
                        className="dropdown-menu rounded-xl shadow-lg bg-white absolute z-10 w-max top-16 mt-2 open hidden"
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
                </div>
                <div className="w-full block">
                  <div className="w-full dropdown relative inline-flex">
                    <div className="w-full flex items-center ">
                      <button
                        data-target="dropdown-guest"
                        className="dropdown-toggle w-full flex items-center lg:gap-3.5 md:gap-2.5 gap-3 lg:px-5 md:px-3.5 px-4 lg:py-4 md:py-2.5 py-3 bg-white/10 rounded-lg backdrop-blur-lg text-sm font-medium text-white leading-normal max-sm:text-center bg-transparent placeholder:text-white focus-within:outline-0"
                      >
                        {/* SVG removed */}
                        <div className="w-full flex flex-col">
                          <div className="w-full flex justify-between items-center">
                            <span className="leading-normal">Guest</span>
                            {/* SVG removed */}
                          </div>
                          <p className="text-xs font-normal leading-normal text-white flex">
                            2 Adults
                          </p>
                        </div>
                      </button>
                      <div
                        id="dropdown-guest"
                        className="dropdown-menu rounded-xl shadow-lg bg-white absolute w-max z-10 top-16 mt-2 open hidden"
                        aria-labelledby="dropdown-default"
                      >
                        <div className="w-full max-w-[366px] mx-auto px-16 py-4">
                          <div className="flex flex-col items-center gap-3 text-xs font-medium text-gray-900 ">
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
            <div className="md:w-auto w-full md:h-[468px] h-auto md:flex-col flex-row md:justify-between justify-center items-center flex">
              <div className="md:flex-col flex-row md:justify-start justify-center md:items-start items-center gap-7 flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <a className="md:flex hidden">{/* SVG removed */}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
