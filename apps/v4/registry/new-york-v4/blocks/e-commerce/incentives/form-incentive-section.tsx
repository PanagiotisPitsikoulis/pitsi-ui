export default function FormIncentiveSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-10 gap-8">
          <div className="col-span-10 flex h-[273px] flex-col items-center justify-end rounded-xl bg-cover bg-center p-6 lg:col-span-4 lg:items-start">
            <h4 className="mb-4 text-xl leading-8 font-medium text-white">
              Launch your business in Simple way
            </h4>
            <form className="form flex flex-col gap-4 md:flex-row">
              <div className="flex items-center gap-2 rounded-[100px] border border-gray-300 bg-transparent px-4 py-[10px]">
                <input
                  type="text"
                  name="text"
                  id=""
                  placeholder="Enter 10 digit here...."
                  className="w-3/5 border-none bg-transparent py-[1px] text-base font-normal text-gray-400 outline-none"
                />
              </div>
              <button className="rounded-[100px] bg-indigo-600 px-6 py-[13px] text-sm font-semibold whitespace-nowrap text-white shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-0 hover:bg-indigo-700 hover:shadow-indigo-400">
                Get Incentive
              </button>
            </form>
          </div>
          <div className="col-span-10 w-full lg:col-span-6">
            <div className="box flex h-full flex-col justify-center">
              <h2 className="font-manrope mb-14 text-center text-3xl leading-10 font-bold text-black lg:text-left">
                Best support for our client
              </h2>
              <div className="grid w-full grid-cols-3 sm:grid-cols-5">
                <div className="box flex flex-col items-center">
                  <button className="mx-auto flex items-center justify-center rounded-full bg-white p-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-50 hover:shadow-indigo-200"></button>
                  <p className="mt-2 w-[92px] text-center text-sm font-medium text-black">
                    {" "}
                    7* day Payment{" "}
                  </p>
                </div>
                <div className="box flex flex-col items-center">
                  <button className="mx-auto flex items-center justify-center rounded-full bg-white p-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-50 hover:shadow-indigo-200"></button>
                  <p className="mt-2 w-[92px] text-center text-sm font-medium text-black">
                    {" "}
                    Pan - India delivery{" "}
                  </p>
                </div>
                <div className="box flex flex-col items-center">
                  <button className="mx-auto flex items-center justify-center rounded-full bg-white p-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-50 hover:shadow-indigo-200"></button>
                  <p className="mt-2 w-[92px] text-center text-sm font-medium text-black">
                    {" "}
                    500000+ Seller{" "}
                  </p>
                </div>
                <div className="box flex flex-col items-center">
                  <button className="mx-auto flex items-center justify-center rounded-full bg-white p-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-50 hover:shadow-indigo-200"></button>
                  <p className="mt-2 w-[92px] text-center text-sm font-medium text-black">
                    {" "}
                    Account Management{" "}
                  </p>
                </div>
                <div className="box flex flex-col items-center">
                  <button className="mx-auto flex items-center justify-center rounded-full bg-white p-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-50 hover:shadow-indigo-200"></button>
                  <p className="mt-2 w-[92px] text-center text-sm font-medium text-black">
                    {" "}
                    100+ Startups{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
