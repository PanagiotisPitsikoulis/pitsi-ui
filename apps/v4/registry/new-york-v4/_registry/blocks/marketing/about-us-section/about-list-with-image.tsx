export default function AboutListWithImage() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
          <div className="inline-flex h-full w-full flex-col items-start justify-start rounded-xl bg-white p-6">
            <div className="flex flex-col items-center justify-start gap-5 sm:items-start lg:gap-7">
              <div className="flex flex-col items-center justify-start gap-2.5 sm:items-start">
                <span className="text-center text-base leading-relaxed font-medium text-gray-400 sm:text-start">
                  A little about us
                </span>
                <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 sm:text-start">
                  Simple Yet Effective Strategies for Financial Success.
                </h2>
              </div>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 sm:text-start">
                the creation of environments where everyone has the opportunity
                to thrive. This approach not only promotes individual success
                but also contributes to the overall resilience and cohesion of
                society.
              </p>
              <ul className="flex flex-col items-start justify-start gap-3">
                <li className="inline-flex items-center justify-start gap-2.5">
                  {/* SVG removed */}
                  <p className="text-sm leading-normal font-normal text-gray-900">
                    More than 10 years of experience.
                  </p>
                </li>
                <li className="inline-flex items-center justify-start gap-2.5">
                  {/* SVG removed */}
                  <p className="text-sm leading-normal font-normal text-gray-900">
                    Over 100k happy customers and finished projects.
                  </p>
                </li>
                <li className="inline-flex items-center justify-start gap-2.5">
                  {/* SVG removed */}
                  <p className="text-sm leading-normal font-normal text-gray-900">
                    It has 20 branches around the world.
                  </p>
                </li>
                <li className="inline-flex items-center justify-start gap-2.5">
                  {/* SVG removed */}
                  <p className="text-sm leading-normal font-normal text-gray-900">
                    60 Team members are individuals
                  </p>
                </li>
              </ul>
              <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                <span className="px-1.5 text-sm leading-6 font-medium text-white">
                  Get Started
                </span>
              </button>
            </div>
          </div>
          <div className="bg-norepeat inline-flex h-full w-full flex-col items-start justify-start rounded-xl bg-[url('https://pagedone.io/asset/uploads/1724412669.png')] bg-cover p-4 sm:p-6">
            <div className="flex w-full flex-col items-start justify-start gap-20 sm:gap-[264px]">
              <div className="flex w-full flex-col items-start justify-start gap-2.5">
                <h6 className="w-full text-base leading-relaxed font-medium text-white">
                  About us
                </h6>
                <h2 className="font-manrope w-full text-4xl leading-normal font-bold text-white">
                  Achieve Financial Success with These Simple Effective
                </h2>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                <div className="inline-flex w-full flex-col items-start justify-start gap-1 border-gray-200 sm:gap-2 sm:border-r">
                  <h4 className="text-xl leading-8 font-bold text-white">
                    5.6M+
                  </h4>
                  <h5 className="text-lg leading-relaxed font-normal text-gray-300">
                    Downloads
                  </h5>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-1 border-gray-200 sm:gap-2 sm:border-r">
                  <h4 className="text-xl leading-8 font-bold text-white">
                    3.2+
                  </h4>
                  <h5 className="text-lg leading-relaxed font-normal text-gray-300">
                    Active Users
                  </h5>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-1 sm:gap-2">
                  <h4 className="text-xl leading-8 font-bold text-white">
                    4.9
                  </h4>
                  <h5 className="text-lg leading-relaxed font-normal text-gray-300">
                    Ratings
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
