export default function ContactUsFormWithBackgroundAndSvgIcon() {
  return (
    <section>
      <div className="w-full">
        <nav className="w-full py-5 transition-all duration-500 bg-slate-50 border-b border-solid border-indigo-100">
          <div className="xl:px-28 lg:px-14 px-10">
            <div className="w-full flex justify-between flex-col lg:flex-row">
              <div className="flex justify-between lg:flex-row">
                <a href="javascript:;" className="flex items-center"></a>
                <button
                  data-collapse-toggle="navbar-default"
                  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                </button>
              </div>
              <div className="hidden lg:flex lg:pl-11 " id="navbar-default">
                <ul className="lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row">
                  <li>
                    <a
                      href="javascript:;"
                      className="mb-2 px-3 block lg:mr-6 mr-4 md:mb-0 lg:text-left text-center transition-all duration-700 text-gray-900 hover:text-gray-600 text-base font-medium leading-6"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="mb-2 xl:px-3 px-0 break-keep block lg:mr-6 mr-4 md:mb-0 lg:text-left text-center transition-all duration-700 text-gray-900 hover:text-gray-600 text-base font-medium leading-6"
                    >
                      About us
                    </a>
                  </li>
                  <li className="relative">
                    <button
                      data-dropdown-toggle="menu1"
                      className="flex items-center justify-between text-gray-900 hover:text-gray-600 text-base leading-6 text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 px-3 lg:mr-6 mr-4 lg:mb-0 lg:text-left m-auto lg:m-0"
                    >
                      Products
                    </button>
                    {/* Dropdown menu */}
                    <div
                      id="menu1"
                      className="animate-fade z-10 absolute top-14 -left-80 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
                    >
                      <div className="flex justify-between">
                        <ul
                          className="text-sm text-gray-700  w-1/2"
                          aria-labelledby="dropdownLargeButton"
                        >
                          <h6 className="font-medium text-gray-900 text-base leading-6 mb-2">
                            Features
                          </h6>
                          <li>
                            <a
                              href="javascript:;"
                              className="px-3 py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center "
                            >
                              <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                  {" "}
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
                              <div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                  Analytics{" "}
                                  <span className="bg-indigo-50 text-indigo-500 text-xs font-medium mr-2 px-2.5 py-1 rounded-full h-5 ml-4">
                                    New
                                  </span>
                                </h5>
                                <p className="text-xs font-medium text-gray-400">
                                  Analyze data to make more informed and
                                  accurate business decision
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                            >
                              <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                  {" "}
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
                          className="text-sm text-gray-700 dark:text-gray-400 w-1/2"
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
                              <div className="bg-rose-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                  Security{" "}
                                </h5>
                                <p className="text-xs font-medium text-gray-400">
                                  To ensure your privacy all information are
                                  highly encrypted{" "}
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                            >
                              <div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                  {" "}
                                  Documentation
                                </h5>
                                <p className="text-xs font-medium text-gray-400">
                                  Organized documentation will help you save
                                  tone of your time{" "}
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                            >
                              <div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                  Support{" "}
                                </h5>
                                <p className="text-xs font-medium text-gray-400">
                                  Need help? our customer support is here to
                                  help you anytime
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
                      data-dropdown-toggle="menu2"
                      className="flex items-center justify-between text-gray-900 hover:text-gray-600 text-base leading-6 text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 px-3 lg:mr-6 mr-4 lg:mb-0 lg:text-left m-auto lg:m-0"
                    >
                      Features
                    </button>
                    {/* Dropdown menu */}
                    <div
                      id="menu2"
                      className="dropdown-menu z-10 absolute top-14 font-normal bg-white rounded-lg shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] w-64 xl:p-8 lg:p-4 p-2 hidden"
                    >
                      <ul
                        className=" text-sm text-gray-700 "
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="text-sm text-gray-500 font-medium mb-2">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                          >
                            Notification
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                          >
                            Analytics
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                          >
                            Integrations
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                          >
                            Security
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                          >
                            Documentation
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                          >
                            Support
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center justify-center  xl:ml-14 ml-2 gap-x-5">
                  <button className="w-20 h-11 text-white text-sm font-semibold leading-5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full">
                    Login{" "}
                  </button>
                  <button className="w-24 h-11 rounded-full bg-gray-900 hover:bg-gray-700 transition-all duration-700 shadow-sm text-white text-sm font-semibold leading-5">
                    Sign up{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="w-full xl:py-24 lg:py-20 py-10 bg-gray-50">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <h1 className="text-gray-900 text-center lg:text-5xl text-3xl font-bold font-manrope leading-tight mb-8">
                Contact Us
              </h1>
              <p className="text-gray-900 text-center text-lg font-normal leading-7 mb-12">
                We're here to assist you! Whether you have questions, feedback,
                or inquiries, our team is ready to help.
              </p>
              <div className="absolute -left-20 top-28 md:block hidden"></div>
            </div>
            <form className="bg-white border border-slate-200 rounded-2xl	lg:p-12 p-8">
              <div className="relative mb-8">
                <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                  Name{" "}
                </label>
                <div className="relative text-gray-500 focus-within:text-gray-900">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                  <input
                    type="text"
                    id="default-search"
                    className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                    placeholder="harsh"
                  />
                </div>
              </div>
              <div className="relative mb-8">
                <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                  Email{" "}
                </label>
                <div className="relative text-gray-500 focus-within:text-gray-900">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                  <input
                    type="text"
                    id="default-search"
                    className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className="relative mb-8">
                <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                  Phone Number{" "}
                </label>
                <div className="relative text-gray-500 focus-within:text-gray-900">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                  <input
                    type="text"
                    id="default-search"
                    className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
              </div>
              <div className="relative mb-8">
                <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                  Message{" "}
                </label>
                <div className="relative ">
                  <textarea
                    className="block w-full h-40 px-4 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
                    placeholder="Write your message"
                  />
                </div>
              </div>
              <button className="w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-900 transition-all duration-700 shadow-sm text-white text-base font-semibold leading-6 flex items-center justify-center">
                Send message
              </button>
            </form>
          </div>
        </section>
        <section className="w-full xl:pb-24 lg:pb-20 pb-10 bg-gray-50">
          <div className="w-full max-w-7xl mx-auto">
            <div className="xl:px-28 lg:px-14 px-10">
              <div className="py-14 border border-indigo-200 bg-white rounded-2xl max-w-xl mx-auto md:max-w-2xl lg:max-w-full">
                <h2 className="text-indigo-600 text-center lg:text-4xl text-3xl font-bold font-manrope leading-tight mb-4">
                  N E W S L E T T E R
                </h2>
                <p className="text-gray-500 text-center text-base font-normal leading-6 lg:mb-16 mb-12">
                  Join our community of subscribers and receive regular updates
                </p>
                <div className="max-w-lg mx-auto md:flex md:gap-x-4 gap-y-4 md:px-0 px-5">
                  <input
                    type="text"
                    id="default-search"
                    className="w-full block h-12 px-4 md:mb-0 mb-5 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                    placeholder="Your email id.."
                  />
                  <div className="flex md:justify-start justify-center">
                    <button
                      type="submit"
                      className="h-12 leading-6 rounded-full bg-indigo-600 px-7 py-2.5 font-semibold text-white shadow-md transition-all duration-500 hover:bg-indigo-700"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20 xl:py-24 bg-gray-50 border-y border-solid border-indigo-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 ">
              <h2 className="text-4xl  font-bold text-gray-900 text-center">
                295+ Customers gave their opinion
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-12 gap-10 sm:gap-8 max-w-sm mx-auto sm:max-w-2xl lg:max-w-full">
              <div className="relative w-full ">
                <div className="flex items-center justify-center mb-5 sm:mb-7 gap-2 text-amber-500 transition-all duration-500  "></div>
                <p className="text-gray-800 text-center mb-5 sm:mb-10">
                  Thanks to pagedone, I feel more informed and confident about
                  my investment decisions than ever before.
                </p>
                <a href="javascript:;" className="flex justify-center"></a>
              </div>
              <div className="relative w-full ">
                <div className="flex items-center justify-center mb-5 sm:mb-7 gap-2 text-amber-500 transition-all duration-500  "></div>
                <p className="text-gray-800 text-center mb-5 sm:mb-10">
                  Pagedone has made it possible for me to stay on top of my
                  portfolio and make informed decisions quickly and easily.
                </p>
                <a href="javascript:;" className="flex justify-center"></a>
              </div>
              <div className="relative w-full col-span-1 sm:col-span-2 lg:col-span-1 sm:w-1/2 mx-auto lg:w-full">
                <div className="flex items-center justify-center mb-5 sm:mb-7 gap-2 text-amber-500 transition-all duration-500  "></div>
                <p className="text-gray-800 text-center mb-5 sm:mb-10">
                  The customer service team at pagedone went above and beyond to
                  help me resolve a billing issue.
                </p>
                <a href="javascript:;" className="flex justify-center"></a>
              </div>
            </div>
          </div>
        </section>
        <footer className="w-full">
          <div className="xl:px-28 lg:px-14 px-10">
            {/*Grid*/}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 lg:grid-cols-6">
              <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                <a
                  href="javascript:;"
                  className="flex justify-center lg:justify-start"
                ></a>
                <p className="py-8 text-center text-sm text-gray-500 lg:max-w-xs lg:text-left">
                  Trusted in more than 100 countries &amp; 5 million customers.
                  Have any query ?
                </p>
                <a
                  href="javascript:;"
                  className="mx-auto block h-9 w-fit rounded-full bg-indigo-600 px-5 py-2.5 text-xs text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
                >
                  {" "}
                  Contact us{" "}
                </a>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Pagedone
                </h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Products
                </h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Figma UI System
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Icons Assets
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Responsive Blocks
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Components Library
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Resources
                </h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Quick Start
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      User Guide
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="mb-7 text-lg font-medium text-gray-900">
                  Blogs
                </h4>
                <ul className="text-sm transition-all duration-500">
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      News
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Tips &amp; Tricks
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      New Updates
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Events
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*Grid*/}
            <div className="border-t border-gray-200 py-7">
              <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                <span className="text-sm text-gray-500">
                  ©pagedone 2024, All rights reserved.
                </span>
                <div className="mt-4 flex space-x-4 lg:mt-0 sm:justify-center">
                  <a
                    href="javascript:;"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                  ></a>
                  <a
                    href="javascript:;"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                  ></a>
                  <a
                    href="javascript:;"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                  ></a>
                  <a
                    href="javascript:;"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
