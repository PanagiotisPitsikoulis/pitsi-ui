export default function DarkCtaWithSuccessDashboardPreview() {
  return (
    <section className="font-inter bg-gray-900 px-4 py-24">
      <div className="mx-auto w-full max-w-7xl rounded-2xl border border-gray-700 pl-4 sm:pl-6 lg:pl-8">
        <div className="grid grid-cols-1 gap-10 pt-4 lg:grid-cols-2 lg:pt-10 lg:pl-10">
          <div className="pb-4">
            <a href="#"> </a>
            <h3 className="mb-2 pt-1 text-sm leading-5 font-normal text-gray-400">
              Claim Your Spot
            </h3>
            <h2 className="font-manrope mb-4 text-4xl font-bold text-white">
              Start Achieving Your Goals Today.
            </h2>
            <p className="text-base leading-7 font-normal text-gray-300">
              Ready to reach new heights? Start achieving your goals today—click
              below to get started!
            </p>
            <div className="mt-8 flex items-center justify-start gap-5">
              <img
                src="https://pagedone.io/asset/uploads/1759489946.png"
                alt="img"
              />
              <a className="text-base leading-6 font-normal text-gray-300">
                1K+ Reviews
              </a>
            </div>
            <button className="mt-8 flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-2.5 text-base leading-7 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-black">
              Contact Us {/* SVG removed */}
            </button>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1759490685.png"
            alt="img"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}
