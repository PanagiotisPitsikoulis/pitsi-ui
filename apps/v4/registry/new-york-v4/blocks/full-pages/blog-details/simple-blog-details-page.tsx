export default function SimpleBlogDetailsPage() {
  return (
    <div>
      <nav className="relative top-0 left-0 z-[99999] w-full border-b border-indigo-300 bg-indigo-600 py-5 transition-all duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-row items-center justify-between">
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
            <ul className="mt-4 hidden flex-col items-center lg:mt-0 lg:flex lg:flex-row">
              <li>
                <a
                  href="javascript:;"
                  className="mb-2 block text-center text-sm font-medium text-gray-100 transition-all duration-500 hover:text-white md:mb-0 lg:mr-6 lg:text-left lg:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="mb-2 block text-center text-sm font-medium text-gray-100 transition-all duration-500 hover:text-white md:mb-0 lg:mr-6 lg:text-left lg:text-base"
                >
                  About us
                </a>
              </li>
              <li className="relative">
                <button
                  data-dropdown-toggle="menu1"
                  className="m-auto mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-100 transition-all duration-500 hover:text-gray-100 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
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
                              Real time notification always keep you up to date
                              in realtime
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
                              To ensure your privacy all information are highly
                              encrypted{" "}
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
                              Organized documentation will help you save tone of
                              your time{" "}
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
                  className="hover:text-prime-blue-700 m-auto mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-gray-100 transition-all duration-500 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
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
            <div className="flex items-center justify-center gap-4">
              <button className="cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-center text-sm font-semibold text-indigo-600 shadow-xs transition-all duration-500 hover:bg-indigo-100">
                Login
              </button>
              <button className="cursor-pointer rounded-full border border-white bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 max-[450px]:hidden md:ml-5">
                Sign up{" "}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative bg-indigo-600 pt-20 pb-24">
        <div className="mx-auto w-full max-w-lg px-5 max-md:px-4 md:max-w-2xl lg:max-w-4xl lg:px-11">
          <h1 className="font-manrope mb-8 text-4xl leading-tight font-semibold text-white min-[500px]:text-5xl">
            Business Loans That Are Fast In Services
          </h1>
          <div className="flex items-center justify-between">
            <div className="data">
              <p className="mb-1 text-xl leading-8 font-medium text-white">
                insights
              </p>
              <p className="text-lg leading-7 font-normal text-white">
                Jai Massari, Chief Legal Officer
              </p>
            </div>
            <div className="flex items-center gap-5">
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-10 lg:py-16">
        <div className="mx-auto w-full max-w-lg px-5 max-md:px-3 md:max-w-2xl lg:max-w-4xl lg:px-11">
          <p className="mb-12 text-lg leading-8 font-normal text-gray-500">
            Certainly! A description for "Business Loans That Are Fast In
            Services" within a UI design system might be:
          </p>
          <h4 className="font-manrope mb-12 text-2xl leading-9 font-semibold text-black">
            Save up to 40% compared to a merchant cash advance and other online
            lenders.
          </h4>
          <p className="mb-8 text-lg leading-8 font-normal text-gray-600">
            "The 'Fast Services Business Loans' component in our UI design
            system embodies swift and efficient access to financial solutions
            tailored for businesses. This module integrates visually engaging
            elements and intuitive functionalities to streamline the process of
            acquiring loans with unparalleled speed. Offering a user-centric
            interface, it presents a seamless journey for businesses seeking
            rapid financial support. Through clear and concise layouts,
            optimized forms, and interactive tools, this component expedites the
            application and approval process, emphasizing agility without
            compromising on reliability or thoroughness. Designed to align with
            our brand's commitment to responsive services, this UI module serves
            as a catalyst for businesses in need, providing a quick and
            hassle-free avenue to secure vital financial assistance."
          </p>
          <p className="mb-16 text-lg leading-8 font-normal text-gray-600">
            This description aims to highlight the UI component's emphasis on
            speed, user-friendliness, and alignment with the brand's commitment
            to responsive services in facilitating business loans.
          </p>
          <div className="relative mb-16 flex justify-between">
            <h4 className="font-manrope mx-auto max-w-[609px] text-2xl leading-9 font-semibold text-black max-lg:px-8">
              It’s easy to get a loan unless you need it.
            </h4>
          </div>
          <h4 className="font-manrope mb-12 text-2xl leading-9 font-semibold text-black">
            Digital financial planner and management
          </h4>
          <p className="mb-12 text-lg leading-8 font-normal text-gray-600">
            This content aims to provide valuable information to users visiting
            the blog detail page within the UI design system, guiding them
            through various aspects of business loans in a clear and informative
            manner.
          </p>
          <ul className="mb-14 ml-5 flex list-outside list-disc flex-col gap-8">
            <li className="list-disc">
              <p className="text-xl leading-8 font-medium text-black">
                Types of Business Loans:{" "}
                <span className="text-base leading-7 font-normal text-black">
                  Small Business Administration (SBA) Loans: Exploring
                  government-backed options for small businesses. Term Loans vs.
                  Lines of Credit: Understanding the differences and choosing
                  the right fit for your business needs.
                </span>
              </p>
            </li>
            <li className="list-disc">
              <p className="text-xl leading-8 font-medium text-black">
                The Application Process:{" "}
                <span className="text-base leading-7 font-normal text-black">
                  {" "}
                  Preparation: Steps to prepare your business and documents
                  before applying. Application Walkthrough: A step-by-step guide
                  through the loan application process. Tips for Approval:
                  Insider tips to increase your chances of loan approval.
                </span>
              </p>
            </li>
            <li className="list-disc">
              <p className="text-xl leading-8 font-medium text-black">
                Business Loan Management :{" "}
                <span className="text-base leading-7 font-normal text-black">
                  {" "}
                  Responsibly Managing Funds: Best practices for utilizing loan
                  funds efficiently. Repayment Strategies: Formulating a
                  repayment plan that suits your business.
                </span>
              </p>
            </li>
            <li className="list-disc">
              <p className="text-xl leading-8 font-medium text-black">
                Conclusion:{" "}
                <span className="text-base leading-7 font-normal text-black">
                  Securing a business loan can be a pivotal moment for your
                  company's growth. Armed with this guide, you're better
                  equipped to navigate the complexities of the loan process.
                  Remember, choosing the right loan and managing it wisely can
                  set your business on a path to success.
                </span>
              </p>
            </li>
          </ul>
          <div className="img mb-14 w-full">
            <img
              src="https://pagedone.io/asset/uploads/1702355938.png"
              alt="Blog tailwind page"
              className="object-cover"
            />
          </div>
          <div className="head-1 mb-12">
            <h2 className="font-manrope mb-5 text-5xl leading-tight font-semibold text-black">
              Small Business Administration (SBA) Loans:
            </h2>
            <p className="text-lg leading-8 font-normal text-gray-600">
              SBA loans are government-backed loans designed to support small
              businesses. They offer flexible terms, lower down payments, and
              competitive rates. These loans cater to various business needs,
              including working capital, real estate purchase, or equipment
              financing, with longer repayment periods and favorable terms.{" "}
            </p>
          </div>
          <div className="head-2 mb-12">
            <h3 className="font-manrope mb-5 text-4xl font-medium text-black">
              Term Loans:
            </h3>
            <p className="text-lg leading-8 font-normal text-gray-600">
              Term loans involve borrowing a lump sum of money that is repaid
              over a specified period with a fixed or variable interest rate.
              These loans are suitable for specific purposes such as expansion,
              equipment purchases, or covering operational costs. They typically
              have set monthly payments and a defined repayment schedule.
            </p>
          </div>
          <div className="head-3 mb-12">
            <h4 className="font-manrope mb-5 text-3xl leading-10 font-normal text-black">
              Lines of Credit:
            </h4>
            <p className="text-lg leading-8 font-normal text-gray-600">
              A business line of credit provides access to a set amount of funds
              that can be used as needed. Similar to a credit card, it offers
              flexibility in borrowing and repaying. Interest is charged only on
              the amount used, making it ideal for managing short-term expenses,
              covering gaps in cash flow, or handling unexpected costs.{" "}
            </p>
          </div>
          <div className="head-4 mb-14">
            <h5 className="font-manrope mb-5 text-2xl leading-9 font-normal text-black">
              Equipment Financing:
            </h5>
            <p className="text-lg leading-8 font-normal text-gray-600">
              Equipment financing specifically covers the purchase or lease of
              machinery, vehicles, or other essential equipment. This loan
              allows businesses to acquire necessary assets without tying up
              large amounts of capital. The equipment itself serves as
              collateral, often leading to favorable terms.
            </p>
          </div>
          <div className="topics mb-14">
            <h5 className="font-manrope mb-8 text-2xl leading-9 font-semibold text-black">
              Views on Topics
            </h5>
            <ul className="ml-5 list-outside list-decimal">
              <li className="pl-1 text-lg leading-8 font-normal text-gray-600">
                Loan Terms and Conditions
              </li>
              <li className="pl-1 text-lg leading-8 font-normal text-gray-600">
                Credit Scores and Requirements
              </li>
              <li className="pl-1 text-lg leading-8 font-normal text-gray-600">
                Financial Management
              </li>
              <li className="pl-1 text-lg leading-8 font-normal text-gray-600">
                Loan Repayment Strategies
              </li>
              <li className="pl-1 text-lg leading-8 font-normal text-gray-600">
                Risk Assessment and Contingency Planning
              </li>
            </ul>
          </div>
          <div className="comments">
            <h5 className="mb-8 text-xl leading-8 font-medium text-gray-900">
              Comments
            </h5>
            <div className="mb-7 flex w-full flex-col gap-x-9 gap-y-4 sm:flex-row">
              <img
                src="https://pagedone.io/asset/uploads/1702355963.png"
                alt="William image"
                className="h-14 w-14 object-cover"
              />
              <div className="data w-full">
                <div className="mb-5 flex w-full items-center justify-between">
                  <div className="user">
                    <h6 className="mb-1 text-xl leading-8 font-medium text-black">
                      William Smith
                    </h6>
                    <p className="text-sm leading-6 font-normal text-gray-500">
                      Product Designer
                    </p>
                  </div>
                  <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md">
                    Reply
                  </button>
                </div>
                <p className="text-base leading-7 font-normal text-gray-600">
                  I have been using pagedone for several months now, and I must
                  say that it has made my life a lot easier. The platform's
                  intuitive interface and ease of use have allowed me to manage
                  my finances more effectively and make informed investment
                  decisions.
                </p>
              </div>
            </div>
            <div className="mb-16 flex w-full flex-col gap-x-9 gap-y-4 sm:flex-row">
              <img
                src="https://pagedone.io/asset/uploads/1702355983.png"
                alt="Ankita image"
                className="h-14 w-14 object-cover"
              />
              <div className="data w-full">
                <div className="mb-5 flex w-full items-center justify-between">
                  <div className="user">
                    <h6 className="mb-1 text-xl leading-8 font-medium text-black">
                      Ankita Jha
                    </h6>
                    <p className="text-sm leading-6 font-normal text-gray-500">
                      Product Designer
                    </p>
                  </div>
                  <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md">
                    Reply
                  </button>
                </div>
                <p className="text-base leading-7 font-normal text-gray-600">
                  I have been using pagedone for several months now, and I must
                  say that it has made my life a lot easier. The platform's
                  intuitive interface and ease of use have allowed me to manage
                  my finances more effectively and make informed investment
                  decisions.
                </p>
              </div>
            </div>
          </div>
          <h5 className="mb-6 text-xl leading-8 font-medium text-gray-900">
            Leave a comment
          </h5>
          <div className="reply w-full rounded-xl border border-solid border-gray-300 bg-gray-100 p-5">
            <div className="mb-5 flex flex-col items-center gap-x-9 gap-y-4 sm:flex-row">
              <textarea
                className="h-28 w-full bg-transparent text-xl leading-8 font-medium text-gray-900 outline-0 placeholder:text-gray-500"
                placeholder="Type a comment here"
              />
            </div>
            <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200">
              Post
            </button>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope mb-14 text-center text-4xl font-bold text-gray-900">
            Our popular blogs
          </h2>
          <div className="mb-14 flex flex-wrap justify-center gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
            <div className="group w-full cursor-pointer rounded-2xl border border-gray-300 p-5 transition-all duration-300 hover:border-indigo-600 max-lg:max-w-xl lg:w-1/3">
              <div className="mb-6 flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244553.png"
                  alt="Harsh image"
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <div className="block">
                <h4 className="mb-9 leading-8 font-medium text-gray-900">
                  Fintech 101: Exploring the Basics of Electronic Payments
                </h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                  <span className="text-sm text-indigo-600">2 year ago</span>
                </div>
              </div>
            </div>
            <div className="group w-full cursor-pointer rounded-2xl border border-gray-300 p-5 transition-all duration-300 hover:border-indigo-600 max-lg:max-w-xl lg:w-1/3">
              <div className="mb-6 flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244579.png"
                  alt="John image "
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <div className="block">
                <h4 className="mb-9 leading-8 font-medium text-gray-900">
                  From Classroom to Cyberspace: The Growing Influence of EdTech
                  in Fintech
                </h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">By John D.</h6>
                  <span className="text-sm text-indigo-600">2 year ago</span>
                </div>
              </div>
            </div>
            <div className="group w-full cursor-pointer rounded-2xl border border-gray-300 p-5 transition-all duration-300 hover:border-indigo-600 max-lg:max-w-xl lg:w-1/3">
              <div className="mb-6 flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244619.png"
                  alt="Alexa image"
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <div className="block">
                <h4 className="mb-9 leading-8 font-medium text-gray-900">
                  Fintech Solutions for Student Loans: Easing the Burden of
                  Education Debt
                </h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">By Alexa H.</h6>
                  <span className="text-sm text-indigo-600">2 year ago</span>
                </div>
              </div>
            </div>
          </div>
          <button className="mx-auto flex w-52 items-center justify-center rounded-full border border-gray-300 px-7 py-3.5 font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-100">
            View All
          </button>
        </div>
      </section>
      <footer className="w-full bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="flex flex-col items-center justify-between gap-8 py-16 lg:flex-row">
            <a href="javascript:;" className="flex justify-center"></a>
            <ul className="flex flex-col items-center gap-6 text-lg transition-all duration-500 sm:flex-row lg:gap-14">
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-400"
                >
                  Pagedone
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-400"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-400"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-400"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-400"
                >
                  Support
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 sm:justify-center">
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
            </div>
          </div>
          {/*Grid*/}
          <div className="border-t border-gray-700 py-7">
            <div className="flex items-center justify-center">
              <span className="text-gray-400">
                ©pagedone 2024, All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
