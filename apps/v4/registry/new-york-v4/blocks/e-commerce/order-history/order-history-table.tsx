export default function OrderHistoryTable() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="main-data rounded-3xl bg-gray-50 p-8 sm:p-14">
          <h2 className="font-manrope mb-16 text-center text-4xl font-semibold text-black">
            Order History
          </h2>
          <div className="grid grid-cols-8 pb-9">
            <div className="col-span-8 lg:col-span-4">
              <p className="text-lg leading-8 font-medium text-indigo-600">
                Product{" "}
              </p>
            </div>
            <div className="col-span-1 max-lg:hidden">
              <p className="text-center text-lg leading-8 font-medium text-gray-600">
                price{" "}
              </p>
            </div>
            <div className="col-span-1 flex items-center justify-center max-lg:hidden">
              <p className="text-lg leading-8 font-medium text-gray-600">
                Qty{" "}
              </p>
            </div>
            <div className="col-span-2 max-lg:hidden">
              <p className="text-lg leading-8 font-medium text-gray-500">
                Delivery Expected by{" "}
              </p>
            </div>
          </div>
          <div className="box mb-7 grid cursor-pointer grid-cols-8 rounded-3xl bg-gray-100 p-8 transition-all duration-500 hover:bg-indigo-50 max-lg:mx-auto max-lg:max-w-xl">
            <div className="col-span-8 sm:col-span-4 sm:row-span-4 lg:col-span-1 lg:row-span-1">
              <img
                src="https://pagedone.io/asset/uploads/1705474950.png"
                alt="earbuds image"
                className="rounded-xl object-cover max-lg:w-auto max-sm:mx-auto"
              />
            </div>
            <div className="col-span-8 flex h-full flex-col justify-center pl-4 max-lg:items-center sm:col-span-4 lg:col-span-3">
              <h5 className="font-manrope mb-1 text-2xl leading-9 font-semibold whitespace-nowrap text-black">
                Apple Airpods Pro
              </h5>
              <p className="text-base leading-7 font-normal text-gray-600 max-md:text-center">
                White
              </p>
            </div>
            <div className="col-span-8 flex items-center justify-center sm:col-span-4 lg:col-span-1">
              <p className="text-xl leading-8 font-semibold text-black">
                $249.99
              </p>
            </div>
            <div className="col-span-8 flex items-center justify-center sm:col-span-4 lg:col-span-1">
              <p className="text-center text-xl leading-8 font-semibold text-indigo-600">
                2
              </p>
            </div>
            <div className="col-span-8 flex items-center justify-center sm:col-span-4 lg:col-span-2">
              <p className="text-xl leading-8 font-semibold text-black">
                23rd March 2021
              </p>
            </div>
          </div>
          <div className="box mb-7 grid cursor-pointer grid-cols-8 rounded-3xl bg-gray-100 p-8 transition-all duration-500 hover:bg-indigo-50 max-lg:mx-auto max-lg:max-w-xl">
            <div className="col-span-8 sm:col-span-4 sm:row-span-4 lg:col-span-1 lg:row-span-1">
              <img
                src="https://pagedone.io/asset/uploads/1705474950.png"
                alt="earbuds image"
                className="rounded-xl object-cover max-lg:w-auto max-sm:mx-auto"
              />
            </div>
            <div className="col-span-8 flex h-full flex-col justify-center pl-4 max-lg:items-center sm:col-span-4 lg:col-span-3">
              <h5 className="font-manrope mb-1 text-2xl leading-9 font-semibold whitespace-nowrap text-black">
                Apple Airpods Pro
              </h5>
              <p className="text-base leading-7 font-normal text-gray-600 max-md:text-center">
                White
              </p>
            </div>
            <div className="col-span-8 flex items-center justify-center sm:col-span-4 lg:col-span-1">
              <p className="text-xl leading-8 font-semibold text-black">
                $249.99
              </p>
            </div>
            <div className="col-span-8 flex items-center justify-center sm:col-span-4 lg:col-span-1">
              <p className="text-center text-xl leading-8 font-semibold text-indigo-600">
                2
              </p>
            </div>
            <div className="col-span-8 flex items-center justify-center sm:col-span-4 lg:col-span-2">
              <p className="text-xl leading-8 font-semibold text-black">
                23rd March 2021
              </p>
            </div>
          </div>
          <div className="box mb-7 grid cursor-pointer grid-cols-8 rounded-3xl bg-gray-100 p-8 transition-all duration-500 hover:bg-indigo-50 max-lg:mx-auto max-lg:max-w-xl">
            <div className="col-span-8 sm:col-span-4 sm:row-span-4 lg:col-span-1 lg:row-span-1">
              <img
                src="https://pagedone.io/asset/uploads/1705474950.png"
                alt="earbuds image"
                className="rounded-xl object-cover max-lg:w-auto max-sm:mx-auto"
              />
            </div>
            <div className="col-span-8 flex h-full flex-col justify-center pl-4 max-lg:items-center sm:col-span-4 lg:col-span-3">
              <h5 className="font-manrope mb-1 text-2xl leading-9 font-semibold whitespace-nowrap text-black">
                Apple Airpods Pro
              </h5>
              <p className="text-base leading-7 font-normal text-gray-600 max-md:text-center">
                White
              </p>
            </div>
            <div className="col-span-8 flex items-center justify-center sm:col-span-4 lg:col-span-1">
              <p className="text-xl leading-8 font-semibold text-black">
                $249.99
              </p>
            </div>
            <div className="col-span-8 flex items-center justify-center sm:col-span-4 lg:col-span-1">
              <p className="text-center text-xl leading-8 font-semibold text-indigo-600">
                2
              </p>
            </div>
            <div className="col-span-8 flex items-center justify-center sm:col-span-4 lg:col-span-2">
              <p className="text-xl leading-8 font-semibold text-black">
                23rd March 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
