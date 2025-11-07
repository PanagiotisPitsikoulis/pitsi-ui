export default function NewsletterWithAddressLocation() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="py-14 grid grid-cols-12 gap-x-5 gap-y-8">
          <div className="col-span-full xl:col-span-3 relative bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-2xl gap-12 p-6 xl:w-72 h-96 flex flex-col justify-center items-center">
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
            <div className="flex  space-x-4 sm:justify-center  ">
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
              >
                {/* SVG removed */}
              </a>
              <a
                href="javascript:;"
                className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
              >
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="block text-center xl:text-left xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:pl-5">
            <h4 className="text-lg text-gray-900 font-bold mb-9">
              Get In Touch
            </h4>
            <ul className="text-gray-900 transition-all duration-500 grid gap-6">
              <li>support@pagedone.com</li>
              <li>+91 945 658 3256</li>
              <li>61-A, Elm street, Gujarat, India.</li>
            </ul>
          </div>
          <div className="block xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3">
            <h4 className="text-lg text-gray-900 font-bold mb-9 text-center xl:text-left">
              Quick Links
            </h4>
            <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
              <ul className="text-gray-600 transition-all duration-500 grid gap-6">
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
              <ul className="text-gray-600 transition-all duration-500 grid gap-6">
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
          <div className="block xl:py-16 col-span-full md:col-span-4 xl:col-span-3">
            <h4 className="text-lg text-gray-900 font-bold mb-9 text-center xl:text-left">
              Newsletter
            </h4>
            <div className="grid gap-7 ">
              <input
                type="text"
                name="email"
                className="py-2 px-4 border border-gray-300 shadow-sm h-14 text-lg text-gray-800 rounded-full w-full  xl:w-64 placeholder:text-gray-400 focus:outline-none"
                placeholder="Enter email.."
              />
              <button
                type="submit"
                className="flex gap-2 justify-center items-center py-3.5 px-7 rounded-full text-white bg-indigo-600 shadow-md w-fit transition-all duration-500 mx-auto xl:mx-0 hover:bg-indigo-700"
              >
                Subscribe{/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
        {/*Grid*/}
      </div>
      <div className="py-4 bg-indigo-50">
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-800 ">
            Copyright@2024 All Right Reserved by{" "}
            <a href="https://pagedone.io/">pagedone</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
