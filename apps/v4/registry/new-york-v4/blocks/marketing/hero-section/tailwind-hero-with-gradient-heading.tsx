export default function TailwindHeroWithGradientHeading() {
  return (
    <div className="bg-gray-900">
      <nav className="z-50 w-full border-b border-gray-500 bg-transparent py-5 transition-all duration-500 lg:fixed">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a
                href="
            https://pagedone.io/"
                className="flex items-center"
              >
                {/* SVG removed */}
              </a>
              <div className="flex items-center justify-end gap-5">
                <button
                  data-collapse-toggle="navbar"
                  className="inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div
              className="hidden w-full max-lg:mt-1 max-lg:overflow-y-auto lg:flex lg:pl-11"
              id="navbar"
            >
              <ul className="flex flex-col gap-6 max-lg:mb-4 max-lg:pt-4 lg:mx-auto lg:mt-0 lg:flex-row lg:items-center lg:justify-center">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block text-base font-medium text-white transition-all duration-500 hover:text-gray-400 md:mb-0 lg:mx-3 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link block text-base font-medium text-white transition-all duration-500 hover:text-gray-400 md:mb-0 lg:mx-3 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-white transition-all duration-500 hover:text-gray-400 lg:m-0 lg:mx-3 lg:mb-0 lg:text-left"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    aria-labelledby="menu1"
                    className="animate-fade relative top-3 z-10 hidden min-w-full rounded-lg bg-white p-2 max-lg:mb-3 md:min-w-[500px] lg:absolute lg:top-14 lg:-left-80 lg:min-w-[800px] lg:p-4 xl:p-8"
                  >
                    <div className="flex flex-col justify-between md:flex-row">
                      <ul
                        className="text-sm text-gray-700 md:w-1/2"
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
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
                        className="text-sm text-gray-700 md:w-1/2 dark:text-gray-400"
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
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
                <li className="relative">
                  <button
                    data-target="menu2"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-white transition-all duration-500 hover:text-gray-400 lg:m-0 lg:mx-3 lg:mb-0 lg:text-left"
                  >
                    Features
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    aria-labelledby="menu2"
                    className="dropdown-menu relative top-3 z-10 hidden w-64 rounded-lg bg-white p-2 font-normal max-lg:mb-3 lg:absolute lg:top-14 lg:p-4 xl:p-8"
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
              <div className="flex w-full flex-col justify-start gap-5 max-lg:gap-5 lg:ml-14 lg:w-max lg:flex-row lg:items-center lg:justify-end">
                <div className="relative">
                  <input
                    type="search"
                    className="h-[37px] w-[37px] bg-transparent text-white outline-0 transition-all duration-500 focus-within:w-44 focus-within:rounded-full focus-within:border-gray-300 focus-within:pl-10 focus:border focus:border-gray-200"
                  />
                  {/* SVG removed */}
                </div>
                <button className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 hover:bg-gray-100">
                  <span className="px-1.5 text-sm leading-6 font-medium text-black">
                    Sign up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full lg:pt-[84px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex w-full flex-col items-center justify-start gap-10 py-10 lg:gap-16 lg:py-14">
            <div className="flex w-fit flex-col items-center justify-start gap-9">
              <div className="flex flex-col items-center justify-start gap-3.5">
                <h2 className="font-manrope bg-gradient-to-r from-neutral-600 via-neutral-100 to-neutral-700 bg-clip-text text-center text-5xl leading-snug font-bold text-transparent md:text-6xl md:leading-snug">
                  Blending Passion and Precision for Seamless Digital
                  Experiences
                </h2>
                <p className="w-full text-center text-base leading-relaxed font-normal text-gray-400 lg:max-w-2xl">
                  Uncover how precision and a fervent commitment to excellence
                  converge to create impactful and seamless interactions in the
                  digital realm.
                </p>
              </div>
              <button className="flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-100 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                  Explore My Website
                </span>
                {/* SVG removed */}
              </button>
            </div>
            <div className="grid w-full grid-cols-1 items-start justify-start gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
              <div className="group inline-flex h-full w-full flex-col items-start justify-start rounded-2xl border border-neutral-700 bg-zinc-900/40 p-5 transition-all duration-700 ease-in-out hover:border-neutral-400 md:p-7 lg:p-5 xl:p-7">
                <div className="flex flex-col items-start justify-start gap-3">
                  <div className="flex flex-col items-start justify-start gap-5">
                    <a className="inline-flex items-center justify-center gap-1 rounded-lg bg-white/5 p-3 transition-all duration-700 ease-in-out group-hover:bg-white/10">
                      {/* SVG removed */}
                    </a>
                    <h4 className="text-xl leading-8 font-semibold text-white">
                      Revolutionary{" "}
                    </h4>
                  </div>
                  <p className="text-sm leading-snug font-normal text-gray-300">
                    Plan and structure work how you want.
                  </p>
                </div>
              </div>
              <div className="group inline-flex h-full w-full flex-col items-start justify-start rounded-2xl border border-neutral-700 bg-zinc-900/40 p-5 transition-all duration-700 ease-in-out hover:border-neutral-400 md:p-7 lg:p-5 xl:p-7">
                <div className="flex flex-col items-start justify-start gap-3">
                  <div className="flex flex-col items-start justify-start gap-5">
                    <a className="inline-flex items-center justify-center gap-1 rounded-lg bg-white/5 p-3 transition-all duration-700 ease-in-out group-hover:bg-white/10">
                      {/* SVG removed */}
                    </a>
                    <h4 className="text-xl leading-8 font-semibold text-white">
                      App Integrations
                    </h4>
                  </div>
                  <p className="text-sm leading-snug font-normal text-gray-300">
                    Bring all your tools and data together.
                  </p>
                </div>
              </div>
              <div className="group inline-flex h-full w-full flex-col items-start justify-start rounded-2xl border border-neutral-700 bg-zinc-900/40 p-5 transition-all duration-700 ease-in-out hover:border-neutral-400 md:p-7 lg:p-5 xl:p-7">
                <div className="flex flex-col items-start justify-start gap-3">
                  <div className="flex flex-col items-start justify-start gap-5">
                    <a className="inline-flex items-center justify-center gap-1 rounded-lg bg-white/5 p-3 transition-all duration-700 ease-in-out group-hover:bg-white/10">
                      {/* SVG removed */}
                    </a>
                    <h4 className="text-xl leading-8 font-semibold text-white">
                      Data Reporting
                    </h4>
                  </div>
                  <p className="text-sm leading-snug font-normal text-gray-300 xl:w-56">
                    Get real time insight into progress and allows teams to
                    track
                  </p>
                </div>
              </div>
              <div className="group inline-flex h-full w-full flex-col items-start justify-start rounded-2xl border border-neutral-700 bg-zinc-900/40 p-5 transition-all duration-700 ease-in-out hover:border-neutral-400 md:p-7 lg:p-5 xl:p-7">
                <div className="flex flex-col items-start justify-start gap-3">
                  <div className="flex flex-col items-start justify-start gap-5">
                    <a className="inline-flex items-center justify-center gap-1 rounded-lg bg-white/5 p-3 transition-all duration-700 ease-in-out group-hover:bg-white/10">
                      {/* SVG removed */}
                    </a>
                    <h4 className="text-xl leading-8 font-semibold text-white">
                      Workflow Builder
                    </h4>
                  </div>
                  <p className="text-sm leading-snug font-normal text-gray-300">
                    Automated processes to coordinate your teams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
