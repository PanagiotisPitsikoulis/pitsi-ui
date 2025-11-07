export default function CommunityCtaWithIllustration() {
  return (
    <section className="py-24 bg-gray-900 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="col-span-full lg:col-span-8 my-auto">
            <p className="px-2 border border-gray-400 rounded-full bg-gray-100 text-xs font-medium leading-6 text-gray-700 mb-2 w-fit">
              Take a Next Step
            </p>
            <h2 className="font-manrope text-4xl text-white font-bold mb-5">
              Join a community of like-minded individuals.
            </h2>
            <p className="text-sm font-normal leading-5 text-gray-300 font-inter">
              Connect with like-minded individuals and start making meaningful
              connections—join our community now!
            </p>
            <div className="mt-8">
              <button className="px-5 py-2.5 flex items-center gap-2 text-base font-semibold leading-7 text-white rounded-xl bg-purple-400 shadow-sm transition-all duration-500 hover:bg-purple-500">
                Get Started for Free {/* SVG removed */}
              </button>
            </div>
            <div className="border-t border-gray-700 pt-8 flex items-center gap-11 mt-8">
              <div className="flex flex-col gap-0.5">
                <a className="text-xl font-semibold leading-8 text-white flex items-center gap-2">
                  {/* SVG removed */} 500K+
                </a>
                <h3 className="text-lg font-normal leading-8 text-gray-300">
                  Downloaded
                </h3>
              </div>
              <div className="flex flex-col gap-0.5">
                <a className="text-xl font-semibold leading-8 text-white flex items-center gap-2">
                  <img
                    src="https://pagedone.io/asset/uploads/1759490793.png"
                    alt="img"
                  />
                  500K+
                </a>
                <h3 className="text-lg font-normal leading-8 text-gray-300">
                  Happy Customer
                </h3>
              </div>
            </div>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1759490844.png"
            alt="img"
            className="hidden lg:block lg:col-span-4 h-full"
          />
        </div>
      </div>
    </section>
  );
}
