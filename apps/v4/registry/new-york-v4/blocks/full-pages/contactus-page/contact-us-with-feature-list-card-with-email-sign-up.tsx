export default function ContactUsWithFeatureListCardWithEmailSignUp() {
  return (
    <div>
      <section>
        <div className="w-full">
          <nav className="w-auto border-b border-indigo-100 bg-white py-5 lg:w-full">
            <div className="flex items-center justify-between px-10 lg:px-14 xl:px-28">
              {/* Website Logo */}
              <a
                href="javascript:;"
                className="flex items-center pr-7 md:pr-10"
              ></a>
              {/* Primary Navbar items */}
              <div className="hidden items-center lg:flex">
                <li className="list-none pr-6">
                  <a
                    href="javascript:;"
                    className="px-3 text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="list-none pr-6">
                  <a
                    href="javascript:;"
                    className="px-3 text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
                  >
                    About us
                  </a>
                </li>
                <li className="flex items-center gap-2 pr-6">
                  <a
                    href="javascript:;"
                    className="px-3 text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
                  >
                    Products
                  </a>
                </li>
                <li className="flex items-center gap-2 pr-6">
                  <a
                    href="javascript:;"
                    className="px-3 text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
                  >
                    Features
                  </a>
                </li>
              </div>
              {/* Secondary Navbar items */}
              <div className="hidden items-center gap-5 lg:flex">
                <button className="flex h-11 w-24 cursor-pointer items-center justify-center rounded-full bg-indigo-50 text-sm leading-snug font-semibold text-indigo-600 duration-500 ease-in-out hover:bg-indigo-100">
                  {" "}
                  Login{" "}
                </button>
                <button className="flex h-11 w-24 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-sm leading-snug font-semibold text-white shadow duration-500 ease-in-out hover:bg-indigo-800">
                  {" "}
                  Sign up{" "}
                </button>
              </div>
              {/* Mobile menu button */}
              <div className="flex items-center shadow-lg lg:hidden">
                <button className="mobile-menu-button outline-none"></button>
              </div>
            </div>
            {/* mobile menu */}
            <div className="mobile-menu hidden">
              <ul className="mt-2.5 grid items-center justify-center">
                <li className="pr-6">
                  <a
                    href="javascript:;"
                    className="px-3 text-base leading-relaxed font-medium text-gray-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="pr-6">
                  <a
                    href="javascript:;"
                    className="px-3 text-base leading-relaxed font-medium text-gray-500"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <span className="flex" id="dropdown">
                    <button className="dropbtn flex items-center gap-2 px-3 text-base leading-relaxed font-medium text-gray-500">
                      Products
                    </button>
                    <div id="myDropdown" className="dropdown-content">
                      <a href="#home" className="text-gray-500">
                        Home
                      </a>
                      <a href="#about" className="text-gray-500">
                        About
                      </a>
                      <a href="#contact" className="text-gray-500">
                        Contact
                      </a>
                    </div>
                  </span>
                </li>
                <li>
                  <span className="flex" id="dropdown1">
                    <button className="dropbtn flex items-center gap-2 px-3 text-base leading-relaxed font-medium text-gray-500">
                      Features
                    </button>
                    <div id="myDropdown1" className="dropdown-content">
                      <a href="#home" className="text-gray-500">
                        Home
                      </a>
                      <a href="#about" className="text-gray-500">
                        About
                      </a>
                      <a href="#contact" className="text-gray-500">
                        Contact
                      </a>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
          <section className="w-full pt-12 lg:pt-20 xl:pt-24">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
              <div className="mb-14">
                <h6 className="mx-auto mb-5 max-w-fit rounded-full bg-indigo-50 px-3.5 py-1 text-center text-sm leading-5 font-medium text-indigo-600">
                  Contact Us
                </h6>
                <h1 className="font-manrope mb-8 text-center text-3xl leading-tight font-bold text-gray-900 lg:text-5xl">
                  We're excited to hear from you!
                </h1>
                <p className="text-center text-base leading-6 font-normal text-gray-500">
                  Join the conversation and be a part of our journey! Reach out
                  and share your thoughts.
                </p>
              </div>
              <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
                <div className="rounded-2xl bg-indigo-50 px-9 py-16">
                  <div>
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600"></div>
                    <h5 className="mb-3 text-center text-xl leading-8 font-medium text-gray-900">
                      Email Us
                    </h5>
                    <p className="mb-8 text-center text-sm leading-5 font-medium text-gray-500">
                      Write to us at email@pagedone.com. We are constantly
                      looking at our inbox.
                    </p>
                    <div className="flex items-center justify-center">
                      <button className="h-12 w-60 rounded-full bg-white text-base leading-6 font-semibold text-indigo-600 shadow-sm transition-all duration-700 hover:bg-gray-50">
                        Get In Touch
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-indigo-50 px-9 py-16">
                  <div>
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600"></div>
                    <h5 className="mb-3 text-center text-xl leading-8 font-medium text-gray-900">
                      Talk to Us
                    </h5>
                    <p className="mb-8 text-center text-sm leading-5 font-medium text-gray-500">
                      We’re 24x7 available here for you, drop us line or give us
                      a call we’ll talk.
                    </p>
                    <div className="flex items-center justify-center">
                      <button className="h-12 w-60 rounded-full bg-white text-base leading-6 font-semibold text-indigo-600 shadow-sm transition-all duration-700 hover:bg-gray-50">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-indigo-50 px-9 py-16 md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-full">
                  <div>
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600"></div>
                    <h5 className="mb-3 text-center text-xl leading-8 font-medium text-gray-900">
                      Documentation
                    </h5>
                    <p className="mb-8 text-center text-sm leading-5 font-medium text-gray-500">
                      Read our detailed documentation that covers all the
                      information you need.
                    </p>
                    <div className="flex items-center justify-center">
                      <button className="h-12 w-60 rounded-full bg-white text-base leading-6 font-semibold text-indigo-600 shadow-sm transition-all duration-700 hover:bg-gray-50">
                        Read Documentation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-14 lg:py-28">
            <div className="mx-auto w-auto w-full max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-12 lg:px-4 xl:px-24">
                <div className="col-span-12 flex w-full items-center max-lg:mx-auto max-lg:max-w-2xl lg:col-span-7">
                  <div className="w-auto lg:max-w-lg">
                    <div>
                      <h3 className="font-manrope mb-5 text-center text-3xl leading-tight font-bold text-gray-900 lg:text-left lg:text-4xl">
                        Subscribe and get a reward!
                      </h3>
                      <p className="mb-9 text-center text-base leading-6 font-normal text-gray-500 lg:mb-14 lg:text-left">
                        Join our community of subscribers and receive regular
                        updates delivered straight to your inbox. It's quick,
                        easy, and free
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-x-4 md:flex-row">
                      <input
                        type="text"
                        className="mb-5 h-12 w-full rounded-full border border-gray-300 px-4 text-lg leading-7 font-normal text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none md:mb-0 lg:w-96"
                        placeholder="Enter your mail.."
                      />
                      <div className="flex justify-center lg:justify-start">
                        <button className="h-12 w-36 rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-900">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 w-full max-w-lg max-lg:mx-auto max-lg:mt-8 md:max-w-2xl lg:col-span-5 lg:ml-auto xl:max-w-sm">
                  <img
                    src="https://pagedone.io/asset/uploads/1702279788.png"
                    alt="Contact us tailwind page"
                    className="object-cover max-lg:w-full"
                  />
                  <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1702279803.png"
                      alt="Contact us tailwind page"
                      className="object-cover max-lg:w-full"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1702279818.png"
                      alt="Contact us tailwind page"
                      className="object-cover max-lg:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="pb-14 lg:pb-28">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-16 rounded-2xl bg-gray-50 px-10 py-10 xl:flex-row xl:px-20 xl:py-16">
                <div className="w-full xl:max-w-[240px]">
                  <h2 className="font-manrope mb-4 text-center text-4xl leading-tight font-bold text-gray-900 xl:text-left">
                    {" "}
                    Our Stats{" "}
                  </h2>
                  <p className="text-center text-sm leading-5 font-normal text-gray-500 xl:text-left">
                    {" "}
                    We help you to unleash the power within your business{" "}
                  </p>
                </div>
                <div className="w-full">
                  <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 min-[500px]:max-w-2xl min-[500px]:grid-cols-2 md:max-w-3xl md:grid-cols-4 xl:max-w-full">
                    <div className="block">
                      <div className="font-manrope mb-3 text-center text-4xl leading-tight font-bold text-indigo-600 lg:text-left">
                        {" "}
                        260+{" "}
                      </div>
                      <span className="block text-center text-base leading-6 font-normal text-gray-900 lg:text-left">
                        Expert Consultants{" "}
                      </span>
                    </div>
                    <div className="block">
                      <div className="font-manrope mb-3 text-center text-4xl leading-tight font-bold text-indigo-600 lg:text-left">
                        {" "}
                        975+{" "}
                      </div>
                      <span className="block text-center text-base leading-6 font-normal text-gray-900 lg:text-left">
                        Active Clients{" "}
                      </span>
                    </div>
                    <div className="block">
                      <div className="font-manrope mb-3 text-center text-4xl leading-tight font-bold text-indigo-600 lg:text-left">
                        {" "}
                        724+{" "}
                      </div>
                      <span className="block text-center text-base leading-6 font-normal text-gray-900 lg:text-left">
                        Projects Delivered
                      </span>
                    </div>
                    <div className="block">
                      <div className="font-manrope mb-3 text-center text-4xl leading-tight font-bold text-indigo-600 lg:text-left">
                        {" "}
                        89+{" "}
                      </div>
                      <span className="block text-center text-base leading-6 font-normal text-gray-900 lg:text-left">
                        Orders in Queue
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-gray-900">
        <div className="px-8 lg:px-10 xl:px-28">
          {/*Grid*/}
          <div className="flex flex-col items-center justify-between gap-8 py-8 lg:flex-row lg:py-10 xl:py-16">
            <a href="javascript:;" className="flex justify-center"></a>
            <ul className="flex flex-col items-center gap-5 text-lg transition-all duration-500 min-[500px]:flex-row lg:gap-10 xl:gap-14">
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-400"
                >
                  Pagedone
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-400"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-400"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-400"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-white hover:text-gray-400"
                >
                  Support
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 sm:justify-center">
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
              ></a>
            </div>
          </div>
          {/*Grid*/}
          <div className="border-t border-gray-700 py-7">
            <div className="flex items-center justify-center">
              <span className="text-gray-400">
                ©pagedone 2024, All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
