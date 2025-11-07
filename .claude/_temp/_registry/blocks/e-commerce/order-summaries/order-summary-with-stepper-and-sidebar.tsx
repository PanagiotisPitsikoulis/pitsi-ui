export default function OrderSummaryWithStepperAndSidebar() {
  return (
    <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-100">
      <div className="w-full max-w-7xl  mx-auto relative z-10">
        <div className="flex justify-center lg:flex-row flex-col">
          <div className="lg:pr-8 pt-14 pb-8 lg:py-24 w-full lg:w-[472px] bg-white flex-col justify-start items-end gap-11 inline-flex px-4 md:px-6">
            <div className="w-full justify-between items-center inline-flex">
              <div className="w-full justify-start items-center xl:gap-5 lg:gap-4 gap-5 flex">
                <div className="justify-start items-start flex">
                  <img
                    src="https://pagedone.io/asset/uploads/1715162710.png"
                    alt="Avtar image"
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-loose">
                    Kevin Patel
                  </h4>
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    kevin.patel1@gmail.com
                  </h6>
                </div>
              </div>
              <button className="p-1 hover:bg-emerald-50 transition-all duration-700 ease-in-out"></button>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full rounded-xl flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-loose">
                    Payment Method
                  </h4>
                  <h5 className="text-right text-emerald-700 text-lg font-semibold leading-8 cursor-pointer">
                    Edit
                  </h5>
                </div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                  <button className="w-[46px] h-8 rounded-md border border-gray-100 flex items-center justify-center"></button>
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    Apple Pay
                  </h6>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-6 flex border-y border-gray-200 py-8">
                <div className="w-full justify-between items-center inline-flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-loose">
                    Shipping Address
                  </h4>
                  <h5 className="text-right text-emerald-700 text-lg font-semibold leading-8 cursor-pointer">
                    Edit
                  </h5>
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    123 Elm Street
                    <br />
                    Anytown, USA 12345
                    <br />
                    United States
                  </h6>
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <a className="p-1 hover:bg-green-50 transition-all duration-700 ease-in-out"></a>
                    <a className="text-green-700 text-base font-medium leading-relaxed">
                      view on map
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-xl flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-loose">
                    Billing Address
                  </h4>
                  <h5 className="text-right text-emerald-700 text-lg font-semibold leading-8 cursor-pointer">
                    Edit
                  </h5>
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <h6 className="text-gray-400 text-base font-medium leading-relaxed">
                    456 Oak Avenue
                    <br />
                    Springfield, USA 67890
                    <br />
                    United States
                  </h6>
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <a className="p-1 hover:bg-green-50 transition-all duration-700 ease-in-out"></a>
                    <a className="text-green-700 text-base font-medium leading-relaxed">
                      view on map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[824px] w-full bg-gray-100 lg:pl-14 md:pl-6 pl-4 lg:py-24 py-10 flex-col justify-start items-start gap-11 inline-flex px-4 md:pr-6">
            <div className="flex-col justify-start items-start gap-3 flex">
              <h4 className="text-black text-xl font-medium leading-loose">
                Order ID : 356925420
              </h4>
              <h5 className="text-gray-500 text-lg font-normal leading-8">
                Thank you. Your order has been Confirmed.
              </h5>
            </div>
            <div className="w-full flex-col justify-center items-center gap-8 flex">
              <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
                <li className="flex w-full relative justify-center text-green-700 after:content-['']  after:w-full after:h-0.5  after:bg-green-700 after:inline-block after:absolute after:top-3 xl:after:left-24 lg:after:left-20 md:after:left-28 sm:after:left-20 after:left-16">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 bg-green-700 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-6 lg:h-6">
                      1
                    </span>{" "}
                    Cart
                  </div>
                </li>
                <li className="flex w-full relative justify-center text-green-700 after:content-['']  after:w-full after:h-0.5  after:bg-gray-300 after:inline-block after:absolute after:top-3 xl:after:left-24 lg:after:left-20 md:after:left-28 sm:after:left-20 after:left-16">
                  <div className="block whitespace-nowrap z-10 w-full text-center">
                    <span className="w-6 h-6 bg-green-700 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-6 lg:h-6">
                      2
                    </span>{" "}
                    Delivery &amp; Payment
                  </div>
                </li>
                <li className="flex w-full relative justify-center text-black after:content-['']  after:w-full after:h-0.5  after:bg-gray-300 after:inline-block after:absolute  after:top-3 xl:after:left-24 lg:after:left-20 md:after:left-28 sm:after:left-20 after:left-16">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 text-green-700 bg-green-50 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-6 lg:h-6">
                      3
                    </span>{" "}
                    Summary
                  </div>
                </li>
                <li className="flex w-full relative justify-center text-gray-500  after:content-['']  after:w-full after:h-0.5 after:inline-block after:absolute after:top-3 after:left-4">
                  <div className="block whitespace-nowrap z-10">
                    <span className="w-6 h-6 text-green-700 bg-gray-50 border-2 border-green-700 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-6 lg:h-6">
                      4
                    </span>{" "}
                    Done
                  </div>
                </li>
              </ol>
            </div>
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <h4 className="text-gray-900 text-xl font-semibold leading-loose">
                Product Listing
              </h4>
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full p-6 bg-white rounded-2xl justify-between items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                  <div className="md:justify-start justify-center items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1715167263.png"
                      alt="Red Lipstick image"
                    />
                    <h5 className="text-gray-500 text-lg font-medium leading-8 md:text-start text-center">
                      Product : <br />
                      <span className="text-gray-900 text-xl leading-loose">
                        Red Lipstick
                      </span>
                    </h5>
                  </div>
                  <h5 className="text-gray-500 text-lg font-medium leading-8">
                    Quantity:
                    <span className="text-gray-900 text-xl leading-loose">
                      1
                    </span>
                  </h5>
                  <h4 className="text-right text-gray-900 text-xl font-medium leading-loose">
                    $15.00
                  </h4>
                </div>
                <div className="w-full p-6 bg-white rounded-2xl justify-between items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                  <div className="md:justify-start justify-center items-center md:gap-6 gap-4 flex md:flex-row flex-col">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1715167273.png"
                      alt="Eyeshadows image"
                    />
                    <h5 className="text-gray-500 text-lg font-medium leading-8 md:text-start text-center">
                      Product : <br />
                      <span className="text-gray-900 text-xl font-medium leading-loose">
                        Eyeshadows
                      </span>
                    </h5>
                  </div>
                  <h4 className="text-gray-500 text-lg font-medium leading-8">
                    Quantity:
                    <span className="text-gray-900 text-xl leading-loose">
                      1
                    </span>
                  </h4>
                  <h4 className="text-right text-gray-900 text-xl font-medium leading-loose">
                    $80.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full p-6 bg-white rounded-2xl flex-col justify-start items-start gap-8 flex">
              <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                Total
              </h3>
              <div className="w-full pb-6 border-b border-gray-200 flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Subtotal
                  </h5>
                  <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                    $95.00
                  </h4>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-gray-500 text-lg font-normal leading-8">
                    Shipping Charge
                  </h5>
                  <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                    $10.00
                  </h4>
                </div>
              </div>
              <div className="w-full justify-between items-start gap-6 inline-flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-loose">
                  Total
                </h4>
                <h4 className="text-right text-gray-900 text-xl font-semibold leading-loose">
                  $105.00
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
