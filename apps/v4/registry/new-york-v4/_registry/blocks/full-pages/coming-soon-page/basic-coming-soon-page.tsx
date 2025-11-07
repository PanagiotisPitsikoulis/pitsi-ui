export default function BasicComingSoonPage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-end gap-10 rounded-2xl bg-gray-900 px-10 pt-10 pb-10 md:gap-16 md:px-16 md:pt-16 lg:gap-28">
          <div className="flex flex-col items-center justify-end gap-10 lg:gap-16">
            <img
              src="https://pagedone.io/asset/uploads/1717500460.png"
              alt="pagedone logo image"
              className="object-cover"
            />
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="flex flex-col items-center justify-start gap-2.5">
                <h2 className="font-manrope text-center text-5xl leading-normal font-bold text-emerald-400 md:text-6xl">
                  Coming Soon
                </h2>
                <p className="text-center text-base leading-relaxed font-normal text-gray-500">
                  Just 20 days remaining until the big reveal of our new
                  product!
                </p>
              </div>
              <div className="count-down-main flex w-full items-start justify-center gap-2">
                <div className="timer flex flex-col gap-0.5">
                  <div>
                    <h3 className="countdown-element days font-manrope text-center text-2xl leading-9 font-bold text-white" />
                  </div>
                  <p className="w-full text-center text-xs leading-normal font-normal text-gray-500">
                    DAYS
                  </p>
                </div>
                <h3 className="font-manrope w-3 text-center text-2xl leading-9 font-medium text-gray-500">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <div>
                    <h3 className="countdown-element hours font-manrope text-center text-2xl leading-9 font-bold text-white" />
                  </div>
                  <p className="w-full text-center text-xs leading-normal font-normal text-gray-500">
                    HRS
                  </p>
                </div>
                <h3 className="font-manrope w-3 text-center text-2xl leading-9 font-medium text-gray-500">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <div>
                    <h3 className="countdown-element minutes font-manrope text-center text-2xl leading-9 font-bold text-white" />
                  </div>
                  <p className="w-full text-center text-xs leading-normal font-normal text-gray-500">
                    MINS
                  </p>
                </div>
                <h3 className="font-manrope w-3 text-center text-2xl leading-9 font-medium text-gray-500">
                  :
                </h3>
                <div className="timer flex flex-col gap-0.5">
                  <div>
                    <h3 className="countdown-element seconds font-manrope text-center text-2xl leading-9 font-bold text-white" />
                  </div>
                  <p className="w-full text-center text-xs leading-normal font-normal text-gray-500">
                    SECS
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-5">
                <h6 className="text-center text-base leading-relaxed font-semibold text-emerald-400">
                  Launched Date: July 23, 2024
                </h6>
                <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row">
                  <input
                    type="text"
                    className="inline-flex h-10 w-80 items-center justify-start gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Type your mail..."
                  />
                  <button className="flex w-full items-center justify-center rounded-lg bg-emerald-400 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-600 sm:w-fit">
                    <span className="px-1.5 text-sm leading-6 font-medium whitespace-nowrap text-gray-900">
                      Notify Me
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm leading-snug font-normal text-gray-500">
            Get in touch with us:{" "}
            <a className="transition-all duration-700 ease-in-out hover:text-gray-100">
              {" "}
              mail@pagedone.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
