export default function OrderSummaryWithBillingForm() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="mb-14">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-black">
            Order Summaries
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex w-full flex-col gap-8">
            <div className="flex w-full flex-col items-center justify-center gap-8">
              <ol className="flex w-full items-center text-xs font-medium text-gray-900 sm:text-base">
                <li className="relative flex w-full justify-center text-indigo-600 after:absolute after:top-3 after:left-20 after:inline-block after:h-0.5 after:w-full after:bg-indigo-600 after:content-[''] sm:after:left-28 md:after:left-36 lg:after:left-24 xl:after:left-24">
                  <div className="z-10 block whitespace-nowrap">
                    <span className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-transparent bg-indigo-600 text-sm text-white lg:h-6 lg:w-6">
                      1
                    </span>{" "}
                    Account
                  </div>
                </li>
                <li className="relative flex w-full justify-center text-indigo-600 after:absolute after:top-3 after:left-20 after:inline-block after:h-0.5 after:w-full after:bg-indigo-200 after:content-[''] sm:after:left-28 md:after:left-36 lg:after:left-24 xl:after:left-24">
                  <div className="z-10 block w-full text-center whitespace-nowrap">
                    <span className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-sm text-white lg:h-6 lg:w-6">
                      2
                    </span>{" "}
                    Shipping
                  </div>
                </li>
                <li className="relative flex w-full justify-center text-gray-500">
                  <div className="z-10 block whitespace-nowrap lg:ml-3">
                    <span className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-600 bg-transparent text-sm text-indigo-600 lg:h-6 lg:w-6">
                      3
                    </span>{" "}
                    Summary
                  </div>
                </li>
              </ol>
            </div>
            <h3 className="font-manrope w-full text-2xl leading-9 font-semibold text-black">
              Billing Information
            </h3>
            <div className="flex w-full flex-col gap-6">
              <div className="flex w-full flex-col gap-6 sm:flex-row">
                <div className="flex w-full flex-col gap-1.5">
                  <label className="text-base leading-relaxed font-medium text-gray-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Christine"
                  />
                </div>
                <div className="flex w-full flex-col gap-1.5">
                  <label className="text-base leading-relaxed font-medium text-gray-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Johnson"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-6 sm:flex-row">
                <div className="flex w-full flex-col gap-1.5">
                  <label className="text-base leading-relaxed font-medium text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="christine@email.com"
                  />
                </div>
                <div className="flex w-full flex-col gap-1.5">
                  <label className="text-base leading-relaxed font-medium text-gray-400">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="+1 (987) 654 3210"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-6 sm:flex-row">
                <div className="flex w-full flex-col gap-1.5">
                  <label className="text-base leading-relaxed font-medium text-gray-400">
                    Address 1
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Ronald"
                  />
                </div>
                <div className="flex w-full flex-col gap-1.5">
                  <label className="text-base leading-relaxed font-medium text-gray-400">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Richards"
                  />
                </div>
              </div>
            </div>
            <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
              <span className="px-2 py-px text-center text-base leading-relaxed font-semibold text-white">
                Comfirm
              </span>
            </button>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl border border-gray-300 p-6">
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h4 className="text-xl leading-loose font-normal text-gray-500">
                    Product Price
                  </h4>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                    $220.00
                  </h4>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h4 className="text-xl leading-loose font-normal text-gray-500">
                    Shipping Charge
                  </h4>
                  <h4 className="text-right text-xl leading-loose font-semibold text-gray-900">
                    $40.00
                  </h4>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h4 className="text-xl leading-loose font-normal text-gray-500">
                    Coupon Code
                  </h4>
                  <h4 className="text-right text-xl leading-loose font-semibold text-emerald-500">
                    #APPLIED
                  </h4>
                </div>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-6">
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                  Total
                </h3>
                <h3 className="font-manrope text-right text-2xl leading-9 font-bold text-indigo-600">
                  $260.00
                </h3>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <div className="flex w-full flex-col items-center justify-start gap-4 rounded-xl border border-gray-200 p-6 md:flex-row md:gap-6">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715247090.png"
                  alt="White neck shirt image"
                />
                <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
                  <div className="inline-flex flex-col items-center justify-start gap-2 md:items-start">
                    <h4 className="text-lg leading-8 font-semibold text-black">
                      White neck shirt
                    </h4>
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Dust Studios
                    </h6>
                    <div className="inline-flex items-start justify-start gap-4">
                      <h6 className="border-r border-gray-300 pr-4 text-base leading-relaxed font-medium text-black">
                        Size:
                        <span className="text-gray-500">M</span>
                      </h6>
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Qty:
                        <span className="text-gray-500">1</span>
                      </h6>
                    </div>
                  </div>
                  <h5 className="text-right text-lg leading-8 font-semibold text-indigo-600">
                    $120.00
                  </h5>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-4 rounded-xl border border-gray-200 p-6 md:flex-row md:gap-6">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715247100.png"
                  alt="Sunglasses for Men image"
                />
                <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
                  <div className="inline-flex flex-col items-center justify-start gap-2 md:items-start">
                    <h4 className="text-lg leading-8 font-semibold text-black">
                      Sunglasses for Men
                    </h4>
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      Black
                    </h6>
                    <div className="inline-flex items-start justify-start gap-4">
                      <h6 className="border-r border-gray-300 pr-4 text-base leading-relaxed font-medium text-black">
                        Size:
                        <span className="text-gray-500">M</span>
                      </h6>
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        Qty:
                        <span className="text-gray-500">1</span>
                      </h6>
                    </div>
                  </div>
                  <h5 className="text-right text-lg leading-8 font-semibold text-indigo-600">
                    $100.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
