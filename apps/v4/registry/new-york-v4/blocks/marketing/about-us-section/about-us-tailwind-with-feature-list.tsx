export default function AboutUsTailwindWithFeatureList() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid w-full grid-cols-1 items-start justify-center gap-8 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-center justify-start gap-7 lg:items-start">
            <div className="flex w-full flex-col items-center justify-start gap-2.5 lg:items-start">
              <span className="text-center text-base leading-relaxed font-medium text-gray-400 lg:text-start">
                A little about us
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Empowering Communities Together
              </h2>
            </div>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
              the creation of environments where everyone has the opportunity to
              thrive. This approach not only promotes individual success but
              also contributes to the overall resilience and cohesion of
              society.
            </p>
            <ul className="flex flex-col items-center justify-start gap-3 lg:items-start">
              <li className="inline-flex items-center justify-start gap-2.5">
                {/* SVG removed */}
                <h6 className="text-sm leading-snug font-normal text-gray-900">
                  More than 10 years of experience.
                </h6>
              </li>
              <li className="inline-flex items-center justify-start gap-2.5">
                {/* SVG removed */}
                <h6 className="text-sm leading-snug font-normal text-gray-900">
                  Over 100k happy customers and finished projects.
                </h6>
              </li>
              <li className="inline-flex items-center justify-start gap-2.5">
                {/* SVG removed */}
                <h6 className="text-sm leading-snug font-normal text-gray-900">
                  It has 20 branches around the world.
                </h6>
              </li>
            </ul>
            <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
              <span className="px-1.5 text-sm leading-6 font-medium text-white">
                Get Started
              </span>
            </button>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-4 lg:h-full">
            <div className="grid h-full w-full grid-cols-1 items-start justify-start gap-4 sm:grid-cols-2">
              <img
                className="h-auto w-full rounded-3xl object-cover sm:h-full"
                src="https://pagedone.io/asset/uploads/1717759413.png"
                alt="about Us image"
              />
              <img
                className="h-auto w-full rounded-3xl object-cover sm:h-full"
                src="https://pagedone.io/asset/uploads/1717759425.png"
                alt="about Us image"
              />
            </div>
            <img
              className="h-auto w-full rounded-3xl object-cover sm:h-full"
              src="https://pagedone.io/asset/uploads/1717759437.png"
              alt="about Us image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
