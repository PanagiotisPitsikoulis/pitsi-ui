export default function CareerListAndCardWithHoverEffect() {
  return (
    <section>
      <div className="w-full">
        <nav className="py-5 transition-all duration-500 xl:px-28 lg:px-14 px-10 bg-white border-b border-solid border-gray-200 ">
          <div className="px-0 xl:px-8">
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
                      className="mb-2 px-3 block lg:mr-6 mr-4 md:mb-0 lg:text-left text-center text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="mb-2 xl:px-3 px-0 break-keep block lg:mr-6 mr-4 md:mb-0 lg:text-left text-center text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6"
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
                  <button className="w-24 h-11 rounded-full bg-gray-900 hover:bg-gray-800 transition-all duration-700 shadow-sm text-white text-sm font-semibold leading-5">
                    Sign up{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="xl:py-28 md:py-20 py-10 xl:px-0 px-10">
          <span className="w-fit mx-auto flex items-center justify-center bg-emerald-50 rounded-full text-emerald-600 text-center text-sm font-medium leading-5 px-3 py-1 mb-5">
            Careers at Pagedone
          </span>
          <h1 className="text-gray-900 text-center font-manrope lg:text-5xl text-4xl font-bold leading-tight mb-8">
            Unlock new career <br /> opportunities at Pagedone{" "}
          </h1>
          <p className="text-gray-900 text-center text-lg font-normal leading-7">
            Pagedone embraces a youthful and flexible spirit, enabling us to
            swiftly adapt to market research, <br /> conditions, and customer
            demands through our advanced technology.{" "}
          </p>
        </div>
        <div className="lg:py-24 md:py-16 py-10 bg-slate-50 xl:px-0 px-10">
          <h2 className="text-gray-900 text-center font-manrope lg:text-4xl text-3xl font-bold leading-10 mb-14">
            Open positions
          </h2>
          <div className="lg:max-w-3xl md:max-w-xl sm:max-w-md max-w-sm mx-auto border border-slate-200 bg-white rounded-2xl p-12">
            <div className="flex justify-between gap-x-8 pb-6 border-b border-gray-200">
              <h3 className="text-gray-900 text-xl font-medium leading-8">
                UX Designer
              </h3>
              <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                Apply
              </button>
            </div>
            <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
              <h3 className="text-indigo-600 text-xl font-medium leading-8">
                Motion Designer
              </h3>
              <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                Apply
              </button>
            </div>
            <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
              <h3 className="text-gray-900 text-xl font-medium leading-8">
                iOS Developer
              </h3>
              <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                Apply
              </button>
            </div>
            <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
              <h3 className="text-gray-900 text-xl font-medium leading-8">
                Product Designer
              </h3>
              <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                Apply
              </button>
            </div>
            <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
              <h3 className="text-gray-900 text-xl font-medium leading-8">
                UX Researcher
              </h3>
              <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                Apply
              </button>
            </div>
            <div className="flex justify-between gap-x-8 pt-6">
              <h3 className="text-gray-900 text-xl font-medium leading-8">
                Project Manager
              </h3>
              <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="xl:max-w-6xl w-auto mx-auto xl:py-28 md:py-16 py-10 xl:px-0 px-10">
          <h3 className="text-gray-900 text-center lg:text-4xl text-3xl font-bold leading-10 mb-5">
            Pagedone thrives on a spirit of agility
          </h3>
          <p className="text-gray-500 text-center text-lg font-normal leading-7 lg:mb-14 mb-6">
            We want to provide a user friendly experience with the eyes capture
            design and develop product <br /> quickly with the ability to solve
            user problems.{" "}
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-4 lg:pb-24 pb-10 border-b border-gray-200 max-w-lg mx-auto md:max-w-3xl lg:max-w-full">
            <div className="p-8 group  hover:rounded-2xl transition-all duration-500 hover:shadow-md cursor-pointer">
              <div className="w-20 h-20 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 max-lg:mx-auto transition-all duration-500 group-hover:bg-indigo-600"></div>
              <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                Leadership
              </h4>
              <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                Build your beautiful agency website with us that converts more
                visitors than any other website and the ability to interact and
                rotate products to solve user problems.
              </p>
            </div>
            <div className="p-8 group hover:rounded-2xl transition-all duration-500 hover:shadow-md cursor-pointer">
              <div className="w-20 h-20 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 max-lg:mx-auto transition-all duration-500 group-hover:bg-indigo-600"></div>
              <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                Communication
              </h4>
              <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                Build your beautiful agency website with us that converts more
                visitors than any other website and the ability to interact and
                rotate products to solve user problems.
              </p>
            </div>
            <div className="px-8 group pt-8 lg:pb-8 pb-4 transition-all duration-500 hover:rounded-2xl hover:shadow-md cursor-pointer md:col-span-2 lg:col-span-1 md:w-1/2 lg:w-full md:mx-auto">
              <div className="w-20 h-20 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 max-lg:mx-auto transition-all duration-500 group-hover:bg-indigo-600"></div>
              <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                Commitment
              </h4>
              <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                Build your beautiful agency website with us that converts more
                visitors than any other website and the ability to interact and
                rotate products to solve user problems.
              </p>
            </div>
          </div>
          <div className="lg:mt-24 mt-10 bg-gradient-to-l from-violet-600 to-indigo-600 p-12 rounded-2xl ">
            <div className="lg:flex items-center justify-between gap-6">
              <div className="lg:mb-0 mb-10">
                <h3 className="text-white font-manrope lg:text-4xl text-3xl font-semibold leading-10 mb-5">
                  Don't see the role you're interested in?
                </h3>
                <p className="text-indigo-100 text-xl font-normal leading-8">
                  We’re always looking for talented people to join our team.
                  Send us your CV and we will contact you for any future roles.
                </p>
              </div>
              <button className="px-2.5 h-14 flex items-center justify-center text-indigo-600 text-lg font-semibold leading-7 gap-2 rounded-full bg-white whitespace-nowrap">
                {" "}
                Send Your CV
              </button>
            </div>
          </div>
        </div>
        <footer className="w-full xl:px-0 px-10">
          <div className="mx-auto max-w-6xl">
            {/*Grid*/}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-md:max-w-md max-md:mx-auto">
              <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                <a
                  href="javascript:;"
                  className="flex justify-center lg:justify-start"
                ></a>
                <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                  Trusted in more than 100 countries &amp; 5 million customers.
                  Have any query ?
                </p>
                <a
                  href="javascript:;"
                  className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
                >
                  {" "}
                  Contact us{" "}
                </a>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Pagedone
                </h4>
                <ul className="text-sm  transition-all duration-500">
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
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Products
                </h4>
                <ul className="text-sm  transition-all duration-500">
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
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      Icons Assets
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      Responsive Blocks
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      Components Library
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Resources
                </h4>
                <ul className="text-sm  transition-all duration-500">
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
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      Quick Start
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      User Guide
                    </a>
                  </li>
                </ul>
              </div>
              {/*End Col*/}
              <div className="lg:mx-auto">
                <h4 className="text-lg text-gray-900 font-medium mb-7">
                  Blogs
                </h4>
                <ul className="text-sm  transition-all duration-500">
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
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      Tips &amp; Tricks
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href="javascript:;"
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      New Updates
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className=" text-gray-600 hover:text-gray-900"
                    >
                      Events
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*Grid*/}
            <div className="py-7 border-t border-gray-200">
              <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                <span className="text-sm text-gray-500 lg:mb-0 mb-4">
                  ©pagedone 2024, All rights reserved.
                </span>
                <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  ></a>
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  ></a>
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  ></a>
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
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
