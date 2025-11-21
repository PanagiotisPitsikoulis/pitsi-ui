export default function AboutUsWithImageTiles() {
  return (
    <div>
      <nav className="relative z-50 w-full border-b border-gray-200 bg-gray-50 py-5 transition-all duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a
                href="javascript:;"
                className="flex cursor-pointer items-center"
              ></a>
              <button
                data-collapse-toggle="navbar-default"
                className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden w-full lg:flex lg:pl-11" id="navbar-default">
              <ul className="mt-4 flex-col items-center lg:mt-0 lg:flex lg:flex-row">
                <li>
                  <a
                    href="javascript:;"
                    className="mb-2 block cursor-pointer text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:mr-6 lg:text-left lg:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="mb-2 block cursor-pointer text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:mr-6 lg:text-left lg:text-base"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu1"
                    className="m-auto mb-2 flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:m-0 lg:mr-6 lg:text-left lg:text-base"
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
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50"></div>
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
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu2"
                    className="m-auto mb-2 flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 md:mb-0 lg:m-0 lg:mr-6 lg:text-left lg:text-base"
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
              <div className="flex items-center justify-center lg:flex-1 lg:justify-end">
                <button className="cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-center text-sm font-semibold text-indigo-600 shadow-xs transition-all duration-500 hover:bg-indigo-100">
                  Login
                </button>
                <button className="cursor-pointer rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700 md:ml-5">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative z-0 bg-gray-50 py-14 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-manrope mx-auto mb-5 max-w-2xl text-center text-4xl font-bold text-gray-900 md:text-5xl md:leading-normal">
            Control your Finances with our
            <span className="text-indigo-600">Smart Tool </span>
          </h1>
          <p className="mx-auto mb-9 max-w-sm text-center text-base leading-7 font-normal text-gray-500">
            Invest intelligently and discover a better way to manage your entire
            wealth easily.
          </p>
        </div>
      </section>
      <section className="relative py-14 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034769.png"
                alt="About Us tailwind page"
                className="object-cover max-lg:mx-auto"
              />
            </div>
            <div className="flex items-center lg:pl-[100px]">
              <div className="data w-full">
                <h2 className="font-manrope relative mb-9 text-4xl font-bold text-black max-lg:text-center lg:text-5xl">
                  About Us
                </h2>
                <p className="mx-auto max-w-2xl text-xl leading-8 font-normal text-gray-500 max-lg:text-center">
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
      <section className="relative py-14 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="flex items-center lg:pr-24">
              <div className="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  className="mx-auto mb-9 block object-cover lg:hidden"
                />
                <h2 className="font-manrope mb-9 text-4xl font-bold text-black max-lg:text-center lg:text-5xl">
                  We are Creative Since 2005
                </h2>
                <p className="mx-auto max-w-2xl text-xl leading-8 font-normal text-gray-500 max-lg:text-center">
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
                className="hidden object-cover lg:block"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope mb-14 text-center text-4xl font-bold text-gray-900">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row lg:justify-between xl:gap-8">
            <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Company growth
                  </h4>
                  <p className="text-xs leading-5 text-gray-500">
                    Company's remarkable growth journey as we continually
                    innovate and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Company growth
                  </h4>
                  <p className="text-xs leading-5 text-gray-500">
                    Our very talented team members are the powerhouse of
                    pagedone and pillars of our success.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Projects Completed
                  </h4>
                  <p className="text-xs leading-5 text-gray-500">
                    We have accomplished more than 625 projects worldwide and we
                    are still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-14 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 rounded-full">
            <h2 className="font-manrope text-center text-4xl font-bold text-gray-900">
              What our happy user says!
            </h2>
          </div>
          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative mb-20">
                  {/*Slider Wrapper*/}
                  <div className="mx-auto max-w-max lg:max-w-4xl">
                    <p className="mb-8 text-center text-lg leading-8 text-gray-500">
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
                  <div className="mx-auto max-w-max lg:max-w-4xl">
                    <p className="mb-8 text-center text-lg leading-8 text-gray-500">
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
                  <div className="mx-auto max-w-max lg:max-w-4xl">
                    <p className="mb-8 text-center text-lg leading-8 text-gray-500">
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
                  className="swiper-slide:w-16 swiper-slide:border-indigo-600 mx-auto scale-90 rounded-full border object-cover transition-all duration-300"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="Ethan image"
                  className="swiper-slide:w-16 swiper-slide:border-indigo-600 mx-auto scale-90 rounded-full border object-cover transition-all duration-300"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349514.png"
                  alt="Olivia image"
                  className="swiper-slide:w-16 swiper-slide:border-indigo-600 mx-auto scale-90 rounded-full border object-cover transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="font-manrope mb-6 text-center text-4xl font-bold text-gray-900">
              Meet our soldier of finance
            </h2>
            <p className="text-center text-lg text-gray-500">
              We provide all the advantage that can simplify all your financial
              and banking support without any further issues
            </p>
          </div>
          {/*Slider Wrapper*/}
          <div className="swiper teamswiper pb-10">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="group flex w-full flex-wrap items-center gap-8 p-8 transition-all duration-500 lg:flex-nowrap">
                  <div className="h-64 w-full lg:w-48">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238786.png"
                      alt="image"
                      className="mx-auto h-full rounded-2xl object-cover lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="flex-1 text-center lg:max-w-xs lg:text-left">
                    <div className="mb-5 border-b border-solid border-gray-300 pb-5">
                      <h6 className="mb-1 text-lg font-semibold text-gray-900">
                        Harsh Patel
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Co-Founder &amp; CEO
                      </span>
                    </div>
                    <p className="mb-7 leading-6 text-gray-500">
                      I am the co founder of pagedone and we’ve pushed our limit
                      so far to make it successful.
                    </p>
                    <div className="flex items-center justify-center gap-4 lg:justify-start">
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group flex w-full flex-col flex-wrap items-center gap-8 p-8 transition-all duration-500 md:flex-row lg:flex-nowrap">
                  <div className="h-64 w-full max-lg:mx-auto max-lg:max-w-[204px] lg:w-48">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238869.png"
                      alt="image"
                      className="mx-auto h-full rounded-2xl object-cover lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between text-center lg:max-w-xs lg:text-left">
                    <div className="mb-5 border-b border-solid border-gray-300 pb-5">
                      <h6 className="mb-1 text-lg font-semibold text-gray-900">
                        Alexa Kimberly
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Lead Designer
                      </span>
                    </div>
                    <p className="mb-7 leading-6 text-gray-500">
                      I’ve been lead designer for pagedone since the beginning
                      of it and enjoyed every bit.
                    </p>
                    <div className="relative flex items-center justify-center gap-4 max-sm:bottom-0 lg:justify-start">
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group flex w-full flex-wrap items-center gap-8 p-8 transition-all duration-500 lg:flex-nowrap">
                  <div className="h-64 w-full lg:w-48">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238786.png"
                      alt="image"
                      className="mx-auto h-full rounded-2xl object-cover lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="flex-1 text-center lg:max-w-xs lg:text-left">
                    <div className="mb-5 border-b border-solid border-gray-300 pb-5">
                      <h6 className="mb-1 text-lg font-semibold text-gray-900">
                        Harsh Patel
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Co-Founder &amp; CEO
                      </span>
                    </div>
                    <p className="mb-7 leading-6 text-gray-500">
                      I am the co founder of pagedone and we’ve pushed our limit
                      so far to make it successful.
                    </p>
                    <div className="flex items-center justify-center gap-4 lg:justify-start">
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="group flex w-full flex-col flex-wrap items-center gap-8 p-8 transition-all duration-500 md:flex-row lg:flex-nowrap">
                  <div className="h-64 w-full max-lg:mx-auto max-lg:max-w-[204px] lg:w-48">
                    <img
                      src="https://pagedone.io/asset/uploads/1696238869.png"
                      alt="image"
                      className="mx-auto h-full rounded-2xl object-cover lg:mx-0 lg:w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between text-center lg:max-w-xs lg:text-left">
                    <div className="mb-5 border-b border-solid border-gray-300 pb-5">
                      <h6 className="mb-1 text-lg font-semibold text-gray-900">
                        Alexa Kimberly
                      </h6>
                      <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                        Lead Designer
                      </span>
                    </div>
                    <p className="mb-7 leading-6 text-gray-500">
                      I’ve been lead designer for pagedone since the beginning
                      of it and enjoyed every bit.
                    </p>
                    <div className="relative flex items-center justify-center gap-4 max-sm:bottom-0 lg:justify-start">
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                      <p className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-500 hover:bg-indigo-600 hover:text-white"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="slider-button-left"
              className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full p-2.5 text-gray-900 transition-all duration-500 hover:text-indigo-600"
              data-carousel-prev
            ></button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full p-2.5 text-gray-900 transition-all duration-500 hover:text-indigo-600"
              data-carousel-next
            ></button>
            <div className="swiper-pagination" />
            <div className="swiper-scrollbar" />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-indigo-600 p-8 xl:p-11">
            <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-white">
              Subscribe to the latest offer
            </h2>
            <p className="mx-auto mb-11 text-center text-indigo-200 max-lg:max-w-2xl">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="mx-auto flex max-w-md flex-col items-center justify-between gap-6 rounded-3xl border-gray-300 max-lg:py-3 lg:h-12 lg:flex-row lg:gap-0 lg:rounded-full lg:border lg:bg-transparent lg:p-1.5">
              <input
                type="text"
                name="email"
                className="w-full flex-1 rounded-full border-gray-300 bg-transparent px-6 py-2 text-gray-100 placeholder:text-gray-400 focus:outline-none max-lg:border max-lg:text-center lg:w-auto lg:bg-transparent lg:px-6 lg:py-2"
                placeholder="Enter your email.."
              />
              <button
                type="submit"
                className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-700"
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
          <div className="grid grid-cols-2 gap-8 py-10 max-md:mx-auto max-md:max-w-sm md:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a
                href="javascript:;"
                className="flex cursor-pointer justify-center lg:justify-start"
              ></a>
              <p className="py-8 text-center text-sm text-gray-500 lg:max-w-xs lg:text-left">
                Trusted in more than 100 countries &amp; 5 million customers.
                Have any query ?
              </p>
              <a
                href="javascript:;"
                className="mx-auto block h-9 w-fit cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-xs text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
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
              <h4 className="mb-7 text-lg font-medium text-gray-900">
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
              <h4 className="mb-7 text-lg font-medium text-gray-900">
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
              <h4 className="mb-7 text-lg font-medium text-gray-900">
                Subscribe
              </h4>
              <p className="mb-7 text-sm leading-6 text-gray-500">
                Subscribe to get the latest news from us
              </p>
              <a
                href="javascript:;"
                className="flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full border border-indigo-600 px-6 py-3 text-sm font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-50"
              >
                Subscribe
              </a>
            </div>
          </div>
          {/*Grid*/}
          <div className="border-t border-gray-200 py-7">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
              <span className="text-sm text-gray-500">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
                <a
                  href="javascript:;"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/80 transition-all duration-500 hover:bg-black"
                ></a>
                <a
                  href="javascript:;"
                  className="group before:content[''] relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-500 before:absolute before:-z-10 before:h-full before:w-full hover:bg-gray-900"
                ></a>
                <a
                  href="javascript:;"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#337FFF] transition-all duration-500 hover:bg-gray-900"
                ></a>
                <a
                  href="javascript:;"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] transition-all duration-500 hover:bg-gray-900"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
