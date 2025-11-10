export default function OrderSummaryWithTwoColumnsFullOrderDetails() {
  return (
    <section className="relative py-24">
      <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
        <h2 className="font-manrope border-b border-gray-100 pb-8 text-center text-4xl leading-10 font-bold text-indigo-600 xl:text-left">
          Order summary
        </h2>
        <div className="grid w-full grid-cols-1 gap-8 border-b border-gray-200 py-8 max-xl:mx-auto max-xl:max-w-4xl max-sm:px-5 xl:grid-cols-2">
          <div className="grid grid-cols-1 gap-3 min-[600px]:grid-cols-2 min-[600px]:gap-8">
            <div className="main-box">
              <div className="mb-8 flex items-center gap-1">
                <h5 className="text-xl leading-8 font-semibold text-black">
                  Shipping &amp; billing info{" "}
                </h5>
                <button className="flex items-center justify-center rounded-full border border-transparent p-1.5 transition-all duration-500 hover:bg-indigo-100"></button>
              </div>
              <div className="mb-8">
                <p className="mb-2 text-base font-normal text-gray-500">Name</p>
                <p className="text-lg leading-8 font-normal text-black">
                  Christine Johnson
                </p>
              </div>
              <div className="box mb-7">
                <p className="mb-2 text-base font-normal text-gray-500">
                  Email Address
                </p>
                <p className="text-lg leading-8 font-normal text-black">
                  christine@email.com
                </p>
              </div>
              <div className="box mb-7">
                <p className="mb-2 text-base font-normal text-gray-500">
                  Phone Number
                </p>
                <p className="text-lg leading-8 font-normal text-black">
                  +1 (987) 654 3210
                </p>
              </div>
              <div className="adderss">
                <p className="mb-2 text-base font-normal text-gray-500">
                  Shipping Address
                </p>
                <p className="text-lg leading-8 font-normal text-black">
                  Suite 971 8413 Simonis Gateway, East Marybethberg, NE
                  40805-7949
                </p>
              </div>
            </div>
            <div className="main-box-2">
              <div className="mb-8 flex items-center gap-3">
                <h5 className="text-xl leading-8 font-semibold text-black">
                  Payment Method
                </h5>
                <button className="flex items-center justify-center rounded-full border border-transparent p-1.5 transition-all duration-500 hover:bg-indigo-100"></button>
              </div>
              <div className="payment-method mb-8 border-b border-gray-100 pb-8">
                <p className="mb-2 text-base font-normal text-gray-500">
                  Payment
                </p>
                <p className="text-lg leading-8 font-normal text-black">
                  Cash on Delivery
                </p>
              </div>
              <div className="mb-8 flex items-center gap-1">
                <h5 className="text-xl leading-8 font-semibold text-black">
                  Shipping Method
                </h5>
                <button className="flex items-center justify-center rounded-full border border-transparent p-1.5 transition-all duration-500 hover:bg-indigo-100"></button>
              </div>
              <div className="payment-method mb-8">
                <p className="mb-2 text-base font-normal text-gray-500">
                  Shipping
                </p>
                <p className="text-lg leading-8 font-normal text-black">
                  Post Service (1-3 Work Day)
                </p>
              </div>
              <div className="payment-method">
                <p className="mb-2 text-base font-normal text-gray-500">Note</p>
                <p className="text-lg leading-8 font-normal text-black">
                  Please notify me once the order has been shipped, and provide
                  the tracking information for my reference.
                </p>
              </div>
            </div>
          </div>
          <div className="cart w-full">
            <div className="mb-8 flex items-center gap-1">
              <h5 className="text-xl leading-8 font-semibold text-black">
                Items in your Shopping Cart
              </h5>
              <button className="flex items-center justify-center rounded-full border border-transparent p-1.5 transition-all duration-500 hover:bg-indigo-100"></button>
            </div>
            <div className="flex flex-col gap-6 border-b border-gray-100 pb-6 min-[600px]:flex-row min-[600px]:items-center">
              <div className="w-full min-[600px]:max-w-[112px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167711.png"
                  alt="Branded Beauty Product image"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col justify-between min-[600px]:flex-row min-[600px]:items-center">
                <div>
                  <h5 className="mb-2 text-lg leading-8 font-semibold text-black">
                    Branded Beauty Product
                  </h5>
                  <p className="mb-3 text-base font-normal text-gray-500">
                    By: Dust Studio{" "}
                  </p>
                  <div className="flex items-center">
                    <p className="mr-4 border-r border-gray-100 pr-4 text-base font-medium text-black">
                      Size:
                      <span className="text-gray-500">M</span>
                    </p>
                    <p className="text-base font-medium text-black">
                      Qty: <span className="text-gray-500">1</span>
                    </p>
                  </div>
                </div>
                <h6 className="text-lg leading-8 font-semibold text-indigo-600">
                  $120.00
                </h6>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-b border-gray-100 py-6 min-[600px]:flex-row min-[600px]:items-center">
              <div className="w-full min-[600px]:max-w-[112px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167726.png"
                  alt="White t-shirt image"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col justify-between min-[600px]:flex-row min-[600px]:items-center">
                <div>
                  <h5 className="mb-2 text-lg leading-8 font-semibold text-black">
                    White t-shirt and brown leather boots
                  </h5>
                  <p className="mb-3 text-base font-normal text-gray-500">
                    By: Dust Studio{" "}
                  </p>
                  <div className="flex items-center">
                    <p className="mr-4 border-r border-gray-100 pr-4 text-base font-medium text-black">
                      Size:
                      <span className="text-gray-500">M</span>
                    </p>
                    <p className="text-base font-medium text-black">
                      Qty: <span className="text-gray-500">1</span>
                    </p>
                  </div>
                </div>
                <h6 className="text-lg leading-8 font-semibold text-indigo-600">
                  $120.00
                </h6>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-b border-gray-100 py-6 min-[600px]:flex-row min-[600px]:items-center">
              <div className="w-full min-[600px]:max-w-[112px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167740.png"
                  alt="Black crew neck t-shirt image"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col justify-between min-[600px]:flex-row min-[600px]:items-center">
                <div>
                  <h5 className="mb-2 text-lg leading-8 font-semibold text-black">
                    ZNY Black crew neck t-shirt
                  </h5>
                  <p className="mb-3 text-base font-normal text-gray-500">
                    By: Dust Studio{" "}
                  </p>
                  <div className="flex items-center">
                    <p className="mr-4 border-r border-gray-100 pr-4 text-base font-medium text-black">
                      Size:
                      <span className="text-gray-500">M</span>
                    </p>
                    <p className="text-base font-medium text-black">
                      Qty: <span className="text-gray-500">1</span>
                    </p>
                  </div>
                </div>
                <h6 className="text-lg leading-8 font-semibold text-indigo-600">
                  $120.00
                </h6>
              </div>
            </div>
            <div className="flex items-center justify-between pt-8">
              <p className="text-xl leading-8 font-semibold text-gray-900">
                Total Price:
              </p>
              <p className="text-xl leading-8 font-semibold text-indigo-600">
                $360.00
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-8 max-[600px]:mx-auto max-[600px]:max-w-sm min-[600px]:mx-auto min-[600px]:max-w-4xl xl:max-w-full">
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
