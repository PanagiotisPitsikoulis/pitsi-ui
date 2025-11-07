export default function DarkTailwindsAreComingSoon() {
  return (
    <section className="py-24 relative bg-black">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <a href="#"></a>
          <h2 className="text-center text-white md:text-7xl text-5xl font-extrabold font-manrope md:leading-snug leading-normal">
            Coming Soon
          </h2>
          <p className="max-w-xl text-center text-white text-base font-medium leading-relaxed">
            Coming Soon" typically refers to a teaser or preview of something
            that will be available or released in the near future.
          </p>
          <div className="w-full flex-col justify-start items-center gap-8 flex">
            <div className="w-full justify-center items-start flex sm:flex-row flex-col sm:gap-0 gap-5">
              <input
                type="text"
                className="sm:w-[396px] w-full focus:outline-none px-5 py-3 bg-gray-900 rounded-tl-lg sm:rounded-tr-none rounded-tr-lg rounded-bl-lg sm:rounded-br-none rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-white placeholder-white text-lg font-normal leading-8"
                placeholder="Email Address"
              />
              <button className="sm:w-fit w-full px-7 py-3 bg-white hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-tr-lg sm:rounded-tl-none rounded-tl-lg rounded-br-lg sm:rounded-bl-none rounded-bl-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-3 text-black text-lg font-semibold leading-8 whitespace-nowrap">
                  Notify Me
                </span>
              </button>
            </div>
            <div className="justify-center items-start gap-8 inline-flex">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
