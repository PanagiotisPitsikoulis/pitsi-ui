export default function RefundStatusWithOrderSummary() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full justify-start items-start flex lg:flex-row flex-col gap-5">
            <h2 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Refund Request Tracking
            </h2>
            <div className="w-full lg:justify-end items-center gap-5 flex sm:flex-row flex-col">
              <button className="lg:w-fit w-full px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
                <span className="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed whitespace-nowrap">
                  Back to Shopping
                </span>
              </button>
              <button className="lg:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                  Cancel Refund
                </span>
              </button>
            </div>
          </div>
          <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                <h4 className="text-black text-xl font-semibold leading-8">
                  Return Items From The Order
                </h4>
                <div className="w-full flex-col justify-start items-start gap-8 flex">
                  <div className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 justify-start items-center gap-5 inline-flex">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718778838.png"
                      alt="Sky School Bag image"
                    />
                    <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Sky School Bag
                      </h6>
                      <h6 className="text-gray-500 text-xs font-normal leading-normal">
                        Size :<span className="text-black">30</span>
                      </h6>
                      <h6 className="text-gray-500 text-xs font-normal leading-normal">
                        Color :<span className="text-black">Red</span>
                      </h6>
                      <div className="justify-start items-center gap-2.5 inline-flex">
                        <a href="#"></a>
                        <input
                          type="text"
                          className="w-[22px] h-[22px] focus:outline-none px-1 bg-gray-100 rounded-full border border-gray-200 text-center placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug"
                        />
                        <a className="w-4 h-4 flex items-center justify-center"></a>
                      </div>
                    </div>
                    <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                      $60.00
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-4 flex">
                <h4 className="text-black text-xl font-semibold leading-8">
                  Order Summary
                </h4>
                <div className="w-full p-5 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-4 flex">
                  <div className="w-full pb-3.5 border-b border-gray-200 justify-between items-center gap-px inline-flex">
                    <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                      Oder Date:
                    </h5>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      26 May 2024
                    </h5>
                  </div>
                  <div className="w-full pb-3.5 border-b border-gray-200 justify-between items-center gap-px inline-flex">
                    <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                      Request Date:
                    </h5>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      12 May 2024
                    </h5>
                  </div>
                  <div className="w-full pb-3.5 border-b border-gray-200 justify-between items-center gap-px inline-flex">
                    <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                      Refund Reason:
                    </h5>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      The product received is broken.
                    </h5>
                  </div>
                  <div className="w-full pb-3.5 border-b border-gray-200 justify-between items-center gap-px inline-flex">
                    <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                      Request Method:
                    </h5>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      Bank Transfer
                    </h5>
                  </div>
                  <div className="w-full pb-3.5 border-b border-gray-200 justify-between items-center gap-px inline-flex">
                    <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                      Package Condition:
                    </h5>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      New
                    </h5>
                  </div>
                  <div className="w-full justify-between items-center gap-px inline-flex">
                    <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                      Refund Amount:
                    </h5>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      $1200
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
              <h4 className="text-black text-xl font-semibold leading-8">
                Order Tracking
              </h4>
              <div className="w-full p-6 bg-gray-50 rounded-xl border border-gray-200 justify-start items-start gap-2.5 inline-flex">
                <ol className="w-full overflow-hidden flex flex-col gap-1.5">
                  <li className="w-full relative h-[118px] after:content-[''] after:w-0.5 after:h-[68px] after:bg-gray-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-5">
                    <a
                      href="https://pagedone.io/"
                      className="w-[42px] h-[42px] rounded-full bg-gray-200 relative flex items-center justify-center font-medium gap-2.5"
                    ></a>
                    <div className="block flex flex-col gap-2 pl-2.5 absolute top-0 left-11">
                      <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                        Refund the Amount
                      </h4>
                      <ul>
                        <h6 className="text-gray-500 text-sm font-normal leading-relaxed">
                          Estimate time will be Jun 22, 2024
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="w-full relative h-[118px] after:content-[''] after:w-0.5 after:h-[68px] after:bg-gray-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-5">
                    <a
                      href="https://pagedone.io/"
                      className="w-[42px] h-[42px] rounded-full bg-gray-200 relative flex items-center justify-center font-medium gap-2.5"
                    ></a>
                    <div className="block flex flex-col gap-2 pl-2.5 absolute top-0 left-11">
                      <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                        Product Check
                      </h4>
                      <ul>
                        <h6 className="text-gray-500 text-sm font-normal leading-relaxed">
                          Estimate time will be Jun 20, 2024
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="w-full relative h-[118px] after:content-[''] after:w-0.5 after:h-[68px] after:bg-gray-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-5">
                    <a
                      href="https://pagedone.io/"
                      className="w-[42px] h-[42px] rounded-full bg-gray-200 relative flex items-center justify-center font-medium gap-2.5"
                    ></a>
                    <div className="block flex flex-col gap-2 pl-2.5 absolute top-0 left-11">
                      <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                        Pickup Product from Your Address
                      </h4>
                      <ul>
                        <h6 className="text-gray-500 text-sm font-normal leading-relaxed">
                          Estimate time will be Jun 18 - 20, 2024
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="w-full relative h-[118px] after:content-[''] after:w-0.5 after:h-[68px] after:bg-gray-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-5">
                    <a
                      href="https://pagedone.io/"
                      className="w-[42px] h-[42px] rounded-full bg-indigo-100 relative flex items-center justify-center font-medium gap-2.5"
                    ></a>
                    <div className="block flex flex-col gap-2 pl-2.5 absolute top-0 left-11">
                      <h4 className="text-lg text-indigo-600 font-medium leading-relaxed">
                        Refund Request Accept
                      </h4>
                      <ul>
                        <h6 className="text-indigo-400 text-sm font-normal leading-relaxed">
                          Jun 16, 2024 at 10 : 00 AM
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="w-full relative h-16">
                    <a
                      href="https://pagedone.io/"
                      className="w-[42px] h-[42px] rounded-full bg-indigo-100 relative flex items-center justify-center font-medium gap-2.5"
                    ></a>
                    <div className="block flex flex-col gap-2 pl-2.5 absolute top-0 left-11">
                      <h4 className="text-lg text-indigo-600 font-medium leading-relaxed">
                        Send Refund Request
                      </h4>
                      <ul>
                        <h6 className="text-indigo-400 text-sm font-normal leading-relaxed">
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
  );
}
