export default function GradientCtaWithRatingStars() {
  return (
    <section className="font-inter py-24">
      <div className="mx-auto w-full max-w-7xl rounded-3xl bg-cover bg-no-repeat px-4 py-10 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm leading-5 font-normal text-gray-400">
          Dive In Now
        </h3>
        <h2 className="font-manrope pt-1.5 text-center text-4xl font-bold text-white sm:leading-[52px]">
          Unlock Exclusive Opportunities and Benefits.
        </h2>
        <p className="mx-auto w-full max-w-4xl pt-4 text-center text-base leading-6 font-normal text-gray-400">
          Unlock exclusive opportunities and benefits by joining us today. Gain
          access to unique resources and start achieving your goals with our
          support.
        </p>
        <div className="flex flex-col gap-8 pt-8">
          <div className="flex items-center justify-center gap-3.5">
            <div className="flex items-center gap-1 text-amber-500 transition-all duration-500">
              {/* SVG removed */}
              {/* SVG removed */}
              {/* SVG removed */}
              {/* SVG removed */}
              {/* SVG removed */}
            </div>
            <span className="mr-1 pr-1 text-lg leading-8 font-normal text-gray-400">
              4.9 Rating
            </span>
          </div>
          <button className="w mx-auto rounded-full bg-indigo-600 px-7 py-2.5 text-base leading-7 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 sm:w-fit">
            Request Free Demo
          </button>
        </div>
      </div>
    </section>
  )
}
