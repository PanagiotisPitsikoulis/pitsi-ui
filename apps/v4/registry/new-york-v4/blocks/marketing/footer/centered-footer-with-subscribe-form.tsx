export default function CenteredFooterWithSubscribeForm() {
  return (
    <footer className="w-full py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className=" ">
          <a href="https://pagedone.io/" className="flex justify-center">
            {/* SVG removed */}
          </a>
          <ul className="flex flex-col items-center justify-center gap-6 py-16 text-lg transition-all duration-500 md:flex-row md:gap-12">
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
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-indigo-600">
                Support
              </a>
            </li>
          </ul>
        </div>
        {/*Grid*/}
        <div className="border-t border-gray-200 py-7">
          <div className="flex flex-col-reverse items-center justify-between md:flex-row">
            <span className="mt-7 text-sm text-gray-500 md:mt-0">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <input
                type="text"
                name="email"
                className="h-12 rounded-full border border-gray-300 px-6 py-3 shadow-sm focus:outline-none"
                placeholder="Enter your mail.."
              />
              <button className="h-12 rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
