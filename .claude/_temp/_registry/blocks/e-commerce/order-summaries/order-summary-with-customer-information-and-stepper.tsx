export default function OrderSummaryWithCustomerInformationAndStepper() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-11 inline-flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <h4 className="text-black text-xl font-medium leading-loose">
              Order ID : 356925420
            </h4>
            <h5 className="text-gray-500 text-lg font-normal leading-8">
              Thank you. Your order has been Confirmed.
            </h5>
          </div>
          <div className="w-full flex-col justify-center items-center gap-8 flex">
            <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
              <li className="flex w-full relative justify-center text-green-700 after:content-['']  after:w-full after:h-0.5  after:bg-green-700 after:inline-block after:absolute after:top-4 xl:after:left-36 lg:after:left-36 md:after:left-28 sm:after:left-20 after:left-16">
                <div className="block whitespace-nowrap z-10">
                  <span className="w-8 h-8 bg-green-700 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-8 lg:h-8">
                    1
                  </span>{" "}
                  Cart
                </div>
              </li>
              <li className="flex w-full relative justify-center text-green-700 after:content-['']  after:w-full after:h-0.5  after:bg-gray-300 after:inline-block after:absolute after:top-4 xl:after:left-36 lg:after:left-36 md:after:left-28 sm:after:left-20 after:left-16">
                <div className="block whitespace-nowrap z-10 w-full text-center">
                  <span className="w-8 h-8 bg-green-700 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-8 lg:h-8">
                    2
                  </span>{" "}
                  Delivery &amp; Payment
                </div>
              </li>
              <li className="flex w-full relative justify-center text-black after:content-['']  after:w-full after:h-0.5  after:bg-gray-300 after:inline-block after:absolute  after:top-4 xl:after:left-36 lg:after:left-36 md:after:left-28 sm:after:left-20 after:left-16">
                <div className="block whitespace-nowrap z-10">
                  <span className="w-8 h-8 text-green-700 bg-green-50 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-8 lg:h-8">
                    3
                  </span>{" "}
                  Summary
                </div>
              </li>
              <li className="flex w-full relative justify-center text-gray-500  after:content-['']  after:w-full after:h-0.5 after:inline-block after:absolute after:top-4 after:left-4">
                <div className="block whitespace-nowrap z-10">
                  <span className="w-8 h-8 text-green-700 bg-gray-50 border-2 border-green-700 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-8 lg:h-8">
                    4
                  </span>{" "}
                  Done
                </div>
              </li>
            </ol>
          </div>
          <div className="w-full flex flex-col gap-9">
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
            <div className="w-full p-6 rounded-2xl border border-gray-200 flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full justify-between items-center inline-flex">
                <h2 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  Order Summary
                </h2>
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
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="w-full h-fit p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-full justify-between items-center inline-flex">
                <h4 className="text-black text-xl font-semibold leading-loose">
                  Customer
                </h4>
                <button className="p-1 hover:bg-gray-100 transition-all duration-700 ease-in-out"></button>
              </div>
              <div className="w-full flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <div className="py-0.5"></div>
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    John Smith
                  </h6>
                </div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <div className="py-0.5"></div>
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    1 Order
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full h-fit p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-full justify-between items-center inline-flex">
                <h4 className="text-black text-xl font-semibold leading-loose">
                  Customer Information
                </h4>
                <button className="p-1 hover:bg-indigo-50 transition-all duration-700 ease-in-out"></button>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <div className="py-0.5"></div>
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed break-all">
                    john.smith1@gmail.com
                  </h6>
                </div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <div className="py-0.5"></div>
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    +91 94256 32056
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full h-fit p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-full justify-between items-center inline-flex">
                <h4 className="text-black text-xl font-semibold leading-loose">
                  Shipping Address
                </h4>
                <button className="p-1 hover:bg-indigo-50 transition-all duration-700 ease-in-out"></button>
              </div>
              <div className="w-full flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <div className="py-0.5"></div>
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
                  <button className="p-1 hover:bg-indigo-50 transition-all duration-700 ease-in-out"></button>
                  <h6 className="text-indigo-600 text-base font-medium leading-relaxed cursor-pointer">
                    select on map
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full h-fit p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
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
