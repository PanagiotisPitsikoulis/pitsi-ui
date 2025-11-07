export default function ContactUsWithGradientBackgroundImage() {
  return (
    <div>
      <nav className="lg:w-full w-auto py-5 px-12 xl:px-20 bg-white border-b border-indigo-100">
        <div className="flex justify-between items-center xl:px-8 px-1">
          {/* Website Logo */}
          <a
            href="javascript:;"
            className="flex items-center md:pr-10 pr-7"
          ></a>
          {/* Primary Navbar items */}
          <div className="hidden lg:flex items-center">
            <li className="pr-6 list-none">
              <a
                href="javascript:;"
                className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-3"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="pr-6 list-none">
              <a
                href="javascript:;"
                className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-3"
              >
                About us
              </a>
            </li>
            <li className="pr-6 flex items-center gap-2 cursor-pointer">
              <a
                href="javascript:;"
                className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-3"
              >
                Products
              </a>
            </li>
            <li className="pr-6 flex items-center gap-2 cursor-pointer">
              <a
                href="javascript:;"
                className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-3"
              >
                Features
              </a>
            </li>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="w-24 h-11 bg-indigo-50 hover:bg-indigo-100 ease-in-out duration-500 rounded-full justify-center items-center flex text-indigo-600 text-sm font-semibold leading-snug cursor-pointer">
              Login{" "}
            </button>
            <button className="w-24 h-11 justify-center items-center flex text-white text-sm font-semibold leading-snug cursor-pointer bg-indigo-600 hover:bg-indigo-800 ease-in-out duration-500 rounded-full shadow ">
              Sign up{" "}
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center shadow-lg">
            <button className="outline-none mobile-menu-button"></button>
          </div>
        </div>
        {/* mobile menu */}
        <div className="hidden mobile-menu">
          <ul className="grid items-center justify-center mt-2.5">
            <li className="pr-6">
              <a
                href="javascript:;"
                className="text-gray-500 text-base font-medium leading-relaxed px-3"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="pr-6">
              <a
                href="javascript:;"
                className="text-gray-500 text-base font-medium leading-relaxed px-3"
              >
                About us
              </a>
            </li>
            <li>
              <span className="flex" id="dropdown">
                <button className="dropbtn text-gray-500 text-base font-medium leading-relaxed flex items-center px-3 gap-2">
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
                <button className="dropbtn text-gray-500 text-base font-medium leading-relaxed flex items-center px-3 gap-2">
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
            <div className="lg:mb-14 mb-10">
              <h6 className="mb-4 text-center text-lg font-medium leading-7 text-indigo-600">
                Contact Us
              </h6>
              <p className="font-manrope text-center lg:text-5xl text-3xl font-bold leading-tight text-gray-900">
                How can we help?
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 max-w-2xl mx-auto lg:max-w-full">
              <div className="h-96 relative flex items-center justify-center">
                <div className="w-full h-full absolute bg-blue-700/50 rounded-2xl" />
                <img
                  src="https://pagedone.io/asset/uploads/1702292304.jpg"
                  alt="Contact us tailwind page"
                  className="w-full h-full rounded-2xl object-cover"
                />
                <div className="absolute px-12">
                  <h5 className="mb-4 text-xl font-medium leading-8 text-white">
                    Chat With Us
                  </h5>
                  <p className="mb-24 text-base font-normal leading-6 text-white">
                    We're actively seeking your feedback! Reach out and
                    contribute to our continuous improvement.
                  </p>
                  <button className="flex h-14 w-52 items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-all duration-700 text-lg font-semibold text-blue-600 shadow-sm">
                    Talk to us now{" "}
                  </button>
                </div>
              </div>
              <div className="h-96 flex items-center justify-center relative">
                <div className="w-full h-full absolute bg-cyan-700/50 rounded-2xl" />
                <img
                  src="https://pagedone.io/asset/uploads/1702292315.jpg"
                  alt="Contact us tailwind page"
                  className="w-full h-full rounded-2xl object-cover"
                />
                <div className="absolute px-12">
                  <h5 className="mb-4 text-xl font-medium leading-8 text-white">
                    Get Support
                  </h5>
                  <p className="mb-24 text-base font-normal leading-6 text-white">
                    Our team is ready to assist you promptly and provide a
                    response that meets your needs.
                  </p>
                  <button className="flex h-14 w-52 items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-all duration-700 text-lg font-semibold text-cyan-600 shadow-sm">
                    Talk to support{" "}
                  </button>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full xl:py-28 lg:py-16 py-11 border-b border-solid border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="mx-auto lg:py-9 py-4"></div>
            <h3 className="font-manrope my-4 text-center lg:text-4xl text-3xl font-bold leading-tight text-gray-900">
              Subscribe
            </h3>
            <p className="mb-8 text-center text-lg font-normal leading-7 text-gray-500">
              Subscribe to our newsletter &amp; stay updates
            </p>
            <div className="mx-auto max-w-lg">
              <div className="relative text-gray-500 focus-within:text-gray-900 flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="absolute md:mt-0 mt-3 lg:inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                <input
                  type="text"
                  id="default-search"
                  className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                  placeholder="Enter Your Email"
                />
                <button
                  type="submit"
                  className="leading-6 rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-md transition-all duration-500 hover:bg-indigo-700"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 py-10 lg:grid-cols-6 max-w-lg mx-auto md:max-w-3xl lg:max-w-full">
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
              <div className="mt-4 flex space-x-4 lg:mt-0 sm:justify-center">
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
  );
}
