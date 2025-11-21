export default function StandardFooter() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="grid grid-cols-12 gap-8 py-14 lg:grid-cols-8">
          <div className="col-span-full mb-0 lg:col-span-3">
            <a
              href="https://pagedone.io/"
              className="flex justify-center lg:justify-start"
            >
              {/* SVG removed */}
            </a>
            <p className="py-8 text-center text-gray-500 lg:max-w-xs lg:text-left">
              Trusted in more than 100 countries &amp; 5 million customers.
              Follow us on social media.
            </p>
            <div className="mt-4 flex justify-center space-x-4 sm:mt-0 lg:justify-start">
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
          {/*End Col*/}
          <div className="col-span-full w-full text-center sm:col-span-4 md:col-span-4 lg:col-span-2 lg:w-auto lg:text-left">
            <h4 className="mb-7 text-lg font-medium text-gray-900">
              Get In Touch
            </h4>
            <ul className="text-gray-600 transition-all duration-500">
              <li className="mb-6">support@pagedone.com</li>
              <li className="mb-6">+91 945 658 3256</li>
              <li>61-A, Elm street, Gujarat, India.</li>
            </ul>
          </div>
          {/*End Col*/}
          <div className="col-span-full w-full text-center sm:order-last sm:col-span-4 md:col-span-4 lg:order-none lg:col-span-1 lg:w-auto lg:text-left">
            <h4 className="mb-7 text-lg font-medium text-gray-900">Products</h4>
            <ul className="text-gray-600 transition-all duration-500">
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
              <li className="sm:mb-6">
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
          <div className="col-span-full w-full text-center sm:col-span-4 md:col-span-4 lg:col-span-2 lg:w-auto lg:text-left">
            <h4 className="mb-7 text-center text-lg font-medium text-gray-900 lg:text-left">
              Newsletter
            </h4>
            <div className="flex flex-col items-center lg:items-start">
              <input
                type="text"
                className="mb-5 h-12 w-full rounded-full border border-gray-300 px-5 py-2.5 text-center text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-gray-500 focus:outline-none lg:text-left"
                placeholder="Your email here.."
              />
              <button
                type="submit"
                className="h-11 w-fit rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-500 hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/*Grid*/}
        <div className="border-t border-gray-200 py-7">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <span className="text-sm text-gray-500">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
            <ul className="mt-4 flex items-center gap-9 lg:mt-0">
              <li>
                <a href="javascript:;" className="text-sm text-gray-500">
                  Terms
                </a>
              </li>
              <li>
                <a href="javascript:;" className="text-sm text-gray-500">
                  Privacy
                </a>
              </li>
              <li>
                <a href="javascript:;" className="text-sm text-gray-500">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
