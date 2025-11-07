export default function VerticalHeroSectionWithImages() {
  return (
    <div>
      <nav className="py-5 lg:fixed w-full bg-white transition-all duration-500 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="https://pagedone.io/" className="flex items-center">
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
              className="hidden w-full lg:flex lg:pl-10 max-lg:py-4"
              id="navbar"
            >
              <ul className="flex lg:items-center flex-col gap-6 mt-4 lg:mt-0 lg:flex-row max-lg:mb-4">
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base font-medium hover:text-indigo-700 transition-all duration-500 lg:px-1.5 block lg:text-left "
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base font-medium hover:text-indigo-700 transition-all duration-500 lg:px-1.5 block lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-base font-medium transition-all duration-500 mr-auto lg:text-left lg:m-0 hover:text-indigo-700"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="megamenu"
                    aria-labelledby="megamenu"
                    className="animate-fade z-10 relative lg:absolute top-2 lg:top-14  lg:-left-20 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full open hidden"
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
                <li className="relative px-1.5">
                  <div className="dropdown relative inline-flex">
                    <button
                      data-target="dropdown-feature"
                      className="dropdown-toggle flex items-center justify-between text-gray-500 max-lg:h-max text-center text-base font-medium transition-all duration-500 mr-auto lg:text-left lg:m-0 hover:text-indigo-700"
                    >
                      Features
                      {/* SVG removed */}
                    </button>
                    <div
                      id="dropdown-feature"
                      className="dropdown-menu rounded-xl shadow-lg lg:bg-white relative lg:absolute max-lg:-left-14 max-lg:top-4 max-lg:bg-white lg:top-full lg:w-72 mt-2 hidden"
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
              <div className="flex lg:items-center justify-start flex-col lg:flex-row gap-5 lg:flex-1 lg:justify-end">
                <button className="bg-indigo-50 rounded-full text-center transition-all duration-500 py-2 px-3.5 hover:bg-indigo-100">
                  <span className="px-1.5 text-sm font-medium leading-6 text-indigo-600">
                    Login
                  </span>
                </button>
                <button className="bg-indigo-600 rounded-full text-center shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500 py-2 px-3.5 hover:bg-indigo-700">
                  <span className="px-1.5 text-white font-medium text-sm leading-6">
                    Sign up{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full lg:pt-[84px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:py-14 py-10 flex-col justify-start items-start lg:gap-14 gap-10 flex">
            <div className="w-full justify-start items-start lg:gap-16 gap-8 grid lg:grid-cols-2 grid-cols-1">
              <h2 className="text-gray-900 text-5xl font-semibold font-playfairDisplay leading-snug lg:text-start text-center">
                Elevate Your Style with Our Affordable Bag Collection.
              </h2>
              <div className="flex-col justify-start lg:items-start items-center gap-8 inline-flex">
                <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                  Discover the ultimate combination of fashion and functionality
                  with our affordable bag collection. Perfect for any occasion,
                  our bags are designed to elevate your style while providing
                  practical solutions for everyday use.
                </p>
                <button className=" text-center group pl-4 pr-2 py-2 rounded-full border border-indigo-600 hover:border-indigo-800 transition-all duration-700 ease-in-out justify-center items-center gap-3 flex">
                  <span className="text-center text-indigo-600 text-sm font-semibold leading-tight">
                    Get Started
                  </span>
                  <div className="w-[34px] h-[34px] bg-indigo-600 group-hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full justify-center items-center flex">
                    {/* SVG removed */}
                  </div>
                </button>
              </div>
            </div>
            <div className="w-full justify-start items-start xl:gap-8 gap-6 grid lg:grid-cols-3">
              <div className="w-full h-full flex-col justify-start items-start xl:gap-8 gap-6 flex lg:grid grid-rows-2">
                <div className="w-full h-full p-6 bg-indigo-600 lg:rounded-xl rounded-3xl flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-full flex-col justify-start items-start gap-12 flex">
                    <h4 className="text-white text-2xl font-semibold font-manrope leading-9">
                      Over 3000+ Satisfied customers
                    </h4>
                    <div className="justify-start items-center gap-4 inline-flex">
                      <div className="justify-start items-start flex -space-x-2.5">
                        <a className="avatar-item rounded-full border-2 border-white justify-start items-start flex">
                          <img
                            className="w-8 h-8 object-cover avatar rounded-full"
                            src="https://pagedone.io/asset/uploads/1719398834.png"
                          />
                        </a>
                        <a className="avatar-item rounded-full border-2 border-white justify-start items-start flex">
                          <img
                            className="w-8 h-8 object-cover avatar rounded-full"
                            src="https://pagedone.io/asset/uploads/1719398846.png"
                          />
                        </a>
                        <a className="avatar-item rounded-full border-2 border-white justify-start items-start flex">
                          <img
                            className="w-8 h-8 object-cover avatar rounded-full"
                            src="https://pagedone.io/asset/uploads/1719398855.png"
                          />
                        </a>
                        <a className="avatar-item rounded-full border-2 border-white justify-start items-start flex">
                          <img
                            className="w-8 h-8 object-cover avatar rounded-full"
                            src="https://pagedone.io/asset/uploads/1719398863.png"
                          />
                        </a>
                      </div>
                      <h6 className="text-white text-base font-medium leading-relaxed">
                        People have joined
                      </h6>
                    </div>
                  </div>
                </div>
                <img
                  className="w-full lg:h-full h-auto object-cover lg:rounded-xl rounded-3xl"
                  src="https://pagedone.io/asset/uploads/1719399636.png"
                />
              </div>
              <img
                className="w-full lg:h-full h-auto object-cover lg:rounded-2xl rounded-3xl"
                src="https://pagedone.io/asset/uploads/1719399646.png"
              />
              <div className="w-full h-full flex-col justify-start items-start xl:gap-8 gap-6 grid grid-rows-2">
                <img
                  className="w-full lg:h-full h-auto object-cover lg:rounded-2xl rounded-3xl"
                  src="https://pagedone.io/asset/uploads/1719399655.png"
                />
                <div className="w-full lg:h-full h-auto p-6 bg-indigo-600 lg:rounded-2xl rounded-3xl flex-col justify-start items-start gap-2.5 flex">
                  <div className="flex-col justify-start items-start gap-4 flex">
                    <h4 className="text-white text-2xl font-semibold font-manrope leading-9">
                      Seasonal collection
                    </h4>
                    <p className="text-white text-base font-normal leading-relaxed">
                      Introducing our latest seasonal collection, where style
                      meets the essence of the season. pinto a world of
                      fashion-forward designs and captivating.
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
