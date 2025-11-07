export default function NestedFaqWithCategory() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 tabs">
        <div className="w-full flex-col justify-start items-center gap-3.5 flex lg:mb-16 mb-10">
          <div className="px-2.5 py-0.5 bg-teal-50 rounded-full border border-teal-500 justify-center items-center gap-1.5 flex">
            <span className="text-center text-teal-600 text-xs font-medium leading-normal">
              FAQ
            </span>
          </div>
          <div className="w-full flex-col justify-start items-center gap-2.5 flex">
            <h2 className="text-center text-gray-900 text-5xl font-semibold font-manrope leading-tight">
              Top Questions and Answers
            </h2>
            <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
              Get answers quickly with our Top Questions and Answers.
            </p>
          </div>
        </div>
        <div className="accordion">
          <dl className="flex flex-col gap-8">
            <div className="p-6 rounded-2xl border border-gray-200">
              <dt className="flex flex-col">
                <h5 className="text-gray-900 text-2xl font-semibold leading-9 font-manrope flex items-center justify-between">
                  General Questions
                  {/* SVG removed */}
                </h5>
                <p className="text-gray-500 text-base font-normal pt-1.5">
                  A general report provides a concise overview of key findings
                  and conclusions on a specific subject.
                </p>
              </dt>
              <dd className="mt-8 active">
                <div className="accordion-nested">
                  <dl className="flex flex-col gap-5">
                    <div className="card flex flex-col p-4 rounded-xl border border-gray-200 accordion-active:border-teal-600">
                      <dt className="text-gray-900 text-xl font-medium leading-8 flex items-center justify-between">
                        Where can I find my order history?
                        <a className="pointer-events-none bg-teal-600 w-5 h-5 flex items-center justify-center rounded-full">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="text-gray-600 text-lg font-light pt-3 active">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="card flex flex-col p-4 rounded-xl border border-gray-200">
                      <dt className="text-gray-900 text-xl font-medium leading-8 flex items-center justify-between">
                        Which is better short term or long term?
                        <a className="pointer-events-none bg-teal-600 w-5 h-5 flex items-center justify-center rounded-full">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="text-gray-600 text-lg font-light pt-3">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="card flex flex-col p-4 rounded-xl border border-gray-200">
                      <dt className="text-gray-900 text-xl font-medium leading-8 flex items-center justify-between">
                        How do I delete my account?
                        <a className="pointer-events-none bg-teal-600 w-5 h-5 flex items-center justify-center rounded-full">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="text-gray-600 text-lg font-light pt-3">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                  </dl>
                </div>
              </dd>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200">
              <dt className="flex flex-col">
                <h5 className="text-gray-900 text-2xl font-semibold leading-9 font-manrope flex items-center justify-between">
                  Our Service
                  {/* SVG removed */}
                </h5>
                <p className="text-gray-500 text-base font-normal pt-1.5">
                  Our service delivers tailored solutions to meet your unique
                  needs efficiently and effectively.
                </p>
              </dt>
              <dd className="mt-8">
                <div className="accordion-nested">
                  <dl className="flex flex-col gap-5">
                    <div className="flex flex-col p-4 rounded-xl border border-gray-200">
                      <dt className="text-gray-900 text-xl font-medium leading-8 flex items-center justify-between">
                        Where can I find my order history?
                        <a className="pointer-events-none bg-teal-600 w-5 h-5 flex items-center justify-center rounded-full">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="text-gray-600 text-lg font-light pt-3 active">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="flex flex-col p-4 rounded-xl border border-gray-200">
                      <dt className="text-gray-900 text-xl font-medium leading-8 flex items-center justify-between">
                        Which is better short term or long term?
                        <a className="pointer-events-none bg-teal-600 w-5 h-5 flex items-center justify-center rounded-full">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="text-gray-600 text-lg font-light pt-3">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="flex flex-col p-4 rounded-xl border border-gray-200">
                      <dt className="text-gray-900 text-xl font-medium leading-8 flex items-center justify-between">
                        How do I delete my account?
                        <a className="pointer-events-none bg-teal-600 w-5 h-5 flex items-center justify-center rounded-full">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="text-gray-600 text-lg font-light pt-3">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                  </dl>
                </div>
              </dd>
            </div>
            <div className="p-6 rounded-2xl border border-gray-200">
              <dt className="flex flex-col">
                <h5 className="text-gray-900 text-2xl font-semibold leading-9 font-manrope flex items-center justify-between">
                  Support Team
                  {/* SVG removed */}
                </h5>
                <p className="text-gray-500 text-base font-normal pt-1.5">
                  Our support team is here to assist you with any questions or
                  issues you may have.
                </p>
              </dt>
              <dd className="mt-8">
                <div className="accordion-nested">
                  <dl className="flex flex-col gap-5">
                    <div className="flex flex-col p-4 rounded-xl border border-gray-200">
                      <dt className="text-gray-900 text-xl font-medium leading-8 flex items-center justify-between">
                        Where can I find my order history?
                        <a className="pointer-events-none bg-teal-600 w-5 h-5 flex items-center justify-center rounded-full">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="text-gray-600 text-lg font-light pt-3 active">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="flex flex-col p-4 rounded-xl border border-gray-200">
                      <dt className="text-gray-900 text-xl font-medium leading-8 flex items-center justify-between">
                        Which is better short term or long term?
                        <a className="pointer-events-none bg-teal-600 w-5 h-5 flex items-center justify-center rounded-full">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="text-gray-600 text-lg font-light pt-3">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="flex flex-col p-4 rounded-xl border border-gray-200">
                      <dt className="text-gray-900 text-xl font-medium leading-8 flex items-center justify-between">
                        How do I delete my account?
                        <a className="pointer-events-none bg-teal-600 w-5 h-5 flex items-center justify-center rounded-full">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="text-gray-600 text-lg font-light pt-3">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                  </dl>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
