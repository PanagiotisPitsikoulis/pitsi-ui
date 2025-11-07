export default function BorderlessStackedCalendar() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <h6 className="text-xl font-semibold leading-8 text-gray-900">
              2024
            </h6>
            <div className="flex items-center gap-2">
              <button className="text-gray-500 transition-all duration-300 hover:text-gray-900 hover:bg-gray-50"></button>
              <button className="text-gray-500 transition-all duration-300 hover:text-gray-900 hover:bg-gray-50"></button>
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
              className="dropdown-toggle inline-flex justify-center items-center gap-2 py-1.5 px-2.5 text-sm bg-gray-50 text-gray-900 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-100 "
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h6 className="py-2 text-sm font-medium text-gray-900 text-center mb-2.5">
              January
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 border border-gray-100 rounded-lg">
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 rounded-tl-lg transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-tr-lg transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-bl-lg transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                4
              </div>
              <div className="border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-br-lg transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
          <div>
            <h6 className="py-2 text-sm font-medium text-gray-900 text-center mb-2.5">
              February
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 border border-gray-100 rounded-lg">
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 rounded-tl-lg transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-tr-lg transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-bl-lg transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                4
              </div>
              <div className="border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-br-lg transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
          <div>
            <h6 className="py-2 text-sm font-medium text-gray-900 text-center mb-2.5">
              March
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 border border-gray-100 rounded-lg">
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 rounded-tl-lg transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-tr-lg transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-bl-lg transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                4
              </div>
              <div className="border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-br-lg transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
          <div>
            <h6 className="py-2 text-sm font-medium text-gray-900 text-center mb-2.5">
              April
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 border border-gray-100 rounded-lg">
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 rounded-tl-lg transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-tr-lg transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-bl-lg transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                4
              </div>
              <div className="border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-br-lg transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
          <div>
            <h6 className="py-2 text-sm font-medium text-gray-900 text-center mb-2.5">
              May
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 border border-gray-100 rounded-lg">
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 rounded-tl-lg transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-tr-lg transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-bl-lg transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                4
              </div>
              <div className="border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-br-lg transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
          <div>
            <h6 className="py-2 text-sm font-medium text-gray-900 text-center mb-2.5">
              June
            </h6>
            <div className="grid grid-cols-7">
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                M
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                W
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                T
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                F
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
              <div className="flex py-2.5 items-center justify-center text-sm font-medium text-gray-900">
                S
              </div>
            </div>
            <div className="grid grid-cols-7 border border-gray-100 rounded-lg">
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 rounded-tl-lg transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-tr-lg transition-all duration-300 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                4
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                5
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                6
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                7
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                8
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                9
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                10
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                11
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                12
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                13
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                14
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                15
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                16
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                17
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                18
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                19
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                20
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                21
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                22
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                23
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                24
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                25
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                26
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                27
              </div>
              <div className="border-r border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                28
              </div>
              <div className="border-b border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                29
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-bl-lg transition-all duration-300 hover:bg-gray-100">
                30
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100">
                31
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                1
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                2
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                3
              </div>
              <div className="border-r border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                4
              </div>
              <div className="border-gray-100 py-3 flex items-center justify-center text-xs font-medium text-gray-900 rounded-br-lg transition-all duration-300 bg-gray-50 hover:bg-gray-100">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
