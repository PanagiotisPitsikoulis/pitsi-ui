export default function AboutUsWithStatCounts() {
  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full justify-start items-start xl:gap-12 gap-10 flex lg:flex-row flex-col">
            <img
              className="rounded-2xl lg:w-auto mx-auto h-auto object-cover"
              src="https://pagedone.io/asset/uploads/1723805128.png"
              alt="About Us image"
            />
            <div className="w-full py-2.5 flex-col justify-center items-start gap-10 inline-flex">
              <div className="w-full flex-col justify-start sm:items-start items-center gap-7 flex">
                <div className="w-full flex-col justify-center lg:items-start items-center gap-2 flex">
                  <span className="text-slate-500 text-lg font-normal leading-relaxed">
                    About Us
                  </span>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Original and forward-thinking designs for all digital
                      platforms.
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our approach delivers original and forward-thinking
                      designs for all digital platforms. We blend creativity
                      with the latest trends to ensure your digital presence is
                      both distinctive and impactful.
                    </p>
                  </div>
                </div>
                <div className="w-full xl:p-5 p-4 rounded-xl border border-gray-200 justify-start items-center gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-center gap-1 inline-flex sm:pr-5 sm:pb-0 pb-5 sm:border-r sm:border-b-0 border-b border-gray-200">
                    <h4 className="text-center text-blue-600 text-xl font-semibold leading-8">
                      6.2k+
                    </h4>
                    <p className="text-center text-blue-400 text-base font-normal leading-relaxed whitespace-nowrap">
                      Completed Project
                    </p>
                  </div>
                  <div className="w-full flex-col justify-start items-center gap-1 inline-flex sm:pr-5 sm:pb-0 pb-5 sm:border-r sm:border-b-0 border-b border-gray-200">
                    <h4 className="text-center text-blue-600 text-xl font-semibold leading-8">
                      350+
                    </h4>
                    <p className="text-center text-blue-400 text-base font-normal leading-relaxed whitespace-nowrap">
                      Satisfied Clients
                    </p>
                  </div>
                  <div className="w-full flex-col justify-start items-center gap-1 inline-flex">
                    <h4 className="text-center text-blue-600 text-xl font-semibold leading-8">
                      2.5k
                    </h4>
                    <p className="text-center text-blue-400 text-base font-normal leading-relaxed whitespace-nowrap">
                      Team Members
                    </p>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-blue-50 hover:bg-blue-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
                <span className="px-2 py-px text-blue-600 text-base font-semibold leading-relaxed">
                  Read More
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </section>
      `
    </div>
  );
}
