export default function OrderSummaryWithDynamicAction() {
  return (
    <section className="relative py-24">
      <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
        <div className="grid w-full grid-cols-12 max-md:px-5 md:mx-auto md:max-w-4xl xl:max-w-full">
          <div className="col-span-12 xl:col-span-8 xl:pr-2.5">
            <h2 className="font-manrope mb-8 text-3xl leading-10 font-bold text-black max-xl:mt-8">
              Shopping Cart
            </h2>
            <div className="group relative mb-6 flex items-center justify-between gap-x-8 gap-y-3 transition-all duration-500 max-md:flex-col">
              <div className="smditems-center relative z-10 flex w-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:bg-indigo-50 max-md:pb-10 md:flex-row md:group-hover:mr-14 lg:group-hover:mr-20">
                <div className="w-full max-md:mx-auto md:max-w-[96px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167756.png"
                    alt="Dark Denim Shirt image"
                    className="w-full rounded-lg object-cover max-md:mx-auto max-md:max-w-sm md:max-w-[96px]"
                  />
                </div>
                <div className="grid w-full grid-cols-10">
                  <div className="col-span-12 flex items-center justify-center md:col-span-4 md:justify-start md:pl-3">
                    <div className="data">
                      <h5 className="mb-3 text-xl leading-8 font-medium text-black max-md:text-center">
                        Dark Denim Shirt
                      </h5>
                      <p className="text-lg font-normal text-gray-500 max-md:text-center">
                        #order1234
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 my-2 flex items-center justify-center md:col-span-2 md:my-0">
                    <h5 className="text-center text-xl leading-8 font-medium text-black">
                      Dark Blue
                    </h5>
                  </div>
                  <div className="col-span-12 flex items-center justify-center md:col-span-2">
                    <div className="flex items-center gap-4">
                      <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                      <input
                        type="text"
                        className="h-9 w-9 rounded-full border border-gray-200 bg-white text-center text-sm font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                      />
                      <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    </div>
                  </div>
                  <div className="col-span-12 mt-2 flex items-center justify-center md:col-span-2 md:mt-0">
                    <h5 className="text-center text-xl leading-8 font-medium text-indigo-600">
                      $120.00
                    </h5>
                  </div>
                </div>
              </div>
              <button className="group relative z-0 rounded-full border-gray-200 p-2 transition-all duration-500 group-hover:z-50 hover:border-gray-400 hover:bg-gray-100 max-md:bottom-0 max-md:left-0 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:border lg:p-4"></button>
            </div>
            <div className="group relative mb-6 flex items-center justify-between gap-x-8 gap-y-3 transition-all duration-500 max-md:flex-col">
              <div className="smditems-center relative z-10 flex w-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:bg-indigo-50 max-md:pb-10 md:flex-row md:group-hover:mr-14 lg:group-hover:mr-20">
                <div className="w-full max-md:mx-auto md:max-w-[96px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167771.png"
                    alt="Denim Trendy Jacket image"
                    className="w-full rounded-lg object-cover max-md:mx-auto max-md:max-w-sm md:max-w-[96px]"
                  />
                </div>
                <div className="grid w-full grid-cols-10">
                  <div className="col-span-12 flex items-center justify-center md:col-span-4 md:justify-start md:pl-3">
                    <div className="data">
                      <h5 className="mb-3 text-xl leading-8 font-medium text-black max-md:text-center">
                        Denim Trendy Jacket
                      </h5>
                      <p className="text-lg font-normal text-gray-500 max-md:text-center">
                        #order1234
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 my-2 flex items-center justify-center md:col-span-2 md:my-0">
                    <h5 className="text-center text-xl leading-8 font-medium text-black">
                      Sky Blue
                    </h5>
                  </div>
                  <div className="col-span-12 flex items-center justify-center md:col-span-2">
                    <div className="flex items-center gap-4">
                      <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                      <input
                        type="text"
                        className="h-9 w-9 rounded-full border border-gray-200 bg-white text-center text-sm font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                      />
                      <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    </div>
                  </div>
                  <div className="col-span-12 mt-2 flex items-center justify-center md:col-span-2 md:mt-0">
                    <h5 className="text-center text-xl leading-8 font-medium text-indigo-600">
                      $120.00
                    </h5>
                  </div>
                </div>
              </div>
              <button className="group relative z-0 rounded-full border-gray-200 p-2 transition-all duration-500 group-hover:z-50 hover:border-gray-400 hover:bg-gray-100 max-md:bottom-0 max-md:left-0 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:border lg:p-4"></button>
            </div>
            <div className="group relative mb-6 flex items-center justify-between gap-x-8 gap-y-3 transition-all duration-500 max-md:flex-col">
              <div className="smditems-center relative z-10 flex w-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:bg-indigo-50 max-md:pb-10 md:flex-row md:group-hover:mr-14 lg:group-hover:mr-20">
                <div className="w-full max-md:mx-auto md:max-w-[96px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167786.png"
                    alt="Retro Shirt For Women image"
                    className="w-full rounded-lg object-cover max-md:mx-auto max-md:max-w-sm md:max-w-[96px]"
                  />
                </div>
                <div className="grid w-full grid-cols-10">
                  <div className="col-span-12 flex items-center justify-center md:col-span-4 md:justify-start md:pl-3">
                    <div className="data">
                      <h5 className="mb-3 text-xl leading-8 font-medium text-black max-md:text-center">
                        Retro Shirt For Women
                      </h5>
                      <p className="text-lg font-normal text-gray-500 max-md:text-center">
                        #order1234
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 my-2 flex items-center justify-center md:col-span-2 md:my-0">
                    <h5 className="text-center text-xl leading-8 font-medium text-black">
                      Magenta
                    </h5>
                  </div>
                  <div className="col-span-12 flex items-center justify-center md:col-span-2">
                    <div className="flex items-center gap-4">
                      <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                      <input
                        type="text"
                        className="h-9 w-9 rounded-full border border-gray-200 bg-white text-center text-sm font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                      />
                      <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    </div>
                  </div>
                  <div className="col-span-12 mt-2 flex items-center justify-center md:col-span-2 md:mt-0">
                    <h5 className="text-center text-xl leading-8 font-medium text-indigo-600">
                      $220.00
                    </h5>
                  </div>
                </div>
              </div>
              <button className="group relative z-0 rounded-full border-gray-200 p-2 transition-all duration-500 group-hover:z-50 hover:border-gray-400 hover:bg-gray-100 max-md:bottom-0 max-md:left-0 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:border lg:p-4"></button>
            </div>
          </div>
          <div className="col-span-12 max-xl:row-start-1 max-md:w-full xl:col-span-4 xl:pl-5">
            <h2 className="font-manrope mb-8 text-3xl leading-10 font-bold text-black">
              Order Summary
            </h2>
            <div className="rounded-xl bg-gray-50 p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-lg leading-8 font-normal text-gray-400">
                  Sub Total
                </p>
                <p className="text-lg leading-8 font-medium text-gray-900">
                  $440.00
                </p>
              </div>
              <div className="mb-5 flex items-center justify-between">
                <p className="text-lg leading-8 font-normal text-gray-400">
                  Shipping Charge
                </p>
                <p className="text-lg leading-8 font-medium text-gray-900">
                  $40.00
                </p>
              </div>
              <div className="mb-5 flex items-center justify-between">
                <p className="text-lg leading-8 font-normal text-gray-400">
                  GST 18%
                </p>
                <p className="text-lg leading-8 font-medium text-gray-900">
                  $40.00
                </p>
              </div>
              <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-6">
                <p className="text-lg leading-8 font-normal text-gray-400">
                  Coupon Code
                </p>
                <p className="text-lg leading-8 font-medium text-emerald-500">
                  #APPLIED
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                <p className="text-lg leading-8 font-normal text-gray-400">
                  Email
                </p>
                <p className="text-lg leading-8 font-medium text-gray-900">
                  pagedone@email.com
                </p>
              </div>
              <div className="flex items-center justify-between pt-6">
                <p className="text-lg leading-8 font-normal text-gray-400">
                  Total Amount to Pay
                </p>
                <p className="text-lg leading-8 font-medium text-indigo-600">
                  $520.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
