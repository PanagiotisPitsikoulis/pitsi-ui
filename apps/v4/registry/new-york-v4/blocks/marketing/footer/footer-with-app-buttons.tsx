export default function FooterWithAppButtons() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-14 py-14 min-[1124px]:flex-row lg:gap-20">
          <div className="block xl:max-w-lg">
            <a
              href="https://pagedone.io/"
              className="mb-8 flex justify-center min-[1124px]:justify-start"
            >
              {/* SVG removed */}
            </a>
            <p className="mb-12 text-center text-lg text-gray-500 min-[1124px]:text-left">
              Trusted in more than 100 countries &amp; 5 million customers.{" "}
            </p>
            <div className="relative flex flex-col items-center justify-between gap-3 max-[1124px]:mx-auto max-[1124px]:max-w-2xl lg:flex-row">
              <span className="absolute top-4 left-5 lg:top-5">
                {/* SVG removed */}
              </span>
              <input
                type="text"
                name="email"
                className="h-14 w-full flex-1 rounded-full border border-gray-300 px-5 py-3 pl-14 text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none"
                placeholder="Contact"
              />
              <button
                type="submit"
                className="h-14 rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-md transition-all duration-500 hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-12 max-[1124px]:mx-auto max-[1124px]:w-full max-[1124px]:max-w-2xl max-[1124px]:justify-between min-[530px]:flex-row sm:items-start xl:gap-24">
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
            <div className="block">
              <h4 className="mb-7 text-center text-lg font-medium text-gray-900 lg:text-left">
                Support
              </h4>
              <ul className="grid gap-6 text-center lg:text-left">
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    License
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-9">
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:justify-between lg:gap-0">
            <span className="text-sm text-gray-500">
              ©<a href="https://pagedone.io/">pagedone</a>2024, All rights
              reserved.
            </span>
            <div className="flex space-x-6 sm:justify-center">
              <a
                href="javascript:;"
                className="group flex items-center justify-center"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="group flex items-center justify-center"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="group flex items-center justify-center"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="group flex items-center justify-center"
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
