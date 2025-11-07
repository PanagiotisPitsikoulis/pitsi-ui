export default function ContactUsWithFormBackground() {
  return (
    <div>
      <nav className="w-full py-5 transition-all duration-500 bg-slate-50 border-b border-solid border-indigo-100">
        <div className="xl:px-28 lg:px-14 px-10">
          <div className="w-full flex justify-between flex-col lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="javascript:;" className="flex items-center"></a>
              <button
                data-collapse-toggle="navbar-default"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden lg:flex lg:pl-11 " id="navbar-default">
              <ul className="lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row">
                <li>
                  <a
                    href="javascript:;"
                    className="mb-2 px-3 block lg:mr-6 mr-4 md:mb-0 lg:text-left text-center transition-all duration-700 text-gray-900 hover:text-gray-600 text-base font-medium leading-6"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="mb-2 xl:px-3 px-0 break-keep block lg:mr-6 mr-4 md:mb-0 lg:text-left text-center transition-all duration-700 text-gray-900 hover:text-gray-600 text-base font-medium leading-6"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu1"
                    className="flex items-center justify-between text-gray-900 hover:text-gray-600 text-base leading-6 text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 px-3 lg:mr-6 mr-4 lg:mb-0 lg:text-left m-auto lg:m-0"
                  >
                    Products
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    className="animate-fade z-10 absolute top-14 -left-80 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full hidden"
                  >
                    <div className="flex justify-between">
                      <ul
                        className="text-sm text-gray-700  w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="font-medium text-gray-900 text-base leading-6 mb-2">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="px-3 py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center "
                          >
                            <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center"></div>
                            <div className="ml-4 w-4/5">
                              <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                                {" "}
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
                                Analytics{" "}
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
                                {" "}
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
                                Security{" "}
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                To ensure your privacy all information are
                                highly encrypted{" "}
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
                                {" "}
                                Documentation
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                Organized documentation will help you save tone
                                of your time{" "}
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
                                Support{" "}
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
                    className="flex items-center justify-between text-gray-900 hover:text-gray-600 text-base leading-6 text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 px-3 lg:mr-6 mr-4 lg:mb-0 lg:text-left m-auto lg:m-0"
                  >
                    Features
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    className="dropdown-menu z-10 absolute top-14 font-normal bg-white rounded-lg shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] w-64 xl:p-8 lg:p-4 p-2 hidden"
                  >
                    <ul
                      className=" text-sm text-gray-700 "
                      aria-labelledby="dropdownLargeButton"
                    >
                      <h6 className="text-sm text-gray-500 font-medium mb-2">
                        Features
                      </h6>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Notification
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block  py-3 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="flex items-center justify-center  xl:ml-14 ml-2 gap-x-5">
                <button className="w-20 h-11 text-white text-sm font-semibold leading-5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full">
                  Login{" "}
                </button>
                <button className="w-24 h-11 rounded-full bg-gray-900 hover:bg-gray-700 transition-all duration-700 shadow-sm text-white text-sm font-semibold leading-5">
                  Sign up{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <section className="w-full xl:py-24 lg:py-20 py-12 bg-slate-50 border-b border-gray-300">
          <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16 xl:gap-x-24 gap-y-14 max-w-lg md:max-w-3xl lg:max-w-full mx-auto">
              <div>
                <h1 className="font-manrope text-gray-900 md:text-5xl text-4xl font-bold leading-tight mb-8 lg:text-left text-center">
                  Contact Us
                </h1>
                <p className="text-gray-900 text-lg font-normal leading-7 lg:text-left text-center">
                  We're here to assist you! Whether you have questions,
                  feedback, or inquiries, our team is ready to help.
                </p>
                <div className="my-12 grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-8">
                  <div className="rounded-2xl border border-gray-200 bg-white p-7 group transition-all duration-500 hover:bg-indigo-600">
                    <a
                      href="javascript:;"
                      className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white cursor-pointer"
                    ></a>
                    <h5 className="text-gray-900 text-xl font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-white">
                      Support
                    </h5>
                    <p className="text-gray-500 text-sm font-normal leading-5 transition-all duration-500 group-hover:text-white">
                      We Provide Various Methods For You To Carry Out All Transs
                      Related To Your Finances
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-7 group transition-all duration-500 hover:bg-indigo-600">
                    <a
                      href="javascript:;"
                      className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white cursor-pointer"
                    ></a>
                    <h5 className="text-gray-900 text-xl font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-white">
                      Pagedone Blog
                    </h5>
                    <p className="text-gray-500 text-sm font-normal leading-5 transition-all duration-500 group-hover:text-white">
                      We have the most up-to-date security to support the
                      security of all our customers in carrying out all transs.{" "}
                    </p>
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-12 flex lg:justify-start justify-center">
                  <div className="flex gap-x-1 border-r border-indigo-300 items-center">
                    <a
                      href="javascript:;"
                      className="text-indigo-900 text-lg font-normal leading-7 pl-2.5 pr-3.5"
                    >
                      4.9 Rating
                    </a>
                  </div>
                  <a
                    href="javascript:;"
                    className="pl-3.5 text-indigo-900 text-lg font-normal leading-7"
                  >
                    163 Reviews on{" "}
                    <span className="text-emerald-500"> Trustpilot </span>
                  </a>
                </div>
              </div>
              <form className="h-fit bg-white border border-slate-200 rounded-2xl lg:p-12 p-8 w-full max-w-lg md:max-w-3xl lg:max-w-full mx-auto">
                <div className="relative mb-8">
                  <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                    Name{" "}
                  </label>
                  <div className="relative text-gray-500 focus-within:text-gray-900">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                    <input
                      type="text"
                      id="default-search"
                      className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                      placeholder="harsh"
                    />
                  </div>
                </div>
                <div className="relative mb-8">
                  <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                    Email{" "}
                  </label>
                  <div className="relative text-gray-500 focus-within:text-gray-900">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                    <input
                      type="text"
                      id="default-search"
                      className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div className="relative mb-8">
                  <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                    Message{" "}
                  </label>
                  <div className="relative ">
                    <textarea
                      className="block w-full h-40 px-4 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
                      placeholder="Write your message"
                    />
                  </div>
                </div>
                <button className="w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-900 transition-all duration-700 shadow-sm text-white text-base font-semibold leading-6 flex items-center justify-center">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full xl:py-28 lg:py-20 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:mb-16 mb-10">
              <h6 className="text-lg text-indigo-600 font-medium text-center mb-2 leading-7">
                FAQs
              </h6>
              <h2 className="lg:text-4xl text-3xl font-manrope text-center font-bold text-gray-900 leading-tight ">
                {" "}
                Frequently asked questions{" "}
              </h2>
            </div>
            <div className="accordion-group w-full max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
              <div
                className="accordion p-6 border-b border-solid bg-gray-50 border-gray-200 transition-all duration-500 active:rounded-xl active:bg-gray-50 active:border-transparent"
                id="basic-heading-one-general"
              >
                <button
                  className="accordion-toggle group  inline-flex items-center justify-between text-lg text-gray-900 font-medium leading-7 w-full transition duration-500 text-left lg:text-lg hover:text-gray-900 accordion-active:text-gray-900"
                  aria-controls="basic-collapse-one-general"
                >
                  <h5> How can I reset my password? </h5>
                </button>
                <div
                  id="basic-collapse-one-general"
                  className="accordion-content w-full  px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                  aria-labelledby="basic-heading-one-general"
                >
                  <p className="text-base text-gray-600 font-normal leading-6">
                    To reset your password, go to the login page and click on
                    the "Forgot password" link. Enter the email address
                    associated with your account, and you will receive an email
                    with instructions on how to reset your password. Follow the
                    instructions in the email to create a new password.
                  </p>
                </div>
              </div>
              <div
                className="accordion p-6 border-b border-solid border-gray-200 transition-all duration-500 active:rounded-xl active:bg-gray-50 active:border-transparent"
                id="basic-heading-two-with-arrow"
              >
                <button
                  className="accordion-toggle group  inline-flex items-center justify-between text-base leading-8 text-gray-500 w-full transition duration-500 text-left lg:text-lg hover:text-gray-900 accordion-active:text-gray-900"
                  aria-controls="basic-collapse-two-with-arrow"
                >
                  <h5> How do I change my privacy settings? </h5>
                </button>
                <div
                  id="basic-collapse-two-with-arrow"
                  className="accordion-content w-full hidden px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                  aria-labelledby="basic-heading-two-with-arrow"
                >
                  <p className="text-base text-gray-600 leading-6">
                    To reset your password, go to the login page and click on
                    the "Forgot password" link. Enter the email address
                    associated with your account, and you will receive an email
                    with instructions on how to reset your password. Follow the
                    instructions in the email to create a new password.
                  </p>
                </div>
              </div>
              <div
                className="accordion p-6 border-b border-solid border-gray-200 transition-all duration-500 active:rounded-xl active:bg-gray-50 active:border-transparent"
                id="basic-heading-three-with-arrow"
              >
                <button
                  className="accordion-toggle group  inline-flex items-center justify-between text-base lg:text-lg leading-8 text-gray-500 w-full transition duration-500 text-left hover:text-gray-900 accordion-active:text-gray-900"
                  aria-controls="basic-collapse-three-with-arrow"
                >
                  <h5> What is the payment process? </h5>
                </button>
                <div
                  id="basic-collapse-three-with-arrow"
                  className="accordion-content w-full hidden px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                  aria-labelledby="basic-heading-three-with-arrow"
                >
                  <p className="text-base text-gray-600 leading-6">
                    To reset your password, go to the login page and click on
                    the "Forgot password" link. Enter the email address
                    associated with your account, and you will receive an email
                    with instructions on how to reset your password. Follow the
                    instructions in the email to create a new password.
                  </p>
                </div>
              </div>
              <div
                className="accordion p-6 transition-all duration-500 active:rounded-xl active:bg-gray-50"
                id="basic-heading-four-with-arrow"
              >
                <button
                  className="accordion-toggle group  inline-flex items-center justify-between text-base lg:text-lg leading-8 text-gray-500 w-full transition duration-500 text-left hover:text-gray-900 accordion-active:text-gray-900"
                  aria-controls="basic-collapse-four-with-arrow"
                >
                  <h5> How do I find my purchase history? </h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow"
                  className="accordion-content w-full hidden px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                  aria-labelledby="basic-heading-four-with-arrow"
                >
                  <p className="text-base text-gray-600 leading-6">
                    To reset your password, go to the login page and click on
                    the "Forgot password" link. Enter the email address
                    associated with your account, and you will receive an email
                    with instructions on how to reset your password. Follow the
                    instructions in the email to create a new password.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-900">
        <div className="w-full max-w-7xl px-5 lg:px-8 mx-auto">
          {/*Grid*/}
          <div className="grid grid-cols-2 min-[810px]:grid-cols-4  lg:gap-8 gap-3 pt-14 pb-20 max-w-lg mx-auto min-[810px]:max-w-full">
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7">Pagedone</h4>
              <ul className="text-lg  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Pro Version
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7">Products</h4>
              <ul className="text-lg  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Figma UI System
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Components Library
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7">Resources</h4>
              <ul className="text-lg  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    FAQs
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Quick Start
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    User Guide
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7">Support</h4>
              <ul className="text-lg  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Customer Support
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Cookies
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    License
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Grid*/}
          <div className="py-7 border-t border-gray-700 ">
            <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
              <a href="javascript:;" className="flex justify-center "></a>
              <span className="text-gray-400  block">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
