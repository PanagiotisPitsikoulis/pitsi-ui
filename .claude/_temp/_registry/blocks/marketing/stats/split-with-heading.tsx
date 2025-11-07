export default function SplitWithHeading() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 items-center justify-center lg:flex-row lg:justify-between">
          <div className="w-full xl:w-1/2">
            <h3 className="font-manrope font-semibold text-3xl text-gray-900 mb-9 text-center lg:text-left">
              Our services have a proven track record of boosting businesses
            </h3>
            <p className="text-xl text-gray-500 mb-16 text-center lg:text-left">
              We help you to unleash the power within your business
            </p>
            <button className="bg-indigo-600 rounded-full  shadow-sm py-3.5 px-7 flex justify-center items-center text-white font-semibold transition-all duration-500 mx-auto hover:bg-indigo-700 lg:mx-0">
              Lets get started
            </button>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl text-center py-16 px-10">
                <div className="font-manrope text-6xl text-gray-900 font-bold mb-2">
                  260<span className="text-indigo-600">+</span>
                </div>
                <h4 className="text-xl text-gray-500 ">Expert Consultants </h4>
              </div>
              <div className="bg-gray-50 rounded-2xl text-center py-16 px-10">
                <div className="font-manrope text-6xl text-gray-900 font-bold mb-2">
                  975<span className="text-indigo-600">+</span>
                </div>
                <h4 className="text-xl text-gray-500 ">Active Clients</h4>
              </div>
              <div className="bg-gray-50 rounded-2xl text-center py-16 px-10">
                <div className="font-manrope text-6xl text-gray-900 font-bold mb-2">
                  724<span className="text-indigo-600">+</span>
                </div>
                <h4 className="text-xl text-gray-500 ">Projects Delivered</h4>
              </div>
              <div className="bg-gray-50 rounded-2xl text-center py-16 px-10">
                <div className="font-manrope text-6xl text-gray-900 font-bold mb-2">
                  89<span className="text-indigo-600">+</span>
                </div>
                <h4 className="text-xl text-gray-500 ">Orders in Queue</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
