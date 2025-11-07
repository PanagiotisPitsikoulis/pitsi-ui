export default function AboutUsWithHeroSectionAndTileView() {
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
      <section className="relative py-5 lg:pt-24 overflow-hidden  ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 mb-24 lg:grid-cols-12 xl:gap-24 lg:gap-6 gap-4 items-center">
            <div className="w-full lg:col-span-6 lg:pb-0 pb-12 md:order-first">
              <div className="text-center lg:text-left lg:max-w-xl">
                <span className="bg-white rounded-full w-40 h-7 font-medium text-sm uppercase text-indigo-500 mb-2 ml-auto lg:ml-0 lg:mr-0">
                  TECH SOLUTIONS
                </span>
                <h1 className="pb-5 text-center text-gray-900 font-extrabold font-manrope text-5xl lg:text-left">
                  Get Expert Advice on financial journey.
                </h1>
              </div>
            </div>
            <div className="w-full lg:col-span-6 ">
              <p className="text-lg text-gray-500 font-normal text-center lg:text-right">
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
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-[100px] flex items-center">
              <div className="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702099868.png"
                  alt="About Us tailwind page"
                  className="block mx-auto lg:hidden mb-9 object-cover"
                />
                <h2 className="font-manrope font-bold text-5xl text-black mb-9 max-lg:text-center">
                  Why We do This?
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  At Pagedone, crafting exceptional user experiences is more
                  than a goal—it's our unwavering commitment. We believe that
                  every interaction, no matter how small, holds the potential to
                  delight and empower users.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <img
                src="https://pagedone.io/asset/uploads/1702099868.png"
                alt="About Us tailwind page"
                className="hidden lg:block object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702099843.png"
                alt="About Us tailwind page"
                className="mx-auto object-cover"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-5xl leading-tight text-black mb-9 max-lg:text-center">
                  Helping You Grow in Every Stage
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-w-2xl mx-auto max-lg:text-center">
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
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lgpx-8 relative">
          <h2 className="font-manrope font-bold text-4xl text-black text-center mb-16">
            Our details for clients
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8 ">
            <div className="box-1 max-w-sm max-lg:mx-auto shadow-2xl shadow-gray-300/50 bg-white px-7 pb-7">
              <span className="w-16 h-16 mx-auto rounded-[50px] p-4 bg-indigo-600 flex items-center justify-center mb-[18px]"></span>
              <h4 className="font-manrope font-bold text-2xl leading-9 text-indigo-600 text-center mb-2">
                1000
              </h4>
              <p className="mb-2 font-medium text-lg text-gray-600 text-center">
                Components
              </p>
              <p className="font-normal text-sm text-gray-600 text-center">
                We made a thousands of components at pagedone here is a numbers
                of components
              </p>
            </div>
            <div className="box-1 max-w-sm max-lg:mx-auto shadow-2xl shadow-gray-300/50 bg-white px-7 pb-7">
              <span className="w-16 h-16 mx-auto rounded-[50px] p-4 bg-indigo-600 flex items-center justify-center mb-[18px]"></span>
              <h4 className="font-manrope font-bold text-2xl leading-9 text-indigo-600 text-center mb-2">
                70%
              </h4>
              <p className="mb-2 font-medium text-lg text-gray-600 text-center">
                Growth
              </p>
              <p className="font-normal text-sm text-gray-600 text-center">
                "Elevating Performance: Numbers soaring skywards, reflecting
                your relentless growth."
              </p>
            </div>
            <div className="box-1 max-w-sm max-lg:mx-auto shadow-2xl shadow-gray-300/50 bg-white px-7 pb-7">
              <span className="w-16 h-16 mx-auto rounded-[50px] p-4 bg-indigo-600 flex items-center justify-center mb-[18px]"></span>
              <h4 className="font-manrope font-bold text-2xl leading-9 text-indigo-600 text-center mb-2">
                49
              </h4>
              <p className="mb-2 font-medium text-lg text-gray-600 text-center">
                Project
              </p>
              <p className="font-normal text-sm text-gray-600 text-center">
                We have accomplished more than 625 projects worldwide and we are
                still counting many more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-y-8 md:gap-y-0 flex-wrap md:flex-wrap xl:flex-nowrap xl:flex-row xl:justify-between xl:gap-x-8 max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto xl:max-w-full">
            <div className="w-full xl:w-1/3">
              <span className="text-sm text-indigo-600 font-medium mb-4 block">
                Testimonial
              </span>
              <h2 className="font-manrope text-4xl font-bold text-gray-900 leading-[3.25rem] mb-4">
                What our users says about us
              </h2>
              <p className="text-base text-gray-500 mb-14">
                knowledge, expertise, advices &amp; confidence
              </p>
              <button className="bg-indigo-50 rounded-full shadow-sm py-3 px-7 flex items-center gap-4 font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100">
                View all testimonials
              </button>
            </div>
            <div className="w-full xl:w-2/3 relative md:-mt-20 xl:mt-0">
              <div className="flex flex-col items-center md:flex-row gap-8">
                <div className="w-full xl:w-1/2">
                  <div className="bg-white shadow-sm rounded-2xl p-8">
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500  "></div>
                    <p className="py-6 text-lg leading-8 text-gray-500">
                      Pagedone has made it possible for me to stay on top of my
                      portfolio and make informed decisions quickly and easily.
                    </p>
                    <div className="flex items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src="https://pagedone.io/asset/uploads/1696229994.png"
                          alt="Harsh image"
                          className="w-6 h-6 object-cover"
                        />
                        <h6 className="font-medium text-gray-900">Harsh P.</h6>
                      </div>
                      <span className="text-sm font-medium text-indigo-600 ml-4 pl-4 border-l border-solid border-gray-300">
                        Product Designer
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-1/2 grid gap-8">
                  <div className="bg-white shadow-sm rounded-2xl p-8">
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500  "></div>
                    <p className="py-6 text-lg leading-8 text-gray-500">
                      I was hesitant to try pagedone at first, but I'm so glad I
                      did - it's exceeded all of my expectations.
                    </p>
                    <div className="flex items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src="https://pagedone.io/asset/uploads/1696229969.png"
                          alt="Jane image"
                          className="w-6 h-6 object-cover"
                        />
                        <h6 className="font-medium text-gray-900">Jane D.</h6>
                      </div>
                      <span className="text-sm font-medium text-indigo-600 ml-4 pl-4 border-l border-solid border-gray-300">
                        Sales Manger
                      </span>
                    </div>
                  </div>
                  <div className="bg-white shadow-sm rounded-2xl p-8">
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500  "></div>
                    <p className="py-6 text-lg leading-8 text-gray-500">
                      Pagedone stands out as the most user-friendly and
                      effective solution I've ever used.
                    </p>
                    <div className="flex items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src="https://pagedone.io/asset/uploads/1696230027.png"
                          alt="Alex image"
                          className="w-6 h-6 object-cover"
                        />
                        <h6 className="font-medium text-gray-900">Alex H.</h6>
                      </div>
                      <span className="text-sm font-medium text-indigo-600 ml-4 pl-4 border-l border-solid border-gray-300">
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
      <section className="py-14 lg:py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
              FAQs
            </h6>
            <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem] ">
              Frequently asked questions
            </h2>
          </div>
          <div className="accordion-group lg:px-20 max-w-lg md:max-w-3xl lg:max-w-full mx-auto">
            {/*backround color and border radus are work with active class*/}
            <div
              className="accordion p-6 border-b border-solid bg-gray-50 rounded-xl  border-gray-200 transition-all duration-500 active:rounded-xl active:bg-gray-50 active:border-transparent"
              id="basic-heading-one-with-arrow"
            >
              <button
                className="accordion-toggle group  inline-flex items-center justify-between text-base leading-8 text-gray-500 w-full transition duration-500 text-left lg:text-lg hover:text-gray-900 accordion-active:text-gray-900"
                aria-controls="basic-collapse-one-with-arrow"
              >
                <h5>How can I reset my password?</h5>
              </button>
              <div
                id="basic-collapse-one-with-arrow"
                className="accordion-content w-full block px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                aria-labelledby="basic-heading-one-with-arrow"
              >
                {/* display mustbe hidden */}
                <p className="text-base text-gray-600 leading-6">
                  To reset your password, go to the login page and click on the
                  "Forgot password" link. Enter the email address associated
                  with your account, and you will receive an email with
                  instructions on how to reset your password. Follow the
                  instructions in the email to create a new password.
                </p>
              </div>
            </div>
            <div
              className="accordion p-6 border-b border-solid border-gray-200 transition-all duration-500 active:rounded-xl active:bg-gray-50 active:border-transparent"
              id="basic-heading-two-with-arrow"
            >
              <button
                className="accordion-toggle group  inline-flex items-center justify-between text-base leading-8 text-gray-500 w-full transition duration-500 text-left lg:text-lg hover:text-gray-900 accordion-active:text-gray-900"
                aria-controls="basic-collapse-two-with-arrow"
              >
                <h5>How do I change my privacy settings?</h5>
              </button>
              <div
                id="basic-collapse-two-with-arrow"
                className="accordion-content w-full hidden px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                aria-labelledby="basic-heading-two-with-arrow"
              >
                <p className="text-base text-gray-600 leading-6">
                  To reset your password, go to the login page and click on the
                  "Forgot password" link. Enter the email address associated
                  with your account, and you will receive an email with
                  instructions on how to reset your password. Follow the
                  instructions in the email to create a new password.
                </p>
              </div>
            </div>
            <div
              className="accordion p-6 border-b border-solid border-gray-200 transition-all duration-500 active:rounded-xl active:bg-gray-50 active:border-transparent"
              id="basic-heading-three-with-arrow"
            >
              <button
                className="accordion-toggle group  inline-flex items-center justify-between text-base lg:text-lg leading-8 text-gray-500 w-full transition duration-500 text-left hover:text-gray-900 accordion-active:text-gray-900"
                aria-controls="basic-collapse-three-with-arrow"
              >
                <h5>What is the payment process?</h5>
              </button>
              <div
                id="basic-collapse-three-with-arrow"
                className="accordion-content w-full hidden px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                aria-labelledby="basic-heading-three-with-arrow"
              >
                <p className="text-base text-gray-600 leading-6">
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
                className="accordion-toggle group  inline-flex items-center justify-between text-base lg:text-lg leading-8 text-gray-500 w-full transition duration-500 text-left hover:text-gray-900 accordion-active:text-gray-900"
                aria-controls="basic-collapse-four-with-arrow"
              >
                <h5>How do I find my purchase history?</h5>
              </button>
              <div
                id="basic-collapse-four-with-arrow"
                className="accordion-content w-full hidden px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                aria-labelledby="basic-heading-four-with-arrow"
              >
                <p className="text-base text-gray-600 leading-6">
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
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-lg md:max-w-3xl lg:max-w-full mx-auto">
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7">Pagedone</h4>
              <ul className="text-lg  transition-all duration-500">
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
                    className=" text-gray-400 hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Pro Version
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7">Products</h4>
              <ul className="text-lg  transition-all duration-500">
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
                    className=" text-gray-400 hover:text-white"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Components Library
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7">Resources</h4>
              <ul className="text-lg  transition-all duration-500">
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
                    className=" text-gray-400 hover:text-white"
                  >
                    Quick Start
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    User Guide
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7">Support</h4>
              <ul className="text-lg  transition-all duration-500">
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
                    className=" text-gray-400 hover:text-white"
                  >
                    Cookies
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    License
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Grid*/}
          <div className="py-7 border-t border-gray-700 ">
            <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
              <a href="javascript:;" className="flex justify-center "></a>
              <span className="text-gray-400  block">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
