export default function ShoppingCartWithReceiveOrderDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <h2 className="w-full text-center text-black text-4xl font-bold font-manrope leading-normal pb-8">
          My Shopping Cart
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-4 flex">
              <h3 className="text-black text-xl font-semibold leading-loose">
                Summary
              </h3>
              <div className="w-full flex-col justify-start items-start flex">
                <div className="group w-full pb-5 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-full justify-start items-center gap-5 inline-flex">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712126548.png"
                      alt="Homiboss Chair"
                    />
                    <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                      <div className="w-full justify-between items-start gap-4 inline-flex">
                        <h6 className="text-black text-base font-medium leading-relaxed">
                          Homiboss Chair
                        </h6>
                        <h6 className="text-right text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                          $60.00
                        </h6>
                      </div>
                      <div className="justify-start items-start gap-3 inline-flex">
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Color:
                        </h6>
                        <h6 className="text-black text-base font-medium leading-relaxed">
                          Green
                        </h6>
                      </div>
                      <div className="flex gap-4 items-center">
                        <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                        <input
                          type="text"
                          className="focus:outline-none w-7 h-7 px-2.5 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center inline-flex text-gray-900 text-sm font-medium placeholder-gray-900 leading-snug"
                        />
                        <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group w-full pt-4 pb-5 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                  <div className="w-full justify-start items-center gap-5 inline-flex">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712126556.png"
                      alt="Maharaja Chair image"
                    />
                    <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                      <div className="w-full justify-between items-start gap-4 inline-flex">
                        <h6 className="text-black text-base font-medium leading-relaxed">
                          Maharaja Chair
                        </h6>
                        <h6 className="text-right text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                          $50.00
                        </h6>
                      </div>
                      <div className="w-full justify-start items-start gap-3 inline-flex">
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Color:
                        </h6>
                        <h6 className="text-black text-base font-medium leading-relaxed">
                          Black
                        </h6>
                      </div>
                      <div className="flex gap-4 items-center">
                        <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                        <input
                          type="text"
                          className="focus:outline-none w-7 h-7 px-2.5 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center inline-flex text-gray-900 text-sm font-medium placeholder-gray-900 leading-snug"
                        />
                        <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <h3 className="text-black text-xl font-semibold leading-loose">
                Order Summary
              </h3>
              <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-4 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <h5 className="text-gray-600 text-lg font-normal leading-8">
                    Subtotal:
                  </h5>
                  <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">
                    $ 110.00
                  </h5>
                </div>
                <div className="w-full justify-between items-center gap-6 inline-flex">
                  <h5 className="text-gray-600 text-lg font-normal leading-8">
                    Delivery:
                  </h5>
                  <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">
                    Free
                  </h5>
                </div>
                <div className="w-full pb-4 border-b border-gray-200 justify-between items-center gap-6 inline-flex">
                  <h5 className="text-gray-600 text-lg font-normal leading-8">
                    Tax:
                  </h5>
                  <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">
                    $ 40.00
                  </h5>
                </div>
                <div className="w-full justify-between items-center gap-6 inline-flex">
                  <h5 className="text-gray-600 text-lg font-normal leading-8">
                    Total:
                  </h5>
                  <h5 className="text-right text-indigo-600 text-lg font-semibold leading-8">
                    ₹150.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <h3 className="text-black text-xl font-semibold leading-loose">
                How Would You Like to Receive Your Order
              </h3>
              <div className="w-full justify-start items-start gap-4 flex sm:flex-row flex-col">
                <button className="md:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    Delivery
                  </span>
                </button>
                <button className="group md:w-fit w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border hover:bg-gray-50 hover:border-transparent transition-all duration-700 ease-in-out border-gray-300 justify-center items-center flex">
                  <span className="px-2 text-gray-900 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                    Cash On Delivery
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <h3 className="text-black text-xl font-semibold leading-loose">
                Enter Your Name and Address
              </h3>
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="w-full justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-400 text-sm font-medium leading-snug">
                        First Name
                      </span>
                    </div>
                    <input
                      type="text"
                      className="focus:outline-none placeholder-gray-400 text-gray-900 text-base font-normal leading-relaxed w-full px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="John"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-400 text-sm font-medium leading-snug">
                        Last Name
                      </span>
                    </div>
                    <input
                      type="text"
                      className="focus:outline-none placeholder-gray-400 text-gray-900 text-base font-normal leading-relaxed w-full px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <span className="text-gray-400 text-sm font-medium leading-snug">
                      Address
                    </span>
                  </div>
                  <input
                    type="text"
                    className="focus:outline-none placeholder-gray-400 text-gray-900 text-base font-normal leading-relaxed w-full px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                    placeholder="Alpha Plus, Near Raiya Telephone exchange."
                  />
                </div>
                <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-400 text-sm font-medium leading-snug">
                        City
                      </span>
                    </div>
                    <input
                      type="text"
                      className="focus:outline-none placeholder-gray-400 text-gray-900 text-base font-normal leading-relaxed w-full px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="Rajkot"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-400 text-sm font-medium leading-snug">
                        Post Code
                      </span>
                    </div>
                    <input
                      type="text"
                      className="focus:outline-none placeholder-gray-400 text-gray-900 text-base font-normal leading-relaxed w-full px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                    />
                  </div>
                </div>
                <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-400 text-sm font-medium leading-snug">
                        State
                      </span>
                    </div>
                    <input
                      type="text"
                      className="focus:outline-none placeholder-gray-400 text-gray-900 text-base font-normal leading-relaxed w-full px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="Gujrat"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <span className="text-gray-400 text-sm font-medium leading-snug">
                        Country
                      </span>
                    </div>
                    <input
                      type="text"
                      className="focus:outline-none placeholder-gray-400 text-gray-900 text-base font-normal leading-relaxed w-full px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="India"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
