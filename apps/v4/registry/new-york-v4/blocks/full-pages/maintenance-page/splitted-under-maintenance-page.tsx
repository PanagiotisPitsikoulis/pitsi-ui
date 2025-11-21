export default function SplittedUnderMaintenancePage() {
  return (
    <section className="relative my-24 min-h-screen w-full lg:my-0">
      <div className="flex flex-col items-center justify-end gap-10 lg:flex-row lg:gap-0">
        <div className="flex w-full flex-col items-center justify-center gap-12 pr-5 pl-5 md:pr-14 md:pl-28 lg:h-screen lg:w-2/3 lg:gap-24">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            <div className="flex w-full flex-col items-center justify-start gap-2.5">
              <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-800">
                Coming Back Soon!
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500">
                We're currently upgrading our site. Check back with us later.
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-3">
              <h6 className="text-center text-base leading-relaxed font-medium text-gray-500">
                Get Notified when we are back
              </h6>
              <div className="relative inline-flex items-center justify-center gap-1.5">
                <input
                  type="text"
                  className="relative w-80 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Your mail"
                />
                <a className="absolute top-3.5 right-4"></a>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2.5">
            <h6 className="text-center text-base leading-relaxed font-medium text-gray-900">
              Follow Us!
            </h6>
            <div className="inline-flex items-center justify-center gap-3.5">
              <a className="group flex items-start justify-start gap-2.5 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 p-2"></a>
              <a className="group flex items-start justify-start gap-2.5 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 p-2"></a>
              <a className="group flex items-start justify-start gap-2.5 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 p-2"></a>
              <a className="group flex items-start justify-start gap-2.5 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 p-2"></a>
              <a className="group flex items-start justify-start gap-2.5 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 p-2"></a>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-2.5 bg-blue-100 py-10 lg:h-screen lg:w-2/6 lg:py-28">
          <img
            src="https://pagedone.io/asset/uploads/1718099163.png"
            alt="under maintenance images"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
