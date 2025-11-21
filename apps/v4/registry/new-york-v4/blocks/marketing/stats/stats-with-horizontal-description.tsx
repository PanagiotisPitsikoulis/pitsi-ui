export default function StatsWithHorizontalDescription() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-14 text-center text-4xl font-bold text-gray-900">
          Our results in numbers
        </h2>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between xl:gap-8">
          <div className="w-full rounded-2xl bg-white p-6 lg:w-1/3">
            <div className="flex gap-5">
              <div className="font-manrope text-2xl font-bold text-indigo-600">
                240%
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  Company growth
                </h4>
                <p className="text-xs leading-5 text-gray-500">
                  Company's remarkable growth journey as we continually innovate
                  and drive towards new heights of success.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl bg-white p-6 lg:w-1/3">
            <div className="flex gap-5">
              <div className="font-manrope text-2xl font-bold text-indigo-600">
                175+
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  Company growth
                </h4>
                <p className="text-xs leading-5 text-gray-500">
                  Our very talented team members are the powerhouse of pagedone
                  and pillars of our success.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl bg-white p-6 lg:w-1/3">
            <div className="flex gap-5">
              <div className="font-manrope text-2xl font-bold text-indigo-600">
                625+
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  Projects Completed
                </h4>
                <p className="text-xs leading-5 text-gray-500">
                  We have accomplished more than 625 projects worldwide and we
                  are still counting many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
