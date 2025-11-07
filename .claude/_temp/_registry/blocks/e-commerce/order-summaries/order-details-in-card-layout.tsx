export default function OrderDetailsInCardLayout() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col md:justify-start justify-center md:items-start items-center gap-11 inline-flex">
          <h2 className="text-black text-4xl font-bold font-manrope leading-normal">
            Your Order Details
          </h2>
          <div className="flex-col md:justify-start justify-center md:items-start items-center gap-3 flex">
            <h4 className="text-black text-xl font-medium leading-loose">
              Hello, Ashley Thomas
            </h4>
            <h5 className="text-gray-500 text-lg font-normal leading-8">
              Thank you. Your order has been Confirmed.
            </h5>
          </div>
        </div>
        <div className="w-full p-6 border border-gray-200 justify-start items-start sm:gap-8 gap-6 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-11">
          <div className="w-full flex-col justify-start sm:items-start items-center gap-3 inline-flex sm:border-r sm:border-b-0 border-b  border-gray-200 sm:pr-8 sm:pb-0 pb-6">
            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
              Order Date
            </h6>
            <h5 className="text-black text-lg font-medium leading-8">
              Nov 28, 2023
            </h5>
          </div>
          <div className="w-full flex-col justify-start sm:items-start items-center gap-3 inline-flex lg:border-r sm:border-b-0 border-b border-gray-200 sm:pb-0 pb-6">
            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
              Delivery Date
            </h6>
            <h5 className="text-black text-lg font-medium leading-8">
              Dec 01, 2023
            </h5>
          </div>
          <div className="w-full flex-col justify-start sm:items-start items-center gap-3 inline-flex sm:border-r sm:border-b-0 border-b border-gray-200 sm:pb-0 pb-6">
            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
              Order ID
            </h6>
            <h5 className="text-black text-lg font-medium leading-8">
              #1023498789
            </h5>
          </div>
          <div className="w-full flex-col justify-start sm:items-start items-center gap-3 inline-flex">
            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
              Payment Method
            </h6>
            <div className="pl-[6.48px] pr-[7.14px] pt-[10.27px] pb-[8.39px] bg-white rounded-md border border-gray-100 justify-center items-center inline-flex"></div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="lg:col-span-7 col-span-12 w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full p-5 border border-gray-200 justify-start items-center gap-6 grid grid-cols-12">
              <div className="md:col-span-6 col-span-12 w-full justify-start items-center gap-6 flex md:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715407598.png"
                  alt="Shoes image"
                />
                <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                  <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Shoes
                  </h3>
                  <h4 className="text-gray-500 text-xl font-normal leading-8">
                    Size:
                    <span className="text-black text-lg font-normal leading-8">
                      {" "}
                      40
                    </span>
                  </h4>
                </div>
              </div>
              <div className="md:col-span-3 col-span-12 w-full justify-center items-center gap-5 flex">
                <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                <input
                  type="text"
                  className="w-9 h-9 text-center placeholder-gray-900 text-gray-900 text-lg font-medium leading-8 bg-white border border-gray-100 justify-center items-center flex focus:outline-none"
                />
                <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
              </div>
              <h4 className="md:col-span-3 col-span-12 text-center text-black text-xl font-semibold leading-8">
                $140.00
              </h4>
            </div>
            <div className="w-full p-5 border border-gray-200 justify-start items-center gap-6 grid grid-cols-12">
              <div className="md:col-span-6 col-span-12 w-full justify-start items-center gap-6 flex md:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715407611.png"
                  alt="Smart Watch image"
                />
                <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                  <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Smart Watch
                  </h3>
                  <h4 className="text-gray-500 text-xl font-normal leading-8">
                    Color:
                    <span className="text-black text-lg font-normal leading-8">
                      {" "}
                      Golden &amp; Silver
                    </span>
                  </h4>
                </div>
              </div>
              <div className="md:col-span-3 col-span-12 w-full justify-center items-center gap-5 flex">
                <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                <input
                  type="text"
                  className="w-9 h-9 text-center placeholder-gray-900 text-gray-900 text-lg font-medium leading-8 bg-white border border-gray-100 justify-center items-center flex focus:outline-none"
                />
                <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
              </div>
              <h4 className="md:col-span-3 col-span-12 text-center text-black text-xl font-semibold leading-8">
                $140.00
              </h4>
            </div>
            <div className="w-full p-5 border border-gray-200 justify-start items-center gap-6 grid grid-cols-12">
              <div className="md:col-span-6 col-span-12 w-full justify-start items-center gap-6 flex md:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715407622.png"
                  alt="Cool Shirt image"
                />
                <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                  <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Cool Shirt
                  </h3>
                  <h4 className="text-gray-500 text-xl font-normal leading-8">
                    Size:
                    <span className="text-black text-lg font-normal leading-8">
                      {" "}
                      M
                    </span>
                  </h4>
                </div>
              </div>
              <div className="md:col-span-3 col-span-12 w-full justify-center items-center gap-5 flex">
                <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                <input
                  type="text"
                  className="w-9 h-9 text-center placeholder-gray-900 text-gray-900 text-lg font-medium leading-8 bg-white border border-gray-100 justify-center items-center flex focus:outline-none"
                />
                <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
              </div>
              <h4 className="md:col-span-3 col-span-12 text-center text-black text-xl font-semibold leading-8">
                $140.00
              </h4>
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12 w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full p-6 border border-gray-200 flex-col justify-start items-start gap-6 flex">
              <div className="w-full pb-6 border-b border-gray-200 flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Subtotal
                  </h5>
                  <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                    $1690.26
                  </h4>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Shipping Charge
                  </h5>
                  <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                    $60.00
                  </h4>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Taxes
                  </h5>
                  <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                    $80.00
                  </h4>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Discount
                  </h5>
                  <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                    $00.00
                  </h4>
                </div>
              </div>
              <div className="w-full justify-between items-start gap-6 inline-flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-loose">
                  Total
                </h4>
                <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                  $1830.26
                </h4>
              </div>
            </div>
            <div className="w-full p-6 border border-gray-200 flex-col justify-start items-start gap-6 flex">
              <div className="w-full flex-col justify-start items-start gap-3 flex border-b border-gray-200 pb-6">
                <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  Shipping Address
                </h6>
                <h5 className="text-black text-lg font-medium leading-8">
                  456 Gandhi Nagar Ahmedabad, Gujarat 380001
                  <br />
                  India
                </h5>
              </div>
              <div className="w-full flex-col justify-start items-start gap-3 flex">
                <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  Billing Address
                </h6>
                <h5 className="text-black text-lg font-medium leading-8">
                  Same
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
