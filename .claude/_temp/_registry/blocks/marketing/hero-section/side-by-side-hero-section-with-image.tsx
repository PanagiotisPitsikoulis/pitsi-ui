export default function SideBySideHeroSectionWithImage() {
  return (
    <div className="w-full lg:p-6 p-3 bg-white">
      <nav className="py-5 lg:fixed relative z-50 w-full transition-all duration-500 lg:w-[-webkit-fill-available] bg-transparent rounded-2xl">
        <div className="mx-auto px-4 sm:px-6 xl:px-8 lg:px-4">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row 2xl:pl-8">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <button
                data-collapse-toggle="navbar"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* SVG removed */}
              </button>
            </div>
            <div
              className="hidden w-full lg:flex lg:pl-10 max-lg:mt-1 max-lg:py-5 max-lg:overflow-auto lg:bg-transparent"
              id="navbar"
            >
              <ul className="flex lg:items-center flex-col mt-4 gap-3.5 lg:mt-0 lg:flex-row">
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base font-medium hover:text-emerald-900 transition-all duration-500 block px-1.5 lg:text-left "
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base font-medium hover:text-emerald-900 transition-all duration-500 block px-1.5 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 pl-1.5 text-base font-medium hover:text-emerald-900 transition-all duration-500 mr-auto lg:text-left lg:m-0"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    className="animate-fade z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 lg:-left-80 bg-gray-50 rounded-lg shadow-lg shadow-gray-300 xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
                  >
                    <div className="flex flex-col md:flex-row justify-between">
                      <ul
                        className="text-sm text-gray-700 md:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
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
                            className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                            className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                        className="text-sm text-gray-700 dark:text-gray-400 md:w-1/2"
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
                            className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
                            className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
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
              <div className="flex flex-col lg:flex-row gap-5 max-lg:mt-4 lg:items-center lg:ml-auto lg:justify-center z-0 lg:pr-10">
                <button className="group py-2 px-3.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-2 lg:border-white border-gray-300 transition-all duration-700 ease-in-out hover:border-gray-200">
                  <span className="px-1.5 lg:text-white text-gray-500 lg:group-hover:text-gray-200 group-hover:text-gray-900 transition-all duration-700 ease-in-out lg:text-sm text-base font-medium leading-6">
                    Login
                  </span>
                </button>
                <button className="py-2 px-3.5 lg:bg-white bg-emerald-50 rounded-lg cursor-pointer transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] lg:hover:bg-gray-100 hover:bg-emerald-100">
                  <span className="px-1.5 text-cyan-600 text-sm font-medium leading-6">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full mx-auto justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1 lg:-translate-y-0 -translate-y-24">
        <div className="w-full 2xl:px-10 md:px-4 pt-5 bg-white flex-col justify-start items-start inline-flex">
          <div className="w-full lg:pb-40 pb-6 lg:pt-44 pt-24 flex-col justify-start items-start gap-44 flex">
            <div className="w-full 2xl:pl-10 flex-col justify-center lg:items-start items-center lg:gap-12 gap-7 flex">
              <div className="w-full flex-col justify-start items-start lg:gap-5 gap-3 flex">
                <h2 className="lg:max-w-2xl w-full text-gray-900 xl:text-5xl text-5xl font-medium font-manrope xl:leading-snug leading-tight lg:text-start text-center">
                  Hotel in
                  <span className="text-cyan-500">Singapore</span> Ideal for
                  Living and Invesing
                </h2>
                <p className="lg:max-w-xl w-full text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                  An ideal hotel in Singapore for living and investing would
                  embody several key features to cater to both resident
                </p>
              </div>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full lg:h-[740px] h-[600px] rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1719486372.png"
          />
        </div>
      </div>
    </div>
  );
}
