export default function VerticalFeatureListWithIcons() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center lg:gap-5 gap-3 flex">
            <h2 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Building a Sustainable Advantage
            </h2>
            <p className="text-center text-gray-500 text-lg font-normal leading-relaxed">
              This advantage is not easily replicated by competitors and
              contributes to the company's ongoing success and growth.
            </p>
          </div>
          <div className="w-full justify-start items-start xl:gap-14 lg:gap-10 gap-8 grid lg:grid-cols-2 grid-cols-1">
            <img
              className="lg:h-full h-auto w-full object-cover rounded-3xl"
              src="https://pagedone.io/asset/uploads/1720437083.png"
              alt="Sustainable Advantage feature image"
            />
            <ol className="w-full overflow-hidden flex flex-col">
              <li className="w-full relative h-[152px] after:content-['']  after:w-0.5 after:h-[90px] after:bg-indigo-100 after:inline-block after:absolute after:left-7">
                <a
                  href="https://pagedone.io/"
                  className="w-[62px] h-[62px] relative flex items-center justify-center font-medium gap-2.5 bg-indigo-50 rounded-2xl"
                >
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col gap-1 pl-3.5 h-[152px] absolute top-0 left-16">
                  <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                    Insights
                  </h4>
                  <ul>
                    <h6 className="text-gray-500 text-sm font-normal leading-normal">
                      Our platform offers invaluable insights designed to
                      optimize your business strategy. By leveraging advanced
                      analytics.
                    </h6>
                  </ul>
                </div>
              </li>
              <li className="w-full relative h-[152px] after:content-['']  after:w-0.5 after:h-[90px] after:bg-indigo-100 after:inline-block after:absolute after:left-7">
                <a
                  href="https://pagedone.io/"
                  className="w-[62px] h-[62px] relative flex items-center justify-center font-medium gap-2.5 bg-indigo-50 rounded-2xl"
                >
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col gap-1 pl-3.5 h-[152px] absolute top-0 left-16">
                  <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                    Auto Tracking
                  </h4>
                  <ul>
                    <h6 className="text-gray-500 text-sm font-normal leading-normal">
                      Our platform provides automated tracking capabilities
                      designed to streamline and simplify your business
                      operations. By automating.
                    </h6>
                  </ul>
                </div>
              </li>
              <li className="w-full relative h-[152px] after:content-['']  after:w-0.5 after:h-[90px] after:bg-indigo-100 after:inline-block after:absolute after:left-7">
                <a
                  href="https://pagedone.io/"
                  className="w-[62px] h-[62px] relative flex items-center justify-center font-medium gap-2.5 bg-indigo-50 rounded-2xl"
                >
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col gap-1 pl-3.5 h-[152px] absolute top-0 left-16">
                  <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                    Ai Advisor
                  </h4>
                  <ul>
                    <h6 className="text-gray-500 text-sm font-normal leading-normal">
                      This AI is not just a mere tool but a sophisticated
                      companion that sifts through vast amounts of data to offer
                      you personalized recommendations.
                    </h6>
                  </ul>
                </div>
              </li>
              <li className="w-full relative xl:h-[80px] h-[95px]">
                <a
                  href="https://pagedone.io/"
                  className="w-[62px] h-[62px] relative flex items-center justify-center font-medium gap-2.5 bg-indigo-50 rounded-2xl"
                >
                  {/* SVG removed */}
                </a>
                <div className="flex flex-col gap-1 pl-3.5 xl:h-[80px] h-[95px] absolute top-0 left-16">
                  <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                    Schedule Tracking
                  </h4>
                  <ul>
                    <h6 className="text-gray-500 text-sm font-normal leading-normal">
                      Whether you're managing personal appointments, work
                      deadlines, or social engagements, this schedule tracking
                      capability acts as your reliable.
                    </h6>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
