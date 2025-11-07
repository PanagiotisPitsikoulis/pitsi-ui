export default function TailwindBlogWithDifferentCardLayout() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center gap-3 inline-flex mb-14">
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Our Recent Blog Entries
          </h2>
          <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
            Stay curious, stay informed, and embrace the journey of continuous
            learning.
          </p>
        </div>
        <div className="w-full xl:h-[615px] gap-8 lg:grid-cols-2 grid-cols-1 grid">
          <div className="xl:h-[615px] lg:h-auto h-[615px] xl:w-fit w-full xl:mx-0 mx-auto rounded-2xl flex-col justify-end items-center inline-flex bg-cover bg-no-repeat bg-[url('https://pagedone.io/asset/uploads/1711084442.png')]">
            <div className="w-full px-8 py-6 flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-start gap-24 inline-flex">
                <div className="flex-col justify-start items-start gap-4 inline-flex">
                  <h3 className="text-white text-3xl font-semibold font-manrope leading-10 xl:whitespace-nowrap">
                    Clever Ways to Organize Your Life{" "}
                  </h3>
                  <p className="text-white text-sm font-medium leading-snug">
                    Throughout this guide, you'll also find practical resources,
                    recommended readings, and actionable exercises.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-center xl:items-start gap-8 inline-flex">
            <div className="w-full lg:justify-start md:justify-center items-start gap-8 md:grid-cols-2 grid-cols-1 grid">
              <div className="group w-full flex-col lg:justify-start justify-center items-start gap-3 inline-flex">
                <img
                  className="rounded-2xl w-full object-cover"
                  src="https://pagedone.io/asset/uploads/1711084588.png"
                  alt="grow your profit image"
                />
                <div className="flex-col justify-start items-start gap-2 flex">
                  <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-lg font-medium leading-7">
                    How to grow your profit...
                  </h4>
                  <p className="text-gray-500 text-xs font-normal leading-5">
                    Unlock the power of systematic investment with us and watch
                    your profits soar..
                  </p>
                </div>
              </div>
              <div className="group w-full flex-col lg:justify-start justify-center items-start gap-3 inline-flex">
                <img
                  className="w-full rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1711084600.png"
                  alt="Evaluating image"
                />
                <div className="flex-col justify-start items-start gap-2 flex">
                  <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-lg font-medium leading-7">
                    Evaluating Every Holding in...
                  </h4>
                  <p className="text-gray-500 text-xs font-normal leading-5">
                    This analysis delves into the innovative ways fintech
                    companies are breaking.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:justify-start items-start gap-8 md:grid-cols-2 grid-cols-1 grid">
              <div className="group w-full flex-col justify-start items-start gap-3 inline-flex">
                <img
                  className="w-full rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1711084696.png"
                  alt="Financial Services image"
                />
                <div className="flex-col justify-start items-start gap-2 flex">
                  <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-lg font-medium leading-7">
                    Access to Financial Services
                  </h4>
                  <p className="text-gray-500 text-xs font-normal leading-5">
                    This guide covers everything you need to know to succeed in
                    insert field or endeavor.
                  </p>
                </div>
              </div>
              <div className="group w-full flex-col justify-start items-start gap-3 inline-flex">
                <img
                  className="w-full rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1711084707.png"
                  alt="Embracing image"
                />
                <div className="flex-col justify-start items-start gap-2 flex">
                  <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-lg font-medium leading-7">
                    Embracing the First Step
                  </h4>
                  <p className="text-gray-500 text-xs font-normal leading-5">
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
  );
}
