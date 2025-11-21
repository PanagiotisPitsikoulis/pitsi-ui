export default function TailwindIsComingSoonWithAGradientBackground() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-violet-500 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-14">
          <a href="#"></a>
          <div className="flex w-full flex-col items-start justify-start gap-16 md:gap-24 lg:gap-32">
            <div className="flex w-full flex-col items-center justify-start gap-10">
              <h2 className="font-manrope text-center text-5xl leading-snug font-bold text-white md:text-6xl md:leading-normal">
                Coming Soon
              </h2>
              <div className="count-down-main inline-flex w-full items-center justify-center gap-3 sm:gap-4 md:gap-3.5 lg:gap-6">
                <div className="timer inline-flex flex-col items-center justify-start gap-3">
                  <div className="inline-flex items-start justify-start gap-1.5 sm:gap-2 lg:gap-2.5">
                    <div className="divider relative flex w-32 flex-col items-center justify-center gap-2.5 rounded-xl bg-white py-5 pl-6">
                      <h4 className="countdown-element days font-manrope relative text-center text-2xl leading-normal font-bold tracking-[24px] text-indigo-600 sm:text-4xl"></h4>
                    </div>
                  </div>
                  <h5 className="text-center text-base leading-relaxed font-medium text-white sm:text-lg">
                    DAYS
                  </h5>
                </div>
                <div className="timer inline-flex flex-col items-center justify-start gap-3">
                  <div className="inline-flex items-start justify-start gap-1.5 sm:gap-2 lg:gap-2.5">
                    <div className="divider relative flex w-32 flex-col items-center justify-center gap-2.5 rounded-xl bg-white py-5 pl-6">
                      <h4 className="countdown-element hours font-manrope relative text-center text-2xl leading-normal font-bold tracking-[24px] text-indigo-600 sm:text-4xl"></h4>
                    </div>
                  </div>
                  <h5 className="text-center text-base leading-relaxed font-medium text-white sm:text-lg">
                    HOURS
                  </h5>
                </div>
                <div className="timer inline-flex flex-col items-center justify-start gap-3">
                  <div className="inline-flex items-start justify-start gap-1.5 sm:gap-2 lg:gap-2.5">
                    <div className="divider relative flex w-32 flex-col items-center justify-center gap-2.5 rounded-xl bg-white py-5 pl-6">
                      <h4 className="countdown-element minutes font-manrope relative text-center text-2xl leading-normal font-bold tracking-[24px] text-indigo-600 sm:text-4xl"></h4>
                    </div>
                  </div>
                  <h5 className="text-center text-base leading-relaxed font-medium text-white sm:text-lg">
                    MINUTES
                  </h5>
                </div>
                <div className="timer inline-flex flex-col items-center justify-start gap-3">
                  <div className="inline-flex items-start justify-start gap-1.5 sm:gap-2 lg:gap-2.5">
                    <div className="divider relative flex w-32 flex-col items-center justify-center gap-2.5 rounded-xl bg-white py-5 pl-6">
                      <h4 className="countdown-element seconds font-manrope relative text-center text-2xl leading-normal font-bold tracking-[24px] text-indigo-600 sm:text-4xl"></h4>
                    </div>
                  </div>
                  <h5 className="text-center text-base leading-relaxed font-medium text-white sm:text-lg">
                    SECONDS
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-10">
              <div className="flex w-full flex-col items-center justify-start gap-6">
                <h5 className="text-center text-lg leading-relaxed font-normal text-white">
                  We'll let you know when we are Launching
                </h5>
                <div className="flex w-full flex-col items-start justify-center gap-4 sm:flex-row sm:gap-0">
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg bg-white px-5 py-3 text-lg leading-8 font-normal text-gray-900 placeholder-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none sm:w-[482px] sm:rounded-tr-none sm:rounded-br-none"
                    placeholder="Email Address"
                  />
                  <button className="flex w-full items-center justify-center rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg bg-indigo-600 px-7 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit sm:rounded-tl-none sm:rounded-bl-none">
                    <span className="px-3 text-lg leading-8 font-semibold whitespace-nowrap text-white">
                      Notify Me
                    </span>
                  </button>
                </div>
              </div>
              <div className="inline-flex items-start justify-center gap-5">
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
  )
}
