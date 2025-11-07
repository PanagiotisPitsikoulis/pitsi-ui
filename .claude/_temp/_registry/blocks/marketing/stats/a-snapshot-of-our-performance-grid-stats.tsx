export default function ASnapshotOfOurPerformanceGridStats() {
  return (
    <section className="py-14 lg:py-24 font-inter bg-no-repeat bg-cover">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14 lg:gap-80 items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 text-center lg:text-start">
            <h2 className="text-4xl font-bold text-white font-manrope my-auto">
              Statistics about something specific like a portfolio.
            </h2>
            <div className="flex flex-col gap-4 lg:gap-2.5">
              <p className="text-xl font-normal leading-8 text-gray-200">
                This report offers a detailed statistical analysis of the
                portfolio, focusing on its performance and composition.
              </p>
              <button className="mx-auto lg:mx-0 px-4 py-2 rounded-full shadow-sm bg-white text-sm font-medium leading-6 text-black w-fit transition-all duration-500 hover:bg-gray-200">
                Lets get started
              </button>
            </div>
          </div>
          <div className="flex items-center flex-wrap lg:flex-nowrap gap-8 justify-center">
            <div className="flex flex-col gap-4 items-center justify-center text-center">
              <h3 className="text-5xl font-bold text-white font-manrope">
                13M
              </h3>
              <p className="text-lg font-normal leading-8 text-gray-200">
                We have reach more than 13 millions user in around the world
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center text-center">
              <h3 className="text-5xl font-bold text-white font-manrope">
                50M
              </h3>
              <p className="text-lg font-normal leading-8 text-gray-200">
                Pagedone is one of most downloaded on google play
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center text-center">
              <h3 className="text-5xl font-bold text-white font-manrope">
                98%
              </h3>
              <p className="text-lg font-normal leading-8 text-gray-200">
                Our user are satisfied using our services in their daily site
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center text-center">
              <h3 className="text-5xl font-bold text-white font-manrope">
                80%
              </h3>
              <p className="text-lg font-normal leading-8 text-gray-200">
                projects completed and delivered, we pride ourselves
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
