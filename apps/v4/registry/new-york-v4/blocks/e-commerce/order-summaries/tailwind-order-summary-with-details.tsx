export default function TailwindOrderSummaryWithDetails() {
  return (
    <section className="relative py-24">
      <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
        <div className="flex flex-col items-start gap-6 xl:flex-row">
          <div className="flex w-full max-w-sm flex-col items-start gap-8 max-xl:mx-auto md:max-w-3xl xl:max-w-sm">
            <div className="group w-full rounded-3xl border border-gray-200 p-6 transition-all duration-500 hover:border-gray-400">
              <h2 className="font-manrope border-b border-gray-200 pb-6 text-3xl leading-10 font-bold text-black">
                Order Summary
              </h2>
              <div className="data border-b border-gray-200 py-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="text-lg leading-8 font-normal text-gray-400 transition-all duration-500 group-hover:text-gray-700">
                    Product Cost
                  </p>
                  <p className="text-lg leading-8 font-medium text-gray-900">
                    $360.00
                  </p>
                </div>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="text-lg leading-8 font-normal text-gray-400 transition-all duration-500 group-hover:text-gray-700">
                    Shipping
                  </p>
                  <p className="text-lg leading-8 font-medium text-gray-600">
                    $40.00
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-lg leading-8 font-normal text-gray-400 transition-all duration-500 group-hover:text-gray-700">
                    Coupon Code
                  </p>
                  <p className="text-lg leading-8 font-medium text-emerald-500">
                    #APPLIED
                  </p>
                </div>
              </div>
              <div className="total flex items-center justify-between pt-6">
                <p className="text-xl leading-8 font-normal text-black">
                  Subtotal
                </p>
                <h5 className="font-manrope text-2xl leading-9 font-bold text-indigo-600">
                  $400.00
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm max-xl:mx-auto md:max-w-3xl">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-5 rounded-3xl border border-gray-100 bg-gray-100 p-6 transition-all duration-500 hover:border-gray-400 md:flex-row md:items-center">
                <div className="img-box">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167635.png"
                    alt="Denim Jacket image"
                    className="w-full rounded-lg object-cover md:max-w-[122px]"
                  />
                </div>
                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
                  <div>
                    <h2 className="mb-3 text-xl leading-8 font-medium text-black">
                      Dark Denim Jacket
                    </h2>
                    <p className="text-lg leading-8 font-normal text-gray-500">
                      By: Dust Studios
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-3"></div>
                    <h6 className="text-xl leading-8 font-medium text-indigo-600">
                      $120.00
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 rounded-3xl border border-gray-100 bg-gray-100 p-6 transition-all duration-500 hover:border-gray-400 md:flex-row md:items-center">
                <div className="img-box">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167652.png"
                    alt="Leather Military Boots image"
                    className="w-full rounded-lg object-cover md:max-w-[122px]"
                  />
                </div>
                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
                  <div>
                    <h2 className="mb-3 text-xl leading-8 font-medium text-black">
                      Leather Military Boots
                    </h2>
                    <p className="text-lg leading-8 font-normal text-gray-500">
                      Lethal Lifestyle
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-3"></div>
                    <h6 className="text-xl leading-8 font-medium text-indigo-600">
                      $120.00
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 rounded-3xl border border-gray-100 bg-gray-100 p-6 transition-all duration-500 hover:border-gray-400 md:flex-row md:items-center">
                <div className="img-box">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167668.png"
                    alt="Writing Pad image"
                    className="w-full rounded-lg object-cover md:max-w-[122px]"
                  />
                </div>
                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
                  <div>
                    <h2 className="mb-3 text-xl leading-8 font-medium text-black">
                      Writing Pad
                    </h2>
                    <p className="text-lg leading-8 font-normal text-gray-500">
                      Books
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-3"></div>
                    <h6 className="text-xl leading-8 font-medium text-indigo-600">
                      $120.00
                    </h6>
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
