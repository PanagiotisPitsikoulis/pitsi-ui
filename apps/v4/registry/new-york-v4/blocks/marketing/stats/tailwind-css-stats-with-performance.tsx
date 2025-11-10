export default function TailwindCssStatsWithPerformance() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="rounded-full border border-indigo-400 bg-indigo-50 px-2.5 py-0.5 text-center text-xs font-medium text-indigo-600">
            STATISTICS
          </div>
          <h2 className="font-manrope text-4xl font-bold text-gray-900">
            A Snapshot of Our Performance
          </h2>
        </div>
        <div className="pt-14">
          <div className="mx-auto grid w-fit grid-cols-1 gap-8 sm:w-1/2 lg:w-full lg:grid-cols-3">
            <div className="flex flex-col gap-8">
              <div className="relative rounded-xl bg-indigo-200 p-5">
                <div className="absolute top-0 right-0">
                  <img
                    src="https://pagedone.io/asset/uploads/1760008732.png"
                    alt="img"
                  />
                </div>
                <h3 className="font-manrope mb-5 text-3xl font-bold text-gray-900">
                  99+
                </h3>
                <h4 className="mb-1 text-xl leading-8 font-medium text-gray-800">
                  Expert Consultants{" "}
                </h4>
                <p className="text-base leading-7 font-normal text-gray-500">
                  Expert consultants delivering impactful solutions.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="relative z-10 rounded-xl bg-indigo-200 p-5">
                  <div className="absolute top-0 left-0 z-0">
                    <img
                      src="https://pagedone.io/asset/uploads/1760008762.png"
                      alt="img"
                    />
                  </div>
                  <h3 className="font-manrope mb-5 text-3xl font-bold text-gray-900">
                    130+
                  </h3>
                  <h4 className="mb-1 text-xl leading-8 font-medium text-gray-800">
                    Active Clients
                  </h4>
                  <p className="text-base leading-7 font-normal text-gray-500">
                    Supporting a growing network of active clients worldwide.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://pagedone.io/asset/uploads/1760008777.png"
              alt="img"
              className="h-full w-full overflow-hidden rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <div className="relative z-10 rounded-xl bg-indigo-200 p-5">
                  <div className="absolute top-0 left-0 z-0">
                    <img
                      src="https://pagedone.io/asset/uploads/1760008762.png"
                      alt="img"
                    />
                  </div>
                  <h3 className="font-manrope mb-5 text-3xl font-bold text-gray-900">
                    80+
                  </h3>
                  <h4 className="mb-1 text-xl leading-8 font-medium text-gray-800">
                    Project Completed
                  </h4>
                  <p className="text-base leading-7 font-normal text-gray-500">
                    Successfully delivered projects that drive lasting impact.
                  </p>
                </div>
              </div>
              <div className="relative rounded-xl bg-indigo-200 p-5">
                <div className="absolute top-0 right-0">
                  <img
                    src="https://pagedone.io/asset/uploads/1760008732.png"
                    alt="img"
                  />
                </div>
                <h3 className="font-manrope mb-5 text-3xl font-bold text-gray-900">
                  72+
                </h3>
                <h4 className="mb-1 text-xl leading-8 font-medium text-gray-800">
                  Orders in Queue
                </h4>
                <p className="text-base leading-7 font-normal text-gray-500">
                  Current orders in queue, ready for prompt delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
