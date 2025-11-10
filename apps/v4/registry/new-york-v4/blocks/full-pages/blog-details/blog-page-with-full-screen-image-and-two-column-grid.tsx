export default function BlogPageWithFullScreenImageAndTwoColumnGrid() {
  return (
    <div>
      <nav className="relative top-0 left-0 z-[99999] w-full border-b border-indigo-300 bg-white py-5 transition-all duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-center justify-between lg:flex-row">
            <div className="flex justify-between max-lg:w-full lg:flex-row">
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
            <div className="flex w-full items-center justify-between pl-10 max-lg:hidden">
              <ul className="mt-4 flex-col items-center lg:mt-0 lg:flex lg:flex-row">
                <li>
                  <a
                    href="javascript:;"
                    className="mb-2 block text-center text-sm font-medium text-black transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:mr-6 lg:text-left lg:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="mb-2 block text-center text-sm font-medium text-black transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:mr-6 lg:text-left lg:text-base"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu1"
                    className="m-auto mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-black transition-all duration-500 hover:text-indigo-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
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
                    className="hover:text-prime-blue-700 m-auto mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-black transition-all duration-500 hover:text-indigo-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
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
              <div className="flex items-center justify-center">
                <button className="cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-center text-sm font-semibold text-indigo-600 shadow-sm shadow-xs shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                  Login
                </button>
                <button className="cursor-pointer rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-xs shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200 md:ml-5">
                  Sign up{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="hiro relative w-full bg-cover bg-center pt-44 pb-[186px]">
        <h1 className="font-manrope text-center text-7xl leading-relaxed font-bold text-white">
          Business Loans
        </h1>
      </section>
      <section className="relative pb-14">
        <div className="mx-auto max-w-2xl px-4 md:px-2 lg:max-w-5xl">
          <div className="grid grid-cols-12">
            <div className="col-span-12 py-16 lg:col-span-8">
              <div className="w-full">
                <span className="rounded-full bg-indigo-600 px-4 py-1 text-sm leading-6 font-medium text-white">
                  Business
                </span>
                <h2 className="font-manrope mt-8 mb-12 text-4xl leading-tight font-semibold text-black sm:text-5xl">
                  Business Loans That Are Fast In Services
                </h2>
                <div className="img mb-12 w-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1702362098.png"
                    alt="piggy bank image"
                    className="object-cover"
                  />
                </div>
                <p className="mb-8 text-lg leading-8 font-normal text-gray-600">
                  "The 'Fast Services Business Loans' component in our UI design
                  system embodies swift and efficient access to financial
                  solutions tailored for businesses. This module integrates
                  visually engaging elements and intuitive functionalities to
                  streamline the process of acquiring loans with unparalleled
                  speed. Offering a user-centric interface, it presents a
                  seamless journey for businesses seeking rapid financial
                  support.
                </p>
                <p className="mb-8 text-lg leading-8 font-normal text-gray-600">
                  Through clear and concise layouts, optimized forms, and
                  interactive tools, this component expedites the application
                  and approval process, emphasizing agility without compromising
                  on reliability or thoroughness. Designed to align with our
                  brand's commitment to responsive services, this UI module
                  serves as a catalyst for businesses in need, providing a quick
                  and hassle-free avenue to secure vital financial assistance."
                </p>
                <p className="mb-12 text-lg leading-8 font-normal text-gray-600">
                  This description aims to highlight the UI component's emphasis
                  on speed, user-friendliness, and alignment with the brand's
                  commitment to responsive services in facilitating business
                  loans.
                </p>
                <div className="mb-12 flex items-center bg-indigo-50 py-16">
                  <div className="data w-full px-16">
                    <h6 className="font-manrope mt-5 text-2xl leading-9 font-medium text-black">
                      You may loan your last dollar to a friend; but never loan
                      him your axe, unless you are certain that he knows how to
                      use it.
                    </h6>
                  </div>
                </div>
                <p className="mb-8 text-lg leading-8 font-normal text-gray-600">
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
                <p className="mb-12 text-lg leading-8 font-normal text-gray-600">
                  Designed to align with our brand's commitment to responsive
                  services, this UI module serves as a catalyst for businesses
                  in need, providing a quick and hassle-free avenue to secure
                  vital financial assistance." This description aims to
                  highlight the UI component's emphasis on speed,
                  user-friendliness, and alignment with the brand's commitment
                  to responsive services in facilitating business loans.
                </p>
                <div className="head-1 mb-12">
                  <h2 className="font-manrope mb-5 text-5xl leading-tight font-semibold text-black">
                    Small Business Administration (SBA) Loans:
                  </h2>
                  <p className="text-lg leading-8 font-normal text-gray-600">
                    SBA loans are government-backed loans designed to support
                    small businesses. They offer flexible terms, lower down
                    payments, and competitive rates. These loans cater to
                    various business needs, including working capital, real
                    estate purchase, or equipment financing, with longer
                    repayment periods and favorable terms.
                  </p>
                </div>
                <div className="head-2 mb-12">
                  <h3 className="font-manrope mb-5 text-4xl font-medium text-black">
                    Term Loans:
                  </h3>
                  <p className="text-lg leading-8 font-normal text-gray-600">
                    Term loans involve borrowing a lump sum of money that is
                    repaid over a specified period with a fixed or variable
                    interest rate. These loans are suitable for specific
                    purposes such as expansion, equipment purchases, or covering
                    operational costs. They typically have set monthly payments
                    and a defined repayment schedule.
                  </p>
                </div>
                <div className="head-3 mb-12">
                  <h4 className="font-manrope mb-5 text-3xl leading-10 font-normal text-black">
                    Lines of Credit:
                  </h4>
                  <p className="text-lg leading-8 font-normal text-gray-600">
                    A business line of credit provides access to a set amount of
                    funds that can be used as needed. Similar to a credit card,
                    it offers flexibility in borrowing and repaying. Interest is
                    charged only on the amount used, making it ideal for
                    managing short-term expenses, covering gaps in cash flow, or
                    handling unexpected costs.
                  </p>
                </div>
                <div className="head-3 mb-12">
                  <h5 className="font-manrope mb-5 text-2xl leading-9 font-normal text-black">
                    Equipment Financing:
                  </h5>
                  <p className="text-lg leading-8 font-normal text-gray-600">
                    Equipment financing specifically covers the purchase or
                    lease of machinery, vehicles, or other essential equipment.
                    This loan allows businesses to acquire necessary assets
                    without tying up large amounts of capital. The equipment
                    itself serves as collateral, often leading to favorable
                    terms.
                  </p>
                </div>
                <div className="mb-7 flex items-center gap-8">
                  <span className="text-xl leading-8 font-medium text-black">
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
                  <h5 className="font-manrope mb-8 border-l-2 border-indigo-600 pl-7 text-2xl leading-9 font-semibold text-black">
                    Comments
                  </h5>
                  <div className="flex w-full flex-col gap-x-4 gap-y-4 sm:flex-row">
                    <img
                      src="https://pagedone.io/asset/uploads/1701166411.png"
                      alt="Ankita image"
                      className="h-16 w-16 object-cover"
                    />
                    <div className="data w-full">
                      <div className="user">
                        <h6 className="mb-1 text-lg leading-8 font-semibold text-gray-900">
                          Ankita Jha
                        </h6>
                        <p className="mb-4 text-sm leading-6 font-normal text-gray-500">
                          March 7, 2019
                        </p>
                        <p className="mb-4 text-base leading-7 font-normal text-gray-600">
                          I have been using pagedone for several months now, and
                          I must say that it has made my life a lot easier. The
                          platform's intuitive interface and ease of use have
                          allowed me to manage my finances more effectively and
                          make informed investment decisions.
                        </p>
                        <button className="rounded-full px-2.5 py-1 text-xs leading-5 font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-50">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-x-4 gap-y-4 sm:flex-row">
                  <img
                    src="https://pagedone.io/asset/uploads/1701166411.png"
                    alt="Ankita image"
                    className="h-16 w-16 object-cover"
                  />
                  <div className="data w-full">
                    <div className="user">
                      <h6 className="mb-1 text-lg leading-8 font-semibold text-gray-900">
                        Ankita Jha
                      </h6>
                      <p className="mb-4 text-sm leading-6 font-normal text-gray-500">
                        March 7, 2019
                      </p>
                      <p className="mb-4 text-base leading-7 font-normal text-gray-600">
                        I have been using pagedone for several months now, and I
                        must say that it has made my life a lot easier. The
                        platform's intuitive interface and ease of use have
                        allowed me to manage my finances more effectively and
                        make informed investment decisions.
                      </p>
                      <button className="rounded-full px-2.5 py-1 text-xs leading-5 font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-50">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 mt-14 lg:col-span-4 lg:pt-48 lg:pl-14">
              <div className="flex flex-col">
                <div className="mb-6 flex gap-6">
                  <h4 className="font-manrope border-l-2 border-solid border-indigo-600 pl-6 text-2xl leading-9 font-semibold text-black">
                    About Me
                  </h4>
                </div>
                <img
                  src="https://pagedone.io/asset/uploads/1702355963.png"
                  alt="Sandara image "
                  className="w-max object-cover"
                />
                <p className="mt-4 mb-1 text-xl leading-8 font-medium text-gray-900">
                  Sandara Mrikon
                </p>
                <p className="text-base leading-7 font-normal text-gray-600">
                  Pagedone is simply the best tool of investment in the market
                  right now.{" "}
                </p>
                <div className="mt-6 flex items-center gap-5"></div>
              </div>
              <div className="mt-28 flex flex-col">
                <div className="mb-14 flex items-center gap-6">
                  <h4 className="font-manrope border-l-2 border-solid border-indigo-600 pl-5 text-2xl leading-9 font-semibold text-black">
                    Popular Feeds
                  </h4>
                </div>
                <div className="flex flex-col gap-10 max-md:mb-10">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1702362113.png"
                      alt="Blog tailwind page"
                      className="h-12 w-12 object-cover"
                    />
                    <p className="text-base leading-7 font-medium text-gray-900">
                      Financial News Outlets
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1702362131.png"
                      alt="Blog tailwind page"
                      className="h-12 w-12 object-cover"
                    />
                    <p className="text-base leading-7 font-medium text-gray-900">
                      Business Publications
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1702362145.png"
                      alt="Blog tailwind page"
                      className="h-12 w-12 object-cover"
                    />
                    <p className="text-base leading-7 font-medium text-gray-900">
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
          <div className="grid grid-cols-2 gap-12 pt-14 pb-20 max-md:mx-auto max-md:max-w-md md:grid-cols-4 lg:gap-8">
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
