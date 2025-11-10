export default function AboutUsWithStatCounts() {
  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-start justify-start gap-10 lg:flex-row xl:gap-12">
            <img
              className="mx-auto h-auto rounded-2xl object-cover lg:w-auto"
              src="https://pagedone.io/asset/uploads/1723805128.png"
              alt="About Us image"
            />
            <div className="inline-flex w-full flex-col items-start justify-center gap-10 py-2.5">
              <div className="flex w-full flex-col items-center justify-start gap-7 sm:items-start">
                <div className="flex w-full flex-col items-center justify-center gap-2 lg:items-start">
                  <span className="text-lg leading-relaxed font-normal text-slate-500">
                    About Us
                  </span>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900 lg:text-start">
                      Original and forward-thinking designs for all digital
                      platforms.
                    </h2>
                    <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                      Our approach delivers original and forward-thinking
                      designs for all digital platforms. We blend creativity
                      with the latest trends to ensure your digital presence is
                      both distinctive and impactful.
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-5 rounded-xl border border-gray-200 p-4 sm:flex-row xl:p-5">
                  <div className="inline-flex w-full flex-col items-center justify-start gap-1 border-b border-gray-200 pb-5 sm:border-r sm:border-b-0 sm:pr-5 sm:pb-0">
                    <h4 className="text-center text-xl leading-8 font-semibold text-blue-600">
                      6.2k+
                    </h4>
                    <p className="text-center text-base leading-relaxed font-normal whitespace-nowrap text-blue-400">
                      Completed Project
                    </p>
                  </div>
                  <div className="inline-flex w-full flex-col items-center justify-start gap-1 border-b border-gray-200 pb-5 sm:border-r sm:border-b-0 sm:pr-5 sm:pb-0">
                    <h4 className="text-center text-xl leading-8 font-semibold text-blue-600">
                      350+
                    </h4>
                    <p className="text-center text-base leading-relaxed font-normal whitespace-nowrap text-blue-400">
                      Satisfied Clients
                    </p>
                  </div>
                  <div className="inline-flex w-full flex-col items-center justify-start gap-1">
                    <h4 className="text-center text-xl leading-8 font-semibold text-blue-600">
                      2.5k
                    </h4>
                    <p className="text-center text-base leading-relaxed font-normal whitespace-nowrap text-blue-400">
                      Team Members
                    </p>
                  </div>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-blue-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-blue-100 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-blue-600">
                  Read More
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </section>
      `
    </div>
  )
}
