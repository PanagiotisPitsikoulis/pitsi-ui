export default function SectionHeaderWithFilter() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="block">
            <h2 className="font-manrope mb-3 text-2xl leading-9 font-bold text-gray-900">
              Your Data
            </h2>
            <p className="text-sm leading-6 font-normal text-gray-500">
              Remember to avoid sharing sensitive personal information online
            </p>
          </div>
          <div className="flex flex-col-reverse gap-3.5 sm:flex-row sm:items-center">
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href="javascript:;"
                  className="tab-active:bg-indigo-50 rounded-full bg-gray-50 px-7 py-3 text-base font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600 min-[470px]:px-7"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="tab-active:bg-indigo-50 rounded-full bg-gray-50 px-7 py-3 text-base font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600 min-[470px]:px-7"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="tab-active:bg-indigo-50 rounded-full bg-gray-50 px-7 py-3 text-base font-medium text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600 min-[470px]:px-7"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button className="flex items-center gap-2 rounded-full bg-indigo-600 py-2.5 pr-7 pl-5 text-base font-semibold text-white transition-all duration-500 hover:bg-indigo-700 max-sm:w-max">
              Filter
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
