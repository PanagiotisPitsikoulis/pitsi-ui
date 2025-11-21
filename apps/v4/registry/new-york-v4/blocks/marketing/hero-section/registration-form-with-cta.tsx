export default function RegistrationFormWithCta() {
  return (
    <div className="bg-gray-50">
      <div className="fixed right-0 hidden h-screen w-[35%] bg-gray-900 bg-fixed bg-right lg:block" />
      <nav className="w-full bg-transparent py-5 transition-all duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              className="hidden w-full max-lg:mt-1 max-lg:h-screen max-lg:overflow-auto max-lg:py-5 lg:flex lg:pl-11"
              id="navbar"
            >
              <ul className="mt-4 flex flex-col lg:mt-0 lg:flex-row lg:items-center">
                <li>
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 max-lg:mb-2 lg:mr-6 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 max-lg:mb-2 lg:mr-6 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle mr-auto mb-2 flex items-center justify-between text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left"
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
                <li className="relative">
                  <button
                    data-target="menu2"
                    className="dropdown-toggle mr-auto mb-2 flex items-center justify-between text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left"
                  >
                    Features
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    className="dropdown-menu relative top-3 z-10 hidden w-64 rounded-lg bg-gray-50 p-2 font-normal shadow-lg shadow-gray-300 max-lg:mb-3 lg:absolute lg:top-14 lg:p-4 xl:p-8"
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
              <div className="z-0 flex flex-col max-lg:mt-4 max-lg:gap-4 lg:ml-auto lg:flex-row lg:items-center lg:justify-center">
                <button className="rounded-full border bg-white px-5 py-2.5 text-xs font-semibold text-gray-900 shadow-xs transition-all duration-500 hover:bg-indigo-100 hover:text-gray-900 lg:border-white lg:bg-transparent lg:text-white lg:hover:bg-white">
                  Login
                </button>
                <button className="cursor-pointer rounded-full bg-indigo-500 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 md:ml-5">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative py-5 pb-8 lg:pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid h-auto grid-cols-1 items-center gap-6 lg:h-full lg:grid-cols-12 lg:gap-16 xl:gap-24">
            <div className="w-full pb-12 md:order-first lg:col-span-6 lg:pb-0">
              <div className="text-center lg:max-w-xl lg:text-left">
                <h1 className="font-manrope relative pb-5 text-center text-5xl leading-snug font-bold text-gray-900 lg:pr-5 lg:text-left">
                  <span className="text-indigo-600">Register &amp; Unlock</span>{" "}
                  the full potential of our tool
                  {/* SVG removed */}
                </h1>
                <p className="mb-9 text-center text-lg text-gray-500 lg:text-left">
                  Get started with a free account. Experience the full potential
                  of our cutting edge tool with no risk.
                </p>
                <div className="flex flex-col gap-5 lg:mb-24 lg:flex-row">
                  <a
                    href="javascript:;"
                    className="flex items-center justify-center gap-2 rounded-full bg-indigo-50 px-5 py-4 text-base font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100 focus:outline-none max-lg:mx-auto max-lg:w-full max-lg:max-w-2xl"
                  >
                    {/* SVG removed */}
                    How it works
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:col-span-6">
              <div className="rounded-3xl border border-indigo-200 bg-white p-5 max-lg:mx-auto max-lg:max-w-2xl lg:max-w-md lg:p-10 xl:ml-auto xl:max-w-lg">
                <form>
                  <h4 className="mb-12 text-3xl font-bold text-gray-900">
                    Register Now
                  </h4>
                  <div className="block w-full">
                    <div className="relative mb-9">
                      <label className="mb-2 flex items-center text-sm font-medium text-gray-600">
                        Name
                        {/* SVG removed */}
                      </label>
                      <input
                        type="text"
                        id="default-search"
                        className="block h-14 w-full rounded-full border border-gray-300 bg-transparent px-5 py-2.5 text-base font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Your full name.."
                        required
                      />
                    </div>
                    <div className="relative mb-9">
                      <label className="mb-2 flex items-center text-sm font-medium text-gray-600">
                        Email
                        {/* SVG removed */}
                      </label>
                      <input
                        type="text"
                        id="default-search"
                        className="block h-14 w-full rounded-full border border-gray-300 bg-transparent px-5 py-2.5 text-base font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Your email id.."
                        required
                      />
                    </div>
                    <div className="relative mb-9">
                      <label className="mb-2 flex items-center text-sm font-medium text-gray-600">
                        Phone Number
                        {/* SVG removed */}
                      </label>
                      <button
                        id="dropdown-button"
                        data-dropdown-toggle="dropdown"
                        className="absolute z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 py-4 text-center text-base font-medium text-gray-900"
                      >
                        IN{/* SVG removed */}
                      </button>
                      <div
                        id="dropdown"
                        className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdown-button"
                        >
                          <li>
                            <a
                              href="javascript:;"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Shopping
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              ../images
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              News
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Finance
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          className="block h-14 w-full rounded-full border border-gray-300 bg-transparent py-2.5 pr-5 pl-16 text-base font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                          placeholder="+91 000 000 0000"
                        />
                      </div>
                    </div>
                    <div className="mb-12 flex cursor-pointer items-center">
                      <input
                        id="checkbox-small1"
                        type="checkbox"
                        className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                      />
                      <label
                        htmlFor="checkbox-small1"
                        className="text-sm font-normal text-gray-600"
                      >
                        I accept the Terms &amp; Conditions
                      </label>
                    </div>
                  </div>
                  <button className="shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] h-14 w-full cursor-pointer rounded-full bg-indigo-600 text-lg font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
