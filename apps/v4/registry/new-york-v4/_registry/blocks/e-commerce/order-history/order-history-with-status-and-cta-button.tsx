export default function OrderHistoryWithStatusAndCtaButton() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-7 lg:gap-12">
          <h2 className="font-manrope text-center text-3xl leading-normal font-extrabold text-gray-900 lg:text-left">
            Order History
          </h2>
          <div className="flex w-full flex-col items-center justify-start gap-7 rounded-2xl border border-gray-300 p-3 lg:p-5">
            <div className="flex w-full flex-col items-center justify-start gap-4 border-b border-gray-300 p-2.5 md:flex-row md:gap-8">
              <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-6 md:pb-7">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1715596949.png"
                  alt="Running Shoes image"
                />
                <div className="inline-flex w-full flex-col items-center justify-center gap-3 md:items-start md:justify-start">
                  <div className="flex w-full flex-col items-center justify-center gap-1 md:items-start md:justify-start">
                    <h4 className="text-center text-xl leading-8 font-medium text-gray-900 md:text-start">
                      Men’s Nike Fashion Sneakers Running Shoes - White
                    </h4>
                    <h6 className="text-sm leading-normal font-medium text-gray-900">
                      Order : #25201
                    </h6>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-2.5 sm:flex-row md:justify-start">
                    <div className="flex items-start justify-start">
                      <div className="flex items-center justify-start rounded-full bg-amber-50 py-0.5 pr-3 pl-2.5">
                        <div className="flex items-center justify-start gap-1.5">
                          <span className="text-center text-xs leading-5 font-medium text-amber-600">
                            Processing
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs leading-5 font-medium text-gray-900">
                      Estimated Delivery Tue, May 7 - Mon May 13
                    </p>
                  </div>
                </div>
              </div>
              <button className="group mb-7 flex items-center justify-center rounded-full bg-indigo-50 p-1.5 transition-all duration-700 ease-in-out hover:bg-indigo-600 md:mb-0">
                <span className="px-1.5 text-xs leading-5 font-medium whitespace-nowrap text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  Order Details
                </span>
              </button>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-4 border-b border-gray-300 p-2.5 md:flex-row md:gap-8">
              <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-6 md:pb-7">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1715596960.png"
                  alt="Leather Handbag image"
                />
                <div className="inline-flex w-full flex-col items-center justify-center gap-3 md:items-start md:justify-start">
                  <div className="flex w-full flex-col items-center justify-center gap-1 md:items-start md:justify-start">
                    <h4 className="text-center text-xl leading-8 font-medium text-gray-900 md:text-start">
                      Women’s Stylish Fashion Faux Leather Handbag{" "}
                    </h4>
                    <h6 className="text-sm leading-normal font-medium text-gray-900">
                      Order : #28211
                    </h6>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-2.5 sm:flex-row md:justify-start">
                    <div className="flex items-start justify-start">
                      <div className="flex items-center justify-start rounded-full bg-emerald-50 py-0.5 pr-3 pl-2.5">
                        <div className="flex items-center justify-start gap-1.5">
                          <span className="text-center text-xs leading-5 font-medium text-emerald-600">
                            Delivered
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs leading-5 font-medium text-gray-900">
                      On 14th May, 2023
                    </p>
                  </div>
                </div>
              </div>
              <button className="group mb-7 flex items-center justify-center rounded-full bg-indigo-50 p-1.5 transition-all duration-700 ease-in-out hover:bg-indigo-600 md:mb-0">
                <span className="px-1.5 text-xs leading-5 font-medium whitespace-nowrap text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  Order Details
                </span>
              </button>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-4 p-2.5 md:flex-row md:gap-8">
              <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-6">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1715596971.png"
                  alt="Waterproof watch image"
                />
                <div className="inline-flex w-full flex-col items-center justify-center gap-3 md:items-start md:justify-start">
                  <div className="flex w-full flex-col items-center justify-center gap-1 md:items-start md:justify-start">
                    <h4 className="text-center text-xl leading-8 font-medium text-gray-900 md:text-start">
                      Waterproof Blue Dial &amp; Silver Belt Men's
                      Watch-SIRM921P
                    </h4>
                    <h6 className="text-sm leading-normal font-medium text-gray-900">
                      Order : #32159
                    </h6>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-2.5 sm:flex-row md:justify-start">
                    <div className="flex items-start justify-start">
                      <div className="flex items-center justify-start rounded-full bg-emerald-50 py-0.5 pr-3 pl-2.5">
                        <div className="flex items-center justify-start gap-1.5">
                          <span className="text-center text-xs leading-5 font-medium text-emerald-600">
                            Delivered
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs leading-5 font-medium text-gray-900">
                      On 10th Feb, 2023
                    </p>
                  </div>
                </div>
              </div>
              <button className="group flex items-center justify-center rounded-full bg-indigo-50 p-1.5 transition-all duration-700 ease-in-out hover:bg-indigo-600">
                <span className="px-1.5 text-xs leading-5 font-medium whitespace-nowrap text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                  Order Details
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
