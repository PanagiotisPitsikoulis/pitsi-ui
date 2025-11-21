export default function BasicFilterWithSearchAndCtaButton() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-4 md:col-span-3">
            <h2 className="font-manrope mb-6 text-2xl leading-9 font-bold text-black">
              Our Products
            </h2>
            <div className="flex w-max flex-col gap-3 min-[520px]:flex-row min-[520px]:items-center">
              <button className="group flex w-max items-center rounded-full border border-indigo-500 px-3 py-2.5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-50 hover:shadow-indigo-100">
                <span className="px-2 text-xs font-semibold text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                  Filters
                </span>
              </button>
              <button className="group flex w-max items-center rounded-full border border-gray-300 px-5 py-2.5 text-xs font-semibold shadow-sm shadow-transparent transition-all duration-500 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-indigo-100">
                Complete
              </button>
              <button className="group flex w-max items-center rounded-full border border-gray-300 px-5 py-2.5 text-xs font-semibold shadow-sm shadow-transparent transition-all duration-500 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-indigo-100">
                Incomplete
              </button>
              <button className="group flex w-max items-center rounded-full border border-gray-300 px-5 py-2.5 text-xs font-semibold shadow-sm shadow-transparent transition-all duration-500 hover:border-indigo-500 hover:bg-indigo-50 hover:shadow-indigo-100">
                <span className="px-2 text-xs font-semibold text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                  Only $100+
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <button className="flex items-center rounded-full border border-gray-300 px-3 py-2.5 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-100">
                <span className="px-2 text-xs font-semibold whitespace-nowrap text-gray-900">
                  Download Invoice
                </span>
              </button>
              <button className="flex items-center rounded-full border border-gray-300 px-3 py-2.5 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-100">
                <span className="px-2 text-xs font-semibold text-gray-900">
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
                className="py-2.5 text-xs font-semibold text-gray-400 focus-within:border-b focus-within:border-gray-500 focus-within:outline-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
