export default function AboutListWithImage() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full h-full p-6 bg-white rounded-xl flex-col justify-start items-start inline-flex">
            <div className="flex-col justify-start sm:items-start items-center lg:gap-7 gap-5 flex">
              <div className="flex-col justify-start sm:items-start items-center gap-2.5 flex">
                <span className="text-gray-400 text-base font-medium leading-relaxed sm:text-start text-center">
                  A little about us
                </span>
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal sm:text-start text-center">
                  Simple Yet Effective Strategies for Financial Success.
                </h2>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed sm:text-start text-center">
                the creation of environments where everyone has the opportunity
                to thrive. This approach not only promotes individual success
                but also contributes to the overall resilience and cohesion of
                society.
              </p>
              <ul className="flex-col justify-start items-start gap-3 flex">
                <li className="justify-start items-center gap-2.5 inline-flex">
                  {/* SVG removed */}
                  <p className="text-gray-900 text-sm font-normal leading-normal">
                    More than 10 years of experience.
                  </p>
                </li>
                <li className="justify-start items-center gap-2.5 inline-flex">
                  {/* SVG removed */}
                  <p className="text-gray-900 text-sm font-normal leading-normal">
                    Over 100k happy customers and finished projects.
                  </p>
                </li>
                <li className="justify-start items-center gap-2.5 inline-flex">
                  {/* SVG removed */}
                  <p className="text-gray-900 text-sm font-normal leading-normal">
                    It has 20 branches around the world.
                  </p>
                </li>
                <li className="justify-start items-center gap-2.5 inline-flex">
                  {/* SVG removed */}
                  <p className="text-gray-900 text-sm font-normal leading-normal">
                    60 Team members are individuals
                  </p>
                </li>
              </ul>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Get Started
                </span>
              </button>
            </div>
          </div>
          <div className="w-full h-full sm:p-6 p-4 bg-[url('https://pagedone.io/asset/uploads/1724412669.png')] bg-cover bg-norepeat rounded-xl flex-col justify-start items-start inline-flex">
            <div className="w-full flex-col justify-start items-start sm:gap-[264px] gap-20 flex">
              <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                <h6 className="w-full text-white text-base font-medium leading-relaxed">
                  About us
                </h6>
                <h2 className="w-full text-white text-4xl font-bold font-manrope leading-normal">
                  Achieve Financial Success with These Simple Effective
                </h2>
              </div>
              <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start sm:gap-2 gap-1 inline-flex sm:border-r border-gray-200">
                  <h4 className="text-white text-xl font-bold leading-8">
                    5.6M+
                  </h4>
                  <h5 className="text-gray-300 text-lg font-normal leading-relaxed">
                    Downloads
                  </h5>
                </div>
                <div className="w-full flex-col justify-start items-start sm:gap-2 gap-1 inline-flex sm:border-r border-gray-200">
                  <h4 className="text-white text-xl font-bold leading-8">
                    3.2+
                  </h4>
                  <h5 className="text-gray-300 text-lg font-normal leading-relaxed">
                    Active Users
                  </h5>
                </div>
                <div className="w-full flex-col justify-start items-start sm:gap-2 gap-1 inline-flex">
                  <h4 className="text-white text-xl font-bold leading-8">
                    4.9
                  </h4>
                  <h5 className="text-gray-300 text-lg font-normal leading-relaxed">
                    Ratings
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
