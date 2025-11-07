export default function FooterWithAppButtons() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-col py-14 gap-14 lg:gap-20 min-[1124px]:flex-row">
          <div className="block  xl:max-w-lg">
            <a
              href="https://pagedone.io/"
              className="flex justify-center min-[1124px]:justify-start mb-8"
            >
              {/* SVG removed */}
            </a>
            <p className="text-lg text-gray-500 mb-12 text-center min-[1124px]:text-left">
              Trusted in more than 100 countries &amp; 5 million customers.{" "}
            </p>
            <div className="relative lg:flex-row gap-3 flex-col flex items-center justify-between max-[1124px]:max-w-2xl max-[1124px]:mx-auto ">
              <span className="absolute left-5 top-4 lg:top-5">
                {/* SVG removed */}
              </span>
              <input
                type="text"
                name="email"
                className="py-3 px-5 h-14 pl-14 border border-gray-300 rounded-full text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none flex-1 w-full "
                placeholder="Contact"
              />
              <button
                type="submit"
                className="h-14 py-3.5 px-7 bg-indigo-600 transition-all duration-500 shadow-md rounded-full text-white font-semibold hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start min-[530px]:flex-row max-[1124px]:w-full max-[1124px]:justify-between gap-12 xl:gap-24 max-[1124px]:max-w-2xl max-[1124px]:mx-auto">
            <div className="block">
              <h4 className="text-lg text-gray-900 font-medium mb-7 text-center lg:text-left">
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
              <h4 className="text-lg text-gray-900 font-medium mb-7 text-center lg:text-left">
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
              <h4 className="text-lg text-gray-900 font-medium mb-7 text-center lg:text-left">
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
        <div className="py-9 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col gap-8 lg:gap-0 sm:flex-row sm:justify-between">
            <span className="text-sm text-gray-500 ">
              ©<a href="https://pagedone.io/">pagedone</a>2024, All rights
              reserved.
            </span>
            <div className="flex  space-x-6 sm:justify-center ">
              <a
                href="javascript:;"
                className="group flex justify-center items-center "
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="group flex justify-center items-center "
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="group flex justify-center items-center "
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="group flex justify-center items-center "
              >
                {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
