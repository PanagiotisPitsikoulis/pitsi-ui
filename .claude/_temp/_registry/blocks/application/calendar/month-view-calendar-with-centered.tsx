export default function MonthViewCalendarWithCentered() {
  return (
    <section className="relative py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 overflow-x-auto">
        <div className="flex flex-col md:flex-row max-md:gap-3 items-center justify-between mb-8 md:mb-14">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl leading-snug font-bold text-black">
              Calender
            </h3>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="text-indigo-600 transition-all rounded-md p-1.5 duration-300 hover:text-white hover:bg-indigo-600"></button>
            <h6 className="text-xl leading-8 font-semibold text-gray-900">
              January 2024
            </h6>
            <button className="text-indigo-600 transition-all rounded-md p-1.5 duration-300 hover:text-white hover:bg-indigo-600"></button>
          </div>
          <div className="flex items-center gap-px rounded-lg bg-gray-100 p-1">
            <button className="rounded-lg py-2.5 px-5 text-sm font-medium text-gray-500 transition-all duration-300 hover:bg-white hover:text-indigo-600">
              Day
            </button>
            <button className="rounded-lg py-2.5 px-5 text-sm font-medium text-indigo-600 bg-white transition-all duration-300 hover:bg-white hover:text-indigo-600">
              Week
            </button>
            <button className="rounded-lg py-2.5 px-5 text-sm font-medium text-gray-500 transition-all duration-300 hover:bg-white hover:text-indigo-600">
              Month
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7">
          <div className="py-5 px-2.5 flex items-center justify-center bg-indigo-50 text-sm sm:text-xl sm:leading-8 font-medium text-indigo-600">
            Sun
          </div>
          <div className="py-5 px-2.5 flex items-center justify-center bg-indigo-50 text-sm sm:text-xl sm:leading-8 font-medium text-indigo-600">
            Mon
          </div>
          <div className="py-5 px-2.5 flex items-center justify-center bg-indigo-50 text-sm sm:text-xl sm:leading-8 font-medium text-indigo-600">
            Tue
          </div>
          <div className="py-5 px-2.5 flex items-center justify-center bg-indigo-50 text-sm sm:text-xl sm:leading-8 font-medium text-indigo-600">
            Wed
          </div>
          <div className="py-5 px-2.5 flex items-center justify-center bg-indigo-50 text-sm sm:text-xl sm:leading-8 font-medium text-indigo-600">
            Thu
          </div>
          <div className="py-5 px-2.5 flex items-center justify-center bg-indigo-50 text-sm sm:text-xl sm:leading-8 font-medium text-indigo-600">
            Fri
          </div>
          <div className="py-5 px-2.5 flex items-center justify-center bg-indigo-50 text-sm sm:text-xl sm:leading-8 font-medium text-indigo-600">
            Sat
          </div>
        </div>
        <div className="grid grid-cols-7 border border-gray-200">
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-gray-400 transition-all duration-300 group-hover:text-indigo-600">
              31
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              01
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              02
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              03
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              04
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              05
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              06
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              07
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              08
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl sm:flex items-center justify-center sm:w-12 sm:h-12 rounded-full sm:bg-indigo-600 leading-8 font-medium text-indigo-600 sm:text-white">
              09
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              10
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              11
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              12
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              13
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              14
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              15
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              16
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              17
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              18
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              19
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              20
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="textsm sm:text-xl sm:flex items-center justify-center sm:w-12 sm:h-12 rounded-full sm:bg-indigo-600 leading-8 font-medium text-indigo-600 sm:text-white">
              21
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              22
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              23
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              24
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              25
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              26
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-b border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              27
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              28
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              29
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              30
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-black transition-all duration-300 group-hover:text-indigo-600">
              31
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-gray-400 transition-all duration-300 group-hover:text-indigo-600">
              01
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-r border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-gray-400 transition-all duration-300 group-hover:text-indigo-600">
              02
            </span>
          </div>
          <div className="group p-2 lg:p-2.5 flex justify-center h-16 lg:h-36 transition-all duration-300 hover:bg-indigo-50 border-gray-200">
            <span className="text-sm sm:text-xl leading-8 font-medium text-gray-400 transition-all duration-300 group-hover:text-indigo-600">
              03
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
