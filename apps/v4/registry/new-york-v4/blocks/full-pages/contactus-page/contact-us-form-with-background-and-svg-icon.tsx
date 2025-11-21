export default function ContactUsFormWithBackgroundAndSvgIcon() {
  return (
    <section>
      <div className="w-full">
        <nav className="w-full border-b border-solid border-indigo-100 bg-slate-50 py-5 transition-all duration-500">
          <div className="px-10 lg:px-14 xl:px-28">
            <div className="flex w-full flex-col justify-between lg:flex-row">
              <div className="flex justify-between lg:flex-row">
                <a href="javascript:;" className="flex items-center"></a>
                <button
                  data-collapse-toggle="navbar-default"
                  className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                </button>
              </div>
              <div className="hidden lg:flex lg:pl-11" id="navbar-default">
                <ul className="mt-4 flex-col items-center lg:mt-0 lg:flex lg:flex-row">
                  <li>
                    <a
                      href="javascript:;"
                      className="mr-4 mb-2 block px-3 text-center text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600 md:mb-0 lg:mr-6 lg:text-left"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="mr-4 mb-2 block px-0 text-center text-base leading-6 font-medium break-keep text-gray-900 transition-all duration-700 hover:text-gray-600 md:mb-0 lg:mr-6 lg:text-left xl:px-3"
                    >
                      About us
                    </a>
                  </li>
                  <li className="relative">
                    <button
                      data-dropdown-toggle="menu1"
                      className="hover:text-prime-blue-700 m-auto mr-4 mb-2 flex items-center justify-between px-3 text-center text-base leading-6 font-medium text-gray-900 transition-all duration-500 hover:text-gray-600 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                    >
                      Products
                    </button>
                    {/* Dropdown menu */}
                    <div
                      id="menu1"
                      className="animate-fade absolute top-14 -left-80 z-10 hidden min-w-full rounded-lg bg-white p-2 shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] md:min-w-[500px] lg:min-w-[800px] lg:p-4 xl:p-8"
                    >
                      <div className="flex justify-between">
                        <ul
                          className="w-1/2 text-sm text-gray-700"
                          aria-labelledby="dropdownLargeButton"
                        >
                          <h6 className="mb-2 text-base leading-6 font-medium text-gray-900">
                            Features
                          </h6>
                          <li>
                            <a
                              href="javascript:;"
                              className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                              className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="mb-1.5 text-base font-semibold text-gray-900">
                                  Analytics{" "}
                                  <span className="mr-2 ml-4 h-5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-500">
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
                              className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                          className="w-1/2 text-sm text-gray-700 dark:text-gray-400"
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
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                              className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                              className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50"></div>
                              <div className="ml-4 w-4/5">
                                <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                      className="hover:text-prime-blue-700 m-auto mr-4 mb-2 flex items-center justify-between px-3 text-center text-base leading-6 font-medium text-gray-900 transition-all duration-500 hover:text-gray-600 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                    >
                      Features
                    </button>
                    {/* Dropdown menu */}
                    <div
                      id="menu2"
                      className="dropdown-menu absolute top-14 z-10 hidden w-64 rounded-lg bg-white p-2 font-normal shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] lg:p-4 xl:p-8"
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
                <div className="ml-2 flex items-center justify-center gap-x-5 xl:ml-14">
                  <button className="h-11 w-20 rounded-full bg-indigo-600 text-sm leading-5 font-semibold text-white transition-all duration-700 hover:bg-indigo-800">
                    Login{" "}
                  </button>
                  <button className="h-11 w-24 rounded-full bg-gray-900 text-sm leading-5 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-gray-700">
                    Sign up{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="w-full bg-gray-50 py-10 lg:py-20 xl:py-24">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <h1 className="font-manrope mb-8 text-center text-3xl leading-tight font-bold text-gray-900 lg:text-5xl">
                Contact Us
              </h1>
              <p className="mb-12 text-center text-lg leading-7 font-normal text-gray-900">
                We're here to assist you! Whether you have questions, feedback,
                or inquiries, our team is ready to help.
              </p>
              <div className="absolute top-28 -left-20 hidden md:block"></div>
            </div>
            <form className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-12">
              <div className="relative mb-8">
                <label className="mb-2 flex items-center text-base leading-6 font-medium text-gray-600">
                  Name{" "}
                </label>
                <div className="relative text-gray-500 focus-within:text-gray-900">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                  <input
                    type="text"
                    id="default-search"
                    className="block h-12 w-full rounded-full border border-gray-300 bg-transparent py-2.5 pr-5 pl-12 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                    placeholder="harsh"
                  />
                </div>
              </div>
              <div className="relative mb-8">
                <label className="mb-2 flex items-center text-base leading-6 font-medium text-gray-600">
                  Email{" "}
                </label>
                <div className="relative text-gray-500 focus-within:text-gray-900">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                  <input
                    type="text"
                    id="default-search"
                    className="block h-12 w-full rounded-full border border-gray-300 bg-transparent py-2.5 pr-5 pl-12 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className="relative mb-8">
                <label className="mb-2 flex items-center text-base leading-6 font-medium text-gray-600">
                  Phone Number{" "}
                </label>
                <div className="relative text-gray-500 focus-within:text-gray-900">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                  <input
                    type="text"
                    id="default-search"
                    className="block h-12 w-full rounded-full border border-gray-300 bg-transparent py-2.5 pr-5 pl-12 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
              </div>
              <div className="relative mb-8">
                <label className="mb-2 flex items-center text-base leading-6 font-medium text-gray-600">
                  Message{" "}
                </label>
                <div className="relative">
                  <textarea
                    className="block h-40 w-full resize-none rounded-2xl border border-gray-300 bg-transparent px-4 py-2.5 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                    placeholder="Write your message"
                  />
                </div>
              </div>
              <button className="flex h-12 w-full items-center justify-center rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-900">
                Send message
              </button>
            </form>
          </div>
        </section>
        <section className="w-full bg-gray-50 pb-10 lg:pb-20 xl:pb-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="px-10 lg:px-14 xl:px-28">
              <div className="mx-auto max-w-xl rounded-2xl border border-indigo-200 bg-white py-14 md:max-w-2xl lg:max-w-full">
                <h2 className="font-manrope mb-4 text-center text-3xl leading-tight font-bold text-indigo-600 lg:text-4xl">
                  N E W S L E T T E R
                </h2>
                <p className="mb-12 text-center text-base leading-6 font-normal text-gray-500 lg:mb-16">
                  Join our community of subscribers and receive regular updates
                </p>
                <div className="mx-auto max-w-lg gap-y-4 px-5 md:flex md:gap-x-4 md:px-0">
                  <input
                    type="text"
                    id="default-search"
                    className="mb-5 block h-12 w-full rounded-full border border-gray-300 bg-transparent px-4 py-2.5 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none md:mb-0"
                    placeholder="Your email id.."
                  />
                  <div className="flex justify-center md:justify-start">
                    <button
                      type="submit"
                      className="h-12 rounded-full bg-indigo-600 px-7 py-2.5 leading-6 font-semibold text-white shadow-md transition-all duration-500 hover:bg-indigo-700"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-solid border-indigo-200 bg-gray-50 py-10 lg:py-20 xl:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-center text-4xl font-bold text-gray-900">
                295+ Customers gave their opinion
              </h2>
            </div>
            <div className="mx-auto grid max-w-sm grid-cols-1 gap-10 sm:max-w-2xl sm:grid-cols-2 sm:gap-8 sm:gap-y-12 lg:max-w-full lg:grid-cols-3">
              <div className="relative w-full">
                <div className="mb-5 flex items-center justify-center gap-2 text-amber-500 transition-all duration-500 sm:mb-7"></div>
                <p className="mb-5 text-center text-gray-800 sm:mb-10">
                  Thanks to pagedone, I feel more informed and confident about
                  my investment decisions than ever before.
                </p>
                <a href="javascript:;" className="flex justify-center"></a>
              </div>
              <div className="relative w-full">
                <div className="mb-5 flex items-center justify-center gap-2 text-amber-500 transition-all duration-500 sm:mb-7"></div>
                <p className="mb-5 text-center text-gray-800 sm:mb-10">
                  Pagedone has made it possible for me to stay on top of my
                  portfolio and make informed decisions quickly and easily.
                </p>
                <a href="javascript:;" className="flex justify-center"></a>
              </div>
              <div className="relative col-span-1 mx-auto w-full sm:col-span-2 sm:w-1/2 lg:col-span-1 lg:w-full">
                <div className="mb-5 flex items-center justify-center gap-2 text-amber-500 transition-all duration-500 sm:mb-7"></div>
                <p className="mb-5 text-center text-gray-800 sm:mb-10">
                  The customer service team at pagedone went above and beyond to
                  help me resolve a billing issue.
                </p>
                <a href="javascript:;" className="flex justify-center"></a>
              </div>
            </div>
          </div>
        </section>
        <footer className="w-full">
          <div className="px-10 lg:px-14 xl:px-28">
            {/*Grid*/}
            <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4 lg:grid-cols-6">
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
                <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
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
  )
}
