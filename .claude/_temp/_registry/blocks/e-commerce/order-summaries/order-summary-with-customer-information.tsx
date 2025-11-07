export default function OrderSummaryWithCustomerInformation() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-11 inline-flex mb-11">
          <h2 className="text-black text-4xl font-bold font-manrope leading-normal">
            Your Order{" "}
          </h2>
          <div className="flex-col justify-start items-start gap-3 flex">
            <h4 className="text-black text-xl font-medium leading-loose">
              Order ID : 356925420
            </h4>
            <h5 className="text-gray-500 text-lg font-normal leading-8">
              Thank you. Your order has been Confirmed.
            </h5>
          </div>
        </div>
        <div className="flex gap-11 lg:flex-row flex-col">
          <div className="lg:w-[812px] w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full p-6 rounded-2xl border border-gray-200 justify-start items-center md:gap-6 gap-4 flex md:flex-row flex-col">
              <div className="w-full justify-start items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715160494.png"
                  alt="Laptop image"
                />
                <div className="w-full flex-col justify-start items-center md:items-start gap-2.5 inline-flex">
                  <h4 className="text-gray-500 text-xl font-normal leading-loose">
                    Laptop
                  </h4>
                  <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9 whitespace-nowrap">
                    MacBook Air
                  </h3>
                  <div className="justify-start items-center gap-1 inline-flex">
                    <h4 className="text-gray-500 text-xl font-normal leading-loose whitespace-nowrap">
                      Color :<span className="text-gray-900">Black</span>
                    </h4>
                    <div className="w-5 h-5 bg-black rounded" />
                  </div>
                </div>
              </div>
              <div className="w-full justify-end items-center md:gap-8 gap-4 flex md:flex-row flex-col">
                <h4 className="text-right text-black text-xl font-semibold leading-loose">
                  $1500.00
                </h4>
                <button className="p-0.5 hover:bg-red-50 transition-all duration-700 ease-in-out"></button>
              </div>
            </div>
            <div className="w-full p-6 rounded-2xl border border-gray-200 flex-col justify-start items-start gap-8 flex">
              <div className="w-full justify-between items-center inline-flex">
                <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  Order Summary
                </h3>
                <button className="p-1 hover:bg-gray-100 transition-all duration-700 ease-in-out"></button>
              </div>
              <div className="w-full pb-6 border-b border-gray-200 flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Subtotal
                  </h5>
                  <h4 className="text-right text-gray-700 text-xl font-semibold leading-loose">
                    $1690.26
                  </h4>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Shipping Charge
                  </h5>
                  <h4 className="text-right text-gray-700 text-xl font-semibold leading-loose">
                    $60.00
                  </h4>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Taxes
                  </h5>
                  <h4 className="text-right text-gray-700 text-xl font-semibold leading-loose">
                    $80.00
                  </h4>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Discount
                  </h5>
                  <h4 className="text-right text-gray-700 text-xl font-semibold leading-loose">
                    $10.00
                  </h4>
                </div>
              </div>
              <div className="w-full justify-between items-start gap-6 inline-flex">
                <h4 className="text-black text-xl font-semibold leading-loose">
                  Total
                </h4>
                <h4 className="text-right text-black text-xl font-semibold leading-loose">
                  $1820.26
                </h4>
              </div>
            </div>
          </div>
          <div className="lg:w-[360px] w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
              <div className="w-full justify-between items-center inline-flex">
                <h4 className="text-black text-xl font-semibold leading-loose">
                  Customer
                </h4>
                <button className="p-1 hover:bg-gray-100 transition-all duration-700 ease-in-out"></button>
              </div>
              <div className="w-full flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    John Smith
                  </h6>
                </div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    1 Order
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
              <div className="w-full justify-between items-center inline-flex">
                <h4 className="text-black text-xl font-semibold leading-loose">
                  Customer Information
                </h4>
                <button className="p-1 hover:bg-indigo-50 transition-all duration-700 ease-in-out"></button>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    john.smith1@gmail.com
                  </h6>
                </div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    +91 94256 32056
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
              <div className="w-full justify-between items-center inline-flex">
                <h4 className="text-black text-xl font-semibold leading-loose">
                  Shipping Address
                </h4>
                <button className="p-1 hover:bg-indigo-50 transition-all duration-700 ease-in-out"></button>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    John Smith
                  </h6>
                </div>
                <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                  123 Elm Street
                  <br />
                  Anytown, USA 12345
                  <br />
                  United States
                </h6>
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <a href="#"></a>
                  <a className="text-indigo-600 text-base font-medium leading-relaxed">
                    select on map
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 flex">
              <div className="w-full justify-between items-center inline-flex">
                <h4 className="text-black text-xl font-semibold leading-loose">
                  Billing Address
                </h4>
                <button className="p-1 hover:bg-gray-100 transition-all duration-700 ease-in-out"></button>
              </div>
              <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                Same as shipping address
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
