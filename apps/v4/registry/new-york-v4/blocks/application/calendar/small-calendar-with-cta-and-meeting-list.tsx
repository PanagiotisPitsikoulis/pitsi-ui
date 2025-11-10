export default function SmallCalendarWithCtaAndMeetingList() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl overflow-x-auto px-3 lg:px-8">
        <div className="mb-8 flex flex-col items-center justify-between max-md:gap-3 md:mb-14 md:flex-row">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl leading-snug font-bold text-black">
              interview Calender
            </h3>
          </div>
          <div className="flex items-center gap-4 max-[410px]:flex-col">
            <div className="flex items-center gap-2 rounded-xl border border-indigo-600 px-5 py-2.5">
              <button className="rounded text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"></button>
              <h6 className="py-px text-base font-semibold text-indigo-600">
                Feb 2024
              </h6>
              <button className="rounded text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"></button>
            </div>
            <button className="flex items-center gap-2 rounded-xl bg-indigo-600 py-3 pr-5 pl-7 text-base font-semibold text-white">
              Add New
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 sm:p-8 lg:col-span-7">
            <div className="mb-8 flex flex-col items-center justify-between max-sm:gap-4 sm:flex-row">
              <p className="text-xl leading-8 font-semibold text-black">
                February 2024
              </p>
              <div className="flex items-center gap-5">
                <button className="flex items-center gap-1.5 rounded-md border border-gray-300 bg-gray-50 py-2 pr-3 pl-1.5 text-xs font-medium text-gray-900 transition-all duration-300 hover:border-gray-100 hover:bg-gray-100">
                  Today
                </button>
                <div className="flex items-center gap-3">
                  <button className="flex h-7 w-7 items-center justify-center rounded-full border border-indigo-600 text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"></button>
                  <button className="flex h-7 w-7 items-center justify-center rounded-full border border-indigo-600 text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white"></button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">Sa</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">Mo</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">Tu</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">We</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">Th</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">Fr</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">Sa</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-gray-400">29</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg bg-yellow-50 p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  30
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-600" />
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-gray-400">31</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">01</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">02</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">03</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">04</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">05</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  06
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">07</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">08</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg bg-indigo-50 p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  09
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">10</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">11</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">12</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  13
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg bg-emerald-50 p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  14
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">15</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  16
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">17</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">18</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg bg-red-50 p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  19
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  20
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">21</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">22</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  23
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">24</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">25</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  26
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  27
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-black">28</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg bg-lime-50 p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-black">
                  29
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-lime-600" />
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="pb-2.5 text-xs font-medium text-gray-400">
                  01
                </span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-gray-400">02</span>
              </div>
              <div className="flex h-16 flex-col items-center rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-50 sm:p-2.5">
                <span className="text-xs font-medium text-gray-400">03</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="flex flex-col gap-4 sm:gap-8">
              <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 pl-5">
                <span className="h-3 w-3 rounded-full bg-yellow-600" />
                <div className="block">
                  <p className="mb-1 text-base font-medium text-gray-900">
                    Jan 30, 2024 03:30 pm
                  </p>
                  <p className="text-xs font-normal text-gray-600">
                    Computer conference
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 pl-5">
                <span className="h-3 w-3 rounded-full bg-indigo-600" />
                <div className="block">
                  <p className="mb-1 text-base font-medium text-gray-900">
                    Feb 09, 2024 12:00 pm
                  </p>
                  <p className="text-xs font-normal text-gray-600">
                    Avery important dinner with anna
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 pl-5">
                <span className="h-3 w-3 rounded-full bg-emerald-600" />
                <div className="block">
                  <p className="mb-1 text-base font-medium text-gray-900">
                    Feb 14, 2024 05:00 pm
                  </p>
                  <p className="text-xs font-normal text-gray-600">
                    Product Design Congress
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 pl-5">
                <span className="h-3 w-3 rounded-full bg-red-600" />
                <div className="block">
                  <p className="mb-1 text-base font-medium text-gray-900">
                    19 Feb, 2024 06:00 pm
                  </p>
                  <p className="text-xs font-normal text-gray-600">
                    Design Competition Submission
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 pl-5">
                <span className="h-3 w-3 rounded-full bg-lime-600" />
                <div className="block">
                  <p className="mb-1 text-base font-medium text-gray-900">
                    29 Feb, 2024 08:00 pm
                  </p>
                  <p className="text-xs font-normal text-gray-600">
                    Playing basketball wityh Ajay
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
