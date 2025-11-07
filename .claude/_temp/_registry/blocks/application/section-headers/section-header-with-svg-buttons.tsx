export default function SectionHeaderWithSvgButtons() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0">
          <div className="block">
            <h2 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-3">
              Visitors Reports
            </h2>
            <p className="font-normal text-sm leading-6 text-gray-500">
              Passionate UI/UX designer with a keen eye for detail and a flair
              for creating visually stunning
            </p>
          </div>
          <div className="grid grid-cols-2 min-[450px]:flex items-center gap-4">
            <button className="group max-[450px]:justify-center rounded-lg border border-solid border-indigo-600 bg-indigo-600 py-2.5 pr-5 pl-3.5 font-medium text-sm text-white shadow-sm shadow-gray-100 flex items-center group gap-2 transition-all duration-500 hover:shadow-gray-300 hover:border-indigo-600 hover:bg-indigo-700 hover:text-white ">
              Report
            </button>
            <button className="group max-[450px]:justify-center rounded-lg border border-solid border-gray-300 bg-gray-50 py-2.5 pr-5 pl-3.5 font-medium text-sm text-gray-900 shadow-sm shadow-gray-100 flex items-center group gap-2 transition-all duration-500 hover:shadow-gray-300 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white">
              Calculator
            </button>
            <button className="group max-[450px]:justify-center rounded-lg border border-solid border-gray-300 bg-gray-50 py-2.5 pr-5 pl-3.5 font-medium text-sm text-gray-900 shadow-sm shadow-gray-100 flex items-center group gap-2 transition-all duration-500 hover:shadow-gray-300 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white">
              Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
