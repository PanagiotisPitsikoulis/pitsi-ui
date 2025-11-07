export default function OrderTrackingWithProgressIndication() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <h2 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal">
            Oder Delivery Details
          </h2>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full p-6 rounded-xl border border-gray-200 justify-start items-center gap-6 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start items-center gap-1.5 inline-flex sm:pr-6 sm:pb-0 pb-6 sm:border-r sm:border-b-0 border-b border-gray-200">
                <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Order Number
                </h6>
                <div className="text-center">
                  <h5 className="text-black text-lg font-medium leading-relaxed">
                    #2315482546
                    <br />
                    <span className="text-gray-500">2 Items</span>
                  </h5>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-center gap-1.5 inline-flex sm:pr-6 sm:pb-0 pb-6 sm:border-r sm:border-b-0 border-b border-gray-200">
                <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Estimate Delivery
                </h6>
                <h5 className="text-center text-black text-lg font-medium leading-relaxed">
                  June 20, 2024
                </h5>
              </div>
              <div className="w-full flex-col justify-start items-center gap-1.5 inline-flex sm:pr-6 sm:pb-0 pb-6 sm:border-r sm:border-b-0 border-b border-gray-200">
                <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Delivery Address
                </h6>
                <h5 className="text-center text-black text-lg font-medium leading-relaxed">
                  {" "}
                  Maninagar, Ahmedabad, Gujarat 380008, India
                </h5>
              </div>
              <div className="w-full flex-col justify-start items-center gap-1.5 inline-flex">
                <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  Status
                </h6>
                <h5 className="text-center text-black text-lg font-medium leading-relaxed">
                  On The Way
                </h5>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start flex">
              <div className="w-full p-6 rounded-tl-2xl rounded-tr-2xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full pb-2.5 flex-col justify-start items-start gap-5 flex">
                  <div className="w-full justify-start items-center sm:gap-8 gap-4 flex sm:flex-row flex-col">
                    <div className="w-full justify-start items-center sm:gap-5 gap-4 flex sm:flex-row flex-col">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718348968.png"
                        alt="Cotton Printed Saree image"
                      />
                      <div className="w-full flex-col justify-start sm:items-start items-center gap-2 inline-flex">
                        <h4 className="text-gray-900 text-xl font-medium leading-8">
                          Cotton Printed Saree
                        </h4>
                        <div className="flex-col justify-start sm:items-start items-center gap-0.5 flex">
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                            Size: M | Qty: 1
                          </h6>
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                            Color: Black
                          </h6>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-gray-900 text-xl font-semibold leading-8">
                      $80
                    </h4>
                  </div>
                  <div className="w-full justify-start items-center sm:gap-8 gap-4 flex sm:flex-row flex-col">
                    <div className="w-full justify-start items-center sm:gap-5 gap-4 flex sm:flex-row flex-col">
                      <img
                        className="rounded-md object-cover"
                        src="https://pagedone.io/asset/uploads/1718348982.png"
                        alt="Cotton Kurta For Boys image"
                      />
                      <div className="w-full flex-col justify-start sm:items-start items-center gap-2 inline-flex">
                        <h4 className="text-gray-900 text-xl font-medium leading-8">
                          Cotton Kurta For Boys
                        </h4>
                        <div className="flex-col justify-start sm:items-start items-center gap-0.5 flex">
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                            Size: M | Qty: 1
                          </h6>
                          <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                            Color: Magenta
                          </h6>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-gray-900 text-xl font-semibold leading-8">
                      $80
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-full p-6 rounded-bl-2xl rounded-br-2xl border-l border-r border-b border-gray-200 justify-between items-center flex sm:flex-row flex-col gap-2">
                <h4 className="text-center text-orange-500 text-xl font-semibold leading-8">
                  In Progress
                </h4>
                <h5 className="text-gray-900 text-lg font-semibold leading-relaxed">
                  $160
                </h5>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-5 flex">
              <h4 className="w-full text-gray-900 text-xl font-semibold leading-8">
                Oder Tracking
              </h4>
              <div className="w-full flex-col justify-center items-center gap-8 flex">
                <ol className="flex lg:flex-row flex-col items-start w-full gap-5 lg:gap-0">
                  <li className="flex w-full relative justify-start text-gray-500 text-sm sm:font-semibold font-medium leading-relaxed lg:after:content-[''] after:content-none after:w-full lg:after:h-0.5 after:border after:border-dashed after:bg-green-700 after:inline-block after:absolute after:top-3 after:left-4">
                    <div className="xl:w-44 block z-10 flex flex-col break-all sm:mr-9 mr-4">
                      <span className="w-6 h-6 bg-green-700 rounded-full flex justify-start items-start mb-2" />
                      Parcel submitted for processing
                      <span className="text-gray-500 text-sm font-normal leading-normal">
                        May 20, 2023
                      </span>
                    </div>
                  </li>
                  <li className="flex w-full relative justify-start text-gray-500 text-sm sm:font-semibold font-medium leading-relaxed lg:after:content-[''] after:content-none after:w-full after:h-0.5 after:border after:border-dashed after:bg-green-700 after:inline-block after:absolute after:top-3 after:left-4">
                    <div className="xl:w-44 block z-10 flex flex-col break-all sm:mr-9 mr-4">
                      <span className="w-6 h-6 bg-green-700 rounded-full flex justify-start items-start mb-2" />
                      Traveling to the destination state
                      <span className="text-gray-500 text-sm font-normal leading-normal">
                        May 22, 2023
                      </span>
                    </div>
                  </li>
                  <li className="flex w-full relative justify-start text-gray-500 text-sm sm:font-semibold font-medium leading-relaxed lg:after:content-[''] after:content-none after:w-full after:h-0.5 after:border after:border-dashed bg-gradient-to-r after:bg-green-700 after:to-blue-700 after:inline-block after:absolute after:top-3 after:left-4">
                    <div className="xl:w-44 block z-10 flex flex-col break-all sm:mr-9 mr-4">
                      <span className="w-6 h-6 bg-green-700 rounded-full flex justify-start items-start mb-2" />
                      Delivery arrived in the destination state
                      <span className="text-gray-500 text-sm font-normal leading-normal">
                        May 25, 2023
                      </span>
                    </div>
                  </li>
                  <li className="flex w-full relative justify-start text-gray-500 text-sm sm:font-semibold font-medium leading-relaxed lg:after:content-[''] after:content-none after:w-full after:h-0.5 after:border after:border-dashed after:bg-blue-700 after:inline-block after:absolute after:top-3 after:left-4">
                    <div className="xl:w-44 block z-10 flex flex-col break-all sm:mr-9 mr-4">
                      <span className="w-6 h-6 bg-blue-700 rounded-full flex justify-start items-start mb-2" />
                      Delivery arrived in the destination city
                      <span className="text-gray-500 text-sm font-normal leading-normal">
                        May 26, 2023
                      </span>
                    </div>
                  </li>
                  <li className="flex w-full relative justify-start text-gray-500 text-sm sm:font-semibold font-medium leading-relaxed lg:after:content-[''] after:content-none after:w-full after:h-0.5 after:border after:border-dashed after:bg-blue-700 after:inline-block after:absolute after:top-3 after:left-4">
                    <div className="xl:w-44 block z-10 flex flex-col break-all sm:mr-9 mr-4">
                      <span className="w-6 h-6 bg-blue-700 rounded-full flex justify-start items-start mb-2" />
                      Ready for dispatch to the destination point
                      <span className="text-gray-500 text-sm font-normal leading-normal">
                        May 28, 2023
                      </span>
                    </div>
                  </li>
                  <li className="flex w-full relative justify-start text-gray-500 text-sm sm:font-semibold font-medium leading-relaxed">
                    <div className="xl:w-44 block z-10 flex flex-col break-all">
                      <span className="w-6 h-6 bg-blue-700 rounded-full flex justify-start items-start mb-2" />
                      Delivered to your specified location
                      <span className="text-gray-500 text-sm font-normal leading-normal">
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
  );
}
