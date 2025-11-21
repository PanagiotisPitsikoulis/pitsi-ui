export default function OrderHistoryInCardLayout() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <h2 className="font-manrope w-full text-center text-3xl leading-normal font-extrabold text-black lg:text-left">
          Your Orders
        </h2>
        <div className="mt-10 mb-6 inline-flex w-full flex-col items-center justify-start gap-8 rounded-2xl border border-gray-300 bg-gray-50 p-9">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-gray-300 pb-3 text-center sm:border-r sm:border-b-0 sm:pr-3 md:pb-0">
              <h6 className="flex flex-col text-base leading-relaxed font-semibold text-gray-400">
                Order Number
                <span className="text-black">#2562015893</span>
              </h6>
            </div>
            <div className="border-b border-gray-300 pb-3 text-center sm:border-b-0 sm:pr-3 md:pb-0 lg:border-r">
              <h6 className="flex flex-col text-base leading-relaxed font-semibold text-gray-400">
                Order Date
                <span className="text-black">Jan 18, 2022</span>
              </h6>
            </div>
            <div className="border-b border-gray-300 pb-3 text-center sm:border-r sm:border-b-0 sm:pr-3 md:pb-0">
              <h6 className="flex flex-col text-base leading-relaxed font-semibold text-gray-400">
                Delivery Date
                <span className="text-black">Jan 26, 2022</span>
              </h6>
            </div>
            <div className="text-center">
              <h6 className="flex flex-col text-base leading-relaxed font-semibold text-gray-400">
                Ship To
                <span className="text-black">Rajkot, Gujrat, India</span>
              </h6>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-6 border-y border-gray-300 py-8">
            <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715581370.png"
                alt="Polo Black T-Shirt image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-4 md:gap-5">
                <div className="flex w-full flex-col items-center justify-start gap-2.5 md:items-start">
                  <div className="flex w-full flex-col items-center justify-between gap-2.5 md:flex-row md:items-start">
                    <h4 className="text-xl leading-loose font-medium text-black">
                      Men's Regular Fit Polo Black T-Shirt
                    </h4>
                    <h4 className="text-right text-xl leading-loose font-semibold text-black">
                      $80.00
                    </h4>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    Color :<span className="text-gray-900"> Black</span>
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    Size :<span className="text-gray-900"> M</span>
                  </h6>
                </div>
                <div className="inline-flex w-full items-center justify-center gap-1.5 md:justify-start">
                  <a href="#"></a>
                  <h6 className="cursor-pointer text-base leading-relaxed font-semibold text-indigo-600">
                    Rate Now
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715581381.png"
                alt="Regular Fit T-Shirt image"
              />
              <div className="inline-flex w-full flex-col items-start justify-start gap-4 md:gap-5">
                <div className="flex w-full flex-col items-center justify-start gap-2.5 md:items-start">
                  <div className="flex w-full flex-col items-center justify-between gap-2.5 md:flex-row md:items-start">
                    <h4 className="text-center text-xl leading-loose font-medium text-black md:text-start">
                      Men's Cotton Solid Round Neck Regular Fit T-Shirt
                    </h4>
                    <h4 className="text-right text-xl leading-loose font-semibold text-black">
                      $80.00
                    </h4>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    Color :
                    <span className="text-gray-900"> Heather Purple</span>
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    Size :<span className="text-gray-900"> M</span>
                  </h6>
                </div>
                <div className="inline-flex w-full items-center justify-center gap-1.5 md:justify-start">
                  <a href="#"></a>
                  <h6 className="cursor-pointer text-base leading-relaxed font-semibold text-indigo-600">
                    Rate Now
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-row items-center">
              <h5 className="text-lg leading-[30px] font-semibold text-gray-400">
                Total Amount :{" "}
              </h5>
              <h6 className="text-xl leading-loose font-semibold text-gray-900">
                {" "}
                $160
              </h6>
            </div>
            <div className="flex items-center justify-end gap-2.5">
              <a href="#"></a>
              <h6 className="cursor-pointer text-right text-base leading-relaxed font-semibold text-indigo-600">
                Download Invoice
              </h6>
            </div>
          </div>
        </div>
        <div className="inline-flex w-full flex-col items-center justify-start gap-8 rounded-2xl border border-gray-300 bg-gray-50 p-9">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-gray-300 pb-3 text-center sm:border-r sm:border-b-0 sm:pr-3 md:pb-0">
              <h6 className="flex flex-col text-base leading-relaxed font-semibold text-gray-400">
                Order Number
                <span className="text-black">#2562015893</span>
              </h6>
            </div>
            <div className="border-b border-gray-300 pb-3 text-center sm:border-b-0 sm:pr-3 md:pb-0 lg:border-r">
              <h6 className="flex flex-col text-base leading-relaxed font-semibold text-gray-400">
                Order Date
                <span className="text-black">Jan 18, 2022</span>
              </h6>
            </div>
            <div className="border-b border-gray-300 pb-3 text-center sm:border-r sm:border-b-0 sm:pr-3 md:pb-0">
              <h6 className="flex flex-col text-base leading-relaxed font-semibold text-gray-400">
                Delivery Date
                <span className="text-black">Jan 26, 2022</span>
              </h6>
            </div>
            <div className="text-center">
              <h6 className="flex flex-col text-base leading-relaxed font-semibold text-gray-400">
                Ship To
                <span className="text-black">Rajkot, Gujrat, India</span>
              </h6>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-6 border-y border-gray-300 py-8">
            <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715581395.png"
                alt="Sofa & Washable Cover image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-4 md:gap-5">
                <div className="flex w-full flex-col items-center justify-start gap-2.5 md:items-start">
                  <div className="flex w-full flex-col items-center justify-between gap-2.5 md:flex-row md:items-start">
                    <h4 className="text-center text-xl leading-loose font-medium text-black md:text-start">
                      Polycotton Fabric Rounded 78x44x10 Inches Sofa &amp;
                      Washable Cover With 6 Cushions
                    </h4>
                    <h4 className="text-right text-xl leading-loose font-semibold text-black">
                      $80.00
                    </h4>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    Color :<span className="text-gray-900"> White</span>
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    Size :<span className="text-gray-900"> M</span>
                  </h6>
                </div>
                <div className="inline-flex w-full items-center justify-center gap-1.5 md:justify-start">
                  <a href="#"></a>
                  <h6 className="cursor-pointer text-base leading-relaxed font-semibold text-indigo-600">
                    Rate Now
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-8">
              <img
                className="rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1715581408.png"
                alt="Hanging Stand image"
              />
              <div className="inline-flex w-full flex-col items-start justify-start gap-4 md:gap-5">
                <div className="flex w-full flex-col items-center justify-start gap-2.5 md:items-start">
                  <div className="flex w-full flex-col items-center justify-between gap-2.5 md:flex-row md:items-start">
                    <h4 className="text-center text-xl leading-loose font-medium text-black md:text-start">
                      Wall Round Hanging Stand{" "}
                    </h4>
                    <h4 className="text-right text-xl leading-loose font-semibold text-black">
                      $80.00
                    </h4>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    Color :
                    <span className="text-gray-900"> Heather Purple</span>
                  </h6>
                  <h6 className="text-base leading-relaxed font-normal text-gray-400">
                    Size :<span className="text-gray-900"> M</span>
                  </h6>
                </div>
                <div className="inline-flex w-full items-center justify-center gap-1.5 md:justify-start">
                  <a href="#"></a>
                  <h6 className="cursor-pointer text-base leading-relaxed font-semibold text-indigo-600">
                    Rate Now
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-row items-center">
              <h5 className="text-lg leading-[30px] font-semibold text-gray-400">
                Total Amount :{" "}
              </h5>
              <h6 className="text-xl leading-loose font-semibold text-gray-900">
                {" "}
                $160
              </h6>
            </div>
            <div className="flex items-center justify-end gap-2.5">
              <a href="#"></a>
              <h6 className="cursor-pointer text-right text-base leading-relaxed font-semibold text-indigo-600">
                Download Invoice
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
