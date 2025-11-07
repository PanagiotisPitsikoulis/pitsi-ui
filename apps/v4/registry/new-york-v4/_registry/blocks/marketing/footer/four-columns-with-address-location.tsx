export default function FourColumnsWithAddressLocation() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="mx-auto grid max-w-xs grid-cols-2 gap-8 py-10 sm:max-w-2xl sm:grid-cols-4 lg:max-w-full lg:grid-cols-6">
          <div className="col-span-full border-gray-200 max-lg:border-b max-lg:pb-8 lg:col-span-2 lg:mb-0 lg:mb-10 lg:max-w-xs lg:border-r">
            <a
              href="https://pagedone.io/"
              className="mb-12 flex justify-center lg:justify-start"
            >
              {/* SVG removed */}
            </a>
            <ul className="grid gap-5">
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                {/* SVG removed */}
                support@pagedone.com
              </li>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                {/* SVG removed */}
                +91 945 658 3256
              </li>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                {/* SVG removed */}
                61-A, Elm street, Gujarat, India.
              </li>
            </ul>
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
              <li>
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Pricing
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
              <li>
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Responsive Blocks
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
              <li>
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          {/*End Col*/}
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-gray-900">Support</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Customer Support
                </a>
              </li>
              <li className="mb-6">
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
          {/*End Col*/}
        </div>
        {/*Grid*/}
        <div className="border-t border-gray-200 py-7">
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
