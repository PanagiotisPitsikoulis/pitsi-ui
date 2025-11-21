export default function RefundStatusWithProgressSteps() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <h2 className="font-manrope w-full text-center text-3xl leading-normal font-bold text-gray-900">
            Refund Request Status
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-9">
            <div className="flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
              <div className="flex w-full flex-col items-center justify-center gap-8">
                <ol className="flex w-full items-start gap-2">
                  <li className="relative flex w-full flex-1 justify-start after:absolute after:top-3.5 after:left-8 after:inline-block after:h-0.5 after:w-full after:bg-indigo-600 after:content-[''] lg:after:top-5">
                    <a
                      href="https://pagedone.io/"
                      className="flex w-full flex-col gap-2.5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 lg:h-10 lg:w-10">
                        <span className="text-sm leading-normal font-bold text-white lg:text-base">
                          1
                        </span>
                      </div>
                      <h5 className="text-base leading-relaxed font-semibold text-gray-900 lg:text-lg">
                        Send Refund Request
                      </h5>
                    </a>
                  </li>
                  <li className="relative flex w-full flex-1 justify-start after:absolute after:top-3.5 after:left-8 after:inline-block after:h-0.5 after:w-full after:bg-indigo-600 after:content-[''] lg:after:top-5">
                    <a
                      href="https://pagedone.io/"
                      className="flex w-full flex-col gap-2.5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 lg:h-10 lg:w-10">
                        <span className="text-sm leading-normal font-bold text-white lg:text-base">
                          2
                        </span>
                      </div>
                      <h5 className="text-base leading-relaxed font-semibold text-gray-900 lg:text-lg">
                        Request Accepted
                      </h5>
                    </a>
                  </li>
                  <li className="relative flex w-full flex-1 justify-start after:absolute after:top-3.5 after:left-8 after:inline-block after:h-0.5 after:w-full after:bg-indigo-600 after:content-[''] lg:after:top-5">
                    <a
                      href="https://pagedone.io/"
                      className="flex w-full flex-col gap-2.5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 lg:h-10 lg:w-10">
                        <span className="text-sm leading-normal font-bold text-white lg:text-base">
                          3
                        </span>
                      </div>
                      <h5 className="text-base leading-relaxed font-semibold text-gray-900 lg:text-lg">
                        Pickup Product
                      </h5>
                    </a>
                  </li>
                  <li className="relative flex w-full flex-1 justify-start after:absolute after:top-3.5 after:left-8 after:inline-block after:h-0.5 after:w-full after:bg-indigo-600 after:content-[''] lg:after:top-5">
                    <a
                      href="https://pagedone.io/"
                      className="flex w-full flex-col gap-2.5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 lg:h-10 lg:w-10">
                        <span className="text-sm leading-normal font-bold text-white lg:text-base">
                          4
                        </span>
                      </div>
                      <h5 className="text-base leading-relaxed font-semibold text-gray-900 lg:text-lg">
                        Product Check
                      </h5>
                    </a>
                  </li>
                  <li className="relative flex w-fit">
                    <a
                      href="https://pagedone.io/"
                      className="flex w-full flex-col gap-2.5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 lg:h-10 lg:w-10">
                        <span className="text-sm leading-normal font-bold text-white lg:text-base">
                          5
                        </span>
                      </div>
                      <h5 className="text-base leading-relaxed font-semibold text-gray-900 lg:text-lg">
                        Refund Amount
                      </h5>
                    </a>
                  </li>
                </ol>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5">
                  <h4 className="text-xl leading-8 font-bold text-gray-900">
                    Details Of Refunds:
                  </h4>
                  <div className="flex w-full flex-col items-start justify-start gap-4">
                    <div className="flex w-full flex-col items-start justify-start gap-0.5 border-b border-gray-200 pb-4">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Refund Reason:
                      </h6>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-500">
                        Ordered item not matching description &amp; Received
                        wrong size.
                      </h5>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-0.5 border-b border-gray-200 pb-4">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Refund Date:
                      </h6>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-500">
                        Estimate Time: June 16, 2024 to June 20, 2024
                      </h5>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-0.5 border-b border-gray-200 pb-4">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Package Condition:
                      </h6>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-500">
                        Package already opened.
                      </h5>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-0.5">
                      <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                        Refund Amount:
                      </h6>
                      <h5 className="text-lg leading-relaxed font-medium text-gray-500">
                        $1400.00
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5">
                  <h4 className="text-xl leading-8 font-bold text-gray-900">
                    Chosen Refund Methods:
                  </h4>
                  <div className="flex w-full flex-col items-start justify-start gap-0.5">
                    <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                      Bank Transfer
                    </h6>
                    <p className="text-lg leading-relaxed font-medium text-gray-500">
                      Refunds are done via direct bank transfers, making sure
                      you get your money back quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
            <button className="group flex w-full items-center justify-center rounded-xl border border-indigo-300 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-indigo-600 md:w-fit">
              <span className="px-2 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:translate-x-0.5">
                Back to Shopping
              </span>
            </button>
            <button className="group flex w-full items-center justify-center rounded-xl border border-rose-300 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-rose-600 md:w-fit">
              <span className="px-2 text-base leading-relaxed font-semibold text-red-500 transition-all duration-700 ease-in-out group-hover:-translate-x-0.5">
                Cancel Refund
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
