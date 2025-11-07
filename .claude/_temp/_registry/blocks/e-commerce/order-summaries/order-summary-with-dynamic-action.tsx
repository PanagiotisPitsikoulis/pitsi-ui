export default function OrderSummaryWithDynamicAction() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <div className="grid grid-cols-12 w-full max-md:px-5 md:max-w-4xl md:mx-auto xl:max-w-full">
          <div className=" col-span-12 xl:col-span-8 xl:pr-2.5">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black mb-8 max-xl:mt-8">
              Shopping Cart
            </h2>
            <div className="flex items-center max-md:flex-col justify-between gap-x-8 gap-y-3 mb-6 group relative transition-all duration-500">
              <div className="flex flex-col md:flex-row smditems-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl w-full transition-all duration-500 relative z-10 max-md:pb-10 md:group-hover:mr-14 lg:group-hover:mr-20 hover:bg-indigo-50">
                <div className="max-md:mx-auto w-full md:max-w-[96px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167756.png"
                    alt="Dark Denim Shirt image"
                    className="max-md:mx-auto w-full max-md:max-w-sm md:max-w-[96px] rounded-lg object-cover"
                  />
                </div>
                <div className="grid grid-cols-10 w-full">
                  <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start md:pl-3">
                    <div className="data">
                      <h5 className="font-medium text-xl leading-8 text-black mb-3 max-md:text-center">
                        Dark Denim Shirt
                      </h5>
                      <p className="font-normal text-lg text-gray-500 max-md:text-center">
                        #order1234
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-center md:my-0 my-2">
                    <h5 className="font-medium text-xl leading-8 text-black text-center">
                      Dark Blue
                    </h5>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-center">
                    <div className="flex items-center gap-4">
                      <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                      <input
                        type="text"
                        className="w-9 h-9 rounded-full text-center border border-gray-200 bg-white placeholder:text-gray-900 text-gray-900 font-medium text-sm outline-0"
                      />
                      <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-center md:mt-0 mt-2">
                    <h5 className="font-medium text-xl leading-8 text-indigo-600 text-center">
                      $120.00
                    </h5>
                  </div>
                </div>
              </div>
              <button className="relative md:absolute p-2 lg:p-4 rounded-full md:border border-gray-200 group max-md:bottom-0 max-md:left-0  z-0 md:top-1/2 md:right-0 md:-translate-y-1/2 transition-all duration-500 group-hover:z-50 hover:bg-gray-100 hover:border-gray-400 "></button>
            </div>
            <div className="flex items-center max-md:flex-col justify-between gap-x-8 gap-y-3 mb-6 group relative transition-all duration-500">
              <div className="flex flex-col md:flex-row smditems-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl w-full transition-all duration-500 relative z-10 max-md:pb-10 md:group-hover:mr-14 lg:group-hover:mr-20 hover:bg-indigo-50">
                <div className="max-md:mx-auto w-full md:max-w-[96px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167771.png"
                    alt="Denim Trendy Jacket image"
                    className="max-md:mx-auto w-full max-md:max-w-sm md:max-w-[96px] rounded-lg object-cover"
                  />
                </div>
                <div className="grid grid-cols-10 w-full">
                  <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start md:pl-3">
                    <div className="data">
                      <h5 className="font-medium text-xl leading-8 text-black mb-3 max-md:text-center">
                        Denim Trendy Jacket
                      </h5>
                      <p className="font-normal text-lg text-gray-500 max-md:text-center">
                        #order1234
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-center md:my-0 my-2">
                    <h5 className="font-medium text-xl leading-8 text-black text-center">
                      Sky Blue
                    </h5>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-center">
                    <div className="flex items-center gap-4">
                      <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                      <input
                        type="text"
                        className="w-9 h-9 rounded-full text-center border border-gray-200 bg-white placeholder:text-gray-900 text-gray-900 font-medium text-sm outline-0"
                      />
                      <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-center md:mt-0 mt-2">
                    <h5 className="font-medium text-xl leading-8 text-indigo-600 text-center">
                      $120.00
                    </h5>
                  </div>
                </div>
              </div>
              <button className="relative md:absolute p-2 lg:p-4 rounded-full md:border border-gray-200 group max-md:bottom-0 max-md:left-0  z-0 md:top-1/2 md:right-0 md:-translate-y-1/2 transition-all duration-500 group-hover:z-50 hover:bg-gray-100 hover:border-gray-400 "></button>
            </div>
            <div className="flex items-center max-md:flex-col justify-between gap-x-8 gap-y-3 mb-6 group relative transition-all duration-500">
              <div className="flex flex-col md:flex-row smditems-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl w-full transition-all duration-500 relative z-10 max-md:pb-10 md:group-hover:mr-14 lg:group-hover:mr-20 hover:bg-indigo-50">
                <div className="max-md:mx-auto w-full md:max-w-[96px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167786.png"
                    alt="Retro Shirt For Women image"
                    className="max-md:mx-auto w-full max-md:max-w-sm md:max-w-[96px] rounded-lg object-cover"
                  />
                </div>
                <div className="grid grid-cols-10 w-full">
                  <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start md:pl-3">
                    <div className="data">
                      <h5 className="font-medium text-xl leading-8 text-black mb-3 max-md:text-center">
                        Retro Shirt For Women
                      </h5>
                      <p className="font-normal text-lg text-gray-500 max-md:text-center">
                        #order1234
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-center md:my-0 my-2">
                    <h5 className="font-medium text-xl leading-8 text-black text-center">
                      Magenta
                    </h5>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-center">
                    <div className="flex items-center gap-4">
                      <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                      <input
                        type="text"
                        className="w-9 h-9 rounded-full text-center border border-gray-200 bg-white placeholder:text-gray-900 text-gray-900 font-medium text-sm outline-0"
                      />
                      <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-center md:mt-0 mt-2">
                    <h5 className="font-medium text-xl leading-8 text-indigo-600 text-center">
                      $220.00
                    </h5>
                  </div>
                </div>
              </div>
              <button className="relative md:absolute p-2 lg:p-4 rounded-full md:border border-gray-200 group max-md:bottom-0 max-md:left-0  z-0 md:top-1/2 md:right-0 md:-translate-y-1/2 transition-all duration-500 group-hover:z-50 hover:bg-gray-100 hover:border-gray-400 "></button>
            </div>
          </div>
          <div className="max-xl:row-start-1 col-span-12 xl:col-span-4 xl:pl-5 max-md:w-full ">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black mb-8">
              Order Summary
            </h2>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between mb-5">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Sub Total
                </p>
                <p className="font-medium text-lg leading-8 text-gray-900">
                  $440.00
                </p>
              </div>
              <div className="flex items-center justify-between mb-5">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Shipping Charge
                </p>
                <p className="font-medium text-lg leading-8 text-gray-900">
                  $40.00
                </p>
              </div>
              <div className="flex items-center justify-between mb-5">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  GST 18%
                </p>
                <p className="font-medium text-lg leading-8 text-gray-900">
                  $40.00
                </p>
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-6">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Coupon Code
                </p>
                <p className="font-medium text-lg leading-8 text-emerald-500">
                  #APPLIED
                </p>
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 ">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Email
                </p>
                <p className="font-medium text-lg leading-8 text-gray-900">
                  pagedone@email.com
                </p>
              </div>
              <div className="flex items-center justify-between pt-6  ">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Total Amount to Pay
                </p>
                <p className="font-medium text-lg leading-8 text-indigo-600">
                  $520.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
