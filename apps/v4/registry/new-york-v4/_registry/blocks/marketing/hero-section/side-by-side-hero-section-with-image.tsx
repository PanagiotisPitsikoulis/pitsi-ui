export default function SideBySideHeroSectionWithImage() {
  return (
    <div className="w-full bg-white p-3 lg:p-6">
      <nav className="relative z-50 w-full rounded-2xl bg-transparent py-5 transition-all duration-500 lg:fixed lg:w-[-webkit-fill-available]">
        <div className="mx-auto px-4 sm:px-6 lg:px-4 xl:px-8">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row 2xl:pl-8">
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
              className="hidden w-full max-lg:mt-1 max-lg:overflow-auto max-lg:py-5 lg:flex lg:bg-transparent lg:pl-10"
              id="navbar"
            >
              <ul className="mt-4 flex flex-col gap-3.5 lg:mt-0 lg:flex-row lg:items-center">
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block px-1.5 text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-900 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block px-1.5 text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-900 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle mr-auto flex items-center justify-between pl-1.5 text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-900 lg:m-0 lg:text-left"
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
              </ul>
              <div className="z-0 flex flex-col gap-5 max-lg:mt-4 lg:ml-auto lg:flex-row lg:items-center lg:justify-center lg:pr-10">
                <button className="group rounded-lg border-2 border-gray-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-gray-200 lg:border-white">
                  <span className="px-1.5 text-base leading-6 font-medium text-gray-500 transition-all duration-700 ease-in-out group-hover:text-gray-900 lg:text-sm lg:text-white lg:group-hover:text-gray-200">
                    Login
                  </span>
                </button>
                <button className="cursor-pointer rounded-lg bg-emerald-50 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-100 lg:bg-white lg:hover:bg-gray-100">
                  <span className="px-1.5 text-sm leading-6 font-medium text-cyan-600">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-auto grid w-full -translate-y-24 grid-cols-1 items-start justify-start gap-8 lg:-translate-y-0 lg:grid-cols-2">
        <div className="inline-flex w-full flex-col items-start justify-start bg-white pt-5 md:px-4 2xl:px-10">
          <div className="flex w-full flex-col items-start justify-start gap-44 pt-24 pb-6 lg:pt-44 lg:pb-40">
            <div className="flex w-full flex-col items-center justify-center gap-7 lg:items-start lg:gap-12 2xl:pl-10">
              <div className="flex w-full flex-col items-start justify-start gap-3 lg:gap-5">
                <h2 className="font-manrope w-full text-center text-5xl leading-tight font-medium text-gray-900 lg:max-w-2xl lg:text-start xl:text-5xl xl:leading-snug">
                  Hotel in
                  <span className="text-cyan-500">Singapore</span> Ideal for
                  Living and Invesing
                </h2>
                <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-xl lg:text-start">
                  An ideal hotel in Singapore for living and investing would
                  embody several key features to cater to both resident
                </p>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-cyan-500 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-cyan-600 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="h-[600px] w-full rounded-3xl object-cover lg:h-[740px]"
            src="https://pagedone.io/asset/uploads/1719486372.png"
          />
        </div>
      </div>
    </div>
  )
}
