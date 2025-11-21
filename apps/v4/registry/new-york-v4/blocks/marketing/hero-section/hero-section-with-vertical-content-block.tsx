export default function HeroSectionWithVerticalContentBlock() {
  return (
    <div className="w-full bg-[url('https://pagedone.io/asset/uploads/1719489039.png')] bg-cover bg-center bg-no-repeat">
      <nav className="w-full bg-transparent py-5 transition-all duration-500 lg:fixed">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <button
                data-collapse-toggle="navbar"
                className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* SVG removed */}
              </button>
            </div>
            <div
              className="hidden w-full max-lg:py-4 lg:flex lg:pl-10"
              id="navbar"
            >
              <ul className="mt-4 flex flex-col gap-6 max-lg:mb-4 lg:mt-0 lg:flex-row lg:items-center">
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-white transition-all duration-500 hover:text-gray-900 lg:px-1.5 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-white transition-all duration-500 hover:text-gray-900 lg:px-1.5 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-base font-medium text-white transition-all duration-500 hover:text-gray-900 lg:m-0 lg:mb-0 lg:text-left"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="megamenu"
                    aria-labelledby="megamenu"
                    className="animate-fade open relative top-2 z-10 hidden min-w-full rounded-lg bg-white p-2 shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] md:min-w-[500px] lg:absolute lg:top-14 lg:-left-20 lg:min-w-[800px] lg:p-4 xl:p-8"
                  >
                    <div className="flex flex-col sm:flex-row lg:justify-between">
                      <ul className="text-sm text-gray-700 lg:w-1/2">
                        <h6 className="mb-2 text-sm font-medium text-gray-500">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
                      </ul>
                      <ul
                        className="text-sm text-gray-700 lg:w-1/2 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="mb-2 text-sm font-medium text-gray-500">
                          Services
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
                            className="flex items-center px-2 py-2 transition-all duration-500 hover:rounded-xl hover:bg-gray-50 lg:px-3 lg:py-5"
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
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative px-1.5">
                  <div className="dropdown relative inline-flex">
                    <button
                      data-target="dropdown-feature"
                      className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-white transition-all duration-500 hover:text-gray-900 max-lg:h-max lg:m-0 lg:text-left"
                    >
                      Features
                      {/* SVG removed */}
                    </button>
                    <div
                      id="dropdown-feature"
                      className="dropdown-menu relative mt-2 hidden rounded-xl shadow-lg max-lg:top-4 max-lg:-left-14 max-lg:bg-white lg:absolute lg:top-full lg:w-72 lg:bg-white"
                      aria-labelledby="dropdown-feature"
                    >
                      <ul className="py-2">
                        <li>
                          <a
                            className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                            href="#"
                          >
                            Downloads
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                            href="#"
                          >
                            Saved Files
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                            href="#"
                          >
                            Notifications
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col justify-start gap-5 lg:flex-1 lg:flex-row lg:items-center lg:justify-end">
                <button className="rounded-full bg-white px-3.5 py-2 text-center transition-all duration-700 ease-in-out hover:bg-gray-100">
                  <span className="px-1.5 text-sm leading-6 font-medium text-black">
                    Login
                  </span>
                </button>
                <button className="rounded-full bg-white px-3.5 py-2 text-center shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500 hover:bg-lime-100">
                  <span className="px-1.5 text-sm leading-6 font-medium text-black">
                    Sign up{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full lg:pt-[84px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex w-full flex-col items-center justify-start">
            <div className="grid w-full grid-cols-1 items-end justify-start lg:grid-cols-2">
              <div className="inline-flex flex-col items-center justify-end gap-3.5 py-8 lg:items-start lg:py-16">
                <div className="inline-flex items-center justify-start gap-2 rounded-full bg-lime-100 py-2 pr-3.5 pl-2">
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-lime-600">
                    {/* SVG removed */}
                  </div>
                  <span className="text-center text-sm leading-snug font-semibold text-black">
                    #1 Most popular solution
                  </span>
                </div>
                <h2 className="font-manrope text-center text-5xl leading-snug font-medium text-white md:text-6xl md:leading-normal lg:text-start">
                  Streamlining Your Global Real Estate
                </h2>
              </div>
              <div className="inline-flex flex-col items-end justify-center py-4 md:py-8 lg:py-16 lg:pl-40 xl:pl-56">
                <div className="flex w-full flex-col items-center justify-start gap-5 lg:gap-8">
                  <div className="flex w-full flex-col items-start justify-start gap-6 rounded-2xl bg-white p-5 lg:gap-10 xl:gap-12">
                    <h4 className="text-xl leading-8 font-medium text-black lg:w-52">
                      Over 3000+ Satisfied customers
                    </h4>
                    <div className="inline-flex items-center justify-start gap-4">
                      <div className="flex items-start justify-start -space-x-2.5">
                        <a className="avatar-item flex items-start justify-start rounded-full border-2 border-white">
                          <img
                            className="avatar h-8 w-8 rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1719398834.png"
                          />
                        </a>
                        <a className="avatar-item flex items-start justify-start rounded-full border-2 border-white">
                          <img
                            className="avatar h-8 w-8 rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1719398846.png"
                          />
                        </a>
                        <a className="avatar-item flex items-start justify-start rounded-full border-2 border-white">
                          <img
                            className="avatar h-8 w-8 rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1719398855.png"
                          />
                        </a>
                        <a className="avatar-item flex items-start justify-start rounded-full border-2 border-white">
                          <img
                            className="avatar h-8 w-8 rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1719398863.png"
                          />
                        </a>
                      </div>
                      <h6 className="text-base leading-normal font-medium text-black">
                        People have joined
                      </h6>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start rounded-2xl bg-white p-5">
                    <div className="flex w-full flex-col items-start justify-start gap-4">
                      <img
                        className="w-full rounded-xl object-cover"
                        src="https://pagedone.io/asset/uploads/1719552451.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-3">
                        <h6 className="text-base leading-relaxed font-medium text-black">
                          Balancing Stability with Growth Potential
                        </h6>
                        <p className="text-xs leading-normal font-normal text-gray-500">
                          In practical terms, it involves assessing the
                          risk-reward tradeoff between investing in
                          well-established cities or regions versus emerging or
                          rapidly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-lime-100 p-5">
                    <h4 className="text-xl leading-8 font-medium text-black">
                      Stability and Growth Potential in Investments
                    </h4>
                    <p className="text-xs leading-normal font-normal text-gray-500">
                      The investment landscape, achieving the right balance
                      between stability and growth potential is paramount for
                      optimizing risk-adjusted returns and meeting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
