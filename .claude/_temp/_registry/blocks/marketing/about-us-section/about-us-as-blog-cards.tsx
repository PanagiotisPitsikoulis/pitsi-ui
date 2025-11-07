export default function AboutUsAsBlogCards() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full max-lg:max-w-xl mx-auto justify-center items-center lg:gap-8 gap-4 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <span className="text-indigo-600 text-base font-normal leading-relaxed lg:text-start text-center">
                About Us
              </span>
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Easy-to-Follow Strategies for Financial Success.
              </h2>
            </div>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              This section offers straightforward, actionable advice to help you
              manage your finances effectively. From simple budgeting tips to
              practical investment guidance.
            </p>
          </div>
          <div className="flex justify-center gap-y-8 lg:gap-y-0 lg:gap-x-8 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-xl rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center inline-flex">
              <img
                className="w-full h-auto rounded-tl-2xl rounded-tr-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1724326729.png"
                alt="About Us image"
              />
              <div className="p-5 flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-5 flex">
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <h4 className="text-gray-900 text-xl font-medium leading-8">
                      Clever ways to invest in product to organize your
                      portfolio
                    </h4>
                  </div>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    Discover smart investment strategies to streamline and
                    organize your portfolio..
                  </p>
                </div>
                <button className="group py-3 rounded-full justify-center items-center flex">
                  <span className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-lg font-semibold leading-8">
                    Read more..
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full max-lg:max-w-xl rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center inline-flex">
              <img
                className="w-full h-auto rounded-tl-2xl rounded-tr-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1724326740.png"
                alt="About Us image"
              />
              <div className="p-5 flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-5 flex">
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <h4 className="text-gray-900 text-xl font-medium leading-8">
                      How to grow your profit through systematic investment with
                      us
                    </h4>
                  </div>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    Unlock the power of systematic investment with us and watch
                    your profits soar. Our..
                  </p>
                </div>
                <button className="group py-3 rounded-full justify-center items-center flex">
                  <span className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-lg font-semibold leading-8">
                    Read more..
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full max-lg:max-w-xl rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center inline-flex">
              <img
                className="w-full h-auto rounded-tl-2xl rounded-tr-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1724326752.png"
                alt="About Us image"
              />
              <div className="p-5 flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start items-start gap-5 flex">
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <h4 className="text-gray-900 text-xl font-medium leading-8">
                      How to analyze every holdings of your portfolio
                    </h4>
                  </div>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    Our comprehensive guide will equip you with the tools and
                    insights needed to..
                  </p>
                </div>
                <button className="group py-3 rounded-full justify-center items-center flex">
                  <span className="text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-lg font-semibold leading-8">
                    Read more..
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
