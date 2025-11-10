export default function VerticalFeatureListWithIcons() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3 lg:gap-5">
            <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900">
              Building a Sustainable Advantage
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500">
              This advantage is not easily replicated by competitors and
              contributes to the company's ongoing success and growth.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <img
              className="h-auto w-full rounded-3xl object-cover lg:h-full"
              src="https://pagedone.io/asset/uploads/1720437083.png"
              alt="Sustainable Advantage feature image"
            />
            <ol className="flex w-full flex-col overflow-hidden">
              <li className="relative h-[152px] w-full after:absolute after:left-7 after:inline-block after:h-[90px] after:w-0.5 after:bg-indigo-100 after:content-['']">
                <a
                  href="https://pagedone.io/"
                  className="relative flex h-[62px] w-[62px] items-center justify-center gap-2.5 rounded-2xl bg-indigo-50 font-medium"
                >
                  {/* SVG removed */}
                </a>
                <div className="absolute top-0 left-16 flex h-[152px] flex-col gap-1 pl-3.5">
                  <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                    Insights
                  </h4>
                  <ul>
                    <h6 className="text-sm leading-normal font-normal text-gray-500">
                      Our platform offers invaluable insights designed to
                      optimize your business strategy. By leveraging advanced
                      analytics.
                    </h6>
                  </ul>
                </div>
              </li>
              <li className="relative h-[152px] w-full after:absolute after:left-7 after:inline-block after:h-[90px] after:w-0.5 after:bg-indigo-100 after:content-['']">
                <a
                  href="https://pagedone.io/"
                  className="relative flex h-[62px] w-[62px] items-center justify-center gap-2.5 rounded-2xl bg-indigo-50 font-medium"
                >
                  {/* SVG removed */}
                </a>
                <div className="absolute top-0 left-16 flex h-[152px] flex-col gap-1 pl-3.5">
                  <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                    Auto Tracking
                  </h4>
                  <ul>
                    <h6 className="text-sm leading-normal font-normal text-gray-500">
                      Our platform provides automated tracking capabilities
                      designed to streamline and simplify your business
                      operations. By automating.
                    </h6>
                  </ul>
                </div>
              </li>
              <li className="relative h-[152px] w-full after:absolute after:left-7 after:inline-block after:h-[90px] after:w-0.5 after:bg-indigo-100 after:content-['']">
                <a
                  href="https://pagedone.io/"
                  className="relative flex h-[62px] w-[62px] items-center justify-center gap-2.5 rounded-2xl bg-indigo-50 font-medium"
                >
                  {/* SVG removed */}
                </a>
                <div className="absolute top-0 left-16 flex h-[152px] flex-col gap-1 pl-3.5">
                  <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                    Ai Advisor
                  </h4>
                  <ul>
                    <h6 className="text-sm leading-normal font-normal text-gray-500">
                      This AI is not just a mere tool but a sophisticated
                      companion that sifts through vast amounts of data to offer
                      you personalized recommendations.
                    </h6>
                  </ul>
                </div>
              </li>
              <li className="relative h-[95px] w-full xl:h-[80px]">
                <a
                  href="https://pagedone.io/"
                  className="relative flex h-[62px] w-[62px] items-center justify-center gap-2.5 rounded-2xl bg-indigo-50 font-medium"
                >
                  {/* SVG removed */}
                </a>
                <div className="absolute top-0 left-16 flex h-[95px] flex-col gap-1 pl-3.5 xl:h-[80px]">
                  <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                    Schedule Tracking
                  </h4>
                  <ul>
                    <h6 className="text-sm leading-normal font-normal text-gray-500">
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
  )
}
