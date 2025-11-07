export default function SplitWithPatternContactForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
          <div className="flex items-center lg:mb-0 mb-10">
            <div>
              <h4 className="text-indigo-600 text-base font-medium leading-6 mb-4 lg:text-left text-center">
                Contact Us
              </h4>
              <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                Reach Out To Us
              </h2>
              <form>
                <input
                  type="text"
                  className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                  placeholder="Email"
                />
                <textarea
                  name=""
                  id="text"
                  className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8"
                  placeholder="Phone"
                />
                <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="lg:max-w-xl w-full h-[600px] flex items-center justify-center  bg-cover bg-no-repeat bg-[url('https://pagedone.io/asset/uploads/1696245837.png')] ">
            <div>
              <div className="lg:w-96 w-auto h-auto bg-white shadow-xl lg:p-6 p-4">
                {/* SVG removed */}
                <a href="javascript:;" className="flex items-center mb-6">
                  {/* SVG removed */}
                  <h5 className="text-black text-base font-normal leading-6 ml-5">
                    470-601-1911
                  </h5>
                </a>
                <a href="javascript:;" className="flex items-center mb-6">
                  {/* SVG removed */}
                  <h5 className="text-black text-base font-normal leading-6 ml-5">
                    Pagedone1234@gmail.com
                  </h5>
                </a>
                <a href="javascript:;" className="flex items-center mb-6">
                  {/* SVG removed */}
                  <h5 className="text-black text-base font-normal leading-6 ml-5">
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
  );
}
