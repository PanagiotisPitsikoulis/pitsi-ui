export default function OrderHistoryInvoiceTable() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-xl border border-gray-200 bg-gray-50 px-9 py-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="data">
            <p className="mb-2 text-lg leading-8 font-normal text-gray-500">
              Total Amount
            </p>
            <h5 className="font-manrope text-2xl leading-9 font-semibold text-black">
              $1000.00
            </h5>
          </div>
          <div className="data">
            <p className="mb-2 text-lg leading-8 font-normal text-gray-500">
              Placed Date
            </p>
            <h5 className="font-manrope text-2xl leading-9 font-semibold text-black">
              24 jan, 2023
            </h5>
          </div>
          <div className="data">
            <p className="mb-2 text-lg leading-8 font-normal text-gray-500">
              Payment Method
            </p>
          </div>
          <div className="data">
            <p className="mb-2 text-lg leading-8 font-normal text-gray-500">
              Address
            </p>
            <h5 className="font-manrope text-2xl leading-9 font-semibold whitespace-nowrap text-black">
              Raiya, Rajkot, Gujarat
            </h5>
          </div>
        </div>
        <h5 className="lead-8 mb-10 text-xl font-medium text-black">
          Order history List
        </h5>
        <div className="mb-6 flex w-[calc(100%-208px)] items-center gap-8">
          <p className="w-full max-w-sm text-base leading-7 font-normal text-gray-500 max-lg:hidden">
            Product
          </p>
          <p className="w-full max-w-[176px] text-base leading-7 font-normal text-gray-500 max-lg:hidden">
            Order Number
          </p>
          <p className="w-full max-w-[176px] text-base leading-7 font-normal text-gray-500 max-lg:hidden">
            Status
          </p>
          <p className="w-full max-w-[176px] text-base leading-7 font-normal text-gray-500 max-lg:hidden">
            Price
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-8">
          <div className="col-span-12 flex gap-3 max-sm:flex-col sm:items-center sm:gap-8 lg:col-span-4">
            <img
              src="https://pagedone.io/asset/uploads/1705474654.png"
              alt="order history image"
              className="h-28 w-28 rounded-md object-cover max-sm:mx-auto"
            />
            <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-black max-sm:text-center">
              Decoration Item Set
            </h5>
          </div>
          <div className="col-span-12 flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-8 lg:col-span-8">
            <p className="w-full text-lg leading-8 font-normal text-gray-500 max-sm:text-center">
              PK0010820563
            </p>
            <p className="w-full text-lg leading-8 font-normal text-emerald-500 max-sm:text-center">
              Delivered
            </p>
            <p className="w-full text-lg leading-8 font-normal text-gray-500 max-sm:text-center">
              $70.55
            </p>
            <button className="rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-100">
              Show Invoice
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-8">
          <div className="col-span-12 flex gap-3 max-sm:flex-col sm:items-center sm:gap-8 lg:col-span-4">
            <img
              src="https://pagedone.io/asset/uploads/1705474654.png"
              alt="order history image"
              className="h-28 w-28 rounded-md object-cover max-sm:mx-auto"
            />
            <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-black max-sm:text-center">
              Decoration Item Set
            </h5>
          </div>
          <div className="col-span-12 flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-8 lg:col-span-8">
            <p className="w-full text-lg leading-8 font-normal text-gray-500 max-sm:text-center">
              PK0010820563
            </p>
            <p className="w-full text-lg leading-8 font-normal text-red-500 max-sm:text-center">
              Cancelled
            </p>
            <p className="w-full text-lg leading-8 font-normal text-gray-500 max-sm:text-center">
              $70.55
            </p>
            <button className="rounded-full border border-gray-300 bg-indigo-600 px-7 py-3 text-sm font-semibold whitespace-nowrap text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
              Buy Again
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-8">
          <div className="col-span-12 flex gap-3 max-sm:flex-col sm:items-center sm:gap-8 lg:col-span-4">
            <img
              src="https://pagedone.io/asset/uploads/1705474654.png"
              alt="order history image"
              className="h-28 w-28 rounded-md object-cover max-sm:mx-auto"
            />
            <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-black max-sm:text-center">
              Decoration Item Set
            </h5>
          </div>
          <div className="col-span-12 flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-8 lg:col-span-8">
            <p className="w-full text-lg leading-8 font-normal text-gray-500 max-sm:text-center">
              PK0010820563
            </p>
            <p className="w-full text-lg leading-8 font-normal text-emerald-500 max-sm:text-center">
              Delivered
            </p>
            <p className="w-full text-lg leading-8 font-normal text-gray-500 max-sm:text-center">
              $70.55
            </p>
            <button className="rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-100">
              Show Invoice
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
