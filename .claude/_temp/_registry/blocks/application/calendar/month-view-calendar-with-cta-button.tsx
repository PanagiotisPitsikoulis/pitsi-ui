export default function MonthViewCalendarWithCtaButton() {
  return (
    <section className="relative py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 overflow-x-auto">
        <div className="flex flex-col md:flex-row max-md:gap-3 items-center justify-between mb-8 md:mb-14">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl leading-snug font-bold text-black">
              Project Calender
            </h3>
          </div>
          <div className="flex max-[410px]:flex-col items-center gap-4">
            <div className="flex items-center gap-2 py-2.5 px-5 rounded-xl border border-indigo-600">
              <button className="text-indigo-600 transition-all rounded duration-300 hover:text-white hover:bg-indigo-600"></button>
              <h6 className="text-base py-px font-semibold text-indigo-600">
                March 2024
              </h6>
              <button className="text-indigo-600 transition-all rounded duration-300 hover:text-white hover:bg-indigo-600"></button>
            </div>
            <button className="flex items-center gap-2 rounded-xl py-3 pr-5 pl-7 bg-indigo-600 text-base font-semibold text-white">
              Add New
            </button>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200">
          <div className="grid grid-cols-7">
            <div className="p-2.5 py-5 border-r border-b border-gray-200 flex items-center justify-center text-base sm:text-xl sm:leading-8 font-medium text-black rounded-tl-xl">
              Mon
            </div>
            <div className="p-2.5 py-5 border-r border-b border-gray-200 flex items-center justify-center text-base sm:text-xl sm:leading-8 font-medium text-black">
              Tue
            </div>
            <div className="p-2.5 py-5 border-r border-b border-gray-200 flex items-center justify-center text-base sm:text-xl sm:leading-8 font-medium text-black">
              Wed
            </div>
            <div className="p-2.5 py-5 border-r border-b border-gray-200 flex items-center justify-center text-base sm:text-xl sm:leading-8 font-medium text-black">
              Thu
            </div>
            <div className="p-2.5 py-5 border-r border-b border-gray-200 flex items-center justify-center text-base sm:text-xl sm:leading-8 font-medium text-black">
              Fri
            </div>
            <div className="p-2.5 py-5 border-r border-b border-gray-200 flex items-center justify-center text-base sm:text-xl sm:leading-8 font-medium text-black">
              Sat
            </div>
            <div className="p-2.5 py-5 border-b border-gray-200 flex items-center justify-center text-base sm:text-xl sm:leading-8 font-medium text-black rounded-tr-xl">
              Sun
            </div>
          </div>
          <div className="grid grid-cols-7 rounded-b-xl">
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                29
              </span>
              <div className="p-2 rounded-sm bg-red-50 max-md:w-max">
                <p className="text-xs font-normal text-red-600 hidden md:block ">
                  Update Design System
                </p>
                <p className="text-xs font-normal text-red-600 hidden md:block ">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="w-3 h-3 rounded-full bg-red-600 md:hidden" />
              </div>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                01
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                02
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                03
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                04
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                05
              </span>
              <div className="p-2 rounded-sm bg-teal-50 max-md:w-max">
                <p className="text-xs font-normal text-teal-500 hidden md:block">
                  Update Design System
                </p>
                <p className="text-xs font-normal text-teal-500 hidden md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="w-3 h-3 rounded-full bg-teal-600 md:hidden " />
              </div>
            </div>
            <div className="p-2.5 border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                06
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                07
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                08
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                09
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                10
              </span>
              <div className="p-2 rounded-sm bg-yellow-50 max-md:w-max">
                <p className="text-xs font-normal text-yellow-500 hidden md:block ">
                  Website Product
                </p>
                <p className="text-xs font-normal text-yellow-500 hidden md:block ">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="w-3 h-3 rounded-full bg-yellow-500 md:hidden" />
              </div>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                11
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                12
              </span>
            </div>
            <div className="p-2.5 border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                13
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                14
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                15
              </span>
              <div className="p-2 rounded-sm bg-pink-50 max-md:w-max">
                <p className="text-xs font-normal text-pink-500 hidden md:block">
                  Website Product
                </p>
                <p className="text-xs font-normal text-pink-500 hidden md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="w-3 h-3 rounded-full bg-pink-500 md:hidden" />
              </div>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                16
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                17
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                18
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                19
              </span>
              <div className="p-2 rounded-sm bg-purple-50 max-md:w-max">
                <p className="text-xs font-normal text-purple-500 hidden md:block">
                  Website Product
                </p>
                <p className="text-xs font-normal text-purple-500 hidden md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="w-3 h-3 rounded-full bg-purple-500 md:hidden" />
              </div>
            </div>
            <div className="p-2.5 border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                20
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                21
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                22
              </span>
              <div className="p-2 rounded-sm bg-cyan-50 max-md:w-max">
                <p className="text-xs font-normal text-cyan-500 hidden md:block">
                  Wireframe Update
                </p>
                <p className="text-xs font-normal text-cyan-500 hidden md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="w-3 h-3 rounded-full bg-cyan-500 md:hidden" />
              </div>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                23
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                24
              </span>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                25
              </span>
              <div className="p-2 rounded-sm bg-emerald-50 max-md:w-max">
                <p className="text-xs font-normal text-emerald-500 hidden md:block">
                  Update Design System
                </p>
                <p className="text-xs font-normal text-emerald-500 hidden md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="w-3 h-3 rounded-full bg-emerald-500 md:hidden" />
              </div>
            </div>
            <div className="p-2.5 border-r border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                26
              </span>
            </div>
            <div className="p-2.5 border-b border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                27
              </span>
            </div>
            <div className="p-2.5 border-r border-gray-200 flex justify-between flex-col h-20 md:h-36 rounded-bl-xl">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                28
              </span>
            </div>
            <div className="p-2.5 border-r border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                29
              </span>
            </div>
            <div className="p-2.5 border-r border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                30
              </span>
            </div>
            <div className="p-2.5 border-r border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                31
              </span>
            </div>
            <div className="p-2.5 border-r border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                01
              </span>
            </div>
            <div className="p-2.5 border-r border-gray-200 flex justify-between flex-col h-20 md:h-36">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                02
              </span>
            </div>
            <div className="p-2.5 flex justify-between flex-col h-20 md:h-36 rounded-br-xl">
              <span className="text-base sm:text-xl font-medium sm:leading-8 text-black">
                03
              </span>
              <div className="p-2 rounded-sm bg-lime-50 max-md:w-max">
                <p className="text-xs font-normal text-lime-500 hidden md:block">
                  Client Website
                </p>
                <p className="text-xs font-normal text-lime-500 hidden md:block">
                  {" "}
                  10:30 - 12:00
                </p>
                <p className="w-3 h-3 rounded-full bg-lime-500 md:hidden" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden mt-8 rounded-xl grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="p-2.5 rounded-xl bg-red-50 border border-red-600">
            <p className="text-base font-semibold text-red-600 mb-2">
              February 29
            </p>
            <p className=" text-xs font-medium text-red-600">
              Update Design System
            </p>
            <p className=" text-xs font-medium text-red-600"> 10:30 - 12:00</p>
          </div>
          <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-500">
            <p className="text-base font-semibold text-teal-600 mb-2">
              March 05
            </p>
            <p className=" text-xs font-medium text-teal-600">
              Update Design System
            </p>
            <p className=" text-xs font-medium text-teal-600"> 10:30 - 12:00</p>
          </div>
          <div className="p-2.5 rounded-xl bg-yellow-50 border border-yellow-500">
            <p className="text-base font-semibold text-yellow-600 mb-2">
              March 10
            </p>
            <p className=" text-xs font-medium text-yellow-600">
              Website Product
            </p>
            <p className=" text-xs font-medium text-yellow-600">
              {" "}
              10:30 - 12:00
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-pink-50 border border-pink-500">
            <p className="text-base font-semibold text-pink-600 mb-2">
              March 15
            </p>
            <p className=" text-xs font-medium text-pink-600">
              Website Product
            </p>
            <p className=" text-xs font-medium text-pink-600"> 10:30 - 12:00</p>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-500">
            <p className="text-base font-semibold text-purple-600 mb-2">
              March 19
            </p>
            <p className=" text-xs font-medium text-purple-600">
              Website Product
            </p>
            <p className=" text-xs font-medium text-purple-600">
              {" "}
              10:30 - 12:00
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-500">
            <p className="text-base font-semibold text-cyan-600 mb-2">
              March 22
            </p>
            <p className=" text-xs font-medium text-cyan-600">
              Wireframe Update
            </p>
            <p className=" text-xs font-medium text-cyan-600"> 10:30 - 12:00</p>
          </div>
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-500">
            <p className="text-base font-semibold text-emerald-600 mb-2">
              March 25
            </p>
            <p className=" text-xs font-medium text-emerald-600">
              Update Design System
            </p>
            <p className=" text-xs font-medium text-emerald-600">
              {" "}
              10:30 - 12:00
            </p>
          </div>
          <div className="p-2.5 rounded-xl bg-lime-50 border border-lime-500">
            <p className="text-base font-semibold text-lime-600 mb-2">
              April 03
            </p>
            <p className=" text-xs font-medium text-lime-600">Client Website</p>
            <p className=" text-xs font-medium text-lime-600"> 10:30 - 12:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
