export default function KeyStatsAndMilestonesOverview() {
  return (
    <section className="py-20 font-inter bg-gray-900">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-16 lg:gap-32 lg:justify-between flex-col lg:flex-row justify-center">
          <div className="lg:w-[52%] flex flex-col gap-4">
            <h2 className="text-3xl font-bold font-manrope text-white text-center lg:text-start">
              Our Impressive Growth: A Deep Dive into Our Key Stats and
              Milestones
            </h2>
            <p className="text-base font-normal leading-6 text-gray-200 text-center lg:text-start">
              Our stats at a glance provide a snapshot of our success,
              highlighting important metrics like revenue growth.
            </p>
            <button className="mt-7 mx-auto lg:mx-0 w-fit py-2.5 px-6 bg-indigo-600 rounded-full transition-all duration-500 hover:bg-indigo-700 text-base font-semibold leading-7 text-white">
              Lets get started
            </button>
          </div>
          <div className="w-full sm:w-2/3 lg:w-[45%] flex flex-col gap-6">
            <div className="rounded-xl bg-gray-800 p-5">
              <h3 className="font-manrope text-4xl font-semibold leading-[52px] text-white">
                260+
              </h3>
              <h4 className="text-lg font-medium text-white leading-8">
                Expert Consultants
              </h4>
              <p className="text-xs font-normal leading-5 text-gray-200 pt-2">
                Expert consultants are professionals with specialized knowledge
                and extensive experience
              </p>
            </div>
            <div className="rounded-xl bg-gray-800 p-5">
              <h3 className="font-manrope text-4xl font-semibold leading-[52px] text-white">
                240+
              </h3>
              <h4 className="text-lg font-medium text-white leading-8">
                Company growth
              </h4>
              <p className="text-xs font-normal leading-5 text-gray-200 pt-2">
                Company growth refers to the increase in a business's size,
                revenue, market share, or overall value.
              </p>
            </div>
            <div className="rounded-xl bg-gray-800 p-5">
              <h3 className="font-manrope text-4xl font-semibold leading-[52px] text-white">
                724+
              </h3>
              <h4 className="text-lg font-medium text-white leading-8">
                Projects Delivered
              </h4>
              <p className="text-xs font-normal leading-5 text-gray-200 pt-2">
                Projects Delivered refers to the successful completion and
                delivery of specific initiatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
