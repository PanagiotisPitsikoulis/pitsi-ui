export default function AboutUsWithTwoColumnGridImagesAndDescription() {
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
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50"></div>
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
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative overflow-hidden py-5 lg:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24 grid grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-6 xl:gap-24">
            <div className="w-full pb-12 md:order-first lg:col-span-5 lg:pb-0">
              <div className="text-center lg:max-w-xl lg:text-left">
                <h1 className="font-manrope pb-5 text-center text-5xl font-extrabold text-gray-900 lg:text-left">
                  So how did
                  <span className="font-manrope text-5xl leading-relaxed font-extrabold text-indigo-600">
                    pagedone come
                  </span>
                  <br />
                  to be?
                </h1>
              </div>
            </div>
            <div className="w-full lg:col-span-7">
              <p className="mx-auto max-w-xl text-center text-lg font-normal text-gray-500 lg:mr-0 lg:text-right">
                Secure Your Financial Future with Expert Advice and Innovative
                Solutions. We believe in empowering our clients to make informed
                decisions about their money.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative h-auto w-full bg-cover bg-center py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope ml-auto max-w-[150px] text-right text-5xl leading-tight font-extrabold text-white lg:max-w-xs lg:text-7xl lg:leading-[1.4]">
            It’s all about the people
          </h2>
        </div>
      </div>
      <section className="relative py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-medium text-indigo-500 uppercase">
            TECH SOLUTIONS
          </p>
          <h2 className="font-manrope mb-6 max-w-4xl text-4xl font-semibold text-gray-900 max-md:text-center md:text-5xl md:leading-snug">
            "Building Connections with Customers: Uniting Vision and Design"
          </h2>
          <div className="mb-12 grid grid-cols-1 gap-8 p-3 md:grid-cols-2 lg:mb-24">
            <p className="text-lg font-normal text-gray-500 max-md:text-center">
              "The module 'Building Connections with Customers: Uniting Vision
              and Design' serves as the cornerstone of our UI design system,
              orchestrating a seamless convergence between our brand's vision
              and the user experience.
            </p>
            <p className="text-lg font-normal text-gray-500 max-md:text-center">
              This component encapsulates a collection of meticulously curated
              design elements, interactive features, and content strategies
              aimed at fostering meaningful connections with our audience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702103753.png"
                alt="group Meeting image"
                className="object-cover max-lg:mx-auto"
              />
            </div>
            <div className="data flex flex-col gap-8 xl:gap-10">
              <div className="box">
                <h5 className="text-center text-base leading-7 font-semibold text-black lg:text-left">
                  Our first Customer
                </h5>
                <p className="mt-1 mb-3 text-center text-xs leading-5 font-medium text-gray-900 lg:text-left xl:mb-5">
                  Febrary 2021
                </p>
                <p className="mx-auto text-center text-xs font-normal text-gray-900 max-lg:max-w-xl lg:text-left">
                  Pagedone has made it possible for me to stay on top of my
                  portfolio and make informed decisions quickly and easily.
                </p>
              </div>
              <div className="box">
                <h5 className="text-center text-base leading-7 font-semibold text-black lg:text-left">
                  100th Customer
                </h5>
                <p className="mt-1 mb-3 text-center text-xs leading-5 font-medium text-gray-900 lg:text-left xl:mb-5">
                  May 2021
                </p>
                <p className="mx-auto text-center text-xs font-normal text-gray-900 max-lg:max-w-xl lg:text-left">
                  Thanks to pagedone, I feel more informed and confident about
                  my investment decisions than ever before.
                </p>
              </div>
              <div className="box">
                <h5 className="text-center text-base leading-7 font-semibold text-black lg:text-left">
                  Online Meetings
                </h5>
                <p className="mt-1 mb-3 text-center text-xs leading-5 font-medium text-gray-900 lg:text-left xl:mb-5">
                  Jan 2022
                </p>
                <p className="mx-auto text-center text-xs font-normal text-gray-900 max-lg:max-w-xl lg:text-left">
                  The customer service team at pagedone went above and beyond to
                  help me resolve a billing issue.
                </p>
              </div>
              <div className="box">
                <h5 className="text-center text-base leading-7 font-semibold text-black lg:text-left">
                  500th Customer
                </h5>
                <p className="mt-1 mb-3 text-center text-xs leading-5 font-medium text-gray-900 lg:text-left xl:mb-5">
                  Feb 2023
                </p>
                <p className="text-center text-xs font-normal text-gray-900 max-lg:mx-auto max-lg:max-w-xl lg:max-w-sm lg:text-left">
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
            <h2 className="font-manrope text-center text-4xl font-bold text-gray-900">
              Some of our valuable customers feedback
            </h2>
          </div>
          <div className="swiper testi-Swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="mx-auto max-w-xl rounded-2xl bg-gray-50 px-8 py-8 lg:max-w-3xl lg:px-12 lg:py-11 xl:max-w-5xl">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative">
                      <img
                        src="https://pagedone.io/asset/uploads/1704349572.png"
                        alt="Ethan image"
                        className="h-14 w-14 object-cover"
                      />
                    </div>
                    <div className="block">
                      <h5 className="mb-1 text-lg font-semibold text-gray-900">
                        Ethan Miller
                      </h5>
                      <span className="text-sm text-gray-500">
                        Product Designer
                      </span>
                    </div>
                  </div>
                  <p className="mb-8 text-base leading-7 text-gray-800">
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
                    <span className="ml-3 border-l border-solid border-gray-300 pl-3 font-semibold text-indigo-600">
                      5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="mx-auto max-w-xl rounded-2xl bg-gray-50 px-8 py-8 lg:max-w-3xl lg:px-12 lg:py-11 xl:max-w-5xl">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative">
                      <img
                        src="https://pagedone.io/asset/uploads/1704349572.png"
                        alt="Ethan image"
                        className="h-14 w-14 object-cover"
                      />
                    </div>
                    <div className="block">
                      <h5 className="mb-1 text-lg font-semibold text-gray-900">
                        Ethan Miller
                      </h5>
                      <span className="text-sm text-gray-500">
                        Product Designer
                      </span>
                    </div>
                  </div>
                  <p className="mb-8 text-base leading-7 text-gray-800">
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
                    <span className="ml-3 border-l border-solid border-gray-300 pl-3 font-semibold text-indigo-600">
                      5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="mx-auto max-w-xl rounded-2xl bg-gray-50 px-8 py-8 lg:max-w-3xl lg:px-12 lg:py-11 xl:max-w-5xl">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative">
                      <img
                        src="https://pagedone.io/asset/uploads/1704349572.png"
                        alt="Ethan image"
                        className="h-14 w-14 object-cover"
                      />
                    </div>
                    <div className="block">
                      <h5 className="mb-1 text-lg font-semibold text-gray-900">
                        Ethan Miller
                      </h5>
                      <span className="text-sm text-gray-500">
                        Product Designer
                      </span>
                    </div>
                  </div>
                  <p className="mb-8 text-base leading-7 text-gray-800">
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
                    <span className="ml-3 border-l border-solid border-gray-300 pl-3 font-semibold text-indigo-600">
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
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope mb-16 text-center text-4xl font-bold text-gray-900 xl:text-left">
            Our Stats
          </h2>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 xl:max-w-full xl:grid-cols-4">
            <div className="group about-sh-2 mx-auto w-full cursor-pointer rounded-xl bg-white px-7 py-9 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:shadow-gray-300">
              <span className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-gray-50 p-4 max-lg:mx-auto"></span>
              <p className="my-5 text-center text-xl leading-8 font-normal text-gray-900 transition-all duration-500 group-hover:text-white lg:text-left">
                Customer Focused
              </p>
              <p className="text-center text-sm font-normal text-gray-500 transition-all duration-500 group-hover:text-gray-300 lg:text-left">
                Absolutely, being customer-focused refers to prioritizing and
                centering all business efforts, strategies.
              </p>
            </div>
            <div className="group about-sh-2 mx-auto w-full cursor-pointer rounded-xl bg-white px-7 py-9 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:shadow-gray-300">
              <span className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-gray-50 p-4 max-lg:mx-auto"></span>
              <p className="my-5 text-center text-xl leading-8 font-normal text-gray-900 transition-all duration-500 group-hover:text-white lg:text-left">
                Excellence
              </p>
              <p className="text-center text-sm font-normal text-gray-500 transition-all duration-500 group-hover:text-gray-300 lg:text-left">
                Excellence isn't merely achieving a single pinnacle but rather
                an ongoing journey marked.
              </p>
            </div>
            <div className="group about-sh-2 mx-auto w-full cursor-pointer rounded-xl bg-white px-7 py-9 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:shadow-gray-300">
              <span className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-gray-50 p-4 max-lg:mx-auto"></span>
              <p className="my-5 text-center text-xl leading-8 font-normal text-gray-900 transition-all duration-500 group-hover:text-white lg:text-left">
                Professional
              </p>
              <p className="text-center text-sm font-normal text-gray-500 transition-all duration-500 group-hover:text-gray-300 lg:text-left">
                Professionalism embodies a set of qualities and behaviors that
                reflect competence, integrity, and respect.
              </p>
            </div>
            <div className="group about-sh-2 mx-auto w-full cursor-pointer rounded-xl bg-white px-7 py-9 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:shadow-gray-300">
              <span className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-gray-50 p-4 max-lg:mx-auto"></span>
              <p className="my-5 text-center text-xl leading-8 font-normal text-gray-900 transition-all duration-500 group-hover:text-white lg:text-left">
                Honesty &amp; Integrity
              </p>
              <p className="text-center text-sm font-normal text-gray-500 transition-all duration-500 group-hover:text-gray-300 lg:text-left">
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
            <h2 className="font-manrope text-center text-5xl font-bold text-gray-900">
              Meet our <span className="text-indigo-600">special</span> team
            </h2>
          </div>
          <div className="swiper teamSwiper mx-auto max-w-md md:max-w-2xl lg:max-w-full">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="block">
                  <div className="relative mb-7">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238755.png"
                      alt="Michael image"
                      className="mx-auto h-64 w-72 rounded-2xl object-cover"
                    />
                  </div>
                  <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                    Michael Cannon
                  </h4>
                  <span className="block text-center text-gray-500 transition-all duration-500">
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
                      className="mx-auto h-64 w-72 rounded-2xl object-cover"
                    />
                  </div>
                  <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                    Dianne Russell
                  </h4>
                  <span className="block text-center text-gray-500 transition-all duration-500">
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
                      className="mx-auto h-64 w-72 rounded-2xl object-cover"
                    />
                  </div>
                  <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                    Devona Lane
                  </h4>
                  <span className="block text-center text-gray-500 transition-all duration-500">
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
                      className="mx-auto h-64 w-72 rounded-2xl object-cover"
                    />
                  </div>
                  <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                    Ronald Richards
                  </h4>
                  <span className="block text-center text-gray-500 transition-all duration-500">
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
                      className="mx-auto h-64 w-72 rounded-2xl object-cover"
                    />
                  </div>
                  <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                    Dianne Russell
                  </h4>
                  <span className="block text-center text-gray-500 transition-all duration-500">
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
                      className="mx-auto h-64 w-72 rounded-2xl object-cover"
                    />
                  </div>
                  <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                    Devona Lane
                  </h4>
                  <span className="block text-center text-gray-500 transition-all duration-500">
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
                      className="mx-auto h-64 w-72 rounded-2xl object-cover"
                    />
                  </div>
                  <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                    Dianne Russell
                  </h4>
                  <span className="block text-center text-gray-500 transition-all duration-500">
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
                      className="mx-auto h-64 w-72 rounded-2xl object-cover"
                    />
                  </div>
                  <h4 className="mb-2 text-center text-2xl font-semibold text-gray-900 transition-all duration-500">
                    Devona Lane
                  </h4>
                  <span className="block text-center text-gray-500 transition-all duration-500">
                    UI Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-10">
              <button
                id="slider-button-left"
                className="swiper-button-prev group top-[90%] flex h-11 w-11 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                data-carousel-prev
              ></button>
              <button
                id="slider-button-right"
                className="swiper-button-next group top-[90%] flex h-11 w-11 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                data-carousel-next
              ></button>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-11 py-10 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gray-100 p-8 lg:px-12 lg:py-8 xl:px-24 xl:py-16">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-24">
              <div className="w-full lg:w-1/2">
                <span className="mb-1 block text-center font-medium text-indigo-600 uppercase lg:text-left">
                  OUR FUTURE
                </span>
                <h2 className="font-manrope mb-5 text-center text-4xl leading-[3.5rem] font-bold text-gray-900 max-lg:mx-auto max-lg:max-w-2xl lg:text-left">
                  Get professional advice for your portfolio growth.
                </h2>
                <p className="text-center leading-6 text-gray-500 max-lg:mx-auto max-lg:max-w-2xl lg:text-left">
                  Join our community of subscribers and receive regular updates
                  delivered straight to your inbox. It's quick, easy, and free
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col justify-center">
                  <span className="mb-5 block text-center font-medium text-indigo-600 lg:text-left">
                    Get started free
                  </span>
                  <input
                    type="text"
                    name="email"
                    className="mx-auto mb-5 h-14 w-full max-w-[467px] rounded-full bg-transparent px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Email address"
                  />
                  <button className="mx-auto h-14 w-full max-w-[467px] rounded-full bg-indigo-600 px-8 py-3.5 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700">
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
          <div className="flex flex-col items-center justify-between gap-8 border-b border-gray-200 pb-14 lg:flex-row lg:gap-0">
            <div className="block">
              <h3 className="font-manrope mb-2 text-center text-3xl font-bold text-gray-900 lg:text-left">
                Sign up to our webpage
              </h3>
              <p className="text-center text-gray-500 lg:text-left">
                Stay up to date with the latest update and announcement.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <input
                type="text"
                name="email"
                className="h-14 rounded-full border border-gray-300 px-6 py-3 shadow-sm focus:outline-none max-lg:text-center"
                placeholder="Enter your mail.."
              />
              <button className="h-14 rounded-full bg-indigo-600 px-7 py-3.5 font-bold text-white shadow-sm hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
          {/*Grid*/}
          <div className="grid grid-cols-2 gap-8 pt-14 pb-10 md:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a
                href="javascript:;"
                className="flex justify-center lg:justify-start"
              ></a>
              <p className="py-8 text-center text-gray-500 lg:max-w-xs lg:text-left">
                Trusted in more than 100 countries &amp; 5 million customers.
                Have any query ?
              </p>
              <a
                href="javascript:;"
                className="mx-auto block h-9 w-fit rounded-full bg-indigo-600 px-5 py-2.5 text-xs text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
              >
                Contact us
              </a>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="mx-auto mb-7 max-w-[100px] text-lg font-medium text-gray-900">
                Pagedone
              </h4>
              <ul className="mx-auto max-w-[100px] text-sm transition-all duration-500">
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
              <h4 className="mx-auto mb-7 max-w-[150px] text-lg font-medium text-gray-900">
                Products
              </h4>
              <ul className="mx-auto max-w-[150px] text-sm transition-all duration-500">
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
              <h4 className="mx-auto mb-7 max-w-[101px] text-lg font-medium text-gray-900">
                Resources
              </h4>
              <ul className="mx-auto max-w-[101px] text-sm transition-all duration-500">
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
              <h4 className="mx-auto mb-7 max-w-[150px] text-lg font-medium text-gray-900">
                Support
              </h4>
              <ul className="mx-auto max-w-[150px] text-sm transition-all duration-500">
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
          <div className="border-t border-gray-200 py-7">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
              <span className="text-sm text-gray-500">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
                <a
                  href="javascript:;"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 transition-all duration-500 hover:bg-gray-900"
                ></a>
                <a
                  href="javascript:;"
                  className="group before:content[''] relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 before:absolute before:-z-10 before:h-full before:w-full hover:bg-gray-900"
                ></a>
                <a
                  href="javascript:;"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#337FFF] transition-all duration-500 hover:bg-gray-900"
                ></a>
                <a
                  href="javascript:;"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] transition-all duration-500 hover:bg-gray-900"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
