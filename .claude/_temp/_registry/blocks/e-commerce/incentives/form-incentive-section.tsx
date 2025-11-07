export default function FormIncentiveSection() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-10 gap-8">
          <div className="col-span-10 lg:col-span-4 bg-cover bg-center h-[273px] rounded-xl flex flex-col justify-end p-6 lg:items-start items-center">
            <h4 className="font-medium text-xl leading-8 text-white mb-4">
              Launch your business in Simple way
            </h4>
            <form className="form flex flex-col md:flex-row gap-4">
              <div className="flex items-center rounded-[100px] border border-gray-300 bg-transparent py-[10px] px-4 gap-2">
                <input
                  type="text"
                  name="text"
                  id=""
                  placeholder="Enter 10 digit here...."
                  className="w-3/5	outline-none border-none font-normal text-base py-[1px] text-gray-400 bg-transparent"
                />
              </div>
              <button className="bg-indigo-600 rounded-[100px] py-[13px] px-6 font-semibold text-sm text-white whitespace-nowrap focus-within:outline-0 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                Get Incentive
              </button>
            </form>
          </div>
          <div className="col-span-10 lg:col-span-6 w-full">
            <div className="box flex h-full justify-center flex-col">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black mb-14 lg:text-left text-center">
                Best support for our client
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 w-full">
                <div className="box flex flex-col items-center">
                  <button className="rounded-full p-3 flex items-center justify-center mx-auto bg-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-50 hover:shadow-indigo-200"></button>
                  <p className="mt-2 w-[92px] text-center font-medium text-sm text-black">
                    {" "}
                    7* day Payment{" "}
                  </p>
                </div>
                <div className="box flex flex-col items-center">
                  <button className="rounded-full p-3 flex items-center justify-center mx-auto bg-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-50 hover:shadow-indigo-200"></button>
                  <p className="mt-2 w-[92px] text-center font-medium text-sm text-black">
                    {" "}
                    Pan - India delivery{" "}
                  </p>
                </div>
                <div className="box flex flex-col items-center">
                  <button className="rounded-full p-3 flex items-center justify-center mx-auto bg-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-50 hover:shadow-indigo-200"></button>
                  <p className="mt-2 w-[92px] text-center font-medium text-sm text-black">
                    {" "}
                    500000+ Seller{" "}
                  </p>
                </div>
                <div className="box flex flex-col items-center">
                  <button className="rounded-full p-3 flex items-center justify-center mx-auto bg-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-50 hover:shadow-indigo-200"></button>
                  <p className="mt-2 w-[92px] text-center font-medium text-sm text-black">
                    {" "}
                    Account Management{" "}
                  </p>
                </div>
                <div className="box flex flex-col items-center">
                  <button className="rounded-full p-3 flex items-center justify-center mx-auto bg-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-50 hover:shadow-indigo-200"></button>
                  <p className="mt-2 w-[92px] text-center font-medium text-sm text-black">
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
  );
}
