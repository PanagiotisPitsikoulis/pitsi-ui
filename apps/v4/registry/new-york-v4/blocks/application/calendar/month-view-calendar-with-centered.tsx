export default function MonthViewCalendarWithCentered() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl overflow-x-auto px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center justify-between max-md:gap-3 md:mb-14 md:flex-row">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl leading-snug font-bold text-black">
              Calender
            </h3>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="rounded-md p-1.5 text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"></button>
            <h6 className="text-xl leading-8 font-semibold text-gray-900">
              January 2024
            </h6>
            <button className="rounded-md p-1.5 text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"></button>
          </div>
          <div className="flex items-center gap-px rounded-lg bg-gray-100 p-1">
            <button className="rounded-lg px-5 py-2.5 text-sm font-medium text-gray-500 transition-all duration-300 hover:bg-white hover:text-indigo-600">
              Day
            </button>
            <button className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-indigo-600 transition-all duration-300 hover:bg-white hover:text-indigo-600">
              Week
            </button>
            <button className="rounded-lg px-5 py-2.5 text-sm font-medium text-gray-500 transition-all duration-300 hover:bg-white hover:text-indigo-600">
              Month
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7">
          <div className="flex items-center justify-center bg-indigo-50 px-2.5 py-5 text-sm font-medium text-indigo-600 sm:text-xl sm:leading-8">
            Sun
          </div>
          <div className="flex items-center justify-center bg-indigo-50 px-2.5 py-5 text-sm font-medium text-indigo-600 sm:text-xl sm:leading-8">
            Mon
          </div>
          <div className="flex items-center justify-center bg-indigo-50 px-2.5 py-5 text-sm font-medium text-indigo-600 sm:text-xl sm:leading-8">
            Tue
          </div>
          <div className="flex items-center justify-center bg-indigo-50 px-2.5 py-5 text-sm font-medium text-indigo-600 sm:text-xl sm:leading-8">
            Wed
          </div>
          <div className="flex items-center justify-center bg-indigo-50 px-2.5 py-5 text-sm font-medium text-indigo-600 sm:text-xl sm:leading-8">
            Thu
          </div>
          <div className="flex items-center justify-center bg-indigo-50 px-2.5 py-5 text-sm font-medium text-indigo-600 sm:text-xl sm:leading-8">
            Fri
          </div>
          <div className="flex items-center justify-center bg-indigo-50 px-2.5 py-5 text-sm font-medium text-indigo-600 sm:text-xl sm:leading-8">
            Sat
          </div>
        </div>
        <div className="grid grid-cols-7 border border-gray-200">
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-gray-400 transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              31
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              01
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              02
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              03
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              04
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              05
            </span>
          </div>
          <div className="group flex h-16 justify-center border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              06
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              07
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              08
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="items-center justify-center rounded-full text-sm leading-8 font-medium text-indigo-600 sm:flex sm:h-12 sm:w-12 sm:bg-indigo-600 sm:text-xl sm:text-white">
              09
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              10
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              11
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              12
            </span>
          </div>
          <div className="group flex h-16 justify-center border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              13
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              14
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              15
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              16
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              17
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              18
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              19
            </span>
          </div>
          <div className="group flex h-16 justify-center border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              20
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="textsm items-center justify-center rounded-full leading-8 font-medium text-indigo-600 sm:flex sm:h-12 sm:w-12 sm:bg-indigo-600 sm:text-xl sm:text-white">
              21
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              22
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              23
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              24
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              25
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              26
            </span>
          </div>
          <div className="group flex h-16 justify-center border-b border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              27
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              28
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              29
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              30
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              31
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-gray-400 transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              01
            </span>
          </div>
          <div className="group flex h-16 justify-center border-r border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-gray-400 transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              02
            </span>
          </div>
          <div className="group flex h-16 justify-center border-gray-200 p-2 transition-all duration-300 hover:bg-indigo-50 lg:h-36 lg:p-2.5">
            <span className="text-sm leading-8 font-medium text-gray-400 transition-all duration-300 group-hover:text-indigo-600 sm:text-xl">
              03
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
