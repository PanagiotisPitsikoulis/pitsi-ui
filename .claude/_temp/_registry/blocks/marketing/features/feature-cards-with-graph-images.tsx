export default function FeatureCardsWithGraphImages() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center lg:gap-5 gap-3 flex">
            <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Tailored Tools for
              <span className="text-green-600">Your Success</span>
            </h2>
            <p className="lg:max-w-5xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
              Whether you're striving for professional growth, personal
              development, or simply seeking to streamline your daily routines,
              each tool within this collection is customized
            </p>
          </div>
          <div className="w-full justify-start items-start lg:gap-8 gap-5 grid md:grid-cols-3 grid-cols-1">
            <div className="w-full h-full group lg:p-5 p-3.5 bg-white rounded-2xl justify-start items-start flex">
              <div className="w-full flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-full lg:px-6 px-4 lg:py-4 py-3 rounded-xl bg-gray-50 flex-col justify-start items-start gap-2.5 flex">
                  <img
                    className="w-full lg:h-full h-auto object-cover rounded-lg"
                    src="https://pagedone.io/asset/uploads/1720439665.png"
                    alt="Customizing Your Needs feature graph image"
                  />
                </div>
                <div className="w-full flex-col justify-start items-center gap-6 flex">
                  <div className="w-full flex-col justify-start items-start gap-4 flex">
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Customizing Your Needs
                    </h5>
                    <p className="text-gray-400 text-sm font-normal leading-normal">
                      Our personalized approach ensures every solution is
                      tailored to fit your unique requirements, offering a
                      seamless experience that enhances efficiency and
                      effectiveness.
                    </p>
                  </div>
                  <button className="w-full px-5 py-2.5 border-2 border-green-600 group-hover:border-transparent group-hover:bg-green-600 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-2 text-green-600 group-hover:text-white transition-all duration-700 ease-in-out text-base font-semibold leading-6">
                      Get Started
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-full group lg:p-5 p-3.5 bg-white rounded-2xl justify-start items-start flex">
              <div className="w-full flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-full lg:px-6 px-4 lg:py-4 py-3 rounded-xl bg-gray-50 flex-col justify-start items-start gap-2.5 flex">
                  <img
                    className="w-full lg:h-full h-auto object-cover rounded-lg"
                    src="https://pagedone.io/asset/uploads/1720439709.png"
                    alt="Tailoring Your Unique Needs graph image"
                  />
                </div>
                <div className="w-full flex-col justify-start items-center gap-6 flex">
                  <div className="flex-col justify-start items-start gap-4 flex">
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Tailoring Your Unique Needs
                    </h5>
                    <p className="text-gray-400 text-sm font-normal leading-normal">
                      Our dedicated team works closely with you to understand
                      your objectives and deliver customized solutions that
                      exceed expectations. Experience the difference of bespoke
                    </p>
                  </div>
                  <button className="w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-2 border-green-600 group-hover:border-transparent group-hover:bg-green-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                    <span className="px-2 text-green-600 group-hover:text-white transition-all duration-700 ease-in-out text-base font-semibold leading-6">
                      Get Started
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-full group lg:p-5 p-3.5 bg-white rounded-2xl justify-start items-start flex">
              <div className="w-full flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-full lg:px-6 px-4 lg:py-4 py-3 rounded-xl bg-gray-50 flex-col justify-start items-start gap-2.5 flex">
                  <img
                    className="w-full lg:h-full h-auto object-cover rounded-lg"
                    src="https://pagedone.io/asset/uploads/1720439746.png"
                    alt="Custom Solutions Exclusively graph image"
                  />
                </div>
                <div className="w-full flex-col justify-start items-center gap-6 flex">
                  <div className="flex-col justify-start items-start gap-4 flex">
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Custom Solutions Exclusively
                    </h5>
                    <p className="text-gray-400 text-sm font-normal leading-normal">
                      Whether you're looking for tailored business solutions,
                      specialized services, or individualized support, our
                      dedicated team is committed to delivering excellence.
                    </p>
                  </div>
                  <button className="w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-2 border-green-600 group-hover:border-transparent group-hover:bg-green-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                    <span className="px-2 text-green-600 group-hover:text-white transition-all duration-700 ease-in-out text-base font-semibold leading-6">
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
  );
}
