export default function ImpressiveStats() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 xl:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h3 className="mb-2 text-center text-base leading-6 font-normal text-indigo-700 xl:text-start">
              Impressive Stats
            </h3>
            <h2 className="font-manrope text-center text-4xl font-bold text-black xl:text-start">
              Proof Is in the Numbers
            </h2>
            <p className="text-center text-xl leading-8 font-normal text-gray-500 xl:text-start">
              The results are clear—our numbers back up the success we've
              achieved.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="mx-auto flex w-7/12 flex-col gap-8 rounded-xl border border-indigo-700 bg-indigo-50 bg-right-bottom bg-no-repeat p-5 sm:w-full">
              <a href="#"></a>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-manrope text-xl font-bold text-gray-900">
                  20+
                </h3>
                <span className="text-lg leading-8 font-normal text-gray-500">
                  Experiences
                </span>
              </div>
            </div>
            <div className="mx-auto flex w-7/12 flex-col gap-8 rounded-xl border border-indigo-700 bg-indigo-50 bg-right-bottom bg-no-repeat p-5 sm:w-full">
              <a href="#"></a>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-manrope text-xl font-bold text-gray-900">
                  80+
                </h3>
                <span className="text-lg leading-8 font-normal text-gray-500">
                  Task Finished
                </span>
              </div>
            </div>
            <div className="mx-auto flex w-7/12 flex-col gap-8 rounded-xl border border-indigo-700 bg-indigo-50 bg-right-bottom bg-no-repeat p-5 sm:w-full">
              <a href="#"></a>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-manrope text-xl font-bold text-gray-900">
                  100+
                </h3>
                <span className="text-lg leading-8 font-normal text-gray-500">
                  Active Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
