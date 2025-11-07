export default function SplittedUnderMaintenancePage() {
  return (
    <section className="relative w-full lg:my-0 my-24 min-h-screen">
      <div className=" justify-end items-center flex lg:flex-row flex-col lg:gap-0 gap-10">
        <div className="lg:w-2/3 md:pr-14 pr-5 md:pl-28 pl-5 flex-col justify-center items-center lg:gap-24 gap-12 flex lg:h-screen w-full">
          <div className="w-full flex-col justify-center items-center gap-10 flex">
            <div className="w-full flex-col justify-start items-center gap-2.5 flex">
              <h2 className="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">
                Coming Back Soon!
              </h2>
              <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                We're currently upgrading our site. Check back with us later.
              </p>
            </div>
            <div className="w-full flex-col justify-center items-center gap-3 flex">
              <h6 className="text-center text-gray-500 text-base font-medium leading-relaxed">
                Get Notified when we are back
              </h6>
              <div className="justify-center items-center gap-1.5 inline-flex relative">
                <input
                  type="text"
                  className="w-80 relative focus:outline-none px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed"
                  placeholder="Your mail"
                />
                <a className="absolute right-4 top-3.5"></a>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-center items-center gap-2.5 flex">
            <h6 className="text-center text-gray-900 text-base font-medium leading-relaxed">
              Follow Us!
            </h6>
            <div className="justify-center items-center gap-3.5 inline-flex">
              <a className="group p-2 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-full justify-start items-start gap-2.5 flex"></a>
              <a className="group p-2 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-full justify-start items-start gap-2.5 flex"></a>
              <a className="group p-2 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-full justify-start items-start gap-2.5 flex"></a>
              <a className="group p-2 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-full justify-start items-start gap-2.5 flex"></a>
              <a className="group p-2 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-full justify-start items-start gap-2.5 flex"></a>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 justify-center items-center gap-2.5 flex lg:py-28 py-10 lg:h-screen lg:w-2/6 w-full">
          <img
            src="https://pagedone.io/asset/uploads/1718099163.png"
            alt="under maintenance images"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
