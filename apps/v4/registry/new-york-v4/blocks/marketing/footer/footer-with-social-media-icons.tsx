export default function FooterWithSocialMediaIcons() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="flex flex-col items-center justify-between gap-8 py-10 xl:flex-row">
          <div className="flex flex-col items-center xl:flex-row">
            <a
              href="https://pagedone.io/"
              className="mb-8 flex justify-center xl:mb-0"
            >
              {/* SVG removed */}
            </a>
            <ul className="flex flex-col items-center gap-6 border-gray-200 py-8 text-lg transition-all duration-500 md:flex-row md:gap-12 xl:ml-11 xl:border-l xl:pl-11">
              <li>
                <a href="#" className="text-gray-800 hover:text-indigo-600">
                  Pagedone
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-indigo-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-indigo-600">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-indigo-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-indigo-600">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4 sm:justify-center">
            <a
              href="#"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition-all duration-500 hover:border-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="#"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition-all duration-500 hover:border-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="#"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition-all duration-500 hover:border-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="#"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition-all duration-500 hover:border-indigo-600"
            >
              {/* SVG removed */}
            </a>
          </div>
        </div>
        {/*Grid*/}
        <div className="border-t border-gray-200 py-7">
          <div className="flex items-center justify-center">
            <span className="text-gray-400">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
