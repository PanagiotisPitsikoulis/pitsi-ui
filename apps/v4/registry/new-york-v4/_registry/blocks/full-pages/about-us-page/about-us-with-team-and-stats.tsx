export default function AboutUsWithTeamAndStats() {
  return (
    <div>
      <nav className="relative z-50 w-full border-b border-gray-200 bg-white py-5 transition-all duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row">
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
            <div className="hidden w-full lg:flex lg:pl-11" id="navbar-default">
              <ul className="mt-4 flex-col items-center lg:mt-0 lg:flex lg:flex-row lg:gap-6">
                <li>
                  <a
                    href="javascript:;"
                    className="mb-2 block text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:px-5 lg:text-left lg:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="mb-2 block text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:px-5 lg:text-left lg:text-base"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu1"
                    className="m-auto mb-2 flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:m-0 lg:px-5 lg:text-left lg:text-base"
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
                        <h6 className="mb-2 text-sm font-medium text-gray-500">
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
                                Analytics
                                <span className="mr-2 ml-4 h-5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-500">
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50"></div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50"></div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50"></div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                    className="m-auto mb-2 flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:m-0 lg:px-5 lg:text-left lg:text-base"
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
              <div className="flex items-center justify-center lg:flex-1 lg:justify-end">
                <button className="cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-center text-sm font-semibold text-indigo-600 shadow-xs transition-all duration-500 hover:bg-indigo-100">
                  Login
                </button>
                <button className="cursor-pointer rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 md:ml-5">
                  Sign up{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="hiro relative bg-gray-50 py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-center text-sm font-medium text-indigo-500 uppercase">
            TECH SOLUTIONS
          </p>
          <h1 className="font-manrope mb-8 text-center text-5xl font-extrabold text-gray-900">
            Get Expert Advice on financial journey.
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg font-normal text-gray-500">
            Secure Your Financial Future with Expert Advice and Innovative
            Solutions. We believe in empowering our clients to make informed
            decisions about their money.
          </p>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="font-manrope mb-6 text-center text-5xl font-bold text-gray-900">
              Meet the brains
            </h2>
            <p className="text-center text-lg text-gray-500">
              These people work on making our product best.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-y-14">
            <div className="group block w-full text-center min-[450px]:w-1/2 sm:w-1/3 lg:w-1/5">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698649968.png"
                  alt="Marvin image"
                  className="ransition-all mx-auto h-28 w-28 rounded-2xl border-2 border-solid border-transparent object-cover duration-500 group-hover:border-indigo-600"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                Marvin McKinney
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                Founder
              </span>
            </div>
            <div className="group block w-full text-center min-[450px]:w-1/2 sm:w-1/3 lg:w-1/5">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650000.png"
                  alt="Kathryn image"
                  className="ransition-all mx-auto h-28 w-28 rounded-2xl border-2 border-solid border-transparent object-cover duration-500 group-hover:border-indigo-600"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                Kathryn Murphy
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                CTO
              </span>
            </div>
            <div className="group block w-full text-center min-[450px]:w-1/2 sm:w-1/3 lg:w-1/5">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698659360.png"
                  alt="Jerome image"
                  className="ransition-all mx-auto h-28 w-28 rounded-2xl border-2 border-solid border-transparent object-cover duration-500 group-hover:border-indigo-600"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                Jerome Bell
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                CMO
              </span>
            </div>
            <div className="group block w-full text-center min-[450px]:w-1/2 sm:w-1/3 lg:w-1/5">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650109.png"
                  alt="Wade image"
                  className="ransition-all mx-auto h-28 w-28 rounded-2xl border-2 border-solid border-transparent object-cover duration-500 group-hover:border-indigo-600"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                Wade Warren
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                CEO
              </span>
            </div>
            <div className="group block w-full text-center min-[450px]:w-1/2 sm:w-1/3 lg:w-1/5">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650146.png"
                  alt="Leslie image"
                  className="ransition-all mx-auto h-28 w-28 rounded-2xl border-2 border-solid border-transparent object-cover duration-500 group-hover:border-indigo-600"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                Leslie Alexander
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                Customer Support
              </span>
            </div>
            <div className="group block w-full text-center min-[450px]:w-1/2 sm:w-1/3 lg:w-1/5">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650184.png"
                  alt="Guy image"
                  className="ransition-all mx-auto h-28 w-28 rounded-2xl border-2 border-solid border-transparent object-cover duration-500 group-hover:border-indigo-600"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                Guy Hawkins
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                HR
              </span>
            </div>
            <div className="group block w-full text-center min-[450px]:w-1/2 sm:w-1/3 lg:w-1/5">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650213.png"
                  alt="Ronald image"
                  className="ransition-all mx-auto h-28 w-28 rounded-2xl border-2 border-solid border-transparent object-cover duration-500 group-hover:border-indigo-600"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                Ronald Richards
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                CO-Founder
              </span>
            </div>
            <div className="group block w-full text-center min-[450px]:w-1/2 sm:w-1/3 lg:w-1/5">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650242.png"
                  alt="Devon image"
                  className="ransition-all mx-auto h-28 w-28 rounded-2xl border-2 border-solid border-transparent object-cover duration-500 group-hover:border-indigo-600"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                Devon Lane
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                UI Designer
              </span>
            </div>
            <div className="group block w-full text-center min-[450px]:w-1/2 sm:w-1/3 lg:w-1/5">
              <div className="relative mb-5">
                <img
                  src="https://pagedone.io/asset/uploads/1698650271.png"
                  alt="Dianne image"
                  className="ransition-all mx-auto h-28 w-28 rounded-2xl border-2 border-solid border-transparent object-cover duration-500 group-hover:border-indigo-600"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                Dianne Russell
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                Product Designer
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="our-mission relative py-14 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
            <div className="flex items-center lg:pr-14 xl:pr-[100px]">
              <div className="data w-full">
                <h2 className="font-manrope mb-9 text-5xl font-bold text-black max-lg:text-center">
                  Our Mission
                </h2>
                <p className="mx-auto text-xl leading-8 font-normal text-gray-500 max-lg:max-w-2xl max-lg:text-center">
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
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div className="grid grid-cols-1 gap-10">
                <img
                  src="https://pagedone.io/asset/uploads/1702102352.png"
                  alt="About Us tailwind page"
                  className="mx-auto object-cover sm:mr-0"
                />
                <img
                  src="https://pagedone.io/asset/uploads/1702102365.png"
                  alt="About Us tailwind page"
                  className="mx-auto object-cover sm:mr-0"
                />
              </div>
              <img
                src="https://pagedone.io/asset/uploads/1702102374.png"
                alt="About Us tailwind page"
                className="mx-auto object-cover sm:ml-0"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="our-stats relative bg-gray-50 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope mb-14 text-center text-4xl font-bold text-black uppercase">
            OUR STATS
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row lg:justify-between xl:gap-8">
            <div className="group w-full max-w-sm rounded-2xl bg-white px-9 py-10 shadow-md shadow-transparent transition-all duration-500 hover:shadow-gray-200 max-lg:mx-auto lg:w-1/3">
              <div className="mb-20 flex items-center gap-6">
                <span className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[50px] bg-indigo-50 p-3 transition-all duration-500 group-hover:bg-indigo-600"></span>
                <p className="w-[151px] text-lg font-medium text-gray-500 uppercase transition-all duration-700 group-hover:text-gray-800">
                  TOTAL EMPLOYES
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-manrope text-5xl font-bold text-gray-900">
                  531
                </h2>
                <p className="flex items-center text-base font-normal text-emerald-500">
                  0.24%
                </p>
              </div>
            </div>
            <div className="group w-full max-w-sm rounded-2xl bg-white px-9 py-10 shadow-md shadow-transparent transition-all duration-500 hover:shadow-gray-200 max-lg:mx-auto lg:w-1/3">
              <div className="mb-20 flex items-center gap-6">
                <span className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[50px] bg-indigo-50 p-3 transition-all duration-500 group-hover:bg-indigo-600"></span>
                <p className="w-[151px] text-lg font-medium text-gray-500 uppercase transition-all duration-700 group-hover:text-gray-800">
                  GROSS SALARY
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-manrope text-5xl font-bold text-gray-900">
                  112
                </h2>
                <p className="flex items-center text-base font-normal text-emerald-500">
                  1.2%
                </p>
              </div>
            </div>
            <div className="group w-full max-w-sm rounded-2xl bg-white px-9 py-10 shadow-md shadow-transparent transition-all duration-500 hover:shadow-gray-200 max-lg:mx-auto lg:w-1/3">
              <div className="mb-20 flex items-center gap-6">
                <span className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[50px] bg-indigo-50 p-3 transition-all duration-500 group-hover:bg-indigo-600"></span>
                <p className="w-[151px] text-lg font-medium text-gray-500 uppercase transition-all duration-700 group-hover:text-gray-800">
                  DEDUCTION AMOUNT
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-manrope text-5xl font-bold text-gray-900">
                  516
                </h2>
                <p className="flex items-center text-base font-normal text-red-500">
                  0.24%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 rounded-full">
            <h2 className="font-manrope text-center text-4xl font-bold text-gray-900">
              What our happy user says!
            </h2>
          </div>
          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative mb-20">
                  {/*Slider Wrapper*/}
                  <div className="mx-auto max-w-max lg:max-w-4xl">
                    <p className="mb-8 text-center text-lg leading-8 text-gray-500">
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
                  <div className="mx-auto max-w-max lg:max-w-4xl">
                    <p className="mb-8 text-center text-lg leading-8 text-gray-500">
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
                  <div className="mx-auto max-w-max lg:max-w-4xl">
                    <p className="mb-8 text-center text-lg leading-8 text-gray-500">
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
                  className="swiper-slide:w-16 swiper-slide:border-indigo-600 mx-auto scale-90 rounded-full border object-cover transition-all duration-300"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="Ethan image"
                  className="swiper-slide:w-16 swiper-slide:border-indigo-600 mx-auto scale-90 rounded-full border object-cover transition-all duration-300"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349514.png"
                  alt="Olivia image"
                  className="swiper-slide:w-16 swiper-slide:border-indigo-600 mx-auto scale-90 rounded-full border object-cover transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="flex flex-col items-center justify-between gap-8 py-16 lg:flex-row">
            <a
              href="javascript:;"
              className="flex cursor-pointer justify-center"
            ></a>
            <ul className="flex flex-col items-center gap-x-14 gap-y-5 text-lg transition-all duration-500 md:flex-row">
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
            <div className="flex space-x-4 sm:justify-center">
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
            </div>
          </div>
          {/*Grid*/}
          <div className="border-t border-gray-700 py-7">
            <div className="flex items-center justify-center">
              <span className="text-gray-400">
                ©pagedone 2024, All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
