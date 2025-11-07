export default function SideBySideOrderTracking() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full justify-between items-center inline-flex">
            <h2 className="text-gray-500 text-2xl font-semibold font-manrope leading-9">
              Order
              <span className="text-indigo-600">#521459</span>
            </h2>
            <span className="px-2.5 py-0.5 bg-amber-50 rounded-full text-center text-amber-600 text-xs font-medium leading-normal">
              In Progress
            </span>
          </div>
          <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-9 col-span-12 p-5 rounded-2xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
              <div className="w-full pb-5 border-b border-gray-200 justify-start items-center lg:gap-8 gap-4 flex sm:flex-row flex-col">
                <img
                  className="sm:pb-2.5 rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718260841.png"
                  alt="Empower Fall Detection Smartwatch image"
                />
                <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                  <div className="w-full justify-between items-center flex sm:flex-row flex-col gap-3">
                    <h4 className="text-black text-xl font-medium leading-8 sm:text-start text-center">
                      AGEasy Empower Fall Detection Smartwatch
                    </h4>
                    <h4 className="text-black text-xl font-medium leading-8">
                      $124.00
                    </h4>
                  </div>
                  <div className="w-full flex-col sm:justify-start justify-center sm:items-start items-center gap-0.5 flex">
                    <div className="text-gray-500 text-base font-normal leading-relaxed">
                      Color: Black
                    </div>
                    <div className="text-gray-500 text-base font-normal leading-relaxed">
                      Oder Date: 27 May, 2024
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <h4 className="text-gray-900 text-xl font-medium leading-8">
                  Customer Details
                </h4>
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <div className="w-full justify-start items-start gap-3 flex sm:flex-row flex-col">
                    <div className="w-full justify-start items-center gap-1.5 flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        John Smith
                      </h6>
                    </div>
                    <div className="w-full justify-start items-center gap-1.5 flex">
                      <h6 className="text-black text-base font-medium leading-relaxed">
                        69512 23594
                      </h6>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1.5 inline-flex">
                    <h6 className="text-black text-base font-medium leading-relaxed">
                      1234 Elm Street, Springfield, IL 62704, United States
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 col-span-12 p-5 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
              <h4 className="text-black text-xl font-medium leading-8">
                Oder Tracking
              </h4>
              <ol className="overflow-hidden pl-2">
                <li className="relative flex-1 h-[72px] after:content-['']  after:w-0.5 after:h-[46px] after:bg-gray-200 after:inline-block after:mt-1.5 after:-bottom-0 after:absolute after:left-1">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex items-center font-medium w-full gap-2.5"
                  ></a>
                  <div className="block flex flex-col gap-1 pl-5 h-[72px]">
                    <h4 className="text-lg text-gray-900 font-medium leading-relaxed whitespace-nowrap">
                      Estimate Delivered
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-normal">
                        05 Jun, 2024
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="relative flex-1 h-[72px] after:content-['']  after:w-0.5 after:h-[46px] after:bg-gray-200 after:inline-block after:mt-1.5 after:-bottom-0 after:absolute after:left-1">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex items-center font-medium w-full gap-2.5"
                  ></a>
                  <div className="block flex flex-col gap-1 pl-5 h-[72px]">
                    <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                      Out For Delivery
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-normal">
                        03 Jun, 2024
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="relative flex-1 h-[72px] after:content-['']  after:w-0.5 after:h-[46px] after:bg-gray-200 after:inline-block after:mt-1.5 after:-bottom-0 after:absolute after:left-1">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex items-center font-medium w-full gap-2.5"
                  ></a>
                  <div className="block flex flex-col gap-1 pl-5 h-[72px]">
                    <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                      Oder In Transit
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-normal">
                        28 May, 2024
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="relative flex-1 h-[72px] after:content-['']  after:w-0.5 after:h-[46px] after:bg-gray-200 after:inline-block after:mt-1.5 after:-bottom-0 after:absolute after:left-1">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex items-center font-medium w-full gap-2.5"
                  ></a>
                  <div className="block flex flex-col gap-1 pl-5 h-[72px]">
                    <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                      Oder Pickedup
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-normal">
                        27 May, 2024
                      </h6>
                    </ul>
                  </div>
                </li>
                <li className="relative flex-1 h-[72px]">
                  <a
                    href="https://pagedone.io/"
                    className="relative flex items-center font-medium w-full gap-2.5"
                  ></a>
                  <div className="block flex flex-col gap-1 pl-5 h-[72px]">
                    <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                      Oder Received
                    </h4>
                    <ul>
                      <h6 className="text-gray-500 text-base font-normal leading-normal">
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
  );
}
