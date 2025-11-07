export default function SplitStatsWithHeading() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 overflow-hidden rounded-2xl lg:grid-cols-2">
          <div className="bg-blue-600 px-6 py-8 pr-5 text-center sm:pl-16 lg:text-start">
            <h2 className="font-manrope text-4xl leading-[52px] font-bold text-white">
              Tracking Our <br />
              Achievements
            </h2>
            <p className="pt-5 text-xl leading-8 font-normal text-gray-200">
              Total Our Company Growth
            </p>
            <h3 className="pt-2.5 text-3xl font-bold text-white">98%</h3>
          </div>
          <div className="mx-auto flex w-full flex-col gap-8 sm:w-9/12 lg:w-full lg:items-stretch">
            <div className="grid grid-cols-2 gap-8 border-b border-gray-200 pb-8">
              <div className="flex flex-col gap-1.5 border-r border-gray-200">
                <a href="#"></a>
                <h3 className="font-manrope pt-2.5 text-2xl leading-9 font-bold text-gray-900">
                  99+
                </h3>
                <p className="text-base leading-7 font-normal text-gray-500">
                  Expert Consultants{" "}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <a href="#"></a>
                <h3 className="font-manrope pt-2.5 text-2xl leading-9 font-bold text-gray-900">
                  130+
                </h3>
                <p className="text-base leading-7 font-normal text-gray-500">
                  Active Clients
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-1.5 border-r border-gray-200">
                <a href="#"></a>
                <h3 className="font-manrope pt-2.5 text-2xl leading-9 font-bold text-gray-900">
                  80+
                </h3>
                <p className="text-base leading-7 font-normal text-gray-500">
                  Project Finalized
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <a href="#"></a>
                <h3 className="font-manrope pt-2.5 text-2xl leading-9 font-bold text-gray-900">
                  87+
                </h3>
                <p className="text-base leading-7 font-normal text-gray-500">
                  Orders in Queue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
