export default function TailwindTrackingGrowthSuccessStats() {
  return (
    <section className="font-inter bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <h2 className="font-manrope text-center text-4xl font-bold text-white lg:text-left">
            Tracking Growth, Impact, and Success
          </h2>
          <p className="text-center text-lg leading-8 font-normal text-gray-300 lg:text-left">
            Our growth, impact, and success are reflected in the numbers. We
            continuously track key metrics to showcase our progress.
          </p>
        </div>
        <div className="mt-14 flex flex-1 flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
          <div className="w-full border-b border-neutral-900 pb-10 lg:w-1/4 lg:border-r lg:border-b-0 lg:pb-0">
            <div className="font-manrope text-center text-5xl font-bold text-white">
              280+
            </div>
            <span className="mt-5 block text-center text-xl text-gray-300">
              Expert Consultants
            </span>
          </div>
          <div className="w-full border-b border-neutral-900 pb-10 lg:w-1/4 lg:border-r lg:border-b-0 lg:pb-0">
            <div className="font-manrope text-center text-5xl font-bold text-white">
              975+
            </div>
            <span className="mt-5 block text-center text-xl text-gray-300">
              Active Clients
            </span>
          </div>
          <div className="w-full border-b border-neutral-900 pb-10 lg:w-1/4 lg:border-r lg:border-b-0 lg:pb-0">
            <div className="font-manrope text-center text-5xl font-bold text-white">
              724+
            </div>
            <span className="mt-5 block text-center text-xl text-gray-300">
              Projects Delivered
            </span>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="font-manrope text-center text-5xl font-bold text-white">
              89+
            </div>
            <span className="mt-5 block text-center text-xl text-gray-300">
              Orders in Queue
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
