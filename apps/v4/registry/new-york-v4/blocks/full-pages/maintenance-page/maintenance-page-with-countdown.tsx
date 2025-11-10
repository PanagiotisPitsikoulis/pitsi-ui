export default function MaintenancePageWithCountdown() {
  return (
    <section className="relative h-screen">
      <div className="mx-auto h-screen w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="flex h-full w-full flex-col items-center justify-center gap-44">
          <div className="flex w-full flex-col items-center justify-center gap-14">
            <div className="inline-flex w-full items-center justify-center gap-7 sm:gap-8">
              <div className="inline-flex flex-col items-center justify-start gap-2">
                <div className="inline-flex items-start justify-start gap-1.5">
                  <div className="inline-flex w-11 flex-col items-center justify-center gap-2.5 rounded-md border border-blue-200 p-2.5 sm:w-14">
                    <h4 className="font-manrope text-center text-3xl leading-normal font-normal text-gray-900">
                      1
                    </h4>
                  </div>
                  <div className="inline-flex w-11 flex-col items-center justify-center gap-2.5 rounded-md border border-blue-200 p-2.5 sm:w-14">
                    <h4 className="font-manrope text-center text-3xl leading-normal font-normal text-gray-900">
                      0
                    </h4>
                  </div>
                </div>
                <h6 className="text-center text-base leading-relaxed font-medium text-gray-400">
                  DAYS
                </h6>
              </div>
              <div className="inline-flex flex-col items-center justify-start gap-2">
                <div className="inline-flex items-start justify-start gap-1.5">
                  <div className="inline-flex w-11 flex-col items-center justify-center gap-2.5 rounded-md border border-blue-200 p-2.5 sm:w-14">
                    <h4 className="font-manrope text-center text-3xl leading-normal font-normal text-gray-900">
                      3
                    </h4>
                  </div>
                  <div className="inline-flex w-11 flex-col items-center justify-center gap-2.5 rounded-md border border-blue-200 p-2.5 sm:w-14">
                    <h4 className="font-manrope text-center text-3xl leading-normal font-normal text-gray-900">
                      0
                    </h4>
                  </div>
                </div>
                <h6 className="text-center text-base leading-relaxed font-medium text-gray-400">
                  HOURS
                </h6>
              </div>
              <div className="inline-flex flex-col items-center justify-start gap-2">
                <div className="inline-flex items-start justify-start gap-1.5">
                  <div className="inline-flex w-11 flex-col items-center justify-center gap-2.5 rounded-md border border-blue-200 p-2.5 sm:w-14">
                    <h4 className="font-manrope text-center text-3xl leading-normal font-normal text-gray-900">
                      1
                    </h4>
                  </div>
                  <div className="inline-flex w-11 flex-col items-center justify-center gap-2.5 rounded-md border border-blue-200 p-2.5 sm:w-14">
                    <h4 className="font-manrope text-center text-3xl leading-normal font-normal text-gray-900">
                      2
                    </h4>
                  </div>
                </div>
                <h6 className="text-center text-base leading-relaxed font-medium text-gray-400">
                  MINUTES
                </h6>
              </div>
              <div className="inline-flex flex-col items-center justify-start gap-2">
                <div className="inline-flex items-start justify-start gap-1.5">
                  <div className="inline-flex w-11 flex-col items-center justify-center gap-2.5 rounded-md border border-blue-200 p-2.5 sm:w-14">
                    <h4 className="font-manrope text-center text-3xl leading-normal font-normal text-gray-900">
                      4
                    </h4>
                  </div>
                  <div className="inline-flex w-11 flex-col items-center justify-center gap-2.5 rounded-md border border-blue-200 p-2.5 sm:w-14">
                    <h4 className="font-manrope text-center text-3xl leading-normal font-normal text-gray-900">
                      6
                    </h4>
                  </div>
                </div>
                <h6 className="text-center text-base leading-relaxed font-medium text-gray-400">
                  SECONDS
                </h6>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6">
              <div className="flex w-full flex-col items-center justify-start gap-2.5">
                <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-800">
                  Our site is undergoing maintenance right now.
                </h2>
                <p className="text-center text-base leading-relaxed font-normal text-gray-500">
                  It will take a long time till we get the error fixed. We will
                  live again in.
                </p>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2.5 sm:flex-row">
                <input
                  type="text"
                  className="h-10 w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-snug font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none sm:w-80"
                  placeholder="Your mail"
                />
                <button className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-blue-800 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Notify Me
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
