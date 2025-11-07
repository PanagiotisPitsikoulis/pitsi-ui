export default function DarkCtaWithSuccessDashboardPreview() {
  return (
    <section className="py-24 bg-gray-900 font-inter px-4">
      <div className="mx-auto w-full max-w-7xl pl-4 sm:pl-6 lg:pl-8 rounded-2xl border border-gray-700">
        <div className="pt-4 lg:pt-10 lg:pl-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="pb-4">
            <a href="#"> </a>
            <h3 className="text-sm font-normal leading-5 text-gray-400 mb-2 pt-1">
              Claim Your Spot
            </h3>
            <h2 className="text-4xl font-bold text-white font-manrope mb-4">
              Start Achieving Your Goals Today.
            </h2>
            <p className="text-gray-300 text-base font-normal leading-7">
              Ready to reach new heights? Start achieving your goals today—click
              below to get started!
            </p>
            <div className="flex items-center justify-start gap-5 mt-8">
              <img
                src="https://pagedone.io/asset/uploads/1759489946.png"
                alt="img"
              />
              <a className="text-base font-normal leading-6 text-gray-300">
                1K+ Reviews
              </a>
            </div>
            <button className="mt-8 px-5 py-2.5 flex items-center gap-2 transition-all duration-500 hover:bg-black text-base font-semibold leading-7 text-white border border-gray-300 rounded-xl shadow-sm">
              Contact Us {/* SVG removed */}
            </button>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1759490685.png"
            alt="img"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
