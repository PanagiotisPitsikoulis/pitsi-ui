export default function OrderTrackingWithProgressIndication() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <h2 className="font-manrope w-full text-3xl leading-normal font-bold text-gray-900">
            Oder Delivery Details
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="grid w-full grid-cols-1 items-center justify-start gap-6 rounded-xl border border-gray-200 p-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="inline-flex w-full flex-col items-center justify-start gap-1.5 border-b border-gray-200 pb-6 sm:border-r sm:border-b-0 sm:pr-6 sm:pb-0">
                <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                  Order Number
                </h6>
                <div className="text-center">
                  <h5 className="text-lg leading-relaxed font-medium text-black">
                    #2315482546
                    <br />
                    <span className="text-gray-500">2 Items</span>
                  </h5>
                </div>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start gap-1.5 border-b border-gray-200 pb-6 sm:border-r sm:border-b-0 sm:pr-6 sm:pb-0">
                <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                  Estimate Delivery
                </h6>
                <h5 className="text-center text-lg leading-relaxed font-medium text-black">
                  June 20, 2024
                </h5>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start gap-1.5 border-b border-gray-200 pb-6 sm:border-r sm:border-b-0 sm:pr-6 sm:pb-0">
                <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                  Delivery Address
                </h6>
                <h5 className="text-center text-lg leading-relaxed font-medium text-black">
                  {" "}
                  Maninagar, Ahmedabad, Gujarat 380008, India
                </h5>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start gap-1.5">
                <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                  Status
                </h6>
                <h5 className="text-center text-lg leading-relaxed font-medium text-black">
                  On The Way
                </h5>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start">
              <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-tl-2xl rounded-tr-2xl border border-gray-200 p-6">
                <div className="flex w-full flex-col items-start justify-start gap-5 pb-2.5">
                  <div className="flex w-full flex-col items-center justify-start gap-4 sm:flex-row sm:gap-8">
                    <div className="flex w-full flex-col items-center justify-start gap-4 sm:flex-row sm:gap-5">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718348968.png"
                        alt="Cotton Printed Saree image"
                      />
                      <div className="inline-flex w-full flex-col items-center justify-start gap-2 sm:items-start">
                        <h4 className="text-xl leading-8 font-medium text-gray-900">
                          Cotton Printed Saree
                        </h4>
                        <div className="flex flex-col items-center justify-start gap-0.5 sm:items-start">
                          <h6 className="text-base leading-relaxed font-normal text-gray-500">
                            Size: M | Qty: 1
                          </h6>
                          <h6 className="text-base leading-relaxed font-normal text-gray-500">
                            Color: Black
                          </h6>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl leading-8 font-semibold text-gray-900">
                      $80
                    </h4>
                  </div>
                  <div className="flex w-full flex-col items-center justify-start gap-4 sm:flex-row sm:gap-8">
                    <div className="flex w-full flex-col items-center justify-start gap-4 sm:flex-row sm:gap-5">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718348982.png"
                        alt="Cotton Kurta For Boys image"
                      />
                      <div className="inline-flex w-full flex-col items-center justify-start gap-2 sm:items-start">
                        <h4 className="text-xl leading-8 font-medium text-gray-900">
                          Cotton Kurta For Boys
                        </h4>
                        <div className="flex flex-col items-center justify-start gap-0.5 sm:items-start">
                          <h6 className="text-base leading-relaxed font-normal text-gray-500">
                            Size: M | Qty: 1
                          </h6>
                          <h6 className="text-base leading-relaxed font-normal text-gray-500">
                            Color: Magenta
                          </h6>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl leading-8 font-semibold text-gray-900">
                      $80
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-between gap-2 rounded-br-2xl rounded-bl-2xl border-r border-b border-l border-gray-200 p-6 sm:flex-row">
                <h4 className="text-center text-xl leading-8 font-semibold text-orange-500">
                  In Progress
                </h4>
                <h5 className="text-lg leading-relaxed font-semibold text-gray-900">
                  $160
                </h5>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <h4 className="w-full text-xl leading-8 font-semibold text-gray-900">
                Oder Tracking
              </h4>
              <div className="flex w-full flex-col items-center justify-center gap-8">
                <ol className="flex w-full flex-col items-start gap-5 lg:flex-row lg:gap-0">
                  <li className="relative flex w-full justify-start text-sm leading-relaxed font-medium text-gray-500 after:absolute after:top-3 after:left-4 after:inline-block after:w-full after:border after:border-dashed after:bg-green-700 after:content-none sm:font-semibold lg:after:h-0.5 lg:after:content-['']">
                    <div className="z-10 mr-4 block flex flex-col break-all sm:mr-9 xl:w-44">
                      <span className="mb-2 flex h-6 w-6 items-start justify-start rounded-full bg-green-700" />
                      Parcel submitted for processing
                      <span className="text-sm leading-normal font-normal text-gray-500">
                        May 20, 2023
                      </span>
                    </div>
                  </li>
                  <li className="relative flex w-full justify-start text-sm leading-relaxed font-medium text-gray-500 after:absolute after:top-3 after:left-4 after:inline-block after:h-0.5 after:w-full after:border after:border-dashed after:bg-green-700 after:content-none sm:font-semibold lg:after:content-['']">
                    <div className="z-10 mr-4 block flex flex-col break-all sm:mr-9 xl:w-44">
                      <span className="mb-2 flex h-6 w-6 items-start justify-start rounded-full bg-green-700" />
                      Traveling to the destination state
                      <span className="text-sm leading-normal font-normal text-gray-500">
                        May 22, 2023
                      </span>
                    </div>
                  </li>
                  <li className="relative flex w-full justify-start bg-gradient-to-r text-sm leading-relaxed font-medium text-gray-500 after:absolute after:top-3 after:left-4 after:inline-block after:h-0.5 after:w-full after:border after:border-dashed after:bg-green-700 after:to-blue-700 after:content-none sm:font-semibold lg:after:content-['']">
                    <div className="z-10 mr-4 block flex flex-col break-all sm:mr-9 xl:w-44">
                      <span className="mb-2 flex h-6 w-6 items-start justify-start rounded-full bg-green-700" />
                      Delivery arrived in the destination state
                      <span className="text-sm leading-normal font-normal text-gray-500">
                        May 25, 2023
                      </span>
                    </div>
                  </li>
                  <li className="relative flex w-full justify-start text-sm leading-relaxed font-medium text-gray-500 after:absolute after:top-3 after:left-4 after:inline-block after:h-0.5 after:w-full after:border after:border-dashed after:bg-blue-700 after:content-none sm:font-semibold lg:after:content-['']">
                    <div className="z-10 mr-4 block flex flex-col break-all sm:mr-9 xl:w-44">
                      <span className="mb-2 flex h-6 w-6 items-start justify-start rounded-full bg-blue-700" />
                      Delivery arrived in the destination city
                      <span className="text-sm leading-normal font-normal text-gray-500">
                        May 26, 2023
                      </span>
                    </div>
                  </li>
                  <li className="relative flex w-full justify-start text-sm leading-relaxed font-medium text-gray-500 after:absolute after:top-3 after:left-4 after:inline-block after:h-0.5 after:w-full after:border after:border-dashed after:bg-blue-700 after:content-none sm:font-semibold lg:after:content-['']">
                    <div className="z-10 mr-4 block flex flex-col break-all sm:mr-9 xl:w-44">
                      <span className="mb-2 flex h-6 w-6 items-start justify-start rounded-full bg-blue-700" />
                      Ready for dispatch to the destination point
                      <span className="text-sm leading-normal font-normal text-gray-500">
                        May 28, 2023
                      </span>
                    </div>
                  </li>
                  <li className="relative flex w-full justify-start text-sm leading-relaxed font-medium text-gray-500 sm:font-semibold">
                    <div className="z-10 block flex flex-col break-all xl:w-44">
                      <span className="mb-2 flex h-6 w-6 items-start justify-start rounded-full bg-blue-700" />
                      Delivered to your specified location
                      <span className="text-sm leading-normal font-normal text-gray-500">
                        May 28, 2023
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
