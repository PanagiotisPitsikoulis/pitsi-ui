export default function SideBySideCalendarWithEvents() {
  return (
    <section className="relative bg-stone-50">
      <div className="absolute top-1 z-0 h-40 w-full rounded-full bg-sky-400 opacity-20 max-sm:right-0 sm:left-56 sm:w-40" />
      <div className="absolute top-0 -left-0 z-0 h-24 w-full bg-emerald-500 opacity-20 sm:w-40" />
      <div className="absolute top-40 -left-0 z-0 h-24 w-full bg-purple-600 opacity-20 sm:w-40" />
      <div className="relative z-10 w-full py-24 backdrop-blur-3xl">
        <div className="mx-auto w-full max-w-7xl px-2 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-12 gap-8 xl:max-w-full">
            <div className="col-span-12 xl:col-span-5">
              <h2 className="font-manrope mb-1.5 text-3xl leading-tight text-gray-900">
                Upcoming Events
              </h2>
              <p className="mb-8 text-lg font-normal text-gray-600">
                Don’t miss schedule
              </p>
              <div className="flex flex-col gap-5">
                <div className="rounded-xl bg-white p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-purple-600" />
                      <p className="text-base font-medium text-gray-900">
                        Jan 10,2020 - 10:00 - 11:00
                      </p>
                    </div>
                    <div className="dropdown relative inline-flex">
                      <button
                        data-target="dropdown-default"
                        className="dropdown-toggle inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-1 py-2.5 text-center text-sm font-semibold text-black shadow-xs transition-all duration-500 hover:text-purple-600"
                      ></button>
                      <div
                        id="dropdown-default"
                        className="dropdown-menu absolute top-full -left-10 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                        aria-labelledby="dropdown-default"
                      >
                        <ul className="py-2">
                          <li>
                            <a
                              className="block px-6 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100"
                              href="javascript:;"
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              className="block px-6 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100"
                              href="javascript:;"
                            >
                              Remove
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-1 text-xl leading-8 font-semibold text-black">
                    Meeting with a friends
                  </h6>
                  <p className="text-base font-normal text-gray-600">
                    Meet-Up for Travel Destination Discussion
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                      <p className="text-base font-medium text-gray-900">
                        Jan 10,2020 - 05:40 - 13:00
                      </p>
                    </div>
                    <div className="dropdown relative inline-flex">
                      <button
                        data-target="dropdown-a"
                        className="dropdown-toggle inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-1 py-2.5 text-center text-sm font-semibold text-black shadow-xs transition-all duration-500 hover:text-sky-400"
                      ></button>
                      <div
                        id="dropdown-a"
                        className="dropdown-menu absolute top-full -left-10 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                        aria-labelledby="dropdown-a"
                      >
                        <ul className="py-2">
                          <li>
                            <a
                              className="block px-6 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100"
                              href="javascript:;"
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              className="block px-6 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100"
                              href="javascript:;"
                            >
                              Remove
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-1 text-xl leading-8 font-semibold text-black">
                    Visiting online courcse
                  </h6>
                  <p className="text-base font-normal text-gray-600">
                    Checks updates for design course
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                      <p className="text-base font-medium text-gray-900">
                        Jan 14, 2020 10:00 - 11:00
                      </p>
                    </div>
                    <div className="dropdown relative inline-flex">
                      <button
                        data-target="dropdown-b"
                        className="dropdown-toggle inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-1 py-2.5 text-center text-sm font-semibold text-black shadow-xs transition-all duration-500 hover:text-emerald-600"
                      ></button>
                      <div
                        id="dropdown-b"
                        className="dropdown-menu absolute top-full -left-10 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                        aria-labelledby="dropdown-b"
                      >
                        <ul className="py-2">
                          <li>
                            <a
                              className="block px-6 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100"
                              href="javascript:;"
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              className="block px-6 py-2 text-xs font-medium text-gray-600 hover:bg-gray-100"
                              href="javascript:;"
                            >
                              Remove
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-1 text-xl leading-8 font-semibold text-black">
                    Development meet
                  </h6>
                  <p className="text-base font-normal text-gray-600">
                    Discussion with developer for upcoming project
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 rounded-2xl bg-gradient-to-b from-white/25 to-white px-2.5 py-5 max-xl:row-start-1 sm:p-8 xl:col-span-7 xl:bg-white">
              <div className="mb-5 flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex items-center gap-4">
                  <h5 className="text-xl leading-8 font-semibold text-gray-900">
                    January 2024
                  </h5>
                  <div className="flex items-center">
                    <button className="rounded p-1 text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"></button>
                    <button className="rounded p-1 text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"></button>
                  </div>
                </div>
                <div className="flex items-center gap-px rounded-md bg-indigo-50 p-1">
                  <button className="rounded-lg bg-indigo-50 px-5 py-2.5 text-sm font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                    Day
                  </button>
                  <button className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                    Week
                  </button>
                  <button className="rounded-lg bg-indigo-50 px-5 py-2.5 text-sm font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                    Month
                  </button>
                </div>
              </div>
              <div className="rounded-xl border border-indigo-200">
                <div className="grid grid-cols-7 rounded-t-3xl border-b border-indigo-200">
                  <div className="flex items-center justify-center rounded-tl-xl border-r border-indigo-200 bg-indigo-50 py-3.5 text-sm font-medium text-indigo-600">
                    Sun
                  </div>
                  <div className="flex items-center justify-center border-r border-indigo-200 bg-indigo-50 py-3.5 text-sm font-medium text-indigo-600">
                    Mon
                  </div>
                  <div className="flex items-center justify-center border-r border-indigo-200 bg-indigo-50 py-3.5 text-sm font-medium text-indigo-600">
                    Tue
                  </div>
                  <div className="flex items-center justify-center border-r border-indigo-200 bg-indigo-50 py-3.5 text-sm font-medium text-indigo-600">
                    Wed
                  </div>
                  <div className="flex items-center justify-center border-r border-indigo-200 bg-indigo-50 py-3.5 text-sm font-medium text-indigo-600">
                    Thu
                  </div>
                  <div className="flex items-center justify-center border-r border-indigo-200 bg-indigo-50 py-3.5 text-sm font-medium text-indigo-600">
                    Fri
                  </div>
                  <div className="flex items-center justify-center rounded-tr-xl bg-indigo-50 py-3.5 text-sm font-medium text-indigo-600">
                    Sat
                  </div>
                </div>
                <div className="grid grid-cols-7 rounded-b-xl">
                  <div className="flex border-r border-b border-indigo-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-400">
                      27
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-400">
                      28
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-400">
                      29
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-400">
                      30
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-400">
                      31
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      1
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      2
                    </span>
                  </div>
                  <div className="relative flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      3
                    </span>
                    <div className="absolute top-9 bottom-1 left-3.5 h-max rounded bg-purple-50 p-1.5 xl:px-2.5">
                      <p className="mb-px hidden text-xs font-medium text-purple-600 xl:block">
                        Meeting
                      </p>
                      <span className="hidden text-xs font-normal whitespace-nowrap text-purple-600 xl:block">
                        10:00 - 11:00
                      </span>
                      <p className="h-2 w-2 rounded-full bg-purple-600 xl:hidden" />
                    </div>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      4
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      5
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      6
                    </span>
                  </div>
                  <div className="relative flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      7
                    </span>
                    <div className="absolute top-9 bottom-1 left-3.5 h-max rounded bg-emerald-50 p-1.5 xl:px-2.5">
                      <p className="mb-px hidden text-xs font-medium whitespace-nowrap text-emerald-600 xl:block">
                        Developer Meetup
                      </p>
                      <span className="hidden text-xs font-normal whitespace-nowrap text-emerald-600 xl:block">
                        10:00 - 11:00
                      </span>
                      <p className="h-2 w-2 rounded-full bg-emerald-600 xl:hidden" />
                    </div>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      8
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="items-center justify-center rounded-full text-xs font-semibold text-indigo-600 sm:flex sm:h-6 sm:w-6 sm:bg-indigo-600 sm:text-white">
                      9
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      10
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      11
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      12
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      13
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      14
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      15
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      16
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      17
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      18
                    </span>
                  </div>
                  <div className="relative flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      19
                    </span>
                    <div className="absolute top-9 bottom-1 left-3.5 h-max rounded bg-sky-50 p-1.5 xl:px-2.5">
                      <p className="mb-px hidden text-xs font-medium whitespace-nowrap text-sky-600 xl:block">
                        Developer Meetup
                      </p>
                      <span className="hidden text-xs font-normal whitespace-nowrap text-sky-600 xl:block">
                        10:00 - 11:00
                      </span>
                      <p className="h-2 w-2 rounded-full bg-sky-600 xl:hidden" />
                    </div>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      20
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      21
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      22
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      23
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      24
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      25
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      26
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      27
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      28
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      29
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-b border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      30
                    </span>
                  </div>
                  <div className="flex cursor-pointer rounded-bl-xl border-r border-indigo-200 bg-white p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-900">
                      31
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-indigo-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-400">
                      1
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-indigo-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-400">
                      2
                    </span>
                  </div>
                  <div className="flex cursor-pointer border-r border-indigo-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-400">
                      3
                    </span>
                  </div>
                  <div className="relative flex cursor-pointer border-r border-indigo-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-400">
                      4
                    </span>
                    <div className="absolute top-9 bottom-1 left-3.5 h-max rounded bg-purple-50 p-1.5 xl:px-2.5">
                      <p className="mb-px hidden text-xs font-medium whitespace-nowrap text-purple-600 xl:block">
                        Friends Meet
                      </p>
                      <span className="hidden text-xs font-normal whitespace-nowrap text-purple-600 xl:block">
                        09:00 - 13:42
                      </span>
                      <p className="h-2 w-2 rounded-full bg-purple-600 xl:hidden" />
                    </div>
                  </div>
                  <div className="flex cursor-pointer border-r border-indigo-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-400">
                      5
                    </span>
                  </div>
                  <div className="flex cursor-pointer rounded-br-xl border-indigo-200 bg-gray-50 p-3.5 transition-all duration-300 hover:bg-indigo-50 max-xl:min-h-[60px] xl:aspect-square">
                    <span className="text-xs font-semibold text-gray-400">
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
