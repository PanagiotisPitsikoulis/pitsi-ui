export default function OrderConfirmationWithStepper() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-7 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:items-start">
            <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
              Hello, John Smith
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-600 sm:text-start">
              We got your order! We’ll reach out when it’s on the way. See your
              purchase info below. If you have any questions, feel free to
              contact us.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-7 lg:gap-10">
            <div className="flex w-full flex-col items-start justify-center gap-6 rounded-xl border border-gray-100 px-6 py-5">
              <div className="hidden w-full flex-col items-center justify-center gap-7 border-b border-gray-200 pb-6 lg:flex lg:gap-8">
                <ol className="flex w-full items-center sm:pb-4">
                  <li className="relative flex w-full justify-start after:absolute after:top-8 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-orange-500 after:content-[''] sm:after:left-20 md:after:left-20 lg:after:left-32 xl:after:left-[121px]">
                    <div className="z-10 mr-5 block flex flex-col gap-1 whitespace-nowrap">
                      <div className="text-center">
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Order:
                          <span className="text-gray-900"> Oct 24</span>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="relative flex w-full justify-center after:absolute after:top-8 after:left-16 after:inline-block after:h-0.5 after:w-full after:bg-orange-500 after:content-[''] sm:after:left-20 md:after:left-[180px] lg:after:left-60 xl:after:left-[277px]">
                    <div className="z-10 mx-5 block flex h-16 flex-col gap-1 whitespace-nowrap">
                      <div className="text-center">
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Shipped:
                          <span className="text-gray-900"> Oct 29</span>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="relative flex w-full justify-end text-base leading-relaxed font-semibold text-black after:absolute after:top-4 after:left-4 after:inline-block after:h-0.5 after:w-full after:content-['']">
                    <div className="z-10 ml-5 block flex h-16 flex-col gap-1 whitespace-nowrap">
                      <div className="text-center">
                        <h6 className="text-base leading-relaxed font-normal text-gray-500">
                          Delivered:
                          <span className="text-gray-900"> Nov 01</span>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="w-full border-b border-gray-200 sm:pb-6">
                <div className="flex w-full flex-col items-center justify-start gap-5 py-5 sm:flex-row">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1717492758.png"
                    alt="Wireless Portable Bluetooth Speaker image"
                  />
                  <div className="flex w-full flex-col items-center justify-start gap-2.5 sm:items-start">
                    <div className="flex w-full flex-col items-center justify-between gap-1 sm:flex-row sm:items-start sm:gap-4">
                      <h5 className="text-center text-lg leading-relaxed font-semibold text-gray-900 sm:text-start">
                        JBL Flip 5 Wireless Portable Bluetooth Speaker{" "}
                      </h5>
                      <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                        $52.00
                      </h5>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 sm:items-start">
                      <span className="text-sm leading-normal font-normal text-gray-500">
                        Qty : 1
                      </span>
                      <span className="text-sm leading-normal font-normal text-gray-500">
                        Color: Black
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a className="inline-flex w-full items-center justify-center gap-2 sm:justify-start sm:py-5">
                <div className="flex h-[34px] w-[34px] items-center justify-center"></div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Track Shipment
                </h5>
              </a>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-6 rounded-xl border border-gray-100 px-6 py-5">
              <div className="flex w-full flex-col items-start justify-start gap-5 border-b border-gray-200 pb-6 sm:flex-row">
                <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h4 className="text-xl leading-8 font-semibold text-gray-900">
                      Order Number
                    </h4>
                    <h6 className="text-base leading-relaxed font-medium text-gray-500">
                      JBL201268450
                    </h6>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h4 className="text-xl leading-8 font-semibold text-gray-900">
                      Order From
                    </h4>
                    <h6 className="text-base leading-relaxed font-medium text-gray-500">
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
                <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h4 className="text-xl leading-8 font-semibold text-gray-900">
                      Payment Method
                    </h4>
                    <h6 className="text-base leading-relaxed font-medium text-gray-500">
                      Credit Card (VISA **** **** **** 2304 )
                    </h6>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <h4 className="text-xl leading-8 font-semibold text-gray-900">
                      Shipping Address
                    </h4>
                    <h6 className="text-base leading-relaxed font-medium text-gray-500">
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
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-4 pb-1.5">
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                      Subtotal
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-500">
                      $180.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                      Shipping Charge
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-500">
                      $15.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                      Tax Fee
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-500">
                      $05.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                      Discount
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-500">
                      $10.00
                    </h5>
                  </div>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h4 className="text-xl leading-8 font-semibold text-gray-900">
                    Order Total
                  </h4>
                  <h4 className="text-right text-xl leading-8 font-semibold text-gray-900">
                    $190.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
