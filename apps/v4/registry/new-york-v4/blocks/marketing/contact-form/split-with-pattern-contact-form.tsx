export default function SplitWithPatternContactForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-24 lg:grid-cols-2">
          <div className="mb-10 flex items-center lg:mb-0">
            <div>
              <h4 className="mb-4 text-center text-base leading-6 font-medium text-indigo-600 lg:text-left">
                Contact Us
              </h4>
              <h2 className="font-manrope mb-9 text-center text-4xl leading-10 font-semibold text-gray-900 lg:text-left">
                Reach Out To Us
              </h2>
              <form>
                <input
                  type="text"
                  className="placeholder-text-400 mb-8 h-14 w-full rounded-full border border-gray-200 px-4 py-2 text-lg leading-7 font-normal text-gray-600 shadow-sm focus:outline-none"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="placeholder-text-400 mb-8 h-14 w-full rounded-full border border-gray-200 px-4 py-2 text-lg leading-7 font-normal text-gray-600 shadow-sm focus:outline-none"
                  placeholder="Email"
                />
                <textarea
                  name=""
                  id="text"
                  className="placeholder-text-400 mb-8 h-48 w-full resize-none rounded-2xl border border-gray-200 px-4 py-4 text-lg leading-7 font-normal text-gray-600 shadow-sm focus:outline-none"
                  placeholder="Phone"
                />
                <button className="h-12 w-full rounded-full bg-indigo-600 text-center text-base leading-6 font-semibold text-white shadow transition-all duration-700 hover:bg-indigo-800">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="flex h-[600px] w-full items-center justify-center bg-[url('https://pagedone.io/asset/uploads/1696245837.png')] bg-cover bg-no-repeat lg:max-w-xl">
            <div>
              <div className="h-auto w-auto bg-white p-4 shadow-xl lg:w-96 lg:p-6">
                {/* SVG removed */}
                <a href="javascript:;" className="mb-6 flex items-center">
                  {/* SVG removed */}
                  <h5 className="ml-5 text-base leading-6 font-normal text-black">
                    470-601-1911
                  </h5>
                </a>
                <a href="javascript:;" className="mb-6 flex items-center">
                  {/* SVG removed */}
                  <h5 className="ml-5 text-base leading-6 font-normal text-black">
                    Pagedone1234@gmail.com
                  </h5>
                </a>
                <a href="javascript:;" className="mb-6 flex items-center">
                  {/* SVG removed */}
                  <h5 className="ml-5 text-base leading-6 font-normal text-black">
                    789 Oak Lane, Lakeside, TX 54321
                  </h5>
                </a>
                <div className="flex items-center justify-center border-t border-gray-100 pt-6">
                  <a href="javascript:;" className="mr-6">
                    {/* SVG removed */}
                  </a>
                  <a href="javascript:;" className="mr-6">
                    {/* SVG removed */}
                  </a>
                  <a href="javascript:;" className="mr-6">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
