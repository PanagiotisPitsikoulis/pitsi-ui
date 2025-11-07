export default function CenteredFooterWithSubscribeForm() {
  return (
    <footer className="w-full py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className=" ">
          <a href="https://pagedone.io/" className="flex justify-center">
            {/* SVG removed */}
          </a>
          <ul className="text-lg  flex items-center justify-center flex-col md:flex-row  py-16 gap-6 md:gap-12 transition-all duration-500">
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
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center flex-col-reverse justify-between md:flex-row">
            <span className="text-sm text-gray-500 mt-7 md:mt-0">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
            <div className="flex items-center flex-col  gap-4 md:flex-row">
              <input
                type="text"
                name="email"
                className="py-3 px-6 h-12 border border-gray-300 shadow-sm rounded-full focus:outline-none"
                placeholder="Enter your mail.."
              />
              <button className="h-12 py-3.5 px-7 text-sm bg-indigo-600 shadow-sm rounded-full text-white font-bold hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
