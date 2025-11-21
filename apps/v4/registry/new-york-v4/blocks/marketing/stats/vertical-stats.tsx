export default function VerticalStats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between xl:gap-8">
          <div className="w-full rounded-2xl border border-gray-300 p-8 lg:w-1/3">
            <div className="font-manrope text-5xl font-bold text-indigo-600">
              240%
            </div>
            <h4 className="my-4 text-2xl font-medium text-gray-900">
              Company growth
            </h4>
            <p className="leading-6 text-gray-600">
              Company's remarkable growth journey as we continually innovate and
              drive towards new heights of success.
            </p>
          </div>
          <div className="w-full rounded-2xl border border-gray-300 p-8 lg:w-1/3">
            <div className="font-manrope text-5xl font-bold text-indigo-600">
              175+
            </div>
            <h4 className="my-4 text-2xl font-medium text-gray-900">
              Team members
            </h4>
            <p className="leading-6 text-gray-600">
              Our very talented team members are the powerhouse of pagedone and
              pillars of our success.{" "}
            </p>
          </div>
          <div className="w-full rounded-2xl border border-gray-300 p-8 lg:w-1/3">
            <div className="font-manrope text-5xl font-bold text-indigo-600">
              625+
            </div>
            <h4 className="my-4 text-2xl font-medium text-gray-900">
              Projects Completed
            </h4>
            <p className="leading-6 text-gray-600">
              We have accomplished more than 625 projects worldwide and we are
              still counting many more.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
