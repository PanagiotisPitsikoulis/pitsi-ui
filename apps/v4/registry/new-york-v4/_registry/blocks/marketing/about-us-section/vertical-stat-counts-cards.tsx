export default function VerticalStatCountsCards() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <span className="text-center text-lg leading-relaxed font-normal text-white">
              About Us
            </span>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white">
              Visionary Designs for Every Digital Platform
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-start justify-start gap-7">
              <img
                className="h-auto w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724409972.png"
                alt="About Us image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-9">
                <div className="flex flex-col items-start justify-start gap-3">
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-white">
                    Future-Ready Designs for Every Digital Experience
                  </h2>
                  <p className="text-lg leading-relaxed font-normal text-gray-400">
                    This guide explores future-ready design principles that
                    ensure your digital experiences are not only current but
                    also adaptable.
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
            <div className="inline-flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start rounded-xl bg-zinc-900 p-4">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-white">
                    5.6M+
                  </h2>
                  <p className="text-base leading-relaxed font-normal text-gray-300">
                    A satisfied customer is the cornerstone of any successful
                    business. This term refers to individuals who have
                    experienced positive interactions with a company
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start rounded-xl bg-zinc-900 p-4">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-white">
                    3.2+
                  </h2>
                  <p className="text-base leading-relaxed font-normal text-gray-300">
                    Active users are individuals who regularly engage with a
                    product, service, or platform within a specified period.
                    This metric is crucial for evaluating user engagement and
                    retention.
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start rounded-xl bg-zinc-900 p-4">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-white">
                    60+
                  </h2>
                  <p className="text-base leading-relaxed font-normal text-gray-300">
                    Team members are individuals who work collaboratively within
                    a group to achieve common goals and objectives. Each team
                    member brings unique skills, expertise, and perspectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
