export default function CreativeHeroSectionWithSearch() {
  return (
    <div className="w-full lg:p-8 p-5 bg-white">
      <nav className="py-5 lg:fixed left-0 relative z-50 w-full transition-all duration-500 lg:w-[-webkit-fill-available] lg:bg-transparent bg-orange-300 rounded-2xl">
        <div className="mx-auto px-4 sm:px-6 xl:px-16 lg:px-12">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
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
              className="hidden w-full lg:flex 2xl:pl-10 lg:pl-3.5 max-lg:mt-1 max-lg:py-5 max-lg:overflow-auto "
              id="navbar"
            >
              <ul className="flex lg:items-center flex-col mt-4 xl:gap-3.5 gap-4 lg:mt-0 lg:flex-row">
                <li className="xl:px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base font-medium hover:text-emerald-900 transition-all duration-500 block xl:px-1.5 lg:text-left "
                  >
                    Home
                  </a>
                </li>
                <li className="xl:px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base font-medium hover:text-emerald-900 transition-all duration-500 block xl:px-1.5 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative xl:px-1.5">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 xl:pl-1.5 text-base font-medium hover:text-emerald-900 transition-all duration-500 mr-auto lg:text-left lg:m-0"
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
                <li className="xl:px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base font-medium hover:text-emerald-900 transition-all duration-500 block xl:px-1.5 lg:text-left"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <div className="flex flex-col lg:flex-row gap-5 max-lg:mt-4 lg:items-center lg:ml-auto lg:justify-center z-0">
                <button className="py-2 px-3.5 h-10 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 transition-all duration-700 ease-in-out hover:border-gray-400">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Login
                  </span>
                </button>
                <button className="py-2 px-3.5 bg-white rounded-lg cursor-pointer transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:bg-gray-100">
                  <span className="px-1.5 text-emerald-900 text-sm font-medium leading-6">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full mx-auto justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1 lg:-translate-y-0 -translate-y-24">
        <div className="w-full h-full lg:pr-10 pr-4 pt-2.5 pb-20 bg-orange-100 rounded-2xl flex-col justify-center items-start flex xl:gap-32 lg:gap-20 gap-10">
          <div className="w-full lg:pl-10 pl-5 flex-col justify-start items-start lg:gap-12 gap-8 flex xl:pt-32 pt-28">
            <div className="w-full flex-col justify-start items-start gap-4 flex">
              <h2 className="lg:max-w-lg w-full text-emerald-900 md:text-5xl text-4xl font-extrabold font-manrope md:leading-snug leading-normal">
                Your Future Begins with a New Opportunity
              </h2>
              <p className="lg:max-w-lg w-full text-emerald-900 text-base font-normal leading-relaxed">
                Discover the newest job offers in your field. Our easy-to-use
                platform brings you closer to your next big career opportunity.{" "}
              </p>
            </div>
            <div className="w-full justify-start items-start gap-3 flex sm:flex-row flex-col">
              <div className="relative w-full">
                {/* SVG removed */}
                <input
                  type="text"
                  className="focus:outline-none w-full pl-11 pr-4 py-2.5 bg-white rounded-lg border border-gray-200 text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed"
                  placeholder="Search your job"
                />
              </div>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-emerald-900 hover:bg-emerald-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                  Get Started
                </span>
              </button>
            </div>
          </div>
          <div className="w-full lg:pl-10 pl-5 justify-start items-start xl:gap-10 gap-5 flex sm:flex-row flex-col">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <h3 className="text-emerald-900 text-2xl font-bold font-manrope leading-9">
                5k+
              </h3>
              <h6 className="text-emerald-900 text-base font-medium leading-relaxed whitespace-nowrap">
                Job Offers
              </h6>
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <h3 className="text-emerald-900 text-2xl font-bold font-manrope leading-9">
                1k+
              </h3>
              <h6 className="text-emerald-900 text-base font-medium leading-relaxed whitespace-nowrap">
                Key Partner
              </h6>
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <h3 className="text-emerald-900 text-2xl font-bold font-manrope leading-9">
                150
              </h3>
              <h6 className="text-emerald-900 text-base font-medium leading-relaxed whitespace-nowrap">
                Personal Assistant
              </h6>
            </div>
          </div>
        </div>
        <div className="w-full pt-2.5 bg-emerald-900 rounded-2xl flex-col justify-center items-center inline-flex lg:h-full">
          <img
            className="pt-24 pb-14 px-5 xl:w-auto w-full xl:h-auto h-full object-cover"
            src="https://pagedone.io/asset/uploads/1719314958.png"
          />
        </div>
      </div>
      <div className="flex lg:justify-between justify-center items-center lg:flex-nowrap flex-wrap lg:gap-0 gap-7 pt-11 lg:-translate-y-0 -translate-y-24">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </div>
  );
}
