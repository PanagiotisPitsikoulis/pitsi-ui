export default function OrderDetailsWithPaymentMethod() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-4 inline-flex">
          <h2 className="text-center text-black text-4xl font-bold font-manrope leading-normal">
            My Order Summaries
          </h2>
          <p className="lg:max-w-4xl w-full text-center text-gray-500 text-lg font-normal leading-8">
            Your Order Summaries are concise documents detailing the specifics
            of your purchases. They typically include information such as the
            items you've bought, their quantities, prices, any applicable.
          </p>
        </div>
        <div className="w-full py-6 border-t border-b border-gray-200 justify-between items-start gap-8 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:my-14 my-8">
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
              Delivery Date
            </h6>
            <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
              Jan 01, 2024
            </h4>
          </div>
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
              Order ID
            </h6>
            <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
              #1023498789
            </h4>
          </div>
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
              Payment Method
            </h6>
          </div>
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
              Address
            </h6>
            <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
              718 Robbyn Meadow, S...
            </h4>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="lg:w-[488px] w-full flex-col justify-start items-start gap-8 inline-flex">
            <img
              src="https://pagedone.io/asset/uploads/1715152436.png"
              alt="card image"
              className="w-full h-[296px] rounded-2xl object-cover"
            />
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                Card Details
              </h4>
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label className="text-gray-400 text-base font-medium leading-relaxed">
                    Name on card
                  </label>
                  <input
                    type="text"
                    placeholder="Ronald Richards"
                    className="w-full text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none border border-gray-300 justify-start items-center gap-2 inline-flex "
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label className="text-gray-400 text-base font-medium leading-relaxed">
                    Card number
                  </label>
                  <input
                    type="text"
                    placeholder="1254 2154 5478 6215"
                    className="w-full text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none border border-gray-300 justify-start items-center gap-2 inline-flex "
                  />
                </div>
                <div className="justify-start items-start gap-6 inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <label className="text-gray-400 text-base font-medium leading-relaxed">
                      Month
                    </label>
                    <input
                      type="text"
                      className="w-full text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none border border-gray-300 justify-start items-center gap-2 inline-flex "
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <label className="text-gray-400 text-base font-medium leading-relaxed">
                      Year
                    </label>
                    <input
                      type="text"
                      className="w-full text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none border border-gray-300 justify-start items-center gap-2 inline-flex "
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <label className="text-gray-400 text-base font-medium leading-relaxed">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="w-full text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none border border-gray-300 justify-start items-center gap-2 inline-flex "
                    />
                  </div>
                </div>
              </div>
              <button className="w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                <span className="px-2 py-px text-center text-white text-base font-semibold leading-relaxed">
                  Comfirm
                </span>
              </button>
            </div>
          </div>
          <div className="lg:w-[696px] w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                My Order
              </h4>
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-5 inline-flex">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1715153599.png"
                    alt="Men T-Shirt image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                    <div className="w-full justify-between items-start gap-4 inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Men T-Shirt
                      </h6>
                      <h6 className="text-right text-indigo-600 text-base font-semibold leading-relaxed">
                        $60.00
                      </h6>
                    </div>
                    <div className="justify-start items-start gap-3 inline-flex">
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Color:
                      </h6>
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Green
                      </h6>
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                      <div className="justify-start items-center gap-4 inline-flex">
                        <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                        <input
                          type="text"
                          className="w-[26px] h-[26px] text-center focus:outline-none placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex"
                        />
                        <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-5 inline-flex">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1715153610.png"
                    alt="Men Shirt image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                    <div className="w-full justify-between items-start gap-[15px] inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Men Shirt
                      </h6>
                      <h6 className="text-right text-indigo-600 text-base font-semibold leading-relaxed">
                        $50.00
                      </h6>
                    </div>
                    <div className="justify-start items-start gap-3 inline-flex">
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Color:
                      </h6>
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        White
                      </h6>
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                      <div className="justify-start items-center gap-4 inline-flex">
                        <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                        <input
                          type="text"
                          className="w-[26px] h-[26px] text-center focus:outline-none placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex"
                        />
                        <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full pb-5 border-b border-gray-200 justify-start items-center gap-5 inline-flex">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1715153621.png"
                    alt="Men Pant image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                    <div className="w-full justify-between items-start gap-[15px] inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Men Pant
                      </h6>
                      <h6 className="text-right text-indigo-600 text-base font-semibold leading-relaxed">
                        $100.00
                      </h6>
                    </div>
                    <div className="justify-start items-start gap-3 inline-flex">
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Color:
                      </h6>
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Blue
                      </h6>
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                      <div className="justify-start items-center gap-4 inline-flex">
                        <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                        <input
                          type="text"
                          className="w-[26px] h-[26px] text-center focus:outline-none placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex"
                        />
                        <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                Order Summaries
              </h4>
              <div className="w-full rounded-xl flex-col justify-start items-start gap-6 flex">
                <div className="w-full pb-6 border-b border-gray-200 flex-col justify-start items-start gap-6 flex">
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-500 text-xl font-normal leading-loose">
                      Subtotal
                    </h5>
                    <h5 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                      $210.00
                    </h5>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-500 text-xl font-normal leading-loose">
                      Shipping Charge
                    </h5>
                    <h5 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                      $30.00
                    </h5>
                  </div>
                </div>
                <div className="w-full pb-6 border-b border-gray-100 justify-between items-start gap-6 inline-flex">
                  <h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                    Total
                  </h4>
                  <h4 className="text-right text-indigo-600 text-2xl font-bold font-manrope leading-9">
                    $180.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
