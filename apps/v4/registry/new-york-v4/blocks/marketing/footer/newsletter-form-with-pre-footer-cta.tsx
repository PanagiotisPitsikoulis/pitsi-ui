export default function NewsletterFormWithPreFooterCta() {
  return (
    <footer className="w-full py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-7 border-b border-gray-200 pb-12 lg:flex-row lg:justify-between lg:gap-0">
          <a
            href="https://pagedone.io/"
            className="flex justify-center lg:justify-start"
          >
            {/* SVG removed */}
          </a>
          <a
            href="javascript:;"
            className="flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 font-semibold text-white shadow-md hover:bg-gray-800"
          >
            Contac us {/* SVG removed */}
          </a>
        </div>
        <div className="flex flex-col justify-between gap-8 py-8 min-[500px]:gap-16 min-[500px]:py-14 lg:flex-row lg:gap-0">
          <div className="flex flex-col items-center gap-8 max-lg:justify-center min-[500px]:flex-row min-[500px]:items-start sm:gap-12 xl:gap-24">
            <div className="block">
              <h4 className="mb-4 text-center text-lg font-medium text-gray-900 min-[500px]:mb-7 min-[500px]:text-left">
                Pagedone
              </h4>
              <ul className="grid gap-4 text-center min-[500px]:gap-6 min-[500px]:text-left">
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
              <h4 className="mb-4 text-center text-lg font-medium text-gray-900 min-[500px]:mb-7 min-[500px]:text-left">
                Products
              </h4>
              <ul className="grid gap-4 text-center min-[500px]:gap-6 min-[500px]:text-left">
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
            <div className="block">
              <h4 className="mb-4 text-center text-lg font-medium text-gray-900 min-[500px]:mb-7 min-[500px]:text-left">
                Resources
              </h4>
              <ul className="grid gap-4 text-center min-[500px]:gap-6 min-[500px]:text-left">
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
                className="mx-auto w-full max-w-xl flex-1 rounded-full bg-gray-100 px-6 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none lg:w-auto lg:bg-transparent lg:px-7 lg:py-5"
                placeholder="Your email here..."
              />
              <button
                type="submit"
                className="rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-md hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-9">
          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:gap-0">
            <span className="text-sm text-gray-500">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
            <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-indigo-600"
              >
                {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
