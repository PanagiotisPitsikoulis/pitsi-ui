export default function SplitStatsWithHeading() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 rounded-2xl overflow-hidden">
          <div className="py-8 px-6 sm:pl-16 pr-5 bg-blue-600 text-center lg:text-start">
            <h2 className="text-4xl font-bold font-manrope text-white leading-[52px]">
              Tracking Our <br />
              Achievements
            </h2>
            <p className="text-xl font-normal leading-8 text-gray-200 pt-5">
              Total Our Company Growth
            </p>
            <h3 className="text-3xl font-bold text-white pt-2.5">98%</h3>
          </div>
          <div className="flex flex-col gap-8 lg:items-stretch w-full sm:w-9/12 lg:w-full mx-auto">
            <div className="grid grid-cols-2 gap-8 border-b border-gray-200 pb-8">
              <div className="flex flex-col gap-1.5 border-r border-gray-200">
                <a href="#"></a>
                <h3 className="font-manrope text-2xl font-bold leading-9 text-gray-900 pt-2.5">
                  99+
                </h3>
                <p className="text-base font-normal leading-7 text-gray-500">
                  Expert Consultants{" "}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <a href="#"></a>
                <h3 className="font-manrope text-2xl font-bold leading-9 text-gray-900 pt-2.5">
                  130+
                </h3>
                <p className="text-base font-normal leading-7 text-gray-500">
                  Active Clients
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-1.5 border-r border-gray-200">
                <a href="#"></a>
                <h3 className="font-manrope text-2xl font-bold leading-9 text-gray-900 pt-2.5">
                  80+
                </h3>
                <p className="text-base font-normal leading-7 text-gray-500">
                  Project Finalized
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <a href="#"></a>
                <h3 className="font-manrope text-2xl font-bold leading-9 text-gray-900 pt-2.5">
                  87+
                </h3>
                <p className="text-base font-normal leading-7 text-gray-500">
                  Orders in Queue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
