export default function HorizontalFooterWithDarkVersion() {
  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="flex flex-col items-center justify-between gap-8 py-16 lg:flex-row">
          <a href="https://pagedone.io/" className="flex justify-center">
            {/* SVG removed */}
          </a>
          <ul className="items-cente justify-center gap-14 text-center text-lg transition-all duration-500 sm:flex lg:gap-10 xl:gap-14">
            <li>
              <a href="javascript:;" className="text-white hover:text-gray-400">
                Pagedone
              </a>
            </li>
            <li className="my-2 sm:my-0">
              <a href="javascript:;" className="text-white hover:text-gray-400">
                Products
              </a>
            </li>
            <li>
              <a href="javascript:;" className="text-white hover:text-gray-400">
                Resources
              </a>
            </li>
            <li className="my-2 sm:my-0">
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
          <div className="flex space-x-4 sm:justify-center">
            <a
              href="javascript:;"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="javascript:;"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="javascript:;"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="javascript:;"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600"
            >
              {/* SVG removed */}
            </a>
          </div>
        </div>
        {/*Grid*/}
        <div className="border-t border-gray-700 py-7">
          <div className="flex items-center justify-center">
            <span className="text-gray-400">
              ©<a href="https://pagedone.io/">pagedone</a>2024, All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
