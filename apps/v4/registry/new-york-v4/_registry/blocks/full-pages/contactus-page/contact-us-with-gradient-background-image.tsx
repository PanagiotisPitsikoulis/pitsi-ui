export default function ContactUsWithGradientBackgroundImage() {
  return (
    <div>
      <nav className="w-auto border-b border-indigo-100 bg-white px-12 py-5 lg:w-full xl:px-20">
        <div className="flex items-center justify-between px-1 xl:px-8">
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
            <li className="flex cursor-pointer items-center gap-2 pr-6">
              <a
                href="javascript:;"
                className="px-3 text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
              >
                Products
              </a>
            </li>
            <li className="flex cursor-pointer items-center gap-2 pr-6">
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
              Login{" "}
            </button>
            <button className="flex h-11 w-24 cursor-pointer items-center justify-center rounded-full bg-indigo-600 text-sm leading-snug font-semibold text-white shadow duration-500 ease-in-out hover:bg-indigo-800">
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
      <main>
        <section className="pt-16 lg:pt-20 xl:pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 lg:mb-14">
              <h6 className="mb-4 text-center text-lg leading-7 font-medium text-indigo-600">
                Contact Us
              </h6>
              <p className="font-manrope text-center text-3xl leading-tight font-bold text-gray-900 lg:text-5xl">
                How can we help?
              </p>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-full lg:grid-cols-2">
              <div className="relative flex h-96 items-center justify-center">
                <div className="absolute h-full w-full rounded-2xl bg-blue-700/50" />
                <img
                  src="https://pagedone.io/asset/uploads/1702292304.jpg"
                  alt="Contact us tailwind page"
                  className="h-full w-full rounded-2xl object-cover"
                />
                <div className="absolute px-12">
                  <h5 className="mb-4 text-xl leading-8 font-medium text-white">
                    Chat With Us
                  </h5>
                  <p className="mb-24 text-base leading-6 font-normal text-white">
                    We're actively seeking your feedback! Reach out and
                    contribute to our continuous improvement.
                  </p>
                  <button className="flex h-14 w-52 items-center justify-center rounded-full bg-white text-lg font-semibold text-blue-600 shadow-sm transition-all duration-700 hover:bg-gray-100">
                    Talk to us now{" "}
                  </button>
                </div>
              </div>
              <div className="relative flex h-96 items-center justify-center">
                <div className="absolute h-full w-full rounded-2xl bg-cyan-700/50" />
                <img
                  src="https://pagedone.io/asset/uploads/1702292315.jpg"
                  alt="Contact us tailwind page"
                  className="h-full w-full rounded-2xl object-cover"
                />
                <div className="absolute px-12">
                  <h5 className="mb-4 text-xl leading-8 font-medium text-white">
                    Get Support
                  </h5>
                  <p className="mb-24 text-base leading-6 font-normal text-white">
                    Our team is ready to assist you promptly and provide a
                    response that meets your needs.
                  </p>
                  <button className="flex h-14 w-52 items-center justify-center rounded-full bg-white text-lg font-semibold text-cyan-600 shadow-sm transition-all duration-700 hover:bg-gray-100">
                    Talk to support{" "}
                  </button>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full border-b border-solid border-gray-200 py-11 lg:py-16 xl:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto py-4 lg:py-9"></div>
            <h3 className="font-manrope my-4 text-center text-3xl leading-tight font-bold text-gray-900 lg:text-4xl">
              Subscribe
            </h3>
            <p className="mb-8 text-center text-lg leading-7 font-normal text-gray-500">
              Subscribe to our newsletter &amp; stay updates
            </p>
            <div className="mx-auto max-w-lg">
              <div className="relative flex flex-col items-center justify-between gap-4 text-gray-500 focus-within:text-gray-900 md:flex-row">
                <div className="pointer-events-none absolute left-0 mt-3 flex items-center pl-3 md:mt-0 lg:inset-y-0"></div>
                <input
                  type="text"
                  id="default-search"
                  className="block h-12 w-full rounded-full border border-gray-300 bg-transparent py-2.5 pr-5 pl-12 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                  placeholder="Enter Your Email"
                />
                <button
                  type="submit"
                  className="rounded-full bg-indigo-600 px-7 py-3.5 leading-6 font-semibold text-white shadow-md transition-all duration-500 hover:bg-indigo-700"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="mx-auto grid max-w-lg grid-cols-2 gap-3 py-10 sm:gap-8 md:max-w-3xl md:grid-cols-4 lg:max-w-full lg:grid-cols-6">
            <div className="col-span-full lg:col-span-2">
              <a
                href="javascript:;"
                className="flex justify-center lg:justify-start"
              ></a>
              <p className="py-8 text-center text-sm text-gray-500 lg:max-w-xs lg:text-left">
                Trusted in more than 100 countries &amp; 5 million customers.
                Have any query ?
              </p>
              <a
                href="javascript:;"
                className="mx-auto block h-9 w-fit rounded-full bg-indigo-600 px-5 py-2.5 text-xs text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
              >
                Contact us{" "}
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
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Features
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
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Figma UI System
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Components Library
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="mb-7 text-lg font-medium text-gray-900">
                Resources
              </h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    FAQs
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Quick Start
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    User Guide
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto">
              <h4 className="mb-7 text-lg font-medium text-gray-900">Blogs</h4>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    News
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Tips &amp; Tricks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    New Updates
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Grid*/}
          <div className="border-t border-gray-200 py-7">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
              <span className="text-sm text-gray-500">
                ©pagedone 2024, All rights reserved.
              </span>
              <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                ></a>
                <a
                  href="javascript:;"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
