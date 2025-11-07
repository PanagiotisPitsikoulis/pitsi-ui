export default function MinimalProductAndServicesPreviewHeroSection() {
  return (
    <div>
      <nav className=" lg:fixed transition-all top-0 left-0 z-50 duration-500 w-full bg-white">
        <div className=" py-5 border-b border-solid border-gray-300 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a
                href="javascript:;"
                className="text-gray-800 transition-all duration-500 hover:text-emerald-800"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="text-gray-800 transition-all duration-500 hover:text-emerald-800"
              >
                {/* SVG removed */}
              </a>
            </div>
            <div className="flex items-center justify-end gap-8 ">
              <a
                href="javascript:;"
                className="text-sm font-medium text-gray-800 transition-all duration-500 hover:text-emerald-700"
              >
                Contact Us
              </a>
              <a
                href="javascript:;"
                className="flex items-center gap-2.5 text-sm font-medium text-gray-800 transition-all duration-500 hover:text-emerald-700"
              >
                {/* SVG removed */}{" "}
                <span className="max-[706px]:hidden">0000000000</span>
              </a>
              <p className="flex items-center gap-2.5 text-sm font-medium text-gray-800 transition-all duration-500 hover:text-emerald-700">
                {/* SVG removed */}
                <span className="max-[706px]:hidden">
                  {" "}
                  577 Taylor Street, West Nyack, New York
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row pt-5">
            <div className="flex justify-between lg:flex-row">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <div className="flex items-center justify-end gap-5">
                <a
                  href="javascript:;"
                  className="lg:hidden flex items-center gap-2.5 text-sm font-medium text-emerald-700"
                >
                  {/* SVG removed */}
                </a>
                <a
                  href="javascript:;"
                  className="lg:hidden flex items-center gap-2.5 text-sm font-medium text-emerald-700"
                >
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
            </div>
            <div
              className="hidden w-full lg:flex lg:pl-11 max-lg:mt-1 max-lg:h-screen max-lg:overflow-y-auto"
              id="navbar"
            >
              <ul className="flex lg:items-center lg:justify-center flex-col gap-4 max-lg:pt-4 max-lg:mb-4 lg:mt-0 lg:flex-row lg:mr-auto ">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-base text-gray-500 font-medium transition-all duration-500 hover:text-emerald-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-gray-500 font-medium transition-all duration-500 hover:text-emerald-700"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium transition-all duration-500 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-emerald-700"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    aria-labelledby="menu1"
                    className="animate-fade z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 lg:-left-80 bg-white rounded-lg shadow-lg max-lg:shadow-inner shadow-gray-200 xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
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
                <li className="relative">
                  <button
                    data-target="menu2"
                    className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-base font-medium transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-emerald-700"
                  >
                    Features
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    aria-labelledby="menu2"
                    className="dropdown-menu z-10 relative top-3 max-lg:mb-3 lg:absolute lg:top-14 font-normal bg-white rounded-lg shadow-md shadow-gray-200 w-64 xl:p-8 lg:p-4 p-2 hidden"
                  >
                    <ul
                      className="text-sm text-gray-700"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <h6 className="text-sm text-gray-500 font-medium mb-2">
                        Features
                      </h6>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Notification
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="flex lg:items-center w-full justify-start flex-col lg:flex-row gap-4 lg:w-max max-lg:gap-4 lg:ml-14 lg:justify-end">
                <div className="relative">
                  <input
                    type="search"
                    className="w-10 h-10 rounded-lg px-2 py-4 outline-0 border border-gray-100 focus-within:pl-10 transition-all duration-500 focus-within:border-gray-300 focus-within:rounded-lg focus-within:w-44"
                  />
                  {/* SVG removed */}
                </div>
                <button className="bg-emerald-800 text-white rounded-lg cursor-pointer font-medium text-center shadow-xs transition-all duration-500 py-2.5 px-5 text-sm hover:bg-emerald-900">
                  sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative py-14 lg:pt-40 lg:pb-24 ">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="w-full bg-yellow-50 px-3 sm:px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex items-center">
                <div className="block max-lg:pt-6">
                  <span className="text-sm font-normal text-emerald-700 ">
                    # Revitalizingyourintrinsicbeauty
                  </span>
                  <h1 className="font-manrope font-bold text-5xl leading-tight text-emerald-900 my-8 pr-5 max-sm:break-all">
                    Embark on a Transformative Holistic Journey
                  </h1>
                  <p className="text-sm font-normal text-emerald-800 mb-8">
                    Explore the transformative power of inner beauty at our
                    Holistic Skin &amp; Beauty Lab in Brisbane. Our expert
                    practitioners guide you through a personalized journey,
                    combining skincare expertise with holistic practices to
                    nurture your inner radiance.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-8">
                    <button className="py-3.5 px-8 max-sm:w-full rounded-xl bg-emerald-800 text-white text-lg font-medium shadow-md shadow-transparent transition-all duration-500 hover:bg-emerald-900 hover:shadow-emerald-100">
                      Book Now
                    </button>
                    <button className="bg-white max-sm:w-full rounded-xl px-8 py-3.5 text-emerald-800 text-lg font-medium shadow-sm shadow-transparent transition-all duration-500 hover:bg-emerald-100 hover:shadow-emerald-200 ">
                      Explore Our Treatments
                    </button>
                  </div>
                </div>
              </div>
              <div className="pl-5">
                <div className="grid grid-cols-2 gap-10">
                  <div className="flex flex-col gap-4 relative">
                    <img
                      src="https://pagedone.io/asset/uploads/1709274026.png"
                      className="transition-all duration-500 cursor-pointer object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1709274036.png"
                      className="transition-all duration-500 cursor-pointer object-cover"
                    />
                    {/* SVG removed */}
                  </div>
                  <div className="flex h-full items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1709274050.png"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 min-[560px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <button className="w-full min-[560px]:max-w-[280px] mx-auto py-4 flex items-center justify-center gap-3 text-sm font-medium text-emerald-800 border border-gray-200 rounded-xl shadow-sm shadow-transparent transition-all duration-500 hover:border-emerald-50 hover:bg-emerald-50">
              {/* SVG removed */}
              Skincare Therapies
            </button>
            <button className="w-full min-[560px]:max-w-[280px] mx-auto py-4 flex items-center justify-center gap-3 text-sm font-medium text-emerald-800 border border-gray-200 rounded-xl shadow-sm shadow-transparent transition-all duration-500 hover:border-emerald-50 hover:bg-emerald-50">
              {/* SVG removed */}
              Brow &amp; Glam
            </button>
            <button className="w-full min-[560px]:max-w-[280px] mx-auto py-4 flex items-center justify-center gap-3 text-sm font-medium text-emerald-800 border border-gray-200 rounded-xl shadow-sm shadow-transparent transition-all duration-500 hover:border-emerald-50 hover:bg-emerald-50">
              {/* SVG removed */}
              Offers &amp; Packages
            </button>
            <button className="w-full min-[560px]:max-w-[280px] mx-auto py-4 flex items-center justify-center gap-3 text-sm font-medium text-emerald-800 border border-gray-200 rounded-xl shadow-sm shadow-transparent transition-all duration-500 hover:border-emerald-50 hover:bg-emerald-50">
              {/* SVG removed */}
              Beauty Apothecary
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
