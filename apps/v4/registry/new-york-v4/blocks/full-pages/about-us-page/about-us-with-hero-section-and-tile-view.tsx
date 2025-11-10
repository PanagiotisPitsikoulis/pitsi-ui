export default function AboutUsWithHeroSectionAndTileView() {
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
      <section className="relative overflow-hidden py-5 lg:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24 grid grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-6 xl:gap-24">
            <div className="w-full pb-12 md:order-first lg:col-span-6 lg:pb-0">
              <div className="text-center lg:max-w-xl lg:text-left">
                <span className="mb-2 ml-auto h-7 w-40 rounded-full bg-white text-sm font-medium text-indigo-500 uppercase lg:mr-0 lg:ml-0">
                  TECH SOLUTIONS
                </span>
                <h1 className="font-manrope pb-5 text-center text-5xl font-extrabold text-gray-900 lg:text-left">
                  Get Expert Advice on financial journey.
                </h1>
              </div>
            </div>
            <div className="w-full lg:col-span-6">
              <p className="text-center text-lg font-normal text-gray-500 lg:text-right">
                Secure Your Financial Future with Expert Advice and Innovative
                Solutions. We believe in empowering our clients to make informed
                decisions about their money.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://pagedone.io/asset/uploads/1702099809.png"
              alt="About Us tailwind page"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="relative py-14 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="flex items-center lg:pr-[100px]">
              <div className="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702099868.png"
                  alt="About Us tailwind page"
                  className="mx-auto mb-9 block object-cover lg:hidden"
                />
                <h2 className="font-manrope mb-9 text-5xl font-bold text-black max-lg:text-center">
                  Why We do This?
                </h2>
                <p className="mx-auto max-w-2xl text-xl leading-8 font-normal text-gray-500 max-lg:text-center">
                  At Pagedone, crafting exceptional user experiences is more
                  than a goal—it's our unwavering commitment. We believe that
                  every interaction, no matter how small, holds the potential to
                  delight and empower users.
                </p>
              </div>
            </div>
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702099868.png"
                alt="About Us tailwind page"
                className="hidden object-cover lg:block"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-14 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702099843.png"
                alt="About Us tailwind page"
                className="mx-auto object-cover"
              />
            </div>
            <div className="flex items-center lg:pl-[100px]">
              <div className="data w-full">
                <h2 className="font-manrope mb-9 text-5xl leading-tight font-bold text-black max-lg:text-center">
                  Helping You Grow in Every Stage
                </h2>
                <p className="mx-auto max-w-2xl text-xl leading-8 font-normal text-gray-500 max-lg:text-center">
                  At Pagedone, we recognize that growth is a journey, and every
                  stage of that journey deserves support, guidance, and
                  empowerment. Our design system, [Your Design System's Name],
                  is here to be your companion, empowering you through each
                  phase of your creative evolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-14 lg:py-24">
        <div className="lgpx-8 relative mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-manrope mb-16 text-center text-4xl font-bold text-black">
            Our details for clients
          </h2>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap">
            <div className="box-1 max-w-sm bg-white px-7 pb-7 shadow-2xl shadow-gray-300/50 max-lg:mx-auto">
              <span className="mx-auto mb-[18px] flex h-16 w-16 items-center justify-center rounded-[50px] bg-indigo-600 p-4"></span>
              <h4 className="font-manrope mb-2 text-center text-2xl leading-9 font-bold text-indigo-600">
                1000
              </h4>
              <p className="mb-2 text-center text-lg font-medium text-gray-600">
                Components
              </p>
              <p className="text-center text-sm font-normal text-gray-600">
                We made a thousands of components at pagedone here is a numbers
                of components
              </p>
            </div>
            <div className="box-1 max-w-sm bg-white px-7 pb-7 shadow-2xl shadow-gray-300/50 max-lg:mx-auto">
              <span className="mx-auto mb-[18px] flex h-16 w-16 items-center justify-center rounded-[50px] bg-indigo-600 p-4"></span>
              <h4 className="font-manrope mb-2 text-center text-2xl leading-9 font-bold text-indigo-600">
                70%
              </h4>
              <p className="mb-2 text-center text-lg font-medium text-gray-600">
                Growth
              </p>
              <p className="text-center text-sm font-normal text-gray-600">
                "Elevating Performance: Numbers soaring skywards, reflecting
                your relentless growth."
              </p>
            </div>
            <div className="box-1 max-w-sm bg-white px-7 pb-7 shadow-2xl shadow-gray-300/50 max-lg:mx-auto">
              <span className="mx-auto mb-[18px] flex h-16 w-16 items-center justify-center rounded-[50px] bg-indigo-600 p-4"></span>
              <h4 className="font-manrope mb-2 text-center text-2xl leading-9 font-bold text-indigo-600">
                49
              </h4>
              <p className="mb-2 text-center text-lg font-medium text-gray-600">
                Project
              </p>
              <p className="text-center text-sm font-normal text-gray-600">
                We have accomplished more than 625 projects worldwide and we are
                still counting many more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-lg flex-wrap items-center justify-center gap-y-8 md:max-w-3xl md:flex-wrap md:gap-y-0 lg:max-w-4xl xl:max-w-full xl:flex-row xl:flex-nowrap xl:justify-between xl:gap-x-8">
            <div className="w-full xl:w-1/3">
              <span className="mb-4 block text-sm font-medium text-indigo-600">
                Testimonial
              </span>
              <h2 className="font-manrope mb-4 text-4xl leading-[3.25rem] font-bold text-gray-900">
                What our users says about us
              </h2>
              <p className="mb-14 text-base text-gray-500">
                knowledge, expertise, advices &amp; confidence
              </p>
              <button className="flex items-center gap-4 rounded-full bg-indigo-50 px-7 py-3 font-semibold text-indigo-600 shadow-sm transition-all duration-500 hover:bg-indigo-100">
                View all testimonials
              </button>
            </div>
            <div className="relative w-full md:-mt-20 xl:mt-0 xl:w-2/3">
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="w-full xl:w-1/2">
                  <div className="rounded-2xl bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500"></div>
                    <p className="py-6 text-lg leading-8 text-gray-500">
                      Pagedone has made it possible for me to stay on top of my
                      portfolio and make informed decisions quickly and easily.
                    </p>
                    <div className="flex items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src="https://pagedone.io/asset/uploads/1696229994.png"
                          alt="Harsh image"
                          className="h-6 w-6 object-cover"
                        />
                        <h6 className="font-medium text-gray-900">Harsh P.</h6>
                      </div>
                      <span className="ml-4 border-l border-solid border-gray-300 pl-4 text-sm font-medium text-indigo-600">
                        Product Designer
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid w-full gap-8 xl:w-1/2">
                  <div className="rounded-2xl bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500"></div>
                    <p className="py-6 text-lg leading-8 text-gray-500">
                      I was hesitant to try pagedone at first, but I'm so glad I
                      did - it's exceeded all of my expectations.
                    </p>
                    <div className="flex items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src="https://pagedone.io/asset/uploads/1696229969.png"
                          alt="Jane image"
                          className="h-6 w-6 object-cover"
                        />
                        <h6 className="font-medium text-gray-900">Jane D.</h6>
                      </div>
                      <span className="ml-4 border-l border-solid border-gray-300 pl-4 text-sm font-medium text-indigo-600">
                        Sales Manger
                      </span>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500"></div>
                    <p className="py-6 text-lg leading-8 text-gray-500">
                      Pagedone stands out as the most user-friendly and
                      effective solution I've ever used.
                    </p>
                    <div className="flex items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src="https://pagedone.io/asset/uploads/1696230027.png"
                          alt="Alex image"
                          className="h-6 w-6 object-cover"
                        />
                        <h6 className="font-medium text-gray-900">Alex H.</h6>
                      </div>
                      <span className="ml-4 border-l border-solid border-gray-300 pl-4 text-sm font-medium text-indigo-600">
                        CTO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h6 className="mb-2 text-center text-lg font-medium text-indigo-600">
              FAQs
            </h6>
            <h2 className="font-manrope text-center text-4xl leading-[3.25rem] font-bold text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="accordion-group mx-auto max-w-lg md:max-w-3xl lg:max-w-full lg:px-20">
            {/*backround color and border radus are work with active class*/}
            <div
              className="accordion rounded-xl border-b border-solid border-gray-200 bg-gray-50 p-6 transition-all duration-500 active:rounded-xl active:border-transparent active:bg-gray-50"
              id="basic-heading-one-with-arrow"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-left text-base leading-8 text-gray-500 transition duration-500 hover:text-gray-900 lg:text-lg"
                aria-controls="basic-collapse-one-with-arrow"
              >
                <h5>How can I reset my password?</h5>
              </button>
              <div
                id="basic-collapse-one-with-arrow"
                className="accordion-content mt-3 block w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                aria-labelledby="basic-heading-one-with-arrow"
              >
                {/* display mustbe hidden */}
                <p className="text-base leading-6 text-gray-600">
                  To reset your password, go to the login page and click on the
                  "Forgot password" link. Enter the email address associated
                  with your account, and you will receive an email with
                  instructions on how to reset your password. Follow the
                  instructions in the email to create a new password.
                </p>
              </div>
            </div>
            <div
              className="accordion border-b border-solid border-gray-200 p-6 transition-all duration-500 active:rounded-xl active:border-transparent active:bg-gray-50"
              id="basic-heading-two-with-arrow"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-left text-base leading-8 text-gray-500 transition duration-500 hover:text-gray-900 lg:text-lg"
                aria-controls="basic-collapse-two-with-arrow"
              >
                <h5>How do I change my privacy settings?</h5>
              </button>
              <div
                id="basic-collapse-two-with-arrow"
                className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                aria-labelledby="basic-heading-two-with-arrow"
              >
                <p className="text-base leading-6 text-gray-600">
                  To reset your password, go to the login page and click on the
                  "Forgot password" link. Enter the email address associated
                  with your account, and you will receive an email with
                  instructions on how to reset your password. Follow the
                  instructions in the email to create a new password.
                </p>
              </div>
            </div>
            <div
              className="accordion border-b border-solid border-gray-200 p-6 transition-all duration-500 active:rounded-xl active:border-transparent active:bg-gray-50"
              id="basic-heading-three-with-arrow"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-left text-base leading-8 text-gray-500 transition duration-500 hover:text-gray-900 lg:text-lg"
                aria-controls="basic-collapse-three-with-arrow"
              >
                <h5>What is the payment process?</h5>
              </button>
              <div
                id="basic-collapse-three-with-arrow"
                className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                aria-labelledby="basic-heading-three-with-arrow"
              >
                <p className="text-base leading-6 text-gray-600">
                  To reset your password, go to the login page and click on the
                  "Forgot password" link. Enter the email address associated
                  with your account, and you will receive an email with
                  instructions on how to reset your password. Follow the
                  instructions in the email to create a new password.
                </p>
              </div>
            </div>
            <div
              className="accordion p-6 transition-all duration-500 active:rounded-xl active:bg-gray-50"
              id="basic-heading-four-with-arrow"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-left text-base leading-8 text-gray-500 transition duration-500 hover:text-gray-900 lg:text-lg"
                aria-controls="basic-collapse-four-with-arrow"
              >
                <h5>How do I find my purchase history?</h5>
              </button>
              <div
                id="basic-collapse-four-with-arrow"
                className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                aria-labelledby="basic-heading-four-with-arrow"
              >
                <p className="text-base leading-6 text-gray-600">
                  To reset your password, go to the login page and click on the
                  "Forgot password" link. Enter the email address associated
                  with your account, and you will receive an email with
                  instructions on how to reset your password. Follow the
                  instructions in the email to create a new password.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="mx-auto grid max-w-lg grid-cols-2 gap-12 pt-14 pb-20 md:max-w-3xl md:grid-cols-4 md:gap-4 lg:max-w-full lg:gap-8">
            <div className="block">
              <h4 className="mb-7 text-xl font-bold text-white">Pagedone</h4>
              <ul className="text-lg transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Pro Version
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="mb-7 text-xl font-bold text-white">Products</h4>
              <ul className="text-lg transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Figma UI System
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Components Library
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="mb-7 text-xl font-bold text-white">Resources</h4>
              <ul className="text-lg transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    FAQs
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Quick Start
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    User Guide
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="mb-7 text-xl font-bold text-white">Support</h4>
              <ul className="text-lg transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Customer Support
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Cookies
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    License
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Grid*/}
          <div className="border-t border-gray-700 py-7">
            <div className="flex flex-col items-center justify-center space-y-8 lg:flex-row lg:justify-between lg:space-y-0">
              <a href="javascript:;" className="flex justify-center"></a>
              <span className="block text-gray-400">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 hover:border-indigo-600"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
