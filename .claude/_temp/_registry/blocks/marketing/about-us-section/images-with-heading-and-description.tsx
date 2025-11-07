export default function ImagesWithHeadingAndDescription() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <span className="text-center text-white text-lg font-normal leading-relaxed">
              About Us
            </span>
            <h2 className="text-center text-white text-4xl font-bold font-manrope leading-normal">
              Understanding Your Performance Data
            </h2>
          </div>
          <div className="w-full justify-start items-center lg:gap-x-8 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
            <img
              className="lg:col-span-5 col-span-12 w-full lg:h-full h-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1724398904.png"
              alt="About Us image"
            />
            <div className="lg:col-span-7 col-span-12 w-full p-9 bg-zinc-900 rounded-xl flex-col justify-start items-start inline-flex">
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="flex-col justify-start items-start gap-3.5 flex">
                  <h2 className="text-white text-4xl font-bold font-manrope leading-normal">
                    A Guide to Understanding and Utilizing Your Metrics
                  </h2>
                  <p className="text-gray-400 text-lg font-normal leading-relaxed">
                    This comprehensive guide will walk you through the essential
                    steps for interpreting your metrics effectively. You’ll
                    learn how to analyze key data points, identify trends, and
                    translate insights into actionable strategies. Whether
                    you're a seasoned professional.
                  </p>
                </div>
                <button className="sm:w-fit w-full px-5 py-2.5 bg-white hover:bg-gray-100 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-black text-base font-semibold leading-relaxed">
                    Contact Us
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full justify-center items-start gap-8 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            <div className="w-full py-8 bg-zinc-900 rounded-2xl flex-col justify-start items-center gap-7 inline-flex">
              <div className="w-[46px] h-[46px] relative">
                {/* SVG removed */}
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <h2 className="text-center text-white text-4xl font-semibold font-manrope leading-normal">
                  260+
                </h2>
                <h6 className="text-center text-gray-400 text-lg font-normal leading-relaxed">
                  Expert Consultants{" "}
                </h6>
              </div>
            </div>
            <div className="w-full py-8 bg-zinc-900 rounded-2xl flex-col justify-start items-center gap-7 inline-flex">
              <div className="w-[46px] h-[46px] relative">
                {/* SVG removed */}
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <h2 className="text-center text-white text-4xl font-semibold font-manrope leading-normal">
                  975+
                </h2>
                <h6 className="text-center text-gray-400 text-lg font-normal leading-relaxed">
                  Active Clients
                </h6>
              </div>
            </div>
            <div className="w-full py-8 bg-zinc-900 rounded-2xl flex-col justify-start items-center gap-7 inline-flex">
              <div className="w-[46px] h-[46px] relative">
                {/* SVG removed */}
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <h2 className="text-center text-white text-4xl font-semibold font-manrope leading-normal">
                  724+
                </h2>
                <h6 className="text-center text-gray-400 text-lg font-normal leading-relaxed">
                  Projects Delivered
                </h6>
              </div>
            </div>
            <div className="w-full py-8 bg-zinc-900 rounded-2xl flex-col justify-start items-center gap-7 inline-flex">
              <div className="w-[46px] h-[46px] relative">
                {/* SVG removed */}
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <h2 className="text-center text-white text-4xl font-semibold font-manrope leading-normal">
                  89+
                </h2>
                <h6 className="text-center text-gray-400 text-lg font-normal leading-relaxed">
                  Orders in Queue
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
