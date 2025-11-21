export default function SectionHeaderWithSvgButtons() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="block">
            <h2 className="font-manrope mb-3 text-2xl leading-9 font-bold text-gray-900">
              Visitors Reports
            </h2>
            <p className="text-sm leading-6 font-normal text-gray-500">
              Passionate UI/UX designer with a keen eye for detail and a flair
              for creating visually stunning
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 min-[450px]:flex">
            <button className="group group flex items-center gap-2 rounded-lg border border-solid border-indigo-600 bg-indigo-600 py-2.5 pr-5 pl-3.5 text-sm font-medium text-white shadow-sm shadow-gray-100 transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-700 hover:text-white hover:shadow-gray-300 max-[450px]:justify-center">
              Report
            </button>
            <button className="group group flex items-center gap-2 rounded-lg border border-solid border-gray-300 bg-gray-50 py-2.5 pr-5 pl-3.5 text-sm font-medium text-gray-900 shadow-sm shadow-gray-100 transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-gray-300 max-[450px]:justify-center">
              Calculator
            </button>
            <button className="group group flex items-center gap-2 rounded-lg border border-solid border-gray-300 bg-gray-50 py-2.5 pr-5 pl-3.5 text-sm font-medium text-gray-900 shadow-sm shadow-gray-100 transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-gray-300 max-[450px]:justify-center">
              Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
