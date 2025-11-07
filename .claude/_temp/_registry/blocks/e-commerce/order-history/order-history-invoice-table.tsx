export default function OrderHistoryInvoiceTable() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6 px-9 bg-gray-50 border border-gray-200 rounded-xl mb-16">
          <div className="data">
            <p className="font-normal text-lg leading-8 text-gray-500 mb-2">
              Total Amount
            </p>
            <h5 className="font-manrope font-semibold text-2xl leading-9 text-black">
              $1000.00
            </h5>
          </div>
          <div className="data">
            <p className="font-normal text-lg leading-8 text-gray-500 mb-2">
              Placed Date
            </p>
            <h5 className="font-manrope font-semibold text-2xl leading-9 text-black">
              24 jan, 2023
            </h5>
          </div>
          <div className="data">
            <p className="font-normal text-lg leading-8 text-gray-500 mb-2">
              Payment Method
            </p>
          </div>
          <div className="data">
            <p className="font-normal text-lg leading-8 text-gray-500 mb-2">
              Address
            </p>
            <h5 className="font-manrope font-semibold text-2xl leading-9 text-black whitespace-nowrap">
              Raiya, Rajkot, Gujarat
            </h5>
          </div>
        </div>
        <h5 className="font-medium text-xl lead-8 text-black mb-10">
          Order history List
        </h5>
        <div className="flex items-center gap-8 mb-6 w-[calc(100%-208px)]">
          <p className="font-normal text-base leading-7 text-gray-500 w-full max-w-sm max-lg:hidden">
            Product
          </p>
          <p className="font-normal text-base leading-7 text-gray-500 w-full max-w-[176px] max-lg:hidden">
            Order Number
          </p>
          <p className="font-normal text-base leading-7 text-gray-500 w-full max-w-[176px] max-lg:hidden">
            Status
          </p>
          <p className="font-normal text-base leading-7 text-gray-500 w-full max-w-[176px] max-lg:hidden">
            Price
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-8 ">
          <div className="col-span-12 lg:col-span-4 max-sm:flex-col flex sm:items-center gap-3 sm:gap-8">
            <img
              src="https://pagedone.io/asset/uploads/1705474654.png"
              alt="order history image"
              className="w-28 h-28 object-cover max-sm:mx-auto rounded-md"
            />
            <h5 className="font-medium text-lg leading-8 text-black whitespace-nowrap max-sm:text-center">
              Decoration Item Set
            </h5>
          </div>
          <div className="col-span-12 lg:col-span-8 flex items-center gap-3 sm:gap-8 flex-col sm:flex-row w-full">
            <p className="font-normal text-lg leading-8 text-gray-500 w-full  max-sm:text-center">
              PK0010820563
            </p>
            <p className="font-normal text-lg leading-8 text-emerald-500 w-full max-sm:text-center">
              Delivered
            </p>
            <p className="font-normal text-lg leading-8 text-gray-500 w-full max-sm:text-center">
              $70.55
            </p>
            <button className="rounded-full border border-gray-300 py-3 px-7 whitespace-nowrap font-semibold text-sm text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-100 hover:border-gray-400">
              Show Invoice
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-8  ">
          <div className="col-span-12 lg:col-span-4 max-sm:flex-col flex sm:items-center gap-3 sm:gap-8">
            <img
              src="https://pagedone.io/asset/uploads/1705474654.png"
              alt="order history image"
              className="w-28 h-28 object-cover max-sm:mx-auto rounded-md"
            />
            <h5 className="font-medium text-lg leading-8 text-black whitespace-nowrap max-sm:text-center">
              Decoration Item Set
            </h5>
          </div>
          <div className="col-span-12 lg:col-span-8 flex items-center gap-3 sm:gap-8 flex-col sm:flex-row w-full">
            <p className="font-normal text-lg leading-8 text-gray-500 w-full max-sm:text-center ">
              PK0010820563
            </p>
            <p className="font-normal text-lg leading-8 text-red-500 w-full max-sm:text-center">
              Cancelled
            </p>
            <p className="font-normal text-lg leading-8 text-gray-500 w-full max-sm:text-center">
              $70.55
            </p>
            <button className="rounded-full border border-gray-300 py-3 px-7 font-semibold whitespace-nowrap text-sm text-white bg-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
              Buy Again
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-8  ">
          <div className="col-span-12 lg:col-span-4 max-sm:flex-col flex sm:items-center gap-3 sm:gap-8">
            <img
              src="https://pagedone.io/asset/uploads/1705474654.png"
              alt="order history image"
              className="w-28 h-28 object-cover max-sm:mx-auto rounded-md"
            />
            <h5 className="font-medium text-lg leading-8 text-black whitespace-nowrap max-sm:text-center">
              Decoration Item Set
            </h5>
          </div>
          <div className="col-span-12 lg:col-span-8 flex items-center gap-3 sm:gap-8 flex-col sm:flex-row w-full">
            <p className="font-normal text-lg leading-8 text-gray-500 w-full max-sm:text-center ">
              PK0010820563
            </p>
            <p className="font-normal text-lg leading-8 text-emerald-500 w-full max-sm:text-center">
              Delivered
            </p>
            <p className="font-normal text-lg leading-8 text-gray-500 w-full max-sm:text-center">
              $70.55
            </p>
            <button className="rounded-full whitespace-nowrap border border-gray-300 py-3 px-7 font-semibold text-sm text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:shadow-gray-100 hover:border-gray-400">
              Show Invoice
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
