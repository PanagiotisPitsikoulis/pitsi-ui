export default function CheckoutPageWithCartSummaryAndPaymentOption() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full mx-auto">
          <div className="shopping-cart relative">
            <h5 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-200  xl:text-left text-center">
              Order Summary
            </h5>
            <div className="pt-2" />
            <div className="grid grid-cols-12 gap-2 w-full max-w-2xl mx-auto py-6 border-b border-gray-100">
              <div className="img-box col-span-12  min-[400px]:col-span-3">
                <img
                  src="https://pagedone.io/asset/uploads/1701162893.png"
                  alt="T-Shirt image"
                  className="max-lg:mx-auto rounded-xl object-cover"
                />
              </div>
              <div className="pro-detail col-span-12 max-[400px]:max-w-[284px] max-[400px]:mx-auto min-[400px]:col-span-9 flex items-s h-full lg:pl-2.5 w-full">
                <div className="flex flex-col gap-3 justify-center w-full">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium text-base text-black">
                      Red T-Shirt
                    </h5>
                    <h6 className="font-semibold text-base text-indigo-600">
                      $60.00
                    </h6>
                  </div>
                  <p className="font-normal text-base text-gray-500">
                    Size :{" "}
                    <span className="text-black font-medium">&nbsp;M</span>
                  </p>
                  <div className="flex items-center justify-between w-full ">
                    <div className="flex items-center gap-3">
                      <span className="font-normal text-base py-[1px] text-gray-500">
                        Color:
                      </span>
                      <div className="flex items-center gap-4 w-full"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="p-1 rounded-full bg-white border border-gray-50/10 transition-all duration-500 hover:bg-gray-50 hover:border-gray-200"></button>
                      <input
                        type="text"
                        className="w-7 h-7 rounded-full text-center border border-gray-200 bg-gray-100 placeholder:text-gray-900 text-gray-900 font-medium text-sm outline-0"
                      />
                      <button className="p-1 rounded-full bg-white border border-gray-50/10 transition-all duration-500 hover:bg-gray-50 hover:border-gray-200"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 w-full max-w-2xl mx-auto py-6 border-b border-gray-100">
              <div className="img-box col-span-12  min-[400px]:col-span-3">
                <img
                  src="https://pagedone.io/asset/uploads/1701162907.png"
                  alt="T-Shirt image"
                  className="max-lg:mx-auto rounded-xl object-cover"
                />
              </div>
              <div className="pro-detail col-span-12 max-[400px]:max-w-[284px] max-[400px]:mx-auto min-[400px]:col-span-9 flex items-s h-full lg:pl-2.5 w-full">
                <div className="flex flex-col gap-3 justify-center w-full">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium text-base text-black">
                      Green T-Shirt
                    </h5>
                    <h6 className="font-semibold text-base text-indigo-600">
                      $120.00
                    </h6>
                  </div>
                  <p className="font-normal text-base text-gray-500">
                    Size :{" "}
                    <span className="text-black font-medium">&nbsp;M</span>
                  </p>
                  <div className="flex items-center justify-between w-full ">
                    <div className="flex items-center gap-3">
                      <span className="font-normal text-base py-[1px] text-gray-500">
                        Color:
                      </span>
                      <div className="flex items-center gap-4 w-full"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="p-1 rounded-full bg-white border border-gray-50/10 transition-all duration-500 hover:bg-gray-50 hover:border-gray-200"></button>
                      <input
                        type="text"
                        className="w-7 h-7 rounded-full text-center border border-gray-200 bg-gray-100 placeholder:text-gray-900 text-gray-900 font-medium text-sm outline-0"
                      />
                      <button className="p-1 rounded-full bg-white border border-gray-50/10 transition-all duration-500 hover:bg-gray-50 hover:border-gray-200"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 w-full max-w-2xl mx-auto py-6 ">
              <div className="img-box col-span-12 min-[400px]:col-span-3">
                <img
                  src="https://pagedone.io/asset/uploads/1701162921.png"
                  alt="T-Shirt image"
                  className="max-lg:mx-auto rounded-xl object-cover"
                />
              </div>
              <div className="pro-detail col-span-12 max-[400px]:max-w-[284px] max-[400px]:mx-auto min-[400px]:col-span-9 flex items-s h-full lg:pl-2.5 w-full">
                <div className="flex flex-col gap-3 justify-center w-full">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium text-base text-black">
                      Red T-Shirt
                    </h5>
                    <h6 className="font-semibold text-base text-indigo-600">
                      $60.00
                    </h6>
                  </div>
                  <p className="font-normal text-base text-gray-500">
                    Size :{" "}
                    <span className="text-black font-medium">&nbsp;M</span>
                  </p>
                  <div className="flex items-center justify-between w-full ">
                    <div className="flex items-center gap-3">
                      <span className="font-normal text-base py-[1px] text-gray-500">
                        Color:
                      </span>
                      <div className="flex items-center gap-4 w-full"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="p-1 rounded-full bg-white border border-gray-50/10 transition-all duration-500 hover:bg-gray-50 hover:border-gray-200"></button>
                      <input
                        type="text"
                        className="w-7 h-7 rounded-full text-center border border-gray-200 bg-gray-100 placeholder:text-gray-900 text-gray-900 font-medium text-sm outline-0"
                      />
                      <button className="p-1 rounded-full bg-white border border-gray-50/10 transition-all duration-500 hover:bg-gray-50 hover:border-gray-200"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2 border-b border-gray-200" />
            <div className="flex items-center pt-8">
              <button className="group w-full max-w-2xl mx-auto py-4 px-7 text-center border border-black flex gap-2 justify-center rounded-xl items-center bg-black text-white font-semibold text-lg transition-all duration-500 hover:bg-black/80">
                Add Coupon Code
              </button>
            </div>
          </div>
          <div className="order-summary max-xl:mt-8 xl:pl-16 w-full max-w-2xl mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-200 mb-8">
              <h5 className="font-manrope font-bold text-xl min-[400px]:text-3xl leading-10 text-black ">
                Shopping Cart
              </h5>
              <h5 className="font-manrope font-bold text-xl leading-8 text-gray-600 ">
                3 Items
              </h5>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 w-full flex items-center gap-4 flex-col mb-6">
              <div className="flex items-center justify-between w-full">
                <span className="font-normal text-lg leading-8 text-gray-400">
                  Subtotal:
                </span>
                <p className="font-semibold text-lg text-gray-900">$360.00</p>
              </div>
              <div className="flex items-center justify-between w-full pb-4 border-b border-gray-200">
                <span className="font-normal text-lg leading-8 text-gray-400">
                  Delivery:
                </span>
                <p className="font-semibold text-lg text-gray-900">$0</p>
              </div>
              <div className="flex items-center justify-between w-full pt-4">
                <span className="font-normal text-lg leading-8 text-gray-400">
                  Total:
                </span>
                <p className="font-semibold text-lg text-gray-900">$360.00</p>
              </div>
            </div>
            <form>
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="flex  items-center mb-1.5 text-gray-400 text-sm font-medium">
                    City
                  </label>
                  <div className="relative w-full text-gray-400 ">
                    <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none "></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full h-11 px-4 py-2.5 text-base font-normal text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus-within:outline-gray-400"
                      placeholder="Rajkot"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="flex  items-center mb-1.5 text-gray-400 text-sm font-medium">
                    Promo Code
                  </label>
                  <div className="relative w-full text-gray-400 ">
                    <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none "></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full h-11 px-4 py-2.5 text-base font-normal focus-within:outline-gray-400 text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 "
                      placeholder="Nov 01, 2023"
                    />
                  </div>
                </div>
              </div>
              <div className="box mb-6">
                <p className="font-medium text-sm py-[1px] text-gray-600 mb-[6px]">
                  Address
                </p>
                <input
                  type="TEXT"
                  placeholder="Raiya telephone near, Rajkot"
                  className="w-full h-[46px] py-[11px] px-5 font-normal text-base text-gray-400 border border-gray-200 rounded-lg focus-within:outline-gray-400"
                />
              </div>
              <div className="payment mb-6">
                <h6 className="font-normal text-base py-[1px] text-black mb-3">
                  Payment
                </h6>
                <ul className="border border-gray-200 rounded-lg">
                  <li className="pl-3 flex items-center gap-3 py-3 border-b border-gray-200">
                    <input id="radio1" type="radio" name="payment-radio" />
                    <label
                      htmlFor="radio1"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="form-radio small-radio font-normal text-sm text-gray-600" />
                      Payment Delivery
                    </label>
                  </li>
                  <li className="pl-3 flex items-center gap-3 py-3 border-b border-gray-200">
                    <input id="radio2" type="radio" name="payment-radio" />
                    <label
                      htmlFor="radio2"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="form-radio small-radio font-normal text-sm text-gray-600" />
                      Card Payment
                    </label>
                  </li>
                  <li className="pl-3 flex items-center gap-3 py-3 border-b border-gray-200">
                    <input id="radio3" type="radio" name="payment-radio" />
                    <label
                      htmlFor="radio3"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="form-radio small-radio font-normal text-sm text-gray-600" />
                      PayPal Payment
                    </label>
                  </li>
                  <li className="py-3 flex items-center pl-3 gap-3 cursor-pointer">
                    <span className="font-normal text-sm text-black">
                      Add Credit Card
                    </span>
                  </li>
                </ul>
              </div>
              <div className="box mb-4 relative">
                <p className="font-medium text-sm text-gray-600 mb-1.5 capitalize">
                  Phone Number
                </p>
                <div className="flex">
                  <div
                    id="dropdown-button"
                    data-target="dropdown-1"
                    className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute  "
                  >
                    IN
                  </div>
                  <div
                    id="dropdown-1"
                    className="absolute top-16 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <a
                          href="javascript:;"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          us
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          in
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          spain
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          France
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="block w-full h-11 py-2.5 px-4 pl-16 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg  focus-within:outline-gray-400  placeholder-gray-400 "
                      placeholder="+91 000 000 0000"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 border-b border-gray-200">
                <div className="box relative">
                  <p className="font-medium text-sm text-gray-400 mb-1.5 capitalize">
                    Exp. Date
                  </p>
                  <input
                    type="text"
                    placeholder="12-06-2020"
                    className="w-full h-[46px] py-[11px] px-5 pr-12 font-normal text-base text-gray-400 border border-gray-200 rounded-lg focus-within:outline-gray-400"
                  />
                </div>
                <div className="box  ">
                  <p className="font-medium text-sm text-gray-400 mb-1.5 capitalize">
                    CVV
                  </p>
                  <input
                    type="text"
                    className="w-full h-[46px] py-2.5 px-5 font-normal text-base text-gray-400 border border-gray-200 rounded-lg focus-within:outline-gray-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <button className="w-full rounded-xl py-4 px-6 text-center font-semibold text-lg text-indigo-600 bg-indigo-50 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                  Cancel
                </button>
                <button className="w-full rounded-xl py-4 px-6 text-center font-semibold text-lg text-white bg-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                  Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
