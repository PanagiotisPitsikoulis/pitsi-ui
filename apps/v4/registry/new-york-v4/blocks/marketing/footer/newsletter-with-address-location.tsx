export default function NewsletterWithAddressLocation() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="grid grid-cols-12 gap-x-5 gap-y-8 py-14">
          <div className="relative col-span-full flex h-96 flex-col items-center justify-center gap-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 p-6 xl:col-span-3 xl:w-72">
            <a
              href="https://pagedone.io/"
              className="flex justify-center lg:justify-start"
            >
              {/* SVG removed */}
            </a>
            <p className="text-center text-gray-200">
              Trusted in more than 100 countries &amp; 5 million customers. Have
              any query? contact us we are here for you.
            </p>
            <div className="flex space-x-4 sm:justify-center">
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white hover:shadow-md"
              >
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="col-span-full block text-center min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:py-16 xl:pl-5 xl:text-left">
            <h4 className="mb-9 text-lg font-bold text-gray-900">
              Get In Touch
            </h4>
            <ul className="grid gap-6 text-gray-900 transition-all duration-500">
              <li>support@pagedone.com</li>
              <li>+91 945 658 3256</li>
              <li>61-A, Elm street, Gujarat, India.</li>
            </ul>
          </div>
          <div className="col-span-full block min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:py-16">
            <h4 className="mb-9 text-center text-lg font-bold text-gray-900 xl:text-left">
              Quick Links
            </h4>
            <div className="flex gap-6 max-xl:justify-center xl:gap-12">
              <ul className="grid gap-6 text-gray-600 transition-all duration-500">
                <li>
                  <a href="javascript:;">Home</a>
                </li>
                <li>
                  <a href="javascript:;">FAQs</a>
                </li>
                <li>
                  <a href="javascript:;">Price Plan</a>
                </li>
                <li>
                  <a href="javascript:;">Features</a>
                </li>
              </ul>
              <ul className="grid gap-6 text-gray-600 transition-all duration-500">
                <li>
                  <a href="javascript:;">Careers</a>
                </li>
                <li>
                  <a href="javascript:;">About </a>
                </li>
                <li>
                  <a href="javascript:;">Contact</a>
                </li>
                <li>
                  <a href="javascript:;">Products</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-full block md:col-span-4 xl:col-span-3 xl:py-16">
            <h4 className="mb-9 text-center text-lg font-bold text-gray-900 xl:text-left">
              Newsletter
            </h4>
            <div className="grid gap-7">
              <input
                type="text"
                name="email"
                className="h-14 w-full rounded-full border border-gray-300 px-4 py-2 text-lg text-gray-800 shadow-sm placeholder:text-gray-400 focus:outline-none xl:w-64"
                placeholder="Enter email.."
              />
              <button
                type="submit"
                className="mx-auto flex w-fit items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-white shadow-md transition-all duration-500 hover:bg-indigo-700 xl:mx-0"
              >
                Subscribe{/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
        {/*Grid*/}
      </div>
      <div className="bg-indigo-50 py-4">
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-800">
            Copyright@2024 All Right Reserved by{" "}
            <a href="https://pagedone.io/">pagedone</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
