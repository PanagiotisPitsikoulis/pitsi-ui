export default function TailwindCssStatsWithPerformance() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="py-0.5 px-2.5 border border-indigo-400 rounded-full bg-indigo-50 text-xs font-medium text-indigo-600 text-center">
            STATISTICS
          </div>
          <h2 className="text-4xl font-bold font-manrope text-gray-900">
            A Snapshot of Our Performance
          </h2>
        </div>
        <div className="pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-fit sm:w-1/2 lg:w-full mx-auto">
            <div className="flex flex-col gap-8">
              <div className="p-5 relative bg-indigo-200 rounded-xl">
                <div className="absolute right-0 top-0">
                  <img
                    src="https://pagedone.io/asset/uploads/1760008732.png"
                    alt="img"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-manrope mb-5">
                  99+
                </h3>
                <h4 className="text-xl font-medium leading-8 text-gray-800 mb-1">
                  Expert Consultants{" "}
                </h4>
                <p className="text-base font-normal leading-7 text-gray-500">
                  Expert consultants delivering impactful solutions.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="p-5 relative bg-indigo-200 rounded-xl z-10">
                  <div className="absolute left-0 top-0 z-0">
                    <img
                      src="https://pagedone.io/asset/uploads/1760008762.png"
                      alt="img"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 font-manrope mb-5">
                    130+
                  </h3>
                  <h4 className="text-xl font-medium leading-8 text-gray-800 mb-1">
                    Active Clients
                  </h4>
                  <p className="text-base font-normal leading-7 text-gray-500">
                    Supporting a growing network of active clients worldwide.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://pagedone.io/asset/uploads/1760008777.png"
              alt="img"
              className="h-full object-cover rounded-2xl overflow-hidden w-full"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <div className="p-5 relative bg-indigo-200 rounded-xl z-10">
                  <div className="absolute left-0 top-0 z-0">
                    <img
                      src="https://pagedone.io/asset/uploads/1760008762.png"
                      alt="img"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 font-manrope mb-5">
                    80+
                  </h3>
                  <h4 className="text-xl font-medium leading-8 text-gray-800 mb-1">
                    Project Completed
                  </h4>
                  <p className="text-base font-normal leading-7 text-gray-500">
                    Successfully delivered projects that drive lasting impact.
                  </p>
                </div>
              </div>
              <div className="p-5 relative bg-indigo-200 rounded-xl">
                <div className="absolute right-0 top-0">
                  <img
                    src="https://pagedone.io/asset/uploads/1760008732.png"
                    alt="img"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-manrope mb-5">
                  72+
                </h3>
                <h4 className="text-xl font-medium leading-8 text-gray-800 mb-1">
                  Orders in Queue
                </h4>
                <p className="text-base font-normal leading-7 text-gray-500">
                  Current orders in queue, ready for prompt delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
