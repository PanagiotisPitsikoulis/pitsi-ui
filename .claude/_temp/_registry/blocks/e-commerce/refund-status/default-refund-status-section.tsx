export default function DefaultRefundStatusSection() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <h2 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal">
            Refund Status
          </h2>
          <div className="w-full flex-col justify-start items-start gap-9 flex">
            <div className="w-full p-5 rounded-xl border border-gray-200 sm:justify-start justify-center items-center gap-5 flex sm:flex-row flex-col">
              <div className="w-full flex-col justify-center sm:items-start items-center gap-5 inline-flex sm:pr-5 sm:pb-0 pb-5 sm:border-r sm:border-b-0 border-b border-gray-200">
                <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                  Oder Date:
                  <span className="text-gray-500 font-medium">
                    May 26, 2024
                  </span>
                </h6>
                <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                  Refund Method:
                  <span className="text-gray-500 font-medium">
                    Bank Transfer
                  </span>
                </h6>
              </div>
              <div className="w-full flex-col justify-center sm:items-start items-center gap-5 inline-flex">
                <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                  Refund Request:
                  <span className="text-gray-500 text-base font-medium leading-relaxed">
                    {" "}
                    June 10, 2024
                  </span>
                </h6>
                <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                  Refund Amount:
                  <span className="text-gray-500 text-base font-medium leading-relaxed">
                    $2500
                  </span>
                </h6>
              </div>
            </div>
            <div className="w-full justify-start items-start gap-2.5 inline-flex">
              <ol className="w-full overflow-hidden flex flex-col gap-1.5">
                <li className="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-600 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                  <a
                    href="https://pagedone.io/"
                    className="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5"
                  ></a>
                  <div className="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                    <h4 className="text-lg text-gray-900 font-semibold leading-relaxed">
                      Your request has been successfully received.
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Your request has been successfully received. Our team is
                        now reviewing the details kindly place the product and
                        accessories back in the original packaging. The courier
                        will reach out to you to arrange the pickup from the
                        provided address.
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                  <a
                    href="https://pagedone.io/"
                    className="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5"
                  ></a>
                  <div className="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                    <h4 className="text-lg text-gray-900 font-semibold leading-relaxed">
                      Collect Product from Your Location
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        We will arrange for our courier to collect the product
                        from your location. Please ensure it is properly
                        packaged and ready for pickup. Estimate Date June 16,
                        2024 at 2:00 PM to 5:00 PM
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="w-full relative h-48 after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-2.5">
                  <a
                    href="https://pagedone.io/"
                    className="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5"
                  ></a>
                  <div className="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                    <h4 className="text-lg text-gray-900 font-semibold leading-relaxed">
                      Product Verification
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Our team will conduct a thorough product verification to
                        ensure it meets all quality standards. You will be
                        notified once the process is complete.
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="w-full relative h-24">
                  <a
                    href="https://pagedone.io/"
                    className="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5"
                  ></a>
                  <div className="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                    <h4 className="text-lg text-gray-900 font-semibold leading-relaxed">
                      Credit the Amount Back
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
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
            <div className="w-full sm:p-5 p-3.5 rounded-xl border border-gray-200 justify-start items-center sm:gap-5 gap-3.5 inline-flex">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1718775624.png"
                alt="APPLE iPhone 15 Black image"
              />
              <div className="w-full flex-col justify-center items-start gap-1.5 inline-flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-8">
                  APPLE iPhone 15 (128 GB) - Black
                </h4>
                <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                  Return Reason:
                  <span className="text-gray-500 text-base font-medium leading-relaxed">
                    Incorrect Product
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="w-full justify-center items-center gap-5 flex sm:flex-row flex-col">
            <button className="md:w-fit w-full px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
              <span className="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed">
                Back to Shopping
              </span>
            </button>
            <button className="md:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] rounded-xl justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Cancel Refund
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
