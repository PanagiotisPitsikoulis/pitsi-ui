export default function GradientCtaWithRatingStars() {
  return (
    <section className="py-24 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover py-10 rounded-3xl">
        <h3 className="text-sm font-normal text-gray-400 leading-5 text-center">
          Dive In Now
        </h3>
        <h2 className="text-4xl font-bold sm:leading-[52px] text-white font-manrope text-center pt-1.5">
          Unlock Exclusive Opportunities and Benefits.
        </h2>
        <p className="max-w-4xl w-full mx-auto text-gray-400 text-base font-normal leading-6 text-center pt-4">
          Unlock exclusive opportunities and benefits by joining us today. Gain
          access to unique resources and start achieving your goals with our
          support.
        </p>
        <div className="flex flex-col gap-8 pt-8">
          <div className="flex items-center justify-center gap-3.5">
            <div className="flex items-center gap-1 text-amber-500 transition-all duration-500 ">
              {/* SVG removed */}
              {/* SVG removed */}
              {/* SVG removed */}
              {/* SVG removed */}
              {/* SVG removed */}
            </div>
            <span className="text-lg font-normal leading-8 text-gray-400 mr-1 pr-1">
              4.9 Rating
            </span>
          </div>
          <button className="mx-auto  bg-indigo-600 shadow-sm w sm:w-fit px-7 py-2.5 text-white leading-7 text-base font-semibold rounded-full transition-all duration-500 hover:bg-indigo-700">
            Request Free Demo
          </button>
        </div>
      </div>
    </section>
  );
}
