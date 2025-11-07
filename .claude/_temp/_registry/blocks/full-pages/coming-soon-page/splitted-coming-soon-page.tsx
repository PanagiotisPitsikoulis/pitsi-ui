export default function SplittedComingSoonPage() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center lg:gap-14 gap-8 inline-flex">
            <img
              src="https://pagedone.io/asset/uploads/1717567779.png"
              alt="pagedone logo image"
              className="object-cover"
            />
            <div className="w-full flex-col justify-start lg:items-start items-center gap-2.5 flex">
              <h2 className="text-blue-600 md:text-6xl text-5xl font-bold font-manrope md:leading-loose leading-normal">
                Coming Soon
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                We're nearing the completion of our site. Subscribe below to
                stay updated and be informed when we launch!
              </p>
            </div>
            <div className="w-full flex-col lg:items-start items-center gap-5 flex">
              <div className="w-full lg:justify-start justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                <input
                  type="text"
                  className="md:w-80 w-full focus:outline-none px-3.5 py-2 text-gray-900 placeholder-gray-400 h-10 text-sm font-normal leading-snug rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-1.5 inline-flex"
                  placeholder="mail@pagedone.com"
                />
                <button className="sm:w-fit w-full px-3.5 py-2 bg-gray-800 hover:bg-gray-950 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Subscribe
                  </span>
                </button>
              </div>
              <span className="text-gray-500 text-xs font-light leading-normal">
                You can trust that we're not in the business of spamming your
                email.
              </span>
            </div>
          </div>
          <div className="lg:h-[784px] h-auto xl:p-14 lg:p-6 sm:p-16 p-6 py-16 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-2xl flex-col justify-center items-center gap-16 inline-flex">
            <div className="grid grid-cols-4 w-full xl:gap-5 lg:gap-3.5 sm:gap-5 gap-3 count-down-main">
              <div className="timer bg-white/opacity-5 rounded-lg border border-white/opacity-20 backdrop-blur-xl justify-center items-center gap-2.5 flex flex-col p-2.5">
                <div className="p-2.5">
                  <h3 className="countdown-element days text-center text-white text-4xl font-semibold font-manrope leading-normal" />
                  <p className="text-center text-white text-xl font-medium leading-8 w-full">
                    Days
                  </p>
                </div>
              </div>
              <div className="timer bg-white/opacity-5 rounded-lg border border-white/opacity-20 backdrop-blur-xl justify-center items-center gap-2.5 flex flex-col p-2.5">
                <div className="p-2.5">
                  <h3 className="countdown-element hours text-center text-white text-4xl font-semibold font-manrope leading-normal" />
                  <p className="text-center text-white text-xl font-medium leading-8 w-full">
                    HOURS
                  </p>
                </div>
              </div>
              <div className="timer bg-white/opacity-5 rounded-lg border border-white/opacity-20 backdrop-blur-xl justify-center items-center gap-2.5 flex flex-col p-2.5">
                <div className="p-2.5">
                  <h3 className="countdown-element minutes text-center text-white text-4xl font-semibold font-manrope leading-normal" />
                  <p className="text-center text-white text-xl font-medium leading-8 w-full">
                    MINS
                  </p>
                </div>
              </div>
              <div className="timer bg-white/opacity-5 rounded-lg border border-white/opacity-20 backdrop-blur-xl justify-center items-center gap-2.5 flex flex-col p-2.5">
                <div className="p-2.5">
                  <h3 className="countdown-element seconds text-center text-white text-4xl font-semibold font-manrope leading-normal" />
                  <p className="text-center text-white text-xl font-medium leading-8 w-full">
                    SECS
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-2.5 flex">
              <h4 className="text-center text-white text-xl font-semibold leading-8">
                Connect with Us!
              </h4>
              <div className="justify-center items-center gap-3 inline-flex">
                <a className="w-[26px] h-[26px] bg-white/2 rounded-sm border border-white/5 hover:border-white/20 transition-all duration-700 ease-in-out backdrop-blur-lg justify-center items-center gap-2.5 flex"></a>
                <a className="w-[26px] h-[26px] bg-white/2 rounded-sm border border-white/5 hover:border-white/20 transition-all duration-700 ease-in-out backdrop-blur-lg justify-center items-center gap-2.5 flex"></a>
                <a className="w-[26px] h-[26px] bg-white/2 rounded-sm border border-white/5 hover:border-white/20 transition-all duration-700 ease-in-out backdrop-blur-lg justify-center items-center gap-2.5 flex"></a>
                <a className="w-[26px] h-[26px] bg-white/2 rounded-sm border border-white/5 hover:border-white/20 transition-all duration-700 ease-in-out backdrop-blur-lg justify-center items-center gap-2.5 flex"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
