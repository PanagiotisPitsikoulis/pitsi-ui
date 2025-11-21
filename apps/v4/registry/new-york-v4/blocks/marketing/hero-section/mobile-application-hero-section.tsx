export default function MobileApplicationHeroSection() {
  return (
    <div>
      <nav className="relative z-50 w-full border-b border-gray-200 bg-transparent bg-gradient-to-l from-gray-200 to-gray-300 py-5 transition-all duration-500 lg:fixed">
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
              className="hidden w-full max-lg:mt-1 max-lg:overflow-auto max-lg:py-5 lg:flex lg:pl-10"
              id="navbar"
            >
              <ul className="mt-4 flex flex-col gap-6 lg:mt-0 lg:flex-row lg:items-center">
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block px-1.5 text-base font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="block px-1.5 text-base font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle mr-auto flex items-center justify-between pl-1.5 text-base font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 lg:m-0 lg:text-left"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    className="animate-fade relative top-3 z-10 hidden min-w-full rounded-lg bg-gray-50 p-2 shadow-lg shadow-gray-300 max-lg:mb-3 md:min-w-[500px] lg:absolute lg:top-14 lg:-left-80 lg:min-w-[800px] lg:p-4 xl:p-8"
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
                <li className="relative px-1.5">
                  <div className="dropdown relative inline-flex">
                    <button
                      data-target="dropdown-feature"
                      className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 max-lg:h-max lg:m-0 lg:text-left"
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
              <div className="z-0 flex flex-col gap-5 max-lg:mt-4 lg:ml-auto lg:flex-row lg:items-center lg:justify-center">
                <button className="cursor-pointer rounded-lg bg-gray-900 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Let’s Talk
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full lg:pt-[84px]">
        <div className="flex flex-col items-center justify-center gap-8 bg-gradient-to-l from-gray-200 to-gray-300 px-4 pt-10 pb-80 lg:gap-12 lg:px-0 lg:pt-12">
          <div className="flex flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-6xl leading-snug font-normal text-gray-900">
              Innovate with AI Technology
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-4xl">
              Unlock the potential of AI technology to innovate and transform
              your business. Our advanced AI solutions provide the tools you
              need to lead in a competitive landscape, from automation to
              intelligent insights.
            </p>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl bg-gray-900 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700 sm:w-fit">
            {/* SVG removed */}
            <span className="px-2 text-lg leading-8 font-semibold text-white">
              Explore Innovation
            </span>
          </button>
        </div>
        <div className="flex h-[450px] w-full translate-y-80 flex-col justify-center gap-8 px-5 md:translate-y-72 lg:mt-20 lg:-translate-y-[280px] lg:flex-row lg:justify-end lg:gap-5 xl:-translate-y-[317px] xl:px-0 xl:pl-10 2xl:h-auto">
          <div className="flex h-auto w-full flex-col items-start justify-start lg:w-[317px] xl:h-full">
            <div className="flex w-full flex-col items-start justify-start gap-3 bg-gray-100 p-6 lg:p-4 xl:p-6 2xl:p-7">
              <h6 className="text-base leading-relaxed font-normal text-gray-900">
                EduTech Revolution
              </h6>
              <h4 className="w-full text-xl leading-8 font-medium break-all text-black xl:pb-[15px] xl:break-normal">
                Adaptive Learning Environments: Creating personalized
                educational experiences using AI.
              </h4>
            </div>
            <img
              className="h-64 w-full object-cover xl:h-auto"
              src="https://pagedone.io/asset/uploads/1719382977.png"
              alt="Hero Section Card image"
            />
          </div>
          <div className="relative h-full w-full lg:w-[317px]">
            <img
              src="https://pagedone.io/asset/uploads/1719382987.png"
              className="relative h-64 w-full object-cover lg:h-full"
            />
            <div className="absolute top-0 inline-flex flex-col items-start justify-start gap-3 p-6">
              <h6 className="text-base leading-relaxed font-normal text-white">
                SmartCity Technologies
              </h6>
              <h4 className="w-full text-xl leading-8 font-medium text-white">
                Urban Traffic Management: Using AI to streamline traffic flow
                and reduce congestion.
              </h4>
            </div>
          </div>
          <div className="inline-flex h-full w-full flex-col items-start justify-start bg-gray-50 lg:w-[317px]">
            <div className="flex flex-col items-start justify-start gap-3 p-6 lg:p-4 xl:p-6">
              <h6 className="text-base leading-relaxed font-normal text-gray-900">
                AgriTech Solutions
              </h6>
              <h4 className="text-w-full black text-xl leading-8 font-medium break-all lg:break-normal xl:pb-[23px]">
                Yield Optimization Technologies: Utilizing AI to maximize
                agricultural output.
              </h4>
            </div>
            <img
              className="h-64 w-full object-cover xl:h-auto"
              src="https://pagedone.io/asset/uploads/1719382996.png"
              alt="Hero Section Card image"
            />
          </div>
          <div className="flex h-full w-full flex-col items-start justify-start lg:w-[317px]">
            <div className="flex flex-col items-start justify-start gap-3 bg-gray-50 p-6 lg:p-4 xl:p-6">
              <h6 className="text-base leading-relaxed font-normal text-gray-900">
                NeuroHealth Technologies
              </h6>
              <h4 className="w-full text-xl leading-8 font-medium break-all text-black xl:pb-[23px] xl:break-normal">
                Cognitive Health Solutions: Developing AI tools for cognitive
                and mental health.
              </h4>
            </div>
            <img
              className="h-64 w-full object-cover xl:h-auto"
              src="https://pagedone.io/asset/uploads/1719383006.png"
              alt="Hero Section Card image"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
