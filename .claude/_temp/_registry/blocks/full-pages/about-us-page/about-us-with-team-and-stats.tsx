export default function AboutUsWithTeamAndStats() {
  return (
    <div>
      <nav className="py-5  relative z-50 w-full  bg-white transition-all duration-500 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex  flex-col lg:flex-row">
            <div className=" flex justify-between  lg:flex-row">
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
            <div
              className="hidden w-full lg:flex lg:pl-11 "
              id="navbar-default"
            >
              <ul className="lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row lg:gap-6">
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:px-5 md:mb-0 lg:text-left text-center"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:px-5 md:mb-0 lg:text-left text-center"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu1"
                    className="flex items-center justify-between text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2  lg:px-5 md:mb-0 lg:text-left text-center m-auto lg:m-0"
                  >
                    Products
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    className=" animate-fade z-10 absolute top-14 hidden -left-80 bg-white  rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full"
                  >
                    <div className="flex justify-between">
                      <ul
                        className="text-sm text-gray-700  w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
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
                            <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                                       <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                   </li>
                                   <li>
                                       <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                                           downloads</a>
                                   </li>
                                   <li>
                                       <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                   </li>
                                   <li>
                                       <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                   </li>
                               </ul>
                           </div>
                       </li> */}
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
                                Security
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
                                Documentation
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                Organized documentation will help you save tone
                                of your time{" "}
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
                                Support
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                Need help? our customer support is here to help
                                you anytime
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
                                        <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                                            downloads</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                    </li>
                                </ul>
                            </div>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu2"
                    className="flex items-center justify-between text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:px-5 md:mb-0 lg:text-left text-center m-auto lg:m-0"
                  >
                    Features
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    className="dropdown-menu z-10 hidden absolute top-14  font-normal bg-white  rounded-lg shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] w-64 xl:p-8 lg:p-4 p-2"
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
              <div className="flex items-center  justify-center lg:flex-1 lg:justify-end">
                <button className=" bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                  Login
                </button>
                <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm md:ml-5 hover:bg-indigo-700">
                  Sign up{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="hiro py-14 lg:py-24 relative bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-medium text-sm text-indigo-500 text-center mb-2 uppercase">
            TECH SOLUTIONS
          </p>
          <h1 className="font-manrope font-extrabold text-5xl text-gray-900 text-center mb-8">
            Get Expert Advice on financial journey.
          </h1>
          <p className="font-normal text-lg text-gray-500 max-w-3xl text-center mx-auto">
            Secure Your Financial Future with Expert Advice and Innovative
            Solutions. We believe in empowering our clients to make informed
            decisions about their money.
          </p>
        </div>
      </section>
      <section className="py-14 lg:py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-6">
              Meet the brains
            </h2>
            <p className="text-lg text-gray-500 text-center">
              These people work on making our product best.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-y-14 ">
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698649968.png"
                  alt="Marvin image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Marvin McKinney
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Founder
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650000.png"
                  alt="Kathryn image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Kathryn Murphy
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                CTO
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698659360.png"
                  alt="Jerome image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Jerome Bell
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                CMO
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650109.png"
                  alt="Wade image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Wade Warren
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                CEO
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650146.png"
                  alt="Leslie image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Leslie Alexander
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Customer Support
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650184.png"
                  alt="Guy image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Guy Hawkins
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                HR
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650213.png"
                  alt="Ronald image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Ronald Richards
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                CO-Founder
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650242.png"
                  alt="Devon image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Devon Lane
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                UI Designer
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650271.png"
                  alt="Dianne image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Dianne Russell
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Product Designer
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="our-mission py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 ">
            <div className="lg:pr-14 xl:pr-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-5xl text-black mb-9 max-lg:text-center">
                  Our Mission
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-lg:max-w-2xl mx-auto">
                  "Our 'Mission' component within the UI design system embodies
                  the core purpose and guiding principles of our brand or
                  organization. It serves as a standardized framework to
                  articulate our overarching goals, values, and the impact we
                  aim to make. This component offers a structured template for
                  presenting our mission statement, accompanied by customizable
                  visual elements, typography, and layout guidelines.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="grid grid-cols-1 gap-10">
                <img
                  src="https://pagedone.io/asset/uploads/1702102352.png"
                  alt="About Us tailwind page"
                  className="mx-auto sm:mr-0 object-cover"
                />
                <img
                  src="https://pagedone.io/asset/uploads/1702102365.png"
                  alt="About Us tailwind page"
                  className="mx-auto sm:mr-0 object-cover"
                />
              </div>
              <img
                src="https://pagedone.io/asset/uploads/1702102374.png"
                alt="About Us tailwind page"
                className="mx-auto sm:ml-0 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="our-stats py-12 lg:py-20 relative bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope font-bold text-4xl text-black text-center mb-14 uppercase">
            OUR STATS
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="group w-full max-w-sm max-lg:mx-auto shadow-md shadow-transparent lg:w-1/3 bg-white py-10 px-9 rounded-2xl transition-all duration-500 hover:shadow-gray-200 ">
              <div className="flex items-center mb-20 gap-6">
                <span className="w-12 h-12 rounded-[50px] cursor-pointer p-3 bg-indigo-50 flex items-center justify-center transition-all duration-500 group-hover:bg-indigo-600"></span>
                <p className="w-[151px] font-medium text-lg text-gray-500 uppercase transition-all duration-700 group-hover:text-gray-800">
                  TOTAL EMPLOYES
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-manrope font-bold text-5xl text-gray-900">
                  531
                </h2>
                <p className="flex items-center font-normal text-base text-emerald-500">
                  0.24%
                </p>
              </div>
            </div>
            <div className="group w-full max-w-sm max-lg:mx-auto shadow-md shadow-transparent lg:w-1/3 bg-white py-10 px-9 rounded-2xl transition-all duration-500 hover:shadow-gray-200 ">
              <div className="flex items-center mb-20 gap-6">
                <span className="w-12 h-12 rounded-[50px] p-3 bg-indigo-50 flex items-center justify-center cursor-pointer  transition-all duration-500 group-hover:bg-indigo-600"></span>
                <p className="w-[151px] font-medium text-lg text-gray-500 uppercase transition-all duration-700 group-hover:text-gray-800">
                  GROSS SALARY
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-manrope font-bold text-5xl text-gray-900">
                  112
                </h2>
                <p className="flex items-center font-normal text-base text-emerald-500">
                  1.2%
                </p>
              </div>
            </div>
            <div className="group w-full max-w-sm max-lg:mx-auto shadow-md shadow-transparent lg:w-1/3 bg-white py-10 px-9 rounded-2xl transition-all duration-500 hover:shadow-gray-200 ">
              <div className="flex items-center mb-20 gap-6">
                <span className="w-12 h-12 rounded-[50px] p-3 bg-indigo-50 flex items-center justify-center cursor-pointer transition-all duration-500 group-hover:bg-indigo-600"></span>
                <p className="w-[151px] font-medium text-lg text-gray-500 uppercase transition-all duration-700 group-hover:text-gray-800">
                  DEDUCTION AMOUNT
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-manrope font-bold text-5xl text-gray-900">
                  516
                </h2>
                <p className="flex items-center font-normal text-base text-red-500">
                  0.24%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">
              What our happy user says!
            </h2>
          </div>
          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative mb-20">
                  {/*Slider Wrapper*/}
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform's intuitive interface and ease of use have
                      allowed me to manage my finances more effectively and make
                      informed investment decisions. I particularly like the
                      product's auto-tracking feature, which has saved me a lot
                      of time and effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  {/*Slider Wrapper*/}
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform's intuitive interface and ease of use have
                      allowed me to manage my finances more effectively and make
                      informed investment decisions. I particularly like the
                      product's auto-tracking feature, which has saved me a lot
                      of time and effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  {/*Slider Wrapper*/}
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform's intuitive interface and ease of use have
                      allowed me to manage my finances more effectively and make
                      informed investment decisions. I particularly like the
                      product's auto-tracking feature, which has saved me a lot
                      of time and effort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349534.png"
                  alt="Emily image"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600 object-cover"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="Ethan image"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600 object-cover"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349514.png"
                  alt="Olivia image"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
            <a
              href="javascript:;"
              className="flex justify-center cursor-pointer"
            ></a>
            <ul className="text-lg  flex flex-col md:flex-row items-center gap-x-14 gap-y-5 transition-all duration-500">
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-indigo-400"
                >
                  Pagedone
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-indigo-400"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-indigo-400"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-indigo-400"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-indigo-400"
                >
                  Support
                </a>
              </li>
            </ul>
            <div className="flex  space-x-4 sm:justify-center  ">
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
              ></a>
            </div>
          </div>
          {/*Grid*/}
          <div className="py-7 border-t border-gray-700">
            <div className="flex items-center justify-center">
              <span className="text-gray-400 ">
                ©pagedone 2024, All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
