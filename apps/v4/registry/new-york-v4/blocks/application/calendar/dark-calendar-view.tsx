export default function DarkCalendarView() {
  return (
    <section className="relative bg-gray-900 py-24">
      <div className="mx-auto w-full max-w-7xl overflow-x-auto px-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-700 p-3 sm:p-8">
            <div className="mb-8 flex flex-col items-center justify-between max-sm:gap-4 sm:flex-row">
              <p className="text-xl leading-8 font-semibold text-white">
                February 2024
              </p>
              <div className="flex items-center gap-5">
                <button className="flex items-center gap-1.5 rounded-md border border-gray-700 bg-gray-800 py-2 pr-3 pl-1.5 text-xs font-medium text-white transition-all duration-300 hover:border-gray-700 hover:bg-gray-700">
                  Today
                </button>
                <div className="flex items-center gap-3">
                  <button className="group rounded-full text-white transition-all duration-300 hover:bg-white"></button>
                  <button className="group rounded-full text-white transition-all duration-300 hover:bg-white"></button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">Sa</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">Mo</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">Tu</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">We</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">Th</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">Fr</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">Sa</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-gray-400">29</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg bg-orange-900 p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  30
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-gray-400">31</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">01</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">02</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">03</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">04</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">05</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  06
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">07</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">08</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg bg-lime-900 p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  09
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">10</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">11</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">12</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  13
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg bg-sky-900 p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  14
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">15</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  16
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">17</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">18</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg bg-cyan-900 p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  19
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  20
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">21</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">22</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  23
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">24</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">25</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  26
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  27
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-white">28</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg bg-violet-900 p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-white">
                  29
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-gray-400">
                  01
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-gray-400">02</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-800 sm:p-2.5">
                <span className="text-xs font-medium text-gray-400">03</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-7 flex items-center justify-between">
              <div className="block">
                <h4 className="text-3xl leading-snug font-semibold text-white">
                  Schedule
                </h4>
                <p className="text-base font-medium text-gray-400">
                  February 2024
                </p>
              </div>
              <button className="rounded-full border border-gray-300 p-3 text-white transition-all duration-300 hover:bg-white hover:text-gray-900"></button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-800 p-2">
                <div className="flex flex-col rounded-xl bg-gray-900 px-6 py-2">
                  <h6 className="font-manrope text-2xl leading-9 font-semibold text-white">
                    09
                  </h6>
                  <p className="text-base font-normal text-white">Feb</p>
                </div>
                <div className="block">
                  <p className="text-base font-medium text-white">
                    6209 Nikolaus Club, Tayaland 92911-1095
                  </p>
                  <p className="mt-1 text-sm font-normal text-gray-100">
                    09:00 - 12:00, Monday, Feb 15
                  </p>
                </div>
              </div>
              <div className="group flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-900 p-2 transition-all duration-300 hover:bg-gray-800">
                <div className="flex flex-col rounded-xl bg-gray-800 px-6 py-2 transition-all duration-300 group-hover:bg-gray-900">
                  <h6 className="font-manrope text-2xl leading-9 font-semibold text-white">
                    14
                  </h6>
                  <p className="text-base font-normal text-white">Feb</p>
                </div>
                <div className="block">
                  <p className="text-base font-medium text-white">
                    6209 Nikolaus Club, Tayaland 92911-1095
                  </p>
                  <p className="mt-1 text-sm font-normal text-gray-100">
                    09:00 - 12:00, Monday, Feb 15
                  </p>
                </div>
              </div>
              <div className="group flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-900 p-2 transition-all duration-300 hover:bg-gray-800">
                <div className="flex flex-col rounded-xl bg-gray-800 px-6 py-2 transition-all duration-300 group-hover:bg-gray-900">
                  <h6 className="font-manrope text-2xl leading-9 font-semibold text-white">
                    19
                  </h6>
                  <p className="text-base font-normal text-white">Feb</p>
                </div>
                <div className="block">
                  <p className="text-base font-medium text-white">
                    6209 Nikolaus Club, Tayaland 92911-1095
                  </p>
                  <p className="mt-1 text-sm font-normal text-gray-100">
                    09:00 - 12:00, Monday, Feb 15
                  </p>
                </div>
              </div>
              <div className="group flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-900 p-2 transition-all duration-300 hover:bg-gray-800">
                <div className="flex flex-col rounded-xl bg-gray-800 px-6 py-2 transition-all duration-300 group-hover:bg-gray-900">
                  <h6 className="font-manrope text-2xl leading-9 font-semibold text-white">
                    29
                  </h6>
                  <p className="text-base font-normal text-white">Feb</p>
                </div>
                <div className="block">
                  <p className="text-base font-medium text-white">
                    6209 Nikolaus Club, Tayaland 92911-1095
                  </p>
                  <p className="mt-1 text-sm font-normal text-gray-100">
                    09:00 - 12:00, Monday, Feb 15
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
