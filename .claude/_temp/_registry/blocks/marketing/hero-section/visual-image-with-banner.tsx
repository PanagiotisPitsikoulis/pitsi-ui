export default function VisualImageWithBanner() {
  return (
    <div>
      <nav className="lg:fixed w-full bg-white transition-all duration-500 py-5 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className=" flex justify-between lg:flex-row">
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
                    className="text-gray-500 text-base font-medium hover:text-lime-500 transition-all duration-500 lg:px-1.5 block lg:text-left "
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base font-medium hover:text-lime-500 transition-all duration-500 lg:px-1.5 block lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-base font-medium hover:text-prime-blue-700 transition-all duration-500 lg:mb-0 mr-auto lg:text-left  lg:m-0 hover:text-lime-500"
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
                      className="dropdown-toggle flex items-center justify-between text-gray-500 max-lg:h-max text-center text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mr-auto lg:text-left lg:m-0 hover:text-lime-500"
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
                <button className="bg-lime-50 rounded-full text-center transition-all duration-500 py-2 px-3.5 hover:bg-lime-100">
                  <span className="px-1.5 text-sm font-medium leading-6 text-lime-600">
                    Login
                  </span>
                </button>
                <button className="bg-lime-600 rounded-full text-center shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500 py-2 px-3.5  hover:bg-lime-700">
                  <span className="px-1.5 text-white font-medium text-sm leading-6">
                    Sign up{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full justify-between items-center lg:gap-16 gap-8 flex lg:flex-row flex-col lg:pt-40 pt-10 pb-20">
            <div className="flex-col justify-start items-start lg:gap-5 gap-4 inline-flex">
              <h2 className="lg:max-w-xl w-full text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Elevate Your Style with Our Exclusive Collections
              </h2>
              <p className="lg:max-w-xl w-full text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Welcome to our lifestyle blog, your ultimate destination for
                embracing the richness of life. Dive into a world of
                inspiration,
              </p>
            </div>
            <div className="flex-col justify-center items-center gap-2.5 flex relative">
              <div
                id="circle"
                className="w-[300px] h-[160px] flex items-center justify-center"
              >
                {/* SVG removed */}
              </div>
              <button className="w-[60px] h-[60px] absolute shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] bg-lime-500 rounded-full flex items-center justify-center group">
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full -translate-y-7">
          <img
            src="https://pagedone.io/asset/uploads/1720161813.png"
            className="w-full 2xl:h-auto lg:h-full h-[504px] translate-y-0.5 relative -rotate-2 scale-x-105 object-cover"
          />
          <div className="marquee w-full p-3 absolute top-0 -rotate-2 bg-lime-400 backdrop-blur-[2px] justify-center items-center gap-2 inline-flex">
            <ul className="animated-ul">
              <li>
                <div className="justify-start items-center gap-[9px] flex">
                  <div className="w-2 h-2 bg-gray-900 rounded-full">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-gray-900 text-base font-bold leading-relaxed whitespace-nowrap">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="justify-start items-center gap-[9px] flex">
                  <div className="w-2 h-2 bg-gray-900 rounded-full">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-gray-900 text-base font-bold leading-relaxed whitespace-nowrap">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="justify-start items-center gap-[9px] flex">
                  <div className="w-2 h-2 bg-gray-900 rounded-full">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-gray-900 text-base font-bold leading-relaxed whitespace-nowrap">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="justify-start items-center gap-[9px] flex">
                  <div className="w-2 h-2 bg-gray-900 rounded-full">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-gray-900 text-base font-bold leading-relaxed whitespace-nowrap">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="justify-start items-center gap-[9px] flex">
                  <div className="w-2 h-2 bg-gray-900 rounded-full">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-gray-900 text-base font-bold leading-relaxed whitespace-nowrap">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="justify-start items-center gap-[9px] flex">
                  <div className="w-2 h-2 bg-gray-900 rounded-full">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-gray-900 text-base font-bold leading-relaxed whitespace-nowrap">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="justify-start items-center gap-[9px] flex">
                  <div className="w-2 h-2 bg-gray-900 rounded-full">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-gray-900 text-base font-bold leading-relaxed whitespace-nowrap">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul">
              <li>
                <div className="justify-start items-center gap-[9px] flex">
                  <div className="w-2 h-2 bg-gray-900 rounded-full">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-gray-900 text-base font-bold leading-relaxed whitespace-nowrap">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul">
              <li>
                <div className="justify-start items-center gap-[9px] flex">
                  <div className="w-2 h-2 bg-gray-900 rounded-full">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-gray-900 text-base font-bold leading-relaxed whitespace-nowrap">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
