export default function DashboardLayoutWithCollapsableSidebar() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="block">
            <h2 className="font-manrope mb-3 text-2xl leading-9 font-bold text-gray-900">
              Visitors Reports
            </h2>
            <p className="text-sm leading-6 font-normal text-gray-500">
              We're delighted to share our recent Visitors Report, a reflection
              of the vibrant community that has graced our online space.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 min-[450px]:flex">
            <button className="rounded-full border border-solid border-gray-300 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm shadow-gray-100 transition-all duration-500 hover:border-gray-400 hover:bg-gray-100 hover:shadow-gray-50">
              Report
            </button>
            <button className="rounded-full border border-solid border-gray-300 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm shadow-gray-100 transition-all duration-500 hover:border-gray-400 hover:bg-gray-100 hover:shadow-gray-50">
              Calculator
            </button>
            <button className="rounded-full border border-solid border-indigo-600 bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-gray-100 transition-all duration-500 hover:border-indigo-700 hover:bg-indigo-700 hover:shadow-gray-300">
              Connect
            </button>
            <button className="w-max rounded-full border border-solid border-gray-300 bg-white text-sm leading-6 font-semibold text-white shadow-sm shadow-gray-100 transition-all duration-500 hover:border-gray-400 hover:bg-gray-100 hover:shadow-gray-50"></button>
          </div>
        </div>
      </div>
    </section>
  )
}
