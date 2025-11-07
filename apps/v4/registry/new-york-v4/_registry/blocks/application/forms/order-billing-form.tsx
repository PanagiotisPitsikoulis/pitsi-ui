export default function OrderBillingForm() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-center gap-4">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
            Order Billing
          </h2>
          <p className="text-center text-base leading-relaxed font-normal text-gray-500">
            Order billing is the process of generating invoices or bills for
            goods or services purchased by customers.
          </p>
        </div>
        <div className="my-8 grid grid-cols-1 gap-8 lg:my-14 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-start justify-start gap-6">
            <h4 className="text-xl leading-8 font-semibold text-gray-900">
              Basic Information
            </h4>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="John"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-7 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="John"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-7 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Tracking
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="John"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-6">
            <h4 className="text-xl leading-8 font-semibold text-gray-900">
              Address Informatiom
            </h4>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="John"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-1.5">
                <label
                  htmlFor=""
                  className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                >
                  Address 2
                </label>
                <input
                  type="text"
                  className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="John"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-7 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-7 sm:flex-row">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label
                    htmlFor=""
                    className="flex items-center gap-1 text-base leading-relaxed font-medium text-gray-600"
                  >
                    County
                  </label>
                  <input
                    type="text"
                    className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="John"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto flex w-full items-center justify-center rounded-xl bg-indigo-600 px-7 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700 sm:w-fit">
          <span className="px-2 text-center text-lg leading-8 font-semibold text-white">
            Order Now
          </span>
        </button>
      </div>
    </section>
  )
}
