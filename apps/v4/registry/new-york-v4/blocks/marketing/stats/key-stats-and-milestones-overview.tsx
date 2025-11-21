export default function KeyStatsAndMilestonesOverview() {
  return (
    <section className="font-inter bg-gray-900 py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:justify-between lg:gap-32">
          <div className="flex flex-col gap-4 lg:w-[52%]">
            <h2 className="font-manrope text-center text-3xl font-bold text-white lg:text-start">
              Our Impressive Growth: A Deep Dive into Our Key Stats and
              Milestones
            </h2>
            <p className="text-center text-base leading-6 font-normal text-gray-200 lg:text-start">
              Our stats at a glance provide a snapshot of our success,
              highlighting important metrics like revenue growth.
            </p>
            <button className="mx-auto mt-7 w-fit rounded-full bg-indigo-600 px-6 py-2.5 text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
              Lets get started
            </button>
          </div>
          <div className="flex w-full flex-col gap-6 sm:w-2/3 lg:w-[45%]">
            <div className="rounded-xl bg-gray-800 p-5">
              <h3 className="font-manrope text-4xl leading-[52px] font-semibold text-white">
                260+
              </h3>
              <h4 className="text-lg leading-8 font-medium text-white">
                Expert Consultants
              </h4>
              <p className="pt-2 text-xs leading-5 font-normal text-gray-200">
                Expert consultants are professionals with specialized knowledge
                and extensive experience
              </p>
            </div>
            <div className="rounded-xl bg-gray-800 p-5">
              <h3 className="font-manrope text-4xl leading-[52px] font-semibold text-white">
                240+
              </h3>
              <h4 className="text-lg leading-8 font-medium text-white">
                Company growth
              </h4>
              <p className="pt-2 text-xs leading-5 font-normal text-gray-200">
                Company growth refers to the increase in a business's size,
                revenue, market share, or overall value.
              </p>
            </div>
            <div className="rounded-xl bg-gray-800 p-5">
              <h3 className="font-manrope text-4xl leading-[52px] font-semibold text-white">
                724+
              </h3>
              <h4 className="text-lg leading-8 font-medium text-white">
                Projects Delivered
              </h4>
              <p className="pt-2 text-xs leading-5 font-normal text-gray-200">
                Projects Delivered refers to the successful completion and
                delivery of specific initiatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
