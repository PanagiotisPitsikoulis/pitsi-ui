export default function SplittedComingSoonPage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2 xl:gap-12">
          <div className="inline-flex w-full flex-col items-center justify-center gap-8 lg:items-start lg:gap-14">
            <img
              src="https://pagedone.io/asset/uploads/1717567779.png"
              alt="pagedone logo image"
              className="object-cover"
            />
            <div className="flex w-full flex-col items-center justify-start gap-2.5 lg:items-start">
              <h2 className="font-manrope text-5xl leading-normal font-bold text-blue-600 md:text-6xl md:leading-loose">
                Coming Soon
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                We're nearing the completion of our site. Subscribe below to
                stay updated and be informed when we launch!
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-5 lg:items-start">
              <div className="flex w-full flex-col items-center justify-center gap-2.5 sm:flex-row lg:justify-start">
                <input
                  type="text"
                  className="inline-flex h-10 w-full items-center justify-start gap-1.5 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-snug font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none md:w-80"
                  placeholder="mail@pagedone.com"
                />
                <button className="flex w-full items-center justify-center rounded-lg bg-gray-800 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-950 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Subscribe
                  </span>
                </button>
              </div>
              <span className="text-xs leading-normal font-light text-gray-500">
                You can trust that we're not in the business of spamming your
                email.
              </span>
            </div>
          </div>
          <div className="inline-flex h-auto flex-col items-center justify-center gap-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-blue-300 p-6 py-16 sm:p-16 lg:h-[784px] lg:p-6 xl:p-14">
            <div className="count-down-main grid w-full grid-cols-4 gap-3 sm:gap-5 lg:gap-3.5 xl:gap-5">
              <div className="timer bg-white/opacity-5 border-white/opacity-20 flex flex-col items-center justify-center gap-2.5 rounded-lg border p-2.5 backdrop-blur-xl">
                <div className="p-2.5">
                  <h3 className="countdown-element days font-manrope text-center text-4xl leading-normal font-semibold text-white" />
                  <p className="w-full text-center text-xl leading-8 font-medium text-white">
                    Days
                  </p>
                </div>
              </div>
              <div className="timer bg-white/opacity-5 border-white/opacity-20 flex flex-col items-center justify-center gap-2.5 rounded-lg border p-2.5 backdrop-blur-xl">
                <div className="p-2.5">
                  <h3 className="countdown-element hours font-manrope text-center text-4xl leading-normal font-semibold text-white" />
                  <p className="w-full text-center text-xl leading-8 font-medium text-white">
                    HOURS
                  </p>
                </div>
              </div>
              <div className="timer bg-white/opacity-5 border-white/opacity-20 flex flex-col items-center justify-center gap-2.5 rounded-lg border p-2.5 backdrop-blur-xl">
                <div className="p-2.5">
                  <h3 className="countdown-element minutes font-manrope text-center text-4xl leading-normal font-semibold text-white" />
                  <p className="w-full text-center text-xl leading-8 font-medium text-white">
                    MINS
                  </p>
                </div>
              </div>
              <div className="timer bg-white/opacity-5 border-white/opacity-20 flex flex-col items-center justify-center gap-2.5 rounded-lg border p-2.5 backdrop-blur-xl">
                <div className="p-2.5">
                  <h3 className="countdown-element seconds font-manrope text-center text-4xl leading-normal font-semibold text-white" />
                  <p className="w-full text-center text-xl leading-8 font-medium text-white">
                    SECS
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5">
              <h4 className="text-center text-xl leading-8 font-semibold text-white">
                Connect with Us!
              </h4>
              <div className="inline-flex items-center justify-center gap-3">
                <a className="flex h-[26px] w-[26px] items-center justify-center gap-2.5 rounded-sm border border-white/5 bg-white/2 backdrop-blur-lg transition-all duration-700 ease-in-out hover:border-white/20"></a>
                <a className="flex h-[26px] w-[26px] items-center justify-center gap-2.5 rounded-sm border border-white/5 bg-white/2 backdrop-blur-lg transition-all duration-700 ease-in-out hover:border-white/20"></a>
                <a className="flex h-[26px] w-[26px] items-center justify-center gap-2.5 rounded-sm border border-white/5 bg-white/2 backdrop-blur-lg transition-all duration-700 ease-in-out hover:border-white/20"></a>
                <a className="flex h-[26px] w-[26px] items-center justify-center gap-2.5 rounded-sm border border-white/5 bg-white/2 backdrop-blur-lg transition-all duration-700 ease-in-out hover:border-white/20"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
