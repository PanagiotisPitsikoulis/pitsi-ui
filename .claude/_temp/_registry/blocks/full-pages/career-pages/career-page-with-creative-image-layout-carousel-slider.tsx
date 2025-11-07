export default function CareerPageWithCreativeImageLayoutCarouselSlider() {
  return (
    <div>
      <nav className="lg:w-full w-auto py-[20px] px-[50px] xl:px-[80px] bg-white border-b border-indigo-100">
        <div className="flex justify-between items-center xl:px-[32px] px-[5px]">
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
                className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-[12px]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="pr-[24px] list-none">
              <a
                href="javascript:;"
                className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-[12px]"
              >
                About us
              </a>
            </li>
            <li className="pr-[24px] list-none flex items-center justify-center gap-2">
              <a
                href="javascript:;"
                className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-[12px]"
              >
                Products
              </a>
            </li>
            <li className="pr-[24px] list-none flex items-center justify-center gap-2">
              <a
                href="javascript:;"
                className="text-gray-900 hover:text-gray-600 transition-all duration-700 text-base font-medium leading-6 px-[12px]"
              >
                Features
              </a>
            </li>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="w-[99px] h-[44px] bg-indigo-50 hover:bg-indigo-100 ease-in-out duration-500 rounded-[100px] justify-center items-center flex text-indigo-600 text-sm font-semibold leading-snug cursor-pointer">
              Login{" "}
            </button>
            <button className="w-[99px] h-[44px] justify-center items-center flex text-white text-sm font-semibold leading-snug cursor-pointer bg-indigo-600 hover:bg-indigo-800 ease-in-out duration-500 rounded-[100px] shadow ">
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
            <li className="pr-[24px] list-none">
              <a
                href="javascript:;"
                className="text-gray-500 text-base font-medium leading-relaxed px-[12px]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="pr-[24px] list-none">
              <a
                href="javascript:;"
                className="text-gray-500 text-base font-medium leading-relaxed px-[12px]"
              >
                About us
              </a>
            </li>
            <li className="list-none">
              <span className="flex" id="dropdown">
                <button className="dropbtn text-gray-500 text-base font-medium leading-relaxed flex items-center px-[12px] gap-2">
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
                <button className="dropbtn text-gray-500 text-base font-medium leading-relaxed flex items-center px-[12px] gap-2">
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
      <section className="xl:max-w-4xl w-auto mx-auto lg:pt-24 pt-10 lg:px-0 px-10 xl:mb-0 mb-5">
        <h1 className="xl:max-w-xl w-auto mx-auto text-gray-900 text-center font-manrope lg:text-5xl text-3xl font-bold leading-tight mb-8">
          Elevate your career with Pagedone{" "}
        </h1>
        <p className="text-gray-900 text-center text-lg font-normal leading-7">
          Pagedone thrives on a spirit of agility and youthful enthusiasm,
          leveraging our technological prowess to swiftly adapt to market
          research, conditions, and customer demands.
        </p>
      </section>
      <section className="w-auto xl:max-w-6xl mx-auto grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-8 gap-y-8 xl:py-40 lg:py-16 py-10 xl:px-0 px-10 max-w-lg md:max-w-3xl lg:max-w-full">
        <div className="grid items-center max-md:gap-4">
          <div className="lg:pb-28 xl:pb-44 pb-10 lg:text-left text-center max-md:order-last">
            <h2 className="text-gray-900 font-manrope lg:text-4xl text-3xl font-bold leading-10 mb-5">
              Work from anywhere
            </h2>
            <p className="text-gray-500 text-lg font-normal leading-7">
              Experience the freedom of our Work From Anywhere program, granting
              you the flexibility to shape your work environment.{" "}
            </p>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1702034439.png"
            alt="Career tailwind section"
            className="w-full max-md:order-1 object-cover"
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
          <div className="lg:pt-28 xl:pt-44 pt-10 lg:text-left text-center">
            <h2 className="text-gray-900 font-manrope lg:text-4xl text-3xl font-bold leading-10 mb-5">
              Right opportunities
            </h2>
            <p className="text-gray-500 text-lg font-normal leading-7">
              With a strong emphasis on nurturing your talents, we provide the
              platform for you to flourish and evolve alongside our company.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="lg:py-24 py-10 bg-indigo-50 rounded-3xl ">
        <h5 className="text-indigo-600 text-center text-lg font-medium leading-7 mb-2">
          Open Positions
        </h5>
        <h2 className="text-gray-900 text-center font-manrope lg:text-4xl text-3xl font-bold leading-tight lg:mb-14 mb-10">
          Come Join Pagedone
        </h2>
        <div className="md:mx-0 mx-5">
          <div className="xl:max-w-4xl lg:max-w-3xl max-w-xl w-auto mx-auto bg-white rounded-2xl">
            <li className="list-none group">
              <a
                href="javascript:;"
                className="flex items-center justify-between px-5 pb-6 border-b border-gray-200 group-hover:bg-indigo-600 pt-12 group-hover:rounded-t-2xl"
              >
                <div>
                  <h5 className="text-gray-900 text-lg font-medium leading-7 mb-2 group-hover:text-white">
                    UX Designer
                  </h5>
                  <p className="text-indigo-600 text-sm font-medium leading-5 group-hover:text-white">
                    Remote
                  </p>
                </div>
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center group-hover:bg-white"></div>
              </a>
            </li>
            <li className="list-none group">
              <a
                href="javascript:;"
                className="flex items-center justify-between py-6 border-b border-gray-200 px-5 group-hover:bg-indigo-600"
              >
                <div>
                  <h5 className="text-gray-900 text-lg font-medium leading-7 mb-2 group-hover:text-white">
                    Motion Designer
                  </h5>
                  <p className="text-indigo-600 text-sm font-medium leading-5 group-hover:text-white">
                    New York, USA
                  </p>
                </div>
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center group-hover:bg-white"></div>
              </a>
            </li>
            <li className="list-none group">
              <a
                href="javascript:;"
                className="flex items-center justify-between py-6 border-b border-gray-200 bg-indigo-600 px-5"
              >
                <div>
                  <h5 className="text-white text-lg font-medium leading-7 mb-2">
                    iOS Developer
                  </h5>
                  <p className="text-white text-sm font-medium leading-5">
                    Berlin, Germany
                  </p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center"></div>
              </a>
            </li>
            <li className="list-none group">
              <a
                href="javascript:;"
                className="flex items-center justify-between py-6 border-b border-gray-200 px-5 group-hover:bg-indigo-600"
              >
                <div>
                  <h5 className="text-gray-900 text-lg font-medium leading-7 mb-2 group-hover:text-white">
                    Product Designer
                  </h5>
                  <p className="text-indigo-600 text-sm font-medium leading-5 group-hover:text-white">
                    Denver, USA
                  </p>
                </div>
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center group-hover:bg-white"></div>
              </a>
            </li>
            <li className="list-none group">
              <a
                href="javascript:;"
                className="flex items-center justify-between py-6 border-b border-gray-200 px-5 group-hover:bg-indigo-600"
              >
                <div>
                  <h5 className="text-gray-900 text-lg font-medium leading-7 mb-2 group-hover:text-white">
                    UX Researcher
                  </h5>
                  <p className="text-indigo-600 text-sm font-medium leading-5 group-hover:text-white">
                    Remote
                  </p>
                </div>
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center group-hover:bg-white"></div>
              </a>
            </li>
            <li className="list-none group">
              <a
                href="javascript:;"
                className="flex items-center justify-between pt-6 px-5 group-hover:bg-indigo-600 pb-12 group-hover:rounded-b-2xl"
              >
                <div>
                  <h5 className="text-gray-900 text-lg font-medium leading-7 mb-2 group-hover:text-white">
                    Project Manager
                  </h5>
                  <p className="text-indigo-600 text-sm font-medium leading-5 group-hover:text-white">
                    Mumbai, India
                  </p>
                </div>
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center group-hover:bg-white"></div>
              </a>
            </li>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center max-w-2xl mx-auto lg:max-w-full ">
            <div className="swiper mySwiper2 w-full lg:w-1/2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1696230488.png"
                    alt="Julia image"
                    className="mx-auto lg:mx-0 object-cover"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1696238786.png"
                    alt="Julia image"
                    className="mx-auto lg:mx-0 max-h-[450px] aspect-square rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="swiper mySwiper w-full lg:w-1/2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="pb-28 border-b border-solid border-gray-300">
                    <h4 className="text-xl text-gray-500 mb-7 font-medium text-center lg:text-left">
                      USER STORY
                    </h4>
                    <h2 className="text-5xl leading-[4rem] text-gray-900 font-medium text-center lg:text-left">
                      Our revenue grew to{" "}
                      <span className="text-indigo-600">144%</span> more after
                      just one month of use.
                    </h2>
                  </div>
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <div className="grid gap-1">
                        <h5 className="text-xl text-gray-900 font-medium">
                          Julia Roberts
                        </h5>
                        <span className="text-sm text-gray-500">
                          Product and Sales Manager
                        </span>
                      </div>
                      {/*Slider controls*/}
                      <div className="flex items-center gap-4 relative w-32">
                        <button
                          id="slider-button-left"
                          className="swiper-button-prev group flex p-2 justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 "
                          data-carousel-prev
                        ></button>
                        <button
                          id="slider-button-right"
                          className="swiper-button-next group flex p-2 justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                          data-carousel-next
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="pb-28 border-b border-solid border-gray-300">
                    <h4 className="text-xl text-gray-500 mb-7 font-medium text-center lg:text-left">
                      USER STORY
                    </h4>
                    <h2 className="text-5xl leading-[4rem] text-gray-900 font-medium text-center lg:text-left">
                      Our revenue grew to{" "}
                      <span className="text-indigo-600">180%</span> more after
                      just one month of use.
                    </h2>
                  </div>
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <div className="grid gap-1">
                        <h5 className="text-xl text-gray-900 font-medium">
                          Michael Cannon
                        </h5>
                        <span className="text-sm text-gray-500">
                          Product and Sales Manager
                        </span>
                      </div>
                      {/*Slider controls*/}
                      <div className="flex items-center gap-4 relative w-32">
                        <button
                          id="slider-button-left"
                          className="swiper-button-prev group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 "
                          data-carousel-prev
                        ></button>
                        <button
                          id="slider-button-right"
                          className="swiper-button-next group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
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
      <footer className="w-full bg-gray-900 rounded-t-3xl">
        <div className="mx-auto xl:max-w-7xl w-auto px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 lg:gap-8 gap-12 pt-14 pb-20">
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7">Pagedone</h4>
              <ul className="text-lg  transition-all duration-500">
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
                    className=" text-gray-400 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-gray-900"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-gray-900"
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
                    className="text-gray-400 hover:text-gray-900"
                  >
                    Figma UI System
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-gray-900"
                  >
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-gray-900"
                  >
                    Responsive Blocks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-gray-900"
                  >
                    Components Library
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className=" text-gray-400 hover:text-gray-900"
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
