export default function PricingPlansDetailsWithGradientBackground() {
  return (
    <div>
      <nav className="nav fixed top-0 left-0 z-[100000] w-full py-5 transition-all duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="javascript:;" className="flex items-center">
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
            <div className="hidden w-full lg:flex lg:pl-11" id="navbar">
              <ul className="mt-4 ml-auto flex flex-col max-lg:mt-1 max-lg:gap-4 max-lg:py-4 lg:mt-0 lg:flex-row lg:items-center">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block text-white md:mb-0 lg:mr-6 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block text-white md:mb-0 lg:mr-6 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle hover:text-prime-blue-700 mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-white transition-all duration-500 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    aria-labelledby="menu1"
                    className="animate-fade relative top-3 z-10 hidden min-w-full rounded-lg bg-indigo-700 p-2 shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] max-lg:mb-3 md:min-w-[500px] lg:absolute lg:top-14 lg:-left-80 lg:min-w-[800px] lg:p-4 xl:p-8"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <ul
                        className="text-sm text-gray-100 md:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="mb-2 text-sm font-medium text-gray-50">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
                                Notification
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
                                Real time notification always keep you up to
                                date in realtime
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
                                Analytics
                                <span className="mr-2 ml-4 h-5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-500">
                                  New
                                </span>
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
                                Analyze data to make more informed and accurate
                                business decision
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
                                Integrations
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
                                Get started by taking advantage of integration
                                with other services
                              </p>
                            </div>
                          </a>
                        </li>
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
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
                                Security
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
                                To ensure your privacy all information are
                                highly encrypted
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
                                Documentation
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
                                Organized documentation will help you save tone
                                of your time
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="group flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-100 transition-all duration-500 group-hover:text-gray-900">
                                Support
                              </h5>
                              <p className="text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-600">
                                Need help? our customer support is here to help
                                you anytime
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <button
                    data-target="menu2"
                    className="dropdown-toggle hover:text-prime-blue-700 mr-auto mb-2 flex items-center justify-between text-center text-sm font-medium text-white transition-all duration-500 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
                  >
                    Features
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    aria-labelledby="menu2"
                    className="dropdown-menu relative top-3 z-10 hidden w-64 rounded-lg bg-indigo-700 p-2 font-normal shadow-md shadow-gray-700 max-lg:mb-3 lg:absolute lg:top-14 lg:p-4 xl:p-8"
                  >
                    <ul
                      className="text-sm text-gray-100"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <h6 className="mb-2 text-sm font-medium text-gray-50">
                        Features
                      </h6>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Notification
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="hover:text-prime-blue-700 block rounded-md py-3 pl-3 text-base font-semibold text-gray-100 transition-all duration-500 hover:bg-gray-700 hover:text-white"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="ml-auto flex flex-col max-lg:gap-4 lg:flex-row lg:items-center lg:justify-center">
                <button className="rounded-full border border-white px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-white hover:text-gray-900">
                  Login
                </button>
                <button className="cursor-pointer rounded-full bg-indigo-500 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 lg:ml-5">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative py-24 pt-44">
        <div className="absolute top-0 -z-10 h-[36.5rem] w-full bg-gradient-to-r from-indigo-600 to-violet-600" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="font-manrope mb-4 text-center text-5xl font-bold text-white">
              Suitable pricing plans
            </h2>
            <p className="text-center text-xl leading-6 text-gray-300">
              7 Days free trial. No credit card required.
            </p>
          </div>
          {/*Grid*/}
          <div className="mx-auto grid max-w-md gap-6 sm:gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-full lg:grid-cols-3 xl:gap-8">
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex w-full max-w-sm flex-col justify-between rounded-2xl bg-white p-8 shadow-md transition-all duration-300 xl:p-12">
              <div>
                <h3 className="font-manrope mb-5 text-center text-4xl font-bold text-indigo-600">
                  Starter
                </h3>
                <p className="mb-5 text-center text-base leading-7 font-normal text-gray-600">
                  Perfect to get started
                </p>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $0
                  </span>
                  <span className="ml-3 text-xl font-normal text-gray-500">
                    |&nbsp; Month
                  </span>
                </div>
                <p className="py-6 text-base leading-7 font-semibold text-gray-900">
                  Includes
                </p>
                <ul className="mb-12 space-y-5 text-left text-lg text-gray-600 group-hover:text-gray-900">
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>AI advisor for a day</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>2 auto tracking</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>7 Day transaction clearing </span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>24/7 Customer support</span>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:;"
                className="mx-auto w-fit rounded-full bg-indigo-50 px-8 py-4 text-center text-lg font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex w-full max-w-sm flex-col justify-between rounded-2xl bg-white p-8 shadow-md transition-all duration-300 xl:p-12">
              <div>
                <h3 className="font-manrope mb-5 text-center text-4xl font-bold text-indigo-600">
                  Pro
                </h3>
                <p className="mb-5 text-center text-base leading-7 font-normal text-gray-600">
                  Best for professionals
                </p>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $150
                  </span>
                  <span className="ml-3 text-xl font-normal text-gray-500">
                    |&nbsp; Month
                  </span>
                </div>
                <p className="py-6 text-base leading-7 font-semibold text-gray-900">
                  Everything in Starter, plus
                </p>
                <ul className="mb-12 space-y-5 text-left text-lg text-gray-600 group-hover:text-gray-900">
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>Presentation analytics</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>Workspace roles</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>Guest sharing</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>Custom links</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>Private folders</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>Version History</span>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:;"
                className="mx-auto w-fit rounded-full bg-indigo-50 px-8 py-4 text-center text-lg font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group relative mx-auto flex w-full max-w-sm flex-col justify-between rounded-2xl bg-white p-8 shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1 xl:p-12">
              <div>
                <h3 className="font-manrope mb-5 text-center text-4xl font-bold text-indigo-600">
                  Enterprise
                </h3>
                <p className="mb-5 text-center text-base leading-7 font-normal text-gray-600">
                  Toolset for hard players
                </p>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $180
                  </span>
                  <span className="ml-3 text-xl font-normal text-gray-500">
                    |&nbsp; Month
                  </span>
                </div>
                <p className="py-6 text-base leading-7 font-semibold text-gray-900">
                  Everything in Pro, plus
                </p>
                <ul className="mb-12 space-y-5 text-left text-lg text-gray-600 group-hover:text-gray-900">
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>SAML - based SSO</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>Dedicated sucess manager</span>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:;"
                className="mx-auto w-fit rounded-full bg-indigo-50 px-8 py-4 text-center text-lg font-semibold text-indigo-600 shadow-sm transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white"
              >
                Purchase Plan
              </a>
            </div>
          </div>
          {/*Grid End*/}
        </div>
      </section>
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-2 md:max-w-2xl lg:hidden">
            <div className="starter-card rounded-2xl border border-gray-300 p-5">
              <h3 className="font-manrope mb-3 text-center text-3xl font-semibold text-black">
                Starter Plan
              </h3>
              <p className="mb-7 text-center text-lg leading-8 font-medium text-gray-600">
                Free forever
              </p>
              <h4 className="mb-7 text-lg leading-8 font-medium text-gray-900 uppercase md:text-xl">
                WORKSPACE
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    100
                  </p>
                </li>
              </ul>
              <h4 className="mb-7 text-lg leading-8 font-medium text-gray-900 uppercase md:text-xl">
                COLLABORATION
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
              <h4 className="mb-7 text-lg leading-8 font-medium text-gray-900 uppercase md:text-xl">
                COLLABORATION
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    200 to 25,000
                  </p>
                </li>
              </ul>
              <h4 className="mb-7 text-lg leading-8 font-medium text-gray-900 uppercase md:text-xl">
                MEDIA &amp; INTEGRATIONS
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
              <h4 className="mb-7 text-lg leading-8 font-medium text-gray-900 uppercase max-md:hidden md:text-xl">
                MEDIA &amp; INTEGRATIONS
              </h4>
              <ul className="mb-5 max-md:hidden">
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
            </div>
            <div className="Pro-Plan-card rounded-2xl border border-gray-300 p-5">
              <h3 className="font-manrope mb-3 text-center text-3xl font-semibold text-black">
                Pro Plan
              </h3>
              <p className="mb-7 text-center text-lg leading-8 font-medium text-gray-600">
                $180 per member, per month, billed annually
              </p>
              <h4 className="mb-7 text-lg leading-8 font-medium text-gray-900 uppercase md:text-xl">
                WORKSPACE
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    200 to 25,000
                  </p>
                </li>
              </ul>
              <h4 className="mb-7 text-lg leading-8 font-medium text-gray-900 uppercase md:text-xl">
                COLLABORATION
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
              <h4 className="mb-7 text-lg leading-8 font-medium text-gray-900 uppercase md:text-xl">
                MEDIA &amp; INTEGRATIONS
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    200 to 25,000
                  </p>
                </li>
              </ul>
              <h4 className="mb-7 text-lg leading-8 font-medium text-gray-900 uppercase md:text-xl">
                MEDIA &amp; INTEGRATIONS
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
              <h4 className="mb-7 text-lg leading-8 font-medium text-gray-900 uppercase md:text-xl">
                MEDIA &amp; INTEGRATIONS
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between rounded-2xl bg-gray-50 px-3 py-2.5">
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    MAUs
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-table hidden lg:block">
            <table className="mb-4 w-full table-auto">
              <thead>
                <tr>
                  <th className="w-[523px]" />
                  <th className="w-[389px]">
                    <p className="mb-2 text-left text-xl leading-8 font-medium text-gray-900">
                      Starter Plan
                    </p>
                    <p className="text-left text-sm font-normal text-gray-600">
                      Free forever
                    </p>
                  </th>
                  <th className="w-[200px]">
                    <p className="mb-2 text-left text-xl leading-8 font-medium text-gray-900">
                      Pro Plan
                    </p>
                    <p className="max-w-[161px] text-left text-sm font-normal text-gray-600">
                      $180 per member, per month, billed annually
                    </p>
                  </th>
                </tr>
              </thead>
            </table>
            <h4 className="mb-7 text-xl leading-8 font-medium text-gray-900 uppercase">
              WORKSPACE
            </h4>
            <table className="mb-12 w-full min-w-[490px] table-auto overflow-x-scroll">
              <tbody>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
              </tbody>
            </table>
            <h4 className="mb-7 text-xl leading-8 font-medium text-gray-900 uppercase">
              COLLABORATION
            </h4>
            <table className="mb-12 w-full min-w-[490px] table-auto overflow-x-scroll">
              <tbody>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
              </tbody>
            </table>
            <h4 className="mb-7 text-xl leading-8 font-medium text-gray-900 uppercase">
              COLLABORATION
            </h4>
            <table className="mb-12 w-full min-w-[490px] table-auto overflow-x-scroll">
              <tbody>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    200 to 25,000
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
              </tbody>
            </table>
            <h4 className="mb-7 text-xl leading-8 font-medium text-gray-900 uppercase">
              MEDIA &amp; INTEGRATIONS
            </h4>
            <table className="mb-12 w-full min-w-[490px] table-auto overflow-x-scroll">
              <tbody>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    200 to 25,000
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
              </tbody>
            </table>
            <h4 className="mb-7 text-xl leading-8 font-medium text-gray-900 uppercase">
              MEDIA &amp; INTEGRATIONS
            </h4>
            <table className="w-full min-w-[490px] table-auto overflow-x-scroll">
              <tbody>
                <tr className="rounded-md bg-gray-50">
                  <td className="w-[523px] py-4 pl-5 text-sm font-normal text-gray-500">
                    MAUs
                  </td>
                  <td className="w-[389px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] py-4 text-sm font-normal text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col items-center justify-center gap-7 max-lg:gap-10 lg:flex-row lg:justify-between">
            <h2 className="text-center text-4xl font-bold text-gray-900 lg:text-left">
              Most people ask about{" "}
            </h2>
            {/* Slider controls */}
            <div className="flex items-center justify-center gap-8 lg:justify-start">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                  <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
                    How do I change my privacy settings?
                  </h4>
                  <p className="text-sm leading-6 text-gray-600">
                    To change your privacy settings, log in and go to the
                    settings or account page. Look for an..
                  </p>
                  <a
                    href="javascript:;"
                    className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                  >
                    Read More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                  <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
                    How do I find my purchase history?
                  </h4>
                  <p className="text-sm leading-6 text-gray-600">
                    To find your purchase history, log in and go to the account
                    or purchase history page. Look..
                  </p>
                  <a
                    href="javascript:;"
                    className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                  >
                    Read More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                  <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
                    How do I cancel my subscription?
                  </h4>
                  <p className="text-sm leading-6 text-gray-600">
                    Log in and go to the subscription or account page. Look for
                    an option to "Cancel subscription"..
                  </p>
                  <a
                    href="javascript:;"
                    className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                  >
                    Read More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                  <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
                    How do I change my email address?
                  </h4>
                  <p className="text-sm leading-6 text-gray-600">
                    To change your email, log in and go to the settings or
                    account page. Look for an option with..
                  </p>
                  <a
                    href="javascript:;"
                    className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                  >
                    Read More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                  <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
                    How do I find my purchase history?
                  </h4>
                  <p className="text-sm leading-6 text-gray-600">
                    To find your purchase history, log in and go to the account
                    or purchase history page. Look..
                  </p>
                  <a
                    href="javascript:;"
                    className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                  >
                    Read More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                  <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
                    How do I cancel my subscription?
                  </h4>
                  <p className="text-sm leading-6 text-gray-600">
                    Log in and go to the subscription or account page. Look for
                    an option to "Cancel subscription"..
                  </p>
                  <a
                    href="javascript:;"
                    className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                  >
                    Read More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                  <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
                    How do I change my email address?
                  </h4>
                  <p className="text-sm leading-6 text-gray-600">
                    To change your email, log in and go to the settings or
                    account page. Look for an option with..
                  </p>
                  <a
                    href="javascript:;"
                    className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                  >
                    Read More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group slide:border-indigo-600 w-full rounded-xl border border-solid border-gray-300 p-6 transition-all duration-500 hover:border-indigo-600">
                  <h4 className="slide:text-indigo-600 mb-5 text-base leading-6 font-medium transition-all duration-500 group-hover:text-indigo-600">
                    How do I change my privacy settings?
                  </h4>
                  <p className="text-sm leading-6 text-gray-600">
                    To change your privacy settings, log in and go to the
                    settings or account page. Look for an..
                  </p>
                  <a
                    href="javascript:;"
                    className="mt-10 flex items-center gap-2 text-sm font-semibold text-indigo-600"
                  >
                    Read More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="mx-auto grid max-w-md grid-cols-2 gap-8 pb-10 md:max-w-3xl md:grid-cols-4 lg:max-w-full lg:grid-cols-6">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a
                href="javascript:;"
                className="flex justify-center lg:justify-start"
              >
                {/* SVG removed */}
              </a>
              <p className="py-8 text-center text-sm text-gray-500 lg:max-w-xs lg:text-left">
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
              <h4 className="mb-7 text-lg font-medium text-gray-900">
                Pagedone
              </h4>
              <ul className="text-sm transition-all duration-500">
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
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="mb-7 text-lg font-medium text-gray-900">
                Products
              </h4>
              <ul className="text-sm transition-all duration-500">
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
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Components Library
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="mb-7 text-lg font-medium text-gray-900">
                Resources
              </h4>
              <ul className="text-sm transition-all duration-500">
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
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    User Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="mb-7 text-lg font-medium text-gray-900">Blogs</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    News
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Tips &amp; Tricks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    New Updates
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Grid*/}
          <div className="border-t border-gray-200 py-7">
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
              <span className="text-sm text-gray-500">
                ©pagedone 2023, All rights reserved.
              </span>
              <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                >
                  {/* SVG removed */}
                </a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                >
                  {/* SVG removed */}
                </a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                >
                  {/* SVG removed */}
                </a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                >
                  {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
