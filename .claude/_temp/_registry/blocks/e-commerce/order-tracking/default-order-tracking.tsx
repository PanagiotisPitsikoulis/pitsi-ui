export default function DefaultOrderTracking() {
  return (
    <section className="py-24 relative bg-gray-100">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <div className="w-full justify-between items-center flex sm:flex-row flex-col gap-3">
            <div className="w-full flex-col justify-center sm:items-start items-center gap-1 inline-flex">
              <h2 className="text-gray-500 text-2xl font-semibold font-manrope leading-9">
                Order
                <span className="text-indigo-600">#125103</span>
              </h2>
              <span className="text-gray-500 text-base font-medium leading-relaxed">
                May 21, 2023
              </span>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6 whitespace-nowrap">
                Print Invoice
              </span>
            </button>
          </div>
          <div className="w-full justify-end items-start gap-8 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full p-8 bg-white rounded-xl flex-col justify-start items-start gap-5 flex">
                <h2 className="w-full text-gray-900 text-2xl font-semibold font-manrope leading-9 pb-5 border-b border-gray-200">
                  Oder Tracking
                </h2>
                <div className="w-full flex-col justify-center items-center">
                  <ol className="flex md:flex-row flex-col md:items-start items-center justify-between w-full md:gap-1 gap-4">
                    <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-36">
                      <div className="w-full mr-1 block z-10 flex flex-col items-center justify-start gap-1">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                          <h5 className="text-center text-gray-900 text-lg font-medium leading-normal">
                            Oder Placed
                          </h5>
                        </div>
                        <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                          20 May, 2024
                        </h6>
                      </div>
                    </li>
                    <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-32">
                      <div className="w-full mr-1 block z-10 flex flex-col items-center justify-start gap-1">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                          <h5 className="text-center text-gray-900 text-lg font-medium leading-normal">
                            Picked
                          </h5>
                        </div>
                        <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                          22 May, 2024
                        </h6>
                      </div>
                    </li>
                    <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-32">
                      <div className="w-full mr-1 block z-10 flex flex-col items-center justify-start gap-1">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                          <h5 className="text-center text-gray-900 text-lg font-medium leading-normal">
                            Packed
                          </h5>
                        </div>
                        <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                          23 May, 2024
                        </h6>
                      </div>
                    </li>
                    <li className="group flex relative justify-start after:content-[''] lg:after:w-11 md:after:w-5 after:w-5 after:h-0.5 md:after:border after:border-dashed md:after:bg-gray-500 after:inline-block after:absolute md:after:top-7 after:top-3 xl:after:left-44 lg:after:left-40 md:after:left-[155px]">
                      <div className="w-full mr-1 block z-10 flex flex-col items-center justify-start gap-1">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                          <h5 className="text-center text-gray-900 text-lg font-medium leading-normal whitespace-nowrap">
                            Oder Shipped
                          </h5>
                        </div>
                        <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                          28 May, 2024
                        </h6>
                      </div>
                    </li>
                    <li className="group flex relative justify-start">
                      <div className="w-full block z-10 flex flex-col items-center justify-start gap-1">
                        <div className="justify-center items-center gap-1.5 inline-flex">
                          <h5 className="text-center text-gray-500 text-lg font-medium leading-normal">
                            Oder Delivered
                          </h5>
                        </div>
                        <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                          2 Jun, 2024
                        </h6>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="w-full p-8 bg-white rounded-xl flex-col justify-start items-start gap-5 flex">
                <h2 className="w-full text-gray-900 text-2xl font-semibold font-manrope leading-9 pb-5 border-b border-gray-200">
                  Order Items
                </h2>
                <div className="w-full flex-col justify-start items-start gap-5 flex pb-5 border-b border-gray-200">
                  <div className="w-full justify-start items-center lg:gap-8 gap-4 grid md:grid-cols-12 grid-cols-1">
                    <div className="md:col-span-8 col-span-12 w-full justify-start items-center lg:gap-5 gap-4 flex md:flex-row flex-col">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718189222.png"
                        alt="Pure Cotton T-Shirt image"
                      />
                      <div className="w-full flex-col justify-start md:items-start items-center gap-3 inline-flex">
                        <h4 className="text-gray-900 text-xl font-medium leading-8">
                          Pure Cotton Regular Fit T-Shirt
                        </h4>
                        <div className="flex-col justify-start md:items-start items-center gap-0.5 flex">
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed whitespace-nowrap">
                            Size: M
                          </h6>
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                            Color: White
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-4 col-span-12 justify-between items-center gap-4 flex md:flex-row flex-col">
                      <h4 className="text-gray-500 text-xl font-semibold leading-8">
                        $40 x 2
                      </h4>
                      <h4 className="text-gray-900 text-xl font-semibold leading-8">
                        $80
                      </h4>
                    </div>
                  </div>
                  <div className="w-full justify-start items-center lg:gap-8 gap-4 grid md:grid-cols-12 grid-cols-1">
                    <div className="md:col-span-8 col-span-12 w-full justify-start items-center lg:gap-5 gap-4 flex md:flex-row flex-col">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718189265.png"
                        alt="Men Stretchable Jeans image"
                      />
                      <div className="w-full flex-col justify-start md:items-start items-center gap-3 inline-flex">
                        <h4 className="text-gray-900 text-xl font-medium leading-8">
                          Men Skinny Fit Stretchable Jeans
                        </h4>
                        <div className="flex-col justify-start md:items-start items-center gap-0.5 flex">
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                            Size: 32
                          </h6>
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                            Color: Blue
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-4 col-span-12 justify-between items-center gap-4 flex md:flex-row flex-col">
                      <h4 className="text-gray-500 text-xl font-semibold leading-8">
                        $52 x 1
                      </h4>
                      <h4 className="text-gray-900 text-xl font-semibold leading-8">
                        $52
                      </h4>
                    </div>
                  </div>
                  <div className="w-full justify-start items-center lg:gap-8 gap-4 grid md:grid-cols-12 grid-cols-1">
                    <div className="md:col-span-8 col-span-12 justify-start items-center lg:gap-5 gap-4 flex md:flex-row flex-col">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718189276.png"
                        alt="Men Cotton Casual Shirt image"
                      />
                      <div className="flex-col justify-start md:items-start items-center gap-3 inline-flex">
                        <h4 className="text-gray-900 text-xl font-medium leading-8">
                          Men Checked Cotton Casual Shirt
                        </h4>
                        <div className="flex-col justify-start md:items-start items-center gap-0.5 flex">
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                            Size: M
                          </h6>
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                            Color: Dark Blue
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-4 col-span-12 justify-between items-center gap-4 flex md:flex-row flex-col">
                      <h4 className="text-gray-500 text-xl font-semibold leading-8">
                        $22 x 1
                      </h4>
                      <h4 className="text-gray-900 text-xl font-semibold leading-8">
                        $22
                      </h4>
                    </div>
                  </div>
                  <div className="w-full justify-start items-center lg:gap-8 gap-4 grid md:grid-cols-12 grid-cols-1 pb-2.5">
                    <div className="md:col-span-8 col-span-12 justify-start items-center lg:gap-5 gap-4 flex md:flex-row flex-col">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718189288.png"
                        alt="Men Colourblocked PU Sneakers image"
                      />
                      <div className="flex-col justify-start md:items-start items-center gap-3 inline-flex">
                        <h4 className="text-gray-900 text-xl font-medium leading-8">
                          Men Colourblocked PU Sneakers
                        </h4>
                        <div className="flex-col justify-start md:items-start items-center gap-0.5 flex">
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                            Size: 38
                          </h6>
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                            Color: Green &amp; Gray
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-4 col-span-12 justify-between items-center gap-4 flex md:flex-row flex-col">
                      <h4 className="text-gray-500 text-xl font-semibold leading-8">
                        $56 x 1
                      </h4>
                      <h4 className="text-gray-900 text-xl font-semibold leading-8">
                        $56
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-5 flex">
                  <div className="w-full pb-1.5 flex-col justify-start items-start gap-4 flex">
                    <div className="w-full justify-between items-start gap-6 inline-flex">
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Subtotal
                      </h6>
                      <h6 className="text-right text-gray-500 text-base font-medium leading-relaxed">
                        $210.00
                      </h6>
                    </div>
                    <div className="w-full justify-between items-start gap-6 inline-flex">
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Shipping Charge
                      </h6>
                      <h6 className="text-right text-gray-500 text-base font-medium leading-relaxed">
                        $10.00
                      </h6>
                    </div>
                    <div className="w-full justify-between items-start gap-6 inline-flex">
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Tax Fee
                      </h6>
                      <h6 className="text-right text-gray-500 text-base font-medium leading-relaxed">
                        $22.00
                      </h6>
                    </div>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-900 text-lg font-semibold leading-relaxed">
                      Total
                    </h5>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      $242.00
                    </h5>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <h6 className="text-right text-gray-900 text-base font-medium leading-relaxed">
                  Order Note:
                </h6>
                <p className="text-gray-500 text-sm font-normal leading-normal">
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
  );
}
