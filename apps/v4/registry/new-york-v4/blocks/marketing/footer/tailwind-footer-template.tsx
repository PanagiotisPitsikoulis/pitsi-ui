export default function TailwindFooterTemplate() {
  return (
    <section className="pt-16 pb-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-gray-200 border-b-2 border-gray-200 pb-10 max-lg:gap-10 lg:grid-cols-12 lg:divide-x-2 lg:pb-14">
          <div className="pr-9 lg:col-span-7 xl:pr-16">
            <h5 className="mb-7 text-lg font-medium text-gray-900 max-md:text-center">
              Contact
            </h5>
            <div className="flex flex-col items-center justify-between gap-8 border-b-2 border-gray-200 pb-12 md:flex-row md:gap-2">
              <div className="flex flex-col items-center gap-2.5 min-[1024px]:flex-col min-[1160px]:flex-row md:flex-row">
                {/* SVG removed */}
                <p className="text-base font-normal text-gray-400">
                  61-A, Elm street, India.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2.5 min-[1024px]:flex-col min-[1160px]:flex-row md:flex-row">
                {/* SVG removed */}
                <p className="text-base font-normal text-gray-400 select-all">
                  +91 945 658 3256
                </p>
              </div>
              <div className="flex flex-col items-center gap-2.5 min-[1024px]:flex-col min-[1160px]:flex-row md:flex-row">
                {/* SVG removed */}
                <p className="text-base font-normal text-gray-400 select-all">
                  support@pagedone.com
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 pt-14 max-lg:justify-between md:flex-row lg:gap-14 xl:gap-24">
              <div className="block">
                <h6 className="mb-7 text-lg font-medium text-gray-900 max-md:text-center">
                  Pagedone
                </h6>
                <ul className="flex flex-col gap-6 max-md:items-center">
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800 max-md:text-center"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800 max-md:text-center"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800 max-md:text-center"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800 max-md:text-center"
                    >
                      Pro Version
                    </a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h6 className="mb-7 text-lg font-medium text-gray-900 max-md:text-center">
                  Products
                </h6>
                <ul className="flex flex-col gap-6 max-md:items-center">
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800"
                    >
                      Figma UI System
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800"
                    >
                      Icons Assets
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800"
                    >
                      Responsive Blocks
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800"
                    >
                      Components Library
                    </a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h6 className="mb-7 text-lg font-medium text-gray-900 max-md:text-center">
                  Resources
                </h6>
                <ul className="flex flex-col gap-6 max-md:items-center">
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800"
                    >
                      Quick Start
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascritp:;"
                      className="text-base font-normal text-gray-600 transition-all duration-300 focus-within:text-emerald-800 focus-within:outline-0 hover:text-emerald-800"
                    >
                      User Guide
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-start-1 max-lg:row-start-1 lg:col-span-5 lg:pl-9 xl:pl-16">
            <a
              href="https://pagedone.io/"
              className="mb-9 items-center justify-center max-md:mx-auto max-md:flex max-md:w-full"
            >
              {/* SVG removed */}
            </a>
            <h2 className="font-manrope mt-9 mb-5 text-2xl leading-9 font-semibold text-gray-900 max-md:text-center">
              Join Our Newsletter for Exclusive Updates
            </h2>
            <p className="mb-8 text-base font-normal text-gray-500 max-md:text-center">
              Subscribe to Our Exclusive Newsletter for the Latest Updates
            </p>
            <div className="relative mb-5 max-w-xs text-gray-500 focus-within:text-gray-900 max-md:mx-auto max-md:max-w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                {/* SVG removed */}
              </div>
              <input
                type="text"
                id="default-search"
                className="block w-full rounded-full border border-gray-300 bg-transparent py-2.5 pr-4 pl-12 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none md:max-w-xs"
                placeholder="mail@pagedone.com"
              />
            </div>
            <button className="mb-8 flex items-center justify-center rounded-full bg-emerald-800 px-7 py-2.5 text-base font-semibold text-white transition-all duration-500 hover:bg-emerald-900 max-md:mx-auto max-md:w-full max-md:text-center">
              Subscribe
            </button>
            <div className="flex items-center gap-5 max-md:justify-center">
              <a
                href="javascript:;"
                className="rounded-full p-2 text-black transition-all duration-500 focus-within:bg-emerald-800 focus-within:text-white focus-within:outline-0 hover:bg-emerald-800 hover:text-white"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="flex h-10 w-10 items-center justify-center rounded-full p-2 text-black transition-all duration-500 focus-within:bg-emerald-800 focus-within:text-white focus-within:outline-0 hover:bg-emerald-800 hover:text-white"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="rounded-full p-2 text-black transition-all duration-500 focus-within:bg-emerald-800 focus-within:text-white focus-within:outline-0 hover:bg-emerald-800 hover:text-white"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="group rounded-full p-2 text-black transition-all duration-500 focus-within:bg-emerald-800 focus-within:text-white focus-within:outline-0 hover:bg-emerald-800 hover:text-white"
              >
                {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-7">
          <p className="text-sm font-normal text-gray-500">
            <a href="https://pagedone.io/">©pagedone</a> 2023, All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
