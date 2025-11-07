export default function HorizontalHeroSectionWithVideo() {
  return (
    <div>
      <nav className="py-5 lg:fixed w-full bg-white transition-all duration-500 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className=" flex justify-between  lg:flex-row">
              <a
                href="
https://pagedone.io/"
                className="flex items-center"
              >
                {/* SVG removed */}
              </a>
              <button
                data-collapse-toggle="navbar"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* SVG removed */}
              </button>
            </div>
            <div
              className="hidden w-full lg:flex lg:pl-11 max-lg:py-4 lg:ml-auto lg:justify-end"
              id="navbar"
            >
              <ul className="flex lg:items-center flex-col max-lg:gap-4 mt-4 lg:mt-0 lg:flex-row max-lg:mb-4">
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500  block lg:mr-6 md:mb-0 lg:text-left "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500  block lg:mr-6 md:mb-0 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle flex items-center justify-between text-gray-500  text-base font-medium hover:text-prime-blue-700 transition-all duration-500 lg:mr-6 lg:mb-0 mr-auto lg:text-left  lg:m-0 hover:text-gray-900"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="megamenu"
                    aria-labelledby="megamenu"
                    className="animate-fade z-10 relative lg:absolute top-2 lg:top-14 lg:-right-20 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full open hidden"
                  >
                    <div className="flex flex-col sm:flex-row lg:justify-between">
                      <ul className="text-sm text-gray-700 lg:w-1/2">
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
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
                            className="px-2 lg:px-3 py-2 lg:py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                            className="px-2 lg:px-3 py-2 lg:py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                        className="text-sm text-gray-700 dark:text-gray-400 lg:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
                          Services
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-2 lg:px-3 py-2 lg:py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                            className="px-2 lg:px-3 py-2 lg:py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                            className="px-2 lg:px-3 py-2 lg:py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                  <div className="dropdown relative inline-flex">
                    <button
                      data-target="dropdown-feature"
                      className="dropdown-toggle flex items-center justify-between text-gray-500  max-lg:h-max text-center text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
                    >
                      Features
                      {/* SVG removed */}
                    </button>
                    <div
                      id="dropdown-feature"
                      className="dropdown-menu rounded-xl shadow-lg lg:bg-white relative lg:absolute max-lg:-left-14 max-lg:top-4 max-lg:bg-white lg:top-full lg:w-72 mt-2 open hidden"
                      aria-labelledby="dropdown-feature"
                    >
                      <ul className="py-2">
                        <li>
                          <a
                            className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                            href="#"
                          >
                            Downloads
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                            href="#"
                          >
                            Saved Files
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
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
              <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 ">
                <button className=" bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative pt-8 lg:pt-32 pb-14 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 xl:gap-24 lg:gap-6 gap-4 items-center">
            <div className="w-full lg:col-span-6 lg:pb-0 pb-12 md:order-first">
              <div className="text-center lg:text-left  relative">
                <div className="mb-8 bg-white shadow-md py-1.5 px-3.5 text-indigo-600 flex items-center mx-auto lg:mx-0 rounded-full w-fit">
                  <span className="mr-2 w-1.5 h-1.5 rounded-full bg-indigo-600 flex" />
                  Accounting
                </div>
                <div className="relative mb-8 lg:mb-20">
                  <h1 className="pb-5 text-center text-gray-900  font-manrope text-4xl md:text-5xl lg:text-left !leading-snug">
                    <span className="font-bold">
                      Our all-in-one accounting services
                    </span>{" "}
                    simplify financial management
                  </h1>
                  <div className="absolute bottom-0 -right-5 hidden xl:block">
                    <img
                      src="https://pagedone.io/asset/uploads/1695017204.png"
                      alt="image"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className=" text-gray-500 text-base text-center mb-9 lg:text-left">
                  "Simplify finances with our all-in-one accounting. Track
                  expenses, invoice clients, and get detailed reports easily.
                </p>
                <div className="flex flex-col lg:flex-row  gap-5">
                  <a
                    href="#"
                    className="bg-indigo-600 py-2.5 px-5 rounded-lg flex items-center justify-center gap-2 text-base font-semibold text-white transition-all duration-500 focus:outline-none hover:bg-indigo-700"
                  >
                    Book a consultation
                    {/* SVG removed */}
                  </a>
                  <a
                    href="#"
                    className=" py-2.5 px-5 border border-gray-300 rounded-lg flex items-center justify-center gap-2 text-base font-semibold text-indigo-600 transition-all duration-500 focus:outline-none hover:bg-indigo-50"
                  >
                    Watch our platform
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:col-span-6 ">
              <div className="relative flex justify-center lg:mb-0 mb-10">
                <img
                  src="https://pagedone.io/asset/uploads/1709276200.png"
                  alt="image"
                  className="w-full rounded-3xl object-cover"
                />
                <div className="flex justify-between items-end absolute bottom-0 p-5 w-full">
                  <div className="block xl:mr-0 mr-10">
                    <h3 className="text-xl lg:text-3xl xl:text-5xl font-medium text-white font-manrope xl:leading-snug mb-5">
                      "I use Pagedone to help me succeed"
                    </h3>
                    <span className="text-lg text-white font-medium">
                      John Smith
                    </span>
                  </div>
                  <a
                    href="#"
                    className="w-20 h-20 flex justify-center items-center flex-none rounded-full bg-gray-100/30 transition-all duration-500 hover:scale-90"
                  >
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
