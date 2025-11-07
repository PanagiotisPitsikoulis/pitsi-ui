export default function TailwindIsComingSoonWithAGradientBackground() {
  return (
    <section className="py-24 relative bg-gradient-to-r from-indigo-600 to-violet-500">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-14 gap-10 inline-flex">
          <a href="#"></a>
          <div className="w-full flex-col justify-start items-start lg:gap-32 md:gap-24 gap-16 flex">
            <div className="w-full flex-col justify-start items-center gap-10 flex">
              <h2 className="text-center text-white md:text-6xl text-5xl font-bold font-manrope md:leading-normal leading-snug">
                Coming Soon
              </h2>
              <div className="w-full justify-center items-center lg:gap-6 md:gap-3.5 sm:gap-4 gap-3 inline-flex count-down-main">
                <div className="timer flex-col justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-start lg:gap-2.5 sm:gap-2 gap-1.5 inline-flex">
                    <div className="relative w-32 flex items-center justify-center divider py-5 pl-6  bg-white rounded-xl flex-col gap-2.5">
                      <h4 className="countdown-element days relative text-center text-indigo-600 sm:text-4xl text-2xl tracking-[24px] font-bold font-manrope leading-normal"></h4>
                    </div>
                  </div>
                  <h5 className="text-center text-white sm:text-lg text-base font-medium leading-relaxed">
                    DAYS
                  </h5>
                </div>
                <div className="timer flex-col justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-start lg:gap-2.5 sm:gap-2 gap-1.5 inline-flex">
                    <div className="relative w-32 flex items-center justify-center divider py-5 pl-6 bg-white rounded-xl flex-col gap-2.5 ">
                      <h4 className="countdown-element hours relative text-center text-indigo-600 sm:text-4xl text-2xl tracking-[24px] font-bold font-manrope leading-normal"></h4>
                    </div>
                  </div>
                  <h5 className="text-center text-white sm:text-lg text-base font-medium leading-relaxed">
                    HOURS
                  </h5>
                </div>
                <div className="timer flex-col justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-start lg:gap-2.5 sm:gap-2 gap-1.5 inline-flex">
                    <div className="relative w-32 flex items-center justify-center divider py-5 pl-6 bg-white rounded-xl flex-col gap-2.5 ">
                      <h4 className="countdown-element minutes relative text-center text-indigo-600 sm:text-4xl text-2xl tracking-[24px] font-bold font-manrope leading-normal"></h4>
                    </div>
                  </div>
                  <h5 className="text-center text-white sm:text-lg text-base font-medium leading-relaxed">
                    MINUTES
                  </h5>
                </div>
                <div className="timer flex-col justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-start lg:gap-2.5 sm:gap-2 gap-1.5 inline-flex">
                    <div className="relative w-32 flex items-center justify-center divider py-5 pl-6 bg-white rounded-xl flex-col gap-2.5 ">
                      <h4 className="countdown-element seconds relative text-center text-indigo-600 sm:text-4xl text-2xl tracking-[24px] font-bold font-manrope leading-normal"></h4>
                    </div>
                  </div>
                  <h5 className="text-center text-white sm:text-lg text-base font-medium leading-relaxed">
                    SECONDS
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-center gap-10 flex">
              <div className="w-full flex-col justify-start items-center gap-6 flex">
                <h5 className="text-center text-white text-lg font-normal leading-relaxed">
                  We'll let you know when we are Launching
                </h5>
                <div className="w-full justify-center items-start flex sm:flex-row flex-col sm:gap-0 gap-4">
                  <input
                    type="text"
                    className="sm:w-[482px] w-full focus:outline-none px-5 py-3 text-gray-900 placeholder-gray-900 text-lg font-normal leading-8 bg-white rounded-tl-lg sm:rounded-tr-none rounded-tr-lg rounded-bl-lg sm:rounded-br-none rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-start items-center gap-2 inline-flex"
                    placeholder="Email Address"
                  />
                  <button className="sm:w-fit w-full px-7 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-tr-lg sm:rounded-tl-none rounded-tl-lg rounded-br-lg sm:rounded-bl-none rounded-bl-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-3 text-white text-lg font-semibold leading-8 whitespace-nowrap">
                      Notify Me
                    </span>
                  </button>
                </div>
              </div>
              <div className="justify-center items-start gap-5 inline-flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
