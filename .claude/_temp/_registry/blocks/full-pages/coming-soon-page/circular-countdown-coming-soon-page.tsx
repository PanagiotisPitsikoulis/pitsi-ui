export default function CircularCountdownComingSoonPage() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-center items-center lg:gap-20 md:gap-12 gap-9 inline-flex">
          <a href="#"></a>
          <h2 className="text-center bg-gradient-to-r bg-clip-text text-transparent from-violet-500 to-violet-400 md:text-6xl text-5xl font-bold font-manrope md:leading-normal leading-snug">
            Launching Soon
          </h2>
          <div className="w-full flex-col justify-center items-center lg:gap-16 gap-10 flex">
            <div
              id="countdown"
              className="countdown flex items-start justify-center w-full sm:gap-7 gap-3 count-down-main"
            >
              <div className="timer flex flex-col gap-3.5">
                <div className="progress-container relative">
                  <span
                    id="days"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-inter font-medium text-gray-900"
                  >
                    0
                  </span>
                </div>
                <p className="text-center text-gray-500 text-sm font-medium leading-normal w-full">
                  Days
                </p>
              </div>
              <h3 className="w-3 text-center text-gray-900 text-4xl font-semibold font-manrope leading-loose">
                :
              </h3>
              <div className="timer flex flex-col gap-3.5">
                <div className="progress-container relative">
                  <span
                    id="hours"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-inter font-medium text-gray-900"
                  >
                    0
                  </span>
                </div>
                <p className="text-center text-gray-500 text-sm font-medium leading-normal w-full">
                  Hours
                </p>
              </div>
              <h3 className="w-3 text-center text-gray-900 text-4xl font-semibold font-manrope leading-loose">
                :
              </h3>
              <div className="timer flex flex-col gap-3.5">
                <div className="progress-container relative">
                  <span
                    id="minutes"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-inter font-medium text-gray-900"
                  >
                    0
                  </span>
                </div>
                <p className="text-center text-gray-500 text-sm font-medium leading-normal w-full">
                  Minutes
                </p>
              </div>
              <h3 className="w-3 text-center text-gray-900 text-4xl font-semibold font-manrope leading-loose">
                :
              </h3>
              <div className="timer flex flex-col gap-3.5">
                <div className="progress-container relative">
                  <span
                    id="seconds"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-inter font-medium text-gray-900"
                  >
                    0
                  </span>
                </div>
                <p className="text-center text-gray-500 text-sm font-medium leading-normal w-full">
                  Seconds
                </p>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-center gap-4 flex">
              <div className="w-full justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                <input
                  type="text"
                  className="sm:w-80 w-full focus:outline-none h-10 px-3.5 py-2 text-gray-900 placeholder-gray-400 text-sm font-normal leading-snug rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex"
                  placeholder="mail@pagedone.com"
                />
                <button className="sm:w-fit w-full px-3.5 py-2 bg-gradient-to-tr from-violet-500 to-violet-400 hover:from-violet-600 hover:to-violet-500 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6 whitespace-nowrap">
                    Sign Up
                  </span>
                </button>
              </div>
              <span className="text-center text-gray-500 text-xs font-light leading-normal">
                Don't miss out—get notified as soon as we launch.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
