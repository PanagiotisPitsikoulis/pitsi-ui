export default function TailwindFaqComponentWithBannerImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-16 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-2 flex">
            <span className="text-center text-indigo-600 text-lg font-medium leading-relaxed">
              FAQs
            </span>
            <h2 className="text-center text-gray-900 text-5xl font-bold font-manrope leading-tight">
              Frequently asked questions
            </h2>
          </div>
          <div className="w-full flex-col justify-start items-start lg:gap-10 gap-8 flex">
            <img
              className="rounded-2xl w-full h-auto object-cover"
              src="https://pagedone.io/asset/uploads/1722944010.png"
              alt="FAQ image"
            />
            <div className="w-full justify-start items-start xl:gap-x-12 lg:gap-x-10 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
              <h3 className="lg:col-span-5 col-span-12 h-full text-gray-900 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                We Connect Our Customer with the best , and help them keep up
                and stay open
              </h3>
              <div
                className="accordion-group flex flex-col gap-6 lg:col-span-7 col-span-12 h-full"
                data-accordion="default-accordion"
              >
                <div
                  className="accordion border border-gray-200 p-5 rounded-xl active"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium accordion-active:text-xl accordion-active:leading-8 always-open"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5 className="text-left">
                      How do I update my billing information?
                    </h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden active"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="text-sm font-normal text-gray-500 pt-4">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion border border-gray-200 p-5 rounded-xl "
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between font-normal text-lg leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium accordion-active:text-xl accordion-active:leading-8"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5 className="text-left">
                      How can I contact customer support?
                    </h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="text-sm text-gray-500 font-normal pt-4">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion border border-gray-200 p-5 rounded-xl"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-gray-900 accordion-active:font-medium accordion-active:text-gray-900"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-left">
                      How do I join a group or community?
                    </h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="text-sm text-gray-500 font-normal pt-4">
                      To update your billing information, log in and go to the
                      billing or payment page. Look for an option to "Update
                      payment method" or "Edit billing information" and follow
                      the prompts. Be sure to save your changes before exiting.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion border border-gray-200 p-5 rounded-xl"
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-gray-900 accordion-active:font-medium accordion-active:text-gray-900"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <h5 className="text-left">
                      How do I change my email address?
                    </h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="text-sm text-gray-500 font-normal pt-4">
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
  );
}
