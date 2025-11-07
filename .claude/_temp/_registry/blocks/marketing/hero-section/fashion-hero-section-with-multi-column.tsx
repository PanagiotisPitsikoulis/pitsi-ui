export default function FashionHeroSectionWithMultiColumn() {
  return (
    <div>
      <nav className="py-5 lg:fixed transition-all top-0 left-0 z-50 duration-500 w-full bg-white border-b border-gray-300">
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
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-base text-gray-500 font-medium transition-all duration-500 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-gray-500 font-medium transition-all duration-500 hover:text-gray-900"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium hover:text-prime-blue-700 transition-all duration-500 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    aria-labelledby="menu1"
                    className="animate-fade z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 lg:-left-80 bg-white rounded-lg shadow-lg max-lg:shadow-inner shadow-gray-200 xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
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
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
                  >
                    Features
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    aria-labelledby="menu2"
                    className="dropdown-menu z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 font-normal bg-white rounded-lg shadow-md shadow-gray-200 w-64 xl:p-8 lg:p-4 p-2 hidden"
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
              <div className="flex lg:items-center w-full justify-start flex-col lg:flex-row gap-3.5 lg:w-max max-lg:gap-4 lg:ml-14 lg:justify-end">
                <button className="p-3 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-500 hover:bg-gray-100">
                  {/* SVG removed */}
                </button>
                <button className="p-3 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-500 hover:bg-gray-100">
                  {/* SVG removed */}
                </button>
                <div className="block">
                  <span className="text-xs font-normal text-gray-500 block">
                    Welcome
                  </span>
                  <a
                    href="javascript:;"
                    className="text-sm font-medium text-gray-900"
                  >
                    Log In/Register
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-3 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-500 hover:bg-gray-100">
                    {/* SVG removed */}
                  </button>
                  <div className="block">
                    <span className="text-xs font-normal text-gray-500 block">
                      Cart
                    </span>
                    <p className="text-sm font-medium text-gray-900">
                      $1,689.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative py-14 lg:pt-36 lg:pb-14 ">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 mb-14">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full  max-lg:gap-6 mb-14">
            <h1 className="font-manrope max-lg:text-center font-medium text-4xl sm:text-5xl sm:leading-snug text-black">
              Sophistication Finds Its Pinnacle <br /> in Simplicity.
            </h1>
            <div className="flex items-center justify-end lg:justify-end gap-5">
              <button className="py-3.5 pl-8 pr-6 text-lg max-h-max bg-gray-900 text-white rounded-full cursor-pointer font-semibold text-center flex items-center gap-2 shadow-xs transition-all duration-500 hover:bg-gray-700">
                Shop Now
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-md mx-auto md:max-w-3xl lg:max-w-full">
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl p-8 bg-emerald-100 ">
                <h6 className="text-xl font-semibold leading-8 text-gray-900 mb-2.5">
                  Elevate your holiday joy with a festive 20% discount using
                  code xzTnm
                </h6>
                <button className="ml-auto flex w-max py-2 border border-gray-500 px-6 text-sm max-h-max bg-emerald-100 text-gray-900 rounded-full cursor-pointer font-medium text-center shadow-xs transition-all duration-500 hover:bg-black hover:text-white">
                  Special Offer
                </button>
              </div>
              <a
                href="javascript:;"
                className="rounded-2xl relative group overflow-hidden cursor-pointer"
              >
                <img
                  src="https://pagedone.io/asset/uploads/1710392347.png"
                  alt="men with t-shirt"
                  className="relative z-0 w-full h-full transition-all duration-1000 group-hover:scale-110 group-hover:rotate-3 rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 z-10 p-8 w-full h-full flex items-end">
                  <div className="block">
                    <h4 className="font-manrope font-medium text-4xl leading-snug text-white mb-1.5">
                      Man’s Shirt
                    </h4>
                    <p className="text-lg font-normal text-white">
                      Elevate your look with our stylish men's shirts, perfect
                      for any occasion
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="grid grid-cols-1 md:col-span-2 lg:col-span-1 md:grid-cols-2 lg:grid-cols-1 gap-8 md:order-last lg:order-none">
              <a
                href="javascript:;"
                className="rounded-2xl relative group overflow-hidden"
              >
                <img
                  src="https://pagedone.io/asset/uploads/1710392359.png"
                  alt="men with t-shirt"
                  className="relative z-0 w-full h-full transition-all duration-1000 group-hover:scale-110 group-hover:rotate-3  rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 z-10 p-8 w-full h-full flex items-end">
                  <div className="block">
                    <h4 className="font-manrope font-medium text-4xl leading-snug text-white ">
                      Men <br />
                      Collection
                    </h4>
                  </div>
                </div>
              </a>
              <a
                href="javascript:;"
                className="rounded-2xl relative group overflow-hidden"
              >
                <img
                  src="https://pagedone.io/asset/uploads/1710392370.png"
                  alt="men with t-shirt"
                  className="relative z-0 w-full h-full transition-all duration-1000 group-hover:scale-110 group-hover:rotate-3 rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 z-10 p-8 w-full h-full flex items-end">
                  <div className="block">
                    <h4 className="font-manrope font-medium text-4xl leading-snug text-white ">
                      Women <br />
                      Collection
                    </h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="rounded-2xl relative overflow-hidden group">
              <img
                src="https://pagedone.io/asset/uploads/1710392382.png"
                alt="men with t-shirt"
                className="relative z-0 w-full h-full transition-all duration-1000 group-hover:scale-110 group-hover:rotate-3 rounded-2xl object-cover"
              />
              <div className="absolute top-0 left-0 z-10 p-8 w-full h-full flex items-end">
                <div className="block">
                  <h4 className="font-manrope font-medium text-4xl leading-snug text-white mb-2">
                    Girl’s Top
                  </h4>
                  <p className="text-lg font-normal text-white leading-relaxed mb-2">
                    Everyday allure, wrapped in mystery
                  </p>
                  <button className="w-max py-2 bg-white hover:bg-gray-100 px-5 text-black text-sm leading-6 font-medium max-h-max rounded-full cursor-pointer font-medium text-center shadow-xs transition-all duration-500">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
