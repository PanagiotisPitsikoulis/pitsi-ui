export default function RefundStatusWithProgressSteps() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <h2 className="w-full text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
            Refund Request Status
          </h2>
          <div className="w-full flex-col justify-start items-start gap-9 flex">
            <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 flex">
              <div className="w-full flex-col justify-center items-center gap-8 flex">
                <ol className="flex items-start w-full gap-2">
                  <li className="flex-1 flex w-full relative justify-start after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5 after:top-3.5 after:left-8">
                    <a
                      href="https://pagedone.io/"
                      className="w-full flex flex-col gap-2.5"
                    >
                      <div className="lg:w-10 w-8 lg:h-10 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                        <span className="text-sm lg:text-base font-bold leading-normal text-white">
                          1
                        </span>
                      </div>
                      <h5 className="text-base lg:text-lg font-semibold leading-relaxed text-gray-900">
                        Send Refund Request
                      </h5>
                    </a>
                  </li>
                  <li className="flex-1 flex w-full relative justify-start after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5 after:top-3.5 after:left-8">
                    <a
                      href="https://pagedone.io/"
                      className="w-full flex flex-col gap-2.5"
                    >
                      <div className="lg:w-10 w-8 lg:h-10 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                        <span className="text-sm lg:text-base font-bold leading-normal text-white">
                          2
                        </span>
                      </div>
                      <h5 className="text-base lg:text-lg font-semibold leading-relaxed text-gray-900">
                        Request Accepted
                      </h5>
                    </a>
                  </li>
                  <li className="flex-1 flex w-full relative justify-start after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5 after:top-3.5 after:left-8">
                    <a
                      href="https://pagedone.io/"
                      className="w-full flex flex-col gap-2.5"
                    >
                      <div className="lg:w-10 w-8 lg:h-10 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                        <span className="text-sm lg:text-base font-bold leading-normal text-white">
                          3
                        </span>
                      </div>
                      <h5 className="text-base lg:text-lg font-semibold leading-relaxed text-gray-900">
                        Pickup Product
                      </h5>
                    </a>
                  </li>
                  <li className="flex-1 flex w-full relative justify-start after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5 after:top-3.5 after:left-8">
                    <a
                      href="https://pagedone.io/"
                      className="w-full flex flex-col gap-2.5"
                    >
                      <div className="lg:w-10 w-8 lg:h-10 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                        <span className="text-sm lg:text-base font-bold leading-normal text-white">
                          4
                        </span>
                      </div>
                      <h5 className="text-base lg:text-lg font-semibold leading-relaxed text-gray-900">
                        Product Check
                      </h5>
                    </a>
                  </li>
                  <li className="flex w-fit relative">
                    <a
                      href="https://pagedone.io/"
                      className="w-full flex flex-col gap-2.5"
                    >
                      <div className="lg:w-10 w-8 lg:h-10 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                        <span className="text-sm lg:text-base font-bold leading-normal text-white">
                          5
                        </span>
                      </div>
                      <h5 className="text-base lg:text-lg font-semibold leading-relaxed text-gray-900">
                        Refund Amount
                      </h5>
                    </a>
                  </li>
                </ol>
              </div>
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 flex">
                  <h4 className="text-gray-900 text-xl font-bold leading-8">
                    Details Of Refunds:
                  </h4>
                  <div className="w-full flex-col justify-start items-start gap-4 flex">
                    <div className="w-full pb-4 border-b border-gray-200 flex-col justify-start items-start gap-0.5 flex">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Refund Reason:
                      </h6>
                      <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                        Ordered item not matching description &amp; Received
                        wrong size.
                      </h5>
                    </div>
                    <div className="w-full pb-4 border-b border-gray-200 flex-col justify-start items-start gap-0.5 flex">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Refund Date:
                      </h6>
                      <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                        Estimate Time: June 16, 2024 to June 20, 2024
                      </h5>
                    </div>
                    <div className="w-full pb-4 border-b border-gray-200 flex-col justify-start items-start gap-0.5 flex">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Package Condition:
                      </h6>
                      <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                        Package already opened.
                      </h5>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-0.5 flex">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Refund Amount:
                      </h6>
                      <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                        $1400.00
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 flex">
                  <h4 className="text-gray-900 text-xl font-bold leading-8">
                    Chosen Refund Methods:
                  </h4>
                  <div className="w-full flex-col justify-start items-start gap-0.5 flex">
                    <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                      Bank Transfer
                    </h6>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">
                      Refunds are done via direct bank transfers, making sure
                      you get your money back quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full justify-between items-center flex sm:flex-row flex-col gap-4">
            <button className="md:w-fit w-full group px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-indigo-300 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-2 text-indigo-600 text-base font-semibold leading-relaxed group-hover:translate-x-0.5 transition-all duration-700 ease-in-out">
                Back to Shopping
              </span>
            </button>
            <button className="md:w-fit w-full group px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-rose-300 hover:border-rose-600 transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-2 text-red-500 text-base font-semibold leading-relaxed group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Cancel Refund
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
