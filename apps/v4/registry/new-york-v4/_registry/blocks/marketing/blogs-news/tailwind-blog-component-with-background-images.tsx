export default function TailwindBlogComponentWithBackgroundImages() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-between gap-1 lg:flex-row lg:gap-3">
            <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
              Today's Latest Updates
            </h2>
            <div className="flex items-start justify-start">
              <button className="group flex items-center justify-center rounded-full py-3">
                <span className="py-px pr-2 text-lg leading-relaxed font-semibold text-indigo-600">
                  See All
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="grid h-full w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
            <div className="relative inline-flex h-full w-full flex-col items-start justify-start">
              <img
                className="relative h-[450px] w-full rounded-2xl object-cover md:h-full lg:h-auto"
                src="https://pagedone.io/asset/uploads/1722244147.png"
              />
              <div className="absolute -bottom-1 flex w-full flex-col items-start justify-start gap-8 rounded-2xl bg-slate-100 p-5 lg:bottom-px">
                <div className="flex flex-col items-start justify-start gap-3.5">
                  <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-800">
                    The Importance of Data Privacy in the Digital Age
                  </h3>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    Data privacy is crucial in the digital age, protecting
                    personal information from unauthorized access and misuse.
                    Safeguarding your data ensures your privacy and maintains
                    trust in digital interactions.
                  </p>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-white px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-gray-50 sm:w-fit">
                  <span className="px-1.5 py-px text-sm leading-snug font-medium text-gray-800">
                    Read More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-6">
              <div className="grid w-full grid-cols-1 items-start justify-start gap-6 md:grid-cols-2">
                <div className="group relative flex h-full w-full items-end justify-start gap-5 rounded-xl bg-gradient-to-b from-black to-black">
                  <img
                    src="https://pagedone.io/asset/uploads/1722244158.png"
                    alt="Blog and News Image"
                    className="h-auto w-full rounded-xl object-cover"
                  />
                  <div className="absolute flex w-full items-center justify-between gap-5 px-5 pb-5">
                    <h4 className="text-xl leading-8 font-semibold text-white">
                      The Evolution of the Music Industry
                    </h4>
                    <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white p-[9px] transition-all duration-700 ease-in-out group-hover:bg-gray-200">
                      {/* SVG removed */}
                    </button>
                  </div>
                </div>
                <div className="group relative flex h-full w-full items-end justify-start gap-5 rounded-xl bg-gradient-to-b from-black to-black">
                  <img
                    src="https://pagedone.io/asset/uploads/1722244168.png"
                    alt="Blog and News Image"
                    className="h-auto w-full rounded-xl object-cover"
                  />
                  <div className="absolute flex w-full items-center justify-between gap-5 px-5 pb-5">
                    <h4 className="text-xl leading-8 font-semibold text-white">
                      The Impact of Globalism on Local
                    </h4>
                    <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white p-[9px] transition-all duration-700 ease-in-out group-hover:bg-gray-200">
                      {/* SVG removed */}
                    </button>
                  </div>
                </div>
              </div>
              <div className="group relative inline-flex w-full items-end justify-start gap-5 rounded-xl bg-gradient-to-b from-black to-black">
                <img
                  src="https://pagedone.io/asset/uploads/1722244177.png"
                  alt="Blog and News Image"
                  className="h-auto w-full rounded-xl object-cover"
                />
                <div className="absolute flex w-full items-center justify-between gap-4 px-5 pb-5 xl:gap-5">
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    The Future of Space Exploration: Opportunities and
                    Challenges
                  </h4>
                  <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white p-[9px] transition-all duration-700 ease-in-out group-hover:bg-gray-200">
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
