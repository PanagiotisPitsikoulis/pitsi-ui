export default function MinimalProductAndServicesPreviewHeroSection() {
  return (
    <div>
      <nav className="top-0 left-0 z-50 w-full bg-white transition-all duration-500 lg:fixed">
        <div className="border-b border-solid border-gray-300 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-8">
              <a
                href="javascript:;"
                className="text-gray-800 transition-all duration-500 hover:text-emerald-800"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="text-gray-800 transition-all duration-500 hover:text-emerald-800"
              >
                {/* SVG removed */}
              </a>
            </div>
            <div className="flex items-center justify-end gap-8">
              <a
                href="javascript:;"
                className="text-sm font-medium text-gray-800 transition-all duration-500 hover:text-emerald-700"
              >
                Contact Us
              </a>
              <a
                href="javascript:;"
                className="flex items-center gap-2.5 text-sm font-medium text-gray-800 transition-all duration-500 hover:text-emerald-700"
              >
                {/* SVG removed */}{" "}
                <span className="max-[706px]:hidden">0000000000</span>
              </a>
              <p className="flex items-center gap-2.5 text-sm font-medium text-gray-800 transition-all duration-500 hover:text-emerald-700">
                {/* SVG removed */}
                <span className="max-[706px]:hidden">
                  {" "}
                  577 Taylor Street, West Nyack, New York
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col pt-5 lg:flex-row">
            <div className="flex justify-between lg:flex-row">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <div className="flex items-center justify-end gap-5">
                <a
                  href="javascript:;"
                  className="flex items-center gap-2.5 text-sm font-medium text-emerald-700 lg:hidden"
                >
                  {/* SVG removed */}
                </a>
                <a
                  href="javascript:;"
                  className="flex items-center gap-2.5 text-sm font-medium text-emerald-700 lg:hidden"
                >
                  {/* SVG removed */}
                </a>
                <button
                  data-collapse-toggle="navbar"
                  className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div
              className="hidden w-full max-lg:mt-1 max-lg:h-screen max-lg:overflow-y-auto lg:flex lg:pl-11"
              id="navbar"
            >
              <ul className="flex flex-col gap-4 max-lg:mb-4 max-lg:pt-4 lg:mt-0 lg:mr-auto lg:flex-row lg:items-center lg:justify-center">
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-700 md:mb-0 lg:mr-6 lg:text-left"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="nav-link mb-2 block font-medium text-gray-500 transition-all duration-500 hover:text-emerald-700 md:mb-0 lg:mr-6 lg:text-left"
                  >
                    About us
                  </a>
                </li>
                <li className="relative">
                  <button
                    data-target="menu1"
                    className="dropdown-toggle mr-auto flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left"
                  >
                    Products
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu1"
                    aria-labelledby="menu1"
                    className="animate-fade relative top-3 z-10 hidden min-w-full rounded-lg bg-white p-2 shadow-lg shadow-gray-200 max-lg:mb-3 max-lg:shadow-inner md:min-w-[500px] lg:absolute lg:top-14 lg:-left-80 lg:min-w-[800px] lg:p-4 xl:p-8"
                  >
                    <div className="flex flex-col justify-between md:flex-row">
                      <ul
                        className="text-sm text-gray-700 md:w-1/2"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <h6 className="mb-2 text-sm font-medium text-gray-500">
                          Features
                        </h6>
                        <li>
                          <a
                            href="javascript:;"
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
                                Analytics
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
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
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
                        className="text-sm text-gray-700 md:w-1/2 dark:text-gray-400"
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
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
                                Security
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                To ensure your privacy all information are
                                highly encrypted
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
                                Documentation
                              </h5>
                              <p className="text-xs font-medium text-gray-400">
                                Organized documentation will help you save tone
                                of your time
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="flex items-center px-3 py-5 transition-all duration-500 hover:rounded-xl hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50">
                              {/* SVG removed */}
                            </div>
                            <div className="ml-4 w-4/5">
                              <h5 className="mb-1.5 text-base font-semibold text-gray-900">
                                Support
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
                    data-target="menu2"
                    className="dropdown-toggle mr-auto mb-2 flex items-center justify-between text-center text-base font-medium text-gray-500 transition-all duration-500 hover:text-emerald-700 lg:m-0 lg:mr-6 lg:mb-0 lg:text-left"
                  >
                    Features
                    {/* SVG removed */}
                  </button>
                  {/* Dropdown menu */}
                  <div
                    id="menu2"
                    aria-labelledby="menu2"
                    className="dropdown-menu relative top-3 z-10 hidden w-64 rounded-lg bg-white p-2 font-normal shadow-md shadow-gray-200 max-lg:mb-3 lg:absolute lg:top-14 lg:p-4 xl:p-8"
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
              <div className="flex w-full flex-col justify-start gap-4 max-lg:gap-4 lg:ml-14 lg:w-max lg:flex-row lg:items-center lg:justify-end">
                <div className="relative">
                  <input
                    type="search"
                    className="h-10 w-10 rounded-lg border border-gray-100 px-2 py-4 outline-0 transition-all duration-500 focus-within:w-44 focus-within:rounded-lg focus-within:border-gray-300 focus-within:pl-10"
                  />
                  {/* SVG removed */}
                </div>
                <button className="cursor-pointer rounded-lg bg-emerald-800 px-5 py-2.5 text-center text-sm font-medium text-white shadow-xs transition-all duration-500 hover:bg-emerald-900">
                  sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative py-14 lg:pt-40 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <div className="mb-8 w-full bg-yellow-50 px-3 sm:px-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="flex items-center">
                <div className="block max-lg:pt-6">
                  <span className="text-sm font-normal text-emerald-700">
                    # Revitalizingyourintrinsicbeauty
                  </span>
                  <h1 className="font-manrope my-8 pr-5 text-5xl leading-tight font-bold text-emerald-900 max-sm:break-all">
                    Embark on a Transformative Holistic Journey
                  </h1>
                  <p className="mb-8 text-sm font-normal text-emerald-800">
                    Explore the transformative power of inner beauty at our
                    Holistic Skin &amp; Beauty Lab in Brisbane. Our expert
                    practitioners guide you through a personalized journey,
                    combining skincare expertise with holistic practices to
                    nurture your inner radiance.
                  </p>
                  <div className="flex flex-col items-center gap-8 sm:flex-row">
                    <button className="rounded-xl bg-emerald-800 px-8 py-3.5 text-lg font-medium text-white shadow-md shadow-transparent transition-all duration-500 hover:bg-emerald-900 hover:shadow-emerald-100 max-sm:w-full">
                      Book Now
                    </button>
                    <button className="rounded-xl bg-white px-8 py-3.5 text-lg font-medium text-emerald-800 shadow-sm shadow-transparent transition-all duration-500 hover:bg-emerald-100 hover:shadow-emerald-200 max-sm:w-full">
                      Explore Our Treatments
                    </button>
                  </div>
                </div>
              </div>
              <div className="pl-5">
                <div className="grid grid-cols-2 gap-10">
                  <div className="relative flex flex-col gap-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1709274026.png"
                      className="cursor-pointer object-cover transition-all duration-500"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1709274036.png"
                      className="cursor-pointer object-cover transition-all duration-500"
                    />
                    {/* SVG removed */}
                  </div>
                  <div className="flex h-full items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1709274050.png"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 min-[560px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <button className="mx-auto flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-4 text-sm font-medium text-emerald-800 shadow-sm shadow-transparent transition-all duration-500 hover:border-emerald-50 hover:bg-emerald-50 min-[560px]:max-w-[280px]">
              {/* SVG removed */}
              Skincare Therapies
            </button>
            <button className="mx-auto flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-4 text-sm font-medium text-emerald-800 shadow-sm shadow-transparent transition-all duration-500 hover:border-emerald-50 hover:bg-emerald-50 min-[560px]:max-w-[280px]">
              {/* SVG removed */}
              Brow &amp; Glam
            </button>
            <button className="mx-auto flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-4 text-sm font-medium text-emerald-800 shadow-sm shadow-transparent transition-all duration-500 hover:border-emerald-50 hover:bg-emerald-50 min-[560px]:max-w-[280px]">
              {/* SVG removed */}
              Offers &amp; Packages
            </button>
            <button className="mx-auto flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-4 text-sm font-medium text-emerald-800 shadow-sm shadow-transparent transition-all duration-500 hover:border-emerald-50 hover:bg-emerald-50 min-[560px]:max-w-[280px]">
              {/* SVG removed */}
              Beauty Apothecary
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
