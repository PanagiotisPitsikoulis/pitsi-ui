export default function TailwindTrackingGrowthSuccessStats() {
  return (
    <section className="py-20 font-inter bg-black">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <h2 className="text-4xl font-bold font-manrope text-white text-center lg:text-left">
            Tracking Growth, Impact, and Success
          </h2>
          <p className="text-lg font-normal leading-8 text-gray-300 text-center lg:text-left">
            Our growth, impact, and success are reflected in the numbers. We
            continuously track key metrics to showcase our progress.
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between mt-14">
          <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-neutral-900">
            <div className="font-manrope font-bold text-5xl text-white text-center ">
              280+
            </div>
            <span className="text-xl text-gray-300 text-center block mt-5">
              Expert Consultants
            </span>
          </div>
          <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-neutral-900">
            <div className="font-manrope font-bold text-5xl text-white text-center ">
              975+
            </div>
            <span className="text-xl text-gray-300 text-center block mt-5">
              Active Clients
            </span>
          </div>
          <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-neutral-900">
            <div className="font-manrope font-bold text-5xl text-white text-center ">
              724+
            </div>
            <span className="text-xl text-gray-300 text-center block mt-5">
              Projects Delivered
            </span>
          </div>
          <div className="w-full lg:w-1/4 ">
            <div className="font-manrope font-bold text-5xl text-white text-center ">
              89+
            </div>
            <span className="text-xl text-gray-300 text-center block mt-5">
              Orders in Queue
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
