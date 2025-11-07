export default function VerticalStats() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/3 border border-gray-300 p-8 rounded-2xl">
            <div className="font-manrope text-5xl font-bold text-indigo-600">
              240%
            </div>
            <h4 className="text-2xl text-gray-900 font-medium my-4">
              Company growth
            </h4>
            <p className=" text-gray-600 leading-6">
              Company's remarkable growth journey as we continually innovate and
              drive towards new heights of success.
            </p>
          </div>
          <div className="w-full lg:w-1/3 border border-gray-300 p-8 rounded-2xl">
            <div className="font-manrope text-5xl font-bold text-indigo-600">
              175+
            </div>
            <h4 className="text-2xl text-gray-900 font-medium my-4">
              Team members
            </h4>
            <p className=" text-gray-600 leading-6">
              Our very talented team members are the powerhouse of pagedone and
              pillars of our success.{" "}
            </p>
          </div>
          <div className="w-full lg:w-1/3 border border-gray-300 p-8 rounded-2xl">
            <div className="font-manrope text-5xl font-bold text-indigo-600">
              625+
            </div>
            <h4 className="text-2xl text-gray-900 font-medium my-4">
              Projects Completed
            </h4>
            <p className=" text-gray-600 leading-6">
              We have accomplished more than 625 projects worldwide and we are
              still counting many more.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
