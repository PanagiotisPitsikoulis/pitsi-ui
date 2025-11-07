export default function OrderConfirmationWithOrderStatus() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
          <div className="w-full justify-start items-start lg:gap-8 gap-6 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-start lg:gap-8 gap-6 inline-flex">
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                Your Order is Confirmed!
              </h2>
              <div className="w-full flex-col justify-start items-start lg:gap-8 gap-6 flex">
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                    Order ID : #0214582001
                  </h5>
                  <h4 className="text-black text-xl font-medium leading-8">
                    Thank you for John smith
                  </h4>
                </div>
                <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start flex">
                  <div className="flex-col justify-start items-start gap-1.5 flex">
                    <h4 className="text-black text-xl font-semibold leading-8">
                      Order Updates
                    </h4>
                    <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                      You will receive order and shipping updates via email.
                    </h6>
                  </div>
                </div>
                <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
                  <div className="justify-start items-center gap-6 inline-flex">
                    <h4 className="text-black text-xl font-semibold leading-8">
                      Order Info
                    </h4>
                  </div>
                  <div className="w-full justify-between items-start gap-4 inline-flex">
                    <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                      <div className="flex-col justify-center items-start gap-1 flex">
                        <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                          Order Date
                        </h5>
                        <h6 className="text-black text-base font-medium leading-relaxed">
                          Mar 28, 2023
                        </h6>
                      </div>
                      <div className="flex-col justify-center items-start gap-1 flex">
                        <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                          Status
                        </h5>
                        <h6 className="text-black text-base font-medium leading-relaxed">
                          Progress
                        </h6>
                      </div>
                      <div className="flex-col justify-center items-start gap-1 flex">
                        <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                          Payment Method
                        </h5>
                        <h6 className="text-black text-base font-medium leading-relaxed">
                          Cash on Delivery
                        </h6>
                      </div>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                      <div className="flex-col justify-center items-start gap-1 flex">
                        <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                          Delivery Date
                        </h5>
                        <h6 className="text-black text-base font-medium leading-relaxed">
                          April 01, 2023
                        </h6>
                      </div>
                      <div className="flex-col justify-center items-start gap-1 flex">
                        <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                          Payment Status
                        </h5>
                        <h6 className="text-black text-base font-medium leading-relaxed">
                          Paid
                        </h6>
                      </div>
                      <div className="flex-col justify-center items-start gap-1 flex">
                        <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                          Address
                        </h5>
                        <h6 className="text-black text-base font-medium leading-relaxed">
                          718 Robbyn Meadow, S...
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start lg:gap-8 gap-6 inline-flex">
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                Your Order
              </h2>
              <div className="w-full flex-col justify-start items-start lg:gap-8 gap-6 flex">
                <div className="w-full flex-col justify-start items-start gap-6 flex">
                  <div className="w-full pb-6 border-b border-gray-100 justify-start items-center gap-6 inline-flex">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1715247090.png"
                      alt="White neck shirt image"
                    />
                    <div className="w-full justify-between items-center gap-6 flex">
                      <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <h5 className="text-black text-lg font-semibold leading-relaxed">
                          White neck shirt
                        </h5>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Dust Studios
                        </h6>
                        <div className="justify-start items-start gap-4 inline-flex">
                          <h6 className="text-black text-base font-medium leading-relaxed border-r border-gray-300 pr-4">
                            Size:
                            <span className="text-gray-500">M </span>
                          </h6>
                          <h6 className="text-black text-base font-medium leading-relaxed">
                            Qty:
                            <span className="text-gray-500">1</span>
                          </h6>
                        </div>
                      </div>
                      <h5 className="text-right text-indigo-600 text-lg font-semibold leading-relaxed">
                        $120.00
                      </h5>
                    </div>
                  </div>
                  <div className="w-full pb-6 border-b border-gray-100 justify-start items-center gap-6 inline-flex">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1715247100.png"
                      alt="Sunglasses for Men image"
                    />
                    <div className="w-full justify-between items-center gap-6 flex">
                      <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <h5 className="text-black text-lg font-semibold leading-relaxed">
                          Sunglasses for Men
                        </h5>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Black
                        </h6>
                        <div className="justify-start items-start gap-4 inline-flex">
                          <h6 className="text-black text-base font-medium leading-relaxed border-r border-gray-300 pr-4">
                            Size:
                            <span className="text-gray-500">M</span>
                          </h6>
                          <h6 className="text-black text-base font-medium leading-relaxed">
                            Qty:
                            <span className="text-gray-500">1</span>
                          </h6>
                        </div>
                      </div>
                      <h5 className="text-right text-indigo-600 text-lg font-semibold leading-relaxed">
                        $100.00
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-4 flex">
                  <h4 className="text-black text-xl font-semibold leading-8">
                    Order Summary
                  </h4>
                  <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-3.5 flex">
                    <div className="w-full justify-between items-center gap-6 inline-flex">
                      <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                        Subtotal:
                      </h5>
                      <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                        $ 240.00
                      </h5>
                    </div>
                    <div className="w-full justify-between pb-4 border-b border-gray-200 items-center inline-flex">
                      <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                        Delivery:
                      </h5>
                      <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                        Free
                      </h5>
                    </div>
                    <div className="w-full justify-between pb-4 items-center inline-flex">
                      <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                        Total:
                      </h5>
                      <h5 className="text-right text-indigo-600 text-lg font-semibold leading-relaxed">
                        ₹240.00
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full justify-center items-start lg:gap-8 gap-6 flex sm:flex-row flex-col">
            <button className="w-full px-6 py-3 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 text-indigo-500 text-lg font-semibold leading-8">
                Back to Shopping
              </span>
            </button>
            <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 text-white text-lg font-semibold leading-8">
                Continue Shipping
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
