export default function HorizontalFooter() {
  return (
    <footer className="w-full ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="py-10 flex justify-between items-center flex-col gap-8 xl:flex-row">
          <div className="flex items-center flex-col xl:flex-row ">
            <a
              href="https://pagedone.io/"
              className="flex justify-center mb-8 xl:mb-0"
            >
              {/* SVG removed */}
            </a>
            <ul className="text-lg  flex items-center flex-col md:flex-row  py-8 gap-6 md:gap-12 xl:border-l border-gray-200 xl:ml-11 xl:pl-11 transition-all duration-500">
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
          <div className="flex  space-x-4 sm:justify-center  ">
            <a
              href="#"
              className="group w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-500 hover:border-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="#"
              className="group w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-500  hover:border-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="#"
              className="group w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-500  hover:border-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="#"
              className="group w-9 h-9 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-500  hover:border-indigo-600"
            >
              {/* SVG removed */}
            </a>
          </div>
        </div>
        {/*Grid*/}
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center">
            <span className="text-gray-400 ">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
