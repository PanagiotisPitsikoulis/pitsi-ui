export default function SinglePricingPlan() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-center items-center lg:gap-4 gap-3 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Ready to Get Started ?
            </h2>
            <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
              No commitment. No hidden charges
            </h6>
          </div>
          <div className="w-full p-8 bg-white rounded-2xl shadow border border-gray-200 flex-col justify-center items-end gap-10 flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="flex justify-center items-center gap-4">
                <input
                  type="checkbox"
                  id="checbox"
                  className="relative shrink-0 w-11 h-6 p-0.5 bg-emerald-100 checked:bg-none checked:bg-emerald-100 rounded-full cursor-pointer transition-colors ease-in-out duration-700 appearance-none 

                      before:inline-block before:w-5 before:h-5 before:bg-emerald-700 checked:before:bg-emerald-700 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform  before:transition before:ease-in-out before:duration-200 "
                />
                <label className="relative min-w-[3.5rem] font-medium leading-8 text-xl text-gray-900">
                  Monthly
                </label>
              </div>
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full flex-col justify-start items-start gap-2 flex">
                  <h3 className="text2 text-black text-3xl font-semibold font-manrope leading-normal">
                    $5,299 | Month
                  </h3>
                  <h3 className="text1 text-black text-3xl font-semibold font-manrope leading-normal">
                    $10,600 | Year
                  </h3>
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    For large more dynamic business that have more than 100
                    active users, signup and get started.
                  </h6>
                </div>
                <ul className="w-full flex-col justify-start items-start gap-3 flex">
                  <li className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 justify-center items-center flex">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                      AI Advisor
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 justify-center items-center flex">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                      Unlimited auto tracking
                    </h6>
                  </li>
                  <li className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 justify-center items-center flex">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                      1 Day transaction clearing{" "}
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <button className="w-full px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 py-px text-white text-sm font-medium leading-snug">
                Subscribe
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
