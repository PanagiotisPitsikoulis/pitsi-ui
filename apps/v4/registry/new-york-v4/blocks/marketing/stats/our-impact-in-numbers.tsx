export default function OurImpactInNumbers() {
  return (
    <section className="font-inter bg-gray-900 py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl font-bold text-white">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-2 pt-14 lg:grid-cols-4 lg:gap-5">
          <div className="flex flex-col gap-48 border-b border-gray-700 pb-5 lg:border-b-0 lg:pb-0">
            <p className="text-lg font-normal text-gray-200">
              Expert Consultants{" "}
            </p>
            <h3 className="font-manrope text-5xl font-bold text-white">99+</h3>
          </div>
          <div className="flex flex-col gap-48 border-b border-l border-gray-700 pl-5 lg:border-b-0">
            <p className="text-lg font-normal text-gray-200">Active Clients</p>
            <h3 className="font-manrope text-5xl font-bold text-white">130+</h3>
          </div>
          <div className="flex flex-col gap-48 border-gray-700 pt-5 lg:border-l lg:pt-0 lg:pl-5">
            <p className="text-lg font-normal text-gray-200">
              Project Completed{" "}
            </p>
            <h3 className="font-manrope text-5xl font-bold text-white">84+</h3>
          </div>
          <div className="flex flex-col gap-48 border-l border-gray-700 pt-5 pl-5 lg:pt-0">
            <p className="text-lg font-normal text-gray-200">Order in Queue</p>
            <h3 className="font-manrope text-5xl font-bold text-white">59+</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
