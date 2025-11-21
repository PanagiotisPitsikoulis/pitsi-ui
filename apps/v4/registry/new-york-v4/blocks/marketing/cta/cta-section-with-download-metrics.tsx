export default function CtaSectionWithDownloadMetrics() {
  return (
    <section className="font-inter py-16">
      <div className="mx-auto w-full max-w-7xl rounded-3xl bg-gradient-to-l from-violet-500 to-violet-400 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 p-10 lg:flex-row lg:gap-0 lg:px-10 lg:py-20">
          <div>
            <h2 className="font-manrope text-center text-4xl font-semibold text-white lg:text-left">
              Download Pagedone for <br /> Efficient Project Management!
            </h2>
            <p className="font-inter pt-3.5 text-center text-sm leading-5 font-normal text-gray-100 lg:text-left">
              Ready to boost your productivity? Download Pagedone and streamline
              your <br />
              project management process. From task organization to team
              communication,
            </p>
          </div>
          <div>
            <div className="mb-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row md:justify-between">
              <img
                src="https://pagedone.io/asset/uploads/1759488755.png"
                alt="img"
                className="mx-auto"
              />
              <div>
                <h5 className="font-manrope text-center text-2xl leading-9 font-bold text-white sm:text-left">
                  500K+
                </h5>
                <span className="font-inter pt-1 text-center text-lg leading-8 font-normal text-gray-200 sm:text-left">
                  Downloaded
                </span>
              </div>
              <div className="sm:border-l sm:border-gray-300 sm:pl-4">
                <h5 className="font-manrope text-center text-2xl leading-9 font-bold text-white sm:text-left">
                  200K+
                </h5>
                <span className="font-inter pt-1 text-center text-lg leading-8 font-normal text-gray-200 sm:text-left">
                  Active users
                </span>
              </div>
            </div>
            <button className="font-inter flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-base leading-7 font-semibold">
              <span className="bg-gradient-to-l from-violet-500 to-violet-400 bg-clip-text text-transparent">
                Download App
              </span>
              {/* SVG removed */}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
