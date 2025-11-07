export default function AboutUsTailwindWithFeatureList() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-center items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-7 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-2.5 flex">
              <span className="text-gray-400 text-base font-medium leading-relaxed lg:text-start text-center">
                A little about us
              </span>
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Empowering Communities Together
              </h2>
            </div>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              the creation of environments where everyone has the opportunity to
              thrive. This approach not only promotes individual success but
              also contributes to the overall resilience and cohesion of
              society.
            </p>
            <ul className="flex-col justify-start lg:items-start items-center gap-3 flex">
              <li className="justify-start items-center gap-2.5 inline-flex">
                {/* SVG removed */}
                <h6 className="text-gray-900 text-sm font-normal leading-snug">
                  More than 10 years of experience.
                </h6>
              </li>
              <li className="justify-start items-center gap-2.5 inline-flex">
                {/* SVG removed */}
                <h6 className="text-gray-900 text-sm font-normal leading-snug">
                  Over 100k happy customers and finished projects.
                </h6>
              </li>
              <li className="justify-start items-center gap-2.5 inline-flex">
                {/* SVG removed */}
                <h6 className="text-gray-900 text-sm font-normal leading-snug">
                  It has 20 branches around the world.
                </h6>
              </li>
            </ul>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Get Started
              </span>
            </button>
          </div>
          <div className="w-full lg:h-full flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-full h-full justify-start items-start gap-4 grid sm:grid-cols-2 grid-cols-1">
              <img
                className="w-full sm:h-full h-auto object-cover rounded-3xl"
                src="https://pagedone.io/asset/uploads/1717759413.png"
                alt="about Us image"
              />
              <img
                className="w-full sm:h-full h-auto object-cover rounded-3xl"
                src="https://pagedone.io/asset/uploads/1717759425.png"
                alt="about Us image"
              />
            </div>
            <img
              className="w-full sm:h-full h-auto object-cover rounded-3xl"
              src="https://pagedone.io/asset/uploads/1717759437.png"
              alt="about Us image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
