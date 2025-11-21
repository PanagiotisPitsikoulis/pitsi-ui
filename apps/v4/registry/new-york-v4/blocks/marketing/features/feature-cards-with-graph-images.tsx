export default function FeatureCardsWithGraphImages() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3 lg:gap-5">
            <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
              Tailored Tools for
              <span className="text-green-600">Your Success</span>
            </h2>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-5xl">
              Whether you're striving for professional growth, personal
              development, or simply seeking to streamline your daily routines,
              each tool within this collection is customized
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-3 lg:gap-8">
            <div className="group flex h-full w-full items-start justify-start rounded-2xl bg-white p-3.5 lg:p-5">
              <div className="inline-flex w-full flex-col items-center justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl bg-gray-50 px-4 py-3 lg:px-6 lg:py-4">
                  <img
                    className="h-auto w-full rounded-lg object-cover lg:h-full"
                    src="https://pagedone.io/asset/uploads/1720439665.png"
                    alt="Customizing Your Needs feature graph image"
                  />
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-6">
                  <div className="flex w-full flex-col items-start justify-start gap-4">
                    <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                      Customizing Your Needs
                    </h5>
                    <p className="text-sm leading-normal font-normal text-gray-400">
                      Our personalized approach ensures every solution is
                      tailored to fit your unique requirements, offering a
                      seamless experience that enhances efficiency and
                      effectiveness.
                    </p>
                  </div>
                  <button className="flex w-full items-center justify-center rounded-xl border-2 border-green-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-transparent group-hover:bg-green-600">
                    <span className="px-2 text-base leading-6 font-semibold text-green-600 transition-all duration-700 ease-in-out group-hover:text-white">
                      Get Started
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group flex h-full w-full items-start justify-start rounded-2xl bg-white p-3.5 lg:p-5">
              <div className="inline-flex w-full flex-col items-center justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl bg-gray-50 px-4 py-3 lg:px-6 lg:py-4">
                  <img
                    className="h-auto w-full rounded-lg object-cover lg:h-full"
                    src="https://pagedone.io/asset/uploads/1720439709.png"
                    alt="Tailoring Your Unique Needs graph image"
                  />
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-6">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                      Tailoring Your Unique Needs
                    </h5>
                    <p className="text-sm leading-normal font-normal text-gray-400">
                      Our dedicated team works closely with you to understand
                      your objectives and deliver customized solutions that
                      exceed expectations. Experience the difference of bespoke
                    </p>
                  </div>
                  <button className="flex w-full items-center justify-center rounded-xl border-2 border-green-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-transparent group-hover:bg-green-600">
                    <span className="px-2 text-base leading-6 font-semibold text-green-600 transition-all duration-700 ease-in-out group-hover:text-white">
                      Get Started
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group flex h-full w-full items-start justify-start rounded-2xl bg-white p-3.5 lg:p-5">
              <div className="inline-flex w-full flex-col items-center justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl bg-gray-50 px-4 py-3 lg:px-6 lg:py-4">
                  <img
                    className="h-auto w-full rounded-lg object-cover lg:h-full"
                    src="https://pagedone.io/asset/uploads/1720439746.png"
                    alt="Custom Solutions Exclusively graph image"
                  />
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-6">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                      Custom Solutions Exclusively
                    </h5>
                    <p className="text-sm leading-normal font-normal text-gray-400">
                      Whether you're looking for tailored business solutions,
                      specialized services, or individualized support, our
                      dedicated team is committed to delivering excellence.
                    </p>
                  </div>
                  <button className="flex w-full items-center justify-center rounded-xl border-2 border-green-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-transparent group-hover:bg-green-600">
                    <span className="px-2 text-base leading-6 font-semibold text-green-600 transition-all duration-700 ease-in-out group-hover:text-white">
                      Get Started
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
