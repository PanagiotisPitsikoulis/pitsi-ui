export default function OrderSummaryWithDeliveryInformation() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-4 inline-flex">
          <h2 className="text-center text-black text-4xl font-bold font-manrope leading-normal">
            Order Summaries
          </h2>
          <p className="text-center text-gray-500 text-lg font-normal leading-8">
            Your Order Summaries are concise documents detailing the specifics
            of your purchases.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 my-11">
          <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
            <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
              Delivery Information
            </h3>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full justify-start items-start gap-4 inline-flex">
                <div className="w-32 flex items-center">
                  <input
                    id="radio_1"
                    type="radio"
                    name="radio"
                    className="hidden sr-only peer"
                  />
                  <label
                    htmlFor="radio_1"
                    className="py-[1px] text-black text-base font-medium leading-relaxed w-full flex items-center cursor-pointer bg-transparent"
                  >
                    <span className="w-[26px] h-[26px] mr-[18px] rounded-full bg-white border border-gray-400 checked:border-indigo-600" />
                    Home
                  </label>
                </div>
                <div className="w-40 flex items-center">
                  <input
                    id="radio_2"
                    type="radio"
                    name="radio"
                    className="hidden sr-only peer"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio_2"
                    className="py-[1px] text-black text-base font-medium leading-relaxed w-full flex items-center cursor-pointer bg-transparent"
                  >
                    <span className="w-[26px] h-[26px] mr-[18px] rounded-full bg-white border border-gray-400 checked:border-indigo-600" />
                    Office
                  </label>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h6 className="text-gray-400 text-base font-medium leading-6">
                      First Name
                    </h6>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-lg font-normal leading-8 px-5 py-3 border border-gray-300 rounded-lg"
                      placeholder="Shawna"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h6 className="text-gray-400 text-base font-medium leading-6">
                      Last Name
                    </h6>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-lg font-normal leading-8 px-5 py-3 border border-gray-300 rounded-lg"
                      placeholder="Hermiston"
                    />
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h6 className="text-gray-400 text-base font-medium leading-6">
                      Email Address
                    </h6>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-lg font-normal leading-8 px-5 py-3 border border-gray-300 rounded-lg"
                      placeholder="Shawna87@yahoo.com"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h6 className="text-gray-400 text-base font-medium leading-6">
                      Phone Number
                    </h6>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-lg font-normal leading-8 px-5 py-3 border border-gray-300 rounded-lg"
                      placeholder="(283) 785-5815 x2293"
                    />
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-8 inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h6 className="text-gray-400 text-base font-medium leading-6">
                      Address
                    </h6>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-lg font-normal leading-8 px-5 py-3 border border-gray-300 rounded-lg"
                      placeholder="74890 The Willows, Weissnatmouth 49366-9564"
                    />
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h6 className="text-gray-400 text-base font-medium leading-6">
                      Company
                    </h6>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-lg font-normal leading-8 px-5 py-3 border border-gray-300 rounded-lg"
                      placeholder="Grimes, Stokes and Willms"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h6 className="text-gray-400 text-base font-medium leading-6">
                      City
                    </h6>
                    <input
                      type="text"
                      className="w-full h-12 focus:outline-none shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-lg font-normal leading-8 px-5 py-3 border border-gray-300 rounded-lg"
                      placeholder="Brazil"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
            <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
              My Order
            </h3>
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="w-full pb-6 border-b border-gray-200 justify-start items-center gap-6 inline-flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715318481.png"
                />
                <div className="w-full justify-between items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      Alarm Clock
                    </h5>
                    <div className="justify-start items-start inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Qty:
                        <span className="text-gray-500">1</span>
                      </h6>
                    </div>
                  </div>
                  <h5 className="text-right text-indigo-600 text-lg font-semibold leading-8">
                    $150.00
                  </h5>
                </div>
              </div>
              <div className="w-full pb-6 border-b border-gray-200 justify-start items-center gap-6 inline-flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715318493.png"
                />
                <div className="w-full justify-between items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      Nen Polish
                    </h5>
                    <div className="justify-start items-start gap-4 inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Qty:
                        <span className="text-gray-500">2</span>
                      </h6>
                    </div>
                  </div>
                  <h5 className="text-right text-indigo-600 text-lg font-semibold leading-8">
                    $80.00
                  </h5>
                </div>
              </div>
              <div className="w-full pb-6 border-b border-gray-200 justify-start items-center gap-6 inline-flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715318505.png"
                />
                <div className="w-full justify-between items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      Eau de Parfum
                    </h5>
                    <div className="justify-start items-start gap-4 inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Qty:
                        <span className="text-gray-500">1</span>
                      </h6>
                    </div>
                  </div>
                  <h5 className="text-right text-indigo-600 text-lg font-semibold leading-8">
                    $180.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-xl flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-full pb-6 border-b border-gray-100 flex-col justify-start items-start gap-6 flex">
            <div className="w-full justify-between items-start gap-6 inline-flex">
              <h4 className="text-gray-500 text-xl font-normal leading-loose">
                Subtotal
              </h4>
              <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                $490.00
              </h4>
            </div>
            <div className="w-full justify-between items-start gap-6 inline-flex">
              <h4 className="text-gray-500 text-xl font-normal leading-loose">
                Shipping Charge
              </h4>
              <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                $20.00
              </h4>
            </div>
            <div className="w-full justify-between items-start gap-6 inline-flex">
              <h4 className="text-gray-500 text-xl font-normal leading-loose">
                Taxes
              </h4>
              <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                $10.00
              </h4>
            </div>
            <div className="w-full justify-between items-start gap-6 inline-flex">
              <h4 className="text-gray-500 text-xl font-normal leading-loose">
                Discount
              </h4>
              <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                $50.00
              </h4>
            </div>
          </div>
          <div className="w-full pb-6 border-b border-gray-100 justify-between items-start gap-6 inline-flex">
            <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
              Total
            </h3>
            <h3 className="text-right text-indigo-600 text-2xl font-bold font-manrope leading-9">
              $470.00
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
