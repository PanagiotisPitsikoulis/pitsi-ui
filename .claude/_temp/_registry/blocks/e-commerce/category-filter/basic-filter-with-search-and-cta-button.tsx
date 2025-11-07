export default function BasicFilterWithSearchAndCtaButton() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-4 md:col-span-3">
            <h2 className="font-manrope font-bold text-2xl leading-9 text-black mb-6">
              Our Products
            </h2>
            <div className="flex flex-col min-[520px]:flex-row min-[520px]:items-center gap-3 w-max">
              <button className="flex items-center rounded-full border border-indigo-500 py-2.5 w-max group px-3 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-100 hover:bg-indigo-50">
                <span className="px-2 font-semibold text-xs text-gray-900 transition-all duration-500 group-hover:text-indigo-600 ">
                  Filters
                </span>
              </button>
              <button className="flex items-center rounded-full border border-gray-300 w-max font-semibold text-xs py-2.5 group px-5 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-600 hover:shadow-indigo-100 hover:bg-indigo-50 hover:border-indigo-500">
                Complete
              </button>
              <button className="flex items-center rounded-full border border-gray-300 w-max font-semibold text-xs py-2.5 group px-5 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-600 hover:shadow-indigo-100 hover:bg-indigo-50 hover:border-indigo-500">
                Incomplete
              </button>
              <button className="flex items-center rounded-full border border-gray-300 w-max font-semibold text-xs py-2.5 group px-5 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-100 hover:bg-indigo-50 hover:border-indigo-500">
                <span className="px-2 font-semibold text-xs text-gray-900 transition-all duration-500 group-hover:text-indigo-600 ">
                  Only $100+
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <button className="flex items-center rounded-full border border-gray-300  py-2.5 px-3 shadow-transparent shadow-sm transition-all duration-500 hover:bg-gray-50 hover:border-gray-400 hover:shadow-gray-100">
                <span className="px-2 font-semibold text-xs text-gray-900 whitespace-nowrap ">
                  Download Invoice
                </span>
              </button>
              <button className="flex items-center rounded-full border border-gray-300  py-2.5 px-3 shadow-transparent shadow-sm transition-all duration-500 hover:bg-gray-50 hover:border-gray-400 hover:shadow-gray-100">
                <span className="px-2 font-semibold text-xs text-gray-900  ">
                  Export
                </span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search here...."
                className="font-semibold text-xs text-gray-400  py-2.5 focus-within:outline-0 focus-within:border-b focus-within:border-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
