export default function TailwindCssHorizontalStatsSection() {
  return (
    <section className="font-inter bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex flex-col items-start gap-12 lg:flex-row lg:justify-start">
          <div className="mx-auto flex flex-col items-center gap-6 lg:w-1/3 xl:flex-row">
            <h3 className="font-manrope text-5xl font-bold text-white">200+</h3>
            <p className="bg-gradient-to-r from-[#E5E7EB] to-[#828385] bg-clip-text text-2xl leading-9 font-normal text-transparent">
              Expert Consultants
            </p>
          </div>
          <div className="mx-auto flex flex-col items-center gap-6 lg:w-1/3 xl:flex-row">
            <h3 className="font-manrope text-5xl font-bold text-white">230+</h3>
            <p className="bg-gradient-to-r from-[#E5E7EB] to-[#828385] bg-clip-text text-2xl leading-9 font-normal text-transparent">
              Active Clients
            </p>
          </div>
          <div className="mx-auto flex flex-col items-center gap-6 lg:w-1/3 xl:flex-row">
            <h3 className="font-manrope text-5xl font-bold text-white">
              $280M
            </h3>
            <p className="bg-gradient-to-r from-[#E5E7EB] to-[#828385] bg-clip-text text-2xl leading-9 font-normal text-transparent">
              Transaction
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
