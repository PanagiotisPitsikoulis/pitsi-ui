export default function ASnapshotOfOurPerformanceGridStats() {
  return (
    <section className="font-inter bg-cover bg-no-repeat py-14 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-14 lg:gap-80">
          <div className="grid grid-cols-1 gap-4 text-center lg:grid-cols-2 lg:gap-8 lg:text-start">
            <h2 className="font-manrope my-auto text-4xl font-bold text-white">
              Statistics about something specific like a portfolio.
            </h2>
            <div className="flex flex-col gap-4 lg:gap-2.5">
              <p className="text-xl leading-8 font-normal text-gray-200">
                This report offers a detailed statistical analysis of the
                portfolio, focusing on its performance and composition.
              </p>
              <button className="mx-auto w-fit rounded-full bg-white px-4 py-2 text-sm leading-6 font-medium text-black shadow-sm transition-all duration-500 hover:bg-gray-200 lg:mx-0">
                Lets get started
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:flex-nowrap">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h3 className="font-manrope text-5xl font-bold text-white">
                13M
              </h3>
              <p className="text-lg leading-8 font-normal text-gray-200">
                We have reach more than 13 millions user in around the world
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h3 className="font-manrope text-5xl font-bold text-white">
                50M
              </h3>
              <p className="text-lg leading-8 font-normal text-gray-200">
                Pagedone is one of most downloaded on google play
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h3 className="font-manrope text-5xl font-bold text-white">
                98%
              </h3>
              <p className="text-lg leading-8 font-normal text-gray-200">
                Our user are satisfied using our services in their daily site
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h3 className="font-manrope text-5xl font-bold text-white">
                80%
              </h3>
              <p className="text-lg leading-8 font-normal text-gray-200">
                projects completed and delivered, we pride ourselves
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
