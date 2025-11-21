export default function CommunityCtaWithIllustration() {
  return (
    <section className="font-inter bg-gray-900 py-24">
      <div className="mx-auto w-full max-w-7xl rounded-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="col-span-full my-auto lg:col-span-8">
            <p className="mb-2 w-fit rounded-full border border-gray-400 bg-gray-100 px-2 text-xs leading-6 font-medium text-gray-700">
              Take a Next Step
            </p>
            <h2 className="font-manrope mb-5 text-4xl font-bold text-white">
              Join a community of like-minded individuals.
            </h2>
            <p className="font-inter text-sm leading-5 font-normal text-gray-300">
              Connect with like-minded individuals and start making meaningful
              connections—join our community now!
            </p>
            <div className="mt-8">
              <button className="flex items-center gap-2 rounded-xl bg-purple-400 px-5 py-2.5 text-base leading-7 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-purple-500">
                Get Started for Free {/* SVG removed */}
              </button>
            </div>
            <div className="mt-8 flex items-center gap-11 border-t border-gray-700 pt-8">
              <div className="flex flex-col gap-0.5">
                <a className="flex items-center gap-2 text-xl leading-8 font-semibold text-white">
                  {/* SVG removed */} 500K+
                </a>
                <h3 className="text-lg leading-8 font-normal text-gray-300">
                  Downloaded
                </h3>
              </div>
              <div className="flex flex-col gap-0.5">
                <a className="flex items-center gap-2 text-xl leading-8 font-semibold text-white">
                  <img
                    src="https://pagedone.io/asset/uploads/1759490793.png"
                    alt="img"
                  />
                  500K+
                </a>
                <h3 className="text-lg leading-8 font-normal text-gray-300">
                  Happy Customer
                </h3>
              </div>
            </div>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1759490844.png"
            alt="img"
            className="hidden h-full lg:col-span-4 lg:block"
          />
        </div>
      </div>
    </section>
  )
}
