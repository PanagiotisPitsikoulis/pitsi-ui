export default function StatsWithCardLayout() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-4/5 grid-cols-1 gap-10 sm:w-full sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between gap-[139px] rounded-2xl bg-indigo-50 p-7">
            <h5 className="text-xl leading-8 font-normal text-gray-900">
              Expert Consultants
            </h5>
            <h2 className="font-manrope text-6xl font-bold text-indigo-600">
              260+
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-[139px] rounded-2xl bg-indigo-50 p-7">
            <h5 className="text-xl leading-8 font-normal text-gray-900">
              Projects Delivered
            </h5>
            <h2 className="font-manrope text-6xl font-bold text-indigo-600">
              724+
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-[139px] rounded-2xl bg-indigo-50 p-7">
            <h5 className="text-xl leading-8 font-normal text-gray-900">
              Projects Completed
            </h5>
            <h2 className="font-manrope text-6xl font-bold text-indigo-600">
              625+
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-[139px] rounded-2xl bg-indigo-50 p-7">
            <h5 className="text-xl leading-8 font-normal text-gray-900">
              Team members
            </h5>
            <h2 className="font-manrope text-6xl font-bold text-indigo-600">
              175+
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
