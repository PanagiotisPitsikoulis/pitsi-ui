export default function TailwindCssImpressiveStats() {
  return (
    <section className="py-20 font-inter bg-gray-900">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center gap-14">
          <div className="w-full xl:w-[53%] flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-white font-manrope text-center xl:text-start">
              The Data Speaks for Itself
            </h2>
            <p className="text-xl font-normal leading-8 text-gray-300 text-center xl:text-start">
              he data reveals our achievements and underscores our commitment to
              excellence.
            </p>
            <div className="pt-4 flex items-center gap-2.5 justify-center xl:justify-start">
              <img
                src="https://pagedone.io/asset/uploads/1760005601.png"
                alt="img"
              />
              <a className="text-base font-normal leading-6 text-gray-300">
                20k+ Active User
              </a>
            </div>
          </div>
          <div className="w-full xl:w-[42%]">
            <div className="flex items-center justify-center gap-8 flex-wrap sm:flex-nowrap">
              <div className="w-[9.375rem] h-[9.375rem] p-6 rounded-full bg-cover bg-no-repeat flex flex-col gap-1.5">
                <p className="text-lg font-normal leading-7 text-gray-200 text-center">
                  Expert Consultants{" "}
                </p>
                <h3 className="text-2xl font-bold leading-9 text-white font-manrope text-center">
                  599+
                </h3>
              </div>
              <div className="w-[9.375rem] h-[9.375rem] p-6 rounded-full bg-cover bg-no-repeat flex flex-col gap-1.5">
                <p className="text-lg font-normal leading-7 text-gray-200 text-center">
                  Projects Delivered
                </p>
                <h3 className="text-2xl font-bold leading-9 text-white font-manrope text-center">
                  10k+
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-center gap-8 pt-1.5 flex-wrap sm:flex-nowrap">
              <div className="w-[9.375rem] h-[9.375rem] p-6 rounded-full bg-cover bg-no-repeat flex flex-col gap-1.5">
                <p className="text-lg font-normal leading-7 text-gray-200 text-center">
                  Active Clients{" "}
                </p>
                <h3 className="text-2xl font-bold leading-9 text-white font-manrope text-center">
                  6k+
                </h3>
              </div>
              <div className="w-[9.375rem] h-[9.375rem] p-6 rounded-full bg-cover bg-no-repeat flex flex-col gap-1.5">
                <p className="text-lg font-normal leading-7 text-gray-200 text-center">
                  Orders in Queue{" "}
                </p>
                <h3 className="text-2xl font-bold leading-9 text-white font-manrope text-center">
                  150+
                </h3>
              </div>
              <div className="w-[9.375rem] h-[9.375rem] p-6 rounded-full bg-cover bg-no-repeat flex flex-col gap-1.5">
                <p className="text-lg font-normal leading-7 text-gray-200 text-center">
                  Year of Experience{" "}
                </p>
                <h3 className="text-2xl font-bold leading-9 text-white font-manrope text-center">
                  20
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
