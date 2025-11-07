export default function OrderConfirmationComponentWithScanner() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-7 inline-flex">
          <div className="w-full flex-col justify-center sm:items-start items-center gap-5 flex">
            <div className="w-full sm:justify-start justify-center items-center gap-3 inline-flex">
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                Your Order is Confirmed!
              </h2>
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1717415639.png"
                alt="Partying Face image"
              />
            </div>
            <div className="w-full flex-col justify-center sm:items-start items-center gap-1 flex">
              <h4 className="text-black text-xl font-semibold leading-8">
                Hello, Kevin Patel
              </h4>
              <p className="text-gray-600 text-base font-normal leading-relaxed sm:text-start text-center">
                Your Order has been Confirmed and will be shipping within next
                two days.
              </p>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-center lg:gap-9 gap-7 flex">
            <div className="w-full p-5 bg-gray-100 rounded-2xl border border-gray-200 justify-between items-center gap-5 flex sm:flex-row flex-col">
              <div className="w-full flex-col justify-start sm:items-start items-center gap-5 inline-flex">
                <div className="w-full flex-col justify-start sm:items-start items-center gap-3 flex">
                  <div className="w-full flex-col justify-start sm:items-start items-center gap-1 flex">
                    <span className="text-gray-500 text-base font-normal leading-relaxed">
                      Estimate Delivery
                    </span>
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Monday, 20 Jan - Tuesday, 21 Jan
                    </h5>
                  </div>
                  <div className="w-full flex-col justify-start sm:items-start items-center gap-1 flex">
                    <span className="text-gray-500 text-base font-normal leading-relaxed">
                      Payment Method
                    </span>
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Credit Card
                    </h5>
                  </div>
                </div>
                <button className="sm:w-fit w-full p-1.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-md shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-xs font-medium leading-5">
                    Track your order
                  </span>
                </button>
              </div>
              <a className="p-2.5 bg-white justify-start items-start flex"></a>
            </div>
            <div className="w-full flex-col justify-start items-center gap-8 flex">
              <div className="w-full flex-col justify-start items-center gap-6 flex">
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                    Order Details
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Order ID:
                    <span className="text-blue-600">#1358499</span>
                  </h6>
                </div>
                <div className="w-full flex-col justify-start items-center gap-4 flex">
                  <div className="w-full p-5 rounded-xl border border-gray-200 justify-start items-center sm:gap-5 gap-3 flex sm:flex-row flex-col">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1717479197.png"
                      alt="Sweet Fragrance image"
                    />
                    <div className="w-full flex-col justify-start items-start sm:gap-2.5 gap-1 inline-flex">
                      <div className="w-full justify-between items-center flex sm:flex-row flex-col gap-1">
                        <h5 className="text-gray-900 text-lg font-semibold leading-relaxed">
                          Sweet Fragrance Woman COCO Perfume
                        </h5>
                        <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                          $52.00
                        </h5>
                      </div>
                      <div className="w-full justify-start sm:items-start items-center gap-1 flex flex-col">
                        <span className="text-gray-500 text-sm font-normal leading-relaxed">
                          QTY : 1
                        </span>
                        <span className="text-gray-500 text-sm font-normal leading-relaxed">
                          Basic Price : $52.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-5 rounded-xl border border-gray-200 justify-start items-center sm:gap-5 gap-3 flex sm:flex-row flex-col">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1717479207.png"
                      alt="Gabrielle Perfume image"
                    />
                    <div className="w-full flex-col justify-start items-start sm:gap-2.5 gap-1 inline-flex">
                      <div className="w-full justify-between items-center flex sm:flex-row flex-col gap-1">
                        <h5 className="text-gray-900 text-lg font-semibold leading-relaxed">
                          Strong Fragrance Man Gabrielle Perfume
                        </h5>
                        <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                          $128.00
                        </h5>
                      </div>
                      <div className="w-full justify-start sm:items-start items-center gap-1 flex flex-col">
                        <span className="text-gray-500 text-sm font-normal leading-relaxed">
                          QTY : 2
                        </span>
                        <span className="text-gray-500 text-sm font-normal leading-relaxed">
                          Basic Price : $64.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-5 rounded-2xl border border-gray-200 flex-col justify-start items-start gap-5 flex">
                <div className="w-full pb-4 border-b border-gray-200 flex-col justify-start items-start gap-4 flex">
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Subtotal
                    </h6>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      $180.00
                    </h5>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Shipping Charge
                    </h6>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      $15.00
                    </h5>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Tax Fee
                    </h6>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      $05.00
                    </h5>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Discount
                    </h6>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                      $10.00
                    </h5>
                  </div>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-indigo-600 text-lg font-semibold leading-relaxed">
                    Total
                  </h5>
                  <h5 className="text-right text-indigo-600 text-lg font-semibold leading-relaxed">
                    $190.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-1 flex">
              <h4 className="text-black text-xl font-semibold leading-8">
                Thank you for Shopping!
              </h4>
              <a className="text-blue-600 hover:text-blue-800 transition-all duration-700 ease-in-out text-lg font-medium leading-relaxed">
                Back to Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
