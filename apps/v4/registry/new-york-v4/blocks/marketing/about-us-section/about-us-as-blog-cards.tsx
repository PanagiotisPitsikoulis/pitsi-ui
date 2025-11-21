export default function AboutUsAsBlogCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-4 max-lg:max-w-xl lg:grid-cols-2 lg:gap-8">
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 lg:items-start">
              <span className="text-center text-base leading-relaxed font-normal text-indigo-600 lg:text-start">
                About Us
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Easy-to-Follow Strategies for Financial Success.
              </h2>
            </div>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
              This section offers straightforward, actionable advice to help you
              manage your finances effectively. From simple budgeting tips to
              practical investment guidance.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
            <div className="inline-flex w-full flex-col items-center justify-start rounded-2xl border border-gray-200 transition-all duration-700 ease-in-out hover:border-gray-400 max-lg:max-w-xl">
              <img
                className="h-auto w-full rounded-tl-2xl rounded-tr-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1724326729.png"
                alt="About Us image"
              />
              <div className="flex flex-col items-start justify-start gap-5 p-5">
                <div className="flex flex-col items-start justify-start gap-5">
                  <div className="flex flex-col items-start justify-start gap-3">
                    <h4 className="text-xl leading-8 font-medium text-gray-900">
                      Clever ways to invest in product to organize your
                      portfolio
                    </h4>
                  </div>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    Discover smart investment strategies to streamline and
                    organize your portfolio..
                  </p>
                </div>
                <button className="group flex items-center justify-center rounded-full py-3">
                  <span className="text-lg leading-8 font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                    Read more..
                  </span>
                </button>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start rounded-2xl border border-gray-200 transition-all duration-700 ease-in-out hover:border-gray-400 max-lg:max-w-xl">
              <img
                className="h-auto w-full rounded-tl-2xl rounded-tr-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1724326740.png"
                alt="About Us image"
              />
              <div className="flex flex-col items-start justify-start gap-5 p-5">
                <div className="flex flex-col items-start justify-start gap-5">
                  <div className="flex flex-col items-start justify-start gap-3">
                    <h4 className="text-xl leading-8 font-medium text-gray-900">
                      How to grow your profit through systematic investment with
                      us
                    </h4>
                  </div>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    Unlock the power of systematic investment with us and watch
                    your profits soar. Our..
                  </p>
                </div>
                <button className="group flex items-center justify-center rounded-full py-3">
                  <span className="text-lg leading-8 font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                    Read more..
                  </span>
                </button>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start rounded-2xl border border-gray-200 transition-all duration-700 ease-in-out hover:border-gray-400 max-lg:max-w-xl">
              <img
                className="h-auto w-full rounded-tl-2xl rounded-tr-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1724326752.png"
                alt="About Us image"
              />
              <div className="flex flex-col items-start justify-start gap-5 p-5">
                <div className="flex flex-col items-start justify-start gap-5">
                  <div className="flex flex-col items-start justify-start gap-3">
                    <h4 className="text-xl leading-8 font-medium text-gray-900">
                      How to analyze every holdings of your portfolio
                    </h4>
                  </div>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    Our comprehensive guide will equip you with the tools and
                    insights needed to..
                  </p>
                </div>
                <button className="group flex items-center justify-center rounded-full py-3">
                  <span className="text-lg leading-8 font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
                    Read more..
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
