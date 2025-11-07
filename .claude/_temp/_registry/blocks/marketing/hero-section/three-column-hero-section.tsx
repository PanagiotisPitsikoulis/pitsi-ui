export default function ThreeColumnHeroSection() {
  return (
    <div className="bg-black w-full">
      <nav className="py-5 lg:fixed w-full bg-transparent transition-all z-50 duration-500">
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
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-base text-white font-medium transition-all duration-500 hover:text-gray-400"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-base text-white font-medium transition-all duration-500 hover:text-gray-400"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-white text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-400"
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
                    className="dropdown-toggle flex items-center justify-between text-white text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-400"
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
                <button className="flex items-center justify-center bg-lime-300 rounded-lg cursor-pointer shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 py-2 px-3.5 hover:bg-lime-400">
                  <span className="px-1.5 text-black text-sm font-medium leading-6">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full lg:pt-[84px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:pt-12 pt-9 xl:pb-0 pb-10 justify-start items-start gap-4 flex lg:flex-row flex-col">
            <div className="lg:w-[388px] sm:w-[500px] w-full mx-auto flex-col justify-start lg:items-start items-center lg:gap-20 gap-9 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-10 gap-4 flex">
                <h2 className="text-white xl:text-6xl text-5xl font-semibold font-manrope xl:leading-snug leading-normal lg:text-start text-center">
                  John Smith is Right Here!
                </h2>
                <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                  My approach blends creativity with functionality, ensuring
                  each design not only looks impressive but also performs
                  seamlessly
                </p>
                <button className="sm:w-fit w-full px-5 py-2.5 bg-lime-300 hover:bg-lime-400 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-black text-base font-semibold leading-relaxed">
                    Start for Free
                  </span>
                </button>
              </div>
              <div className="w-full lg:justify-start justify-center lg:items-start items-center gap-7 flex">
                <div className="lg:w-full w-fit flex-col justify-start items-start gap-2 inline-flex">
                  <h3 className="text-lime-300 text-3xl font-bold font-manrope leading-normal">
                    500K+
                  </h3>
                  <h4 className="text-gray-300 text-xl font-normal leading-8">
                    In Revenue
                  </h4>
                </div>
                <div className="lg:w-full w-fit flex-col justify-start items-start gap-2 inline-flex">
                  <h3 className="text-lime-300 text-3xl font-bold font-manrope leading-normal">
                    200K+
                  </h3>
                  <h4 className="text-gray-300 text-xl font-normal leading-8">
                    Businesses
                  </h4>
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <img
                src="https://pagedone.io/asset/uploads/1720171944.png"
                alt="John Smith image"
                className="mx-auto object-cover"
              />
            </div>
            <div className="lg:w-[296px] sm:w-[500px] w-full mx-auto w-full flex-col justify-start items-start gap-8 inline-flex">
              <div className="group w-full flex-col justify-start items-start gap-5 flex">
                <a className="p-3 bg-lime-300 group-hover:bg-lime-400 transition-all duration-700 ease-in-out rounded justify-start items-start gap-2.5 inline-flex">
                  {/* SVG removed */}
                </a>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <h5 className="text-white text-lg font-medium leading-relaxed">
                    Revolutionary Projectview
                  </h5>
                  <p className="text-gray-300 text-sm font-normal leading-normal">
                    Plan and structure work how you want. Quickly organizing
                    tasks.
                  </p>
                </div>
              </div>
              <div className="group w-full flex-col justify-start items-start gap-5 flex">
                <a className="p-3 bg-lime-300 group-hover:bg-lime-400 transition-all duration-700 ease-in-out rounded justify-start items-start gap-2.5 inline-flex">
                  {/* SVG removed */}
                </a>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <h5 className="text-white text-lg font-medium leading-relaxed">
                    App Integrations
                  </h5>
                  <p className="text-gray-300 text-sm font-normal leading-normal">
                    Bring all your tools and data together. Also join with
                    hundreds of other apps.
                  </p>
                </div>
              </div>
              <div className="group w-full flex-col justify-start items-start gap-5 flex">
                <a className="p-3 bg-lime-300 group-hover:bg-lime-400 transition-all duration-700 ease-in-out rounded justify-start items-start gap-2.5 inline-flex">
                  {/* SVG removed */}
                </a>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <h5 className="text-white text-lg font-medium leading-relaxed">
                    Data Reporting
                  </h5>
                  <p className="text-gray-300 text-sm font-normal leading-normal">
                    Get real time insight into progress and allows teams to
                    track their work habits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
