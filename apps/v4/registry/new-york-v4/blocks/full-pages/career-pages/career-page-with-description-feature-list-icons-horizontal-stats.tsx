export default function CareerPageWithDescriptionFeatureListIconsHorizontalStats() {
  return (
    <section>
      <div className="w-full">
        <nav className="border-b border-indigo-500 bg-indigo-600 px-10 py-[20px]">
          <div className="mx-auto flex w-auto items-center justify-between lg:max-w-7xl">
            {/* Website Logo */}
            <a
              href="javascript:;"
              className="flex items-center pr-[30px] md:pr-[40px]"
            ></a>
            {/* Primary Navbar items */}
            <div className="hidden items-center lg:flex">
              <li className="list-none pr-[24px]">
                <a
                  href="javascript:;"
                  className="px-[12px] text-base leading-6 font-medium text-white transition-all duration-700 hover:text-slate-200"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="list-none pr-[24px]">
                <a
                  href="javascript:;"
                  className="px-[12px] text-base leading-6 font-medium text-white transition-all duration-700 hover:text-slate-200"
                >
                  About us
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 pr-[24px]">
                <a
                  href="javascript:;"
                  className="px-[12px] text-base leading-6 font-medium text-white transition-all duration-700 hover:text-slate-200"
                >
                  About us
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 pr-[24px]">
                <a
                  href="javascript:;"
                  className="px-[12px] text-base leading-6 font-medium text-white transition-all duration-700 hover:text-slate-200"
                >
                  About us
                </a>
              </li>
            </div>
            {/* Secondary Navbar items */}
            <div className="hidden items-center gap-5 lg:flex">
              <button className="flex h-[44px] w-[99px] cursor-pointer items-center justify-center rounded-[100px] bg-indigo-500 text-sm leading-snug font-semibold text-white duration-500 ease-in-out hover:bg-indigo-800">
                {" "}
                Login{" "}
              </button>
              <button className="flex h-[44px] w-[99px] cursor-pointer items-center justify-center rounded-[100px] bg-gray-900 text-sm leading-snug font-semibold text-white shadow duration-500 ease-in-out hover:bg-gray-950">
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
            <ul className="mt-[10px] grid items-center justify-center">
              <li className="pr-[24px]">
                <a
                  href="javascript:;"
                  className="px-[12px] text-base leading-relaxed font-medium text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="pr-[24px]">
                <a
                  href="javascript:;"
                  className="px-[12px] text-base leading-relaxed font-medium text-white"
                >
                  About us
                </a>
              </li>
              <li>
                <span className="flex" id="dropdown">
                  <button className="dropbtn flex items-center gap-2 px-[12px] text-base leading-relaxed font-medium text-white">
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
                  <button className="dropbtn flex items-center gap-2 px-[12px] text-base leading-relaxed font-medium text-white">
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
        <div className="w-full bg-indigo-600 py-10 lg:py-14 xl:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-manrope mx-auto mb-8 max-w-2xl text-center text-3xl leading-tight font-bold text-white lg:text-5xl">
              Grow with Pagedone Invested in Your Success{" "}
            </h1>
            <p className="text-center text-lg leading-7 font-normal text-white">
              Pagedone flourishes through a vibrant blend of agility and
              youthful enthusiasm, utilizing our technological mastery to
              swiftly adjust to market research, changing conditions, and the
              evolving expectations of our customers.
            </p>
          </div>
        </div>
        <div className="w-full py-10 lg:py-14 xl:py-28">
          <div className="mx-auto max-w-md px-4 sm:max-w-xl sm:px-6 md:max-w-3xl lg:max-w-5xl lg:px-8">
            <h3 className="font-manrope mb-14 text-center text-2xl leading-8 font-bold text-gray-900">
              From seasoned experts to aspiring professionals, we invite you to
              join our team and make a meaningful impact on our clients. Explore
              the wide array of positions we have available.{" "}
            </h3>
            <div className="group mb-8">
              <div className="rounded-lg border-2 border-indigo-50 bg-white px-8 py-6 group-hover:border-transparent group-hover:shadow-xl group-hover:transition-all group-hover:duration-700">
                <div className="mb-4 flex-row justify-between sm:flex">
                  <div className="mb-5 basis-5/6 sm:mb-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="mb-2 text-lg leading-6 font-semibold text-gray-900 group-hover:text-indigo-600">
                          UX Designer
                        </h5>
                        <h6 className="text-sm leading-5 font-medium text-gray-500 group-hover:text-black">
                          New York, USA
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="rounded-full bg-emerald-50 px-3 py-1 text-center text-sm leading-5 font-medium text-emerald-600">
                          Remote
                        </h6>
                        <h6 className="rounded-full bg-indigo-50 px-3 py-1 text-center text-sm leading-5 font-medium text-indigo-600">
                          Design
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="ml-0 h-12 w-24 rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800 sm:ml-5 lg:ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-sm leading-5 font-normal text-gray-500">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
            <div className="group mb-8">
              <div className="rounded-lg border-2 border-indigo-50 bg-white px-8 py-6 group-hover:border-transparent group-hover:shadow-xl group-hover:transition-all group-hover:duration-700">
                <div className="mb-4 flex-row justify-between sm:flex">
                  <div className="mb-5 basis-5/6 sm:mb-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="mb-2 text-lg leading-6 font-semibold text-gray-900 group-hover:text-indigo-600">
                          iOS Developer
                        </h5>
                        <h6 className="text-sm leading-5 font-medium text-gray-500 group-hover:text-black">
                          Paris, France
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="rounded-full bg-emerald-50 px-3 py-1 text-center text-sm leading-5 font-medium text-emerald-600">
                          Full Time
                        </h6>
                        <h6 className="flex items-center rounded-full bg-indigo-50 px-3 py-1 text-center text-sm leading-5 font-medium text-indigo-600">
                          Development
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="ml-0 h-12 w-24 rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800 sm:ml-5 lg:ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-sm leading-5 font-normal text-gray-500">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
            <div className="group mb-8">
              <div className="rounded-lg border-2 border-indigo-50 bg-white px-8 py-6 group-hover:border-transparent group-hover:shadow-xl group-hover:transition-all group-hover:duration-700">
                <div className="mb-4 flex-row justify-between sm:flex">
                  <div className="mb-5 basis-5/6 sm:mb-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="mb-2 text-lg leading-6 font-semibold text-gray-900 group-hover:text-indigo-600">
                          Product Designer
                        </h5>
                        <h6 className="text-sm leading-5 font-medium text-gray-500 group-hover:text-black">
                          Berlin, Germany
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="rounded-full bg-emerald-50 px-3 py-1 text-center text-sm leading-5 font-medium text-emerald-600">
                          Full Time
                        </h6>
                        <h6 className="flex items-center rounded-full bg-indigo-50 px-3 py-1 text-center text-sm leading-5 font-medium text-indigo-600">
                          Design
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="ml-0 h-12 w-24 rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800 sm:ml-5 lg:ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-sm leading-5 font-normal text-gray-500">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
            <div className="group mb-8">
              <div className="rounded-lg border-2 border-indigo-50 bg-white px-8 py-6 group-hover:border-transparent group-hover:shadow-xl group-hover:transition-all group-hover:duration-700">
                <div className="mb-4 flex-row justify-between sm:flex">
                  <div className="mb-5 basis-5/6 sm:mb-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="mb-2 text-lg leading-6 font-semibold text-gray-900 group-hover:text-indigo-600">
                          UX Researcher
                        </h5>
                        <h6 className="text-sm leading-5 font-medium text-gray-500 group-hover:text-black">
                          Paris, France
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="rounded-full bg-emerald-50 px-3 py-1 text-center text-sm leading-5 font-medium text-emerald-600">
                          Part Time
                        </h6>
                        <h6 className="flex items-center rounded-full bg-indigo-50 px-3 py-1 text-center text-sm leading-5 font-medium text-indigo-600">
                          Design
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="ml-0 h-12 w-24 rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800 sm:ml-5 lg:ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-sm leading-5 font-normal text-gray-500">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
            <div className="group mb-8">
              <div className="rounded-lg border-2 border-indigo-50 bg-white px-8 py-6 group-hover:border-transparent group-hover:shadow-xl group-hover:transition-all group-hover:duration-700">
                <div className="mb-4 flex-row justify-between sm:flex">
                  <div className="mb-5 basis-5/6 sm:mb-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="mb-2 text-lg leading-6 font-semibold text-gray-900 group-hover:text-indigo-600">
                          Project Manager
                        </h5>
                        <h6 className="text-sm leading-5 font-medium text-gray-500 group-hover:text-black">
                          Mumbai, India
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="rounded-full bg-emerald-50 px-3 py-1 text-center text-sm leading-5 font-medium text-emerald-600">
                          Full Time
                        </h6>
                        <h6 className="flex items-center rounded-full bg-indigo-50 px-3 py-1 text-center text-sm leading-5 font-medium text-indigo-600">
                          Management
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="ml-0 h-12 w-24 rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800 sm:ml-5 lg:ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-sm leading-5 font-normal text-gray-500">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="rounded-lg border-2 border-indigo-50 bg-white px-8 py-6 group-hover:border-transparent group-hover:shadow-xl group-hover:transition-all group-hover:duration-700">
                <div className="mb-4 flex-row justify-between sm:flex">
                  <div className="mb-5 basis-5/6 sm:mb-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="mb-2 text-lg leading-6 font-semibold text-gray-900 group-hover:text-indigo-600">
                          Motion Designer
                        </h5>
                        <h6 className="text-sm leading-5 font-medium text-gray-500 group-hover:text-black">
                          Paris, France
                        </h6>
                      </div>
                      <div className="flex gap-x-3">
                        <h6 className="rounded-full bg-emerald-50 px-3 py-1 text-center text-sm leading-5 font-medium text-emerald-600">
                          Remote
                        </h6>
                        <h6 className="rounded-full bg-indigo-50 px-3 py-1 text-center text-sm leading-5 font-medium text-indigo-600">
                          Design
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/12">
                    <button className="ml-0 h-12 w-24 rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800 sm:ml-5 lg:ml-0">
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-sm leading-5 font-normal text-gray-500">
                  We are seeking a skilled and motivated iOS Developer to join
                  our team. As an iOS Developer, you will be responsible for
                  developing and maintaining high-quality mobile applications
                  for the iOS platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-900 py-10 lg:py-14 xl:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center lg:mb-20">
              <h2 className="mb-7 text-center text-3xl font-bold text-white lg:text-4xl">
                Sweet paycheck and awesome benefits
              </h2>
              <p className="mx-auto text-center text-base leading-6 font-normal text-gray-400 lg:max-w-2xl">
                Embrace a supportive company culture, access cutting-edge
                technology, and enjoy work-life balance in a dynamic and
                inclusive organization.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
              <div className="group relative w-full overflow-hidden rounded-3xl border border-solid border-gray-500 transition-all duration-500 hover:bg-indigo-600">
                <div className="block">
                  <img
                    src="https://pagedone.io/asset/uploads/1702034771.png"
                    alt="Career tailwind page"
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-9">
                  <h4 className="mb-5 text-center text-xl leading-8 font-semibold text-white">
                    Cutting-edge Technology{" "}
                  </h4>
                  <p className="mb-6 text-center text-sm leading-6 font-normal break-all text-gray-400 transition-all duration-500 group-hover:text-white">
                    We prioritize our customer experience, ensuring that every
                    interaction with our platform is seamless and intuitive.
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center justify-center gap-2 text-xs leading-4 font-semibold text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="group relative w-full overflow-hidden rounded-3xl border border-solid border-gray-500 transition-all duration-500 hover:bg-indigo-600">
                <div className="block">
                  <img
                    src="https://pagedone.io/asset/uploads/1702034794.png"
                    alt="Career tailwind page"
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-9">
                  <h4 className="mb-5 text-center text-xl leading-8 font-semibold text-white">
                    Recognition &amp; Rewards{" "}
                  </h4>
                  <p className="mb-6 text-center text-sm leading-6 font-normal break-all text-gray-400 transition-all duration-500 group-hover:text-white">
                    Stand-by pro advisors to provide personalized
                    recommendations and insights for your business growth.
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center justify-center gap-2 text-xs leading-4 font-semibold text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="group relative w-full overflow-hidden rounded-3xl border border-solid border-gray-500 transition-all duration-500 hover:bg-indigo-600 md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-full">
                <div className="block">
                  <img
                    src="https://pagedone.io/asset/uploads/1702034815.png"
                    alt="Career tailwind page"
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-9">
                  <h4 className="mb-5 text-center text-xl leading-8 font-semibold text-white">
                    Modern Workspaces
                  </h4>
                  <p className="mb-6 text-center text-sm leading-6 font-normal break-all text-gray-400 transition-all duration-500 group-hover:text-white">
                    Our sales and marketing team works together to provide you
                    with a comprehensive solution that is tailored to your
                    needs.
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center justify-center gap-2 text-xs leading-4 font-semibold text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full pt-10 lg:pt-14 xl:pt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-7 border-b border-gray-200 pb-12 lg:flex-row lg:justify-between lg:gap-0">
              <a
                href="javascript:;"
                className="flex justify-center lg:justify-start"
              ></a>
              <a
                href="javascript:;"
                className="flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 font-semibold text-white shadow-md hover:bg-gray-800"
              >
                Contac us
              </a>
            </div>
            <div className="flex flex-col justify-between gap-16 py-14 lg:flex-row lg:gap-0">
              <div className="grid grid-cols-1 gap-8 min-[400px]:grid-cols-2 sm:grid-cols-3">
                <div className="block">
                  <h4 className="mb-7 text-center text-lg font-medium text-gray-900 lg:text-left">
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
                  <h4 className="mb-7 text-center text-lg font-medium text-gray-900 lg:text-left">
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
                <div className="block min-[400px]:col-span-2 sm:col-span-1">
                  <h4 className="mb-7 text-center text-lg font-medium text-gray-900 lg:text-left">
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
                <h3 className="font-manrope mb-8 text-center text-2xl leading-9 font-semibold text-gray-900 lg:text-left">
                  Join the newsletter and read the new posts first
                </h3>
                <div className="flex flex-col items-center justify-between gap-6 lg:h-16 lg:flex-row lg:gap-0 lg:rounded-full lg:bg-gray-100 lg:p-1.5">
                  <input
                    type="text"
                    name="email"
                    className="w-full flex-1 rounded-full bg-gray-100 px-6 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none max-lg:mx-auto max-lg:max-w-xl lg:w-auto lg:bg-transparent lg:px-7 lg:py-5"
                    placeholder="Your email here..."
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-md hover:bg-indigo-700 max-lg:mx-auto max-lg:w-full max-lg:max-w-xl"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 py-9">
              <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:gap-0">
                <span className="text-sm text-gray-500">
                  ©pagedone 2024, All rights reserved.
                </span>
                <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
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
    </section>
  )
}
