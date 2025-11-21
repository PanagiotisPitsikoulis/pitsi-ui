export default function TailwindFreeTrialCtaWithBenefits() {
  return (
    <section className="font-inter rounded-3xl bg-gradient-to-b from-indigo-600 to-indigo-400 bg-cover py-20">
      <div className="mx-auto w-full max-w-7xl rounded-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center xl:flex-row xl:items-start xl:justify-between">
          <div className="flex w-full max-w-3xl flex-col gap-6">
            <h2 className="font-manrope text-center text-5xl font-semibold text-white xl:text-start">
              Join Us Expand Your Business
            </h2>
            <p className="font-inter text-center text-lg leading-7 font-normal text-white xl:text-start">
              Let’s work together to explore the best opportunities, tailor
              strategies to your needs, and map out a path to lasting financial
              success. With our expertise.
            </p>
          </div>
          <div className="mt-6 flex w-fit flex-row flex-wrap items-center justify-center gap-5 xl:mt-0 xl:flex-col xl:items-center">
            <button className="rounded-xl bg-white px-7 py-4 text-xl leading-8 font-semibold shadow-sm transition-all duration-500 hover:bg-gray-200">
              <span className="bg-gradient-to-b from-indigo-600 to-indigo-300 bg-clip-text text-transparent">
                Start Free Trial
              </span>
            </button>
            <button className="px-7 py-4 text-xl leading-8 font-medium text-white transition-all duration-500 hover:rounded-xl hover:bg-white hover:text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
