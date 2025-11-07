export default function CtaSectionWithDownloadMetrics() {
  return (
    <section className="py-16 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 bg-gradient-to-l from-violet-500 to-violet-400 rounded-3xl">
        <div className="lg:px-10 lg:py-20 p-10 flex items-center flex-col lg:flex-row justify-between gap-8 lg:gap-0">
          <div>
            <h2 className="text-4xl font-semibold font-manrope text-white text-center lg:text-left">
              Download Pagedone for <br /> Efficient Project Management!
            </h2>
            <p className="pt-3.5 text-sm font-normal leading-5 text-gray-100 text-center lg:text-left font-inter">
              Ready to boost your productivity? Download Pagedone and streamline
              your <br />
              project management process. From task organization to team
              communication,
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap justify-center md:justify-between mb-8">
              <img
                src="https://pagedone.io/asset/uploads/1759488755.png"
                alt="img"
                className="mx-auto"
              />
              <div>
                <h5 className="font-manrope text-2xl font-bold leading-9 text-white text-center sm:text-left">
                  500K+
                </h5>
                <span className="text-lg font-normal leading-8 text-gray-200 font-inter pt-1 text-center sm:text-left">
                  Downloaded
                </span>
              </div>
              <div className="sm:border-l sm:border-gray-300 sm:pl-4">
                <h5 className="font-manrope text-2xl font-bold leading-9 text-white text-center sm:text-left">
                  200K+
                </h5>
                <span className="text-lg font-normal leading-8 text-gray-200 font-inter pt-1 text-center sm:text-left">
                  Active users
                </span>
              </div>
            </div>
            <button className="w-full rounded-xl bg-white py-2.5 px-5 text-base font-semibold leading-7 font-inter flex items-center justify-center gap-2 ">
              <span className="bg-gradient-to-l from-violet-500 to-violet-400 bg-clip-text text-transparent">
                Download App
              </span>
              {/* SVG removed */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
