export default function SideBySideHowItWorksBlocks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid w-full grid-cols-1 items-start justify-center gap-12 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-700 lg:text-start">
              Insurance Coverage for Your Jewelry Process
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
              simplifies the journey to protect your valuables. From estimating
              rates based on your jewelry's value to applying for coverage, this
              process ensures peace of mind. With comprehensive protection, you
              can confidently wear your jewelry and swiftly file claims if
              needed.
            </p>
          </div>
          <div
            className="accordion-group inline-flex flex-col items-center justify-start gap-8"
            data-accordion="default-accordion"
          >
            <div
              className="accordion active flex flex-col items-start justify-center rounded-xl bg-slate-50 p-5"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group always-open inline-flex items-center justify-start gap-3"
                aria-controls="basic-collapse-one-with-arrow-always-open"
              >
                <div className="inline-flex h-10 w-10 flex-col items-center justify-center gap-2.5 rounded-lg border border-gray-200">
                  <span className="text-xl leading-8 font-semibold text-black">
                    1
                  </span>
                </div>
                <h5 className="text-left text-xl leading-8 font-semibold text-black">
                  Rate Assessment
                </h5>
              </button>
              <div
                id="basic-collapse-one-with-arrow-always-open"
                className="accordion-content active w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="pt-2.5 text-base leading-relaxed font-normal text-gray-500">
                  Share what's dear to you, its value, and your location with
                  us. From there, we'll swiftly tailor an insurance plan suited
                  just for you, ensuring your peace of mind without delay.{" "}
                </p>
              </div>
            </div>
            <div
              className="accordion flex flex-col items-start justify-center rounded-xl bg-slate-50 p-5"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-start gap-3"
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <div className="inline-flex h-10 w-10 flex-col items-center justify-center gap-2.5 rounded-lg border border-gray-200">
                  <span className="text-xl leading-8 font-semibold text-black">
                    2
                  </span>
                </div>
                <h5 className="text-left text-xl leading-8 font-semibold text-black">
                  Initiate Your Protection
                </h5>
              </button>
              <div
                id="basic-collapse-two-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="pt-2.5 text-base leading-relaxed font-normal text-gray-500">
                  Share what's dear to you, its value, and your location with
                  us. From there, we'll swiftly tailor an insurance plan suited
                  just for you, ensuring your peace of mind without delay.
                </p>
              </div>
            </div>
            <div
              className="accordion flex flex-col items-start justify-center rounded-xl bg-slate-50 p-5"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-start gap-3"
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <div className="inline-flex h-10 w-10 flex-col items-center justify-center gap-2.5 rounded-lg border border-gray-200">
                  <span className="text-xl leading-8 font-semibold text-black">
                    3
                  </span>
                </div>
                <h5 className="text-left text-xl leading-8 font-semibold text-black">
                  Embrace Your Jewelry with Peace of Mind
                </h5>
              </button>
              <div
                id="basic-collapse-three-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="pt-2.5 text-base leading-relaxed font-normal text-gray-500">
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
  )
}
