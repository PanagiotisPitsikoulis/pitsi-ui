export default function AboutUsWithTwoColumnGridImagesAndDescription() {
  return (
    <div>
      <nav className="py-5 relative z-50 w-full bg-white transition-all duration-500 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="javascript:;" className="flex items-center"></a>
              <button
                data-collapse-toggle="navbar-default"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden w-full lg:flex lg:pl-11" id="navbar-default">
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
                    className="flex items-center justify-between text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:px-5 md:mb-0 lg:text-left text-center m-auto lg:m-0"
                  >
                    Products
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    className="animate-fade z-10 absolute top-14 hidden -left-80 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full"
                  >
                    <div className="flex justify-between">
                      <ul
                        className="text-sm text-gray-700 w-1/2"
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
                            <div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                    className="dropdown-menu z-10 hidden absolute top-14 font-normal bg-white rounded-lg shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] w-64 xl:p-8 lg:p-4 p-2"
                  >
                    <ul
                      className="text-sm text-gray-700"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <h6 className="text-sm text-gray-500 font-medium mb-2">
                        Features
                      </h6>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Notification
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="flex items-center justify-center lg:flex-1 lg:justify-end">
                <button className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                  Login
                </button>
                <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm md:ml-5 hover:bg-indigo-700">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative py-5 lg:pt-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 mb-24 lg:grid-cols-12 xl:gap-24 lg:gap-6 gap-4 items-center">
            <div className="w-full lg:col-span-5 lg:pb-0 pb-12 md:order-first">
              <div className="text-center lg:text-left lg:max-w-xl">
                <h1 className="pb-5 text-center text-gray-900 font-extrabold font-manrope text-5xl lg:text-left">
                  So how did
                  <span className="text-indigo-600 font-extrabold font-manrope text-5xl leading-relaxed">
                    pagedone come
                  </span>
                  <br />
                  to be?
                </h1>
              </div>
            </div>
            <div className="w-full lg:col-span-7">
              <p className="text-lg text-gray-500 font-normal text-center lg:text-right max-w-xl mx-auto lg:mr-0">
                Secure Your Financial Future with Expert Advice and Innovative
                Solutions. We believe in empowering our clients to make informed
                decisions about their money.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative bg-cover bg-center w-full h-auto py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-[150px] lg:max-w-xs text-white font-manrope font-extrabold text-5xl leading-tight lg:text-7xl text-right ml-auto lg:leading-[1.4]">
            It’s all about the people
          </h2>
        </div>
      </div>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-medium text-sm text-indigo-500 uppercase mb-2">
            TECH SOLUTIONS
          </p>
          <h2 className="font-manrope font-semibold text-4xl md:text-5xl text-gray-900 max-w-4xl md:leading-snug mb-6 max-md:text-center">
            "Building Connections with Customers: Uniting Vision and Design"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-3 mb-12 lg:mb-24">
            <p className="font-normal text-lg text-gray-500 max-md:text-center">
              "The module 'Building Connections with Customers: Uniting Vision
              and Design' serves as the cornerstone of our UI design system,
              orchestrating a seamless convergence between our brand's vision
              and the user experience.
            </p>
            <p className="font-normal text-lg text-gray-500 max-md:text-center">
              This component encapsulates a collection of meticulously curated
              design elements, interactive features, and content strategies
              aimed at fostering meaningful connections with our audience.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702103753.png"
                alt="group Meeting image"
                className="max-lg:mx-auto object-cover"
              />
            </div>
            <div className="data flex flex-col gap-8 xl:gap-10">
              <div className="box">
                <h5 className="font-semibold text-base text-black leading-7 text-center lg:text-left">
                  Our first Customer
                </h5>
                <p className="font-medium text-xs leading-5 text-gray-900 text-center lg:text-left mb-3 xl:mb-5 mt-1">
                  Febrary 2021
                </p>
                <p className="font-normal text-xs text-gray-900 text-center lg:text-left max-lg:max-w-xl mx-auto">
                  Pagedone has made it possible for me to stay on top of my
                  portfolio and make informed decisions quickly and easily.
                </p>
              </div>
              <div className="box">
                <h5 className="font-semibold text-base text-black leading-7 text-center lg:text-left">
                  100th Customer
                </h5>
                <p className="font-medium text-xs leading-5 text-gray-900 text-center lg:text-left mb-3 xl:mb-5 mt-1">
                  May 2021
                </p>
                <p className="font-normal text-xs text-gray-900 text-center lg:text-left max-lg:max-w-xl mx-auto">
                  Thanks to pagedone, I feel more informed and confident about
                  my investment decisions than ever before.
                </p>
              </div>
              <div className="box">
                <h5 className="font-semibold text-base text-black leading-7 text-center lg:text-left">
                  Online Meetings
                </h5>
                <p className="font-medium text-xs leading-5 text-gray-900 text-center lg:text-left mb-3 xl:mb-5 mt-1">
                  Jan 2022
                </p>
                <p className="font-normal text-xs text-gray-900 text-center lg:text-left max-lg:max-w-xl mx-auto">
                  The customer service team at pagedone went above and beyond to
                  help me resolve a billing issue.
                </p>
              </div>
              <div className="box">
                <h5 className="font-semibold text-base text-black leading-7 text-center lg:text-left">
                  500th Customer
                </h5>
                <p className="font-medium text-xs leading-5 text-gray-900 text-center lg:text-left mb-3 xl:mb-5 mt-1">
                  Feb 2023
                </p>
                <p className="font-normal text-xs text-gray-900 text-center lg:text-left lg:max-w-sm max-lg:max-w-xl max-lg:mx-auto">
                  I've been using pagedone for a year now and it's made managing
                  my finances so much easier and quick.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">
              Some of our valuable customers feedback
            </h2>
          </div>
          <div className="swiper testi-Swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="bg-gray-50 rounded-2xl py-8 px-8 max-w-xl mx-auto lg:max-w-3xl lg:py-11 lg:px-12 xl:max-w-5xl">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <img
                        src="https://pagedone.io/asset/uploads/1704349572.png"
                        alt="Ethan image"
                        className="w-14 h-14 object-cover"
                      />
                    </div>
                    <div className="block">
                      <h5 className="text-lg text-gray-900 font-semibold mb-1">
                        Ethan Miller
                      </h5>
                      <span className="text-sm text-gray-500">
                        Product Designer
                      </span>
                    </div>
                  </div>
                  <p className="text-base text-gray-800 leading-7 mb-8">
                    I have been using pagedone for several months now, and I
                    must say that it has made my life a lot easier. The
                    platform's intuitive interface and ease of use have allowed
                    me to manage my finances more effectively and make informed
                    investment decisions. I particularly like the product's
                    auto-tracking feature, which has saved me a lot of time and
                    effort. Moreover, the personalized insights and
                    recommendations have helped me maximize my profits and
                    minimize my risks. Overall, I am highly satisfied with this
                    fintech product and would recommend it to anyone looking to
                    simplify their financial management.
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500"></div>
                    <span className="text-indigo-600 font-semibold border-l border-solid border-gray-300 ml-3 pl-3">
                      5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="bg-gray-50 rounded-2xl py-8 px-8 max-w-xl mx-auto lg:max-w-3xl lg:py-11 lg:px-12 xl:max-w-5xl">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <img
                        src="https://pagedone.io/asset/uploads/1704349572.png"
                        alt="Ethan image"
                        className="w-14 h-14 object-cover"
                      />
                    </div>
                    <div className="block">
                      <h5 className="text-lg text-gray-900 font-semibold mb-1">
                        Ethan Miller
                      </h5>
                      <span className="text-sm text-gray-500">
                        Product Designer
                      </span>
                    </div>
                  </div>
                  <p className="text-base text-gray-800 leading-7 mb-8">
                    I have been using pagedone for several months now, and I
                    must say that it has made my life a lot easier. The
                    platform's intuitive interface and ease of use have allowed
                    me to manage my finances more effectively and make informed
                    investment decisions. I particularly like the product's
                    auto-tracking feature, which has saved me a lot of time and
                    effort. Moreover, the personalized insights and
                    recommendations have helped me maximize my profits and
                    minimize my risks. Overall, I am highly satisfied with this
                    fintech product and would recommend it to anyone looking to
                    simplify their financial management.
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500"></div>
                    <span className="text-indigo-600 font-semibold border-l border-solid border-gray-300 ml-3 pl-3">
                      5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="bg-gray-50 rounded-2xl py-8 px-8 max-w-xl mx-auto lg:max-w-3xl lg:py-11 lg:px-12 xl:max-w-5xl">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <img
                        src="https://pagedone.io/asset/uploads/1704349572.png"
                        alt="Ethan image"
                        className="w-14 h-14 object-cover"
                      />
                    </div>
                    <div className="block">
                      <h5 className="text-lg text-gray-900 font-semibold mb-1">
                        Ethan Miller
                      </h5>
                      <span className="text-sm text-gray-500">
                        Product Designer
                      </span>
                    </div>
                  </div>
                  <p className="text-base text-gray-800 leading-7 mb-8">
                    I have been using pagedone for several months now, and I
                    must say that it has made my life a lot easier. The
                    platform's intuitive interface and ease of use have allowed
                    me to manage my finances more effectively and make informed
                    investment decisions. I particularly like the product's
                    auto-tracking feature, which has saved me a lot of time and
                    effort. Moreover, the personalized insights and
                    recommendations have helped me maximize my profits and
                    minimize my risks. Overall, I am highly satisfied with this
                    fintech product and would recommend it to anyone looking to
                    simplify their financial management.
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center gap-2 text-amber-500 transition-all duration-500"></div>
                    <span className="text-indigo-600 font-semibold border-l border-solid border-gray-300 ml-3 pl-3">
                      5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-gray-900 font-bold text-center mb-16 xl:text-left">
            Our Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-md mx-auto md:max-w-3xl xl:max-w-full">
            <div className="w-full mx-auto group bg-white about-sh-2 py-9 px-7 rounded-xl shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-indigo-600 cursor-pointer">
              <span className="w-[60px] h-[60px] max-lg:mx-auto rounded-xl p-4 bg-gray-50 flex items-center justify-center"></span>
              <p className="font-normal text-xl leading-8 text-gray-900 my-5 text-center lg:text-left transition-all duration-500 group-hover:text-white">
                Customer Focused
              </p>
              <p className="font-normal text-sm text-gray-500 text-center lg:text-left transition-all duration-500 group-hover:text-gray-300">
                Absolutely, being customer-focused refers to prioritizing and
                centering all business efforts, strategies.
              </p>
            </div>
            <div className="w-full mx-auto group bg-white about-sh-2 py-9 px-7 rounded-xl shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-indigo-600 cursor-pointer">
              <span className="w-[60px] h-[60px] max-lg:mx-auto rounded-xl p-4 bg-gray-50 flex items-center justify-center"></span>
              <p className="font-normal text-xl leading-8 text-gray-900 my-5 text-center lg:text-left transition-all duration-500 group-hover:text-white">
                Excellence
              </p>
              <p className="font-normal text-sm text-gray-500 text-center lg:text-left transition-all duration-500 group-hover:text-gray-300">
                Excellence isn't merely achieving a single pinnacle but rather
                an ongoing journey marked.
              </p>
            </div>
            <div className="w-full group mx-auto bg-white about-sh-2 py-9 px-7 rounded-xl shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-indigo-600 cursor-pointer">
              <span className="w-[60px] h-[60px] max-lg:mx-auto rounded-xl p-4 bg-gray-50 flex items-center justify-center"></span>
              <p className="font-normal text-xl leading-8 text-gray-900 my-5 text-center lg:text-left transition-all duration-500 group-hover:text-white">
                Professional
              </p>
              <p className="font-normal text-sm text-gray-500 text-center lg:text-left transition-all duration-500 group-hover:text-gray-300">
                Professionalism embodies a set of qualities and behaviors that
                reflect competence, integrity, and respect.
              </p>
            </div>
            <div className="w-full group mx-auto bg-white about-sh-2 py-9 px-7 rounded-xl shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-indigo-600 cursor-pointer">
              <span className="w-[60px] h-[60px] max-lg:mx-auto rounded-xl p-4 bg-gray-50 flex items-center justify-center"></span>
              <p className="font-normal text-xl leading-8 text-gray-900 my-5 text-center lg:text-left transition-all duration-500 group-hover:text-white">
                Honesty &amp; Integrity
              </p>
              <p className="font-normal text-sm text-gray-500 text-center lg:text-left transition-all duration-500 group-hover:text-gray-300">
                Honesty and integrity form the cornerstone of personal and
                professional relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="font-manrope text-5xl text-center font-bold text-gray-900">
              Meet our <span className="text-indigo-600">special</span> team
            </h2>
          </div>
          <div className="swiper teamSwiper max-w-md md:max-w-2xl mx-auto lg:max-w-full">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="block">
                  <div className="relative mb-7">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238755.png"
                      alt="Michael image"
                      className="w-72 h-64 rounded-2xl object-cover mx-auto"
                    />
                  </div>
                  <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500">
                    Michael Cannon
                  </h4>
                  <span className="text-gray-500 text-center block transition-all duration-500">
                    Founder
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="block">
                  <div className="relative mb-7">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238771.png"
                      alt="Dianne image"
                      className="w-72 h-64 rounded-2xl object-cover mx-auto"
                    />
                  </div>
                  <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500">
                    Dianne Russell
                  </h4>
                  <span className="text-gray-500 text-center block transition-all duration-500">
                    Sales Lead
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="block">
                  <div className="relative mb-7">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238665.png"
                      alt="Devona image"
                      className="w-72 h-64 rounded-2xl object-cover mx-auto"
                    />
                  </div>
                  <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500">
                    Devona Lane
                  </h4>
                  <span className="text-gray-500 text-center block transition-all duration-500">
                    UI Designer
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="block">
                  <div className="relative mb-7">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238702.png"
                      alt="Ronald image"
                      className="w-72 h-64 rounded-2xl object-cover mx-auto"
                    />
                  </div>
                  <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500">
                    Ronald Richards
                  </h4>
                  <span className="text-gray-500 text-center block transition-all duration-500">
                    Product Designer
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="block">
                  <div className="relative mb-7">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238771.png"
                      alt="Dianne image"
                      className="w-72 h-64 rounded-2xl object-cover mx-auto"
                    />
                  </div>
                  <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500">
                    Dianne Russell
                  </h4>
                  <span className="text-gray-500 text-center block transition-all duration-500">
                    Sales Lead
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="block">
                  <div className="relative mb-7">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238665.png"
                      alt="Devona image"
                      className="w-72 h-64 rounded-2xl object-cover mx-auto"
                    />
                  </div>
                  <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500">
                    Devona Lane
                  </h4>
                  <span className="text-gray-500 text-center block transition-all duration-500">
                    UI Designer
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="block">
                  <div className="relative mb-7">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238771.png"
                      alt="Dianne image"
                      className="w-72 h-64 rounded-2xl object-cover mx-auto"
                    />
                  </div>
                  <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500">
                    Dianne Russell
                  </h4>
                  <span className="text-gray-500 text-center block transition-all duration-500">
                    Sales Lead
                  </span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="block">
                  <div className="relative mb-7">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238665.png"
                      alt="Devona image"
                      className="w-72 h-64 rounded-2xl object-cover mx-auto"
                    />
                  </div>
                  <h4 className="text-2xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500">
                    Devona Lane
                  </h4>
                  <span className="text-gray-500 text-center block transition-all duration-500">
                    UI Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-10">
              <button
                id="slider-button-left"
                className="swiper-button-prev p-2 top-[90%] group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
                data-carousel-prev
              ></button>
              <button
                id="slider-button-right"
                className="swiper-button-next group p-2 top-[90%] flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
                data-carousel-next
              ></button>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-11 py-10 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl p-8 lg:py-8 lg:px-12 xl:py-16 xl:px-24">
            <div className="flex flex-col items-center justify-between gap-12 lg:gap-24 lg:flex-row">
              <div className="w-full lg:w-1/2">
                <span className="uppercase text-indigo-600 block mb-1 font-medium text-center lg:text-left">
                  OUR FUTURE
                </span>
                <h2 className="font-manrope text-4xl font-bold text-gray-900 leading-[3.5rem] mb-5 text-center lg:text-left max-lg:max-w-2xl max-lg:mx-auto">
                  Get professional advice for your portfolio growth.
                </h2>
                <p className="text-gray-500 leading-6 text-center lg:text-left max-lg:max-w-2xl max-lg:mx-auto">
                  Join our community of subscribers and receive regular updates
                  delivered straight to your inbox. It's quick, easy, and free
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col justify-center">
                  <span className="text-indigo-600 font-medium block mb-5 text-center lg:text-left">
                    Get started free
                  </span>
                  <input
                    type="text"
                    name="email"
                    className="py-3 px-5 h-14 w-full max-w-[467px] bg-transparent mx-auto mb-5 rounded-full text-gray-900 focus:outline-none placeholder:text-gray-400"
                    placeholder="Email address"
                  />
                  <button className="h-14 py-3.5 px-8 bg-indigo-600 shadow-sm rounded-full w-full max-w-[467px] mx-auto text-white font-semibold transition-all duration-500 hover:bg-indigo-700">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-09 w-full pt-14 pb-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 pb-14 flex justify-between items-center flex-col gap-8 lg:gap-0 lg:flex-row">
            <div className="block">
              <h3 className="font-manrope text-3xl text-gray-900 font-bold mb-2 text-center lg:text-left">
                Sign up to our webpage
              </h3>
              <p className="text-gray-500 text-center lg:text-left">
                Stay up to date with the latest update and announcement.
              </p>
            </div>
            <div className="flex items-center flex-col gap-4 lg:flex-row">
              <input
                type="text"
                name="email"
                className="py-3 px-6 h-14 border border-gray-300 shadow-sm rounded-full focus:outline-none max-lg:text-center"
                placeholder="Enter your mail.."
              />
              <button className="h-14 py-3.5 px-7 bg-indigo-600 hover:bg-indigo-700 shadow-sm rounded-full text-white font-bold">
                Subscribe
              </button>
            </div>
          </div>
          {/*Grid*/}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pt-14 pb-10">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a
                href="javascript:;"
                className="flex justify-center lg:justify-start"
              ></a>
              <p className="py-8 text-gray-500 lg:max-w-xs text-center lg:text-left">
                Trusted in more than 100 countries &amp; 5 million customers.
                Have any query ?
              </p>
              <a
                href="javascript:;"
                className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
              >
                Contact us
              </a>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7 max-w-[100px] mx-auto">
                Pagedone
              </h4>
              <ul className="text-sm transition-all duration-500 max-w-[100px] mx-auto">
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
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Pro Version
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7 max-w-[150px] mx-auto">
                Products
              </h4>
              <ul className="text-sm transition-all duration-500 max-w-[150px] mx-auto">
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
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Components Library
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7 max-w-[101px] mx-auto">
                Resources
              </h4>
              <ul className="text-sm transition-all duration-500 max-w-[101px] mx-auto">
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
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Quick Start
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    User Guide
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7 max-w-[150px] mx-auto">
                Support
              </h4>
              <ul className="text-sm transition-all duration-500 max-w-[150px] mx-auto">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Customer Support
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Cookies
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    License
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
          </div>
          {/*Grid*/}
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm text-gray-500">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
                <a
                  href="javascript:;"
                  className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-gray-600 hover:bg-gray-900"
                ></a>
                <a
                  href="javascript:;"
                  className="group relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center hover:bg-gray-900 before:content[''] before:absolute before:w-full before:h-full before:-z-10"
                ></a>
                <a
                  href="javascript:;"
                  className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF] hover:bg-gray-900"
                ></a>
                <a
                  href="javascript:;"
                  className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#FF0000] hover:bg-gray-900"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
