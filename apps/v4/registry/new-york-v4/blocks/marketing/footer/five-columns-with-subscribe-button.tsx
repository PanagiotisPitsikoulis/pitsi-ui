export default function FiveColumnsWithSubscribeButton() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="mx-auto grid max-w-sm grid-cols-2 gap-3 gap-y-8 py-10 sm:max-w-3xl sm:grid-cols-4 md:gap-8 lg:max-w-full lg:grid-cols-6">
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
                  Terms &amp; Conditions
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
            </ul>
          </div>
          {/*End Col*/}
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-gray-900">
              Subscribe
            </h4>
            <p className="mb-7 text-sm leading-6 text-gray-500">
              Subscribe to get the latest news from us
            </p>
            <a
              href="javascript:;"
              className="flex w-fit items-center justify-center gap-2 rounded-full border border-indigo-600 px-6 py-3 text-sm font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-50 lg:mx-0"
            >
              Subscribe{/* SVG removed */}
            </a>
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
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#33CCFF] transition-all duration-500 hover:bg-gray-900"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(45deg,#FEE411_6.9%,#FEDB16_10.98%,#FEC125_17.77%,#FE983D_26.42%,#FE5F5E_36.5%,#FE2181_46.24%,#9000DC_85.57%)] from-gray-900 to-gray-900 transition-all duration-500 hover:bg-gradient-to-b"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#337FFF] transition-all duration-500 hover:bg-gray-900"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] transition-all duration-500 hover:bg-gray-900"
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
