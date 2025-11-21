export default function DefaultOrderTracking() {
  return (
    <section className="relative bg-gray-100 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-12">
          <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">
            <div className="inline-flex w-full flex-col items-center justify-center gap-1 sm:items-start">
              <h2 className="font-manrope text-2xl leading-9 font-semibold text-gray-500">
                Order
                <span className="text-indigo-600">#125103</span>
              </h2>
              <span className="text-base leading-relaxed font-medium text-gray-500">
                May 21, 2023
              </span>
            </div>
            <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
              <span className="px-1.5 text-sm leading-6 font-medium whitespace-nowrap text-white">
                Print Invoice
              </span>
            </button>
          </div>
          <div className="inline-flex w-full items-start justify-end gap-8">
            <div className="inline-flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-5 rounded-xl bg-white p-8">
                <h2 className="font-manrope w-full border-b border-gray-200 pb-5 text-2xl leading-9 font-semibold text-gray-900">
                  Oder Tracking
                </h2>
                <div className="w-full flex-col items-center justify-center">
                  <ol className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start md:gap-1">
                    <li className="group relative flex justify-start after:absolute after:top-3 after:inline-block after:h-0.5 after:w-5 after:border-dashed after:content-[''] md:after:top-7 md:after:left-36 md:after:w-5 md:after:border md:after:bg-gray-500 lg:after:left-40 lg:after:w-11 xl:after:left-44">
                      <div className="z-10 mr-1 block flex w-full flex-col items-center justify-start gap-1">
                        <div className="inline-flex items-center justify-center gap-1.5">
                          <h5 className="text-center text-lg leading-normal font-medium text-gray-900">
                            Oder Placed
                          </h5>
                        </div>
                        <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                          20 May, 2024
                        </h6>
                      </div>
                    </li>
                    <li className="group relative flex justify-start after:absolute after:top-3 after:inline-block after:h-0.5 after:w-5 after:border-dashed after:content-[''] md:after:top-7 md:after:left-32 md:after:w-5 md:after:border md:after:bg-gray-500 lg:after:left-40 lg:after:w-11 xl:after:left-44">
                      <div className="z-10 mr-1 block flex w-full flex-col items-center justify-start gap-1">
                        <div className="inline-flex items-center justify-center gap-1.5">
                          <h5 className="text-center text-lg leading-normal font-medium text-gray-900">
                            Picked
                          </h5>
                        </div>
                        <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                          22 May, 2024
                        </h6>
                      </div>
                    </li>
                    <li className="group relative flex justify-start after:absolute after:top-3 after:inline-block after:h-0.5 after:w-5 after:border-dashed after:content-[''] md:after:top-7 md:after:left-32 md:after:w-5 md:after:border md:after:bg-gray-500 lg:after:left-40 lg:after:w-11 xl:after:left-44">
                      <div className="z-10 mr-1 block flex w-full flex-col items-center justify-start gap-1">
                        <div className="inline-flex items-center justify-center gap-1.5">
                          <h5 className="text-center text-lg leading-normal font-medium text-gray-900">
                            Packed
                          </h5>
                        </div>
                        <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                          23 May, 2024
                        </h6>
                      </div>
                    </li>
                    <li className="group relative flex justify-start after:absolute after:top-3 after:inline-block after:h-0.5 after:w-5 after:border-dashed after:content-[''] md:after:top-7 md:after:left-[155px] md:after:w-5 md:after:border md:after:bg-gray-500 lg:after:left-40 lg:after:w-11 xl:after:left-44">
                      <div className="z-10 mr-1 block flex w-full flex-col items-center justify-start gap-1">
                        <div className="inline-flex items-center justify-center gap-1.5">
                          <h5 className="text-center text-lg leading-normal font-medium whitespace-nowrap text-gray-900">
                            Oder Shipped
                          </h5>
                        </div>
                        <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                          28 May, 2024
                        </h6>
                      </div>
                    </li>
                    <li className="group relative flex justify-start">
                      <div className="z-10 block flex w-full flex-col items-center justify-start gap-1">
                        <div className="inline-flex items-center justify-center gap-1.5">
                          <h5 className="text-center text-lg leading-normal font-medium text-gray-500">
                            Oder Delivered
                          </h5>
                        </div>
                        <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                          2 Jun, 2024
                        </h6>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-5 rounded-xl bg-white p-8">
                <h2 className="font-manrope w-full border-b border-gray-200 pb-5 text-2xl leading-9 font-semibold text-gray-900">
                  Order Items
                </h2>
                <div className="flex w-full flex-col items-start justify-start gap-5 border-b border-gray-200 pb-5">
                  <div className="grid w-full grid-cols-1 items-center justify-start gap-4 md:grid-cols-12 lg:gap-8">
                    <div className="col-span-12 flex w-full flex-col items-center justify-start gap-4 md:col-span-8 md:flex-row lg:gap-5">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718189222.png"
                        alt="Pure Cotton T-Shirt image"
                      />
                      <div className="inline-flex w-full flex-col items-center justify-start gap-3 md:items-start">
                        <h4 className="text-xl leading-8 font-medium text-gray-900">
                          Pure Cotton Regular Fit T-Shirt
                        </h4>
                        <div className="flex flex-col items-center justify-start gap-0.5 md:items-start">
                          <h6 className="text-base leading-relaxed font-normal whitespace-nowrap text-gray-500">
                            Size: M
                          </h6>
                          <h6 className="text-base leading-relaxed font-normal text-gray-500">
                            Color: White
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 flex flex-col items-center justify-between gap-4 md:col-span-4 md:flex-row">
                      <h4 className="text-xl leading-8 font-semibold text-gray-500">
                        $40 x 2
                      </h4>
                      <h4 className="text-xl leading-8 font-semibold text-gray-900">
                        $80
                      </h4>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 items-center justify-start gap-4 md:grid-cols-12 lg:gap-8">
                    <div className="col-span-12 flex w-full flex-col items-center justify-start gap-4 md:col-span-8 md:flex-row lg:gap-5">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718189265.png"
                        alt="Men Stretchable Jeans image"
                      />
                      <div className="inline-flex w-full flex-col items-center justify-start gap-3 md:items-start">
                        <h4 className="text-xl leading-8 font-medium text-gray-900">
                          Men Skinny Fit Stretchable Jeans
                        </h4>
                        <div className="flex flex-col items-center justify-start gap-0.5 md:items-start">
                          <h6 className="text-base leading-relaxed font-normal text-gray-500">
                            Size: 32
                          </h6>
                          <h6 className="text-base leading-relaxed font-normal text-gray-500">
                            Color: Blue
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 flex flex-col items-center justify-between gap-4 md:col-span-4 md:flex-row">
                      <h4 className="text-xl leading-8 font-semibold text-gray-500">
                        $52 x 1
                      </h4>
                      <h4 className="text-xl leading-8 font-semibold text-gray-900">
                        $52
                      </h4>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 items-center justify-start gap-4 md:grid-cols-12 lg:gap-8">
                    <div className="col-span-12 flex flex-col items-center justify-start gap-4 md:col-span-8 md:flex-row lg:gap-5">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718189276.png"
                        alt="Men Cotton Casual Shirt image"
                      />
                      <div className="inline-flex flex-col items-center justify-start gap-3 md:items-start">
                        <h4 className="text-xl leading-8 font-medium text-gray-900">
                          Men Checked Cotton Casual Shirt
                        </h4>
                        <div className="flex flex-col items-center justify-start gap-0.5 md:items-start">
                          <h6 className="text-base leading-relaxed font-normal text-gray-500">
                            Size: M
                          </h6>
                          <h6 className="text-base leading-relaxed font-normal text-gray-500">
                            Color: Dark Blue
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 flex flex-col items-center justify-between gap-4 md:col-span-4 md:flex-row">
                      <h4 className="text-xl leading-8 font-semibold text-gray-500">
                        $22 x 1
                      </h4>
                      <h4 className="text-xl leading-8 font-semibold text-gray-900">
                        $22
                      </h4>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 items-center justify-start gap-4 pb-2.5 md:grid-cols-12 lg:gap-8">
                    <div className="col-span-12 flex flex-col items-center justify-start gap-4 md:col-span-8 md:flex-row lg:gap-5">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718189288.png"
                        alt="Men Colourblocked PU Sneakers image"
                      />
                      <div className="inline-flex flex-col items-center justify-start gap-3 md:items-start">
                        <h4 className="text-xl leading-8 font-medium text-gray-900">
                          Men Colourblocked PU Sneakers
                        </h4>
                        <div className="flex flex-col items-center justify-start gap-0.5 md:items-start">
                          <h6 className="text-base leading-relaxed font-normal text-gray-500">
                            Size: 38
                          </h6>
                          <h6 className="text-base leading-relaxed font-normal text-gray-500">
                            Color: Green &amp; Gray
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 flex flex-col items-center justify-between gap-4 md:col-span-4 md:flex-row">
                      <h4 className="text-xl leading-8 font-semibold text-gray-500">
                        $56 x 1
                      </h4>
                      <h4 className="text-xl leading-8 font-semibold text-gray-900">
                        $56
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex w-full flex-col items-start justify-start gap-4 pb-1.5">
                    <div className="inline-flex w-full items-start justify-between gap-6">
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Subtotal
                      </h6>
                      <h6 className="text-right text-base leading-relaxed font-medium text-gray-500">
                        $210.00
                      </h6>
                    </div>
                    <div className="inline-flex w-full items-start justify-between gap-6">
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Shipping Charge
                      </h6>
                      <h6 className="text-right text-base leading-relaxed font-medium text-gray-500">
                        $10.00
                      </h6>
                    </div>
                    <div className="inline-flex w-full items-start justify-between gap-6">
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Tax Fee
                      </h6>
                      <h6 className="text-right text-base leading-relaxed font-medium text-gray-500">
                        $22.00
                      </h6>
                    </div>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-relaxed font-semibold text-gray-900">
                      Total
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                      $242.00
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <h6 className="text-right text-base leading-relaxed font-medium text-gray-900">
                  Order Note:
                </h6>
                <p className="text-sm leading-normal font-normal text-gray-500">
                  Make sure to ship all the ordered items together by Friday.
                  I've emailed you the details, so please check it an review it.
                  Thank You!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
