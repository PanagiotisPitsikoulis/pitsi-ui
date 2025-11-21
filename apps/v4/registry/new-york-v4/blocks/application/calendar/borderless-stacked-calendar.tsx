export default function BorderlessStackedCalendar() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h6 className="text-xl leading-8 font-semibold text-gray-900">
              2024
            </h6>
            <div className="flex items-center gap-2">
              <button className="text-gray-500 transition-all duration-300 hover:bg-gray-50 hover:text-gray-900"></button>
              <button className="text-gray-500 transition-all duration-300 hover:bg-gray-50 hover:text-gray-900"></button>
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
              className="dropdown-toggle inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-50 px-2.5 py-1.5 text-center text-sm font-semibold text-gray-900 shadow-xs transition-all duration-500 hover:bg-gray-100"
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h6 className="mb-2.5 py-2 text-center text-sm font-medium text-gray-900">
              January
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 rounded-lg border border-gray-100">
              <div className="flex items-center justify-center rounded-tl-lg border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center rounded-tr-lg border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center rounded-bl-lg border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center rounded-br-lg border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
          <div>
            <h6 className="mb-2.5 py-2 text-center text-sm font-medium text-gray-900">
              February
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 rounded-lg border border-gray-100">
              <div className="flex items-center justify-center rounded-tl-lg border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center rounded-tr-lg border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center rounded-bl-lg border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center rounded-br-lg border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
          <div>
            <h6 className="mb-2.5 py-2 text-center text-sm font-medium text-gray-900">
              March
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 rounded-lg border border-gray-100">
              <div className="flex items-center justify-center rounded-tl-lg border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center rounded-tr-lg border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center rounded-bl-lg border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center rounded-br-lg border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
          <div>
            <h6 className="mb-2.5 py-2 text-center text-sm font-medium text-gray-900">
              April
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 rounded-lg border border-gray-100">
              <div className="flex items-center justify-center rounded-tl-lg border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center rounded-tr-lg border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center rounded-bl-lg border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center rounded-br-lg border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
          <div>
            <h6 className="mb-2.5 py-2 text-center text-sm font-medium text-gray-900">
              May
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 rounded-lg border border-gray-100">
              <div className="flex items-center justify-center rounded-tl-lg border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center rounded-tr-lg border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center rounded-bl-lg border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center rounded-br-lg border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
          <div>
            <h6 className="mb-2.5 py-2 text-center text-sm font-medium text-gray-900">
              June
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex items-center justify-center py-2.5 text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 rounded-lg border border-gray-100">
              <div className="flex items-center justify-center rounded-tl-lg border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-400 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center rounded-tr-lg border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="flex items-center justify-center border-r border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="flex items-center justify-center border-b border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="flex items-center justify-center rounded-bl-lg border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="flex items-center justify-center border-r border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="flex items-center justify-center rounded-br-lg border-gray-100 bg-gray-50 py-3 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
