export default function TheDataSpeaksForItselfStats() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="flex flex-col gap-3 border-t-2 border-indigo-600 bg-gradient-to-r from-indigo-50 to-white lg:border-t-0 lg:border-l-2 lg:pl-8">
            <h3 className="font-manrope text-5xl font-bold text-black">
              260<span className="align-bottom text-3xl">%</span>
            </h3>
            <p className="text-xl leading-8 font-normal text-gray-500">
              Increase in new leads
            </p>
          </div>
          <div className="flex flex-col gap-3 border-t-2 border-red-500 bg-gradient-to-r from-rose-50 to-white lg:border-t-0 lg:border-l-2 lg:pl-8">
            <h3 className="font-manrope text-5xl font-bold text-black">
              240<span className="align-bottom text-3xl">%</span>
            </h3>
            <p className="text-xl leading-8 font-normal text-gray-500">
              Company growth
            </p>
          </div>
          <div className="flex flex-col gap-3 border-t-2 border-emerald-600 bg-gradient-to-r from-emerald-50 to-white lg:border-t-0 lg:border-l-2 lg:pl-8">
            <h3 className="font-manrope text-5xl font-bold text-black">
              724<span className="align-bottom text-3xl">%</span>
            </h3>
            <p className="text-xl leading-8 font-normal text-gray-500">
              Projects Delivered
            </p>
          </div>
          <div className="flex flex-col gap-3 border-t-2 border-amber-600 bg-gradient-to-r from-amber-50 to-white lg:border-t-0 lg:border-l-2 lg:pl-8">
            <h3 className="font-manrope text-5xl font-bold text-black">
              95<span className="align-bottom text-3xl">%</span>
            </h3>
            <p className="text-xl leading-8 font-normal text-gray-500">
              Issue Resolved
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
