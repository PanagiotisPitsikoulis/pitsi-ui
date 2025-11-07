export default function OrderConfirmationWithOrderDetails() {
  return (
    <section className="py-24 relative bg-gray-100">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-7 inline-flex">
          <div className="w-full flex-col justify-center items-start gap-3 flex">
            <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Thank You for Your Order!
            </h2>
            <h4 className="text-gray-600 text-lg font-normal leading-8">
              Order #231005
            </h4>
          </div>
          <div className="w-full justify-start items-start gap-8 flex lg:flex-row flex-col">
            <div className="w-full flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-full flex-col justify-start items-start flex">
                <div className="w-full p-5 bg-white rounded-tl-2xl rounded-tr-2xl border border-gray-200 flex-col justify-start items-start gap-5 flex">
                  <div className="flex-col justify-start items-start gap-1 flex">
                    <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      Order Received
                    </h3>
                    <span className="text-gray-500 text-sm font-normal leading-relaxed">
                      From John Smith
                    </span>
                  </div>
                  <div className="justify-start items-start gap-1.5 inline-flex">
                    <div
                      role="progressbar"
                      className="w-[100px] h-1 bg-emerald-600 rounded-full"
                    />
                    <div
                      role="progressbar"
                      className="w-[100px] h-1 bg-zinc-300 rounded-full"
                    />
                    <div
                      role="progressbar"
                      className="w-[100px] h-1 bg-zinc-300 rounded-full"
                    />
                    <div
                      role="progressbar"
                      className="w-[100px] h-1 bg-zinc-300 rounded-full"
                    />
                  </div>
                </div>
                <div className="w-full p-5 bg-white rounded-bl-2xl rounded-br-2xl border-x border-b border-gray-200 justify-between items-center inline-flex">
                  <div className="flex-col justify-start items-start gap-1 inline-flex">
                    <h5 className="text-gray-900 text-lg font-semibold leading-8">
                      Estimate arrival time
                    </h5>
                    <span className="text-gray-500 text-sm font-normal leading-relaxed">
                      30-45 minutes
                    </span>
                  </div>
                  <button className="p-1.5 bg-emerald-600 hover:bg-emerald-800 transition-all duration-700 ease-in-out rounded-md shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-white text-xs font-medium leading-5">
                      Track order
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-full p-5 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-1 flex">
                <h5 className="text-gray-900 text-lg font-semibold leading-8">
                  Picking up your order
                </h5>
                <span className="text-gray-500 text-sm font-normal leading-relaxed">
                  Order Address: 123 Main Street Anytown, USA
                </span>
              </div>
            </div>
            <div className="w-full p-5 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-4 flex">
                <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  Order Details
                </h3>
                <div className="w-full flex-col justify-start items-start gap-4 flex pb-4 border-b border-gray-200">
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <div className="justify-start items-center gap-3 flex">
                      <img
                        className="rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1717412703.png"
                        alt="Burger image"
                      />
                      <h5 className="text-gray-500 text-lg font-normal leading-8">
                        1 Burger
                      </h5>
                    </div>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">
                      $20.00
                    </h5>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <div className="justify-start items-center gap-3 flex">
                      <img
                        className="rounded-lg object-cover"
                        src="https://pagedone.io/asset/uploads/1717412738.png"
                        alt="Pizza image"
                      />
                      <h5 className="text-gray-500 text-lg font-normal leading-8">
                        2 Pizza
                      </h5>
                    </div>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">
                      $80.00
                    </h5>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-3.5 flex border-b border-gray-200 pb-4">
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                      Subtotal
                    </h6>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      $100.00
                    </h5>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                      Tax
                    </h6>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      $24.00
                    </h5>
                  </div>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-gray-900 text-lg font-semibold leading-relaxed">
                    Total
                  </h5>
                  <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                    $124.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
