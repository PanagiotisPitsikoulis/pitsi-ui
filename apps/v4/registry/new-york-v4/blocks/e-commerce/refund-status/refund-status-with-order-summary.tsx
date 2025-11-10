export default function RefundStatusWithOrderSummary() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-start justify-start gap-5 lg:flex-row">
            <h2 className="font-manrope w-full text-3xl leading-normal font-bold text-gray-900">
              Refund Request Tracking
            </h2>
            <div className="flex w-full flex-col items-center gap-5 sm:flex-row lg:justify-end">
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-indigo-100 lg:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-indigo-600">
                  Back to Shopping
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 lg:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                  Cancel Refund
                </span>
              </button>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <h4 className="text-xl leading-8 font-semibold text-black">
                  Return Items From The Order
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  <div className="inline-flex w-full items-center justify-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718778838.png"
                      alt="Sky School Bag image"
                    />
                    <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Sky School Bag
                      </h6>
                      <h6 className="text-xs leading-normal font-normal text-gray-500">
                        Size :<span className="text-black">30</span>
                      </h6>
                      <h6 className="text-xs leading-normal font-normal text-gray-500">
                        Color :<span className="text-black">Red</span>
                      </h6>
                      <div className="inline-flex items-center justify-start gap-2.5">
                        <a href="#"></a>
                        <input
                          type="text"
                          className="h-[22px] w-[22px] rounded-full border border-gray-200 bg-gray-100 px-1 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                        />
                        <a className="flex h-4 w-4 items-center justify-center"></a>
                      </div>
                    </div>
                    <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                      $60.00
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-4">
                <h4 className="text-xl leading-8 font-semibold text-black">
                  Order Summary
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="inline-flex w-full items-center justify-between gap-px border-b border-gray-200 pb-3.5">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                      Oder Date:
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      26 May 2024
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-px border-b border-gray-200 pb-3.5">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                      Request Date:
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      12 May 2024
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-px border-b border-gray-200 pb-3.5">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                      Refund Reason:
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      The product received is broken.
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-px border-b border-gray-200 pb-3.5">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                      Request Method:
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      Bank Transfer
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-px border-b border-gray-200 pb-3.5">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                      Package Condition:
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      New
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-px">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                      Refund Amount:
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      $1200
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-8">
              <h4 className="text-xl leading-8 font-semibold text-black">
                Order Tracking
              </h4>
              <div className="inline-flex w-full items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <ol className="flex w-full flex-col gap-1.5 overflow-hidden">
                  <li className="relative h-[118px] w-full after:absolute after:-bottom-0 after:left-5 after:mt-2 after:inline-block after:h-[68px] after:w-0.5 after:bg-gray-200 after:content-['']">
                    <a
                      href="https://pagedone.io/"
                      className="relative flex h-[42px] w-[42px] items-center justify-center gap-2.5 rounded-full bg-gray-200 font-medium"
                    ></a>
                    <div className="absolute top-0 left-11 block flex flex-col gap-2 pl-2.5">
                      <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                        Refund the Amount
                      </h4>
                      <ul>
                        <h6 className="text-sm leading-relaxed font-normal text-gray-500">
                          Estimate time will be Jun 22, 2024
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="relative h-[118px] w-full after:absolute after:-bottom-0 after:left-5 after:mt-2 after:inline-block after:h-[68px] after:w-0.5 after:bg-gray-200 after:content-['']">
                    <a
                      href="https://pagedone.io/"
                      className="relative flex h-[42px] w-[42px] items-center justify-center gap-2.5 rounded-full bg-gray-200 font-medium"
                    ></a>
                    <div className="absolute top-0 left-11 block flex flex-col gap-2 pl-2.5">
                      <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                        Product Check
                      </h4>
                      <ul>
                        <h6 className="text-sm leading-relaxed font-normal text-gray-500">
                          Estimate time will be Jun 20, 2024
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="relative h-[118px] w-full after:absolute after:-bottom-0 after:left-5 after:mt-2 after:inline-block after:h-[68px] after:w-0.5 after:bg-gray-200 after:content-['']">
                    <a
                      href="https://pagedone.io/"
                      className="relative flex h-[42px] w-[42px] items-center justify-center gap-2.5 rounded-full bg-gray-200 font-medium"
                    ></a>
                    <div className="absolute top-0 left-11 block flex flex-col gap-2 pl-2.5">
                      <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                        Pickup Product from Your Address
                      </h4>
                      <ul>
                        <h6 className="text-sm leading-relaxed font-normal text-gray-500">
                          Estimate time will be Jun 18 - 20, 2024
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="relative h-[118px] w-full after:absolute after:-bottom-0 after:left-5 after:mt-2 after:inline-block after:h-[68px] after:w-0.5 after:bg-gray-200 after:content-['']">
                    <a
                      href="https://pagedone.io/"
                      className="relative flex h-[42px] w-[42px] items-center justify-center gap-2.5 rounded-full bg-indigo-100 font-medium"
                    ></a>
                    <div className="absolute top-0 left-11 block flex flex-col gap-2 pl-2.5">
                      <h4 className="text-lg leading-relaxed font-medium text-indigo-600">
                        Refund Request Accept
                      </h4>
                      <ul>
                        <h6 className="text-sm leading-relaxed font-normal text-indigo-400">
                          Jun 16, 2024 at 10 : 00 AM
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="relative h-16 w-full">
                    <a
                      href="https://pagedone.io/"
                      className="relative flex h-[42px] w-[42px] items-center justify-center gap-2.5 rounded-full bg-indigo-100 font-medium"
                    ></a>
                    <div className="absolute top-0 left-11 block flex flex-col gap-2 pl-2.5">
                      <h4 className="text-lg leading-relaxed font-medium text-indigo-600">
                        Send Refund Request
                      </h4>
                      <ul>
                        <h6 className="text-sm leading-relaxed font-normal text-indigo-400">
                          Jun 16, 2024 at 6 : 25 PM
                        </h6>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
