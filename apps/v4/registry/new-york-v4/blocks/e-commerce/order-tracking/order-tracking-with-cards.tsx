export default function OrderTrackingWithCards() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-12">
          <h2 className="font-manrope w-full text-center text-3xl leading-normal font-bold text-gray-900 md:text-start">
            Track Order
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="mx-auto flex w-96 flex-col items-start justify-start gap-5 md:w-full">
              <h4 className="w-full text-xl leading-8 font-semibold text-gray-900">
                #201574 Oder Details
              </h4>
              <div className="grid w-full grid-cols-1 items-start justify-start gap-4 rounded-xl border border-gray-200 p-6 md:grid-cols-3">
                <div className="inline-flex w-full flex-col items-start justify-start gap-1">
                  <span className="w-full text-sm leading-normal font-normal text-gray-500">
                    From
                  </span>
                  <div>
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Fashion Haven
                      <br /> Style Street
                      <br />
                      Trendy Town, CA 90210
                      <br />
                      United States
                    </h6>
                    <h6 className="text-base leading-relaxed font-medium text-gray-500">
                      Phone:
                      <span className="text-gray-900">(555) 123-4567</span>
                    </h6>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-1">
                  <span className="w-full text-sm leading-normal font-normal text-gray-500">
                    Delivery Address
                  </span>
                  <div>
                    <h6 className="text-base leading-relaxed font-medium text-black">
                      Alex Johnson
                      <br />
                      5678 Maple Avenue, Suite 101
                      <br />
                      Springfield, IL 62704
                      <br />
                      United States
                    </h6>
                    <h6 className="text-base leading-relaxed font-medium text-gray-500">
                      Phone:
                      <span className="text-gray-900">(555) 987-6543</span>
                    </h6>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-4">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <span className="w-full text-sm leading-snug font-normal text-gray-500">
                      Distance Covered
                    </span>
                    <div>
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        22.5 km
                        <span className="text-sm leading-snug text-gray-500">
                          /28 km{" "}
                        </span>
                        <a className="text-sm leading-snug font-normal text-blue-700">
                          {" "}
                          Show Live Location
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <span className="text-sm leading-snug font-normal text-gray-500">
                      Payment Method
                    </span>
                    <h6 className="text-base leading-relaxed font-medium text-black">
                      COD
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-96 flex-col items-start justify-start gap-5 md:w-full">
              <h4 className="w-full text-xl leading-8 font-semibold text-gray-900">
                All Orders
              </h4>
              <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-2 lg:grid-cols-4">
                <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-blue-500 hover:bg-blue-50 lg:p-3.5 xl:p-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-500">
                    ODER ID:
                    <span className="text-gray-900"> #201574</span>
                  </h6>
                  <div className="inline-flex w-full items-center justify-start gap-4">
                    <div className="relative flex items-center justify-start">
                      <a className="relative">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718361885.png"
                        />
                      </a>
                      <a className="absolute ml-1.5 h-full w-full">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718361902.png"
                        />
                      </a>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        2 Items
                      </h5>
                      <a className="border-b border-blue-700 text-sm leading-normal font-normal text-blue-700 transition-all duration-700 ease-in-out hover:border-blue-900 hover:text-blue-900">
                        Show Details
                      </a>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-3">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                        Estimate Time
                      </h5>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        In 1 days
                      </h6>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                        Total
                      </h5>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        $254.00
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-blue-500 hover:bg-blue-50 lg:p-3.5 xl:p-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-500">
                    ODER ID:
                    <span className="text-gray-900"> #521320</span>
                  </h6>
                  <div className="inline-flex w-full items-center justify-start gap-4">
                    <div className="flex items-center justify-start">
                      <a href="#">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718362881.png"
                        />
                      </a>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        1 Items
                      </h5>
                      <a className="border-b border-blue-700 text-sm leading-normal font-normal text-blue-700 transition-all duration-700 ease-in-out hover:border-blue-900 hover:text-blue-900">
                        Show Details
                      </a>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-3">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                        Estimate Time
                      </h5>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        In 1 days
                      </h6>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                        Total
                      </h5>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        $20.00
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-blue-500 hover:bg-blue-50 lg:p-3.5 xl:p-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-500">
                    ODER ID:
                    <span className="text-gray-900"> #101265</span>
                  </h6>
                  <div className="inline-flex w-full items-center justify-start gap-4">
                    <div className="relative flex items-center justify-start">
                      <a className="relative">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718362950.png"
                        />
                      </a>
                      <a className="absolute ml-2.5 h-full w-full">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718362961.png"
                        />
                      </a>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        4 Items
                      </h5>
                      <a className="border-b border-blue-700 text-sm leading-normal font-normal text-blue-700 transition-all duration-700 ease-in-out hover:border-blue-900 hover:text-blue-900">
                        Show Details
                      </a>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-3">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                        Estimate Time
                      </h5>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        In 5 days
                      </h6>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                        Total
                      </h5>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        $310.00
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-blue-500 hover:bg-blue-50 lg:p-3.5 xl:p-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-500">
                    ODER ID:
                    <span className="text-gray-900"> #859452</span>
                  </h6>
                  <div className="inline-flex w-full items-center justify-start gap-4">
                    <div className="relative flex items-center justify-start">
                      <a className="relative">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718363098.png"
                        />
                      </a>
                      <a className="absolute ml-2.5 h-full w-full">
                        <img
                          className="rounded-md object-cover"
                          src="https://pagedone.io/asset/uploads/1718363108.png"
                        />
                      </a>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                        3 Items
                      </h5>
                      <a className="border-b border-blue-700 text-sm leading-normal font-normal text-blue-700 transition-all duration-700 ease-in-out hover:border-blue-900 hover:text-blue-900">
                        Show Details
                      </a>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-3">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                        Estimate Time
                      </h5>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        In 8 days
                      </h6>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                        Total
                      </h5>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
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
  )
}
