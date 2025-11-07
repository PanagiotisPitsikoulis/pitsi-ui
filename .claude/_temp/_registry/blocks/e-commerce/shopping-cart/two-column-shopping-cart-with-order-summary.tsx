export default function TwoColumnShoppingCartWithOrderSummary() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-14">
          <div className="lg:col-span-8">
            <h2 className="w-full text-gray-900 text-3xl font-semibold font-manrope leading-normal text-start">
              Cart
            </h2>
            <div className="my-8 w-full pb-8 border-b border-gray-200 justify-start items-center gap-16 flex md:flex-row flex-col">
              <img
                className="mx-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1712571255.png"
                alt="shopping cart section image"
              />
              <div className="w-full justify-between flex-col items-start gap-6 inline-flex">
                <div className="w-full justify-between items-center inline-flex">
                  <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                    Man T-shirt
                  </h3>
                  <h4 className="text-right text-emerald-900 text-xl font-semibold leading-loose">
                    ₹2,000
                  </h4>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                    Color :{" "}
                    <span className="text-gray-900 font-semibold">Black</span>
                  </h6>
                  <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                    Size :{" "}
                    <span className="text-gray-900 font-semibold">L</span>
                  </h6>
                  <h6 className="text-gray-600 text-base font-normal leading-relaxed">
                    Material :{" "}
                    <span className="text-gray-900 font-semibold">Cotton</span>
                  </h6>
                </div>
                <div className="w-full justify-between items-end inline-flex pt-6 border-t border-gray-200">
                  <div className="flex items-center w-full mx-auto justify-start">
                    <button className="group rounded-l-lg px-4 py-3 border border-gray-300 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50"></button>
                    <input
                      type="text"
                      className="border-y border-gray-300 outline-none text-gray-900 font-semibold text-lg w-14 px-6 placeholder:text-gray-900 text-center bg-transparent leading-snug h-12"
                    />
                    <button className="group rounded-r-lg px-4 py-3 border border-gray-300 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50"></button>
                  </div>
                  <button className="group p-3 rounded-lg border border-gray-300 hover:border-transparent hover:bg-red-700 transition-all duration-700 ease-in-out justify-start items-start inline-flex"></button>
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-start gap-8 flex md:flex-row flex-col">
              <button className="w-full p-4 rounded-xl border border-gray-200 justify-start items-center gap-3 flex">
                <span className="text-start text-gray-900 text-base font-semibold leading-relaxed">
                  35% on Selected Styles
                </span>
              </button>
              <button className="w-full p-4 rounded-xl border border-gray-200 justify-start items-center gap-3 flex">
                <span className="text-start text-gray-900 text-base font-semibold leading-relaxed">
                  Free Shipping for Members
                </span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 flex-col justify-start items-start gap-8 inline-flex">
            <h2 className="text-gray-900 text-3xl font-semibold font-manrope leading-normal">
              Order Summary
            </h2>
            <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-start gap-4 flex">
              <div className="w-full justify-between items-center inline-flex">
                <h6 className="text-gray-600 text-lg font-normal leading-8">
                  Subtotal:
                </h6>
                <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                  ₹2000.00
                </h6>
              </div>
              <div className="w-full justify-between items-center gap-6 inline-flex">
                <h6 className="text-gray-600 text-lg font-normal leading-8">
                  Delivery:
                </h6>
                <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                  ₹22.00
                </h6>
              </div>
              <div className="w-full pb-4 border-b border-gray-200 justify-between items-center gap-6 inline-flex">
                <h6 className="text-gray-600 text-lg font-normal leading-8">
                  Tax:
                </h6>
                <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                  ₹0
                </h6>
              </div>
              <div className="w-full justify-between items-center gap-6 inline-flex">
                <h6 className="text-gray-600 text-lg font-normal leading-8">
                  Total:
                </h6>
                <h6 className="text-right text-gray-900 text-lg font-semibold leading-8">
                  ₹2022.00
                </h6>
              </div>
            </div>
            <div className="w-full flex-col justify-center items-center gap-8 flex">
              <button className="w-full px-6 py-3 bg-emerald-900 hover:bg-emerald-950 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                <span className="px-2 text-white text-lg font-semibold leading-8">
                  Check Out
                </span>
              </button>
              <div className="justify-center items-center gap-5 inline-flex">
                <a className="w-[58px] h-10 flex justify-center items-center relative bg-white hover:bg-gray-50 transition-all duration-700 ease-in-out rounded-md border border-gray-100"></a>
                <a className="w-[58px] h-10 flex justify-center items-center relative bg-white hover:bg-gray-50 transition-all duration-700 ease-in-out rounded-lg border border-gray-100"></a>
                <a className="w-[58px] h-10 flex justify-center items-center bg-white hover:bg-gray-50 transition-all duration-700 ease-in-out rounded-md border border-gray-100"></a>
                <a className="w-[58px] h-10 flex justify-center items-center bg-white hover:bg-gray-50 transition-all duration-700 ease-in-out rounded-md border border-gray-100"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
