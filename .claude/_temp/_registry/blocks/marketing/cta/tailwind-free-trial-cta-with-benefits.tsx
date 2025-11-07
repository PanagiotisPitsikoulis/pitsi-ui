export default function TailwindFreeTrialCtaWithBenefits() {
  return (
    <section className="py-20 bg-cover font-inter bg-gradient-to-b from-indigo-600 to-indigo-400 rounded-3xl">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="flex flex-col justify-center items-center xl:items-start xl:flex-row xl:justify-between">
          <div className="w-full max-w-3xl flex flex-col gap-6">
            <h2 className="font-manrope text-5xl text-white font-semibold text-center xl:text-start">
              Join Us Expand Your Business
            </h2>
            <p className="text-lg font-normal leading-7 text-white font-inter text-center xl:text-start">
              Let’s work together to explore the best opportunities, tailor
              strategies to your needs, and map out a path to lasting financial
              success. With our expertise.
            </p>
          </div>
          <div className="flex items-center justify-center  xl:flex-col flex-wrap flex-row gap-5 xl:items-center mt-6 xl:mt-0 w-fit">
            <button className="py-4 px-7 bg-white rounded-xl shadow-sm text-xl font-semibold leading-8 transition-all duration-500 hover:bg-gray-200">
              <span className="bg-gradient-to-b from-indigo-600 to-indigo-300 bg-clip-text text-transparent">
                Start Free Trial
              </span>
            </button>
            <button className="py-4 px-7 text-white text-xl font-medium leading-8 transition-all duration-500 hover:bg-white hover:text-black hover:rounded-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
