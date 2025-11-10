export default function CreativeHeroSectionWithSearch() {
  return (
    <div className="w-full bg-white p-5 lg:p-8">
      <nav className="relative left-0 z-50 w-full rounded-2xl bg-orange-300 py-5 transition-all duration-500 lg:fixed lg:w-[-webkit-fill-available] lg:bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <button
                data-collapse-toggle="navbar"
                className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* SVG removed */}
              </button>
            </div>
            <div
              className="hidden w-full max-lg:mt-1 max-lg:overflow-auto max-lg:py-5 lg:flex lg:pl-3.5 2xl:pl-10"
              id="navbar"
            >
              <ul className="mt-4 flex flex-col gap-4 lg:mt-0 lg:flex-row lg:items-center xl:gap-3.5">
                <li className="xl:px-1.5">
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-900 lg:text-left xl:px-1.5"
                  >
                    Home
                  </a>
                </li>
                <li className="xl:px-1.5">
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-900 lg:text-left xl:px-1.5"
                  >
                    About us
                  </a>
                </li>
                <li className="relative xl:px-1.5">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-900 lg:m-0 lg:text-left xl:pl-1.5"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    className="animate-fade relative top-3 z-10 hidden min-w-full rounded-lg bg-gray-50 p-2 shadow-lg shadow-gray-300 max-lg:mb-3 md:min-w-[500px] lg:absolute lg:top-14 lg:-left-80 lg:min-w-[800px] lg:p-4 xl:p-8"
                  >
                    <div className="flex flex-col justify-between md:flex-row">
                      <ul
                        className="text-sm text-gray-700 md:w-1/2"
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
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50">
                              {/* SVG removed */}
                            </div>
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
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                              {/* SVG removed */}
                            </div>
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
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                              {/* SVG removed */}
                            </div>
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
                                    <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                </li>
                                <li>
                                    <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                                        downloads</a>
                                </li>
                                <li>
                                    <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                </li>
                                <li>
                                    <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                </li>
                            </ul>
                        </div>
                    </li> */}
                      </ul>
                      <ul
                        className="text-sm text-gray-700 md:w-1/2 dark:text-gray-400"
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
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                              {/* SVG removed */}
                            </div>
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
                                     <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                 </li>
                                 <li>
                                     <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                                         downloads</a>
                                 </li>
                                 <li>
                                     <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                 </li>
                                 <li>
                                     <a href="javascript:;"  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                 </li>
                             </ul>
                         </div>
                     </li> */}
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="xl:px-1.5">
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-900 lg:text-left xl:px-1.5"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <div className="z-0 flex flex-col gap-5 max-lg:mt-4 lg:ml-auto lg:flex-row lg:items-center lg:justify-center">
                <button className="h-10 rounded-lg border border-gray-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-gray-400">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Login
                  </span>
                </button>
                <button className="cursor-pointer rounded-lg bg-white px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-100">
                  <span className="px-1.5 text-sm leading-6 font-medium text-emerald-900">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-auto grid w-full -translate-y-24 grid-cols-1 items-start justify-start gap-8 lg:-translate-y-0 lg:grid-cols-2">
        <div className="flex h-full w-full flex-col items-start justify-center gap-10 rounded-2xl bg-orange-100 pt-2.5 pr-4 pb-20 lg:gap-20 lg:pr-10 xl:gap-32">
          <div className="flex w-full flex-col items-start justify-start gap-8 pt-28 pl-5 lg:gap-12 lg:pl-10 xl:pt-32">
            <div className="flex w-full flex-col items-start justify-start gap-4">
              <h2 className="font-manrope w-full text-4xl leading-normal font-extrabold text-emerald-900 md:text-5xl md:leading-snug lg:max-w-lg">
                Your Future Begins with a New Opportunity
              </h2>
              <p className="w-full text-base leading-relaxed font-normal text-emerald-900 lg:max-w-lg">
                Discover the newest job offers in your field. Our easy-to-use
                platform brings you closer to your next big career
                opportunity.{" "}
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-3 sm:flex-row">
              <div className="relative w-full">
                {/* SVG removed */}
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pr-4 pl-11 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 focus:outline-none"
                  placeholder="Search your job"
                />
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-emerald-900 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-800 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                  Get Started
                </span>
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-5 pl-5 sm:flex-row lg:pl-10 xl:gap-10">
            <div className="inline-flex flex-col items-start justify-start gap-1">
              <h3 className="font-manrope text-2xl leading-9 font-bold text-emerald-900">
                5k+
              </h3>
              <h6 className="text-base leading-relaxed font-medium whitespace-nowrap text-emerald-900">
                Job Offers
              </h6>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-1">
              <h3 className="font-manrope text-2xl leading-9 font-bold text-emerald-900">
                1k+
              </h3>
              <h6 className="text-base leading-relaxed font-medium whitespace-nowrap text-emerald-900">
                Key Partner
              </h6>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-1">
              <h3 className="font-manrope text-2xl leading-9 font-bold text-emerald-900">
                150
              </h3>
              <h6 className="text-base leading-relaxed font-medium whitespace-nowrap text-emerald-900">
                Personal Assistant
              </h6>
            </div>
          </div>
        </div>
        <div className="inline-flex w-full flex-col items-center justify-center rounded-2xl bg-emerald-900 pt-2.5 lg:h-full">
          <img
            className="h-full w-full object-cover px-5 pt-24 pb-14 xl:h-auto xl:w-auto"
            src="https://pagedone.io/asset/uploads/1719314958.png"
          />
        </div>
      </div>
      <div className="flex -translate-y-24 flex-wrap items-center justify-center gap-7 pt-11 lg:-translate-y-0 lg:flex-nowrap lg:justify-between lg:gap-0">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </div>
  )
}
