export default function AboutUsWithImageTiles() {
  return (
    <div>
      <nav className="py-5 relative z-50 w-full bg-gray-50 transition-all duration-500 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a
                href="javascript:;"
                className="cursor-pointer flex items-center"
              ></a>
              <button
                data-collapse-toggle="navbar-default"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden w-full lg:flex lg:pl-11" id="navbar-default">
              <ul className="lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row">
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-500 cursor-pointer text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-500 cursor-pointer text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu1"
                    className="flex items-center justify-between text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 lg:text-left text-center m-auto lg:m-0"
                  >
                    Products
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    className="animate-fade z-10 absolute top-14 hidden -left-80 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full"
                  >
                    <div className="flex justify-between">
                      <ul
                        className="text-sm text-gray-700 w-1/2"
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
                            <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                            <div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                            <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                        className="text-sm text-gray-700 dark:text-gray-400 w-1/2"
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
                            <div className="bg-rose-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                            <div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                            <div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
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
                    data-dropdown-toggle="menu2"
                    className="flex items-center justify-between text-gray-500 text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 lg:text-left text-center m-auto lg:m-0"
                  >
                    Features
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    className="dropdown-menu z-10 hidden absolute top-14 font-normal bg-white rounded-lg shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] w-64 xl:p-8 lg:p-4 p-2"
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
              <div className="flex items-center justify-center lg:flex-1 lg:justify-end">
                <button className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                  Login
                </button>
                <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm md:ml-5 hover:bg-indigo-700">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Control your Finances with our
            <span className="text-indigo-600">Smart Tool </span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Invest intelligently and discover a better way to manage your entire
            wealth easily.
          </p>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034769.png"
                alt="About Us tailwind page"
                className="max-lg:mx-auto object-cover"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Driven by a passion for seamless user experiences, we've
                  meticulously curated pagedone to empower creators, designers,
                  and developers alike. Our mission is to provide a
                  comprehensive toolkit, enabling you to build intuitive,
                  beautiful interfaces that resonate with users on every
                  interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto object-cover"
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  We are Creative Since 2005
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Pagedone isn’t just a collection of components and guidelines;
                  it's a philosophy. We go beyond aesthetics, prioritizing
                  accessibility, scalability, and usability. Every element, from
                  the tiniest detail to the grandest layout, is meticulously
                  crafted to enhance functionality and elevate user
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                className="hidden lg:block object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Company's remarkable growth journey as we continually
                    innovate and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Our very talented team members are the powerhouse of
                    pagedone and pillars of our success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Projects Completed
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    We have accomplished more than 625 projects worldwide and we
                    are still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">
              What our happy user says!
            </h2>
          </div>
          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative mb-20">
                  {/*Slider Wrapper*/}
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform's intuitive interface and ease of use have
                      allowed me to manage my finances more effectively and make
                      informed investment decisions. I particularly like the
                      product's auto-tracking feature, which has saved me a lot
                      of time and effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  {/*Slider Wrapper*/}
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform's intuitive interface and ease of use have
                      allowed me to manage my finances more effectively and make
                      informed investment decisions. I particularly like the
                      product's auto-tracking feature, which has saved me a lot
                      of time and effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  {/*Slider Wrapper*/}
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform's intuitive interface and ease of use have
                      allowed me to manage my finances more effectively and make
                      informed investment decisions. I particularly like the
                      product's auto-tracking feature, which has saved me a lot
                      of time and effort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349534.png"
                  alt="Emily image"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600 object-cover"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="Ethan image"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600 object-cover"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349514.png"
                  alt="Olivia image"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-6">
              Meet our soldier of finance
            </h2>
            <p className="text-lg text-gray-500 text-center">
              We provide all the advantage that can simplify all your financial
              and banking support without any further issues
            </p>
          </div>
          {/*Slider Wrapper*/}
          <div className="swiper teamswiper pb-10">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="group w-full flex-wrap flex items-center gap-8 transition-all duration-500 p-8 lg:flex-nowrap">
                  <div className="w-full lg:w-48 h-64">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238786.png"
                      alt="image"
                      className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="text-center lg:text-left lg:max-w-xs flex-1">
                    <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                      <h6 className="text-lg text-gray-900 font-semibold mb-1">
                        Harsh Patel
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Co-Founder &amp; CEO
                      </span>
                    </div>
                    <p className="text-gray-500 leading-6 mb-7">
                      I am the co founder of pagedone and we’ve pushed our limit
                      so far to make it successful.
                    </p>
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group w-full flex-wrap flex items-center gap-8 flex-col md:flex-row transition-all duration-500 p-8 lg:flex-nowrap">
                  <div className="w-full lg:w-48 h-64 max-lg:max-w-[204px] max-lg:mx-auto">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238869.png"
                      alt="image"
                      className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="text-center lg:text-left lg:max-w-xs flex-1 flex flex-col justify-between">
                    <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                      <h6 className="text-lg text-gray-900 font-semibold mb-1">
                        Alexa Kimberly
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Lead Designer
                      </span>
                    </div>
                    <p className="text-gray-500 leading-6 mb-7">
                      I’ve been lead designer for pagedone since the beginning
                      of it and enjoyed every bit.
                    </p>
                    <div className="flex items-center gap-4 justify-center lg:justify-start max-sm:bottom-0 relative">
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group w-full flex-wrap flex items-center gap-8 transition-all duration-500 p-8 lg:flex-nowrap">
                  <div className="w-full lg:w-48 h-64">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238786.png"
                      alt="image"
                      className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="text-center lg:text-left lg:max-w-xs flex-1">
                    <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                      <h6 className="text-lg text-gray-900 font-semibold mb-1">
                        Harsh Patel
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Co-Founder &amp; CEO
                      </span>
                    </div>
                    <p className="text-gray-500 leading-6 mb-7">
                      I am the co founder of pagedone and we’ve pushed our limit
                      so far to make it successful.
                    </p>
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group w-full flex-wrap flex items-center gap-8 flex-col md:flex-row transition-all duration-500 p-8 lg:flex-nowrap">
                  <div className="w-full lg:w-48 h-64 max-lg:max-w-[204px] max-lg:mx-auto">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238869.png"
                      alt="image"
                      className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="text-center lg:text-left lg:max-w-xs flex-1 flex flex-col justify-between">
                    <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                      <h6 className="text-lg text-gray-900 font-semibold mb-1">
                        Alexa Kimberly
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Lead Designer
                      </span>
                    </div>
                    <p className="text-gray-500 leading-6 mb-7">
                      I’ve been lead designer for pagedone since the beginning
                      of it and enjoyed every bit.
                    </p>
                    <div className="flex items-center gap-4 justify-center lg:justify-start max-sm:bottom-0 relative">
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                      <p className="cursor-pointer text-gray-900 hover:text-white group w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 transition-all duration-500 hover:bg-indigo-600"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="slider-button-left"
              className="swiper-button-prev p-2.5 group flex justify-center items-center text-gray-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-indigo-600"
              data-carousel-prev
            ></button>
            <button
              id="slider-button-right"
              className="swiper-button-next p-2.5 group flex justify-center items-center text-gray-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-indigo-600"
              data-carousel-next
            ></button>
            <div className="swiper-pagination" />
            <div className="swiper-scrollbar" />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-8 xl:p-11">
            <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">
              Subscribe to the latest offer
            </h2>
            <p className="text-indigo-200 text-center mb-11 max-lg:max-w-2xl mx-auto">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
              <input
                type="text"
                name="email"
                className="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300 text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                placeholder="Enter your email.."
              />
              <button
                type="submit"
                className="py-2 px-5 text-sm bg-indigo-500 shadow-md rounded-full text-white font-semibold hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-md:max-w-sm max-md:mx-auto">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a
                href="javascript:;"
                className="cursor-pointer flex justify-center lg:justify-start"
              ></a>
              <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                Trusted in more than 100 countries &amp; 5 million customers.
                Have any query ?
              </p>
              <a
                href="javascript:;"
                className="py-2.5 cursor-pointer px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
              >
                Contact us
              </a>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Pagedone
              </h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Products
              </h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    Figma UI System
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    Icons Assets
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    Responsive Blocks
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Support
              </h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    Customer Support
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-gray-600 hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Subscribe
              </h4>
              <p className="text-sm text-gray-500 leading-6 mb-7">
                Subscribe to get the latest news from us
              </p>
              <a
                href="javascript:;"
                className="flex cursor-pointer items-center justify-center gap-2 border border-indigo-600 rounded-full py-3 px-6 w-fit text-sm text-indigo-600 font-semibold transition-all duration-500 hover:bg-indigo-50"
              >
                Subscribe
              </a>
            </div>
          </div>
          {/*Grid*/}
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm text-gray-500">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
                <a
                  href="javascript:;"
                  className="w-8 cursor-pointer h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-black/80 hover:bg-black"
                ></a>
                <a
                  href="javascript:;"
                  className="group cursor-pointer relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center hover:bg-gray-900 before:content[''] before:absolute before:w-full before:h-full before:-z-10"
                ></a>
                <a
                  href="javascript:;"
                  className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF] hover:bg-gray-900"
                ></a>
                <a
                  href="javascript:;"
                  className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#FF0000] hover:bg-gray-900"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
