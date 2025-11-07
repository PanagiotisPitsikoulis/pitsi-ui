export default function OrderDetailsInCardLayout() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-center gap-11 md:items-start md:justify-start">
          <h2 className="font-manrope text-4xl leading-normal font-bold text-black">
            Your Order Details
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 md:items-start md:justify-start">
            <h4 className="text-xl leading-loose font-medium text-black">
              Hello, Ashley Thomas
            </h4>
            <h5 className="text-lg leading-8 font-normal text-gray-500">
              Thank you. Your order has been Confirmed.
            </h5>
          </div>
        </div>
        <div className="my-11 grid w-full grid-cols-1 items-start justify-start gap-6 border border-gray-200 p-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          <div className="inline-flex w-full flex-col items-center justify-start gap-3 border-b border-gray-200 pb-6 sm:items-start sm:border-r sm:border-b-0 sm:pr-8 sm:pb-0">
            <h6 className="text-base leading-relaxed font-normal text-gray-500">
              Order Date
            </h6>
            <h5 className="text-lg leading-8 font-medium text-black">
              Nov 28, 2023
            </h5>
          </div>
          <div className="inline-flex w-full flex-col items-center justify-start gap-3 border-b border-gray-200 pb-6 sm:items-start sm:border-b-0 sm:pb-0 lg:border-r">
            <h6 className="text-base leading-relaxed font-normal text-gray-500">
              Delivery Date
            </h6>
            <h5 className="text-lg leading-8 font-medium text-black">
              Dec 01, 2023
            </h5>
          </div>
          <div className="inline-flex w-full flex-col items-center justify-start gap-3 border-b border-gray-200 pb-6 sm:items-start sm:border-r sm:border-b-0 sm:pb-0">
            <h6 className="text-base leading-relaxed font-normal text-gray-500">
              Order ID
            </h6>
            <h5 className="text-lg leading-8 font-medium text-black">
              #1023498789
            </h5>
          </div>
          <div className="inline-flex w-full flex-col items-center justify-start gap-3 sm:items-start">
            <h6 className="text-base leading-relaxed font-normal text-gray-500">
              Payment Method
            </h6>
            <div className="inline-flex items-center justify-center rounded-md border border-gray-100 bg-white pt-[10.27px] pr-[7.14px] pb-[8.39px] pl-[6.48px]"></div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 inline-flex w-full flex-col items-start justify-start gap-8 lg:col-span-7">
            <div className="grid w-full grid-cols-12 items-center justify-start gap-6 border border-gray-200 p-5">
              <div className="col-span-12 flex w-full flex-col items-center justify-start gap-6 md:col-span-6 md:flex-row">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715407598.png"
                  alt="Shoes image"
                />
                <div className="inline-flex flex-col items-center justify-center gap-2.5">
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Shoes
                  </h3>
                  <h4 className="text-xl leading-8 font-normal text-gray-500">
                    Size:
                    <span className="text-lg leading-8 font-normal text-black">
                      {" "}
                      40
                    </span>
                  </h4>
                </div>
              </div>
              <div className="col-span-12 flex w-full items-center justify-center gap-5 md:col-span-3">
                <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                <input
                  type="text"
                  className="flex h-9 w-9 items-center justify-center border border-gray-100 bg-white text-center text-lg leading-8 font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                />
                <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
              </div>
              <h4 className="col-span-12 text-center text-xl leading-8 font-semibold text-black md:col-span-3">
                $140.00
              </h4>
            </div>
            <div className="grid w-full grid-cols-12 items-center justify-start gap-6 border border-gray-200 p-5">
              <div className="col-span-12 flex w-full flex-col items-center justify-start gap-6 md:col-span-6 md:flex-row">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715407611.png"
                  alt="Smart Watch image"
                />
                <div className="inline-flex flex-col items-center justify-center gap-2.5">
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Smart Watch
                  </h3>
                  <h4 className="text-xl leading-8 font-normal text-gray-500">
                    Color:
                    <span className="text-lg leading-8 font-normal text-black">
                      {" "}
                      Golden &amp; Silver
                    </span>
                  </h4>
                </div>
              </div>
              <div className="col-span-12 flex w-full items-center justify-center gap-5 md:col-span-3">
                <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                <input
                  type="text"
                  className="flex h-9 w-9 items-center justify-center border border-gray-100 bg-white text-center text-lg leading-8 font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                />
                <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
              </div>
              <h4 className="col-span-12 text-center text-xl leading-8 font-semibold text-black md:col-span-3">
                $140.00
              </h4>
            </div>
            <div className="grid w-full grid-cols-12 items-center justify-start gap-6 border border-gray-200 p-5">
              <div className="col-span-12 flex w-full flex-col items-center justify-start gap-6 md:col-span-6 md:flex-row">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715407622.png"
                  alt="Cool Shirt image"
                />
                <div className="inline-flex flex-col items-start justify-center gap-2.5">
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Cool Shirt
                  </h3>
                  <h4 className="text-xl leading-8 font-normal text-gray-500">
                    Size:
                    <span className="text-lg leading-8 font-normal text-black">
                      {" "}
                      M
                    </span>
                  </h4>
                </div>
              </div>
              <div className="col-span-12 flex w-full items-center justify-center gap-5 md:col-span-3">
                <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                <input
                  type="text"
                  className="flex h-9 w-9 items-center justify-center border border-gray-100 bg-white text-center text-lg leading-8 font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                />
                <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
              </div>
              <h4 className="col-span-12 text-center text-xl leading-8 font-semibold text-black md:col-span-3">
                $140.00
              </h4>
            </div>
          </div>
          <div className="col-span-12 inline-flex w-full flex-col items-start justify-start gap-8 lg:col-span-5">
            <div className="flex w-full flex-col items-start justify-start gap-6 border border-gray-200 p-6">
              <div className="flex w-full flex-col items-start justify-start gap-6 border-b border-gray-200 pb-6">
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Subtotal
                  </h5>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                    $1690.26
                  </h4>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Shipping Charge
                  </h5>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                    $60.00
                  </h4>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Taxes
                  </h5>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                    $80.00
                  </h4>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Discount
                  </h5>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                    $00.00
                  </h4>
                </div>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-6">
                <h4 className="text-xl leading-loose font-semibold text-gray-900">
                  Total
                </h4>
                <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                  $1830.26
                </h4>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6 border border-gray-200 p-6">
              <div className="flex w-full flex-col items-start justify-start gap-3 border-b border-gray-200 pb-6">
                <h6 className="text-base leading-relaxed font-normal text-gray-500">
                  Shipping Address
                </h6>
                <h5 className="text-lg leading-8 font-medium text-black">
                  456 Gandhi Nagar Ahmedabad, Gujarat 380001
                  <br />
                  India
                </h5>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-3">
                <h6 className="text-base leading-relaxed font-normal text-gray-500">
                  Billing Address
                </h6>
                <h5 className="text-lg leading-8 font-medium text-black">
                  Same
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
