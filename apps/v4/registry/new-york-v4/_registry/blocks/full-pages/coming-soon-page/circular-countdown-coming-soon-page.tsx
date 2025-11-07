export default function CircularCountdownComingSoonPage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-center gap-9 md:gap-12 lg:gap-20">
          <a href="#"></a>
          <h2 className="font-manrope bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-center text-5xl leading-snug font-bold text-transparent md:text-6xl md:leading-normal">
            Launching Soon
          </h2>
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:gap-16">
            <div
              id="countdown"
              className="countdown count-down-main flex w-full items-start justify-center gap-3 sm:gap-7"
            >
              <div className="timer flex flex-col gap-3.5">
                <div className="progress-container relative">
                  <span
                    id="days"
                    className="font-inter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium text-gray-900"
                  >
                    0
                  </span>
                </div>
                <p className="w-full text-center text-sm leading-normal font-medium text-gray-500">
                  Days
                </p>
              </div>
              <h3 className="font-manrope w-3 text-center text-4xl leading-loose font-semibold text-gray-900">
                :
              </h3>
              <div className="timer flex flex-col gap-3.5">
                <div className="progress-container relative">
                  <span
                    id="hours"
                    className="font-inter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium text-gray-900"
                  >
                    0
                  </span>
                </div>
                <p className="w-full text-center text-sm leading-normal font-medium text-gray-500">
                  Hours
                </p>
              </div>
              <h3 className="font-manrope w-3 text-center text-4xl leading-loose font-semibold text-gray-900">
                :
              </h3>
              <div className="timer flex flex-col gap-3.5">
                <div className="progress-container relative">
                  <span
                    id="minutes"
                    className="font-inter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium text-gray-900"
                  >
                    0
                  </span>
                </div>
                <p className="w-full text-center text-sm leading-normal font-medium text-gray-500">
                  Minutes
                </p>
              </div>
              <h3 className="font-manrope w-3 text-center text-4xl leading-loose font-semibold text-gray-900">
                :
              </h3>
              <div className="timer flex flex-col gap-3.5">
                <div className="progress-container relative">
                  <span
                    id="seconds"
                    className="font-inter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium text-gray-900"
                  >
                    0
                  </span>
                </div>
                <p className="w-full text-center text-sm leading-normal font-medium text-gray-500">
                  Seconds
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-4">
              <div className="flex w-full flex-col items-center justify-center gap-2.5 sm:flex-row">
                <input
                  type="text"
                  className="inline-flex h-10 w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-snug font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none sm:w-80"
                  placeholder="mail@pagedone.com"
                />
                <button className="flex w-full items-center justify-center rounded-lg bg-gradient-to-tr from-violet-500 to-violet-400 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:from-violet-600 hover:to-violet-500 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium whitespace-nowrap text-white">
                    Sign Up
                  </span>
                </button>
              </div>
              <span className="text-center text-xs leading-normal font-light text-gray-500">
                Don't miss out—get notified as soon as we launch.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
