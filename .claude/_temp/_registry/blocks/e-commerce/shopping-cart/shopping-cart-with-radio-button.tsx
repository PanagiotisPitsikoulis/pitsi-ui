export default function ShoppingCartWithRadioButton() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <h2 className="w-full text-center text-black text-4xl font-bold font-manrope leading-normal pb-8">
          Shopping Cart
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
          <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <h3 className="text-black text-xl font-semibold leading-loose">
                Payment Method
              </h3>
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                <div className="w-full flex xl:gap-10 sm:gap-6 gap-3">
                  <div className="w-full flex items-center">
                    <input
                      id="radio-group-1"
                      type="radio"
                      name="radio-group"
                      className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                      defaultChecked
                    />
                    <label
                      htmlFor="radio-group-1"
                      className="text-black text-base font-medium leading-normal flex items-center cursor-pointer whitespace-nowrap"
                    >
                      <span className="border border-gray-400 rounded-full sm:mr-4 mr-2 w-6 h-6 " />
                      Paypal
                    </label>
                  </div>
                  <div className="w-full flex items-center">
                    <input
                      id="radio-group-2"
                      type="radio"
                      name="radio-group"
                      className="w-full hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                    />
                    <label
                      htmlFor="radio-group-2"
                      className="text-black text-base font-medium leading-normal flex items-center cursor-pointer whitespace-nowrap"
                    >
                      <span className="border border-gray-400 rounded-full sm:mr-4 mr-2 w-6 h-6 " />
                      Credit Card
                    </label>
                  </div>
                  <div className="w-full flex items-center">
                    <input
                      id="radio-group-3"
                      type="radio"
                      name="radio-group"
                      className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                    />
                    <label
                      htmlFor="radio-group-3"
                      className="text-black text-base font-medium leading-normal flex items-center cursor-pointer whitespace-nowrap"
                    >
                      <span className="border border-gray-400 rounded-full sm:mr-4 mr-2 w-6 h-6 " />
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-6 flex">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-0.5 inline-flex">
                      <span className="text-gray-600 text-xs font-medium leading-5">
                        Card Number
                      </span>
                    </div>
                    <input
                      type="text"
                      className="w-full px-3.5 py-2 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none justify-start items-center gap-2 inline-flex placeholder-gray-400 text-gray-900 text-sm font-normal leading-relaxed"
                      placeholder="Enter your card number"
                    />
                  </div>
                  <div className="w-full justify-start items-start gap-4 flex sm:flex-row flex-col">
                    <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <span className="text-gray-600 text-xs font-medium leading-5">
                          Expairy Date
                        </span>
                      </div>
                      <input
                        type="text"
                        className="w-full px-3.5 py-2 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none justify-start items-center gap-2 inline-flex placeholder-gray-400 text-gray-900 text-sm font-normal leading-relaxed"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="justify-start items-center gap-0.5 inline-flex">
                        <span className="text-gray-600 text-xs font-medium leading-5">
                          CVV
                        </span>
                      </div>
                      <input
                        type="text"
                        className="w-full px-3.5 py-2 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none justify-start items-center gap-2 inline-flex placeholder-gray-400 text-gray-900 text-sm font-normal leading-relaxed"
                        placeholder="XXX"
                      />
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <div className="justify-start items-center gap-0.5 inline-flex">
                      <span className="text-gray-600 text-xs font-medium leading-5">
                        Name on Card
                      </span>
                    </div>
                    <input
                      type="text"
                      className="w-full px-3.5 py-2 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 focus:outline-none justify-start items-center gap-2 inline-flex placeholder-gray-400 text-gray-900 text-sm font-normal leading-relaxed"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <button className="w-full px-6 py-3 hover:bg-emerald-800 transition-all duration-700 ease-in-out bg-emerald-900 rounded-xl shadow justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-medium leading-snug">
                    Continue
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <h3 className="text-black text-xl font-semibold leading-loose">
                Order Summary
              </h3>
              <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-3.5 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <h6 className="text-gray-600 text-lg font-normal leading-8">
                    Subtotal:
                  </h6>
                  <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                    $ 350.00
                  </h6>
                </div>
                <div className="w-full justify-between items-center inline-flex">
                  <h6 className="text-gray-600 text-lg font-normal leading-8">
                    Delivery:
                  </h6>
                  <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                    Free
                  </h6>
                </div>
                <div className="w-full pb-4 border-b border-gray-200 justify-between items-center gap-6 inline-flex">
                  <h6 className="text-gray-600 text-lg font-normal leading-8">
                    Tax:
                  </h6>
                  <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                    $ 20.00
                  </h6>
                </div>
                <div className="w-full justify-between items-center inline-flex">
                  <h6 className="text-gray-600 text-lg font-normal leading-8">
                    Total:
                  </h6>
                  <h6 className="text-right text-indigo-600 text-lg font-semibold leading-8">
                    ₹370.00
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
            <h3 className="text-black text-xl font-semibold leading-loose">
              Summary
            </h3>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full justify-between items-center inline-flex md:gap-5 gap-3">
                  <div className="justify-start items-center md:gap-5 gap-3 flex">
                    <img
                      className=" relative rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712050380.png"
                      alt="Levis Jeans image"
                    />
                    <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Levis Men Jeans
                      </h6>
                      <div className="justify-start items-start gap-1.5 inline-flex">
                        <p className="w-[31px] text-gray-500 text-xs font-normal leading-5">
                          Size :
                        </p>
                        <p className="text-black text-xs font-normal leading-5">
                          38
                        </p>
                      </div>
                      <div className="justify-start items-start gap-1.5 inline-flex">
                        <p className="w-[38px] text-gray-500 text-xs font-normal leading-5">
                          Color :
                        </p>
                        <p className="text-black text-xs font-normal leading-5">
                          Blue
                        </p>
                      </div>
                      <button className="justify-start items-center gap-2.5 inline-flex">
                        <input
                          type="text"
                          className="w-[22px] h-[22px] focus:outline-none placeholder-gray-900 px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex text-center text-gray-900 text-sm font-medium leading-snug"
                        />
                      </button>
                    </div>
                  </div>
                  <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                    $120.00
                  </h4>
                </div>
              </div>
              <div className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full justify-between items-center md:gap-5 gap-3 inline-flex">
                  <div className="justify-start items-center md:gap-5 gap-3 flex">
                    <img
                      className=" relative rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712050399.png"
                      alt="Levis Shirt image"
                    />
                    <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Levis Men Shirt
                      </h6>
                      <div className="justify-start items-start gap-1.5 inline-flex">
                        <p className="w-[31px] text-gray-500 text-xs font-normal leading-5">
                          Size :
                        </p>
                        <p className="text-black text-xs font-normal leading-5">
                          XL
                        </p>
                      </div>
                      <div className="justify-start items-start gap-1.5 inline-flex">
                        <p className="w-[38px] text-gray-500 text-xs font-normal leading-5">
                          Color :
                        </p>
                        <p className="text-black text-xs font-normal leading-5">
                          Blue
                        </p>
                      </div>
                      <button className="justify-start items-center gap-2.5 inline-flex">
                        <input
                          type="text"
                          className="w-[22px] h-[22px] focus:outline-none placeholder-gray-900 px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex text-center text-gray-900 text-sm font-medium leading-snug"
                        />
                      </button>
                    </div>
                  </div>
                  <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                    $80.00
                  </h4>
                </div>
              </div>
              <div className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full justify-between items-center md:gap-5 gap-3 inline-flex">
                  <div className="justify-start items-center md:gap-5 gap-3 flex">
                    <img
                      className=" relative rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712050409.png"
                      alt="Puma Shoes image"
                    />
                    <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Puma Men Shoes
                      </h6>
                      <div className="justify-start items-start gap-1.5 inline-flex">
                        <p className="w-[31px] text-gray-500 text-xs font-normal leading-5">
                          Size :
                        </p>
                        <p className="text-black text-xs font-normal leading-5">
                          10
                        </p>
                      </div>
                      <div className="justify-start items-start gap-1.5 inline-flex">
                        <p className="w-[38px] text-gray-500 text-xs font-normal leading-5">
                          Color :
                        </p>
                        <p className="text-black text-xs font-normal leading-5">
                          Red
                        </p>
                      </div>
                      <button className="justify-start items-center gap-2.5 inline-flex">
                        <input
                          type="text"
                          className="w-[22px] h-[22px] focus:outline-none placeholder-gray-900 px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex text-center text-gray-900 text-sm font-medium leading-snug"
                        />
                      </button>
                    </div>
                  </div>
                  <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                    $50.00
                  </h4>
                </div>
              </div>
              <div className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full justify-between items-center md:gap-5 gap-3 inline-flex">
                  <div className="justify-start items-center md:gap-5 gap-3 flex">
                    <img
                      className=" relative rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1712050418.png"
                      alt="Realme Watch image"
                    />
                    <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        Realme Watch
                      </h6>
                      <div className="justify-start items-start gap-1.5 inline-flex">
                        <p className="w-[31px] text-gray-500 text-xs font-normal leading-5">
                          Size :
                        </p>
                        <p className="text-black text-xs font-normal leading-5">
                          08
                        </p>
                      </div>
                      <div className="justify-start items-start gap-1.5 inline-flex">
                        <p className="w-[38px] text-gray-500 text-xs font-normal leading-5">
                          Color :
                        </p>
                        <p className="text-black text-xs font-normal leading-5">
                          Black
                        </p>
                      </div>
                      <button className="justify-start items-center gap-2.5 inline-flex">
                        <input
                          type="text"
                          className="w-[22px] h-[22px] focus:outline-none placeholder-gray-900 px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex text-center text-gray-900 text-sm font-medium leading-snug"
                        />
                      </button>
                    </div>
                  </div>
                  <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                    $100.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
