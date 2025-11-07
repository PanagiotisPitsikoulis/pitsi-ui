export default function DefaultSectionHeader() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0">
          <div className="block">
            <h2 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-3">
              Visitors Reports
            </h2>
            <p className="font-normal text-sm leading-6 text-gray-500">
              We're delighted to share our recent Visitors Report, a reflection
              of the vibrant community that has graced our online space.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 min-[450px]:flex items-center gap-4">
            <button className="rounded-full border border-solid border-gray-300 bg-gray-50 py-2.5 px-5 font-semibold text-sm text-gray-900 shadow-sm shadow-gray-100 transition-all duration-500 hover:shadow-gray-50 hover:border-gray-400 hover:bg-gray-100">
              Report
            </button>
            <button className="rounded-full border border-solid border-gray-300 bg-gray-50 py-2.5 px-5 font-semibold text-sm text-gray-900 shadow-sm shadow-gray-100 transition-all duration-500 hover:shadow-gray-50 hover:border-gray-400 hover:bg-gray-100">
              Calculator
            </button>
            <button className="rounded-full border border-solid border-indigo-600 bg-indigo-600 py-2.5 px-5 font-semibold text-sm text-white shadow-sm shadow-gray-100 transition-all duration-500 hover:shadow-gray-300 hover:border-indigo-700 hover:bg-indigo-700">
              Connect
            </button>
            <button className="rounded-full border border-solid border-gray-300 bg-white font-semibold text-sm leading-6 text-white w-max shadow-sm shadow-gray-100 transition-all duration-500 hover:shadow-gray-50 hover:border-gray-400 hover:bg-gray-100"></button>
          </div>
        </div>
      </div>
    </section>
  );
}
