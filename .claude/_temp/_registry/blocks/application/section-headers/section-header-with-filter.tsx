export default function SectionHeaderWithFilter() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0">
          <div className="block">
            <h2 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-3">
              Your Data
            </h2>
            <p className="font-normal text-sm leading-6 text-gray-500">
              Remember to avoid sharing sensitive personal information online
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-3.5">
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href="javascript:;"
                  className="rounded-full text-gray-900 bg-gray-50 py-3 px-7 min-[470px]:px-7 font-medium text-base transition-all duration-500 hover:bg-indigo-50 tab-active:bg-indigo-50 hover:text-indigo-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="rounded-full text-gray-900 bg-gray-50 py-3 px-7 min-[470px]:px-7 font-medium text-base transition-all duration-500 hover:bg-indigo-50 tab-active:bg-indigo-50 hover:text-indigo-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="rounded-full text-gray-900 bg-gray-50 py-3 px-7 min-[470px]:px-7 font-medium text-base transition-all duration-500 hover:bg-indigo-50 tab-active:bg-indigo-50 hover:text-indigo-600"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button className="flex items-center py-2.5 pr-7 pl-5 max-sm:w-max rounded-full bg-indigo-600 gap-2 font-semibold text-base text-white transition-all duration-500 hover:bg-indigo-700">
              Filter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
