export default function TailwindCssImpressiveStats() {
  return (
    <section className="font-inter bg-gray-900 py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-14 xl:flex-row">
          <div className="flex w-full flex-col gap-4 xl:w-[53%]">
            <h2 className="font-manrope text-center text-4xl font-bold text-white xl:text-start">
              The Data Speaks for Itself
            </h2>
            <p className="text-center text-xl leading-8 font-normal text-gray-300 xl:text-start">
              he data reveals our achievements and underscores our commitment to
              excellence.
            </p>
            <div className="flex items-center justify-center gap-2.5 pt-4 xl:justify-start">
              <img
                src="https://pagedone.io/asset/uploads/1760005601.png"
                alt="img"
              />
              <a className="text-base leading-6 font-normal text-gray-300">
                20k+ Active User
              </a>
            </div>
          </div>
          <div className="w-full xl:w-[42%]">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:flex-nowrap">
              <div className="flex h-[9.375rem] w-[9.375rem] flex-col gap-1.5 rounded-full bg-cover bg-no-repeat p-6">
                <p className="text-center text-lg leading-7 font-normal text-gray-200">
                  Expert Consultants{" "}
                </p>
                <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-white">
                  599+
                </h3>
              </div>
              <div className="flex h-[9.375rem] w-[9.375rem] flex-col gap-1.5 rounded-full bg-cover bg-no-repeat p-6">
                <p className="text-center text-lg leading-7 font-normal text-gray-200">
                  Projects Delivered
                </p>
                <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-white">
                  10k+
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 pt-1.5 sm:flex-nowrap">
              <div className="flex h-[9.375rem] w-[9.375rem] flex-col gap-1.5 rounded-full bg-cover bg-no-repeat p-6">
                <p className="text-center text-lg leading-7 font-normal text-gray-200">
                  Active Clients{" "}
                </p>
                <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-white">
                  6k+
                </h3>
              </div>
              <div className="flex h-[9.375rem] w-[9.375rem] flex-col gap-1.5 rounded-full bg-cover bg-no-repeat p-6">
                <p className="text-center text-lg leading-7 font-normal text-gray-200">
                  Orders in Queue{" "}
                </p>
                <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-white">
                  150+
                </h3>
              </div>
              <div className="flex h-[9.375rem] w-[9.375rem] flex-col gap-1.5 rounded-full bg-cover bg-no-repeat p-6">
                <p className="text-center text-lg leading-7 font-normal text-gray-200">
                  Year of Experience{" "}
                </p>
                <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-white">
                  20
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
