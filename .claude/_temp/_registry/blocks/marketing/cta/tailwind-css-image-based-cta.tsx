export default function TailwindCssImageBasedCta() {
  return (
    <section className="py-24 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-14">
          <img
            src="https://pagedone.io/asset/uploads/1759491333.png"
            alt="img"
          />
          <div className="max-w-3xl w-full">
            <h2 className="text-4xl font-bold sm:leading-[52px] text-gray-900 font-manrope mb-4 text-center lg:text-left">
              Start Your Journey To Success With Us By Your Side
            </h2>
            <p className="text-gray-500 text-base font-normal leading-6 text-center lg:text-left">
              Start your journey to success with us by your side, offering the
              support and resources you need to thrive. Our community is here to
              help you, whether you're just beginning or advancing toward your
              goals. Join us today and unlock a world of opportunities to
              achieve your dreams!
            </p>
            <div className="flex items-center flex-col sm:flex-row justify-center lg:justify-start gap-8 pt-8">
              <input
                type="text"
                className="w-[22.5rem] py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-base font-normal leading-7 placeholder:text-gray-400 text-gray-600 outline-none transition-all duration-500 focus:border-gray-400"
                placeholder="mail@pagedone.com"
              />
              <button className="bg-emerald-800 w sm:w-fit px-6 py-2.5 text-white leading-7 text-base font-semibold rounded-xl transition-all duration-500 hover:bg-emerald-900">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
