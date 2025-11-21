export default function FaqListWithCreativeImage() {
  return (
    <section className="py-24">
      <div className="px-3 sm:px-6 lg:px-0 lg:pl-10 xl:pl-28">
        <div className="grid w-full grid-cols-1 items-center justify-center gap-y-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0 xl:gap-x-20">
          <div className="col-span-12 inline-flex w-full flex-col items-center justify-start gap-10 lg:col-span-5 lg:items-start xl:col-span-6 xl:gap-20 2xl:col-span-7">
            <div className="flex w-full flex-col items-start justify-start gap-10 xl:gap-16">
              <div className="flex w-full flex-col items-center justify-center gap-2 lg:items-start">
                <h4 className="text-center text-lg leading-relaxed font-medium text-gray-500 lg:text-start">
                  FAQs
                </h4>
                <h2 className="font-manrope w-full text-center text-4xl leading-tight font-bold text-gray-900 sm:text-5xl sm:leading-tight lg:max-w-2xl lg:text-start">
                  Innovating Business Solutions
                </h2>
              </div>
              <div
                className="accordion-group flex h-full flex-col gap-5"
                data-accordion="default-accordion"
              >
                <div
                  className="accordion hover:bg-gardient-to-tr accordion-active:bg-gardient-to-tr active rounded-xl border border-gray-200 bg-white p-4"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-white accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 always-open inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How do I update my billing information?{" "}
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content active w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="pt-4 text-sm font-normal text-gray-400">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion hover:bg-gardient-to-tr accordion-active:bg-gardient-to-tr rounded-xl border border-gray-200 bg-white p-4"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-white accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5 className="text-start">How do I delete my account?</h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="pt-4 text-sm font-normal text-gray-400">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion hover:bg-gardient-to-tr accordion-active:bg-gardient-to-tr rounded-xl border border-gray-200 bg-white p-4"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-white accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How do I join a group or community?
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="pt-4 text-sm font-normal text-gray-400">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion hover:bg-gardient-to-tr accordion-active:bg-gardient-to-tr rounded-xl border border-gray-200 bg-white p-4"
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-white accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How can I contact customer support?
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="pt-4 text-sm font-normal text-gray-400">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion hover:bg-gardient-to-tr accordion-active:bg-gardient-to-tr rounded-xl border border-gray-200 bg-white p-4"
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-white accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      Which is better short term or long term?
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="pt-4 text-sm font-normal text-gray-400">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex w-full items-center justify-center rounded-xl bg-gradient-to-tr from-gray-800 to-gray-600 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:from-gray-900 hover:to-gray-700 sm:w-fit">
              <span className="px-2 text-lg leading-8 font-semibold text-white">
                View All FAQs
              </span>
            </button>
          </div>
          <div className="col-span-12 w-full lg:col-span-7 xl:col-span-6 2xl:col-span-5">
            <img
              src="https://pagedone.io/asset/uploads/1723109127.png"
              alt="faq image"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
