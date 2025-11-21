export default function VisualImageWithBanner() {
  return (
    <div>
      <nav className="w-full border-b border-gray-200 bg-white py-5 transition-all duration-500 lg:fixed">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="https://pagedone.io/" className="flex items-center">
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
            <div
              className="hidden w-full max-lg:py-4 lg:flex lg:pl-10"
              id="navbar"
            >
              <ul className="mt-4 flex flex-col gap-6 max-lg:mb-4 lg:mt-0 lg:flex-row lg:items-center">
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-gray-500 transition-all duration-500 hover:text-lime-500 lg:px-1.5 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block text-base font-medium text-gray-500 transition-all duration-500 hover:text-lime-500 lg:px-1.5 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="megamenu"
                    className="dropdown-toggle hover:text-prime-blue-700 mr-auto flex items-center justify-between text-base font-medium text-gray-500 transition-all duration-500 hover:text-lime-500 lg:m-0 lg:mb-0 lg:text-left"
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
                      className="dropdown-toggle hover:text-prime-blue-700 mr-auto flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-lime-500 max-lg:h-max lg:m-0 lg:text-left"
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
                <button className="rounded-full bg-lime-50 px-3.5 py-2 text-center transition-all duration-500 hover:bg-lime-100">
                  <span className="px-1.5 text-sm leading-6 font-medium text-lime-600">
                    Login
                  </span>
                </button>
                <button className="rounded-full bg-lime-600 px-3.5 py-2 text-center shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-500 hover:bg-lime-700">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Sign up{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-center justify-between gap-8 pt-10 pb-20 lg:flex-row lg:gap-16 lg:pt-40">
            <div className="inline-flex flex-col items-start justify-start gap-4 lg:gap-5">
              <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900 lg:max-w-xl lg:text-start">
                Elevate Your Style with Our Exclusive Collections
              </h2>
              <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-xl lg:text-start">
                Welcome to our lifestyle blog, your ultimate destination for
                embracing the richness of life. Dive into a world of
                inspiration,
              </p>
            </div>
            <div className="relative flex flex-col items-center justify-center gap-2.5">
              <div
                id="circle"
                className="flex h-[160px] w-[300px] items-center justify-center"
              >
                {/* SVG removed */}
              </div>
              <button className="group absolute flex h-[60px] w-[60px] items-center justify-center rounded-full bg-lime-500 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full -translate-y-7">
          <img
            src="https://pagedone.io/asset/uploads/1720161813.png"
            className="relative h-[504px] w-full translate-y-0.5 scale-x-105 -rotate-2 object-cover lg:h-full 2xl:h-auto"
          />
          <div className="marquee absolute top-0 inline-flex w-full -rotate-2 items-center justify-center gap-2 bg-lime-400 p-3 backdrop-blur-[2px]">
            <ul className="animated-ul">
              <li>
                <div className="flex items-center justify-start gap-[9px]">
                  <div className="h-2 w-2 rounded-full bg-gray-900">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-bold whitespace-nowrap text-gray-900">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="flex items-center justify-start gap-[9px]">
                  <div className="h-2 w-2 rounded-full bg-gray-900">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-bold whitespace-nowrap text-gray-900">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="flex items-center justify-start gap-[9px]">
                  <div className="h-2 w-2 rounded-full bg-gray-900">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-bold whitespace-nowrap text-gray-900">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="flex items-center justify-start gap-[9px]">
                  <div className="h-2 w-2 rounded-full bg-gray-900">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-bold whitespace-nowrap text-gray-900">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="flex items-center justify-start gap-[9px]">
                  <div className="h-2 w-2 rounded-full bg-gray-900">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-bold whitespace-nowrap text-gray-900">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="flex items-center justify-start gap-[9px]">
                  <div className="h-2 w-2 rounded-full bg-gray-900">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-bold whitespace-nowrap text-gray-900">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul" aria-hidden="true">
              <li>
                <div className="flex items-center justify-start gap-[9px]">
                  <div className="h-2 w-2 rounded-full bg-gray-900">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-bold whitespace-nowrap text-gray-900">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul">
              <li>
                <div className="flex items-center justify-start gap-[9px]">
                  <div className="h-2 w-2 rounded-full bg-gray-900">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-bold whitespace-nowrap text-gray-900">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
            <ul className="animated-ul">
              <li>
                <div className="flex items-center justify-start gap-[9px]">
                  <div className="h-2 w-2 rounded-full bg-gray-900">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-bold whitespace-nowrap text-gray-900">
                    Elevate Your Style with Our Exclusive Collections
                  </h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
