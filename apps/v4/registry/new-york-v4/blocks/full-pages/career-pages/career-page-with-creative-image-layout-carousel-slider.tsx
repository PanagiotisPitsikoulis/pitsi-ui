export default function CareerPageWithCreativeImageLayoutCarouselSlider() {
  return (
    <div>
      <nav className="w-auto border-b border-indigo-100 bg-white px-[50px] py-[20px] lg:w-full xl:px-[80px]">
        <div className="flex items-center justify-between px-[5px] xl:px-[32px]">
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
                className="px-[12px] text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="list-none pr-[24px]">
              <a
                href="javascript:;"
                className="px-[12px] text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
              >
                About us
              </a>
            </li>
            <li className="flex list-none items-center justify-center gap-2 pr-[24px]">
              <a
                href="javascript:;"
                className="px-[12px] text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
              >
                Products
              </a>
            </li>
            <li className="flex list-none items-center justify-center gap-2 pr-[24px]">
              <a
                href="javascript:;"
                className="px-[12px] text-base leading-6 font-medium text-gray-900 transition-all duration-700 hover:text-gray-600"
              >
                Features
              </a>
            </li>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden items-center gap-5 lg:flex">
            <button className="flex h-[44px] w-[99px] cursor-pointer items-center justify-center rounded-[100px] bg-indigo-50 text-sm leading-snug font-semibold text-indigo-600 duration-500 ease-in-out hover:bg-indigo-100">
              Login{" "}
            </button>
            <button className="flex h-[44px] w-[99px] cursor-pointer items-center justify-center rounded-[100px] bg-indigo-600 text-sm leading-snug font-semibold text-white shadow duration-500 ease-in-out hover:bg-indigo-800">
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
            <li className="list-none pr-[24px]">
              <a
                href="javascript:;"
                className="px-[12px] text-base leading-relaxed font-medium text-gray-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="list-none pr-[24px]">
              <a
                href="javascript:;"
                className="px-[12px] text-base leading-relaxed font-medium text-gray-500"
              >
                About us
              </a>
            </li>
            <li className="list-none">
              <span className="flex" id="dropdown">
                <button className="dropbtn flex items-center gap-2 px-[12px] text-base leading-relaxed font-medium text-gray-500">
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
            <li className="list-none">
              <span className="flex" id="dropdown1">
                <button className="dropbtn flex items-center gap-2 px-[12px] text-base leading-relaxed font-medium text-gray-500">
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
      <section className="mx-auto mb-5 w-auto px-10 pt-10 lg:px-0 lg:pt-24 xl:mb-0 xl:max-w-4xl">
        <h1 className="font-manrope mx-auto mb-8 w-auto text-center text-3xl leading-tight font-bold text-gray-900 lg:text-5xl xl:max-w-xl">
          Elevate your career with Pagedone{" "}
        </h1>
        <p className="text-center text-lg leading-7 font-normal text-gray-900">
          Pagedone thrives on a spirit of agility and youthful enthusiasm,
          leveraging our technological prowess to swiftly adapt to market
          research, conditions, and customer demands.
        </p>
      </section>
      <section className="mx-auto grid w-auto max-w-lg grid-cols-1 gap-y-8 px-10 py-10 md:max-w-3xl md:grid-cols-2 md:gap-x-12 lg:max-w-full lg:grid-cols-3 lg:gap-x-8 lg:py-16 xl:max-w-6xl xl:px-0 xl:py-40">
        <div className="grid items-center max-md:gap-4">
          <div className="pb-10 text-center max-md:order-last lg:pb-28 lg:text-left xl:pb-44">
            <h2 className="font-manrope mb-5 text-3xl leading-10 font-bold text-gray-900 lg:text-4xl">
              Work from anywhere
            </h2>
            <p className="text-lg leading-7 font-normal text-gray-500">
              Experience the freedom of our Work From Anywhere program, granting
              you the flexibility to shape your work environment.{" "}
            </p>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1702034439.png"
            alt="Career tailwind section"
            className="w-full object-cover max-md:order-1"
          />
        </div>
        <div className="flex items-center max-lg:hidden">
          <img
            src="https://pagedone.io/asset/uploads/1702034461.png"
            alt="Career tailwind section"
            className="w-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://pagedone.io/asset/uploads/1702034482.png"
            alt="Career tailwind section"
            className="w-full object-cover"
          />
          <div className="pt-10 text-center lg:pt-28 lg:text-left xl:pt-44">
            <h2 className="font-manrope mb-5 text-3xl leading-10 font-bold text-gray-900 lg:text-4xl">
              Right opportunities
            </h2>
            <p className="text-lg leading-7 font-normal text-gray-500">
              With a strong emphasis on nurturing your talents, we provide the
              platform for you to flourish and evolve alongside our
              company.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="rounded-3xl bg-indigo-50 py-10 lg:py-24">
        <h5 className="mb-2 text-center text-lg leading-7 font-medium text-indigo-600">
          Open Positions
        </h5>
        <h2 className="font-manrope mb-10 text-center text-3xl leading-tight font-bold text-gray-900 lg:mb-14 lg:text-4xl">
          Come Join Pagedone
        </h2>
        <div className="mx-5 md:mx-0">
          <div className="mx-auto w-auto max-w-xl rounded-2xl bg-white lg:max-w-3xl xl:max-w-4xl">
            <li className="group list-none">
              <a
                href="javascript:;"
                className="flex items-center justify-between border-b border-gray-200 px-5 pt-12 pb-6 group-hover:rounded-t-2xl group-hover:bg-indigo-600"
              >
                <div>
                  <h5 className="mb-2 text-lg leading-7 font-medium text-gray-900 group-hover:text-white">
                    UX Designer
                  </h5>
                  <p className="text-sm leading-5 font-medium text-indigo-600 group-hover:text-white">
                    Remote
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-white"></div>
              </a>
            </li>
            <li className="group list-none">
              <a
                href="javascript:;"
                className="flex items-center justify-between border-b border-gray-200 px-5 py-6 group-hover:bg-indigo-600"
              >
                <div>
                  <h5 className="mb-2 text-lg leading-7 font-medium text-gray-900 group-hover:text-white">
                    Motion Designer
                  </h5>
                  <p className="text-sm leading-5 font-medium text-indigo-600 group-hover:text-white">
                    New York, USA
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-white"></div>
              </a>
            </li>
            <li className="group list-none">
              <a
                href="javascript:;"
                className="flex items-center justify-between border-b border-gray-200 bg-indigo-600 px-5 py-6"
              >
                <div>
                  <h5 className="mb-2 text-lg leading-7 font-medium text-white">
                    iOS Developer
                  </h5>
                  <p className="text-sm leading-5 font-medium text-white">
                    Berlin, Germany
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white"></div>
              </a>
            </li>
            <li className="group list-none">
              <a
                href="javascript:;"
                className="flex items-center justify-between border-b border-gray-200 px-5 py-6 group-hover:bg-indigo-600"
              >
                <div>
                  <h5 className="mb-2 text-lg leading-7 font-medium text-gray-900 group-hover:text-white">
                    Product Designer
                  </h5>
                  <p className="text-sm leading-5 font-medium text-indigo-600 group-hover:text-white">
                    Denver, USA
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-white"></div>
              </a>
            </li>
            <li className="group list-none">
              <a
                href="javascript:;"
                className="flex items-center justify-between border-b border-gray-200 px-5 py-6 group-hover:bg-indigo-600"
              >
                <div>
                  <h5 className="mb-2 text-lg leading-7 font-medium text-gray-900 group-hover:text-white">
                    UX Researcher
                  </h5>
                  <p className="text-sm leading-5 font-medium text-indigo-600 group-hover:text-white">
                    Remote
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-white"></div>
              </a>
            </li>
            <li className="group list-none">
              <a
                href="javascript:;"
                className="flex items-center justify-between px-5 pt-6 pb-12 group-hover:rounded-b-2xl group-hover:bg-indigo-600"
              >
                <div>
                  <h5 className="mb-2 text-lg leading-7 font-medium text-gray-900 group-hover:text-white">
                    Project Manager
                  </h5>
                  <p className="text-sm leading-5 font-medium text-indigo-600 group-hover:text-white">
                    Mumbai, India
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-white"></div>
              </a>
            </li>
          </div>
        </div>
      </section>
      <section className="relative py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col lg:max-w-full lg:flex-row lg:items-center">
            <div className="swiper mySwiper2 w-full lg:w-1/2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1696230488.png"
                    alt="Julia image"
                    className="mx-auto object-cover lg:mx-0"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238786.png"
                    alt="Julia image"
                    className="mx-auto aspect-square max-h-[450px] rounded-2xl object-cover lg:mx-0"
                  />
                </div>
              </div>
            </div>
            <div className="swiper mySwiper w-full lg:w-1/2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="border-b border-solid border-gray-300 pb-28">
                    <h4 className="mb-7 text-center text-xl font-medium text-gray-500 lg:text-left">
                      USER STORY
                    </h4>
                    <h2 className="text-center text-5xl leading-[4rem] font-medium text-gray-900 lg:text-left">
                      Our revenue grew to{" "}
                      <span className="text-indigo-600">144%</span> more after
                      just one month of use.
                    </h2>
                  </div>
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <div className="grid gap-1">
                        <h5 className="text-xl font-medium text-gray-900">
                          Julia Roberts
                        </h5>
                        <span className="text-sm text-gray-500">
                          Product and Sales Manager
                        </span>
                      </div>
                      {/*Slider controls*/}
                      <div className="relative flex w-32 items-center gap-4">
                        <button
                          id="slider-button-left"
                          className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                          data-carousel-prev
                        ></button>
                        <button
                          id="slider-button-right"
                          className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                          data-carousel-next
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="border-b border-solid border-gray-300 pb-28">
                    <h4 className="mb-7 text-center text-xl font-medium text-gray-500 lg:text-left">
                      USER STORY
                    </h4>
                    <h2 className="text-center text-5xl leading-[4rem] font-medium text-gray-900 lg:text-left">
                      Our revenue grew to{" "}
                      <span className="text-indigo-600">180%</span> more after
                      just one month of use.
                    </h2>
                  </div>
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <div className="grid gap-1">
                        <h5 className="text-xl font-medium text-gray-900">
                          Michael Cannon
                        </h5>
                        <span className="text-sm text-gray-500">
                          Product and Sales Manager
                        </span>
                      </div>
                      {/*Slider controls*/}
                      <div className="relative flex w-32 items-center gap-4">
                        <button
                          id="slider-button-left"
                          className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                          data-carousel-prev
                        ></button>
                        <button
                          id="slider-button-right"
                          className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                          data-carousel-next
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full rounded-t-3xl bg-gray-900">
        <div className="mx-auto w-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl">
          {/*Grid*/}
          <div className="grid grid-cols-2 gap-12 pt-14 pb-20 md:grid-cols-4 md:gap-6 lg:gap-8">
            <div className="block">
              <h4 className="mb-7 text-xl font-bold text-white">Pagedone</h4>
              <ul className="text-lg transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-gray-900"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-gray-900"
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
                    className="text-gray-400 hover:text-gray-900"
                  >
                    Figma UI System
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-gray-900"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-gray-900"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-gray-900"
                  >
                    Components Library
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-400 hover:text-gray-900"
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
