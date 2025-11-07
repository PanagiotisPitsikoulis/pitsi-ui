export default function TailwindFaqComponentWithBannerImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-16">
          <div className="flex w-full flex-col items-center justify-start gap-2">
            <span className="text-center text-lg leading-relaxed font-medium text-indigo-600">
              FAQs
            </span>
            <h2 className="font-manrope text-center text-5xl leading-tight font-bold text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8 lg:gap-10">
            <img
              className="h-auto w-full rounded-2xl object-cover"
              src="https://pagedone.io/asset/uploads/1722944010.png"
              alt="FAQ image"
            />
            <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">
              <h3 className="font-manrope col-span-12 h-full text-center text-3xl leading-normal font-bold text-gray-900 lg:col-span-5 lg:text-start">
                We Connect Our Customer with the best , and help them keep up
                and stay open
              </h3>
              <div
                className="accordion-group col-span-12 flex h-full flex-col gap-6 lg:col-span-7"
                data-accordion="default-accordion"
              >
                <div
                  className="accordion active rounded-xl border border-gray-200 p-5"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium accordion-active:text-xl accordion-active:leading-8 always-open inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5 className="text-left">
                      How do I update my billing information?
                    </h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content active w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="pt-4 text-sm font-normal text-gray-500">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl border border-gray-200 p-5"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium accordion-active:text-xl accordion-active:leading-8 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5 className="text-left">
                      How can I contact customer support?
                    </h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="pt-4 text-sm font-normal text-gray-500">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl border border-gray-200 p-5"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-left">
                      How do I join a group or community?
                    </h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="pt-4 text-sm font-normal text-gray-500">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl border border-gray-200 p-5"
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <h5 className="text-left">
                      How do I change my email address?
                    </h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="pt-4 text-sm font-normal text-gray-500">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
