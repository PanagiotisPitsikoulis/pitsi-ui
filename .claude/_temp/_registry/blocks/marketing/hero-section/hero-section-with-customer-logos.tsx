export default function HeroSectionWithCustomerLogos() {
  return (
    <div>
      <nav className="pt-6 pb-5 lg:fixed w-full bg-white transition-all z-50 duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:px-0 lg:px-4">
          <div className="w-full flex flex-col lg:flex-row py-3 px-8 lg:rounded-full rounded-2xl bg-stone-100">
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
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-base text-gray-500 font-medium transition-all duration-500 hover:text-orange-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block lg:mx-3 md:mb-0 lg:text-left text-base text-gray-500 font-medium transition-all duration-500 hover:text-orange-500"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-orange-500"
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
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium transition-all duration-500 lg:mx-3 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-orange-500"
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
              <div className="flex lg:items-center w-full justify-start flex-col lg:flex-row gap-5 lg:w-max lg:ml-14 lg:justify-end">
                <button className="flex items-center justify-center bg-orange-500 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] cursor-pointer transition-all duration-700 py-2 px-3.5 hover:bg-orange-600">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Sign Up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="lg:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:px-0 lg:px-4">
          <div className="w-full pt-8 pb-14 flex-col justify-start items-start gap-16 inline-flex">
            <div className="justify-start items-start xl:gap-8 lg:gap-5 gap-6 grid lg:grid-cols-2 grid-cols-1">
              <img
                className="lg:h-full md:h-[600px] h-auto object-cover w-full"
                src="https://pagedone.io/asset/uploads/1719574404.png"
                alt="hero section image"
              />
              <div className="flex-col justify-start items-start gap-8 inline-flex">
                <div className="p-8 bg-emerald-900 rounded-2xl flex-col justify-start items-start flex">
                  <div className="flex-col justify-start items-start gap-5 flex">
                    <div className="flex-col justify-start items-start gap-3 flex">
                      <p className="text-white text-sm font-medium leading-normal">
                        Your Online Learning Hub
                      </p>
                      <h2 className="text-white text-4xl font-extrabold font-manrope leading-normal">
                        Begin Your Learning Adventure Today
                      </h2>
                      <p className="text-gray-200 text-sm font-normal leading-normal">
                        learning journey today with our curated resources and
                        expert guidance. Explore diverse topics, expand your
                        skills, and achieve your learning goals at your own
                        pace.
                      </p>
                    </div>
                    <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-500 hover:bg-orange-600 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-1.5 text-white text-sm font-medium leading-6">
                        Start for Free
                      </span>
                      {/* SVG removed */}
                    </button>
                  </div>
                </div>
                <div className="w-full justify-start items-start xl:gap-8 lg:gap-4 gap-6 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full h-full xl:p-6 lg:p-4 p-5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-3.5 inline-flex">
                    <h3 className="text-black text-2xl font-bold font-manrope leading-9">
                      500K+
                    </h3>
                    <p className="text-gray-700 text-xs font-normal leading-normal">
                      learning journey today with our curated resources and
                      expert guidance. Explore diverse topics.{" "}
                    </p>
                  </div>
                  <div className="w-full h-full xl:p-6 lg:p-4 p-5 bg-gray-50 rounded-2xl flex-col justify-between items-start inline-flex md:gap-0 gap-3.5">
                    <h4 className="text-black text-xl font-semibold leading-8">
                      Over 3000+ Satisfied customers
                    </h4>
                    <div className="justify-start items-center xl:gap-4 lg:gap-2 gap-3 inline-flex">
                      <div className="justify-start items-start flex -space-x-2.5">
                        <a className="avatar-item rounded-full border-2 border-white justify-start items-start flex">
                          <img
                            className="2xl:w-8 xl:w-7 lg:w-6 2xl:h-8 xl:h-7 lg:h-6 avatar rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1719398834.png"
                          />
                        </a>
                        <a className="avatar-item rounded-full border-2 border-white justify-start items-start flex">
                          <img
                            className="2xl:w-8 xl:w-7 lg:w-6 2xl:h-8 xl:h-7 lg:h-6 avatar rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1719398846.png"
                          />
                        </a>
                        <a className="avatar-item rounded-full border-2 border-white justify-start items-start flex">
                          <img
                            className="2xl:w-8 xl:w-7 lg:w-6 2xl:h-8 xl:h-7 lg:h-6 avatar rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1719398855.png"
                          />
                        </a>
                        <a className="avatar-item rounded-full border-2 border-white justify-start items-start flex">
                          <img
                            className="2xl:w-8 xl:w-7 lg:w-6 2xl:h-8 xl:h-7 lg:h-6 avatar rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1719398863.png"
                          />
                        </a>
                      </div>
                      <h6 className="text-black text-sm font-medium leading-snug whitespace-nowrap">
                        People have joined
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-center gap-6 flex">
              <h3 className="text-center text-black text-xl font-semibold leading-8">
                Your Partner in Excellence
              </h3>
              <div className="w-full md:justify-between justify-center items-center flex flex-wrap md:gap-4 gap-8">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
