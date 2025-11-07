export default function OrderConfirmationWithStepper() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-7 inline-flex">
          <div className="w-full flex-col justify-center sm:items-start items-center gap-3 flex">
            <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Hello, John Smith
            </h2>
            <p className="text-gray-600 text-lg font-normal leading-relaxed sm:text-start text-center">
              We got your order! We’ll reach out when it’s on the way. See your
              purchase info below. If you have any questions, feel free to
              contact us.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-center lg:gap-10 gap-7 flex">
            <div className="w-full px-6 py-5 rounded-xl border border-gray-100 flex-col justify-center items-start gap-6 flex">
              <div className="w-full flex-col justify-center items-center lg:gap-8 gap-7 lg:flex hidden pb-6 border-b border-gray-200">
                <ol className="flex items-center w-full sm:pb-4">
                  <li className="flex w-full relative justify-start after:content-[''] after:w-full after:h-0.5  after:bg-orange-500 after:inline-block after:absolute after:top-8 xl:after:left-[121px] lg:after:left-32 md:after:left-20 sm:after:left-20 after:left-16">
                    <div className="block whitespace-nowrap z-10 flex flex-col gap-1 mr-5">
                      <div className="text-center">
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Order:
                          <span className="text-gray-900"> Oct 24</span>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="flex w-full relative justify-center after:content-[''] after:w-full after:h-0.5  after:bg-orange-500 after:inline-block after:absolute after:top-8 xl:after:left-[277px] lg:after:left-60 md:after:left-[180px] sm:after:left-20 after:left-16">
                    <div className="block whitespace-nowrap z-10 flex flex-col gap-1 mx-5 h-16">
                      <div className="text-center">
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Shipped:
                          <span className="text-gray-900"> Oct 29</span>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="flex w-full relative justify-end text-black text-base font-semibold leading-relaxed after:content-['']  after:w-full after:h-0.5 after:inline-block after:absolute after:top-4 after:left-4">
                    <div className="block whitespace-nowrap z-10 flex flex-col gap-1 ml-5 h-16">
                      <div className="text-center">
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Delivered:
                          <span className="text-gray-900"> Nov 01</span>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="w-full sm:pb-6 border-b border-gray-200">
                <div className="w-full py-5 justify-start items-center gap-5 flex sm:flex-row flex-col">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1717492758.png"
                    alt="Wireless Portable Bluetooth Speaker image"
                  />
                  <div className="w-full justify-start sm:items-start items-center gap-2.5 flex flex-col">
                    <div className="w-full justify-between sm:items-start items-center flex sm:flex-row flex-col sm:gap-4 gap-1">
                      <h5 className="text-gray-900 text-lg font-semibold leading-relaxed sm:text-start text-center">
                        JBL Flip 5 Wireless Portable Bluetooth Speaker{" "}
                      </h5>
                      <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                        $52.00
                      </h5>
                    </div>
                    <div className="flex-col justify-center sm:items-start items-center gap-1 flex">
                      <span className="text-gray-500 text-sm font-normal leading-normal">
                        Qty : 1
                      </span>
                      <span className="text-gray-500 text-sm font-normal leading-normal">
                        Color: Black
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a className="w-full sm:py-5 sm:justify-start justify-center items-center gap-2 inline-flex">
                <div className="w-[34px] h-[34px] justify-center items-center flex"></div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Track Shipment
                </h5>
              </a>
            </div>
            <div className="w-full px-6 py-5 rounded-xl border border-gray-100 flex-col justify-center items-start gap-6 flex">
              <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col border-b border-gray-200 pb-6">
                <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h4 className="text-gray-900 text-xl font-semibold leading-8">
                      Order Number
                    </h4>
                    <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                      JBL201268450
                    </h6>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h4 className="text-gray-900 text-xl font-semibold leading-8">
                      Order From
                    </h4>
                    <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                      Harman International Industries, Inc.
                      <br />
                      400 Atlantic Street
                      <br />
                      Stamford, CT 06901
                      <br />
                      USA
                    </h6>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h4 className="text-gray-900 text-xl font-semibold leading-8">
                      Payment Method
                    </h4>
                    <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                      Credit Card (VISA **** **** **** 2304 )
                    </h6>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                    <h4 className="text-gray-900 text-xl font-semibold leading-8">
                      Shipping Address
                    </h4>
                    <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                      789 Oak Boulevard
                      <br />
                      Suite 200
                      <br />
                      Metropolis, NY 10001
                      <br />
                      USA
                    </h6>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="w-full pb-1.5 flex-col justify-start items-start gap-4 flex">
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                      Subtotal
                    </h5>
                    <h5 className="text-right text-gray-500 text-lg font-semibold leading-relaxed">
                      $180.00
                    </h5>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                      Shipping Charge
                    </h5>
                    <h5 className="text-right text-gray-500 text-lg font-semibold leading-relaxed">
                      $15.00
                    </h5>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                      Tax Fee
                    </h5>
                    <h5 className="text-right text-gray-500 text-lg font-semibold leading-relaxed">
                      $05.00
                    </h5>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                      Discount
                    </h5>
                    <h5 className="text-right text-gray-500 text-lg font-semibold leading-relaxed">
                      $10.00
                    </h5>
                  </div>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-8">
                    Order Total
                  </h4>
                  <h4 className="text-right text-gray-900 text-xl font-semibold leading-8">
                    $190.00
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
