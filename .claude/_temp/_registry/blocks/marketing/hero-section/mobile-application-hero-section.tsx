export default function MobileApplicationHeroSection() {
  return (
    <div>
      <nav className="py-5 lg:fixed relative z-50 w-full transition-all duration-500 bg-transparent border-b border-gray-200 bg-gradient-to-l from-gray-200 to-gray-300">
        <div className="mx-auto max-w-7xl lg:px-8 sm:px-6 px-4">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="https://pagedone.io/" className="flex items-center">
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
            <div
              className="hidden w-full lg:flex lg:pl-10 max-lg:mt-1 max-lg:py-5 max-lg:overflow-auto "
              id="navbar"
            >
              <ul className="flex lg:items-center flex-col mt-4 gap-6 lg:mt-0 lg:flex-row">
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base font-medium hover:text-gray-900 transition-all duration-500 block px-1.5 lg:text-left "
                  >
                    Home
                  </a>
                </li>
                <li className="px-1.5">
                  <a
                    href="javascript:;"
                    className="text-gray-500 text-base font-medium hover:text-gray-900 transition-all duration-500 block px-1.5 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative px-1.5">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 pl-1.5 text-base font-medium hover:text-gray-900 transition-all duration-500 mr-auto lg:text-left lg:m-0"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    className="animate-fade z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 lg:-left-80 bg-gray-50 rounded-lg shadow-lg shadow-gray-300 xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
                  >
                    <div className="flex flex-col md:flex-row justify-between">
                      <ul
                        className="text-sm text-gray-700 md:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-sm text-gray-500 mb-2">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                          >
                            <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
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
                            <div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
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
                            <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
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
                        className="text-sm text-gray-700 dark:text-gray-400 md:w-1/2"
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
                            <div className="bg-rose-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
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
                            className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
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
                            className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500"
                          >
                            <div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center">
                              {/* SVG removed */}
                            </div>
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
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative px-1.5">
                  <div className="dropdown relative inline-flex">
                    <button
                      data-target="dropdown-feature"
                      className="dropdown-toggle flex items-center justify-between text-gray-500 max-lg:h-max text-center text-base font-medium transition-all duration-500 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
                    >
                      Features
                      {/* SVG removed */}
                    </button>
                    <div
                      id="dropdown-feature"
                      className="dropdown-menu rounded-xl shadow-lg lg:bg-white relative lg:absolute max-lg:-left-14 max-lg:top-4 max-lg:bg-white lg:top-full lg:w-72 mt-2 hidden"
                      aria-labelledby="dropdown-feature"
                    >
                      <ul className="py-2">
                        <li>
                          <a
                            className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                            href="#"
                          >
                            Downloads
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                            href="#"
                          >
                            Saved Files
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
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
              <div className="flex flex-col lg:flex-row gap-5 max-lg:mt-4 lg:items-center lg:ml-auto lg:justify-center z-0">
                <button className="py-2 px-3.5 bg-gray-900 rounded-lg cursor-pointer transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:bg-gray-700">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Let’s Talk
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full lg:pt-[84px]">
        <div className="justify-center items-center lg:gap-12 gap-8 flex flex-col pb-80 lg:pt-12 pt-10 bg-gradient-to-l from-gray-200 to-gray-300 lg:px-0 px-4">
          <div className="flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-gray-900 text-6xl font-normal font-manrope leading-snug">
              Innovate with AI Technology
            </h2>
            <p className="lg:max-w-4xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              Unlock the potential of AI technology to innovate and transform
              your business. Our advanced AI solutions provide the tools you
              need to lead in a competitive landscape, from automation to
              intelligent insights.
            </p>
          </div>
          <button className="sm:w-fit w-full px-6 py-3 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
            {/* SVG removed */}
            <span className="px-2 text-white text-lg font-semibold leading-8">
              Explore Innovation
            </span>
          </button>
        </div>
        <div className="w-full 2xl:h-auto h-[450px]  xl:pl-10 xl:px-0 px-5 flex-col flex lg:gap-5 gap-8 justify-center lg:mt-20 xl:-translate-y-[317px] lg:-translate-y-[280px] md:translate-y-72 translate-y-80 lg:flex-row lg:justify-end">
          <div className="lg:w-[317px] w-full xl:h-full h-auto justify-start items-start flex flex-col">
            <div className="w-full 2xl:p-7 xl:p-6 lg:p-4 p-6 bg-gray-100 flex-col justify-start items-start gap-3 flex">
              <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                EduTech Revolution
              </h6>
              <h4 className="w-full text-black text-xl font-medium leading-8 xl:pb-[15px] xl:break-normal break-all">
                Adaptive Learning Environments: Creating personalized
                educational experiences using AI.
              </h4>
            </div>
            <img
              className="w-full xl:h-auto h-64 object-cover"
              src="https://pagedone.io/asset/uploads/1719382977.png"
              alt="Hero Section Card image"
            />
          </div>
          <div className="lg:w-[317px] w-full h-full relative">
            <img
              src="https://pagedone.io/asset/uploads/1719382987.png"
              className="relative w-full lg:h-full h-64 object-cover"
            />
            <div className="flex-col justify-start items-start gap-3 inline-flex absolute top-0 p-6">
              <h6 className="text-white text-base font-normal leading-relaxed">
                SmartCity Technologies
              </h6>
              <h4 className="w-full text-white text-xl font-medium leading-8">
                Urban Traffic Management: Using AI to streamline traffic flow
                and reduce congestion.
              </h4>
            </div>
          </div>
          <div className="lg:w-[317px] w-full h-full bg-gray-50 flex-col justify-start items-start inline-flex">
            <div className="xl:p-6 lg:p-4 p-6 flex-col justify-start items-start gap-3 flex">
              <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                AgriTech Solutions
              </h6>
              <h4 className="text-w-full black text-xl font-medium leading-8 xl:pb-[23px] lg:break-normal break-all">
                Yield Optimization Technologies: Utilizing AI to maximize
                agricultural output.
              </h4>
            </div>
            <img
              className="w-full xl:h-auto h-64 object-cover"
              src="https://pagedone.io/asset/uploads/1719382996.png"
              alt="Hero Section Card image"
            />
          </div>
          <div className="lg:w-[317px] w-full h-full justify-start items-start flex flex-col">
            <div className="xl:p-6 lg:p-4 p-6 bg-gray-50 flex-col justify-start items-start gap-3 flex">
              <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                NeuroHealth Technologies
              </h6>
              <h4 className="w-full text-black text-xl font-medium leading-8 xl:pb-[23px] xl:break-normal break-all">
                Cognitive Health Solutions: Developing AI tools for cognitive
                and mental health.
              </h4>
            </div>
            <img
              className="w-full xl:h-auto h-64 object-cover"
              src="https://pagedone.io/asset/uploads/1719383006.png"
              alt="Hero Section Card image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
