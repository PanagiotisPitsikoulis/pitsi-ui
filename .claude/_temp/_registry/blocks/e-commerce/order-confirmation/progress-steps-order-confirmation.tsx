export default function ProgressStepsOrderConfirmation() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-start gap-2.5 flex">
            <h2 className="w-full text-center text-black text-3xl font-bold font-manrope leading-normal">
              Order Confirmation
            </h2>
            <h5 className="w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
              Thank you for your order!
            </h5>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full flex-col justify-center items-center gap-8 flex">
              <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
                <li className="flex w-full relative justify-center text-indigo-600 text-base font-semibold leading-relaxed after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute after:top-4 xl:after:left-36 lg:after:left-36 md:after:left-28 sm:after:left-20 after:left-16">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-8 h-8 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-1 text-sm text-white lg:w-8 lg:h-8">
                      1
                    </span>
                    Shipping
                  </div>
                </li>
                <li className="flex w-full relative justify-center text-indigo-600 text-base font-semibold leading-relaxed after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute after:top-4 xl:after:left-36 lg:after:left-36 md:after:left-28 sm:after:left-20 after:left-16">
                  <div className="block whitespace-nowrap z-10 w-full text-center">
                    <span className="w-8 h-8 bg-indigo-600 rounded-full flex justify-center items-center mx-auto mb-1 text-sm text-white lg:w-8 lg:h-8">
                      2
                    </span>
                    Payment
                  </div>
                </li>
                <li className="flex w-full relative justify-center text-indigo-600 text-base font-semibold leading-relaxed after:content-['']  after:w-full after:h-0.5  after:bg-gray-300 after:inline-block after:absolute  after:top-4 xl:after:left-36 lg:after:left-36 md:after:left-28 sm:after:left-20 after:left-16">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-8 h-8 text-white bg-indigo-600 rounded-full flex justify-center items-center mx-auto mb-1 text-sm  lg:w-8 lg:h-8">
                      3
                    </span>
                    Summary
                  </div>
                </li>
                <li className="flex w-full relative justify-center text-black text-base font-semibold leading-relaxed after:content-['']  after:w-full after:h-0.5 after:inline-block after:absolute after:top-4 after:left-4">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-8 h-8 text-indigo-600 bg-indigo-50 rounded-full flex justify-center items-center mx-auto mb-1 text-sm  lg:w-8 lg:h-8">
                      4
                    </span>
                    Confirmation
                  </div>
                </li>
              </ol>
            </div>
            <div className="w-full py-6 border-y border-gray-200 justify-between items-start gap-8 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
              <div className="flex-col justify-start items-start gap-3 inline-flex">
                <h6 className="text-gray-500 text-base font-bold leading-relaxed">
                  Delivery Date
                </h6>
                <h4 className="text-black text-lg font-bold leading-relaxed">
                  Jan 01, 2024
                </h4>
              </div>
              <div className="flex-col justify-start items-start gap-3 inline-flex">
                <h6 className="text-gray-500 text-base font-bold leading-relaxed">
                  Order ID
                </h6>
                <h4 className="text-black text-lg font-bold leading-relaxed">
                  #1023498789
                </h4>
              </div>
              <div className="flex-col justify-start items-start gap-3 inline-flex">
                <h6 className="text-gray-500 text-base font-bold leading-relaxed">
                  Payment Method
                </h6>
                <a className="w-[46px] h-8 bg-white rounded-md border border-gray-200 justify-center items-center inline-flex"></a>
              </div>
              <div className="flex-col justify-start items-start gap-3 inline-flex">
                <h6 className="text-gray-500 text-base font-bold leading-relaxed">
                  Address
                </h6>
                <h4 className="text-black text-lg font-bold leading-relaxed">
                  718 Robbyn Meadow, S...
                </h4>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start flex">
              <div className="w-full hidden lg:grid grid-cols-2 py-6 border border-gray-200 rounded-t-xl">
                <span className="text-center font-normal text-base leading-relaxed text-gray-500">
                  Product
                </span>
                <p className="w-full flex items-center justify-between">
                  <span className="w-full max-w-[200px] text-center font-normal text-base leading-relaxed text-gray-500">
                    Shipping
                  </span>
                  <span className="w-full max-w-[260px] text-center font-normal text-base leading-relaxed text-gray-500">
                    Quantity
                  </span>
                  <span className="w-full max-w-[200px] text-center font-normal text-base leading-relaxed text-gray-500">
                    Total
                  </span>
                </p>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-b border-gray-100 py-6">
                <div className="w-full flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 max-sm:justify-center max-sm:max-w-xl max-xl:mx-auto">
                  <div className="img-box">
                    <img
                      src="https://pagedone.io/asset/uploads/1701162850.png"
                      alt="perfume bottle image"
                      className="w-[140px] rounded-xl object-cover"
                    />
                  </div>
                  <div className="pro-data w-full max-w-sm ">
                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                      Rose Petals Divine
                    </h5>
                    <p className="font-normal text-lg leading-relaxed text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                      Perfumes
                    </p>
                    <h6 className="font-medium text-lg leading-relaxed text-indigo-600 max-[550px]:text-center">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center flex-col min-[550px]:flex-row w-full max-sm:max-w-xl max-xl:mx-auto gap-2">
                  <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                    $15.00
                  </h6>
                  <div className="flex items-center w-fit mx-auto justify-center border border-gray-200 rounded-full">
                    <button className="group w-14 h-14 group rounded-l-full px-4 py-4 border-r border-gray-200 flex items-center justify-center shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"></button>
                    <input
                      type="text"
                      className="focus:outline-none text-gray-900 leading-relaxed font-semibold text-lg h-14 w-[146px] placeholder-gray-900 py-3 text-center bg-transparent"
                    />
                    <button className="group w-14 h-14 group rounded-r-full px-4 py-4 border-l border-gray-200 flex items-center justify-center shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"></button>
                  </div>
                  <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                    $120.00
                  </h6>
                </div>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-b border-gray-100 py-6">
                <div className="w-full flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 max-sm:justify-center max-sm:max-w-xl max-xl:mx-auto">
                  <div className="img-box">
                    <img
                      src="https://pagedone.io/asset/uploads/1701162866.png"
                      alt="Musk Rose Cooper image"
                      className="w-[140px] rounded-xl object-cover"
                    />
                  </div>
                  <div className="pro-data w-full max-w-sm ">
                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                      Musk Rose Cooper
                    </h5>
                    <p className="font-normal text-lg leading-relaxed text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                      Perfumes
                    </p>
                    <h6 className="font-medium text-lg leading-relaxed text-indigo-600 max-[550px]:text-center">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center flex-col min-[550px]:flex-row w-full max-sm:max-w-xl max-xl:mx-auto gap-2">
                  <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                    Free
                  </h6>
                  <div className="flex items-center w-fit mx-auto justify-center border border-gray-200 rounded-full">
                    <button className="group w-14 h-14 group rounded-l-full px-4 py-4 border-r border-gray-200 flex items-center justify-center shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"></button>
                    <input
                      type="text"
                      className="focus:outline-none text-gray-900 leading-relaxed font-semibold text-lg h-14 w-[146px] placeholder-gray-900 py-3 text-center bg-transparent"
                    />
                    <button className="group w-14 h-14 group rounded-r-full px-4 py-4 border-l border-gray-200 flex items-center justify-center shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"></button>
                  </div>
                  <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                    $120.00
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-start gap-8 flex md:flex-row flex-col">
              <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-full justify-between items-start gap-2.5 inline-flex">
                  <h4 className="text-gray-600 text-xl font-medium leading-8">
                    Discount
                  </h4>
                  <h4 className="text-right text-black text-xl font-medium leading-8">
                    $0.00
                  </h4>
                </div>
                <div className="w-full justify-between items-start gap-2.5 inline-flex">
                  <h4 className="text-gray-600 text-xl font-medium leading-8">
                    Delivery
                  </h4>
                  <h4 className="text-right text-black text-xl font-medium leading-8">
                    $20.00
                  </h4>
                </div>
              </div>
              <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-full justify-between items-start gap-2.5 inline-flex">
                  <h4 className="text-gray-600 text-xl font-medium leading-8">
                    Subtotal
                  </h4>
                  <h4 className="text-right text-black text-xl font-medium leading-8">
                    $240.00
                  </h4>
                </div>
                <div className="w-full justify-between items-start gap-2.5 inline-flex">
                  <h4 className="text-gray-600 text-xl font-medium leading-8">
                    Total
                  </h4>
                  <h4 className="text-right text-black text-xl font-medium leading-8">
                    $260.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full justify-center items-start gap-8 flex sm:flex-row flex-col">
              <button className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]  rounded-xl justify-center items-center flex">
                <span className="px-2 py-px text-white text-lg font-semibold leading-relaxed">
                  Back to Shop
                </span>
              </button>
              <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] rounded-xl justify-center items-center flex">
                <span className="px-2 py-px text-white text-lg font-semibold leading-relaxed">
                  Place Order
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
