export default function VerticalStatCountsCards() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <span className="text-center text-white text-lg font-normal leading-relaxed">
              About Us
            </span>
            <h2 className="text-center text-white text-4xl font-bold font-manrope leading-normal">
              Visionary Designs for Every Digital Platform
            </h2>
          </div>
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-start gap-7 inline-flex">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724409972.png"
                alt="About Us image"
              />
              <div className="w-full flex-col justify-start items-start gap-9 flex">
                <div className="flex-col justify-start items-start gap-3 flex">
                  <h2 className="text-white text-4xl font-bold font-manrope leading-normal">
                    Future-Ready Designs for Every Digital Experience
                  </h2>
                  <p className="text-gray-400 text-lg font-normal leading-relaxed">
                    This guide explores future-ready design principles that
                    ensure your digital experiences are not only current but
                    also adaptable.
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
            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full p-4 bg-zinc-900 rounded-xl flex-col justify-start items-start flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <h2 className="text-white text-4xl font-bold font-manrope leading-normal">
                    5.6M+
                  </h2>
                  <p className="text-gray-300 text-base font-normal leading-relaxed">
                    A satisfied customer is the cornerstone of any successful
                    business. This term refers to individuals who have
                    experienced positive interactions with a company
                  </p>
                </div>
              </div>
              <div className="w-full p-4 bg-zinc-900 rounded-xl flex-col justify-start items-start flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <h2 className="text-white text-4xl font-bold font-manrope leading-normal">
                    3.2+
                  </h2>
                  <p className="text-gray-300 text-base font-normal leading-relaxed">
                    Active users are individuals who regularly engage with a
                    product, service, or platform within a specified period.
                    This metric is crucial for evaluating user engagement and
                    retention.
                  </p>
                </div>
              </div>
              <div className="w-full p-4 bg-zinc-900 rounded-xl flex-col justify-start items-start flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <h2 className="text-white text-4xl font-bold font-manrope leading-normal">
                    60+
                  </h2>
                  <p className="text-gray-300 text-base font-normal leading-relaxed">
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
  );
}
