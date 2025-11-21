export default function DarkFooterWithSubscribeForm() {
  return (
    <section className="bg-gray-900 pt-16 pb-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 border-b-2 border-gray-700 pb-12 max-lg:gap-7">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-manrope mb-2 text-3xl leading-tight font-bold text-white max-lg:text-center">
              Sign up to our webpage
            </h2>
            <p className="text-base font-normal text-gray-400 max-lg:text-center">
              Stay up to date with the latest update and announcement.
            </p>
          </div>
          <div className="col-span-12 flex flex-col items-center gap-4 lg:col-span-5">
            <div className="mx-auto flex w-full max-w-md items-center justify-between rounded-full border border-gray-700 bg-gray-800 p-2.5 pl-5 transition-all duration-300 focus-within:border-gray-400 hover:border-gray-400 min-[470px]:p-1.5 min-[470px]:pl-7 lg:mr-0">
              <input
                type="text"
                className="bg-transparent text-base font-normal text-white placeholder:text-gray-500 focus-within:outline-0"
                placeholder="Your email here..."
              />
              <button className="hidden rounded-full bg-violet-500 px-7 py-3 text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 focus-within:bg-violet-700 focus-within:outline-0 hover:bg-violet-700 min-[470px]:block">
                Submit
              </button>
            </div>
            <button className="rounded-full bg-violet-500 px-7 py-3 text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 focus-within:bg-violet-700 focus-within:outline-0 hover:bg-violet-700 min-[470px]:hidden">
              Submit
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 border-b-2 border-gray-700 py-14 min-[400px]:grid-cols-2 md:grid-cols-4">
          <div>
            <h6 className="mb-7 text-xl font-bold text-white">Pagedone</h6>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Pro Version
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-7 text-xl font-bold text-white">Products</h6>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Figma UI System
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Icons Assets
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Responsive Blocks
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Components Library
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Plugin Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-7 text-xl font-bold text-white">Resources</h6>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Quick Start
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  User Guide
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Plugin Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-7 text-xl font-bold text-white">Support</h6>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  License
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-lg font-normal text-gray-400 transition-all duration-300 focus-within:text-violet-400 focus-within:outline-0 hover:text-violet-400"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-7 min-[500px]:flex-row">
          <a href="https://pagedone.io/" className="px-0.5 py-1.5">
            {/* SVG removed */}
          </a>
          <p className="text-base font-normal text-gray-400">
            ©<a href="https://pagedone.io/">pagedone</a>2023, All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
