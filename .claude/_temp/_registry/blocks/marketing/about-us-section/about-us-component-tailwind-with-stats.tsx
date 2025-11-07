export default function AboutUsComponentTailwindWithStats() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-center items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full justify-start items-center lg:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-3 inline-flex">
              <h6 className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                About Us
              </h6>
              <h2 className="text-black text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Shape Your Financial Destiny Effortlessly
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Effortlessly mold your financial future by setting clear goals,
                automating your finances, and investing wisely. With disciplined
                habits and informed decision-making, shape a prosperous
                financial destiny for yourself. Seek guidance from financial
                experts to optimize your strategies and navigate the path to
                long-term success.
              </p>
            </div>
            <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
              <img
                className="w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717756189.png"
              />
              <div className="w-full justify-start items-center gap-8 flex sm:flex-row flex-col">
                <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                  <h4 className="text-indigo-700 text-2xl font-bold font-manrope leading-9">
                    33+ Years
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    of shaping architectural landscapes
                  </h6>
                </div>
                <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                  <h4 className="text-indigo-700 text-2xl font-bold font-manrope leading-9">
                    125+ Projects
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Successful delivered with excellence
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
