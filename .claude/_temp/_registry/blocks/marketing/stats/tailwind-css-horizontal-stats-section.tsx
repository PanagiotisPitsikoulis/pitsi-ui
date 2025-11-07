export default function TailwindCssHorizontalStatsSection() {
  return (
    <section className="py-20 font-inter bg-black">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start flex-col lg:flex-row lg:justify-start gap-12 mx-auto">
          <div className="lg:w-1/3 flex flex-col xl:flex-row items-center gap-6 mx-auto">
            <h3 className="font-manrope font-bold text-5xl text-white">200+</h3>
            <p className="text-2xl font-normal leading-9 bg-gradient-to-r from-[#E5E7EB] to-[#828385] bg-clip-text text-transparent">
              Expert Consultants
            </p>
          </div>
          <div className="lg:w-1/3 flex flex-col xl:flex-row items-center gap-6 mx-auto">
            <h3 className="font-manrope font-bold text-5xl text-white">230+</h3>
            <p className="text-2xl font-normal leading-9 bg-gradient-to-r from-[#E5E7EB] to-[#828385] bg-clip-text text-transparent">
              Active Clients
            </p>
          </div>
          <div className="lg:w-1/3 flex flex-col xl:flex-row items-center gap-6 mx-auto">
            <h3 className="font-manrope font-bold text-5xl text-white">
              $280M
            </h3>
            <p className="text-2xl font-normal leading-9 bg-gradient-to-r from-[#E5E7EB] to-[#828385] bg-clip-text text-transparent">
              Transaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
