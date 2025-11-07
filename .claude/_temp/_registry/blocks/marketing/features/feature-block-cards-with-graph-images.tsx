export default function FeatureBlockCardsWithGraphImages() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <h2 className="lg:max-w-3xl w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Harness Powerful Features to Skyrocket Your Productivity
          </h2>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full justify-start items-center xl:gap-8 gap-5 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full h-full xl:p-10 lg:p-8 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-all duration-700 ease-in-out flex-col justify-start items-center inline-flex">
                <div className="flex-col justify-start items-center gap-4 flex">
                  <a href="#">
                    <img
                      className=" rounded-2xl object-cover"
                      src="https://pagedone.io/asset/uploads/1720515559.png"
                      alt="Manage Your Workforce Feature Graph image"
                    />
                  </a>
                  <div className="flex-col justify-start items-center gap-2 flex">
                    <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                      Manage Your Workforce
                    </h5>
                    <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                      Streamline your employee management process with our
                      comprehensive solution. From tracking attendance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full xl:p-10 lg:p-8 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-all duration-700 ease-in-out flex-col justify-start items-center inline-flex">
                <div className="flex-col justify-start items-center gap-4 flex">
                  <a href="#">
                    <img
                      className=" rounded-2xl object-cover"
                      src="https://pagedone.io/asset/uploads/1720515612.png"
                      alt="Optimize Your Team's Output Graph image"
                    />
                  </a>
                  <div className="flex-col justify-start items-center gap-2 flex">
                    <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                      Optimize Your Team's Output
                    </h5>
                    <p className="lg:max-w-md w-full text-center text-gray-500 text-sm font-normal leading-normal">
                      Maximize productivity by evaluating and improving your
                      team's performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-center xl:gap-8 gap-5 grid md:grid-cols-3 grid-cols-1">
              <div className="w-full h-full xl:p-10 lg:p-8 p-4 bg-gray-50 rounded-xl border-transparent border hover:border-gray-300 transition-all duration-700 ease-in-out justify-start items-start flex">
                <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                  <a className="w-full">
                    <img
                      className="mx-auto rounded-2xl object-cover"
                      src="https://pagedone.io/asset/uploads/1720515649.png"
                      alt="Attendance Tracker Graph image"
                    />
                  </a>
                  <div className="w-full flex-col justify-start items-center gap-2 flex">
                    <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                      Attendance Tracker
                    </h5>
                    <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                      Track attendance in real-time, generate insightful
                      reports, and streamline.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full xl:p-10 lg:p-8 p-4 bg-gray-50 rounded-xl border-transparent border hover:border-gray-300 transition-all duration-700 ease-in-out justify-start items-start flex">
                <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                  <a className="w-full">
                    <img
                      className="mx-auto rounded-2xl object-cover"
                      src="https://pagedone.io/asset/uploads/1720515688.png"
                      alt="Emaployee Salary Trackers Graph image"
                    />
                  </a>
                  <div className="w-full flex-col justify-start items-center gap-2 flex">
                    <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                      Emaployee Salary Trackers
                    </h5>
                    <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                      Our Employee Salary Tracker is a comprehensive tool
                      designed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full xl:p-10 lg:p-8 p-4 bg-gray-50 rounded-xl border-transparent border hover:border-gray-300 transition-all duration-700 ease-in-out justify-start items-start flex">
                <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                  <a className="w-full">
                    <img
                      className="mx-auto rounded-2xl object-cover"
                      src="https://pagedone.io/asset/uploads/1720515733.png"
                      alt="Company Cash Flow Graph image"
                    />
                  </a>
                  <div className="w-full flex-col justify-start items-center gap-2 flex">
                    <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                      Company Cash Flow
                    </h5>
                    <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                      Managing cash flow is essential for any company's
                      financial health, and our Company{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
