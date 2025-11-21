export default function TailwindIsComingSoon() {
  return (
    <section className="relative h-screen bg-[url('https://pagedone.io/asset/uploads/1717583954.png')] bg-cover bg-no-repeat py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 sm:gap-14 lg:gap-28">
          <a href="#"></a>
          <div className="flex w-full flex-col items-center justify-start gap-8 md:gap-10">
            <h2 className="font-manrope text-center text-5xl leading-tight font-bold text-white">
              COMING SOON
            </h2>
            <div className="count-down-main flex w-full items-start justify-center gap-3 sm:gap-6">
              <div className="timer">
                <div className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-black/20 px-3.5 py-3 backdrop-blur-xl sm:px-5">
                  <h3 className="countdown-element days font-manrope text-center text-5xl leading-tight font-semibold text-white" />
                  <p className="w-full text-center text-lg leading-relaxed font-normal text-white">
                    Days
                  </p>
                </div>
              </div>
              <div className="timer">
                <div className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-black/20 px-3.5 py-3 backdrop-blur-xl sm:px-5">
                  <h3 className="countdown-element hours font-manrope text-center text-5xl leading-tight font-semibold text-white" />
                  <p className="w-full text-center text-lg leading-relaxed font-normal text-white">
                    Hours
                  </p>
                </div>
              </div>
              <div className="timer">
                <div className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-black/20 px-3.5 py-3 backdrop-blur-xl sm:px-5">
                  <h3 className="countdown-element minutes font-manrope text-center text-5xl leading-tight font-semibold text-white" />
                  <p className="w-full text-center text-lg leading-relaxed font-normal text-white">
                    Minutes
                  </p>
                </div>
              </div>
              <div className="timer">
                <div className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-black/20 px-3.5 py-3 backdrop-blur-xl sm:px-5">
                  <h3 className="countdown-element seconds font-manrope text-center text-5xl leading-tight font-semibold text-white" />
                  <p className="w-full text-center text-lg leading-relaxed font-normal text-white">
                    Seconds
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-3 sm:flex-row">
              <input
                type="text"
                className="w-full rounded-lg bg-black/50 px-5 py-3 text-lg leading-8 font-normal text-white placeholder-white backdrop-blur-sm focus:outline-none sm:w-[444px]"
                placeholder="Email Address"
              />
              <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-7 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                <span className="px-3 text-lg leading-8 font-semibold whitespace-nowrap text-white">
                  Notify Me
                </span>
              </button>
            </div>
          </div>
          <div className="inline-flex w-full items-start justify-center gap-8">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </section>
  )
}
