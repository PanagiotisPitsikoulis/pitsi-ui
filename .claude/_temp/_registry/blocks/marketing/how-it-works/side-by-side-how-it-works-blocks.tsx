export default function SideBySideHowItWorksBlocks() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-center items-start gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
            <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Insurance Coverage for Your Jewelry Process
            </h2>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              simplifies the journey to protect your valuables. From estimating
              rates based on your jewelry's value to applying for coverage, this
              process ensures peace of mind. With comprehensive protection, you
              can confidently wear your jewelry and swiftly file claims if
              needed.
            </p>
          </div>
          <div
            className="accordion-group flex-col justify-start items-center gap-8 inline-flex"
            data-accordion="default-accordion"
          >
            <div
              className="accordion bg-slate-50 p-5 rounded-xl flex-col justify-center items-start flex active"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-start gap-3 always-open"
                aria-controls="basic-collapse-one-with-arrow-always-open"
              >
                <div className="w-10 h-10 rounded-lg border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <span className="text-black text-xl font-semibold leading-8">
                    1
                  </span>
                </div>
                <h5 className="text-black text-xl font-semibold leading-8 text-left">
                  Rate Assessment
                </h5>
              </button>
              <div
                id="basic-collapse-one-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden active"
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="text-gray-500 text-base font-normal leading-relaxed pt-2.5">
                  Share what's dear to you, its value, and your location with
                  us. From there, we'll swiftly tailor an insurance plan suited
                  just for you, ensuring your peace of mind without delay.{" "}
                </p>
              </div>
            </div>
            <div
              className="accordion p-5 bg-slate-50 rounded-xl justify-center items-start flex flex-col"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-start gap-3"
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <div className="w-10 h-10 rounded-lg border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <span className="text-black text-xl font-semibold leading-8">
                    2
                  </span>
                </div>
                <h5 className="text-black text-xl font-semibold leading-8 text-left">
                  Initiate Your Protection
                </h5>
              </button>
              <div
                id="basic-collapse-two-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="text-gray-500 text-base font-normal leading-relaxed pt-2.5">
                  Share what's dear to you, its value, and your location with
                  us. From there, we'll swiftly tailor an insurance plan suited
                  just for you, ensuring your peace of mind without delay.
                </p>
              </div>
            </div>
            <div
              className="accordion p-5 bg-slate-50 rounded-xl justify-center items-start flex flex-col"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-start gap-3"
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <div className="w-10 h-10 rounded-lg border border-gray-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <span className="text-black text-xl font-semibold leading-8">
                    3
                  </span>
                </div>
                <h5 className="text-black text-xl font-semibold leading-8 text-left">
                  Embrace Your Jewelry with Peace of Mind
                </h5>
              </button>
              <div
                id="basic-collapse-three-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="text-gray-500 text-base font-normal leading-relaxed pt-2.5">
                  Share what's dear to you, its value, and your location with
                  us. From there, we'll swiftly tailor an insurance plan suited
                  just for you, ensuring your peace of mind without delay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
