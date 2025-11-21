export default function OrderSummaryWithStepperAndSidebar() {
  return (
    <section className="after:contents-[''] relative z-10 after:absolute after:top-0 after:right-0 after:z-0 after:h-full after:bg-gray-100 xl:after:w-1/3">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col justify-center lg:flex-row">
          <div className="inline-flex w-full flex-col items-end justify-start gap-11 bg-white px-4 pt-14 pb-8 md:px-6 lg:w-[472px] lg:py-24 lg:pr-8">
            <div className="inline-flex w-full items-center justify-between">
              <div className="flex w-full items-center justify-start gap-5 lg:gap-4 xl:gap-5">
                <div className="flex items-start justify-start">
                  <img
                    src="https://pagedone.io/asset/uploads/1715162710.png"
                    alt="Avtar image"
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="inline-flex flex-col items-start justify-center gap-0.5">
                  <h4 className="text-xl leading-loose font-semibold text-gray-900">
                    Kevin Patel
                  </h4>
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    kevin.patel1@gmail.com
                  </h6>
                </div>
              </div>
              <button className="p-1 transition-all duration-700 ease-in-out hover:bg-emerald-50"></button>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl">
                <div className="inline-flex w-full items-center justify-between">
                  <h4 className="text-xl leading-loose font-semibold text-gray-900">
                    Payment Method
                  </h4>
                  <h5 className="cursor-pointer text-right text-lg leading-8 font-semibold text-emerald-700">
                    Edit
                  </h5>
                </div>
                <div className="inline-flex items-center justify-start gap-2.5">
                  <button className="flex h-8 w-[46px] items-center justify-center rounded-md border border-gray-100"></button>
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    Apple Pay
                  </h6>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-6 border-y border-gray-200 py-8">
                <div className="inline-flex w-full items-center justify-between">
                  <h4 className="text-xl leading-loose font-semibold text-gray-900">
                    Shipping Address
                  </h4>
                  <h5 className="cursor-pointer text-right text-lg leading-8 font-semibold text-emerald-700">
                    Edit
                  </h5>
                </div>
                <div className="flex flex-col items-start justify-start gap-4">
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    123 Elm Street
                    <br />
                    Anytown, USA 12345
                    <br />
                    United States
                  </h6>
                  <div className="inline-flex items-center justify-start gap-2.5">
                    <a className="p-1 transition-all duration-700 ease-in-out hover:bg-green-50"></a>
                    <a className="text-base leading-relaxed font-medium text-green-700">
                      view on map
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl">
                <div className="inline-flex w-full items-center justify-between">
                  <h4 className="text-xl leading-loose font-semibold text-gray-900">
                    Billing Address
                  </h4>
                  <h5 className="cursor-pointer text-right text-lg leading-8 font-semibold text-emerald-700">
                    Edit
                  </h5>
                </div>
                <div className="flex flex-col items-start justify-start gap-4">
                  <h6 className="text-base leading-relaxed font-medium text-gray-400">
                    456 Oak Avenue
                    <br />
                    Springfield, USA 67890
                    <br />
                    United States
                  </h6>
                  <div className="inline-flex items-center justify-start gap-2.5">
                    <a className="p-1 transition-all duration-700 ease-in-out hover:bg-green-50"></a>
                    <a className="text-base leading-relaxed font-medium text-green-700">
                      view on map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-11 bg-gray-100 px-4 py-10 pl-4 md:pr-6 md:pl-6 lg:w-[824px] lg:py-24 lg:pl-14">
            <div className="flex flex-col items-start justify-start gap-3">
              <h4 className="text-xl leading-loose font-medium text-black">
                Order ID : 356925420
              </h4>
              <h5 className="text-lg leading-8 font-normal text-gray-500">
                Thank you. Your order has been Confirmed.
              </h5>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8">
              <ol className="flex w-full items-center text-xs font-medium text-gray-900 sm:text-base">
                <li className="relative flex w-full justify-center text-green-700 after:absolute after:top-3 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-green-700 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:left-20 xl:after:left-24">
                  <div className="z-10 block whitespace-nowrap">
                    <span className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-transparent bg-green-700 text-sm text-white lg:h-6 lg:w-6">
                      1
                    </span>{" "}
                    Cart
                  </div>
                </li>
                <li className="relative flex w-full justify-center text-green-700 after:absolute after:top-3 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-gray-300 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:left-20 xl:after:left-24">
                  <div className="z-10 block w-full text-center whitespace-nowrap">
                    <span className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-700 text-sm text-white lg:h-6 lg:w-6">
                      2
                    </span>{" "}
                    Delivery &amp; Payment
                  </div>
                </li>
                <li className="relative flex w-full justify-center text-black after:absolute after:top-3 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-gray-300 after:content-[''] sm:after:left-20 md:after:left-28 lg:after:left-20 xl:after:left-24">
                  <div className="z-10 block whitespace-nowrap">
                    <span className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-sm text-green-700 lg:h-6 lg:w-6">
                      3
                    </span>{" "}
                    Summary
                  </div>
                </li>
                <li className="relative flex w-full justify-center text-gray-500 after:absolute after:top-3 after:left-4 after:inline-block after:h-0.5 after:w-full after:content-['']">
                  <div className="z-10 block whitespace-nowrap">
                    <span className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-green-700 bg-gray-50 text-sm text-green-700 lg:h-6 lg:w-6">
                      4
                    </span>{" "}
                    Done
                  </div>
                </li>
              </ol>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <h4 className="text-xl leading-loose font-semibold text-gray-900">
                Product Listing
              </h4>
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="flex w-full flex-col items-center justify-between gap-4 rounded-2xl bg-white p-6 md:flex-row md:gap-6">
                  <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start md:gap-6">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1715167263.png"
                      alt="Red Lipstick image"
                    />
                    <h5 className="text-center text-lg leading-8 font-medium text-gray-500 md:text-start">
                      Product : <br />
                      <span className="text-xl leading-loose text-gray-900">
                        Red Lipstick
                      </span>
                    </h5>
                  </div>
                  <h5 className="text-lg leading-8 font-medium text-gray-500">
                    Quantity:
                    <span className="text-xl leading-loose text-gray-900">
                      1
                    </span>
                  </h5>
                  <h4 className="text-right text-xl leading-loose font-medium text-gray-900">
                    $15.00
                  </h4>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-4 rounded-2xl bg-white p-6 md:flex-row md:gap-6">
                  <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start md:gap-6">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1715167273.png"
                      alt="Eyeshadows image"
                    />
                    <h5 className="text-center text-lg leading-8 font-medium text-gray-500 md:text-start">
                      Product : <br />
                      <span className="text-xl leading-loose font-medium text-gray-900">
                        Eyeshadows
                      </span>
                    </h5>
                  </div>
                  <h4 className="text-lg leading-8 font-medium text-gray-500">
                    Quantity:
                    <span className="text-xl leading-loose text-gray-900">
                      1
                    </span>
                  </h4>
                  <h4 className="text-right text-xl leading-loose font-medium text-gray-900">
                    $80.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl bg-white p-6">
              <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                Total
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-6 border-b border-gray-200 pb-6">
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Subtotal
                  </h5>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                    $95.00
                  </h4>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h5 className="text-lg leading-8 font-normal text-gray-500">
                    Shipping Charge
                  </h5>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                    $10.00
                  </h4>
                </div>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-6">
                <h4 className="text-xl leading-loose font-semibold text-gray-900">
                  Total
                </h4>
                <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                  $105.00
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
