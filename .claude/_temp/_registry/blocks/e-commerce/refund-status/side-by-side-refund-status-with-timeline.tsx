export default function SideBySideRefundStatusWithTimeline() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
            Tracking Refund Progress
          </h2>
          <div className="w-full justify-start items-start gap-9 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                <div className="w-full p-5 rounded-xl border border-gray-200 sm:justify-start justify-center items-center gap-5 flex sm:flex-row flex-col">
                  <img
                    className="rounded-lg object-cover"
                    src="https://pagedone.io/asset/uploads/1718776407.png"
                    alt="Wild Stone Perfume for Men image"
                  />
                  <h4 className="text-black text-xl font-semibold leading-8 sm:text-start text-center">
                    Wild Stone Ultra Sensual Long Lasting Perfume for Men,
                    100ml, Aromatic Blend of Masculine Fragrances
                  </h4>
                </div>
                <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 flex">
                  <h4 className="text-gray-900 text-xl font-bold leading-8">
                    Details Of Refunds:
                  </h4>
                  <div className="w-full flex-col justify-start items-start gap-4 flex">
                    <div className="w-full pb-2.5 border-b border-gray-200 justify-start items-start gap-4 grid sm:grid-cols-2 grid-cols-1">
                      <div className="w-full flex-col justify-start items-start gap-0.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                          Oder Date:
                        </h6>
                        <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                          May 26, 2024
                        </h5>
                      </div>
                      <div className="w-full flex-col justify-start items-start gap-0.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                          Refund Request:
                        </h6>
                        <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                          June 10, 2024
                        </h5>
                      </div>
                    </div>
                    <div className="w-full pb-2.5 border-b border-gray-200 justify-start items-start gap-4 grid sm:grid-cols-2 grid-cols-1">
                      <div className="w-full flex-col justify-start items-start gap-0.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                          Refund Method:
                        </h6>
                        <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                          Gift Card Refund
                        </h5>
                      </div>
                      <div className="w-full flex-col justify-start items-start gap-0.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                          Refund Amount:
                        </h6>
                        <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                          $550
                        </h5>
                      </div>
                    </div>
                    <div className="w-full justify-start items-start gap-4 grid sm:grid-cols-2 grid-cols-1">
                      <div className="w-full flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-gray-900 text-base font-semibold leading-relaxed">
                          Refund Reason:
                        </div>
                        <div className="text-gray-500 text-lg font-medium leading-relaxed">
                          Quality Issue &amp; Missing Parts
                        </div>
                      </div>
                      <div className="w-full flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-gray-900 text-base font-semibold leading-relaxed">
                          Package Condition:
                        </div>
                        <div className="text-gray-500 text-lg font-medium leading-relaxed">
                          New
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-5 flex">
                  <h4 className="text-gray-900 text-xl font-bold leading-8">
                    Details Of Customer:
                  </h4>
                  <div className="w-full flex-col justify-start items-start gap-4 flex">
                    <div className="w-full pb-2.5 border-b border-gray-200 justify-start items-start gap-4 grid sm:grid-cols-2 grid-cols-1">
                      <div className="w-full flex-col justify-start items-start gap-0.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                          Phone Number:
                        </h6>
                        <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                          +91 55555 55555
                        </h5>
                      </div>
                      <div className="w-full flex-col justify-start items-start gap-0.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                          E-mail Address:
                        </h6>
                        <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                          mail@pagedone.com
                        </h5>
                      </div>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-0.5 flex">
                      <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                        Address:
                      </h6>
                      <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                        1234 Elm Street, Springfield, IL 62704, United States
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <button className="lg:w-fit w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 hover:bg-gray-50 hover:border-gray-500 transition-all duration-700 ease-in-out justify-center items-center flex">
                  <span className="px-2 text-gray-900 text-base font-semibold leading-relaxed">
                    Back to Shopping
                  </span>
                </button>
                <button className="lg:w-fit w-full px-5 py-2.5 bg-red-50 hover:bg-red-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
                  <span className="px-2 py-px text-red-500 text-base font-semibold leading-relaxed">
                    Cancel Refund
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full justify-start items-start gap-2.5 inline-flex">
              <ol className="w-full overflow-hidden flex flex-col">
                <li className="w-full relative h-[186px] after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-600 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-3">
                  <a
                    href="https://pagedone.io/"
                    className="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5"
                  ></a>
                  <div className="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                    <h4 className="text-lg text-gray-900 font-semibold leading-relaxed">
                      Send Refund Request
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        12 June 2024 at 2:27 PM
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="w-full relative h-[186px] after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-600 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-3">
                  <a
                    href="https://pagedone.io/"
                    className="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5"
                  ></a>
                  <div className="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                    <h4 className="text-lg text-gray-900 font-semibold leading-relaxed">
                      Request Accepted
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        13 June 2024 at 4:10 PM
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="w-full relative h-[186px] after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-3">
                  <a
                    href="https://pagedone.io/"
                    className="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5"
                  ></a>
                  <div className="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                    <h4 className="text-lg text-gray-900 font-semibold leading-relaxed">
                      Pickup Product from Your Address
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        16 June 2024 at 7:20 PM
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="w-full relative h-[186px] after:content-[''] after:w-0.5 after:h-40 after:bg-indigo-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-3">
                  <a
                    href="https://pagedone.io/"
                    className="w-6 h-6 relative flex items-center justify-center font-medium gap-2.5"
                  ></a>
                  <div className="w-full block flex flex-col gap-2.5 pl-3 absolute top-0 left-6">
                    <h4 className="text-lg text-gray-900 font-semibold leading-relaxed">
                      Product Check
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Estimate Date: 18 June 2024 to 19 June 2024
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
                      Refund the Amount
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Estimate Date: within 3-4 business days after the
                        product check.
                      </h6>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
