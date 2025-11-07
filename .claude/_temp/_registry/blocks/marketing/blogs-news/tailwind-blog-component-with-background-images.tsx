export default function TailwindBlogComponentWithBackgroundImages() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full justify-between items-center lg:gap-3 gap-1 flex lg:flex-row flex-col">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Today's Latest Updates
            </h2>
            <div className="justify-start items-start flex">
              <button className="group py-3 rounded-full justify-center items-center flex">
                <span className="pr-2 py-px text-indigo-600 text-lg font-semibold leading-relaxed">
                  See All
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="w-full h-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full h-full flex-col justify-start items-start inline-flex relative">
              <img
                className="rounded-2xl w-full lg:h-auto md:h-full h-[450px] relative object-cover"
                src="https://pagedone.io/asset/uploads/1722244147.png"
              />
              <div className="w-full p-5 bg-slate-100 rounded-2xl flex-col justify-start items-start gap-8 flex absolute lg:bottom-px -bottom-1">
                <div className="flex-col justify-start items-start gap-3.5 flex">
                  <h3 className="text-gray-800 text-2xl font-bold font-manrope leading-9">
                    The Importance of Data Privacy in the Digital Age
                  </h3>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    Data privacy is crucial in the digital age, protecting
                    personal information from unauthorized access and misuse.
                    Safeguarding your data ensures your privacy and maintains
                    trust in digital interactions.
                  </p>
                </div>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-white hover:bg-gray-50 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
                  <span className="px-1.5 py-px text-gray-800 text-sm font-medium leading-snug">
                    Read More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="w-full h-full flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-full justify-start items-start gap-6 grid md:grid-cols-2 grid-cols-1">
                <div className="group w-full h-full bg-gradient-to-b from-black to-black rounded-xl justify-start items-end gap-5 flex relative">
                  <img
                    src="https://pagedone.io/asset/uploads/1722244158.png"
                    alt="Blog and News Image"
                    className="rounded-xl w-full h-auto object-cover"
                  />
                  <div className="w-full px-5 pb-5 justify-between items-center gap-5 flex absolute">
                    <h4 className="text-white text-xl font-semibold leading-8">
                      The Evolution of the Music Industry
                    </h4>
                    <button className="w-[34px] h-[34px] p-[9px] justify-center items-center flex bg-white group-hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-full">
                      {/* SVG removed */}
                    </button>
                  </div>
                </div>
                <div className="group w-full h-full bg-gradient-to-b from-black to-black rounded-xl justify-start items-end gap-5 flex relative">
                  <img
                    src="https://pagedone.io/asset/uploads/1722244168.png"
                    alt="Blog and News Image"
                    className="rounded-xl w-full h-auto object-cover"
                  />
                  <div className="w-full px-5 pb-5 justify-between items-center gap-5 flex absolute">
                    <h4 className="text-white text-xl font-semibold leading-8">
                      The Impact of Globalism on Local
                    </h4>
                    <button className="w-[34px] h-[34px] p-[9px] justify-center items-center flex bg-white group-hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-full">
                      {/* SVG removed */}
                    </button>
                  </div>
                </div>
              </div>
              <div className="group w-full bg-gradient-to-b from-black to-black rounded-xl justify-start items-end gap-5 inline-flex relative">
                <img
                  src="https://pagedone.io/asset/uploads/1722244177.png"
                  alt="Blog and News Image"
                  className="rounded-xl w-full h-auto object-cover"
                />
                <div className="w-full px-5 pb-5 justify-between items-center xl:gap-5 gap-4 flex absolute">
                  <h4 className="text-white text-xl font-semibold leading-8">
                    The Future of Space Exploration: Opportunities and
                    Challenges
                  </h4>
                  <button className="w-[34px] h-[34px] p-[9px] justify-center items-center flex bg-white group-hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-full">
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
