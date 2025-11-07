export default function OrderTrackingWithCards() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <h2 className="w-full md:text-start text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
            Track Order
          </h2>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="md:w-full w-96 mx-auto flex-col justify-start items-start gap-5 flex">
              <h4 className="w-full text-gray-900 text-xl font-semibold leading-8">
                #201574 Oder Details
              </h4>
              <div className="w-full p-6 rounded-xl border border-gray-200 justify-start items-start gap-4 grid md:grid-cols-3 grid-cols-1">
                <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                  <span className="w-full text-gray-500 text-sm font-normal leading-normal">
                    From
                  </span>
                  <div>
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Fashion Haven
                      <br /> Style Street
                      <br />
                      Trendy Town, CA 90210
                      <br />
                      United States
                    </h6>
                    <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                      Phone:
                      <span className="text-gray-900">(555) 123-4567</span>
                    </h6>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                  <span className="w-full text-gray-500 text-sm font-normal leading-normal">
                    Delivery Address
                  </span>
                  <div>
                    <h6 className="text-black text-base font-medium leading-relaxed">
                      Alex Johnson
                      <br />
                      5678 Maple Avenue, Suite 101
                      <br />
                      Springfield, IL 62704
                      <br />
                      United States
                    </h6>
                    <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                      Phone:
                      <span className="text-gray-900">(555) 987-6543</span>
                    </h6>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <span className="w-full text-gray-500 text-sm font-normal leading-snug">
                      Distance Covered
                    </span>
                    <div>
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        22.5 km
                        <span className="text-gray-500 text-sm leading-snug">
                          /28 km{" "}
                        </span>
                        <a className="text-blue-700 text-sm font-normal leading-snug">
                          {" "}
                          Show Live Location
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <span className=" text-gray-500 text-sm font-normal leading-snug">
                      Payment Method
                    </span>
                    <h6 className=" text-black text-base font-medium leading-relaxed">
                      COD
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-full mx-auto w-96 flex-col justify-start items-start gap-5 flex">
              <h4 className="w-full text-gray-900 text-xl font-semibold leading-8">
                All Orders
              </h4>
              <div className="w-full justify-start items-start gap-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                <div className="w-full xl:p-5 lg:p-3.5 p-5 bg-white hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-5 inline-flex">
                  <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                    ODER ID:
                    <span className="text-gray-900"> #201574</span>
                  </h6>
                  <div className="w-full justify-start items-center gap-4 inline-flex">
                    <div className="justify-start items-center flex relative">
                      <a className="relative">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718361885.png"
                        />
                      </a>
                      <a className="absolute ml-1.5 w-full h-full">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718361902.png"
                        />
                      </a>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                        2 Items
                      </h5>
                      <a className="text-blue-700 hover:text-blue-900 hover:border-blue-900 transition-all duration-700 ease-in-out text-sm font-normal leading-normal border-b border-blue-700">
                        Show Details
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-3 flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                        Estimate Time
                      </h5>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        In 1 days
                      </h6>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                        Total
                      </h5>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        $254.00
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:p-5 lg:p-3.5 p-5 bg-white hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-5 inline-flex">
                  <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                    ODER ID:
                    <span className="text-gray-900"> #521320</span>
                  </h6>
                  <div className="w-full justify-start items-center gap-4 inline-flex">
                    <div className="justify-start items-center flex">
                      <a href="#">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718362881.png"
                        />
                      </a>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                        1 Items
                      </h5>
                      <a className="text-blue-700 hover:text-blue-900 hover:border-blue-900 transition-all duration-700 ease-in-out text-sm font-normal leading-normal border-b border-blue-700">
                        Show Details
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-3 flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                        Estimate Time
                      </h5>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        In 1 days
                      </h6>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                        Total
                      </h5>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        $20.00
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:p-5 lg:p-3.5 p-5 bg-white hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-5 inline-flex">
                  <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                    ODER ID:
                    <span className="text-gray-900"> #101265</span>
                  </h6>
                  <div className="w-full justify-start items-center gap-4 inline-flex">
                    <div className="justify-start items-center flex relative">
                      <a className="relative">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718362950.png"
                        />
                      </a>
                      <a className="absolute ml-2.5 w-full h-full">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718362961.png"
                        />
                      </a>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                        4 Items
                      </h5>
                      <a className="text-blue-700 hover:text-blue-900 hover:border-blue-900 transition-all duration-700 ease-in-out text-sm font-normal leading-normal border-b border-blue-700">
                        Show Details
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-3 flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                        Estimate Time
                      </h5>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        In 5 days
                      </h6>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                        Total
                      </h5>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        $310.00
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:p-5 lg:p-3.5 p-5 bg-white hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-5 inline-flex">
                  <h6 className="text-gray-500 text-base font-medium leading-relaxed">
                    ODER ID:
                    <span className="text-gray-900"> #859452</span>
                  </h6>
                  <div className="w-full justify-start items-center gap-4 inline-flex">
                    <div className="justify-start items-center flex relative">
                      <a className="relative">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718363098.png"
                        />
                      </a>
                      <a className="absolute ml-2.5 w-full h-full">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718363108.png"
                        />
                      </a>
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                        3 Items
                      </h5>
                      <a className="text-blue-700 hover:text-blue-900 hover:border-blue-900 transition-all duration-700 ease-in-out text-sm font-normal leading-normal border-b border-blue-700">
                        Show Details
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-3 flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                        Estimate Time
                      </h5>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        In 8 days
                      </h6>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                        Total
                      </h5>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        $524.00
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
