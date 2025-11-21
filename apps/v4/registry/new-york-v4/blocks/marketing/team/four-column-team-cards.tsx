export default function FourColumnTeamCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-6 lg:gap-12">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
            Meet Our Expert Team Members
          </h2>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-8">
            <div className="col-span-12 inline-flex w-full flex-col items-center justify-center gap-4 lg:col-span-5 lg:items-start lg:gap-8 xl:col-span-6">
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                Together, we transform ideas into reality, leveraging our
                combined talents to drive forward-thinking solutions.
              </p>
              <button className="flex items-center justify-center rounded-xl bg-green-800 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-green-900">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  Browse All Members
                </span>
              </button>
            </div>
            <div className="col-span-12 flex w-full flex-col items-center justify-center gap-5 sm:flex-row lg:col-span-7 lg:justify-end xl:col-span-6">
              <div className="inline-flex flex-col items-start justify-center gap-3 rounded-xl border border-gray-200 bg-white p-2.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                <div className="inline-flex h-[260px] w-[260px] items-start justify-start gap-2.5 rounded-lg bg-[#d6d0cf]">
                  <img
                    className="rounded-lg object-cover"
                    src="https://pagedone.io/asset/uploads/1722333133.png"
                    alt="Radhika Patel image"
                  />
                </div>
                <div className="inline-flex w-full items-center justify-between gap-3">
                  <div className="inline-flex flex-col items-start justify-center gap-1">
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Radhika Patel
                    </h6>
                    <span className="text-xs leading-normal font-normal text-green-800">
                      Project Manager
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-1.5">
                    <a className="flex h-6 w-6 items-center justify-center rounded-[15px] border border-transparent transition-all duration-700 ease-in-out hover:rounded-none hover:border-gray-300">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-6 w-6 items-center justify-center rounded-[15px] border border-transparent pt-[3.59px] pr-[3.73px] pb-[3.74px] pl-[3.59px] transition-all duration-700 ease-in-out hover:rounded-none hover:border-gray-300">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-6 w-6 items-center justify-center rounded-[15px] border border-transparent py-[3.67px] pr-[3.76px] pl-[3.71px] transition-all duration-700 ease-in-out hover:rounded-none hover:border-gray-300">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start justify-center gap-3 rounded-xl border border-gray-200 bg-white p-2.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                <div className="inline-flex h-[260px] w-[260px] items-start justify-start gap-2.5 rounded-lg bg-[#cdb5ba]">
                  <img
                    className="rounded-lg object-cover"
                    src="https://pagedone.io/asset/uploads/1722333144.png"
                    alt="Anil Mehta image"
                  />
                </div>
                <div className="inline-flex w-full items-center justify-between gap-3">
                  <div className="inline-flex flex-col items-start justify-center gap-1">
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Anil Mehta
                    </h6>
                    <span className="text-xs leading-normal font-normal text-green-800">
                      Project Manager
                    </span>
                  </div>
                  <div className="flex items-center justify-start gap-1.5">
                    <a className="flex h-6 w-6 items-center justify-center rounded-[15px] border border-transparent transition-all duration-700 ease-in-out hover:rounded-none hover:border-gray-300">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-6 w-6 items-center justify-center rounded-[15px] border border-transparent pt-[3.59px] pr-[3.73px] pb-[3.74px] pl-[3.59px] transition-all duration-700 ease-in-out hover:rounded-none hover:border-gray-300">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-6 w-6 items-center justify-center rounded-[15px] border border-transparent py-[3.67px] pr-[3.76px] pl-[3.71px] transition-all duration-700 ease-in-out hover:rounded-none hover:border-gray-300">
                      {/* SVG removed */}
                    </a>
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
