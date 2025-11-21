export default function SimpleCenteredFooter() {
  return (
    <footer className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <a href="https://pagedone.io/" className="flex justify-center">
            {/* SVG removed */}
          </a>
          <ul className="mb-10 flex flex-col items-center justify-center gap-7 border-b border-gray-200 py-16 text-lg transition-all duration-500 md:flex-row md:gap-12">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-900">
                Pagedone
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-900">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-900">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-900">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-900">
                Support
              </a>
            </li>
          </ul>
          <div className="mb-14 flex items-center justify-center space-x-10">
            <a
              href="#"
              className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="#"
              className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="#"
              className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
            >
              {/* SVG removed */}
            </a>
            <a
              href="#"
              className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
            >
              {/* SVG removed */}
            </a>
          </div>
          <span className="block text-center text-lg text-gray-500">
            ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
