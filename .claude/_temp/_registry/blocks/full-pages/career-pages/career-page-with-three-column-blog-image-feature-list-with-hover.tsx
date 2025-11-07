export default function CareerPageWithThreeColumnBlogImageFeatureListWithHover() {
  return (
    <section>
      <div className="w-full">
        <nav className="py-[20px] px-10 bg-indigo-600 border-b border-indigo-500">
          <div className="lg:max-w-7xl w-auto mx-auto flex justify-between items-center ">
            {/* Website Logo */}
            <a
              href="javascript:;"
              className="flex items-center md:pr-[40px] pr-[30px]"
            ></a>
            {/* Primary Navbar items */}
            <div className="hidden lg:flex items-center">
              <li className="pr-[24px] list-none">
                <a
                  href="javascript:;"
                  className="text-white hover:text-slate-200 transition-all duration-700 text-base font-medium leading-6 px-[12px]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="pr-[24px] list-none">
                <a
                  href="javascript:;"
                  className="text-white hover:text-slate-200 transition-all duration-700 text-base font-medium leading-6 px-[12px]"
                >
                  About us
                </a>
              </li>
              <li className="pr-[24px] flex items-center justify-center gap-2">
                <a
                  href="javascript:;"
                  className="text-white hover:text-slate-200 transition-all duration-700 text-base font-medium leading-6 px-[12px]"
                >
                  About us
                </a>
              </li>
              <li className="pr-[24px] flex items-center justify-center gap-2">
                <a
                  href="javascript:;"
                  className="text-white hover:text-slate-200 transition-all duration-700 text-base font-medium leading-6 px-[12px]"
                >
                  About us
                </a>
              </li>
            </div>
            {/* Secondary Navbar items */}
            <div className="hidden lg:flex items-center gap-5">
              <button className="w-[99px] h-[44px] bg-indigo-500 hover:bg-indigo-800 ease-in-out duration-500 rounded-[100px] justify-center items-center flex text-white text-sm font-semibold leading-snug cursor-pointer">
                {" "}
                Login{" "}
              </button>
              <button className="w-[99px] h-[44px] justify-center items-center flex text-white text-sm font-semibold leading-snug cursor-pointer bg-gray-900 hover:bg-gray-950 ease-in-out duration-500 rounded-[100px] shadow ">
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
            <ul className="grid items-center justify-center mt-[10px]">
              <li className="pr-[24px]">
                <a
                  href="javascript:;"
                  className="text-white text-base font-medium leading-relaxed px-[12px]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="pr-[24px]">
                <a
                  href="javascript:;"
                  className="text-white text-base font-medium leading-relaxed px-[12px]"
                >
                  About us
                </a>
              </li>
              <li>
                <span className="flex" id="dropdown">
                  <button className="dropbtn text-white text-base font-medium leading-relaxed flex items-center px-[12px] gap-2">
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
                  <button className="dropbtn text-white text-base font-medium leading-relaxed flex items-center px-[12px] gap-2">
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
        <div className="w-full bg-indigo-600 xl:py-24 lg:py-14 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="max-w-2xl mx-auto text-white text-center font-manrope lg:text-5xl text-3xl font-bold leading-tight mb-8">
              Grow with Pagedone Invested in Your Success{" "}
            </h1>
            <p className="text-white text-center text-lg font-normal leading-7">
              Pagedone flourishes through a vibrant blend of agility and
              youthful enthusiasm, utilizing our technological mastery to
              swiftly adjust to market research, changing conditions, and the
              evolving expectations of our customers.
            </p>
          </div>
        </div>
        <div className="w-full xl:py-28	lg:py-14 py-10">
          <div className="mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-gray-900 text-center font-manrope text-2xl font-bold leading-8 mb-14">
              From seasoned experts to aspiring professionals, we invite you to
              join our team and make a meaningful impact on our clients. Explore
              the wide array of positions we have available.{" "}
            </h3>
            <div className="group mb-8">
              <div className="border-2 border-indigo-50 bg-white rounded-lg py-6 px-8 group-hover:shadow-xl group-hover:border-transparent group-hover:transition-all group-hover:duration-700">
                <div className="sm:flex flex-row justify-between mb-4">
                  <div className="basis-5/6 sm:mb-0 mb-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-gray-900 text-lg font-semibold leading-6 mb-2 group-hover:text-indigo-600">
                          UX Designer
                        </h5>
                        <h6 className="text-gray-500 text-sm font-medium leading-5 group-hover:text-black">
                          New York, USA
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="py-1 px-3 bg-emerald-50 rounded-full text-emerald-600 text-sm font-medium text-center leading-5">
                          Remote
                        </h6>
                        <h6 className="py-1 px-3 bg-indigo-50 rounded-full text-indigo-600 text-center text-sm font-medium leading-5">
                          Design
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="w-24	 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 shadow-sm rounded-full text-white text-base font-semibold leading-6 lg:ml-0 sm:ml-5 ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-normal leading-5">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
            <div className="group mb-8">
              <div className="border-2 border-indigo-50 bg-white rounded-lg py-6 px-8 group-hover:shadow-xl group-hover:border-transparent group-hover:transition-all group-hover:duration-700">
                <div className="sm:flex flex-row justify-between mb-4">
                  <div className="basis-5/6 sm:mb-0 mb-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-gray-900 text-lg font-semibold leading-6 mb-2 group-hover:text-indigo-600">
                          iOS Developer
                        </h5>
                        <h6 className="text-gray-500 text-sm font-medium leading-5 group-hover:text-black">
                          Paris, France
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="py-1 px-3 bg-emerald-50 rounded-full text-emerald-600 text-sm font-medium text-center leading-5">
                          Full Time
                        </h6>
                        <h6 className="py-1 px-3 bg-indigo-50 rounded-full text-indigo-600 text-center text-sm font-medium leading-5 flex items-center">
                          Development
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="w-24	 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 shadow-sm rounded-full text-white text-base font-semibold leading-6 lg:ml-0 sm:ml-5 ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-normal leading-5">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
            <div className="group mb-8">
              <div className="border-2 border-indigo-50 bg-white rounded-lg py-6 px-8 group-hover:shadow-xl group-hover:border-transparent group-hover:transition-all group-hover:duration-700">
                <div className="sm:flex flex-row justify-between mb-4">
                  <div className="basis-5/6 sm:mb-0 mb-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-gray-900 text-lg font-semibold leading-6 mb-2 group-hover:text-indigo-600">
                          Product Designer
                        </h5>
                        <h6 className="text-gray-500 text-sm font-medium leading-5 group-hover:text-black">
                          Berlin, Germany
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="py-1 px-3 bg-emerald-50 rounded-full text-emerald-600 text-sm font-medium text-center leading-5">
                          Full Time
                        </h6>
                        <h6 className="py-1 px-3 bg-indigo-50 rounded-full text-indigo-600 text-center text-sm font-medium leading-5 flex items-center">
                          Design
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="w-24	 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 shadow-sm rounded-full text-white text-base font-semibold leading-6 lg:ml-0 sm:ml-5 ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-normal leading-5">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
            <div className="group mb-8">
              <div className="border-2 border-indigo-50 bg-white rounded-lg py-6 px-8 group-hover:shadow-xl group-hover:border-transparent group-hover:transition-all group-hover:duration-700">
                <div className="sm:flex flex-row justify-between mb-4">
                  <div className="basis-5/6 sm:mb-0 mb-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-gray-900 text-lg font-semibold leading-6 mb-2 group-hover:text-indigo-600">
                          UX Researcher
                        </h5>
                        <h6 className="text-gray-500 text-sm font-medium leading-5 group-hover:text-black">
                          Paris, France
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="py-1 px-3 bg-emerald-50 rounded-full text-emerald-600 text-sm font-medium text-center leading-5">
                          Part Time
                        </h6>
                        <h6 className="py-1 px-3 bg-indigo-50 rounded-full text-indigo-600 text-center text-sm font-medium leading-5 flex items-center">
                          Design
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="w-24	 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 shadow-sm rounded-full text-white text-base font-semibold leading-6 lg:ml-0 sm:ml-5 ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-normal leading-5">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
            <div className="group mb-8">
              <div className="border-2 border-indigo-50 bg-white rounded-lg py-6 px-8 group-hover:shadow-xl group-hover:border-transparent group-hover:transition-all group-hover:duration-700">
                <div className="sm:flex flex-row justify-between mb-4">
                  <div className="basis-5/6 sm:mb-0 mb-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-gray-900 text-lg font-semibold leading-6 mb-2 group-hover:text-indigo-600">
                          Project Manager
                        </h5>
                        <h6 className="text-gray-500 text-sm font-medium leading-5 group-hover:text-black">
                          Mumbai, India
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="py-1 px-3 bg-emerald-50 rounded-full text-emerald-600 text-sm font-medium text-center leading-5">
                          Full Time
                        </h6>
                        <h6 className="py-1 px-3 bg-indigo-50 rounded-full text-indigo-600 text-center text-sm font-medium leading-5 flex items-center">
                          Management
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="w-24	 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 shadow-sm rounded-full text-white text-base font-semibold leading-6 lg:ml-0 sm:ml-5 ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-normal leading-5">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="border-2 border-indigo-50 bg-white rounded-lg py-6 px-8 group-hover:shadow-xl group-hover:border-transparent group-hover:transition-all group-hover:duration-700">
                <div className="sm:flex flex-row justify-between mb-4">
                  <div className="basis-5/6 sm:mb-0 mb-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-gray-900 text-lg font-semibold leading-6 mb-2 group-hover:text-indigo-600">
                          Motion Designer
                        </h5>
                        <h6 className="text-gray-500 text-sm font-medium leading-5 group-hover:text-black">
                          Paris, France
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="py-1 px-3 bg-emerald-50 rounded-full text-emerald-600 text-sm font-medium text-center leading-5">
                          Remote
                        </h6>
                        <h6 className="py-1 px-3 bg-indigo-50 rounded-full text-indigo-600 text-center text-sm font-medium leading-5">
                          Design
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="w-24	 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 shadow-sm rounded-full text-white text-base font-semibold leading-6 lg:ml-0 sm:ml-5 ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-normal leading-5">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-900 xl:py-24 lg:py-14 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:mb-20 mb-14 text-center">
              <h2 className="lg:text-4xl text-3xl text-center font-bold text-white mb-7">
                Sweet paycheck and awesome benefits
              </h2>
              <p className="text-base text-center text-gray-400 leading-6 font-normal lg:max-w-2xl mx-auto">
                Embrace a supportive company culture, access cutting-edge
                technology, and enjoy work-life balance in a dynamic and
                inclusive organization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-sm mx-auto md:max-w-3xl lg:max-w-full">
              <div className="group relative w-full border border-solid border-gray-500 rounded-3xl transition-all duration-500 overflow-hidden hover:bg-indigo-600">
                <div className="block">
                  <img
                    src="https://pagedone.io/asset/uploads/1702034771.png"
                    alt="Career tailwind page"
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-9">
                  <h4 className="mb-5 text-xl text-white text-center font-semibold leading-8">
                    Cutting-edge Technology{" "}
                  </h4>
                  <p className="text-sm text-gray-400 font-normal mb-6 text-center leading-6 transition-all duration-500 group-hover:text-white break-all	">
                    We prioritize our customer experience, ensuring that every
                    interaction with our platform is seamless and intuitive.
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 justify-center text-xs leading-4 font-semibold text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="group relative w-full border border-solid border-gray-500 rounded-3xl transition-all duration-500 overflow-hidden hover:bg-indigo-600">
                <div className="block">
                  <img
                    src="https://pagedone.io/asset/uploads/1702034794.png"
                    alt="Career tailwind page"
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-9">
                  <h4 className="mb-5 text-xl text-white text-center font-semibold leading-8">
                    Recognition &amp; Rewards{" "}
                  </h4>
                  <p className="text-sm text-gray-400 font-normal mb-6 text-center leading-6 transition-all duration-500 group-hover:text-white break-all	">
                    Stand-by pro advisors to provide personalized
                    recommendations and insights for your business growth.
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 justify-center text-xs font-semibold text-white leading-4"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="group relative w-full border border-solid border-gray-500 rounded-3xl transition-all duration-500 overflow-hidden hover:bg-indigo-600 md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-full">
                <div className="block">
                  <img
                    src="https://pagedone.io/asset/uploads/1702034815.png"
                    alt="Career tailwind page"
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-9">
                  <h4 className="mb-5 text-xl text-white text-center font-semibold leading-8">
                    Modern Workspaces
                  </h4>
                  <p className="text-sm text-gray-400 font-normal mb-6 text-center leading-6 transition-all duration-500 group-hover:text-white break-all	">
                    Our sales and marketing team works together to provide you
                    with a comprehensive solution that is tailored to your
                    needs.
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 justify-center text-xs font-semibold text-white leading-4"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full xl:pt-20 lg:pt-14 pt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center lg:justify-between flex-col lg:flex-row pb-12 gap-7 lg:gap-0 border-b border-gray-200">
              <a
                href="javascript:;"
                className="flex justify-center lg:justify-start"
              ></a>
              <a
                href="javascript:;"
                className="flex items-center gap-2 py-3.5 px-7 rounded-full bg-gray-900 shadow-md text-white font-semibold hover:bg-gray-800"
              >
                Contac us
              </a>
            </div>
            <div className="flex justify-between flex-col py-14 gap-16 lg:gap-0 lg:flex-row">
              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 gap-8">
                <div className="block">
                  <h4 className="text-lg text-gray-900 font-medium mb-7 text-center lg:text-left">
                    Pagedone
                  </h4>
                  <ul className="grid gap-6 text-center lg:text-left">
                    <li>
                      <a
                        href="javascript:;"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        About
                      </a>
                    </li>
                    <li>
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
                        Pro Version
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="block">
                  <h4 className="text-lg text-gray-900 font-medium mb-7 text-center lg:text-left">
                    Products
                  </h4>
                  <ul className="grid gap-6 text-center lg:text-left">
                    <li>
                      <a
                        href="javascript:;"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Figma UI System
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Icons Assets
                      </a>
                    </li>
                    <li>
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
                <div className="block min-[400px]:col-span-2  sm:col-span-1">
                  <h4 className="text-lg text-gray-900 font-medium mb-7 text-center lg:text-left">
                    Resources
                  </h4>
                  <ul className="grid gap-6 text-center lg:text-left">
                    <li>
                      <a
                        href="javascript:;"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Quick Start
                      </a>
                    </li>
                    <li>
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
              </div>
              <div className="block lg:max-w-md">
                <h3 className="font-manrope font-semibold text-2xl text-gray-900 leading-9 mb-8 text-center lg:text-left">
                  Join the newsletter and read the new posts first
                </h3>
                <div className="lg:bg-gray-100 lg:rounded-full lg:h-16 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
                  <input
                    type="text"
                    name="email"
                    className="py-3 px-6 bg-gray-100 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none flex-1 w-full max-lg:max-w-xl max-lg:mx-auto lg:w-auto lg:py-5 lg:px-7 lg:bg-transparent"
                    placeholder="Your email here..."
                  />
                  <button
                    type="submit"
                    className="py-3.5 px-7 bg-indigo-600 shadow-md rounded-full text-white font-semibold hover:bg-indigo-700 max-lg:w-full max-lg:max-w-xl max-lg:mx-auto"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="py-9 border-t border-gray-200">
              <div className="flex items-center justify-center flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between">
                <span className="text-sm text-gray-500 ">
                  ©pagedone 2024, All rights reserved.
                </span>
                <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  ></a>
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  ></a>
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  ></a>
                  <a
                    href="javascript:;"
                    className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
