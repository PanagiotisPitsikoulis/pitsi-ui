export default function SmallCalendarWithCtaAndMeetingList() {
  return (
    <section className="relative py-24">
      <div className="w-full max-w-7xl mx-auto px-3 lg:px-8 overflow-x-auto">
        <div className="flex flex-col md:flex-row max-md:gap-3 items-center justify-between mb-8 md:mb-14">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl leading-snug font-bold text-black">
              interview Calender
            </h3>
          </div>
          <div className="flex max-[410px]:flex-col items-center gap-4">
            <div className="flex items-center gap-2 py-2.5 px-5 rounded-xl border border-indigo-600">
              <button className="text-indigo-600 transition-all rounded duration-300 hover:text-white hover:bg-indigo-600"></button>
              <h6 className="text-base py-px font-semibold text-indigo-600">
                Feb 2024
              </h6>
              <button className="text-indigo-600 transition-all rounded duration-300 hover:text-white hover:bg-indigo-600"></button>
            </div>
            <button className="flex items-center gap-2 rounded-xl py-3 pr-5 pl-7 bg-indigo-600 text-base font-semibold text-white">
              Add New
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 sm:p-8">
            <div className="flex flex-col sm:flex-row max-sm:gap-4 items-center justify-between mb-8">
              <p className="text-xl leading-8 font-semibold text-black">
                February 2024
              </p>
              <div className="flex items-center gap-5">
                <button className="py-2 pr-3 pl-1.5 rounded-md border border-gray-300 flex items-center gap-1.5 text-xs font-medium text-gray-900 bg-gray-50 transition-all duration-300 hover:bg-gray-100 hover:border-gray-100">
                  Today
                </button>
                <div className="flex items-center gap-3">
                  <button className="w-7 h-7 flex items-center justify-center border border-indigo-600 text-indigo-600 rounded-full transition-all duration-300 hover:text-white hover:bg-indigo-600"></button>
                  <button className="w-7 h-7 flex items-center justify-center border border-indigo-600 text-indigo-600 rounded-full transition-all duration-300 hover:text-white hover:bg-indigo-600"></button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">Sa</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">Mo</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">Tu</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">We</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">Th</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">Fr</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">Sa</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-gray-400">29</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 bg-yellow-50 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  30
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-600" />
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-gray-400">31</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">01</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">02</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">03</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">04</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">05</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  06
                </span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">07</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">08</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 bg-indigo-50 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  09
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">10</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">11</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">12</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  13
                </span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 bg-emerald-50 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  14
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">15</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  16
                </span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">17</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">18</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 bg-red-50 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  19
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  20
                </span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">21</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">22</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  23
                </span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">24</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">25</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  26
                </span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  27
                </span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black">28</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 bg-lime-50 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-black pb-2.5">
                  29
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-lime-600" />
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-gray-400 pb-2.5">
                  01
                </span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-gray-400">02</span>
              </div>
              <div className="flex items-center rounded-lg flex-col p-1.5 sm:p-2.5 h-16 transition-all duration-300 hover:bg-gray-50">
                <span className="text-xs font-medium text-gray-400">03</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="flex flex-col gap-4 sm:gap-8">
              <div className="p-3 pl-5 flex items-center gap-3 rounded-lg border border-gray-200">
                <span className="h-3 w-3 rounded-full bg-yellow-600" />
                <div className="block">
                  <p className="text-base font-medium text-gray-900 mb-1">
                    Jan 30, 2024 03:30 pm
                  </p>
                  <p className="text-xs font-normal text-gray-600">
                    Computer conference
                  </p>
                </div>
              </div>
              <div className="p-3 pl-5 flex items-center gap-3 rounded-lg border border-gray-200">
                <span className="h-3 w-3 rounded-full bg-indigo-600" />
                <div className="block">
                  <p className="text-base font-medium text-gray-900 mb-1">
                    Feb 09, 2024 12:00 pm
                  </p>
                  <p className="text-xs font-normal text-gray-600">
                    Avery important dinner with anna
                  </p>
                </div>
              </div>
              <div className="p-3 pl-5 flex items-center gap-3 rounded-lg border border-gray-200">
                <span className="h-3 w-3 rounded-full bg-emerald-600" />
                <div className="block">
                  <p className="text-base font-medium text-gray-900 mb-1">
                    Feb 14, 2024 05:00 pm
                  </p>
                  <p className="text-xs font-normal text-gray-600">
                    Product Design Congress
                  </p>
                </div>
              </div>
              <div className="p-3 pl-5 flex items-center gap-3 rounded-lg border border-gray-200">
                <span className="h-3 w-3 rounded-full bg-red-600" />
                <div className="block">
                  <p className="text-base font-medium text-gray-900 mb-1">
                    19 Feb, 2024 06:00 pm
                  </p>
                  <p className="text-xs font-normal text-gray-600">
                    Design Competition Submission
                  </p>
                </div>
              </div>
              <div className="p-3 pl-5 flex items-center gap-3 rounded-lg border border-gray-200">
                <span className="h-3 w-3 rounded-full bg-lime-600" />
                <div className="block">
                  <p className="text-base font-medium text-gray-900 mb-1">
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
  );
}
