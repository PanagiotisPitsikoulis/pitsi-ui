export default function BlogPageWithFullScreenImageAndTwoColumnGrid() {
  return (
    <div>
      <nav className="py-5  transition-all duration-500 w-full bg-white relative top-0 left-0 z-[99999] border-b border-indigo-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex items-center justify-between flex-col lg:flex-row">
            <div className=" flex justify-between max-lg:w-full lg:flex-row">
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
            <div className="flex items-center w-full pl-10 justify-between max-lg:hidden">
              <ul className="lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row">
                <li>
                  <a
                    href="javascript:;"
                    className="text-black text-sm lg:text-base mb-2 block font-medium hover:text-indigo-700 transition-all duration-500 lg:mr-6 md:mb-0 lg:text-left text-center"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-black text-sm lg:text-base mb-2 block font-medium hover:text-indigo-700 transition-all duration-500 lg:mr-6 md:mb-0 lg:text-left text-center"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu1"
                    className="flex items-center justify-between text-black text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0"
                  >
                    Products
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    className="animate-fade z-10 absolute top-14 -left-80 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
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
                    className="flex items-center justify-between text-black text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 hover:text-indigo-700 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0"
                  >
                    Features
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    className="dropdown-menu z-10 absolute top-14 font-normal bg-white rounded-lg shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] w-64 xl:p-8 lg:p-4 p-2 hidden"
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
              <div className="flex items-center justify-center">
                <button className=" text-indigo-600 bg-indigo-50 rounded-full cursor-pointer font-semibold text-center shadow-xs shadow-sm shadow-transparent transition-all duration-500 py-3 px-6 text-sm hover:shadow-indigo-200 hover:bg-indigo-100">
                  Login
                </button>
                <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs shadow-sm shadow-transparent transition-all duration-500 py-3 px-6 text-sm md:ml-5 hover:shadow-indigo-200 hover:bg-indigo-700">
                  Sign up{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="hiro relative w-full pt-44 pb-[186px] bg-center bg-cover ">
        <h1 className="font-manrope font-bold text-7xl leading-relaxed text-white text-center">
          Business Loans
        </h1>
      </section>
      <section className="relative pb-14">
        <div className="max-w-2xl lg:max-w-5xl mx-auto px-4 md:px-2">
          <div className="grid grid-cols-12 ">
            <div className="col-span-12 lg:col-span-8 py-16">
              <div className="w-full">
                <span className="bg-indigo-600 text-white py-1 px-4 rounded-full font-medium text-sm leading-6 ">
                  Business
                </span>
                <h2 className="font-manrope font-semibold text-4xl sm:text-5xl leading-tight text-black mt-8 mb-12">
                  Business Loans That Are Fast In Services
                </h2>
                <div className="img w-full mb-12">
                  <img
                    src="https://pagedone.io/asset/uploads/1702362098.png"
                    alt="piggy bank image"
                    className="object-cover"
                  />
                </div>
                <p className="font-normal text-lg leading-8 text-gray-600 mb-8">
                  "The 'Fast Services Business Loans' component in our UI design
                  system embodies swift and efficient access to financial
                  solutions tailored for businesses. This module integrates
                  visually engaging elements and intuitive functionalities to
                  streamline the process of acquiring loans with unparalleled
                  speed. Offering a user-centric interface, it presents a
                  seamless journey for businesses seeking rapid financial
                  support.
                </p>
                <p className="font-normal text-lg leading-8 text-gray-600 mb-8">
                  Through clear and concise layouts, optimized forms, and
                  interactive tools, this component expedites the application
                  and approval process, emphasizing agility without compromising
                  on reliability or thoroughness. Designed to align with our
                  brand's commitment to responsive services, this UI module
                  serves as a catalyst for businesses in need, providing a quick
                  and hassle-free avenue to secure vital financial assistance."
                </p>
                <p className="font-normal text-lg leading-8 text-gray-600 mb-12">
                  This description aims to highlight the UI component's emphasis
                  on speed, user-friendliness, and alignment with the brand's
                  commitment to responsive services in facilitating business
                  loans.
                </p>
                <div className="py-16 bg-indigo-50 flex items-center mb-12">
                  <div className="data w-full px-16">
                    <h6 className="font-manrope font-medium text-2xl leading-9 text-black mt-5">
                      You may loan your last dollar to a friend; but never loan
                      him your axe, unless you are certain that he knows how to
                      use it.
                    </h6>
                  </div>
                </div>
                <p className="font-normal text-lg leading-8 text-gray-600 mb-8">
                  This module integrates visually engaging elements and
                  intuitive functionalities to streamline the process of
                  acquiring loans with unparalleled speed. Offering a
                  user-centric interface, it presents a seamless journey for
                  businesses seeking rapid financial support. Through clear and
                  concise layouts, optimized forms, and interactive tools, this
                  component expedites the application and approval process,
                  emphasizing agility without compromising on reliability or
                  thoroughness.
                </p>
                <p className="font-normal text-lg leading-8 text-gray-600 mb-12">
                  Designed to align with our brand's commitment to responsive
                  services, this UI module serves as a catalyst for businesses
                  in need, providing a quick and hassle-free avenue to secure
                  vital financial assistance." This description aims to
                  highlight the UI component's emphasis on speed,
                  user-friendliness, and alignment with the brand's commitment
                  to responsive services in facilitating business loans.
                </p>
                <div className="head-1 mb-12">
                  <h2 className="font-manrope font-semibold text-black mb-5 text-5xl leading-tight">
                    Small Business Administration (SBA) Loans:
                  </h2>
                  <p className="font-normal text-lg leading-8 text-gray-600">
                    SBA loans are government-backed loans designed to support
                    small businesses. They offer flexible terms, lower down
                    payments, and competitive rates. These loans cater to
                    various business needs, including working capital, real
                    estate purchase, or equipment financing, with longer
                    repayment periods and favorable terms.
                  </p>
                </div>
                <div className="head-2 mb-12">
                  <h3 className="font-manrope font-medium text-black mb-5 text-4xl">
                    Term Loans:
                  </h3>
                  <p className="font-normal text-lg leading-8 text-gray-600">
                    Term loans involve borrowing a lump sum of money that is
                    repaid over a specified period with a fixed or variable
                    interest rate. These loans are suitable for specific
                    purposes such as expansion, equipment purchases, or covering
                    operational costs. They typically have set monthly payments
                    and a defined repayment schedule.
                  </p>
                </div>
                <div className="head-3 mb-12">
                  <h4 className="font-manrope font-normal text-black mb-5 text-3xl leading-10">
                    Lines of Credit:
                  </h4>
                  <p className="font-normal text-lg leading-8 text-gray-600">
                    A business line of credit provides access to a set amount of
                    funds that can be used as needed. Similar to a credit card,
                    it offers flexibility in borrowing and repaying. Interest is
                    charged only on the amount used, making it ideal for
                    managing short-term expenses, covering gaps in cash flow, or
                    handling unexpected costs.
                  </p>
                </div>
                <div className="head-3 mb-12">
                  <h5 className="font-manrope font-normal text-black mb-5 text-2xl leading-9">
                    Equipment Financing:
                  </h5>
                  <p className="font-normal text-lg leading-8 text-gray-600">
                    Equipment financing specifically covers the purchase or
                    lease of machinery, vehicles, or other essential equipment.
                    This loan allows businesses to acquire necessary assets
                    without tying up large amounts of capital. The equipment
                    itself serves as collateral, often leading to favorable
                    terms.
                  </p>
                </div>
                <div className="flex items-center gap-8 mb-7">
                  <span className="font-medium text-xl leading-8 text-black ">
                    Share:
                  </span>
                  <div className="flex items-center gap-5">
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                    <a href="javascript:;"></a>
                  </div>
                </div>
                <div className="comments">
                  <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-8 border-l-2 pl-7 border-indigo-600">
                    Comments
                  </h5>
                  <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 w-full">
                    <img
                      src="https://pagedone.io/asset/uploads/1701166411.png"
                      alt="Ankita image"
                      className="h-16 w-16 object-cover"
                    />
                    <div className="data w-full">
                      <div className="user">
                        <h6 className="font-semibold text-lg leading-8 text-gray-900 mb-1">
                          Ankita Jha
                        </h6>
                        <p className="font-normal text-sm leading-6 text-gray-500 mb-4">
                          March 7, 2019
                        </p>
                        <p className="font-normal text-base leading-7 text-gray-600 mb-4">
                          I have been using pagedone for several months now, and
                          I must say that it has made my life a lot easier. The
                          platform's intuitive interface and ease of use have
                          allowed me to manage my finances more effectively and
                          make informed investment decisions.
                        </p>
                        <button className="font-semibold text-xs leading-5 text-indigo-600 py-1 px-2.5 transition-all duration-500 rounded-full hover:bg-indigo-50">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 w-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1701166411.png"
                    alt="Ankita image"
                    className="h-16 w-16 object-cover"
                  />
                  <div className="data w-full">
                    <div className="user">
                      <h6 className="font-semibold text-lg leading-8 text-gray-900 mb-1">
                        Ankita Jha
                      </h6>
                      <p className="font-normal text-sm leading-6 text-gray-500 mb-4">
                        March 7, 2019
                      </p>
                      <p className="font-normal text-base leading-7 text-gray-600 mb-4">
                        I have been using pagedone for several months now, and I
                        must say that it has made my life a lot easier. The
                        platform's intuitive interface and ease of use have
                        allowed me to manage my finances more effectively and
                        make informed investment decisions.
                      </p>
                      <button className="font-semibold text-xs leading-5 text-indigo-600 py-1 px-2.5 transition-all duration-500 rounded-full hover:bg-indigo-50">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 mt-14 lg:pt-48 lg:pl-14">
              <div className="flex  flex-col">
                <div className="flex gap-6 mb-6">
                  <h4 className="font-manrope font-semibold text-2xl leading-9 text-black pl-6 border-l-2 border-indigo-600 border-solid">
                    About Me
                  </h4>
                </div>
                <img
                  src="https://pagedone.io/asset/uploads/1702355963.png"
                  alt="Sandara image "
                  className="w-max object-cover"
                />
                <p className="mt-4 mb-1 font-medium text-xl leading-8 text-gray-900">
                  Sandara Mrikon
                </p>
                <p className="font-normal text-base leading-7 text-gray-600">
                  Pagedone is simply the best tool of investment in the market
                  right now.{" "}
                </p>
                <div className="flex items-center gap-5 mt-6"></div>
              </div>
              <div className="flex flex-col mt-28 ">
                <div className="flex items-center gap-6 mb-14">
                  <h4 className="font-manrope font-semibold text-2xl leading-9 text-black pl-5 border-l-2 border-solid border-indigo-600 ">
                    Popular Feeds
                  </h4>
                </div>
                <div className="flex   flex-col gap-10 max-md:mb-10">
                  <div className="flex items-center  gap-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1702362113.png"
                      alt="Blog tailwind page"
                      className="w-12 h-12 object-cover"
                    />
                    <p className="font-medium text-base leading-7 text-gray-900 ">
                      Financial News Outlets
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1702362131.png"
                      alt="Blog tailwind page"
                      className="w-12 h-12 object-cover"
                    />
                    <p className="font-medium text-base leading-7 text-gray-900 ">
                      Business Publications
                    </p>
                  </div>
                  <div className="flex items-center  gap-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1702362145.png"
                      alt="Blog tailwind page"
                      className="w-12 h-12 object-cover"
                    />
                    <p className="font-medium text-base leading-7 text-gray-900 ">
                      Online Lending Platforms' Blogs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-md:max-w-md max-md:mx-auto">
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
