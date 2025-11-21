export default function OrderSummaryWithOrderDetailsPaymentAndAddress() {
  return (
    <section className="relative py-24">
      <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
        <h2 className="font-manrope mb-11 text-3xl leading-10 font-bold text-black sm:text-4xl">
          Your Order Confirmed
        </h2>
        <h6 className="mb-3 text-xl leading-8 font-medium text-black">
          Hello, Christine
        </h6>
        <p className="mb-11 text-lg leading-8 font-normal text-gray-500">
          Your order has been completed and be delivery in only two days .
        </p>
        <div className="mb-6 grid grid-cols-1 gap-3 border-y border-gray-100 py-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          <div className="box group">
            <p className="mb-3 text-base leading-7 font-normal text-gray-500 transition-all duration-500 group-hover:text-gray-700">
              Delivery Date
            </p>
            <h6 className="font-manrope text-2xl leading-9 font-semibold text-black">
              Dec 01, 2023
            </h6>
          </div>
          <div className="box group">
            <p className="mb-3 text-base leading-7 font-normal text-gray-500 transition-all duration-500 group-hover:text-gray-700">
              Order
            </p>
            <h6 className="font-manrope text-2xl leading-9 font-semibold text-black">
              #1023498789
            </h6>
          </div>
          <div className="box group">
            <p className="mb-3 text-base leading-7 font-normal text-gray-500 transition-all duration-500 group-hover:text-gray-700">
              Payment Method
            </p>
          </div>
          <div className="box group">
            <p className="mb-3 text-base leading-7 font-normal text-gray-500 transition-all duration-500 group-hover:text-gray-700">
              Address
            </p>
            <h6 className="font-manrope text-2xl leading-9 font-semibold text-black">
              718 Robbyn Meadow, S...
            </h6>
          </div>
        </div>
        <div className="grid w-full grid-cols-7 border-b border-gray-100 pb-6">
          <div className="col-span-7 min-[500px]:col-span-2 md:col-span-1">
            <img
              src="https://pagedone.io/asset/uploads/1701167681.png"
              alt="Skin Care Kit image"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="col-span-7 flex flex-col justify-center max-sm:mt-5 min-[500px]:col-span-5 min-[500px]:pl-5 md:col-span-6">
            <div className="flex flex-col justify-between min-[500px]:flex-row min-[500px]:items-center">
              <div>
                <h5 className="font-manrope mb-6 text-2xl leading-9 font-semibold text-black">
                  Skin Care Kit
                </h5>
                <p className="text-xl leading-8 font-normal text-gray-500">
                  Quantity : <span className="font-semibold text-black">1</span>
                </p>
              </div>
              <h5 className="font-manrope mt-3 text-3xl leading-10 font-semibold text-black sm:text-right">
                $325.00
              </h5>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-7 border-b border-gray-100 py-6">
          <div className="col-span-7 min-[500px]:col-span-2 md:col-span-1">
            <img
              src="https://pagedone.io/asset/uploads/1701167697.png"
              alt="Skin Tone Serum image"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="col-span-7 flex flex-col justify-center max-sm:mt-5 min-[500px]:col-span-5 min-[500px]:pl-5 md:col-span-6">
            <div className="flex flex-col justify-between min-[500px]:flex-row min-[500px]:items-center">
              <div>
                <h5 className="font-manrope mb-6 text-2xl leading-9 font-semibold text-black">
                  Skin Tone Serum
                </h5>
                <p className="text-xl leading-8 font-normal text-gray-500">
                  Quantity : <span className="font-semibold text-black">1</span>
                </p>
              </div>
              <h5 className="font-manrope mt-3 text-3xl leading-10 font-semibold text-black sm:text-right">
                $325.00
              </h5>
            </div>
          </div>
        </div>
        <div className="my-6 flex w-full items-center justify-center sm:justify-end">
          <div className="w-full">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xl leading-8 font-normal text-gray-500">
                Subtotal
              </p>
              <p className="text-xl leading-8 font-semibold text-gray-900">
                $240.00
              </p>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xl leading-8 font-normal text-gray-500">
                Shipping Charge
              </p>
              <p className="text-xl leading-8 font-semibold text-gray-900">
                $60.00
              </p>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xl leading-8 font-normal text-gray-500">
                Taxes
              </p>
              <p className="text-xl leading-8 font-semibold text-gray-900">
                $50.00
              </p>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xl leading-8 font-normal text-gray-500">
                Discount
              </p>
              <p className="text-xl leading-8 font-semibold text-gray-900">
                $50.00
              </p>
            </div>
            <div className="flex items-center justify-between border-y border-gray-100 py-6">
              <p className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                Total
              </p>
              <p className="font-manrope text-2xl leading-9 font-bold text-indigo-600">
                $300.00
              </p>
            </div>
          </div>
        </div>
        <div className="data">
          <p className="mb-11 text-lg leading-8 font-normal text-gray-500">
            We'll be sending a shipping confirmation email when the items
            shipped successfully.
          </p>
          <h6 className="font-manrope mb-3 text-2xl leading-9 font-bold text-black">
            Thank you for shopping with us!
          </h6>
          <p className="text-xl leading-8 font-medium text-indigo-600">
            Team Pagedone
          </p>
        </div>
      </div>
    </section>
  )
}
