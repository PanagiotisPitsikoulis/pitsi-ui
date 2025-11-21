export default function DefaultRefundStatusSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <h2 className="font-manrope w-full text-3xl leading-normal font-bold text-gray-900">
            Refund Status
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-9">
            <div className="flex w-full flex-col items-center justify-center gap-5 rounded-xl border border-gray-200 p-5 sm:flex-row sm:justify-start">
              <div className="inline-flex w-full flex-col items-center justify-center gap-5 border-b border-gray-200 pb-5 sm:items-start sm:border-r sm:border-b-0 sm:pr-5 sm:pb-0">
                <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                  Oder Date:
                  <span className="font-medium text-gray-500">
                    May 26, 2024
                  </span>
                </h6>
                <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                  Refund Method:
                  <span className="font-medium text-gray-500">
                    Bank Transfer
                  </span>
                </h6>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-center gap-5 sm:items-start">
                <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                  Refund Request:
                  <span className="text-base leading-relaxed font-medium text-gray-500">
                    {" "}
                    June 10, 2024
                  </span>
                </h6>
                <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                  Refund Amount:
                  <span className="text-base leading-relaxed font-medium text-gray-500">
                    $2500
                  </span>
                </h6>
              </div>
            </div>
            <div className="inline-flex w-full items-start justify-start gap-2.5">
              <ol className="flex w-full flex-col gap-1.5 overflow-hidden">
                <li className="relative h-48 w-full after:absolute after:-bottom-0 after:left-2.5 after:mt-2 after:inline-block after:h-40 after:w-0.5 after:bg-indigo-600 after:content-['']">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex h-6 w-6 items-center justify-center gap-2.5 font-medium"
                  ></a>
                  <div className="absolute top-0 left-6 block flex w-full flex-col gap-2.5 pl-3">
                    <h4 className="text-lg leading-relaxed font-semibold text-gray-900">
                      Your request has been successfully received.
                    </h4>
                    <ul>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Your request has been successfully received. Our team is
                        now reviewing the details kindly place the product and
                        accessories back in the original packaging. The courier
                        will reach out to you to arrange the pickup from the
                        provided address.
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="relative h-48 w-full after:absolute after:-bottom-0 after:left-2.5 after:mt-2 after:inline-block after:h-40 after:w-0.5 after:bg-indigo-200 after:content-['']">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex h-6 w-6 items-center justify-center gap-2.5 font-medium"
                  ></a>
                  <div className="absolute top-0 left-6 block flex w-full flex-col gap-2.5 pl-3">
                    <h4 className="text-lg leading-relaxed font-semibold text-gray-900">
                      Collect Product from Your Location
                    </h4>
                    <ul>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        We will arrange for our courier to collect the product
                        from your location. Please ensure it is properly
                        packaged and ready for pickup. Estimate Date June 16,
                        2024 at 2:00 PM to 5:00 PM
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="relative h-48 w-full after:absolute after:-bottom-0 after:left-2.5 after:mt-2 after:inline-block after:h-40 after:w-0.5 after:bg-indigo-200 after:content-['']">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex h-6 w-6 items-center justify-center gap-2.5 font-medium"
                  ></a>
                  <div className="absolute top-0 left-6 block flex w-full flex-col gap-2.5 pl-3">
                    <h4 className="text-lg leading-relaxed font-semibold text-gray-900">
                      Product Verification
                    </h4>
                    <ul>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Our team will conduct a thorough product verification to
                        ensure it meets all quality standards. You will be
                        notified once the process is complete.
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="relative h-24 w-full">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex h-6 w-6 items-center justify-center gap-2.5 font-medium"
                  ></a>
                  <div className="absolute top-0 left-6 block flex w-full flex-col gap-2.5 pl-3">
                    <h4 className="text-lg leading-relaxed font-semibold text-gray-900">
                      Credit the Amount Back
                    </h4>
                    <ul>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        We will credit the amount back to your account,
                        depending on the chosen option, within 5-7 business days
                        after the process is complete. You will receive a
                        confirmation once the transaction has been finalized.
                      </h6>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
            <div className="inline-flex w-full items-center justify-start gap-3.5 rounded-xl border border-gray-200 p-3.5 sm:gap-5 sm:p-5">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1718775624.png"
                alt="APPLE iPhone 15 Black image"
              />
              <div className="inline-flex w-full flex-col items-start justify-center gap-1.5">
                <h4 className="text-xl leading-8 font-semibold text-gray-900">
                  APPLE iPhone 15 (128 GB) - Black
                </h4>
                <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                  Return Reason:
                  <span className="text-base leading-relaxed font-medium text-gray-500">
                    Incorrect Product
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-5 sm:flex-row">
            <button className="flex w-full items-center justify-center rounded-xl bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-indigo-100 md:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-600">
                Back to Shopping
              </span>
            </button>
            <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 md:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Cancel Refund
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
