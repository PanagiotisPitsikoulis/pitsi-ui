export default function MonthViewCalendar() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <h5 className="text-xl leading-8 font-semibold text-gray-900">
              January 2024
            </h5>
            <div className="flex items-center gap-2">
              <button className="hidden items-center gap-1.5 rounded-md border border-gray-300 bg-gray-50 py-2 pr-3 pl-1.5 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100 md:flex">
                Today
              </button>
              <button className="rounded text-gray-500 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"></button>
              <button className="rounded text-gray-500 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"></button>
            </div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center p-3 text-gray-500 transition-all duration-300 hover:text-gray-900"></button>
              <span className="h-7 w-px bg-gray-200" />
              <button className="flex items-center justify-center p-3 text-gray-500 transition-all duration-300 hover:text-gray-900"></button>
            </div>
            <div className="flex items-center gap-px rounded-md bg-gray-100 p-1">
              <button className="rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white">
                Day
              </button>
              <button className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white">
                Week
              </button>
              <button className="rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white">
                Month
              </button>
            </div>
          </div>
          <div className="dropdown relative inline-flex md:hidden">
            <button
              data-target="dropdown-default"
              className="dropdown-toggle inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-50 px-2.5 py-1.5 text-center text-sm font-semibold text-gray-900 shadow-xs transition-all duration-500 hover:bg-gray-100"
            ></button>
            <div
              id="dropdown-default"
              className="dropdown-menu open absolute top-full -left-20 mt-2 w-max rounded-xl bg-white shadow-lg"
              aria-labelledby="dropdown-default"
            >
              <ul className="py-2">
                <li>
                  <a
                    className="block px-6 py-2 font-medium text-gray-600 hover:bg-gray-100"
                    href="javascript:;"
                  >
                    Current Date
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-2 font-medium text-gray-600 hover:bg-gray-100"
                    href="javascript:;"
                  >
                    Add Event
                  </a>
                </li>
                <li className="h-px w-full bg-gray-300" />
                <li>
                  <a
                    className="block px-6 py-2 font-medium text-gray-600 hover:bg-gray-100"
                    href="javascript:;"
                  >
                    Viwe Day
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-2 font-medium text-gray-600 hover:bg-gray-100"
                    href="javascript:;"
                  >
                    Viwe Week
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-2 font-medium text-gray-600 hover:bg-gray-100"
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
          <div className="grid grid-cols-7 divide-gray-200 border-b border-gray-200">
            <div className="flex flex-col items-center justify-between border-r border-gray-200 p-3.5 sm:flex-row">
              <span className="text-sm font-medium text-gray-500">Sun</span>
              <span className="text-sm font-medium text-gray-900">09</span>
            </div>
            <div className="flex flex-col items-center justify-between border-r border-gray-200 p-3.5 sm:flex-row">
              <span className="text-sm font-medium text-gray-500">Mon</span>
              <span className="text-sm font-medium text-gray-900">10</span>
            </div>
            <div className="flex flex-col items-center justify-between border-r border-gray-200 p-3.5 sm:flex-row">
              <span className="text-sm font-medium text-gray-500">Tue</span>
              <span className="text-sm font-medium text-gray-900">11</span>
            </div>
            <div className="flex flex-col items-center justify-between border-r border-gray-200 p-3.5 sm:flex-row">
              <span className="text-sm font-medium text-gray-500">Wed</span>
              <span className="text-sm font-medium text-gray-900">12</span>
            </div>
            <div className="flex flex-col items-center justify-between border-r border-gray-200 p-3.5 sm:flex-row">
              <span className="text-sm font-medium text-gray-500">Thu</span>
              <span className="text-sm font-medium text-gray-900">13</span>
            </div>
            <div className="flex flex-col items-center justify-between border-r border-gray-200 p-3.5 sm:flex-row">
              <span className="text-sm font-medium text-gray-500">Fri</span>
              <span className="text-sm font-medium text-gray-900">14</span>
            </div>
            <div className="flex flex-col items-center justify-between p-3.5 sm:flex-row">
              <span className="text-sm font-medium text-gray-500">Sat</span>
              <span className="text-sm font-medium text-gray-900">15</span>
            </div>
          </div>
          <div className="grid grid-cols-7 divide-gray-200">
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-500">
                27
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-500">
                28
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-500">
                29
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-500">
                30
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-500">
                31
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                1
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                2
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                3
              </span>
              <span className="hidden text-xs font-medium text-gray-500 lg:block">
                Meeting with marketing department
              </span>
              <span className="h-2 w-2 rounded-full bg-gray-400 lg:hidden" />
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                4
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                5
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                6
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                7
              </span>
              <span className="hidden text-xs font-medium text-gray-500 lg:block">
                Developer Meetup
              </span>
              <span className="h-2 w-2 rounded-full bg-gray-400 lg:hidden" />
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                8
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                9
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                10
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                11
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                12
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                13
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                14
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                15
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                16
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                17
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                18
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                19
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                20
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                21
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                22
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                23
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                24
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                25
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                26
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                27
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                28
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                29
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-b border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                30
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-gray-200 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-900">
                31
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-gray-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-500">
                1
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-gray-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-500">
                2
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-gray-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-500">
                3
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-gray-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-500">
                4
              </span>
              <span className="hidden text-xs font-medium text-gray-500 lg:block">
                Meet with friends <br /> 9PM
              </span>
              <span className="h-2 w-2 rounded-full bg-gray-400 lg:hidden" />
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-gray-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-500">
                5
              </span>
            </div>
            <div className="flex min-h-[70px] flex-col justify-between border-r border-gray-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-gray-100 max-lg:items-center lg:h-28 xl:aspect-auto">
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-gray-500">
                6
              </span>
            </div>
          </div>
        </div>
        <div className="w-full px-2.5 py-8 lg:hidden">
          <div className="w-full rounded-xl bg-gray-50">
            <div className="group flex w-full items-center justify-between p-3 transition-all duration-300">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-900">
                  Meet with friends
                </span>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-medium text-gray-600">9AM</span>
                </div>
              </div>
              <button className="rounded border border-gray-400 px-2 py-1 text-xs font-medium text-gray-900 opacity-0 transition-all duration-500 group-hover:opacity-100">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
