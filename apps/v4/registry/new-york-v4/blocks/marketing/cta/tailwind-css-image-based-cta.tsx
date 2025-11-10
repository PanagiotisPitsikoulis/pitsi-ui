export default function TailwindCssImageBasedCta() {
  return (
    <section className="font-inter py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-14 lg:flex-row">
          <img
            src="https://pagedone.io/asset/uploads/1759491333.png"
            alt="img"
          />
          <div className="w-full max-w-3xl">
            <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-gray-900 sm:leading-[52px] lg:text-left">
              Start Your Journey To Success With Us By Your Side
            </h2>
            <p className="text-center text-base leading-6 font-normal text-gray-500 lg:text-left">
              Start your journey to success with us by your side, offering the
              support and resources you need to thrive. Our community is here to
              help you, whether you're just beginning or advancing toward your
              goals. Join us today and unlock a world of opportunities to
              achieve your dreams!
            </p>
            <div className="flex flex-col items-center justify-center gap-8 pt-8 sm:flex-row lg:justify-start">
              <input
                type="text"
                className="w-[22.5rem] rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-7 font-normal text-gray-600 shadow-sm transition-all duration-500 outline-none placeholder:text-gray-400 focus:border-gray-400"
                placeholder="mail@pagedone.com"
              />
              <button className="w rounded-xl bg-emerald-800 px-6 py-2.5 text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-emerald-900 sm:w-fit">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
