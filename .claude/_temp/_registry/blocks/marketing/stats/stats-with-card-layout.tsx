export default function StatsWithCardLayout() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-4/5 mx-auto sm:w-full">
          <div className="flex flex-col gap-[139px] p-7 rounded-2xl bg-indigo-50 justify-between">
            <h5 className="text-xl font-normal leading-8 text-gray-900">
              Expert Consultants
            </h5>
            <h2 className="text-6xl font-bold font-manrope text-indigo-600">
              260+
            </h2>
          </div>
          <div className="flex flex-col gap-[139px] p-7 rounded-2xl bg-indigo-50 justify-between">
            <h5 className="text-xl font-normal leading-8 text-gray-900">
              Projects Delivered
            </h5>
            <h2 className="text-6xl font-bold font-manrope text-indigo-600">
              724+
            </h2>
          </div>
          <div className="flex flex-col gap-[139px] p-7 rounded-2xl bg-indigo-50 justify-between">
            <h5 className="text-xl font-normal leading-8 text-gray-900">
              Projects Completed
            </h5>
            <h2 className="text-6xl font-bold font-manrope text-indigo-600">
              625+
            </h2>
          </div>
          <div className="flex flex-col gap-[139px] p-7 rounded-2xl bg-indigo-50 justify-between">
            <h5 className="text-xl font-normal leading-8 text-gray-900">
              Team members
            </h5>
            <h2 className="text-6xl font-bold font-manrope text-indigo-600">
              175+
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
