export default function CareerListAndCardWithHoverEffect() {
  return (
    <section>
      <div className="w-full">
        <nav className="border-b border-solid border-gray-200 bg-white px-10 py-5 transition-all duration-500 lg:px-14 xl:px-28">
          <div className="px-0 xl:px-8">
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
                  <button className="h-11 w-24 rounded-full bg-gray-900 text-sm leading-5 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-gray-800">
                    Sign up{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="px-10 py-10 md:py-20 xl:px-0 xl:py-28">
          <span className="mx-auto mb-5 flex w-fit items-center justify-center rounded-full bg-emerald-50 px-3 py-1 text-center text-sm leading-5 font-medium text-emerald-600">
            Careers at Pagedone
          </span>
          <h1 className="font-manrope mb-8 text-center text-4xl leading-tight font-bold text-gray-900 lg:text-5xl">
            Unlock new career <br /> opportunities at Pagedone{" "}
          </h1>
          <p className="text-center text-lg leading-7 font-normal text-gray-900">
            Pagedone embraces a youthful and flexible spirit, enabling us to
            swiftly adapt to market research, <br /> conditions, and customer
            demands through our advanced technology.{" "}
          </p>
        </div>
        <div className="bg-slate-50 px-10 py-10 md:py-16 lg:py-24 xl:px-0">
          <h2 className="font-manrope mb-14 text-center text-3xl leading-10 font-bold text-gray-900 lg:text-4xl">
            Open positions
          </h2>
          <div className="mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-12 sm:max-w-md md:max-w-xl lg:max-w-3xl">
            <div className="flex justify-between gap-x-8 border-b border-gray-200 pb-6">
              <h3 className="text-xl leading-8 font-medium text-gray-900">
                UX Designer
              </h3>
              <button className="h-9 w-20 rounded-full bg-indigo-50 text-xs leading-4 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                Apply
              </button>
            </div>
            <div className="flex justify-between gap-x-8 border-b border-gray-200 py-6">
              <h3 className="text-xl leading-8 font-medium text-indigo-600">
                Motion Designer
              </h3>
              <button className="h-9 w-20 rounded-full bg-indigo-50 text-xs leading-4 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                Apply
              </button>
            </div>
            <div className="flex justify-between gap-x-8 border-b border-gray-200 py-6">
              <h3 className="text-xl leading-8 font-medium text-gray-900">
                iOS Developer
              </h3>
              <button className="h-9 w-20 rounded-full bg-indigo-50 text-xs leading-4 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                Apply
              </button>
            </div>
            <div className="flex justify-between gap-x-8 border-b border-gray-200 py-6">
              <h3 className="text-xl leading-8 font-medium text-gray-900">
                Product Designer
              </h3>
              <button className="h-9 w-20 rounded-full bg-indigo-50 text-xs leading-4 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                Apply
              </button>
            </div>
            <div className="flex justify-between gap-x-8 border-b border-gray-200 py-6">
              <h3 className="text-xl leading-8 font-medium text-gray-900">
                UX Researcher
              </h3>
              <button className="h-9 w-20 rounded-full bg-indigo-50 text-xs leading-4 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                Apply
              </button>
            </div>
            <div className="flex justify-between gap-x-8 pt-6">
              <h3 className="text-xl leading-8 font-medium text-gray-900">
                Project Manager
              </h3>
              <button className="h-9 w-20 rounded-full bg-indigo-50 text-xs leading-4 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-auto px-10 py-10 md:py-16 xl:max-w-6xl xl:px-0 xl:py-28">
          <h3 className="mb-5 text-center text-3xl leading-10 font-bold text-gray-900 lg:text-4xl">
            Pagedone thrives on a spirit of agility
          </h3>
          <p className="mb-6 text-center text-lg leading-7 font-normal text-gray-500 lg:mb-14">
            We want to provide a user friendly experience with the eyes capture
            design and develop product <br /> quickly with the ability to solve
            user problems.{" "}
          </p>
          <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-4 gap-y-4 border-b border-gray-200 pb-10 md:max-w-3xl md:grid-cols-2 lg:max-w-full lg:grid-cols-3 lg:gap-x-8 lg:pb-24">
            <div className="group cursor-pointer p-8 transition-all duration-500 hover:rounded-2xl hover:shadow-md">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-xl bg-indigo-50 transition-all duration-500 group-hover:bg-indigo-600 max-lg:mx-auto"></div>
              <h4 className="mb-3 text-lg leading-7 font-semibold text-gray-900 max-lg:text-center">
                Leadership
              </h4>
              <p className="text-sm leading-5 font-normal text-gray-500 max-lg:text-center">
                Build your beautiful agency website with us that converts more
                visitors than any other website and the ability to interact and
                rotate products to solve user problems.
              </p>
            </div>
            <div className="group cursor-pointer p-8 transition-all duration-500 hover:rounded-2xl hover:shadow-md">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-xl bg-indigo-50 transition-all duration-500 group-hover:bg-indigo-600 max-lg:mx-auto"></div>
              <h4 className="mb-3 text-lg leading-7 font-semibold text-gray-900 max-lg:text-center">
                Communication
              </h4>
              <p className="text-sm leading-5 font-normal text-gray-500 max-lg:text-center">
                Build your beautiful agency website with us that converts more
                visitors than any other website and the ability to interact and
                rotate products to solve user problems.
              </p>
            </div>
            <div className="group cursor-pointer px-8 pt-8 pb-4 transition-all duration-500 hover:rounded-2xl hover:shadow-md md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-full lg:pb-8">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-xl bg-indigo-50 transition-all duration-500 group-hover:bg-indigo-600 max-lg:mx-auto"></div>
              <h4 className="mb-3 text-lg leading-7 font-semibold text-gray-900 max-lg:text-center">
                Commitment
              </h4>
              <p className="text-sm leading-5 font-normal text-gray-500 max-lg:text-center">
                Build your beautiful agency website with us that converts more
                visitors than any other website and the ability to interact and
                rotate products to solve user problems.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl bg-gradient-to-l from-violet-600 to-indigo-600 p-12 lg:mt-24">
            <div className="items-center justify-between gap-6 lg:flex">
              <div className="mb-10 lg:mb-0">
                <h3 className="font-manrope mb-5 text-3xl leading-10 font-semibold text-white lg:text-4xl">
                  Don't see the role you're interested in?
                </h3>
                <p className="text-xl leading-8 font-normal text-indigo-100">
                  We’re always looking for talented people to join our team.
                  Send us your CV and we will contact you for any future roles.
                </p>
              </div>
              <button className="flex h-14 items-center justify-center gap-2 rounded-full bg-white px-2.5 text-lg leading-7 font-semibold whitespace-nowrap text-indigo-600">
                {" "}
                Send Your CV
              </button>
            </div>
          </div>
        </div>
        <footer className="w-full px-10 xl:px-0">
          <div className="mx-auto max-w-6xl">
            {/*Grid*/}
            <div className="grid grid-cols-2 gap-8 py-10 max-md:mx-auto max-md:max-w-md md:grid-cols-4 lg:grid-cols-6">
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
                <span className="mb-4 text-sm text-gray-500 lg:mb-0">
                  ©pagedone 2024, All rights reserved.
                </span>
                <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
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
