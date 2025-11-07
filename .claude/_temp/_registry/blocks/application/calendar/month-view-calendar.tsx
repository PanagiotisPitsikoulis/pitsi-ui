export default function MonthViewCalendar() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14">
        <div className="flex  items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-4">
            <h5 className="text-xl leading-8 font-semibold text-gray-900">
              January 2024
            </h5>
            <div className="flex items-center gap-2">
              <button className="hidden md:flex py-2 pl-1.5 pr-3 rounded-md bg-gray-50 border border-gray-300 items-center gap-1.5 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100">
                Today
              </button>
              <button className="text-gray-500 rounded transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"></button>
              <button className="text-gray-500 rounded transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"></button>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 ">
            <div className="flex items-center gap-2">
              <button className="p-3 text-gray-500 flex items-center justify-center transition-all duration-300 hover:text-gray-900"></button>
              <span className="w-px h-7 bg-gray-200" />
              <button className="p-3 text-gray-500 flex items-center justify-center transition-all duration-300 hover:text-gray-900"></button>
            </div>
            <div className="flex items-center gap-px p-1 rounded-md bg-gray-100">
              <button className="py-2.5 px-5 rounded-lg bg-gray-100 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white">
                Day
              </button>
              <button className="py-2.5 px-5 rounded-lg bg-white text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white">
                Week
              </button>
              <button className="py-2.5 px-5 rounded-lg bg-gray-100 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white">
                Month
              </button>
            </div>
          </div>
          <div className="dropdown relative inline-flex md:hidden">
            <button
              data-target="dropdown-default"
              className="dropdown-toggle inline-flex justify-center items-center gap-2 py-1.5 px-2.5 text-sm bg-gray-50 text-gray-900 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-100 "
            ></button>
            <div
              id="dropdown-default"
              className="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full w-max -left-20 mt-2 open"
              aria-labelledby="dropdown-default"
            >
              <ul className="py-2">
                <li>
                  <a
                    className="block px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium"
                    href="javascript:;"
                  >
                    Current Date
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium"
                    href="javascript:;"
                  >
                    Add Event
                  </a>
                </li>
                <li className="bg-gray-300 w-full h-px" />
                <li>
                  <a
                    className="block px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium"
                    href="javascript:;"
                  >
                    Viwe Day
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium"
                    href="javascript:;"
                  >
                    Viwe Week
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium"
                    href="javascript:;"
                  >
                    Viwe month
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border border-gray-200">
          <div className="grid grid-cols-7  divide-gray-200 border-b border-gray-200">
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Sun</span>
              <span className="text-sm font-medium text-gray-900">09</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Mon</span>
              <span className="text-sm font-medium text-gray-900">10</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Tue</span>
              <span className="text-sm font-medium text-gray-900">11</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Wed</span>
              <span className="text-sm font-medium text-gray-900">12</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Thu</span>
              <span className="text-sm font-medium text-gray-900">13</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Fri</span>
              <span className="text-sm font-medium text-gray-900">14</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Sat</span>
              <span className="text-sm font-medium text-gray-900">15</span>
            </div>
          </div>
          <div className="grid grid-cols-7 divide-gray-200">
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
                27
              </span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
                28
              </span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
                29
              </span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
                30
              </span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
                31
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                1
              </span>
            </div>
            <div className="p-3.5  border-b border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                2
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                3
              </span>
              <span className="hidden lg:block text-xs font-medium text-gray-500">
                Meeting with marketing department
              </span>
              <span className="lg:hidden w-2 h-2 rounded-full bg-gray-400" />
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                4
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                5
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                6
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                7
              </span>
              <span className="hidden lg:block text-xs font-medium text-gray-500">
                Developer Meetup
              </span>
              <span className="lg:hidden w-2 h-2 rounded-full bg-gray-400" />
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                8
              </span>
            </div>
            <div className="p-3.5  border-b  border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                9
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                10
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                11
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-white flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600">
                12
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                13
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                14
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                15
              </span>
            </div>
            <div className="p-3.5  border-b border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                16
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                17
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                18
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                19
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                20
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                21
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                22
              </span>
            </div>
            <div className="p-3.5  border-b border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                23
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                24
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                25
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                26
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                27
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                28
              </span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                29
              </span>
            </div>
            <div className="p-3.5  border-b border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                30
              </span>
            </div>
            <div className="p-3.5    xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">
                31
              </span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
                1
              </span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
                2
              </span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
                3
              </span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
                4
              </span>
              <span className="hidden lg:block text-xs font-medium text-gray-500">
                Meet with friends <br /> 9PM
              </span>
              <span className="lg:hidden w-2 h-2 rounded-full bg-gray-400" />
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
                5
              </span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
                6
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:hidden py-8 px-2.5 ">
          <div className="bg-gray-50 w-full rounded-xl">
            <div className="p-3 w-full flex items-center justify-between group transition-all duration-300">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-900">
                  Meet with friends
                </span>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-medium text-gray-600">9AM</span>
                </div>
              </div>
              <button className="py-1 px-2 rounded border border-gray-400 text-xs font-medium text-gray-900 opacity-0 transition-all duration-500 group-hover:opacity-100">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
