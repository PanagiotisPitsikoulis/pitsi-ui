export default function SideBySideOrderTracking() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="inline-flex w-full items-center justify-between">
            <h2 className="font-manrope text-2xl leading-9 font-semibold text-gray-500">
              Order
              <span className="text-indigo-600">#521459</span>
            </h2>
            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-center text-xs leading-normal font-medium text-amber-600">
              In Progress
            </span>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-12">
            <div className="col-span-12 inline-flex flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 p-5 lg:col-span-9">
              <div className="flex w-full flex-col items-center justify-start gap-4 border-b border-gray-200 pb-5 sm:flex-row lg:gap-8">
                <img
                  className="rounded-xl object-cover sm:pb-2.5"
                  src="https://pagedone.io/asset/uploads/1718260841.png"
                  alt="Empower Fall Detection Smartwatch image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">
                    <h4 className="text-center text-xl leading-8 font-medium text-black sm:text-start">
                      AGEasy Empower Fall Detection Smartwatch
                    </h4>
                    <h4 className="text-xl leading-8 font-medium text-black">
                      $124.00
                    </h4>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-0.5 sm:items-start sm:justify-start">
                    <div className="text-base leading-relaxed font-normal text-gray-500">
                      Color: Black
                    </div>
                    <div className="text-base leading-relaxed font-normal text-gray-500">
                      Oder Date: 27 May, 2024
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <h4 className="text-xl leading-8 font-medium text-gray-900">
                  Customer Details
                </h4>
                <div className="flex w-full flex-col items-start justify-start gap-3">
                  <div className="flex w-full flex-col items-start justify-start gap-3 sm:flex-row">
                    <div className="flex w-full items-center justify-start gap-1.5">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        John Smith
                      </h6>
                    </div>
                    <div className="flex w-full items-center justify-start gap-1.5">
                      <h6 className="text-base leading-relaxed font-medium text-black">
                        69512 23594
                      </h6>
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-start gap-1.5">
                    <h6 className="text-base leading-relaxed font-medium text-black">
                      1234 Elm Street, Springfield, IL 62704, United States
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 inline-flex flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 bg-white p-5 lg:col-span-3">
              <h4 className="text-xl leading-8 font-medium text-black">
                Oder Tracking
              </h4>
              <ol className="overflow-hidden pl-2">
                <li className="relative h-[72px] flex-1 after:absolute after:-bottom-0 after:left-1 after:mt-1.5 after:inline-block after:h-[46px] after:w-0.5 after:bg-gray-200 after:content-['']">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex w-full items-center gap-2.5 font-medium"
                  ></a>
                  <div className="block flex h-[72px] flex-col gap-1 pl-5">
                    <h4 className="text-lg leading-relaxed font-medium whitespace-nowrap text-gray-900">
                      Estimate Delivered
                    </h4>
                    <ul>
                      <h6 className="text-base leading-normal font-normal text-gray-500">
                        05 Jun, 2024
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="relative h-[72px] flex-1 after:absolute after:-bottom-0 after:left-1 after:mt-1.5 after:inline-block after:h-[46px] after:w-0.5 after:bg-gray-200 after:content-['']">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex w-full items-center gap-2.5 font-medium"
                  ></a>
                  <div className="block flex h-[72px] flex-col gap-1 pl-5">
                    <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                      Out For Delivery
                    </h4>
                    <ul>
                      <h6 className="text-base leading-normal font-normal text-gray-500">
                        03 Jun, 2024
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="relative h-[72px] flex-1 after:absolute after:-bottom-0 after:left-1 after:mt-1.5 after:inline-block after:h-[46px] after:w-0.5 after:bg-gray-200 after:content-['']">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex w-full items-center gap-2.5 font-medium"
                  ></a>
                  <div className="block flex h-[72px] flex-col gap-1 pl-5">
                    <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                      Oder In Transit
                    </h4>
                    <ul>
                      <h6 className="text-base leading-normal font-normal text-gray-500">
                        28 May, 2024
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="relative h-[72px] flex-1 after:absolute after:-bottom-0 after:left-1 after:mt-1.5 after:inline-block after:h-[46px] after:w-0.5 after:bg-gray-200 after:content-['']">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex w-full items-center gap-2.5 font-medium"
                  ></a>
                  <div className="block flex h-[72px] flex-col gap-1 pl-5">
                    <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                      Oder Pickedup
                    </h4>
                    <ul>
                      <h6 className="text-base leading-normal font-normal text-gray-500">
                        27 May, 2024
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="relative h-[72px] flex-1">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex w-full items-center gap-2.5 font-medium"
                  ></a>
                  <div className="block flex h-[72px] flex-col gap-1 pl-5">
                    <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                      Oder Received
                    </h4>
                    <ul>
                      <h6 className="text-base leading-normal font-normal text-gray-500">
                        26 May, 2024
                      </h6>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
