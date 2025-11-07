export default function MonthViewCalendarWithCtaButton() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl overflow-x-auto px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center justify-between max-md:gap-3 md:mb-14 md:flex-row">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl leading-snug font-bold text-black">
              Project Calender
            </h3>
          </div>
          <div className="flex items-center gap-4 max-[410px]:flex-col">
            <div className="flex items-center gap-2 rounded-xl border border-indigo-600 px-5 py-2.5">
              <button className="rounded text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"></button>
              <h6 className="py-px text-base font-semibold text-indigo-600">
                March 2024
              </h6>
              <button className="rounded text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"></button>
            </div>
            <button className="flex items-center gap-2 rounded-xl bg-indigo-600 py-3 pr-5 pl-7 text-base font-semibold text-white">
              Add New
            </button>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200">
          <div className="grid grid-cols-7">
            <div className="flex items-center justify-center rounded-tl-xl border-r border-b border-gray-200 p-2.5 py-5 text-base font-medium text-black sm:text-xl sm:leading-8">
              Mon
            </div>
            <div className="flex items-center justify-center border-r border-b border-gray-200 p-2.5 py-5 text-base font-medium text-black sm:text-xl sm:leading-8">
              Tue
            </div>
            <div className="flex items-center justify-center border-r border-b border-gray-200 p-2.5 py-5 text-base font-medium text-black sm:text-xl sm:leading-8">
              Wed
            </div>
            <div className="flex items-center justify-center border-r border-b border-gray-200 p-2.5 py-5 text-base font-medium text-black sm:text-xl sm:leading-8">
              Thu
            </div>
            <div className="flex items-center justify-center border-r border-b border-gray-200 p-2.5 py-5 text-base font-medium text-black sm:text-xl sm:leading-8">
              Fri
            </div>
            <div className="flex items-center justify-center border-r border-b border-gray-200 p-2.5 py-5 text-base font-medium text-black sm:text-xl sm:leading-8">
              Sat
            </div>
            <div className="flex items-center justify-center rounded-tr-xl border-b border-gray-200 p-2.5 py-5 text-base font-medium text-black sm:text-xl sm:leading-8">
              Sun
            </div>
          </div>
          <div className="grid grid-cols-7 rounded-b-xl">
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                29
              </span>
              <div className="rounded-sm bg-red-50 p-2 max-md:w-max">
                <p className="hidden text-xs font-normal text-red-600 md:block">
                  Update Design System
                </p>
                <p className="hidden text-xs font-normal text-red-600 md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="h-3 w-3 rounded-full bg-red-600 md:hidden" />
              </div>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                01
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                02
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                03
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                04
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                05
              </span>
              <div className="rounded-sm bg-teal-50 p-2 max-md:w-max">
                <p className="hidden text-xs font-normal text-teal-500 md:block">
                  Update Design System
                </p>
                <p className="hidden text-xs font-normal text-teal-500 md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="h-3 w-3 rounded-full bg-teal-600 md:hidden" />
              </div>
            </div>
            <div className="flex h-20 flex-col justify-between border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                06
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                07
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                08
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                09
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                10
              </span>
              <div className="rounded-sm bg-yellow-50 p-2 max-md:w-max">
                <p className="hidden text-xs font-normal text-yellow-500 md:block">
                  Website Product
                </p>
                <p className="hidden text-xs font-normal text-yellow-500 md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="h-3 w-3 rounded-full bg-yellow-500 md:hidden" />
              </div>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                11
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                12
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                13
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                14
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                15
              </span>
              <div className="rounded-sm bg-pink-50 p-2 max-md:w-max">
                <p className="hidden text-xs font-normal text-pink-500 md:block">
                  Website Product
                </p>
                <p className="hidden text-xs font-normal text-pink-500 md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="h-3 w-3 rounded-full bg-pink-500 md:hidden" />
              </div>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                16
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                17
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                18
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                19
              </span>
              <div className="rounded-sm bg-purple-50 p-2 max-md:w-max">
                <p className="hidden text-xs font-normal text-purple-500 md:block">
                  Website Product
                </p>
                <p className="hidden text-xs font-normal text-purple-500 md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="h-3 w-3 rounded-full bg-purple-500 md:hidden" />
              </div>
            </div>
            <div className="flex h-20 flex-col justify-between border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                20
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                21
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                22
              </span>
              <div className="rounded-sm bg-cyan-50 p-2 max-md:w-max">
                <p className="hidden text-xs font-normal text-cyan-500 md:block">
                  Wireframe Update
                </p>
                <p className="hidden text-xs font-normal text-cyan-500 md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="h-3 w-3 rounded-full bg-cyan-500 md:hidden" />
              </div>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                23
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                24
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                25
              </span>
              <div className="rounded-sm bg-emerald-50 p-2 max-md:w-max">
                <p className="hidden text-xs font-normal text-emerald-500 md:block">
                  Update Design System
                </p>
                <p className="hidden text-xs font-normal text-emerald-500 md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="h-3 w-3 rounded-full bg-emerald-500 md:hidden" />
              </div>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                26
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-b border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                27
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between rounded-bl-xl border-r border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                28
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                29
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                30
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                31
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                01
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between border-r border-gray-200 p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                02
              </span>
            </div>
            <div className="flex h-20 flex-col justify-between rounded-br-xl p-2.5 md:h-36">
              <span className="text-base font-medium text-black sm:text-xl sm:leading-8">
                03
              </span>
              <div className="rounded-sm bg-lime-50 p-2 max-md:w-max">
                <p className="hidden text-xs font-normal text-lime-500 md:block">
                  Client Website
                </p>
                <p className="hidden text-xs font-normal text-lime-500 md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="h-3 w-3 rounded-full bg-lime-500 md:hidden" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 rounded-xl min-[440px]:grid-cols-2 sm:grid-cols-3 md:hidden">
          <div className="rounded-xl border border-red-600 bg-red-50 p-2.5">
            <p className="mb-2 text-base font-semibold text-red-600">
              February 29
            </p>
            <p className="text-xs font-medium text-red-600">
              Update Design System
            </p>
            <p className="text-xs font-medium text-red-600"> 10:30 - 12:00</p>
          </div>
          <div className="rounded-xl border border-teal-500 bg-teal-50 p-2.5">
            <p className="mb-2 text-base font-semibold text-teal-600">
              March 05
            </p>
            <p className="text-xs font-medium text-teal-600">
              Update Design System
            </p>
            <p className="text-xs font-medium text-teal-600"> 10:30 - 12:00</p>
          </div>
          <div className="rounded-xl border border-yellow-500 bg-yellow-50 p-2.5">
            <p className="mb-2 text-base font-semibold text-yellow-600">
              March 10
            </p>
            <p className="text-xs font-medium text-yellow-600">
              Website Product
            </p>
            <p className="text-xs font-medium text-yellow-600">
              {" "}
              10:30 - 12:00
            </p>
          </div>
          <div className="rounded-xl border border-pink-500 bg-pink-50 p-2.5">
            <p className="mb-2 text-base font-semibold text-pink-600">
              March 15
            </p>
            <p className="text-xs font-medium text-pink-600">Website Product</p>
            <p className="text-xs font-medium text-pink-600"> 10:30 - 12:00</p>
          </div>
          <div className="rounded-xl border border-purple-500 bg-purple-50 p-2.5">
            <p className="mb-2 text-base font-semibold text-purple-600">
              March 19
            </p>
            <p className="text-xs font-medium text-purple-600">
              Website Product
            </p>
            <p className="text-xs font-medium text-purple-600">
              {" "}
              10:30 - 12:00
            </p>
          </div>
          <div className="rounded-xl border border-cyan-500 bg-cyan-50 p-2.5">
            <p className="mb-2 text-base font-semibold text-cyan-600">
              March 22
            </p>
            <p className="text-xs font-medium text-cyan-600">
              Wireframe Update
            </p>
            <p className="text-xs font-medium text-cyan-600"> 10:30 - 12:00</p>
          </div>
          <div className="rounded-xl border border-emerald-500 bg-emerald-50 p-2.5">
            <p className="mb-2 text-base font-semibold text-emerald-600">
              March 25
            </p>
            <p className="text-xs font-medium text-emerald-600">
              Update Design System
            </p>
            <p className="text-xs font-medium text-emerald-600">
              {" "}
              10:30 - 12:00
            </p>
          </div>
          <div className="rounded-xl border border-lime-500 bg-lime-50 p-2.5">
            <p className="mb-2 text-base font-semibold text-lime-600">
              April 03
            </p>
            <p className="text-xs font-medium text-lime-600">Client Website</p>
            <p className="text-xs font-medium text-lime-600"> 10:30 - 12:00</p>
          </div>
        </div>
      </div>
    </section>
  )
}
