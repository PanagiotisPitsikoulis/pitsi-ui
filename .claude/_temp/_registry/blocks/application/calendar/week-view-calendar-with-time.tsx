export default function WeekViewCalendarWithTime() {
  return (
    <section className="relative bg-stone-50 py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 overflow-x-auto">
        <div className="flex flex-col md:flex-row max-md:gap-3 items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            <h6 className="text-xl leading-8 font-semibold text-gray-900">
              Today, January 2024
            </h6>
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
          <button className="py-2.5 pr-7 pl-5 bg-indigo-600 rounded-xl flex items-center gap-2 text-base font-semibold text-white transition-all duration-300 hover:bg-indigo-700">
            New Activity
          </button>
        </div>
        <div className=" relative">
          <div className="grid grid-cols-7 border-t border-gray-200 sticky top-0 left-0 w-full">
            <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900" />
            <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900">
              Jan 7
            </div>
            <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900">
              Jan 8
            </div>
            <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-indigo-600">
              Jan 9
            </div>
            <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900">
              Jan 10
            </div>
            <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900">
              Jan 11
            </div>
            <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900">
              Jan 12
            </div>
          </div>
          <div className="hidden grid-cols-7 sm:grid w-full overflow-x-auto">
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
              <span className="text-xs font-semibold text-gray-400">
                07:00 am
              </span>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
              <div className="rounded p-1.5 border-l-2 border-purple-600 bg-purple-50">
                <p className="text-xs font-normal text-gray-900 mb-px">
                  Pickup the grandmother
                </p>
                <p className="text-xs font-semibold text-purple-600">
                  06:00 - 07:30
                </p>
              </div>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
              <div className="rounded p-1.5 border-l-2 border-green-600 bg-green-50">
                <p className="text-xs font-normal text-gray-900 mb-px">
                  Workout and Yoga Session
                </p>
                <p className="text-xs font-semibold text-green-600">
                  06:00 - 07:55
                </p>
              </div>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t  border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
              <span className="text-xs font-semibold text-gray-400">
                08:00 am
              </span>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
              <div className="rounded p-1.5 border-l-2 border-blue-600 bg-blue-50">
                <p className="text-xs font-normal text-gray-900 mb-px">
                  Project Task Review
                </p>
                <p className="text-xs font-semibold text-blue-600">
                  08:00 - 08:25
                </p>
              </div>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
              <span className="text-xs font-semibold text-gray-400">
                09:00 am
              </span>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
              <div className="rounded p-1.5 border-l-2 border-yellow-600 bg-yellow-50">
                <p className="text-xs font-normal text-gray-900 mb-px">
                  Breakfast with Dhruv Patel
                </p>
                <p className="text-xs font-semibold text-yellow-600">
                  08:00 - 09:00
                </p>
              </div>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
              <span className="text-xs font-semibold text-gray-400">
                10:00 am
              </span>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
              <div className="rounded p-1.5 border-l-2 border-green-600 bg-green-50">
                <p className="text-xs font-normal text-gray-900 mb-px">
                  Dancing Zumba class
                </p>
                <p className="text-xs font-semibold text-green-600">
                  09:30 - 10:00
                </p>
              </div>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-gray-200 transition-all hover:bg-stone-100">
              <div className="rounded p-1.5 border-l-2 border-purple-600 bg-purple-50">
                <p className="text-xs font-normal text-gray-900 mb-px">
                  Doctor’s Appointment for Mother
                </p>
                <p className="text-xs font-semibold text-purple-600">
                  09:00 - 10:45
                </p>
              </div>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
              <span className="text-xs font-semibold text-gray-400">
                11:00 am
              </span>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
              <div className="rounded p-1.5 border-l-2 border-blue-600 bg-blue-50">
                <p className="text-xs font-normal text-gray-900 mb-px">
                  Daily Standup Meeting
                </p>
                <p className="text-xs font-semibold text-blue-600">
                  10:00 - 11:00
                </p>
              </div>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
              <div className="rounded p-1.5 border-l-2 border-yellow-600 bg-yellow-50">
                <p className="text-xs font-normal text-gray-900 mb-px">
                  School Friend’s Birthday Party
                </p>
                <p className="text-xs font-semibold text-yellow-600">
                  10:00 - 11:45
                </p>
              </div>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 flex items-end transition-all hover:bg-stone-100">
              <span className="text-xs font-semibold text-gray-400">
                12:00 pm
              </span>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100">
              <div className="rounded p-1.5 border-l-2 border-blue-600 bg-blue-50">
                <p className="text-xs font-normal text-gray-900 mb-px">
                  Meeting with Project Manager{" "}
                </p>
                <p className="text-xs font-semibold text-blue-600">
                  11:00 - 12:30
                </p>
              </div>
            </div>
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-r border-gray-200 transition-all hover:bg-stone-100" />
            <div className="h-32 lg:h-28 p-0.5 md:p-3.5   border-t border-gray-200 transition-all hover:bg-stone-100" />
          </div>
          <div className="flex sm:hidden border-t border-gray-200 items-center w-full">
            <div className="flex flex-col">
              <div className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">
                07:00 am
              </div>
              <div className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">
                08:00 am
              </div>
              <div className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">
                09:00 am
              </div>
              <div className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">
                10:00 am
              </div>
              <div className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">
                11:00 am
              </div>
              <div className="w-20 h-20 p-2 flex items-end text-xs font-semibold text-gray-400 border-b border-r border-gray-200">
                12:00 pm
              </div>
            </div>
            <div className="grid grid-cols-1 w-full">
              <div className="w-full h-20 border-b border-gray-200 p-1.5">
                <div className="w-full h-full rounded p-1.5 border-l-2 border-purple-600 bg-purple-50">
                  <p className="text-xs font-normal text-gray-900 mb-px">
                    Pickup the grandmother
                  </p>
                  <p className="text-xs font-semibold text-purple-600">
                    06:00 - 07:30
                  </p>
                </div>
              </div>
              <div className="w-full h-20 border-b border-gray-200 p-1.5" />
              <div className="w-full h-20 border-b border-gray-200 p-1.5" />
              <div className="w-full h-20 border-b border-gray-200 p-1.5" />
              <div className="w-full h-20 border-b border-gray-200 p-1.5" />
              <div className="w-full h-20 border-b border-gray-200 p-1.5">
                <div className="w-full h-full rounded p-1.5 border-l-2 border-blue-600 bg-blue-50">
                  <p className="text-xs font-normal text-gray-900 mb-px">
                    Meeting with Project Manager{" "}
                  </p>
                  <p className="text-xs font-semibold text-blue-600">
                    11:00 - 12:30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
