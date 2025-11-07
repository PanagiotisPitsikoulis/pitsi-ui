export default function OrderSummaryWithAddressDetails() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="lg:w-[488px] w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full pb-8 border-b border-gray-200 flex-col justify-start items-start gap-8 flex">
              <h2 className="text-black text-3xl font-bold font-manrope leading-normal">
                Billing Address
              </h2>
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Name
                  </h6>
                  <h5 className="text-black text-lg font-normal leading-8">
                    Christine Johnson
                  </h5>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Email Address
                  </h6>
                  <h5 className="text-black text-lg font-normal leading-8">
                    christine@email.com
                  </h5>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Phone Number
                  </h6>
                  <h5 className="text-black text-lg font-normal leading-8">
                    +1 (987) 654 3210
                  </h5>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Address
                  </h6>
                  <h5 className="text-black text-lg font-normal leading-8">
                    Suite 971 8413 Simonis Gateway, East Marybethberg,{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl flex-col justify-start items-start gap-6 flex">
              <div className="w-full pb-6 border-b border-gray-200 flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h3 className="text-gray-500 text-xl font-normal leading-8">
                    Subtotal
                  </h3>
                  <h3 className="text-right text-gray-900 text-xl font-semibold leading-8">
                    $270.00
                  </h3>
                </div>
                <div className="w-full justify-between items-start gap-6 inline-flex">
                  <h3 className="text-gray-500 text-xl font-normal leading-8">
                    Discount
                  </h3>
                  <h3 className="text-right text-gray-900 text-xl font-semibold leading-8">
                    $50.00
                  </h3>
                </div>
              </div>
              <div className="w-full pb-6 border-b border-gray-100 justify-between items-start gap-6 inline-flex">
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Total
                </h3>
                <h3 className="text-right text-indigo-600 text-2xl font-bold font-manrope leading-9">
                  $220.00
                </h3>
              </div>
            </div>
          </div>
          <div className="lg:w-[696px] w-full flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <h2 className="text-black text-3xl font-bold font-manrope leading-normal">
                Order Summaries
              </h2>
              <div className="w-full justify-between items-start gap-8 flex sm:flex-row flex-col">
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Delivery Date
                  </h6>
                  <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Dec 01, 2023
                  </h3>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Order ID
                  </h6>
                  <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                    #1023498789
                  </h3>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Payment Method
                  </h6>
                  <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Master card
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row smditems-center xl:gap-4 lg:gap-3 gap-4 p-4 bg-white border border-gray-200 rounded-2xl w-full transition-all duration-500 relative z-10 max-md:pb-10 md:group-hover:mr-14 lg:group-hover:mr-20 hover:bg-gray-50">
              <div className="max-md:mx-auto w-full sm:max-w-[96px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167756.png"
                  alt="Dark Denim Shirt image"
                  className="max-md:mx-auto w-full max-md:max-w-sm md:max-w-[96px] rounded-lg object-cover"
                />
              </div>
              <div className="grid grid-cols-10 w-full">
                <div className="col-span-12 sm:col-span-4 flex items-center justify-center sm:justify-start">
                  <div className="data">
                    <h5 className="font-medium text-base leading-relaxed text-black mb-3 max-sm:text-center">
                      Dark Denim Shirt
                    </h5>
                    <p className="font-normal text-sm leading-snug text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-2 flex items-center sm:justify-start justify-center sm:my-0 my-2">
                  <h5 className="font-medium text-sm leading-snug text-black sm:text-start text-center">
                    Dark Blue
                  </h5>
                </div>
                <div className="col-span-12 sm:col-span-2 flex items-center justify-center">
                  <div className="flex items-center xl:gap-4 sm:gap-1 gap-4">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-9 h-9 rounded-full text-center border border-gray-200 bg-white placeholder:text-gray-900 text-gray-900 font-medium text-lg outline-0"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-2 flex items-center sm:justify-end justify-center sm:mt-0 mt-2">
                  <h5 className="font-medium text-sm leading-snug text-indigo-600 text-center">
                    $120.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row smditems-center xl:gap-4 lg:gap-3 gap-4 p-4 bg-white border border-gray-200 rounded-2xl w-full transition-all duration-500 relative z-10 max-md:pb-10 md:group-hover:mr-14 lg:group-hover:mr-20 hover:bg-gray-50">
              <div className="max-md:mx-auto w-full sm:max-w-[96px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167771.png"
                  alt="Dark Jacket Shirt image"
                  className="max-md:mx-auto w-full max-md:max-w-sm md:max-w-[96px] rounded-lg object-cover"
                />
              </div>
              <div className="grid grid-cols-10 w-full">
                <div className="col-span-12 sm:col-span-4 flex items-center justify-center sm:justify-start">
                  <div className="data">
                    <h5 className="font-medium text-base leading-relaxed text-black mb-3 max-sm:text-center">
                      Dark Jacket Shirt
                    </h5>
                    <p className="font-normal text-sm leading-snug text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-2 flex items-center sm:justify-start justify-center sm:my-0 my-2">
                  <h5 className="font-medium text-sm leading-snug text-black sm:text-start text-center">
                    Orange
                  </h5>
                </div>
                <div className="col-span-12 sm:col-span-2 flex items-center justify-center">
                  <div className="flex items-center xl:gap-4 sm:gap-1 gap-4">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-9 h-9 rounded-full text-center border border-gray-200 bg-white placeholder:text-gray-900 text-gray-900 font-medium text-lg outline-0"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-2 flex items-center sm:justify-end justify-center sm:mt-0 mt-2">
                  <h5 className="font-medium text-sm leading-snug text-indigo-600 text-center">
                    $100.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row smditems-center xl:gap-4 lg:gap-3 gap-4 p-4 bg-white border border-gray-200 rounded-2xl w-full transition-all duration-500 relative z-10 max-md:pb-10 md:group-hover:mr-14 lg:group-hover:mr-20 hover:bg-gray-50">
              <div className="max-md:mx-auto w-full sm:max-w-[96px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167771.png"
                  alt="Men Shoes image"
                  className="max-md:mx-auto w-full max-md:max-w-sm md:max-w-[96px] rounded-lg object-cover"
                />
              </div>
              <div className="grid grid-cols-10 w-full">
                <div className="col-span-12 sm:col-span-4 flex items-center justify-center sm:justify-start">
                  <div className="data">
                    <h5 className="font-medium text-base leading-relaxed text-black mb-3 max-sm:text-center">
                      Men Shoes
                    </h5>
                    <p className="font-normal text-sm leading-snug text-gray-500 max-sm:text-center">
                      #order1234
                    </p>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-2 flex items-center sm:justify-start justify-center sm:my-0 my-2">
                  <h5 className="font-medium text-sm leading-snug text-black sm:text-start text-center">
                    White
                  </h5>
                </div>
                <div className="col-span-12 sm:col-span-2 flex items-center justify-center">
                  <div className="flex items-center xl:gap-4 lg:gap-1 gap-4">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-9 h-9 rounded-full text-center border border-gray-200 bg-white placeholder:text-gray-900 text-gray-900 font-medium text-lg outline-0"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-400 hover:bg-white"></button>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-2 flex items-center sm:justify-end justify-center sm:mt-0 mt-2">
                  <h5 className="font-medium text-sm leading-snug text-indigo-600 text-center">
                    $50.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
