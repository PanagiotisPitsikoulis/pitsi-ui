export default function HorizontalFooterWithLightVersion() {
  return (
    <section className="pt-16 pb-7 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 border-b-2 border-gray-200">
          <a href="https://pagedone.io/" className="py-1.5">
            {/* SVG removed */}
          </a>
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-12">
              <li>
                <a
                  href="jaascript:;"
                  className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-purple-700 focus-within:text-purple-700 focus-within:outline-0"
                >
                  Pagedone
                </a>
              </li>
              <li>
                <a
                  href="jaascript:;"
                  className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-purple-700 focus-within:text-purple-700 focus-within:outline-0"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="jaascript:;"
                  className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-purple-700 focus-within:text-purple-700 focus-within:outline-0"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="jaascript:;"
                  className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-purple-700 focus-within:text-purple-700 focus-within:outline-0"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="jaascript:;"
                  className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-purple-700 focus-within:text-purple-700 focus-within:outline-0"
                >
                  Support
                </a>
              </li>
            </ul>
            <button className="py-3 pr-7 pl-5 rounded-xl flex items-center gap-2 text-base font-semibold text-purple-700 shadow-sm shadow-transparent bg-violet-50 transition-all duration-500 hover:bg-violet-200 focus-within:outline-0 focus-within:bg-violet-200 ">
              {/* SVG removed */}Contact Us
            </button>
          </div>
        </div>
        <div className="pt-7 flex flex-col-reverse min-[520px]:flex-row items-center justify-between gap-6">
          <span className="text-sm font-normal text-gray-500 focus-within:outline-0">
            ©<a href="https://pagedone.io/">pagedone</a>2023, All rights
            reserved.
          </span>
          <ul className="flex items-center gap-9">
            <li>
              <a
                href="jaascript:;"
                className="text-sm font-normal text-gray-500 transition-all duration-300 hover:text-purple-700 focus-within:text-purple-700 focus-within:outline-0"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="jaascript:;"
                className="text-sm font-normal text-gray-500 transition-all duration-300 hover:text-purple-700 focus-within:text-purple-700 focus-within:outline-0"
              >
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
