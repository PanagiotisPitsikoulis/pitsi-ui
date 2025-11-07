export default function CheckoutPageWithCartSummaryAndPaymentOption() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid w-full grid-cols-1 xl:grid-cols-2">
          <div className="shopping-cart relative">
            <h5 className="font-manrope border-b border-gray-200 pb-8 text-center text-3xl leading-10 font-bold text-black xl:text-left">
              Order Summary
            </h5>
            <div className="pt-2" />
            <div className="mx-auto grid w-full max-w-2xl grid-cols-12 gap-2 border-b border-gray-100 py-6">
              <div className="img-box col-span-12 min-[400px]:col-span-3">
                <img
                  src="https://pagedone.io/asset/uploads/1701162893.png"
                  alt="T-Shirt image"
                  className="rounded-xl object-cover max-lg:mx-auto"
                />
              </div>
              <div className="pro-detail items-s col-span-12 flex h-full w-full max-[400px]:mx-auto max-[400px]:max-w-[284px] min-[400px]:col-span-9 lg:pl-2.5">
                <div className="flex w-full flex-col justify-center gap-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-base font-medium text-black">
                      Red T-Shirt
                    </h5>
                    <h6 className="text-base font-semibold text-indigo-600">
                      $60.00
                    </h6>
                  </div>
                  <p className="text-base font-normal text-gray-500">
                    Size :{" "}
                    <span className="font-medium text-black">&nbsp;M</span>
                  </p>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="py-[1px] text-base font-normal text-gray-500">
                        Color:
                      </span>
                      <div className="flex w-full items-center gap-4"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="rounded-full border border-gray-50/10 bg-white p-1 transition-all duration-500 hover:border-gray-200 hover:bg-gray-50"></button>
                      <input
                        type="text"
                        className="h-7 w-7 rounded-full border border-gray-200 bg-gray-100 text-center text-sm font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                      />
                      <button className="rounded-full border border-gray-50/10 bg-white p-1 transition-all duration-500 hover:border-gray-200 hover:bg-gray-50"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-2xl grid-cols-12 gap-2 border-b border-gray-100 py-6">
              <div className="img-box col-span-12 min-[400px]:col-span-3">
                <img
                  src="https://pagedone.io/asset/uploads/1701162907.png"
                  alt="T-Shirt image"
                  className="rounded-xl object-cover max-lg:mx-auto"
                />
              </div>
              <div className="pro-detail items-s col-span-12 flex h-full w-full max-[400px]:mx-auto max-[400px]:max-w-[284px] min-[400px]:col-span-9 lg:pl-2.5">
                <div className="flex w-full flex-col justify-center gap-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-base font-medium text-black">
                      Green T-Shirt
                    </h5>
                    <h6 className="text-base font-semibold text-indigo-600">
                      $120.00
                    </h6>
                  </div>
                  <p className="text-base font-normal text-gray-500">
                    Size :{" "}
                    <span className="font-medium text-black">&nbsp;M</span>
                  </p>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="py-[1px] text-base font-normal text-gray-500">
                        Color:
                      </span>
                      <div className="flex w-full items-center gap-4"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="rounded-full border border-gray-50/10 bg-white p-1 transition-all duration-500 hover:border-gray-200 hover:bg-gray-50"></button>
                      <input
                        type="text"
                        className="h-7 w-7 rounded-full border border-gray-200 bg-gray-100 text-center text-sm font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                      />
                      <button className="rounded-full border border-gray-50/10 bg-white p-1 transition-all duration-500 hover:border-gray-200 hover:bg-gray-50"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-2xl grid-cols-12 gap-2 py-6">
              <div className="img-box col-span-12 min-[400px]:col-span-3">
                <img
                  src="https://pagedone.io/asset/uploads/1701162921.png"
                  alt="T-Shirt image"
                  className="rounded-xl object-cover max-lg:mx-auto"
                />
              </div>
              <div className="pro-detail items-s col-span-12 flex h-full w-full max-[400px]:mx-auto max-[400px]:max-w-[284px] min-[400px]:col-span-9 lg:pl-2.5">
                <div className="flex w-full flex-col justify-center gap-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-base font-medium text-black">
                      Red T-Shirt
                    </h5>
                    <h6 className="text-base font-semibold text-indigo-600">
                      $60.00
                    </h6>
                  </div>
                  <p className="text-base font-normal text-gray-500">
                    Size :{" "}
                    <span className="font-medium text-black">&nbsp;M</span>
                  </p>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="py-[1px] text-base font-normal text-gray-500">
                        Color:
                      </span>
                      <div className="flex w-full items-center gap-4"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="rounded-full border border-gray-50/10 bg-white p-1 transition-all duration-500 hover:border-gray-200 hover:bg-gray-50"></button>
                      <input
                        type="text"
                        className="h-7 w-7 rounded-full border border-gray-200 bg-gray-100 text-center text-sm font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                      />
                      <button className="rounded-full border border-gray-50/10 bg-white p-1 transition-all duration-500 hover:border-gray-200 hover:bg-gray-50"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 pt-2" />
            <div className="flex items-center pt-8">
              <button className="group mx-auto flex w-full max-w-2xl items-center justify-center gap-2 rounded-xl border border-black bg-black px-7 py-4 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-black/80">
                Add Coupon Code
              </button>
            </div>
          </div>
          <div className="order-summary mx-auto w-full max-w-2xl max-xl:mt-8 xl:pl-16">
            <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-8">
              <h5 className="font-manrope text-xl leading-10 font-bold text-black min-[400px]:text-3xl">
                Shopping Cart
              </h5>
              <h5 className="font-manrope text-xl leading-8 font-bold text-gray-600">
                3 Items
              </h5>
            </div>
            <div className="mb-6 flex w-full flex-col items-center gap-4 rounded-xl border border-gray-200 p-5">
              <div className="flex w-full items-center justify-between">
                <span className="text-lg leading-8 font-normal text-gray-400">
                  Subtotal:
                </span>
                <p className="text-lg font-semibold text-gray-900">$360.00</p>
              </div>
              <div className="flex w-full items-center justify-between border-b border-gray-200 pb-4">
                <span className="text-lg leading-8 font-normal text-gray-400">
                  Delivery:
                </span>
                <p className="text-lg font-semibold text-gray-900">$0</p>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <span className="text-lg leading-8 font-normal text-gray-400">
                  Total:
                </span>
                <p className="text-lg font-semibold text-gray-900">$360.00</p>
              </div>
            </div>
            <form>
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative">
                  <label className="mb-1.5 flex items-center text-sm font-medium text-gray-400">
                    City
                  </label>
                  <div className="relative w-full text-gray-400">
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3"></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block h-11 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-base font-normal text-gray-900 placeholder-gray-400 focus-within:outline-gray-400"
                      placeholder="Rajkot"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="mb-1.5 flex items-center text-sm font-medium text-gray-400">
                    Promo Code
                  </label>
                  <div className="relative w-full text-gray-400">
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3"></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block h-11 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-base font-normal text-gray-900 placeholder-gray-400 focus-within:outline-gray-400"
                      placeholder="Nov 01, 2023"
                    />
                  </div>
                </div>
              </div>
              <div className="box mb-6">
                <p className="mb-[6px] py-[1px] text-sm font-medium text-gray-600">
                  Address
                </p>
                <input
                  type="TEXT"
                  placeholder="Raiya telephone near, Rajkot"
                  className="h-[46px] w-full rounded-lg border border-gray-200 px-5 py-[11px] text-base font-normal text-gray-400 focus-within:outline-gray-400"
                />
              </div>
              <div className="payment mb-6">
                <h6 className="mb-3 py-[1px] text-base font-normal text-black">
                  Payment
                </h6>
                <ul className="rounded-lg border border-gray-200">
                  <li className="flex items-center gap-3 border-b border-gray-200 py-3 pl-3">
                    <input id="radio1" type="radio" name="payment-radio" />
                    <label
                      htmlFor="radio1"
                      className="flex cursor-pointer items-center"
                    >
                      <span className="form-radio small-radio text-sm font-normal text-gray-600" />
                      Payment Delivery
                    </label>
                  </li>
                  <li className="flex items-center gap-3 border-b border-gray-200 py-3 pl-3">
                    <input id="radio2" type="radio" name="payment-radio" />
                    <label
                      htmlFor="radio2"
                      className="flex cursor-pointer items-center"
                    >
                      <span className="form-radio small-radio text-sm font-normal text-gray-600" />
                      Card Payment
                    </label>
                  </li>
                  <li className="flex items-center gap-3 border-b border-gray-200 py-3 pl-3">
                    <input id="radio3" type="radio" name="payment-radio" />
                    <label
                      htmlFor="radio3"
                      className="flex cursor-pointer items-center"
                    >
                      <span className="form-radio small-radio text-sm font-normal text-gray-600" />
                      PayPal Payment
                    </label>
                  </li>
                  <li className="flex cursor-pointer items-center gap-3 py-3 pl-3">
                    <span className="text-sm font-normal text-black">
                      Add Credit Card
                    </span>
                  </li>
                </ul>
              </div>
              <div className="box relative mb-4">
                <p className="mb-1.5 text-sm font-medium text-gray-600 capitalize">
                  Phone Number
                </p>
                <div className="flex">
                  <div
                    id="dropdown-button"
                    data-target="dropdown-1"
                    className="dropdown-toggle absolute z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent px-4 py-2.5 text-center text-base font-medium text-gray-900"
                  >
                    IN
                  </div>
                  <div
                    id="dropdown-1"
                    className="absolute top-16 z-10 hidden w-20 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
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
                      className="block h-11 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 pl-16 text-base font-normal text-gray-900 placeholder-gray-400 shadow-xs focus-within:outline-gray-400"
                      placeholder="+91 000 000 0000"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6 grid grid-cols-1 gap-4 border-b border-gray-200 pb-8 sm:grid-cols-2">
                <div className="box relative">
                  <p className="mb-1.5 text-sm font-medium text-gray-400 capitalize">
                    Exp. Date
                  </p>
                  <input
                    type="text"
                    placeholder="12-06-2020"
                    className="h-[46px] w-full rounded-lg border border-gray-200 px-5 py-[11px] pr-12 text-base font-normal text-gray-400 focus-within:outline-gray-400"
                  />
                </div>
                <div className="box">
                  <p className="mb-1.5 text-sm font-medium text-gray-400 capitalize">
                    CVV
                  </p>
                  <input
                    type="text"
                    className="h-[46px] w-full rounded-lg border border-gray-200 px-5 py-2.5 text-base font-normal text-gray-400 focus-within:outline-gray-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button className="w-full rounded-xl bg-indigo-50 px-6 py-4 text-center text-lg font-semibold text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                  Cancel
                </button>
                <button className="w-full rounded-xl bg-indigo-600 px-6 py-4 text-center text-lg font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                  Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
