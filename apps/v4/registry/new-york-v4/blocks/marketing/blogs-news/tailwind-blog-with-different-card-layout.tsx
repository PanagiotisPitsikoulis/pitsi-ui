export default function TailwindBlogWithDifferentCardLayout() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 inline-flex w-full flex-col items-center justify-start gap-3">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
            Our Recent Blog Entries
          </h2>
          <p className="text-center text-base leading-relaxed font-normal text-gray-500">
            Stay curious, stay informed, and embrace the journey of continuous
            learning.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 xl:h-[615px]">
          <div className="mx-auto inline-flex h-[615px] w-full flex-col items-center justify-end rounded-2xl bg-[url('https://pagedone.io/asset/uploads/1711084442.png')] bg-cover bg-no-repeat lg:h-auto xl:mx-0 xl:h-[615px] xl:w-fit">
            <div className="flex w-full flex-col items-start justify-start gap-2.5 px-8 py-6">
              <div className="inline-flex items-start justify-start gap-24">
                <div className="inline-flex flex-col items-start justify-start gap-4">
                  <h3 className="font-manrope text-3xl leading-10 font-semibold text-white xl:whitespace-nowrap">
                    Clever Ways to Organize Your Life{" "}
                  </h3>
                  <p className="text-sm leading-snug font-medium text-white">
                    Throughout this guide, you'll also find practical resources,
                    recommended readings, and actionable exercises.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-center justify-start gap-8 xl:items-start">
            <div className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2 md:justify-center lg:justify-start">
              <div className="group inline-flex w-full flex-col items-start justify-center gap-3 lg:justify-start">
                <img
                  className="w-full rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1711084588.png"
                  alt="grow your profit image"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <h4 className="text-lg leading-7 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                    How to grow your profit...
                  </h4>
                  <p className="text-xs leading-5 font-normal text-gray-500">
                    Unlock the power of systematic investment with us and watch
                    your profits soar..
                  </p>
                </div>
              </div>
              <div className="group inline-flex w-full flex-col items-start justify-center gap-3 lg:justify-start">
                <img
                  className="w-full rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1711084600.png"
                  alt="Evaluating image"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <h4 className="text-lg leading-7 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                    Evaluating Every Holding in...
                  </h4>
                  <p className="text-xs leading-5 font-normal text-gray-500">
                    This analysis delves into the innovative ways fintech
                    companies are breaking.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2 md:justify-start">
              <div className="group inline-flex w-full flex-col items-start justify-start gap-3">
                <img
                  className="w-full rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1711084696.png"
                  alt="Financial Services image"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <h4 className="text-lg leading-7 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                    Access to Financial Services
                  </h4>
                  <p className="text-xs leading-5 font-normal text-gray-500">
                    This guide covers everything you need to know to succeed in
                    insert field or endeavor.
                  </p>
                </div>
              </div>
              <div className="group inline-flex w-full flex-col items-start justify-start gap-3">
                <img
                  className="w-full rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1711084707.png"
                  alt="Embracing image"
                />
                <div className="flex flex-col items-start justify-start gap-2">
                  <h4 className="text-lg leading-7 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                    Embracing the First Step
                  </h4>
                  <p className="text-xs leading-5 font-normal text-gray-500">
                    This guide is your roadmap to achieving greater efficiency
                    and success in navigating.
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
