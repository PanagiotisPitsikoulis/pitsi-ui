export default function OrderSummaryWithBillingForm() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="mb-14">
          <h2 className="w-full text-center text-black text-4xl font-bold font-manrope leading-normal">
            Order Summaries
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex-col justify-center items-center gap-8 flex">
              <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
                <li className="flex w-full relative justify-center text-indigo-600 after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute after:top-3 xl:after:left-24 lg:after:left-24 md:after:left-36 sm:after:left-28 after:left-20">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-6 lg:h-6">
                      1
                    </span>{" "}
                    Account
                  </div>
                </li>
                <li className="flex w-full relative justify-center text-indigo-600 after:content-['']  after:w-full after:h-0.5  after:bg-indigo-200 after:inline-block after:absolute after:top-3 xl:after:left-24 lg:after:left-24 md:after:left-36 sm:after:left-28 after:left-20">
                  <div className="block whitespace-nowrap z-10 w-full text-center">
                    <span className="w-6 h-6 bg-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-6 lg:h-6">
                      2
                    </span>{" "}
                    Shipping
                  </div>
                </li>
                <li className="flex w-full relative justify-center text-gray-500">
                  <div className="block whitespace-nowrap z-10 lg:ml-3">
                    <span className="w-6 h-6 text-indigo-600 border-2 bg-transparent border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-6 lg:h-6">
                      3
                    </span>{" "}
                    Summary
                  </div>
                </li>
              </ol>
            </div>
            <h3 className="w-full text-black text-2xl font-semibold font-manrope leading-9">
              Billing Information
            </h3>
            <div className="w-full flex flex-col gap-6">
              <div className="w-full flex sm:flex-row flex-col gap-6">
                <div className="w-full gap-1.5 flex-col flex">
                  <label className="text-gray-400 text-base font-medium leading-relaxed">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-lg text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none border border-gray-300"
                    placeholder="Christine"
                  />
                </div>
                <div className="w-full gap-1.5 flex-col flex">
                  <label className="text-gray-400 text-base font-medium leading-relaxed">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-lg text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none border border-gray-300"
                    placeholder="Johnson"
                  />
                </div>
              </div>
              <div className="w-full flex sm:flex-row flex-col gap-6">
                <div className="w-full gap-1.5 flex-col flex">
                  <label className="text-gray-400 text-base font-medium leading-relaxed">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-lg text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none border border-gray-300"
                    placeholder="christine@email.com"
                  />
                </div>
                <div className="w-full gap-1.5 flex-col flex">
                  <label className="text-gray-400 text-base font-medium leading-relaxed">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-lg text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none border border-gray-300"
                    placeholder="+1 (987) 654 3210"
                  />
                </div>
              </div>
              <div className="w-full flex sm:flex-row flex-col gap-6">
                <div className="w-full gap-1.5 flex-col flex">
                  <label className="text-gray-400 text-base font-medium leading-relaxed">
                    Address 1
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-lg text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none border border-gray-300"
                    placeholder="Ronald"
                  />
                </div>
                <div className="w-full gap-1.5 flex-col flex">
                  <label className="text-gray-400 text-base font-medium leading-relaxed">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-lg text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none border border-gray-300"
                    placeholder="Richards"
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
          <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full p-6 rounded-xl border border-gray-300 flex-col justify-start items-start gap-6 flex">
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h4 className="text-gray-500 text-xl font-normal leading-loose">
                    Product Price
                  </h4>
                  <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                    $220.00
                  </h4>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h4 className="text-gray-500 text-xl font-normal leading-loose">
                    Shipping Charge
                  </h4>
                  <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                    $40.00
                  </h4>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h4 className="text-gray-500 text-xl font-normal leading-loose">
                    Coupon Code
                  </h4>
                  <h4 className="text-right text-emerald-500 text-xl font-semibold leading-loose">
                    #APPLIED
                  </h4>
                </div>
              </div>
              <div className="w-full justify-between items-start gap-6 inline-flex">
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Total
                </h3>
                <h3 className="text-right text-indigo-600 text-2xl font-bold font-manrope leading-9">
                  $260.00
                </h3>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="w-full p-6 rounded-xl border border-gray-200 justify-start items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715247090.png"
                  alt="White neck shirt image"
                />
                <div className="w-full justify-between items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                  <div className="flex-col justify-start md:items-start items-center gap-2 inline-flex">
                    <h4 className="text-black text-lg font-semibold leading-8">
                      White neck shirt
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Dust Studios
                    </h6>
                    <div className="justify-start items-start gap-4 inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed border-r border-gray-300 pr-4">
                        Size:
                        <span className="text-gray-500">M</span>
                      </h6>
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Qty:
                        <span className="text-gray-500">1</span>
                      </h6>
                    </div>
                  </div>
                  <h5 className="text-right text-indigo-600 text-lg font-semibold leading-8">
                    $120.00
                  </h5>
                </div>
              </div>
              <div className="w-full p-6 rounded-xl border border-gray-200 justify-start items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715247100.png"
                  alt="Sunglasses for Men image"
                />
                <div className="w-full justify-between items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                  <div className="flex-col justify-start md:items-start items-center gap-2 inline-flex">
                    <h4 className="text-black text-lg font-semibold leading-8">
                      Sunglasses for Men
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Black
                    </h6>
                    <div className="justify-start items-start gap-4 inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed border-r border-gray-300 pr-4">
                        Size:
                        <span className="text-gray-500">M</span>
                      </h6>
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Qty:
                        <span className="text-gray-500">1</span>
                      </h6>
                    </div>
                  </div>
                  <h5 className="text-right text-indigo-600 text-lg font-semibold leading-8">
                    $100.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
