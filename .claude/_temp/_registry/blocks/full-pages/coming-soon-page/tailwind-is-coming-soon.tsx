export default function TailwindIsComingSoon() {
  return (
    <section className="py-24 relative bg-[url('https://pagedone.io/asset/uploads/1717583954.png')] bg-no-repeat bg-cover h-screen">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-28 sm:gap-14 gap-10 inline-flex">
          <a href="#"></a>
          <div className="w-full flex-col justify-start items-center md:gap-10 gap-8 flex">
            <h2 className="text-center text-white text-5xl font-bold font-manrope leading-tight">
              COMING SOON
            </h2>
            <div className="flex items-start justify-center w-full sm:gap-6 gap-3 count-down-main">
              <div className="timer">
                <div className="rounded-xl bg-black/20 backdrop-blur-xl flex items-center justify-center flex-col gap-0.5 sm:px-5 px-3.5 py-3">
                  <h3 className="countdown-element days text-center text-white text-5xl font-semibold font-manrope leading-tight" />
                  <p className="text-center text-white text-lg font-normal leading-relaxed w-full">
                    Days
                  </p>
                </div>
              </div>
              <div className="timer">
                <div className="rounded-xl bg-black/20 backdrop-blur-xl flex items-center justify-center flex-col gap-0.5 sm:px-5 px-3.5 py-3">
                  <h3 className="countdown-element hours text-center text-white text-5xl font-semibold font-manrope leading-tight" />
                  <p className="text-center text-white text-lg font-normal leading-relaxed w-full">
                    Hours
                  </p>
                </div>
              </div>
              <div className="timer">
                <div className="rounded-xl bg-black/20 backdrop-blur-xl flex items-center justify-center flex-col gap-0.5 sm:px-5 px-3.5 py-3">
                  <h3 className="countdown-element minutes text-center text-white text-5xl font-semibold font-manrope leading-tight" />
                  <p className="text-center text-white text-lg font-normal leading-relaxed w-full">
                    Minutes
                  </p>
                </div>
              </div>
              <div className="timer">
                <div className="rounded-xl bg-black/20 backdrop-blur-xl flex items-center justify-center flex-col gap-0.5 sm:px-5 px-3.5 py-3">
                  <h3 className="countdown-element seconds text-center text-white text-5xl font-semibold font-manrope leading-tight" />
                  <p className="text-center text-white text-lg font-normal leading-relaxed w-full">
                    Seconds
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full justify-center items-start gap-3 flex sm:flex-row flex-col">
              <input
                type="text"
                className="sm:w-[444px] w-full focus:outline-none px-5 py-3 bg-black/50 rounded-lg backdrop-blur-sm placeholder-white text-white text-lg font-normal leading-8"
                placeholder="Email Address"
              />
              <button className="sm:w-fit w-full px-7 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-3 text-white text-lg font-semibold leading-8 whitespace-nowrap">
                  Notify Me
                </span>
              </button>
            </div>
          </div>
          <div className="w-full justify-center items-start gap-8 inline-flex">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </section>
  );
}
