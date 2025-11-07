export default function TheDataSpeaksForItselfStats() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:pl-8 border-t-2 lg:border-t-0 lg:border-l-2 border-indigo-600 bg-gradient-to-r from-indigo-50 to-white flex flex-col gap-3">
            <h3 className="text-5xl font-bold font-manrope text-black">
              260<span className="text-3xl align-bottom">%</span>
            </h3>
            <p className="text-xl font-normal text-gray-500 leading-8">
              Increase in new leads
            </p>
          </div>
          <div className="lg:pl-8 border-t-2 lg:border-t-0 lg:border-l-2 border-red-500 bg-gradient-to-r from-rose-50 to-white flex flex-col gap-3">
            <h3 className="text-5xl font-bold font-manrope text-black">
              240<span className="text-3xl align-bottom">%</span>
            </h3>
            <p className="text-xl font-normal text-gray-500 leading-8">
              Company growth
            </p>
          </div>
          <div className="lg:pl-8 border-t-2 lg:border-t-0 lg:border-l-2 border-emerald-600 bg-gradient-to-r from-emerald-50 to-white flex flex-col gap-3">
            <h3 className="text-5xl font-bold font-manrope text-black">
              724<span className="text-3xl align-bottom">%</span>
            </h3>
            <p className="text-xl font-normal text-gray-500 leading-8">
              Projects Delivered
            </p>
          </div>
          <div className="lg:pl-8 border-t-2 lg:border-t-0 lg:border-l-2 border-amber-600 bg-gradient-to-r from-amber-50 to-white flex flex-col gap-3">
            <h3 className="text-5xl font-bold font-manrope text-black">
              95<span className="text-3xl align-bottom">%</span>
            </h3>
            <p className="text-xl font-normal text-gray-500 leading-8">
              Issue Resolved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
