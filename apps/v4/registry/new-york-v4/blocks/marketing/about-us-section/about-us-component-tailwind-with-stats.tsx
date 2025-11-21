export default function AboutUsComponentTailwindWithStats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-center gap-10 lg:gap-12">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="inline-flex w-full flex-col items-center justify-center gap-3 lg:items-start">
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-400 lg:text-start">
                About Us
              </h6>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black lg:text-start">
                Shape Your Financial Destiny Effortlessly
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                Effortlessly mold your financial future by setting clear goals,
                automating your finances, and investing wisely. With disciplined
                habits and informed decision-making, shape a prosperous
                financial destiny for yourself. Seek guidance from financial
                experts to optimize your strategies and navigate the path to
                long-term success.
              </p>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-5">
              <img
                className="w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717756189.png"
              />
              <div className="flex w-full flex-col items-center justify-start gap-8 sm:flex-row">
                <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                  <h4 className="font-manrope text-2xl leading-9 font-bold text-indigo-700">
                    33+ Years
                  </h4>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    of shaping architectural landscapes
                  </h6>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                  <h4 className="font-manrope text-2xl leading-9 font-bold text-indigo-700">
                    125+ Projects
                  </h4>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Successful delivered with excellence
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
