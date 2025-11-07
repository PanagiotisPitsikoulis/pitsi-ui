export default function HorizontalFooterWithDarkVersion() {
  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <a href="https://pagedone.io/" className="flex justify-center ">
            {/* SVG removed */}
          </a>
          <ul className="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <li>
              <a href="javascript:;" className="text-white hover:text-gray-400">
                Pagedone
              </a>
            </li>
            <li className="sm:my-0 my-2">
              <a href="javascript:;" className="text-white hover:text-gray-400">
                Products
              </a>
            </li>
            <li>
              <a href="javascript:;" className="text-white hover:text-gray-400">
                Resources
              </a>
            </li>
            <li className="sm:my-0 my-2">
              <a href="javascript:;" className="text-white hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="javascript:;" className="text-white hover:text-gray-400">
                Support
              </a>
            </li>
          </ul>
          <div className="flex  space-x-4 sm:justify-center  ">
            <a
              href="javascript:;"
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="javascript:;"
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="javascript:;"
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="javascript:;"
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              {/* SVG removed */}
            </a>
          </div>
        </div>
        {/*Grid*/}
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center">
            <span className="text-gray-400 ">
              ©<a href="https://pagedone.io/">pagedone</a>2024, All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
