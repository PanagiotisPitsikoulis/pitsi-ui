export default function AboutUsTailwindWithMissionAndVision() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-5 lg:items-start lg:gap-9">
            <div className="grid w-full grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2 lg:items-end lg:gap-8">
              <div className="inline-flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                <span className="text-center text-lg leading-relaxed font-normal text-emerald-600 lg:text-start">
                  About Us
                </span>
                <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                  Empower Your Business's Financial Future Effortlessly
                </h2>
              </div>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                Take control of your business’s financial future with effortless
                strategies that ensure stability and growth. Empower your
                decisions with expert insights, streamlining your path to
                long-term success. Focus on what matters most—growing your
                business.
              </p>
            </div>
            <button className="flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-700 sm:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Get Started
              </span>
            </button>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
            <div className="relative col-span-12 inline-flex h-full w-full flex-col items-start justify-end rounded-3xl bg-gradient-to-b from-gray-900 to-gray-900 lg:col-span-7">
              <img
                src="https://pagedone.io/asset/uploads/1723803563.png"
                alt="About Us image"
                className="h-auto w-full rounded-3xl object-cover lg:h-full"
              />
              <div className="absolute flex flex-col gap-4 rounded-3xl p-4 sm:p-6 md:p-8">
                <h3 className="font-manrope text-2xl leading-9 font-bold text-white">
                  Our Story
                </h3>
                <p className="text-lg leading-relaxed font-normal text-gray-200 max-[350px]:hidden">
                  TechInnovate, a leading IT company, revolutionizes the
                  industry with cutting-edge AI solutions, driving innovation
                  and connectivity for businesses worldwide.
                </p>
              </div>
            </div>
            <div className="col-span-12 inline-flex h-full w-full flex-col items-start justify-start gap-6 lg:col-span-5 lg:gap-8">
              <div className="flex h-full w-full flex-col items-start justify-end gap-4 rounded-3xl bg-emerald-100 p-4 sm:p-6 md:p-8">
                <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                  Our Mission
                </h3>
                <p className="text-lg leading-relaxed font-normal text-gray-500">
                  To deliver innovative IT solutions that empower businesses.
                </p>
              </div>
              <div className="flex h-full w-full flex-col items-start justify-end gap-4 rounded-3xl bg-emerald-700 p-4 sm:p-6 md:p-8">
                <h3 className="font-manrope text-2xl leading-9 font-bold text-white">
                  Our Vision
                </h3>
                <p className="text-lg leading-relaxed font-normal text-gray-200">
                  To lead in technology and shape a smarter, more connected
                  future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
