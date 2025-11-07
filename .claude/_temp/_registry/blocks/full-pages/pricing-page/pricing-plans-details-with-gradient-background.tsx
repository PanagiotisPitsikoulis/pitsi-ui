export default function PricingPlansDetailsWithGradientBackground() {
  return (
    <div>
      <nav className="nav py-5 transition-all fixed top-0 left-0 z-[100000] duration-500 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="javascript:;" className="flex items-center">
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
            <div className="hidden w-full lg:flex lg:pl-11" id="navbar">
              <ul className="flex max-lg:gap-4 max-lg:py-4 max-lg:mt-1 lg:items-center flex-col mt-4 lg:mt-0 lg:flex-row ml-auto">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-white"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-white text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    aria-labelledby="menu1"
                    className="animate-fade z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 lg:-left-80 bg-indigo-700 rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <ul
                        className="text-sm text-gray-100 md:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-sm text-gray-50 mb-2">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 group transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                          >
                            <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
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
                            className="px-3 py-5 group hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
                                Analytics
                                <span className="bg-indigo-50 text-indigo-500 text-xs font-medium mr-2 px-2.5 py-1 rounded-full h-5 ml-4">
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
                            className="px-3 py-5 group hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
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
                        className="text-sm text-gray-700 dark:text-gray-400 md:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
                          Services
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 group hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-rose-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
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
                            className="px-3 py-5 group hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
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
                            className="px-3 py-5 group hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-100 text-base mb-1.5 font-semibold transition-all duration-500 group-hover:text-gray-900">
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
                    className="dropdown-toggle flex items-center justify-between text-white text-sm text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0"
                  >
                    Features
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    aria-labelledby="menu2"
                    className="dropdown-menu z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 font-normal bg-indigo-700 rounded-lg shadow-md shadow-gray-700 w-64 xl:p-8 lg:p-4 p-2 hidden"
                  >
                    <ul
                      className="text-sm text-gray-100"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <h6 className="text-sm text-gray-50 font-medium mb-2">
                        Features
                      </h6>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Notification
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-100 font-semibold transition-all duration-500 hover:bg-gray-700 hover:text-white pl-3 rounded-md"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col lg:flex-row lg:items-center ml-auto lg:justify-center max-lg:gap-4">
                <button className="py-2.5 px-5 text-xs rounded-full shadow-xs border border-white font-semibold text-white transition-all duration-500 hover:text-gray-900 hover:bg-white">
                  Login
                </button>
                <button className="py-2.5 px-5 text-xs bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700 lg:ml-5">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-44 py-24 relative">
        <div className="absolute h-[36.5rem] w-full top-0 bg-gradient-to-r from-indigo-600 to-violet-600 -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="font-manrope text-5xl text-center font-bold text-white mb-4">
              Suitable pricing plans
            </h2>
            <p className="text-gray-300 text-xl text-center leading-6">
              7 Days free trial. No credit card required.
            </p>
          </div>
          {/*Grid*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-6 xl:gap-8 gap-6 max-w-md mx-auto md:max-w-2xl lg:max-w-full">
            {/*Pricing Card*/}
            <div className="group relative flex justify-between flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-md transition-all duration-300  p-8 xl:p-12  ">
              <div>
                <h3 className="font-manrope text-4xl font-bold text-center text-indigo-600 mb-5">
                  Starter
                </h3>
                <p className="font-normal text-base leading-7 text-gray-600 text-center mb-5">
                  Perfect to get started
                </p>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $0
                  </span>
                  <span className="text-xl text-gray-500 ml-3 font-normal">
                    |&nbsp; Month
                  </span>
                </div>
                <p className="font-semibold text-base leading-7 text-gray-900 py-6">
                  Includes
                </p>
                <ul className="mb-12 space-y-5 text-left text-lg text-gray-600 group-hover:text-gray-900">
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>AI advisor for a day</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>2 auto tracking</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>7 Day transaction clearing </span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>24/7 Customer support</span>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:;"
                className="py-4 px-8 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-lg text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white "
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group relative flex justify-between flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-md transition-all duration-300  p-8 xl:p-12  ">
              <div>
                <h3 className="font-manrope text-4xl font-bold text-center text-indigo-600 mb-5">
                  Pro
                </h3>
                <p className="font-normal text-base leading-7 text-gray-600 text-center mb-5">
                  Best for professionals
                </p>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $150
                  </span>
                  <span className="text-xl text-gray-500 ml-3 font-normal">
                    |&nbsp; Month
                  </span>
                </div>
                <p className="font-semibold text-base leading-7 text-gray-900 py-6">
                  Everything in Starter, plus
                </p>
                <ul className="mb-12 space-y-5 text-left text-lg text-gray-600 group-hover:text-gray-900">
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Presentation analytics</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Workspace roles</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Guest sharing</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Custom links</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Private folders</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Version History</span>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:;"
                className="py-4 px-8 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-lg text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white "
              >
                Purchase Plan
              </a>
            </div>
            {/*Pricing Card*/}
            <div className="group md:col-span-2 lg:col-span-1 relative flex justify-between flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-md transition-all duration-300  p-8 xl:p-12  ">
              <div>
                <h3 className="font-manrope text-4xl font-bold text-center text-indigo-600 mb-5">
                  Enterprise
                </h3>
                <p className="font-normal text-base leading-7 text-gray-600 text-center mb-5">
                  Toolset for hard players
                </p>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $180
                  </span>
                  <span className="text-xl text-gray-500 ml-3 font-normal">
                    |&nbsp; Month
                  </span>
                </div>
                <p className="font-semibold text-base leading-7 text-gray-900 py-6">
                  Everything in Pro, plus
                </p>
                <ul className="mb-12 space-y-5 text-left text-lg text-gray-600 group-hover:text-gray-900">
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>SAML - based SSO</span>
                  </li>
                  <li className="flex items-center space-x-3.5">
                    {/* Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Dedicated sucess manager</span>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:;"
                className="py-4 px-8 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-lg text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white "
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden max-w-xl mx-auto md:max-w-2xl">
            <div className="starter-card rounded-2xl p-5 border border-gray-300">
              <h3 className="font-manrope font-semibold text-3xl text-black text-center mb-3">
                Starter Plan
              </h3>
              <p className="font-medium text-lg leading-8 text-gray-600 text-center mb-7">
                Free forever
              </p>
              <h4 className="font-medium text-lg md:text-xl leading-8 mb-7 text-gray-900 uppercase">
                WORKSPACE
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    100
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    100
                  </p>
                </li>
              </ul>
              <h4 className="font-medium text-lg md:text-xl leading-8 mb-7 text-gray-900 uppercase">
                COLLABORATION
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
              <h4 className="font-medium text-lg md:text-xl leading-8 mb-7 text-gray-900 uppercase">
                COLLABORATION
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    200 to 25,000
                  </p>
                </li>
              </ul>
              <h4 className="font-medium text-lg md:text-xl leading-8 mb-7 text-gray-900 uppercase">
                MEDIA &amp; INTEGRATIONS
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
              <h4 className="font-medium text-lg md:text-xl leading-8 mb-7 text-gray-900 uppercase max-md:hidden">
                MEDIA &amp; INTEGRATIONS
              </h4>
              <ul className="mb-5 max-md:hidden">
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
            </div>
            <div className="Pro-Plan-card rounded-2xl p-5 border border-gray-300">
              <h3 className="font-manrope font-semibold text-3xl text-black text-center mb-3">
                Pro Plan
              </h3>
              <p className="font-medium text-lg leading-8 text-gray-600 text-center mb-7">
                $180 per member, per month, billed annually
              </p>
              <h4 className="font-medium text-lg md:text-xl leading-8 mb-7 text-gray-900 uppercase">
                WORKSPACE
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    200 to 25,000
                  </p>
                </li>
              </ul>
              <h4 className="font-medium text-lg md:text-xl leading-8 mb-7 text-gray-900 uppercase">
                COLLABORATION
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
              <h4 className="font-medium text-lg md:text-xl leading-8 mb-7 text-gray-900 uppercase">
                MEDIA &amp; INTEGRATIONS
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    200 to 25,000
                  </p>
                </li>
              </ul>
              <h4 className="font-medium text-lg md:text-xl leading-8 mb-7 text-gray-900 uppercase">
                MEDIA &amp; INTEGRATIONS
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    200 to 25,000
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
                <li className="flex items-center justify-between py-2.5 bg-white px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
              <h4 className="font-medium text-lg md:text-xl leading-8 mb-7 text-gray-900 uppercase">
                MEDIA &amp; INTEGRATIONS
              </h4>
              <ul className="mb-5">
                <li className="flex items-center justify-between py-2.5 bg-gray-50 px-3 rounded-2xl">
                  <p className="font-normal text-sm leading-6 text-gray-500">
                    MAUs
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-900">
                    {/* SVG removed */}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-table hidden lg:block">
            <table className="table-auto w-full mb-4">
              <thead>
                <tr>
                  <th className="w-[523px]" />
                  <th className="w-[389px]">
                    <p className="font-medium text-xl leading-8 text-gray-900 mb-2 text-left">
                      Starter Plan
                    </p>
                    <p className="font-normal text-sm text-gray-600 text-left">
                      Free forever
                    </p>
                  </th>
                  <th className="w-[200px]">
                    <p className="font-medium text-xl leading-8 text-gray-900 mb-2 text-left">
                      Pro Plan
                    </p>
                    <p className="font-normal text-sm text-gray-600 max-w-[161px] text-left">
                      $180 per member, per month, billed annually
                    </p>
                  </th>
                </tr>
              </thead>
            </table>
            <h4 className="font-medium text-xl leading-8 uppercase text-gray-900 mb-7">
              WORKSPACE
            </h4>
            <table className="table-auto w-full mb-12 min-w-[490px] overflow-x-scroll">
              <tbody>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    100
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
              </tbody>
            </table>
            <h4 className="font-medium text-xl leading-8 uppercase text-gray-900 mb-7">
              COLLABORATION
            </h4>
            <table className="table-auto w-full mb-12 min-w-[490px] overflow-x-scroll">
              <tbody>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
              </tbody>
            </table>
            <h4 className="font-medium text-xl leading-8 uppercase text-gray-900 mb-7">
              COLLABORATION
            </h4>
            <table className="table-auto w-full mb-12 min-w-[490px] overflow-x-scroll">
              <tbody>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    200 to 25,000
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
              </tbody>
            </table>
            <h4 className="font-medium text-xl leading-8 uppercase text-gray-900 mb-7">
              MEDIA &amp; INTEGRATIONS
            </h4>
            <table className="table-auto w-full mb-12 min-w-[490px] overflow-x-scroll">
              <tbody>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    200 to 25,000
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    200 to 25,000
                  </td>
                </tr>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
              </tbody>
            </table>
            <h4 className="font-medium text-xl leading-8 uppercase text-gray-900 mb-7">
              MEDIA &amp; INTEGRATIONS
            </h4>
            <table className="table-auto w-full min-w-[490px] overflow-x-scroll ">
              <tbody>
                <tr className="bg-gray-50 rounded-md">
                  <td className="w-[523px] font-normal text-sm py-4 text-gray-500 pl-5">
                    MAUs
                  </td>
                  <td className="w-[389px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                  <td className="w-[200px] font-normal text-sm py-4 text-gray-900">
                    {/* SVG removed */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex items-center flex-col justify-center gap-7 max-lg:gap-10 lg:flex-row lg:justify-between">
            <h2 className="text-4xl text-center font-bold text-gray-900 lg:text-left">
              Most people ask about{" "}
            </h2>
            {/* Slider controls */}
            <div className="flex items-center gap-8 lg:justify-start justify-center">
              <button
                id="slider-button-left"
                className="swiper-button-prev group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                  <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
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
                <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                  <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
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
                <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                  <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
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
                <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                  <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
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
                <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                  <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
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
                <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                  <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
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
                <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                  <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
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
                <div className="group border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide:border-indigo-600">
                  <h4 className="text-base font-medium leading-6 mb-5 transition-all duration-500 group-hover:text-indigo-600 slide:text-indigo-600">
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
      <footer className="w-full ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-10 max-w-md mx-auto md:max-w-3xl lg:max-w-full">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a
                href="javascript:;"
                className="flex justify-center lg:justify-start"
              >
                {/* SVG removed */}
              </a>
              <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                Trusted in more than 100 countries &amp; 5 million customers.
                Have any query ?
              </p>
              <a
                href="javascript:;"
                className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
              >
                Contact us
              </a>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Pagedone
              </h4>
              <ul className="text-sm  transition-all duration-500">
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
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Products
              </h4>
              <ul className="text-sm  transition-all duration-500">
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
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Components Library
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Resources
              </h4>
              <ul className="text-sm  transition-all duration-500">
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
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Quick Start
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    User Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
              <ul className="text-sm  transition-all duration-500">
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
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Tips &amp; Tricks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    New Updates
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Grid*/}
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row gap-4">
              <span className="text-sm text-gray-500 ">
                ©pagedone 2023, All rights reserved.
              </span>
              <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                >
                  {/* SVG removed */}
                </a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                >
                  {/* SVG removed */}
                </a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                >
                  {/* SVG removed */}
                </a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                >
                  {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
