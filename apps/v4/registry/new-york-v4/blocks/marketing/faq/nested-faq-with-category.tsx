export default function NestedFaqWithCategory() {
  return (
    <section className="py-24">
      <div className="tabs mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex w-full flex-col items-center justify-start gap-3.5 lg:mb-16">
          <div className="flex items-center justify-center gap-1.5 rounded-full border border-teal-500 bg-teal-50 px-2.5 py-0.5">
            <span className="text-center text-xs leading-normal font-medium text-teal-600">
              FAQ
            </span>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-2.5">
            <h2 className="font-manrope text-center text-5xl leading-tight font-semibold text-gray-900">
              Top Questions and Answers
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500">
              Get answers quickly with our Top Questions and Answers.
            </p>
          </div>
        </div>
        <div className="accordion">
          <dl className="flex flex-col gap-8">
            <div className="rounded-2xl border border-gray-200 p-6">
              <dt className="flex flex-col">
                <h5 className="font-manrope flex items-center justify-between text-2xl leading-9 font-semibold text-gray-900">
                  General Questions
                  {/* SVG removed */}
                </h5>
                <p className="pt-1.5 text-base font-normal text-gray-500">
                  A general report provides a concise overview of key findings
                  and conclusions on a specific subject.
                </p>
              </dt>
              <dd className="active mt-8">
                <div className="accordion-nested">
                  <dl className="flex flex-col gap-5">
                    <div className="card accordion-active:border-teal-600 flex flex-col rounded-xl border border-gray-200 p-4">
                      <dt className="flex items-center justify-between text-xl leading-8 font-medium text-gray-900">
                        Where can I find my order history?
                        <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-teal-600">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="active pt-3 text-lg font-light text-gray-600">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="card flex flex-col rounded-xl border border-gray-200 p-4">
                      <dt className="flex items-center justify-between text-xl leading-8 font-medium text-gray-900">
                        Which is better short term or long term?
                        <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-teal-600">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="pt-3 text-lg font-light text-gray-600">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="card flex flex-col rounded-xl border border-gray-200 p-4">
                      <dt className="flex items-center justify-between text-xl leading-8 font-medium text-gray-900">
                        How do I delete my account?
                        <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-teal-600">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="pt-3 text-lg font-light text-gray-600">
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
            <div className="rounded-2xl border border-gray-200 p-6">
              <dt className="flex flex-col">
                <h5 className="font-manrope flex items-center justify-between text-2xl leading-9 font-semibold text-gray-900">
                  Our Service
                  {/* SVG removed */}
                </h5>
                <p className="pt-1.5 text-base font-normal text-gray-500">
                  Our service delivers tailored solutions to meet your unique
                  needs efficiently and effectively.
                </p>
              </dt>
              <dd className="mt-8">
                <div className="accordion-nested">
                  <dl className="flex flex-col gap-5">
                    <div className="flex flex-col rounded-xl border border-gray-200 p-4">
                      <dt className="flex items-center justify-between text-xl leading-8 font-medium text-gray-900">
                        Where can I find my order history?
                        <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-teal-600">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="active pt-3 text-lg font-light text-gray-600">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="flex flex-col rounded-xl border border-gray-200 p-4">
                      <dt className="flex items-center justify-between text-xl leading-8 font-medium text-gray-900">
                        Which is better short term or long term?
                        <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-teal-600">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="pt-3 text-lg font-light text-gray-600">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="flex flex-col rounded-xl border border-gray-200 p-4">
                      <dt className="flex items-center justify-between text-xl leading-8 font-medium text-gray-900">
                        How do I delete my account?
                        <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-teal-600">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="pt-3 text-lg font-light text-gray-600">
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
            <div className="rounded-2xl border border-gray-200 p-6">
              <dt className="flex flex-col">
                <h5 className="font-manrope flex items-center justify-between text-2xl leading-9 font-semibold text-gray-900">
                  Support Team
                  {/* SVG removed */}
                </h5>
                <p className="pt-1.5 text-base font-normal text-gray-500">
                  Our support team is here to assist you with any questions or
                  issues you may have.
                </p>
              </dt>
              <dd className="mt-8">
                <div className="accordion-nested">
                  <dl className="flex flex-col gap-5">
                    <div className="flex flex-col rounded-xl border border-gray-200 p-4">
                      <dt className="flex items-center justify-between text-xl leading-8 font-medium text-gray-900">
                        Where can I find my order history?
                        <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-teal-600">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="active pt-3 text-lg font-light text-gray-600">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="flex flex-col rounded-xl border border-gray-200 p-4">
                      <dt className="flex items-center justify-between text-xl leading-8 font-medium text-gray-900">
                        Which is better short term or long term?
                        <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-teal-600">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="pt-3 text-lg font-light text-gray-600">
                        You can find your order history by logging into your
                        account and navigating to the "Order History" or "My
                        Orders" section. All your past orders will be listed
                        there for easy access.
                      </dd>
                    </div>
                    <div className="flex flex-col rounded-xl border border-gray-200 p-4">
                      <dt className="flex items-center justify-between text-xl leading-8 font-medium text-gray-900">
                        How do I delete my account?
                        <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-teal-600">
                          {/* SVG removed */}
                        </a>
                      </dt>
                      <dd className="pt-3 text-lg font-light text-gray-600">
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
  )
}
