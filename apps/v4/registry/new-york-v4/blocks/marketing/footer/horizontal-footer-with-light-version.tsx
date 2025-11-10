export default function HorizontalFooterWithLightVersion() {
  return (
    <section className="pt-16 pb-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-b-2 border-gray-200 pb-10 lg:flex-row">
          <a href="https://pagedone.io/" className="py-1.5">
            {/* SVG removed */}
          </a>
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
            <ul className="flex flex-col items-center gap-5 sm:flex-row sm:gap-12">
              <li>
                <a
                  href="jaascript:;"
                  className="text-lg font-normal text-gray-800 transition-all duration-300 focus-within:text-purple-700 focus-within:outline-0 hover:text-purple-700"
                >
                  Pagedone
                </a>
              </li>
              <li>
                <a
                  href="jaascript:;"
                  className="text-lg font-normal text-gray-800 transition-all duration-300 focus-within:text-purple-700 focus-within:outline-0 hover:text-purple-700"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="jaascript:;"
                  className="text-lg font-normal text-gray-800 transition-all duration-300 focus-within:text-purple-700 focus-within:outline-0 hover:text-purple-700"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="jaascript:;"
                  className="text-lg font-normal text-gray-800 transition-all duration-300 focus-within:text-purple-700 focus-within:outline-0 hover:text-purple-700"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="jaascript:;"
                  className="text-lg font-normal text-gray-800 transition-all duration-300 focus-within:text-purple-700 focus-within:outline-0 hover:text-purple-700"
                >
                  Support
                </a>
              </li>
            </ul>
            <button className="flex items-center gap-2 rounded-xl bg-violet-50 py-3 pr-7 pl-5 text-base font-semibold text-purple-700 shadow-sm shadow-transparent transition-all duration-500 focus-within:bg-violet-200 focus-within:outline-0 hover:bg-violet-200">
              {/* SVG removed */}Contact Us
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-6 pt-7 min-[520px]:flex-row">
          <span className="text-sm font-normal text-gray-500 focus-within:outline-0">
            ©<a href="https://pagedone.io/">pagedone</a>2023, All rights
            reserved.
          </span>
          <ul className="flex items-center gap-9">
            <li>
              <a
                href="jaascript:;"
                className="text-sm font-normal text-gray-500 transition-all duration-300 focus-within:text-purple-700 focus-within:outline-0 hover:text-purple-700"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="jaascript:;"
                className="text-sm font-normal text-gray-500 transition-all duration-300 focus-within:text-purple-700 focus-within:outline-0 hover:text-purple-700"
              >
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
