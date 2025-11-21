export default function OrderConfirmationWithImage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-7 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-7 lg:gap-8">
            <div className="flex w-full flex-col items-center justify-between border-b border-gray-200 pb-4 sm:flex-row">
              <h5 className="text-lg leading-relaxed font-medium text-gray-500">
                Oder Id:
                <span className="text-gray-900">#2013560</span>
              </h5>
              <h5 className="text-lg leading-relaxed font-medium text-gray-500">
                Delivery On:
                <span className="text-gray-900"> June 20, 2024</span>
              </h5>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-3 md:items-start">
              <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900 md:text-start">
                Tank you For Your Order! Sarah Davis
              </h2>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-600 md:text-start">
                We got your order! We’ll reach out when it’s on the way. See
                your purchase info below. If you have any questions, feel free
                to contact us.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-7 lg:gap-8">
            <div className="flex w-full flex-col items-center justify-start gap-5 md:flex-row md:gap-6 lg:gap-9">
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1717484503.png"
                alt="XXXL Bean Bag image"
              />
              <div className="inline-flex w-full flex-col items-center justify-center gap-5 md:items-start">
                <div className="flex flex-col items-center justify-center gap-2 md:items-start">
                  <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-gray-900 md:text-start">
                    Solimo Muddha Sofa XXXL Bean Bag Cover In Circle (Grey with
                    Multiple Pillow)
                  </h3>
                  <span className="text-sm leading-relaxed font-normal text-gray-500">
                    Modern Style &amp; Fancy Style, Material: Faux Leather
                  </span>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-2 pr-5">
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                      QTY
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-500">
                      1
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                      Price
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-500">
                      $452.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6">
                    <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                      Shipping
                    </h5>
                    <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-500">
                      $20.00
                    </h5>
                  </div>
                  <div className="inline-flex w-full items-start justify-between gap-6 border-t border-gray-200 pt-2.5">
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
            <div className="flex w-full flex-col items-start justify-center gap-6 rounded-xl border border-gray-100 px-6 py-5">
              <div className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row">
                <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                  <h4 className="text-xl leading-8 font-semibold text-gray-900">
                    Order From
                  </h4>
                  <h6 className="text-base leading-relaxed font-medium text-gray-500">
                    OM Furniture Manufacturing Co.
                    <br />
                    123 Industrial Park Road
                    <br />
                    Building 5, Unit 2
                    <br />
                    Craftsville, TX 75001
                    <br />
                    USA
                  </h6>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
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
              <div className="flex w-full flex-col items-start justify-start gap-7 lg:gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <h4 className="text-xl leading-8 font-semibold text-gray-900">
                    Payment Method
                  </h4>
                  <h6 className="text-base leading-relaxed font-medium text-gray-500">
                    Credit Card (VISA **** **** **** 2304 )
                  </h6>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                  <button className="group flex w-full items-center justify-center rounded-lg border border-indigo-300 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-indigo-700 md:w-fit">
                    <span className="px-1.5 py-px text-sm leading-5 font-medium text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-700">
                      Back to Shopping
                    </span>
                  </button>
                  <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 md:w-fit">
                    <span className="px-1.5 py-1 text-sm leading-4 font-medium text-white">
                      Track your Order
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
