export default function ContactUsWithFormBackground() {
  return (
    <div>
      <nav className="w-full border-b border-solid border-indigo-100 bg-slate-50 py-5 transition-all duration-500">
        <div className="px-10 lg:px-14 xl:px-28">
          <div className="flex w-full flex-col justify-between lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="javascript:;" className="flex items-center"></a>
              <button
                data-collapse-toggle="navbar-default"
                className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden lg:flex lg:pl-11" id="navbar-default">
              <ul className="mt-4 flex-col items-center lg:mt-0 lg:flex lg:flex-row">
                <li>
                  <a
                    href="javascript:;"
                    className="mr-4 mb-2 block px-3 text-center text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600 md:mb-0 lg:mr-6 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="mr-4 mb-2 block px-0 text-center text-base leading-6 font-medium break-keep text-gray-900 transition-all duration-700 hover:text-gray-600 md:mb-0 lg:mr-6 lg:text-left xl:px-3"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-dropdown-toggle="menu1"
                    className="hover:text-prime-blue-700 m-auto mr-4 mb-2 flex items-center justify-between px-3 text-center text-base leading-6 font-medium text-gray-900 transition-all duration-500 hover:text-gray-600 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
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
                        <h6 className="mb-2 text-base leading-6 font-medium text-gray-900">
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50"></div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
                                Analytics{" "}
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50"></div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50"></div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                    className="hover:text-prime-blue-700 m-auto mr-4 mb-2 flex items-center justify-between px-3 text-center text-base leading-6 font-medium text-gray-900 transition-all duration-500 hover:text-gray-600 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left lg:text-base"
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
              <div className="ml-2 flex items-center justify-center gap-x-5 xl:ml-14">
                <button className="h-11 w-20 rounded-full bg-indigo-600 text-sm leading-5 font-semibold text-white transition-all duration-700 hover:bg-indigo-800">
                  Login{" "}
                </button>
                <button className="h-11 w-24 rounded-full bg-gray-900 text-sm leading-5 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-gray-700">
                  Sign up{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <section className="w-full border-b border-gray-300 bg-slate-50 py-12 lg:py-20 xl:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-16 gap-y-14 md:max-w-3xl lg:max-w-full lg:grid-cols-2 xl:gap-x-24">
              <div>
                <h1 className="font-manrope mb-8 text-center text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-left">
                  Contact Us
                </h1>
                <p className="text-center text-lg leading-7 font-normal text-gray-900 lg:text-left">
                  We're here to assist you! Whether you have questions,
                  feedback, or inquiries, our team is ready to help.
                </p>
                <div className="my-12 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8">
                  <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-500 hover:bg-indigo-600">
                    <a
                      href="javascript:;"
                      className="mb-5 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-indigo-600 transition-all duration-500 group-hover:bg-white"
                    ></a>
                    <h5 className="mb-3 text-xl leading-8 font-semibold text-gray-900 transition-all duration-500 group-hover:text-white">
                      Support
                    </h5>
                    <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                      We Provide Various Methods For You To Carry Out All Transs
                      Related To Your Finances
                    </p>
                  </div>
                  <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-500 hover:bg-indigo-600">
                    <a
                      href="javascript:;"
                      className="mb-5 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-indigo-600 transition-all duration-500 group-hover:bg-white"
                    ></a>
                    <h5 className="mb-3 text-xl leading-8 font-semibold text-gray-900 transition-all duration-500 group-hover:text-white">
                      Pagedone Blog
                    </h5>
                    <p className="text-sm leading-5 font-normal text-gray-500 transition-all duration-500 group-hover:text-white">
                      We have the most up-to-date security to support the
                      security of all our customers in carrying out all
                      transs.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center border-t border-slate-200 pt-12 lg:justify-start">
                  <div className="flex items-center gap-x-1 border-r border-indigo-300">
                    <a
                      href="javascript:;"
                      className="pr-3.5 pl-2.5 text-lg leading-7 font-normal text-indigo-900"
                    >
                      4.9 Rating
                    </a>
                  </div>
                  <a
                    href="javascript:;"
                    className="pl-3.5 text-lg leading-7 font-normal text-indigo-900"
                  >
                    163 Reviews on{" "}
                    <span className="text-emerald-500"> Trustpilot </span>
                  </a>
                </div>
              </div>
              <form className="mx-auto h-fit w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 md:max-w-3xl lg:max-w-full lg:p-12">
                <div className="relative mb-8">
                  <label className="mb-2 flex items-center text-base leading-6 font-medium text-gray-600">
                    Name{" "}
                  </label>
                  <div className="relative text-gray-500 focus-within:text-gray-900">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block h-12 w-full rounded-full border border-gray-300 bg-transparent py-2.5 pr-5 pl-12 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="harsh"
                    />
                  </div>
                </div>
                <div className="relative mb-8">
                  <label className="mb-2 flex items-center text-base leading-6 font-medium text-gray-600">
                    Email{" "}
                  </label>
                  <div className="relative text-gray-500 focus-within:text-gray-900">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block h-12 w-full rounded-full border border-gray-300 bg-transparent py-2.5 pr-5 pl-12 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div className="relative mb-8">
                  <label className="mb-2 flex items-center text-base leading-6 font-medium text-gray-600">
                    Message{" "}
                  </label>
                  <div className="relative">
                    <textarea
                      className="block h-40 w-full resize-none rounded-2xl border border-gray-300 bg-transparent px-4 py-2.5 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="Write your message"
                    />
                  </div>
                </div>
                <button className="flex h-12 w-full items-center justify-center rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-900">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 lg:py-20 xl:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 lg:mb-16">
              <h6 className="mb-2 text-center text-lg leading-7 font-medium text-indigo-600">
                FAQs
              </h6>
              <h2 className="font-manrope text-center text-3xl leading-tight font-bold text-gray-900 lg:text-4xl">
                {" "}
                Frequently asked questions{" "}
              </h2>
            </div>
            <div className="accordion-group mx-auto w-full max-w-lg md:max-w-3xl lg:max-w-5xl">
              <div
                className="accordion border-b border-solid border-gray-200 bg-gray-50 p-6 transition-all duration-500 active:rounded-xl active:border-transparent active:bg-gray-50"
                id="basic-heading-one-general"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-left text-lg leading-7 font-medium text-gray-900 transition duration-500 hover:text-gray-900 lg:text-lg"
                  aria-controls="basic-collapse-one-general"
                >
                  <h5> How can I reset my password? </h5>
                </button>
                <div
                  id="basic-collapse-one-general"
                  className="accordion-content mt-3 w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                  aria-labelledby="basic-heading-one-general"
                >
                  <p className="text-base leading-6 font-normal text-gray-600">
                    To reset your password, go to the login page and click on
                    the "Forgot password" link. Enter the email address
                    associated with your account, and you will receive an email
                    with instructions on how to reset your password. Follow the
                    instructions in the email to create a new password.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-solid border-gray-200 p-6 transition-all duration-500 active:rounded-xl active:border-transparent active:bg-gray-50"
                id="basic-heading-two-with-arrow"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-left text-base leading-8 text-gray-500 transition duration-500 hover:text-gray-900 lg:text-lg"
                  aria-controls="basic-collapse-two-with-arrow"
                >
                  <h5> How do I change my privacy settings? </h5>
                </button>
                <div
                  id="basic-collapse-two-with-arrow"
                  className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                  aria-labelledby="basic-heading-two-with-arrow"
                >
                  <p className="text-base leading-6 text-gray-600">
                    To reset your password, go to the login page and click on
                    the "Forgot password" link. Enter the email address
                    associated with your account, and you will receive an email
                    with instructions on how to reset your password. Follow the
                    instructions in the email to create a new password.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-solid border-gray-200 p-6 transition-all duration-500 active:rounded-xl active:border-transparent active:bg-gray-50"
                id="basic-heading-three-with-arrow"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-left text-base leading-8 text-gray-500 transition duration-500 hover:text-gray-900 lg:text-lg"
                  aria-controls="basic-collapse-three-with-arrow"
                >
                  <h5> What is the payment process? </h5>
                </button>
                <div
                  id="basic-collapse-three-with-arrow"
                  className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                  aria-labelledby="basic-heading-three-with-arrow"
                >
                  <p className="text-base leading-6 text-gray-600">
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
                  className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-left text-base leading-8 text-gray-500 transition duration-500 hover:text-gray-900 lg:text-lg"
                  aria-controls="basic-collapse-four-with-arrow"
                >
                  <h5> How do I find my purchase history? </h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow"
                  className="accordion-content mt-3 hidden w-full overflow-hidden px-0 pr-4 transition-[height] duration-300"
                  aria-labelledby="basic-heading-four-with-arrow"
                >
                  <p className="text-base leading-6 text-gray-600">
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
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          {/*Grid*/}
          <div className="mx-auto grid max-w-lg grid-cols-2 gap-3 pt-14 pb-20 min-[810px]:max-w-full min-[810px]:grid-cols-4 lg:gap-8">
            <div className="block">
              <h4 className="mb-7 text-xl font-bold text-white">Pagedone</h4>
              <ul className="text-lg transition-all duration-500">
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
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Pro Version
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="mb-7 text-xl font-bold text-white">Products</h4>
              <ul className="text-lg transition-all duration-500">
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
                    className="text-gray-400 hover:text-white"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Components Library
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="mb-7 text-xl font-bold text-white">Resources</h4>
              <ul className="text-lg transition-all duration-500">
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
                    className="text-gray-400 hover:text-white"
                  >
                    Quick Start
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    User Guide
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Plugin Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="block">
              <h4 className="mb-7 text-xl font-bold text-white">Support</h4>
              <ul className="text-lg transition-all duration-500">
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
                    className="text-gray-400 hover:text-white"
                  >
                    Cookies
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    License
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Grid*/}
          <div className="border-t border-gray-700 py-7">
            <div className="flex flex-col items-center justify-center space-y-8 lg:flex-row lg:justify-between lg:space-y-0">
              <a href="javascript:;" className="flex justify-center"></a>
              <span className="block text-gray-400">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 hover:border-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 hover:border-indigo-600"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
