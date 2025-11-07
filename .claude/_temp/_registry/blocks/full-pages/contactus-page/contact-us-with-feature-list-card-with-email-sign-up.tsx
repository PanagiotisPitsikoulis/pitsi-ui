export default function ContactUsWithFeatureListCardWithEmailSignUp() {
  return (
    <div>
      <section>
        <div className="w-full">
          <nav className="lg:w-full w-auto py-5 bg-white border-b border-indigo-100">
            <div className="flex justify-between items-center xl:px-28 lg:px-14 px-10">
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
                <li className="pr-6 flex items-center gap-2">
                  <a
                    href="javascript:;"
                    className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-3"
                  >
                    Products
                  </a>
                </li>
                <li className="pr-6 flex items-center gap-2">
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
                  {" "}
                  Login{" "}
                </button>
                <button className="w-24 h-11 justify-center items-center flex text-white text-sm font-semibold leading-snug cursor-pointer bg-indigo-600 hover:bg-indigo-800 ease-in-out duration-500 rounded-full shadow ">
                  {" "}
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
          <section className="w-full xl:pt-24 lg:pt-20 pt-12">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
              <div className="mb-14">
                <h6 className="max-w-fit mx-auto text-indigo-600 text-sm font-medium text-center leading-5 bg-indigo-50 rounded-full px-3.5 py-1 mb-5">
                  Contact Us
                </h6>
                <h1 className="text-gray-900 text-center font-manrope lg:text-5xl text-3xl font-bold leading-tight mb-8">
                  We're excited to hear from you!
                </h1>
                <p className="text-gray-500 text-center text-base font-normal leading-6">
                  Join the conversation and be a part of our journey! Reach out
                  and share your thoughts.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-lg mx-auto md:max-w-3xl lg:max-w-full">
                <div className="py-16 px-9 bg-indigo-50 rounded-2xl	">
                  <div>
                    <div className="w-16 h-16 mx-auto bg-indigo-600 rounded-2xl mb-6 flex items-center justify-center"></div>
                    <h5 className="text-gray-900 text-center text-xl font-medium leading-8 mb-3">
                      Email Us
                    </h5>
                    <p className="text-gray-500 text-center text-sm font-medium leading-5 mb-8">
                      Write to us at email@pagedone.com. We are constantly
                      looking at our inbox.
                    </p>
                    <div className="flex items-center justify-center">
                      <button className="w-60	h-12 text-indigo-600 hover:bg-gray-50 transition-all duration-700 text-base font-semibold leading-6 bg-white rounded-full shadow-sm">
                        Get In Touch
                      </button>
                    </div>
                  </div>
                </div>
                <div className="py-16 px-9 bg-indigo-50 rounded-2xl	">
                  <div>
                    <div className="w-16 h-16 mx-auto bg-indigo-600 rounded-2xl mb-6 flex items-center justify-center"></div>
                    <h5 className="text-gray-900 text-center text-xl font-medium leading-8 mb-3">
                      Talk to Us
                    </h5>
                    <p className="text-gray-500 text-center text-sm font-medium leading-5 mb-8">
                      We’re 24x7 available here for you, drop us line or give us
                      a call we’ll talk.
                    </p>
                    <div className="flex items-center justify-center">
                      <button className="w-60	h-12 text-indigo-600 text-base font-semibold leading-6 bg-white hover:bg-gray-50 transition-all duration-700 rounded-full shadow-sm">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="py-16 px-9 bg-indigo-50 rounded-2xl md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-full">
                  <div>
                    <div className="w-16 h-16 mx-auto bg-indigo-600 rounded-2xl mb-6 flex items-center justify-center"></div>
                    <h5 className="text-gray-900 text-center text-xl font-medium leading-8 mb-3">
                      Documentation
                    </h5>
                    <p className="text-gray-500 text-center text-sm font-medium leading-5 mb-8">
                      Read our detailed documentation that covers all the
                      information you need.
                    </p>
                    <div className="flex items-center justify-center">
                      <button className="w-60	h-12 text-indigo-600 text-base font-semibold leading-6 bg-white hover:bg-gray-50 transition-all duration-700 rounded-full shadow-sm">
                        Read Documentation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full lg:py-28 py-14">
            <div className="w-full max-w-7xl w-auto mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-12 lg:px-4 xl:px-24">
                <div className="flex items-center  col-span-12 lg:col-span-7 w-full max-lg:max-w-2xl max-lg:mx-auto">
                  <div className="lg:max-w-lg w-auto">
                    <div>
                      <h3 className="text-gray-900 font-manrope lg:text-4xl text-3xl font-bold lg:text-left text-center leading-tight mb-5">
                        Subscribe and get a reward!
                      </h3>
                      <p className="text-gray-500 text-base font-normal lg:text-left text-center leading-6 lg:mb-14 mb-9">
                        Join our community of subscribers and receive regular
                        updates delivered straight to your inbox. It's quick,
                        easy, and free
                      </p>
                    </div>
                    <div className="flex md:flex-row flex-col items-center gap-x-4">
                      <input
                        type="text"
                        className="lg:w-96 w-full h-12 px-4 md:mb-0 mb-5 focus:outline-none text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-300 shadow-sm"
                        placeholder="Enter your mail.."
                      />
                      <div className="flex lg:justify-start justify-center">
                        <button className="h-12 w-36 text-white text-base font-semibold leading-6 bg-indigo-600 hover:bg-indigo-900 transition-all duration-700 rounded-full shadow-sm">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-span-12 lg:col-span-5 w-full max-w-lg md:max-w-2xl max-lg:mt-8 max-lg:mx-auto xl:max-w-sm lg:ml-auto">
                  <img
                    src="https://pagedone.io/asset/uploads/1702279788.png"
                    alt="Contact us tailwind page"
                    className="max-lg:w-full object-cover"
                  />
                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1702279803.png"
                      alt="Contact us tailwind page"
                      className="max-lg:w-full object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1702279818.png"
                      alt="Contact us tailwind page"
                      className="max-lg:w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="lg:pb-28 pb-14">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
              <div className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-50 flex items-center justify-between flex-col gap-16 xl:flex-row">
                <div className="w-full xl:max-w-[240px]">
                  <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center leading-tight xl:text-left">
                    {" "}
                    Our Stats{" "}
                  </h2>
                  <p className="text-sm text-gray-500 font-normal leading-5 text-center xl:text-left">
                    {" "}
                    We help you to unleash the power within your business{" "}
                  </p>
                </div>
                <div className="w-full ">
                  <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-4 gap-8 max-w-lg mx-auto min-[500px]:max-w-2xl md:max-w-3xl xl:max-w-full">
                    <div className="block">
                      <div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 leading-tight text-center lg:text-left">
                        {" "}
                        260+{" "}
                      </div>
                      <span className="text-gray-900 text-base font-normal leading-6 text-center block lg:text-left">
                        Expert Consultants{" "}
                      </span>
                    </div>
                    <div className="block">
                      <div className="font-manrope font-bold text-4xl text-indigo-600 leading-tight mb-3 text-center lg:text-left">
                        {" "}
                        975+{" "}
                      </div>
                      <span className="text-gray-900 text-base font-normal leading-6 text-center block lg:text-left">
                        Active Clients{" "}
                      </span>
                    </div>
                    <div className="block">
                      <div className="font-manrope font-bold text-4xl leading-tight text-indigo-600 mb-3 text-center lg:text-left">
                        {" "}
                        724+{" "}
                      </div>
                      <span className="text-gray-900 text-base font-normal leading-6 text-center block lg:text-left">
                        Projects Delivered
                      </span>
                    </div>
                    <div className="block">
                      <div className="font-manrope font-bold text-4xl leading-tight text-indigo-600 mb-3 text-center lg:text-left">
                        {" "}
                        89+{" "}
                      </div>
                      <span className="text-gray-900 text-base font-normal leading-6 text-center block lg:text-left">
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
        <div className="xl:px-28 lg:px-10 px-8">
          {/*Grid*/}
          <div className="xl:py-16 lg:py-10 py-8 flex justify-between items-center flex-col gap-8 lg:flex-row">
            <a href="javascript:;" className="flex justify-center "></a>
            <ul className="text-lg  flex min-[500px]:flex-row flex-col items-center xl:gap-14 lg:gap-10 gap-5 transition-all duration-500">
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
            <div className="flex  space-x-4 sm:justify-center  ">
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
              ></a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
              ></a>
            </div>
          </div>
          {/*Grid*/}
          <div className="py-7 border-t border-gray-700">
            <div className="flex items-center justify-center">
              <span className="text-gray-400 ">
                ©pagedone 2024, All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
