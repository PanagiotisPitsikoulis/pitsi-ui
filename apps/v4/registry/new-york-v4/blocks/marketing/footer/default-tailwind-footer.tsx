export default function DefaultTailwindFooter() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="grid grid-cols-2 gap-3 gap-y-8 py-10 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-4 md:gap-8 lg:grid-cols-6">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a
              href="https://pagedone.io/"
              className="flex justify-center lg:justify-start"
            >
              {/* SVG removed */}
            </a>
            <p className="py-8 text-center text-sm text-gray-500 lg:max-w-xs lg:text-left">
              Trusted in more than 100 countries &amp; 5 million customers. Have
              any query ?
            </p>
            <a
              href="javascript:;"
              className="mx-auto block h-9 w-fit rounded-full bg-indigo-600 px-5 py-2.5 text-xs text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 lg:mx-0"
            >
              Contact us
            </a>
          </div>
          {/*End Col*/}
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-gray-900">Pagedone</h4>
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
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-gray-900">Products</h4>
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
          <div className="text-left lg:mx-auto">
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
          <div className="text-left lg:mx-auto">
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
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
            <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
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
