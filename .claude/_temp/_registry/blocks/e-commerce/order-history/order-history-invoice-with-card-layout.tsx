export default function OrderHistoryInvoiceWithCardLayout() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="flex flex-col lg:gap-12 gap-7">
          <h2 className="w-full text-black text-3xl font-extrabold font-manrope leading-normal text-center lg:text-left">
            Your Orders
          </h2>
          <div className="w-full p-9 rounded-3xl border border-gray-300 justify-start items-start gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full rounded-2xl flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full sm:justify-start justify-center sm:items-start items-center inline-flex">
                <div className="pl-2.5 pr-3 py-0.5 bg-emerald-50 rounded-full justify-start items-center flex">
                  <div className="justify-start items-center gap-1.5 flex">
                    <span className="text-center text-emerald-600 text-xs font-medium leading-5">
                      Delivered
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-4 flex pb-8 border-b border-gray-300">
                <h6 className="w-full text-gray-400 text-base font-semibold leading-relaxed flex flex-col sm:items-start items-center">
                  Order Number
                  <span className="text-black">#2562015893</span>
                </h6>
                <div className="w-full justify-start sm:items-start items-center gap-5 flex sm:flex-row flex-col">
                  <h6 className="w-full flex flex-col text-gray-400 text-base font-semibold leading-relaxed pr-5 sm:border-r border-gray-300 sm:items-start items-center">
                    Order Date
                    <span className="text-black">Jan 18, 2022</span>
                  </h6>
                  <h6 className="w-full flex flex-col text-gray-400 text-base font-semibold leading-relaxed sm:items-start items-center">
                    Delivery Date
                    <span className="text-black">Jan 26, 2022</span>
                  </h6>
                </div>
                <div className="w-full justify-start sm:items-start items-center gap-5 flex sm:flex-row flex-col">
                  <h6 className="w-full flex flex-col text-gray-400 text-base font-semibold leading-relaxed pr-5 sm:border-r border-gray-300 sm:items-start items-center">
                    Ship To
                    <span className="text-black">Rajkot, Gujrat, India</span>
                  </h6>
                  <h6 className="w-full flex flex-col text-gray-400 text-base font-semibold leading-relaxed sm:items-start items-center">
                    Payment Method
                    <span className="text-black">COD</span>
                  </h6>
                </div>
              </div>
              <div className="w-full justify-between items-center flex md:flex-row flex-col gap-2">
                <h4 className="text-gray-400 text-lg font-semibold leading-8">
                  Total Amount :
                  <span className="text-gray-900 text-xl">$48.00</span>
                </h4>
                <div className="justify-end items-center gap-2.5 flex">
                  <a href="#"></a>
                  <h6 className="cursor-pointer text-right text-indigo-600 text-base font-semibold leading-relaxed">
                    Download Invoice
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col border-b border-gray-300 pb-6">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715584363.png"
                  alt="Wooden Chopping Board image"
                />
                <div className="w-full flex-col justify-start items-start md:gap-5 gap-4 inline-flex">
                  <div className="w-full flex-col justify-start md:items-start items-center gap-2.5 flex">
                    <div className="w-full justify-between items-center gap-2.5 flex md:flex-row flex-col">
                      <h4 className="text-black text-xl font-medium leading-8">
                        Wooden Chopping Board
                      </h4>
                      <h4 className="text-right text-black text-xl font-semibold leading-8">
                        $12.00
                      </h4>
                    </div>
                    <div className="flex-col justify-start md:items-start items-center gap-1 flex">
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Qty :<span className="text-gray-900"> 1</span>
                      </h6>
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Size :
                        <span className="text-gray-900"> 20 x 10 inch</span>
                      </h6>
                    </div>
                  </div>
                  <a className="text-indigo-600 text-base font-semibold leading-relaxed md:text-start text-center w-full">
                    Buy it again
                  </a>
                </div>
              </div>
              <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715584375.png"
                  alt="Whiter Coffee Mug image"
                />
                <div className="w-full flex-col justify-start items-start md:gap-5 gap-4 inline-flex">
                  <div className="w-full flex-col justify-start md:items-start items-center gap-2.5 flex">
                    <div className="w-full justify-between items-center gap-2.5 flex md:flex-row flex-col">
                      <h4 className="text-black text-xl font-medium leading-8">
                        Whiter Coffee Mug
                      </h4>
                      <h4 className="text-right text-black text-xl font-semibold leading-8">
                        $36.00
                      </h4>
                    </div>
                    <div className="flex-col justify-start md:items-start items-center gap-1 flex">
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Qty :<span className="text-gray-900"> 1</span>
                      </h6>
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Size :<span className="text-gray-900"> Regular</span>
                      </h6>
                    </div>
                  </div>
                  <a className="text-indigo-600 text-base font-semibold leading-relaxed md:text-start text-center w-full">
                    Buy it again
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-9 rounded-3xl border border-gray-300 justify-start items-start gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full rounded-2xl flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full sm:justify-start justify-center sm:items-start items-center inline-flex">
                <div className="pl-2.5 pr-3 py-0.5 bg-emerald-50 rounded-full justify-start items-center flex">
                  <div className="justify-start items-center gap-1.5 flex">
                    <span className="text-center text-emerald-600 text-xs font-medium leading-5">
                      Delivered
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-4 flex pb-8 border-b border-gray-300">
                <h6 className="w-full text-gray-400 text-base font-semibold leading-relaxed flex flex-col sm:items-start items-center">
                  Order Number
                  <span className="text-black">#2562015893</span>
                </h6>
                <div className="w-full justify-start sm:items-start items-center gap-5 flex sm:flex-row flex-col">
                  <h6 className="w-full flex flex-col text-gray-400 text-base font-semibold leading-relaxed pr-5 sm:border-r border-gray-300 sm:items-start items-center">
                    Order Date
                    <span className="text-black">Jan 18, 2022</span>
                  </h6>
                  <h6 className="w-full flex flex-col text-gray-400 text-base font-semibold leading-relaxed sm:items-start items-center">
                    Delivery Date
                    <span className="text-black">Jan 26, 2022</span>
                  </h6>
                </div>
                <div className="w-full justify-start sm:items-start items-center gap-5 flex sm:flex-row flex-col">
                  <h6 className="w-full flex flex-col text-gray-400 text-base font-semibold leading-relaxed pr-5 sm:border-r border-gray-300 sm:items-start items-center">
                    Ship To
                    <span className="text-black">Rajkot, Gujrat, India</span>
                  </h6>
                  <h6 className="w-full flex flex-col text-gray-400 text-base font-semibold leading-relaxed sm:items-start items-center">
                    Payment Method
                    <span className="text-black">COD</span>
                  </h6>
                </div>
              </div>
              <div className="w-full justify-between items-center flex md:flex-row flex-col gap-2">
                <h4 className="text-gray-400 text-lg font-semibold leading-8">
                  Total Amount :
                  <span className="text-gray-900 text-xl">$170.00</span>
                </h4>
                <div className="justify-end items-center gap-2.5 flex">
                  <a href="#"></a>
                  <h6 className="cursor-pointer text-right text-indigo-600 text-base font-semibold leading-relaxed">
                    Download Invoice
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-center gap-6 inline-flex">
              <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col border-b border-gray-300 pb-6">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715584387.png"
                  alt="Sun Screen & Face Serum image"
                />
                <div className="w-full flex-col justify-start items-start md:gap-5 gap-4 inline-flex">
                  <div className="w-full flex-col justify-start md:items-start items-center gap-2.5 flex">
                    <div className="w-full justify-between items-center gap-2.5 flex md:flex-row flex-col">
                      <h4 className="text-black text-xl font-medium leading-8">
                        Sun Screen &amp; Face Serum
                      </h4>
                      <h4 className="text-right text-black text-xl font-semibold leading-8">
                        $94.00
                      </h4>
                    </div>
                    <div className="flex-col justify-start md:items-start items-center gap-1 flex">
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Qty :<span className="text-gray-900"> 1</span>
                      </h6>
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Size :<span className="text-gray-900"> 150 ml</span>
                      </h6>
                    </div>
                  </div>
                  <a className="text-indigo-600 text-base font-semibold leading-relaxed md:text-start text-center w-full">
                    Buy it again
                  </a>
                </div>
              </div>
              <div className="w-full justify-start items-center md:gap-8 gap-4 flex md:flex-row flex-col">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1715584398.png"
                  alt="Hair Care Product image"
                />
                <div className="w-full flex-col justify-start items-start md:gap-5 gap-4 inline-flex">
                  <div className="w-full flex-col justify-start md:items-start items-center gap-2.5 flex">
                    <div className="w-full justify-between items-center gap-2.5 flex md:flex-row flex-col">
                      <h4 className="text-black text-xl font-medium leading-8">
                        Hair Care Product
                      </h4>
                      <h4 className="text-right text-black text-xl font-semibold leading-8">
                        $76.00
                      </h4>
                    </div>
                    <div className="flex-col justify-start md:items-start items-center gap-1 flex">
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Qty :<span className="text-gray-900"> 1</span>
                      </h6>
                      <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                        Size :<span className="text-gray-900"> 500 ml</span>
                      </h6>
                    </div>
                  </div>
                  <a className="text-indigo-600 text-base font-semibold leading-relaxed md:text-start text-center w-full">
                    Buy it again
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
