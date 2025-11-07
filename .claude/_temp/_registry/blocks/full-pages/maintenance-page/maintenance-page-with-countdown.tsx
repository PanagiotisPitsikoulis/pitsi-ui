export default function MaintenancePageWithCountdown() {
  return (
    <section className="relative h-screen">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto h-screen">
        <div className="w-full flex-col justify-center items-center gap-44 flex h-full">
          <div className="w-full flex-col justify-center items-center gap-14 flex">
            <div className="w-full justify-center items-center sm:gap-8 gap-7 inline-flex">
              <div className="flex-col justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-start gap-1.5 inline-flex">
                  <div className="sm:w-14 w-11 p-2.5 rounded-md border border-blue-200 flex-col justify-center items-center gap-2.5 inline-flex">
                    <h4 className="text-center text-gray-900 text-3xl font-normal font-manrope leading-normal">
                      1
                    </h4>
                  </div>
                  <div className="sm:w-14 w-11 p-2.5 rounded-md border border-blue-200 flex-col justify-center items-center gap-2.5 inline-flex">
                    <h4 className="text-center text-gray-900 text-3xl font-normal font-manrope leading-normal">
                      0
                    </h4>
                  </div>
                </div>
                <h6 className="text-center text-gray-400 text-base font-medium leading-relaxed">
                  DAYS
                </h6>
              </div>
              <div className="flex-col justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-start gap-1.5 inline-flex">
                  <div className="sm:w-14 w-11 p-2.5 rounded-md border border-blue-200 flex-col justify-center items-center gap-2.5 inline-flex">
                    <h4 className="text-center text-gray-900 text-3xl font-normal font-manrope leading-normal">
                      3
                    </h4>
                  </div>
                  <div className="sm:w-14 w-11 p-2.5 rounded-md border border-blue-200 flex-col justify-center items-center gap-2.5 inline-flex">
                    <h4 className="text-center text-gray-900 text-3xl font-normal font-manrope leading-normal">
                      0
                    </h4>
                  </div>
                </div>
                <h6 className="text-center text-gray-400 text-base font-medium leading-relaxed">
                  HOURS
                </h6>
              </div>
              <div className="flex-col justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-start gap-1.5 inline-flex">
                  <div className="sm:w-14 w-11 p-2.5 rounded-md border border-blue-200 flex-col justify-center items-center gap-2.5 inline-flex">
                    <h4 className="text-center text-gray-900 text-3xl font-normal font-manrope leading-normal">
                      1
                    </h4>
                  </div>
                  <div className="sm:w-14 w-11 p-2.5 rounded-md border border-blue-200 flex-col justify-center items-center gap-2.5 inline-flex">
                    <h4 className="text-center text-gray-900 text-3xl font-normal font-manrope leading-normal">
                      2
                    </h4>
                  </div>
                </div>
                <h6 className="text-center text-gray-400 text-base font-medium leading-relaxed">
                  MINUTES
                </h6>
              </div>
              <div className="flex-col justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-start gap-1.5 inline-flex">
                  <div className="sm:w-14 w-11 p-2.5 rounded-md border border-blue-200 flex-col justify-center items-center gap-2.5 inline-flex">
                    <h4 className="text-center text-gray-900 text-3xl font-normal font-manrope leading-normal">
                      4
                    </h4>
                  </div>
                  <div className="sm:w-14 w-11 p-2.5 rounded-md border border-blue-200 flex-col justify-center items-center gap-2.5 inline-flex">
                    <h4 className="text-center text-gray-900 text-3xl font-normal font-manrope leading-normal">
                      6
                    </h4>
                  </div>
                </div>
                <h6 className="text-center text-gray-400 text-base font-medium leading-relaxed">
                  SECONDS
                </h6>
              </div>
            </div>
            <div className="w-full flex-col justify-center items-center gap-6 flex">
              <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                <h2 className="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">
                  Our site is undergoing maintenance right now.
                </h2>
                <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                  It will take a long time till we get the error fixed. We will
                  live again in.
                </p>
              </div>
              <div className="w-full justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                <input
                  type="text"
                  className="sm:w-80 w-full h-10 focus:outline-none px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 text-gray-900 placeholder-gray-400 text-sm font-normal leading-snug"
                  placeholder="Your mail"
                />
                <button className="sm:w-fit w-full px-3.5 py-2 bg-blue-700 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Notify Me
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
