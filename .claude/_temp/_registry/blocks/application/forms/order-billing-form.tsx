export default function OrderBillingForm() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-center items-center gap-4 inline-flex">
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Order Billing
          </h2>
          <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
            Order billing is the process of generating invoices or bills for
            goods or services purchased by customers.
          </p>
        </div>
        <div className="lg:my-14 my-8 grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="w-full flex-col justify-start items-start gap-6 inline-flex">
            <h4 className="text-gray-900 text-xl font-semibold leading-8">
              Basic Information
            </h4>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="John"
                />
              </div>
              <div className="w-full justify-start items-start gap-7 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="John"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="John"
                />
              </div>
              <div className="w-full justify-start items-start gap-7 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="John"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Tracking
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="John"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-6 inline-flex">
            <h4 className="text-gray-900 text-xl font-semibold leading-8">
              Address Informatiom
            </h4>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="John"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label
                  htmlFor=""
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Address 2
                </label>
                <input
                  type="text"
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                  placeholder="John"
                />
              </div>
              <div className="w-full justify-start items-start gap-7 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="John"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="w-full justify-start items-start gap-7 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="John"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label
                    htmlFor=""
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    County
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="John"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto sm:w-fit w-full px-7 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
          <span className="px-2 text-center text-white text-lg font-semibold leading-8">
            Order Now
          </span>
        </button>
      </div>
    </section>
  );
}
