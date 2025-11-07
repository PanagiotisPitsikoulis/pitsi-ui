export default function OrderSummaryWithTwoColumnsFullOrderDetails() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 text-indigo-600 pb-8 border-b border-gray-100 xl:text-left text-center">
          Order summary
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 py-8 border-b border-gray-200 w-full max-xl:max-w-4xl max-xl:mx-auto max-sm:px-5">
          <div className="grid grid-cols-1 gap-3 min-[600px]:grid-cols-2 min-[600px]:gap-8">
            <div className="main-box">
              <div className="flex items-center gap-1 mb-8">
                <h5 className="font-semibold text-xl leading-8 text-black ">
                  Shipping &amp; billing info{" "}
                </h5>
                <button className="p-1.5 rounded-full items-center flex justify-center border border-transparent transition-all duration-500 hover:bg-indigo-100"></button>
              </div>
              <div className=" mb-8">
                <p className="font-normal text-base text-gray-500 mb-2">Name</p>
                <p className="font-normal text-lg leading-8 text-black">
                  Christine Johnson
                </p>
              </div>
              <div className="box mb-7">
                <p className="font-normal text-base text-gray-500 mb-2">
                  Email Address
                </p>
                <p className="font-normal text-lg leading-8 text-black">
                  christine@email.com
                </p>
              </div>
              <div className="box mb-7">
                <p className="font-normal text-base text-gray-500 mb-2">
                  Phone Number
                </p>
                <p className="font-normal text-lg leading-8 text-black">
                  +1 (987) 654 3210
                </p>
              </div>
              <div className="adderss">
                <p className="font-normal text-base text-gray-500 mb-2">
                  Shipping Address
                </p>
                <p className="font-normal text-lg leading-8 text-black">
                  Suite 971 8413 Simonis Gateway, East Marybethberg, NE
                  40805-7949
                </p>
              </div>
            </div>
            <div className="main-box-2">
              <div className="flex items-center gap-3 mb-8">
                <h5 className="font-semibold text-xl leading-8 text-black ">
                  Payment Method
                </h5>
                <button className="p-1.5 rounded-full items-center flex justify-center border border-transparent transition-all duration-500 hover:bg-indigo-100"></button>
              </div>
              <div className="payment-method pb-8 border-b border-gray-100 mb-8">
                <p className="font-normal text-base text-gray-500 mb-2">
                  Payment
                </p>
                <p className="font-normal text-lg leading-8 text-black">
                  Cash on Delivery
                </p>
              </div>
              <div className="flex items-center gap-1 mb-8">
                <h5 className="font-semibold text-xl leading-8 text-black ">
                  Shipping Method
                </h5>
                <button className="p-1.5 rounded-full items-center flex justify-center border border-transparent transition-all duration-500 hover:bg-indigo-100"></button>
              </div>
              <div className="payment-method mb-8">
                <p className="font-normal text-base text-gray-500 mb-2">
                  Shipping
                </p>
                <p className="font-normal text-lg leading-8 text-black">
                  Post Service (1-3 Work Day)
                </p>
              </div>
              <div className="payment-method ">
                <p className="font-normal text-base text-gray-500 mb-2">Note</p>
                <p className="font-normal text-lg leading-8 text-black">
                  Please notify me once the order has been shipped, and provide
                  the tracking information for my reference.
                </p>
              </div>
            </div>
          </div>
          <div className="cart w-full">
            <div className="flex items-center gap-1 mb-8">
              <h5 className="font-semibold text-xl leading-8 text-black ">
                Items in your Shopping Cart
              </h5>
              <button className="p-1.5 rounded-full items-center flex justify-center border border-transparent transition-all duration-500 hover:bg-indigo-100"></button>
            </div>
            <div className="flex flex-col min-[600px]:flex-row min-[600px]:items-center gap-6 pb-6 border-b border-gray-100">
              <div className="w-full min-[600px]:max-w-[112px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167711.png"
                  alt="Branded Beauty Product image"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col min-[600px]:flex-row min-[600px]:items-center justify-between w-full">
                <div>
                  <h5 className="font-semibold text-lg leading-8 text-black mb-2">
                    Branded Beauty Product
                  </h5>
                  <p className="font-normal text-base text-gray-500 mb-3">
                    By: Dust Studio{" "}
                  </p>
                  <div className="flex items-center">
                    <p className="font-medium text-base text-black pr-4 border-r border-gray-100 mr-4">
                      Size:
                      <span className="text-gray-500">M</span>
                    </p>
                    <p className="font-medium text-base text-black">
                      Qty: <span className="text-gray-500">1</span>
                    </p>
                  </div>
                </div>
                <h6 className="font-semibold text-lg leading-8 text-indigo-600 ">
                  $120.00
                </h6>
              </div>
            </div>
            <div className="flex flex-col min-[600px]:flex-row min-[600px]:items-center gap-6 py-6 border-b border-gray-100">
              <div className="w-full min-[600px]:max-w-[112px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167726.png"
                  alt="White t-shirt image"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col min-[600px]:flex-row min-[600px]:items-center justify-between w-full">
                <div>
                  <h5 className="font-semibold text-lg leading-8 text-black mb-2">
                    White t-shirt and brown leather boots
                  </h5>
                  <p className="font-normal text-base text-gray-500 mb-3">
                    By: Dust Studio{" "}
                  </p>
                  <div className="flex items-center">
                    <p className="font-medium text-base text-black pr-4 border-r border-gray-100 mr-4">
                      Size:
                      <span className="text-gray-500">M</span>
                    </p>
                    <p className="font-medium text-base text-black">
                      Qty: <span className="text-gray-500">1</span>
                    </p>
                  </div>
                </div>
                <h6 className="font-semibold text-lg leading-8 text-indigo-600 ">
                  $120.00
                </h6>
              </div>
            </div>
            <div className="flex flex-col min-[600px]:flex-row min-[600px]:items-center gap-6 py-6 border-b border-gray-100">
              <div className="w-full min-[600px]:max-w-[112px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701167740.png"
                  alt="Black crew neck t-shirt image"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col min-[600px]:flex-row min-[600px]:items-center justify-between w-full">
                <div>
                  <h5 className="font-semibold text-lg leading-8 text-black mb-2">
                    ZNY Black crew neck t-shirt
                  </h5>
                  <p className="font-normal text-base text-gray-500 mb-3">
                    By: Dust Studio{" "}
                  </p>
                  <div className="flex items-center">
                    <p className="font-medium text-base text-black pr-4 border-r border-gray-100 mr-4">
                      Size:
                      <span className="text-gray-500">M</span>
                    </p>
                    <p className="font-medium text-base text-black">
                      Qty: <span className="text-gray-500">1</span>
                    </p>
                  </div>
                </div>
                <h6 className="font-semibold text-lg leading-8 text-indigo-600 ">
                  $120.00
                </h6>
              </div>
            </div>
            <div className="flex items-center justify-between pt-8">
              <p className="font-semibold text-xl leading-8 text-gray-900">
                Total Price:
              </p>
              <p className="font-semibold text-xl leading-8 text-indigo-600">
                $360.00
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-8 max-[600px]:max-w-sm max-[600px]:mx-auto min-[600px]:max-w-4xl min-[600px]:mx-auto xl:max-w-full">
          <h6 className="font-manrope font-bold text-2xl leading-9 text-black mb-3">
            Thank you for shopping with us!
          </h6>
          <p className="font-medium text-xl leading-8 text-indigo-600">
            Team Pagedone
          </p>
        </div>
      </div>
    </section>
  );
}
