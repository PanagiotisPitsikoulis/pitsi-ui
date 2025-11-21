export default function WeekViewCalendarWithTime() {
  return (
    <section className="relative bg-stone-50 py-24">
      <div className="mx-auto w-full max-w-7xl overflow-x-auto px-6 lg:px-8">
        <div className="mb-5 flex flex-col items-center justify-between max-md:gap-3 md:flex-row">
          <div className="flex items-center gap-4">
            <h6 className="text-xl leading-8 font-semibold text-gray-900">
              Today, January 2024
            </h6>
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
          <button className="flex items-center gap-2 rounded-xl bg-indigo-600 py-2.5 pr-7 pl-5 text-base font-semibold text-white transition-all duration-300 hover:bg-indigo-700">
            New Activity
          </button>
        </div>
        <div className="relative">
          <div className="sticky top-0 left-0 grid w-full grid-cols-7 border-t border-gray-200">
            <div className="flex items-center justify-center p-3.5 text-sm font-medium text-gray-900" />
            <div className="flex items-center justify-center p-3.5 text-sm font-medium text-gray-900">
              Jan 7
            </div>
            <div className="flex items-center justify-center p-3.5 text-sm font-medium text-gray-900">
              Jan 8
            </div>
            <div className="flex items-center justify-center p-3.5 text-sm font-medium text-indigo-600">
              Jan 9
            </div>
            <div className="flex items-center justify-center p-3.5 text-sm font-medium text-gray-900">
              Jan 10
            </div>
            <div className="flex items-center justify-center p-3.5 text-sm font-medium text-gray-900">
              Jan 11
            </div>
            <div className="flex items-center justify-center p-3.5 text-sm font-medium text-gray-900">
              Jan 12
            </div>
          </div>
          <div className="hidden w-full grid-cols-7 overflow-x-auto sm:grid">
            <div className="flex h-32 items-end border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <span className="text-xs font-semibold text-gray-400">
                07:00 am
              </span>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <div className="rounded border-l-2 border-purple-600 bg-purple-50 p-1.5">
                <p className="mb-px text-xs font-normal text-gray-900">
                  Pickup the grandmother
                </p>
                <p className="text-xs font-semibold text-purple-600">
                  06:00 - 07:30
                </p>
              </div>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <div className="rounded border-l-2 border-green-600 bg-green-50 p-1.5">
                <p className="mb-px text-xs font-normal text-gray-900">
                  Workout and Yoga Session
                </p>
                <p className="text-xs font-semibold text-green-600">
                  06:00 - 07:55
                </p>
              </div>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="flex h-32 items-end border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <span className="text-xs font-semibold text-gray-400">
                08:00 am
              </span>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="flex h-32 items-end border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <div className="rounded border-l-2 border-blue-600 bg-blue-50 p-1.5">
                <p className="mb-px text-xs font-normal text-gray-900">
                  Project Task Review
                </p>
                <p className="text-xs font-semibold text-blue-600">
                  08:00 - 08:25
                </p>
              </div>
            </div>
            <div className="h-32 border-t border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="flex h-32 items-end border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <span className="text-xs font-semibold text-gray-400">
                09:00 am
              </span>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <div className="rounded border-l-2 border-yellow-600 bg-yellow-50 p-1.5">
                <p className="mb-px text-xs font-normal text-gray-900">
                  Breakfast with Dhruv Patel
                </p>
                <p className="text-xs font-semibold text-yellow-600">
                  08:00 - 09:00
                </p>
              </div>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="flex h-32 items-end border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <span className="text-xs font-semibold text-gray-400">
                10:00 am
              </span>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <div className="rounded border-l-2 border-green-600 bg-green-50 p-1.5">
                <p className="mb-px text-xs font-normal text-gray-900">
                  Dancing Zumba class
                </p>
                <p className="text-xs font-semibold text-green-600">
                  09:30 - 10:00
                </p>
              </div>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <div className="rounded border-l-2 border-purple-600 bg-purple-50 p-1.5">
                <p className="mb-px text-xs font-normal text-gray-900">
                  Doctor’s Appointment for Mother
                </p>
                <p className="text-xs font-semibold text-purple-600">
                  09:00 - 10:45
                </p>
              </div>
            </div>
            <div className="flex h-32 items-end border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <span className="text-xs font-semibold text-gray-400">
                11:00 am
              </span>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <div className="rounded border-l-2 border-blue-600 bg-blue-50 p-1.5">
                <p className="mb-px text-xs font-normal text-gray-900">
                  Daily Standup Meeting
                </p>
                <p className="text-xs font-semibold text-blue-600">
                  10:00 - 11:00
                </p>
              </div>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <div className="rounded border-l-2 border-yellow-600 bg-yellow-50 p-1.5">
                <p className="mb-px text-xs font-normal text-gray-900">
                  School Friend’s Birthday Party
                </p>
                <p className="text-xs font-semibold text-yellow-600">
                  10:00 - 11:45
                </p>
              </div>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="flex h-32 items-end border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <span className="text-xs font-semibold text-gray-400">
                12:00 pm
              </span>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28">
              <div className="rounded border-l-2 border-blue-600 bg-blue-50 p-1.5">
                <p className="mb-px text-xs font-normal text-gray-900">
                  Meeting with Project Manager{" "}
                </p>
                <p className="text-xs font-semibold text-blue-600">
                  11:00 - 12:30
                </p>
              </div>
            </div>
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-r border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
            <div className="h-32 border-t border-gray-200 p-0.5 transition-all hover:bg-stone-100 md:p-3.5 lg:h-28" />
          </div>
          <div className="flex w-full items-center border-t border-gray-200 sm:hidden">
            <div className="flex flex-col">
              <div className="flex h-20 w-20 items-end border-r border-b border-gray-200 p-2 text-xs font-semibold text-gray-400">
                07:00 am
              </div>
              <div className="flex h-20 w-20 items-end border-r border-b border-gray-200 p-2 text-xs font-semibold text-gray-400">
                08:00 am
              </div>
              <div className="flex h-20 w-20 items-end border-r border-b border-gray-200 p-2 text-xs font-semibold text-gray-400">
                09:00 am
              </div>
              <div className="flex h-20 w-20 items-end border-r border-b border-gray-200 p-2 text-xs font-semibold text-gray-400">
                10:00 am
              </div>
              <div className="flex h-20 w-20 items-end border-r border-b border-gray-200 p-2 text-xs font-semibold text-gray-400">
                11:00 am
              </div>
              <div className="flex h-20 w-20 items-end border-r border-b border-gray-200 p-2 text-xs font-semibold text-gray-400">
                12:00 pm
              </div>
            </div>
            <div className="grid w-full grid-cols-1">
              <div className="h-20 w-full border-b border-gray-200 p-1.5">
                <div className="h-full w-full rounded border-l-2 border-purple-600 bg-purple-50 p-1.5">
                  <p className="mb-px text-xs font-normal text-gray-900">
                    Pickup the grandmother
                  </p>
                  <p className="text-xs font-semibold text-purple-600">
                    06:00 - 07:30
                  </p>
                </div>
              </div>
              <div className="h-20 w-full border-b border-gray-200 p-1.5" />
              <div className="h-20 w-full border-b border-gray-200 p-1.5" />
              <div className="h-20 w-full border-b border-gray-200 p-1.5" />
              <div className="h-20 w-full border-b border-gray-200 p-1.5" />
              <div className="h-20 w-full border-b border-gray-200 p-1.5">
                <div className="h-full w-full rounded border-l-2 border-blue-600 bg-blue-50 p-1.5">
                  <p className="mb-px text-xs font-normal text-gray-900">
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
  )
}
