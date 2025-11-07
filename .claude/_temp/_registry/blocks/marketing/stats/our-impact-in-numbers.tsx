export default function OurImpactInNumbers() {
  return (
    <section className="py-20 font-inter bg-gray-900">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold font-manrope text-white text-center">
          Our Impact in Numbers
        </h2>
        <div className="pt-14 grid grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <div className="flex flex-col gap-48 border-b border-gray-700 lg:border-b-0 pb-5 lg:pb-0">
            <p className="text-lg font-normal text-gray-200">
              Expert Consultants{" "}
            </p>
            <h3 className="text-5xl font-bold font-manrope text-white">99+</h3>
          </div>
          <div className="border-l border-gray-700 pl-5 flex flex-col gap-48 border-b lg:border-b-0">
            <p className="text-lg font-normal text-gray-200">Active Clients</p>
            <h3 className="text-5xl font-bold font-manrope text-white">130+</h3>
          </div>
          <div className="lg:border-l border-gray-700 lg:pl-5 flex flex-col gap-48 pt-5 lg:pt-0">
            <p className="text-lg font-normal text-gray-200">
              Project Completed{" "}
            </p>
            <h3 className="text-5xl font-bold font-manrope text-white">84+</h3>
          </div>
          <div className="border-l border-gray-700 pl-5 flex flex-col gap-48 pt-5 lg:pt-0">
            <p className="text-lg font-normal text-gray-200">Order in Queue</p>
            <h3 className="text-5xl font-bold font-manrope text-white">59+</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
