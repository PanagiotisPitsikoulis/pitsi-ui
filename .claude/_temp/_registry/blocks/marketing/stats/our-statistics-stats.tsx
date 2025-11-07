export default function OurStatisticsStats() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold font-manrope text-indigo-600 text-center">
          Our statistics
        </h2>
        <p className="text-base font-normal leading-7 text-gray-500 text-center pt-3">
          We help you to unleash the power within your business
        </p>
        <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between pt-14">
          <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-gray-100 text-center lg:text-start">
            <span className="text-xl text-gray-500 block mb-5">
              Expert Consultants
            </span>
            <div className="font-manrope font-bold text-5xl text-indigo-600">
              280+
            </div>
          </div>
          <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-gray-100 text-center lg:text-start lg:pl-8">
            <span className="text-xl text-gray-500 block mb-5">
              Active Clients
            </span>
            <div className="font-manrope font-bold text-5xl text-indigo-600 ">
              200+
            </div>
          </div>
          <div className="w-full lg:w-1/4 border-b pb-10 lg:border-b-0 lg:pb-0 lg:border-r border-gray-100 text-center lg:text-start lg:pl-8">
            <span className="text-xl text-gray-500 block mb-5">
              Projects Delivered
            </span>
            <div className="font-manrope font-bold text-5xl text-indigo-600">
              520+
            </div>
          </div>
          <div className="w-full lg:w-1/4  text-center lg:text-start lg:pl-8">
            <span className="text-xl text-gray-500 block mb-5">
              Orders in Queue
            </span>
            <div className="font-manrope font-bold text-5xl text-indigo-600 ">
              50+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
