export default function ImagesWithHeadingAndDescription() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <span className="text-center text-lg leading-relaxed font-normal text-white">
              About Us
            </span>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white">
              Understanding Your Performance Data
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-y-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
            <img
              className="col-span-12 h-auto w-full rounded-xl object-cover lg:col-span-5 lg:h-full"
              src="https://pagedone.io/asset/uploads/1724398904.png"
              alt="About Us image"
            />
            <div className="col-span-12 inline-flex w-full flex-col items-start justify-start rounded-xl bg-zinc-900 p-9 lg:col-span-7">
              <div className="flex flex-col items-start justify-start gap-9">
                <div className="flex flex-col items-start justify-start gap-3.5">
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-white">
                    A Guide to Understanding and Utilizing Your Metrics
                  </h2>
                  <p className="text-lg leading-relaxed font-normal text-gray-400">
                    This comprehensive guide will walk you through the essential
                    steps for interpreting your metrics effectively. You’ll
                    learn how to analyze key data points, identify trends, and
                    translate insights into actionable strategies. Whether
                    you're a seasoned professional.
                  </p>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-white px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-100 sm:w-fit">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                    Contact Us
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="inline-flex w-full flex-col items-center justify-start gap-7 rounded-2xl bg-zinc-900 py-8">
              <div className="relative h-[46px] w-[46px]">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col items-center justify-start gap-2">
                <h2 className="font-manrope text-center text-4xl leading-normal font-semibold text-white">
                  260+
                </h2>
                <h6 className="text-center text-lg leading-relaxed font-normal text-gray-400">
                  Expert Consultants{" "}
                </h6>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-7 rounded-2xl bg-zinc-900 py-8">
              <div className="relative h-[46px] w-[46px]">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col items-center justify-start gap-2">
                <h2 className="font-manrope text-center text-4xl leading-normal font-semibold text-white">
                  975+
                </h2>
                <h6 className="text-center text-lg leading-relaxed font-normal text-gray-400">
                  Active Clients
                </h6>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-7 rounded-2xl bg-zinc-900 py-8">
              <div className="relative h-[46px] w-[46px]">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col items-center justify-start gap-2">
                <h2 className="font-manrope text-center text-4xl leading-normal font-semibold text-white">
                  724+
                </h2>
                <h6 className="text-center text-lg leading-relaxed font-normal text-gray-400">
                  Projects Delivered
                </h6>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-7 rounded-2xl bg-zinc-900 py-8">
              <div className="relative h-[46px] w-[46px]">
                {/* SVG removed */}
              </div>
              <div className="flex flex-col items-center justify-start gap-2">
                <h2 className="font-manrope text-center text-4xl leading-normal font-semibold text-white">
                  89+
                </h2>
                <h6 className="text-center text-lg leading-relaxed font-normal text-gray-400">
                  Orders in Queue
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
