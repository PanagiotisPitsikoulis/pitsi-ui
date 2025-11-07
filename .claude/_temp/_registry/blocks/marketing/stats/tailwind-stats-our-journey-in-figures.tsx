export default function TailwindStatsOurJourneyInFigures() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-normal leading-6 text-indigo-700 mb-2 text-center xl:text-start">
              Impressive Stats
            </h3>
            <h2 className="text-4xl font-bold text-black font-manrope text-center xl:text-start">
              Proof Is in the Numbers
            </h2>
            <p className="text-xl font-normal leading-8 text-gray-500 text-center xl:text-start">
              The results are clear—our numbers back up the success we've
              achieved.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-5 rounded-xl bg-indigo-50 border border-indigo-700 flex flex-col gap-8  bg-no-repeat  bg-right-bottom w-7/12 mx-auto sm:w-full">
              <a href="#"></a>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold font-manrope text-gray-900">
                  20+
                </h3>
                <span className="text-lg font-normal leading-8 text-gray-500">
                  Experiences
                </span>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-indigo-50 border border-indigo-700 flex flex-col gap-8  bg-no-repeat  bg-right-bottom w-7/12 mx-auto sm:w-full">
              <a href="#"></a>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold font-manrope text-gray-900">
                  80+
                </h3>
                <span className="text-lg font-normal leading-8 text-gray-500">
                  Task Finished
                </span>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-indigo-50 border border-indigo-700 flex flex-col gap-8  bg-no-repeat  bg-right-bottom w-7/12 mx-auto sm:w-full">
              <a href="#"></a>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold font-manrope text-gray-900">
                  100+
                </h3>
                <span className="text-lg font-normal leading-8 text-gray-500">
                  Active Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
