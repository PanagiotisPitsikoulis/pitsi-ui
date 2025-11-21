export default function OrderSummaryWithAddressDetails() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:w-[488px]">
            <div className="flex w-full flex-col items-start justify-start gap-8 border-b border-gray-200 pb-8">
              <h2 className="font-manrope text-3xl leading-normal font-bold text-black">
                Billing Address
              </h2>
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="flex flex-col items-start justify-start gap-2">
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Name
                  </h6>
                  <h5 className="text-lg leading-8 font-normal text-black">
                    Christine Johnson
                  </h5>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Email Address
                  </h6>
                  <h5 className="text-lg leading-8 font-normal text-black">
                    christine@email.com
                  </h5>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Phone Number
                  </h6>
                  <h5 className="text-lg leading-8 font-normal text-black">
                    +1 (987) 654 3210
                  </h5>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Address
                  </h6>
                  <h5 className="text-lg leading-8 font-normal text-black">
                    Suite 971 8413 Simonis Gateway, East Marybethberg,{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl">
              <div className="flex w-full flex-col items-start justify-start gap-6 border-b border-gray-200 pb-6">
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h3 className="text-xl leading-8 font-normal text-gray-500">
                    Subtotal
                  </h3>
                  <h3 className="text-right text-xl leading-8 font-semibold text-gray-900">
                    $270.00
                  </h3>
                </div>
                <div className="inline-flex w-full items-start justify-between gap-6">
                  <h3 className="text-xl leading-8 font-normal text-gray-500">
                    Discount
                  </h3>
                  <h3 className="text-right text-xl leading-8 font-semibold text-gray-900">
                    $50.00
                  </h3>
                </div>
              </div>
              <div className="inline-flex w-full items-start justify-between gap-6 border-b border-gray-100 pb-6">
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                  Total
                </h3>
                <h3 className="font-manrope text-right text-2xl leading-9 font-bold text-indigo-600">
                  $220.00
                </h3>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-6 lg:w-[696px]">
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <h2 className="font-manrope text-3xl leading-normal font-bold text-black">
                Order Summaries
              </h2>
              <div className="flex w-full flex-col items-start justify-between gap-8 sm:flex-row">
                <div className="inline-flex flex-col items-start justify-start gap-3">
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Delivery Date
                  </h6>
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Dec 01, 2023
                  </h3>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-3">
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Order ID
                  </h6>
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    #1023498789
                  </h3>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-3">
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Payment Method
                  </h6>
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Master card
                  </h3>
                </div>
              </div>
            </div>
            <div className="smditems-center relative z-10 flex w-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-500 hover:bg-gray-50 max-md:pb-10 sm:flex-row md:group-hover:mr-14 lg:gap-3 lg:group-hover:mr-20 xl:gap-4">
              <div className="w-full max-md:mx-auto sm:max-w-[96px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167756.png"
                  alt="Dark Denim Shirt image"
                  className="w-full rounded-lg object-cover max-md:mx-auto max-md:max-w-sm md:max-w-[96px]"
                />
              </div>
              <div className="grid w-full grid-cols-10">
                <div className="col-span-12 flex items-center justify-center sm:col-span-4 sm:justify-start">
                  <div className="data">
                    <h5 className="mb-3 text-base leading-relaxed font-medium text-black max-sm:text-center">
                      Dark Denim Shirt
                    </h5>
                    <p className="text-sm leading-snug font-normal text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
                <div className="col-span-12 my-2 flex items-center justify-center sm:col-span-2 sm:my-0 sm:justify-start">
                  <h5 className="text-center text-sm leading-snug font-medium text-black sm:text-start">
                    Dark Blue
                  </h5>
                </div>
                <div className="col-span-12 flex items-center justify-center sm:col-span-2">
                  <div className="flex items-center gap-4 sm:gap-1 xl:gap-4">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="h-9 w-9 rounded-full border border-gray-200 bg-white text-center text-lg font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-12 mt-2 flex items-center justify-center sm:col-span-2 sm:mt-0 sm:justify-end">
                  <h5 className="text-center text-sm leading-snug font-medium text-indigo-600">
                    $120.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="smditems-center relative z-10 flex w-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-500 hover:bg-gray-50 max-md:pb-10 sm:flex-row md:group-hover:mr-14 lg:gap-3 lg:group-hover:mr-20 xl:gap-4">
              <div className="w-full max-md:mx-auto sm:max-w-[96px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167771.png"
                  alt="Dark Jacket Shirt image"
                  className="w-full rounded-lg object-cover max-md:mx-auto max-md:max-w-sm md:max-w-[96px]"
                />
              </div>
              <div className="grid w-full grid-cols-10">
                <div className="col-span-12 flex items-center justify-center sm:col-span-4 sm:justify-start">
                  <div className="data">
                    <h5 className="mb-3 text-base leading-relaxed font-medium text-black max-sm:text-center">
                      Dark Jacket Shirt
                    </h5>
                    <p className="text-sm leading-snug font-normal text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
                <div className="col-span-12 my-2 flex items-center justify-center sm:col-span-2 sm:my-0 sm:justify-start">
                  <h5 className="text-center text-sm leading-snug font-medium text-black sm:text-start">
                    Orange
                  </h5>
                </div>
                <div className="col-span-12 flex items-center justify-center sm:col-span-2">
                  <div className="flex items-center gap-4 sm:gap-1 xl:gap-4">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="h-9 w-9 rounded-full border border-gray-200 bg-white text-center text-lg font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-12 mt-2 flex items-center justify-center sm:col-span-2 sm:mt-0 sm:justify-end">
                  <h5 className="text-center text-sm leading-snug font-medium text-indigo-600">
                    $100.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="smditems-center relative z-10 flex w-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-500 hover:bg-gray-50 max-md:pb-10 sm:flex-row md:group-hover:mr-14 lg:gap-3 lg:group-hover:mr-20 xl:gap-4">
              <div className="w-full max-md:mx-auto sm:max-w-[96px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167771.png"
                  alt="Men Shoes image"
                  className="w-full rounded-lg object-cover max-md:mx-auto max-md:max-w-sm md:max-w-[96px]"
                />
              </div>
              <div className="grid w-full grid-cols-10">
                <div className="col-span-12 flex items-center justify-center sm:col-span-4 sm:justify-start">
                  <div className="data">
                    <h5 className="mb-3 text-base leading-relaxed font-medium text-black max-sm:text-center">
                      Men Shoes
                    </h5>
                    <p className="text-sm leading-snug font-normal text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
                <div className="col-span-12 my-2 flex items-center justify-center sm:col-span-2 sm:my-0 sm:justify-start">
                  <h5 className="text-center text-sm leading-snug font-medium text-black sm:text-start">
                    White
                  </h5>
                </div>
                <div className="col-span-12 flex items-center justify-center sm:col-span-2">
                  <div className="flex items-center gap-4 lg:gap-1 xl:gap-4">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="h-9 w-9 rounded-full border border-gray-200 bg-white text-center text-lg font-medium text-gray-900 outline-0 placeholder:text-gray-900"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-12 mt-2 flex items-center justify-center sm:col-span-2 sm:mt-0 sm:justify-end">
                  <h5 className="text-center text-sm leading-snug font-medium text-indigo-600">
                    $50.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
