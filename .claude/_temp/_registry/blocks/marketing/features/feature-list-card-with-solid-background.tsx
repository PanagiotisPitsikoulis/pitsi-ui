export default function FeatureListCardWithSolidBackground() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-3xl text-center font-bold text-gray-900 mb-5">
            What sets us apart from others
          </h2>
          <p className="text-lg font-normal text-gray-500 leading-7 lg:max-w-2xl lg:mx-auto ">
            We provide all the advantages that can simplify all your financial
            transactions without any further requirements{" "}
          </p>
        </div>
        <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-md:max-w-md max-md:mx-auto">
          <div className="relative w-full bg-gray-50 rounded-2xl  transition-all duration-500 py-16 px-9  md:w-2/5 xl:w-1/3 ">
            <div className="bg-indigo-100 rounded-full flex justify-center items-center mb-6 w-16 h-16 mx-auto">
              {/* SVG removed */}
            </div>
            <h4 className="text-xl font-medium text-gray-900 mb-3 capitalize transition-all duration-500 text-center">
              Events
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 text-center mb-6">
              Experience the value of our events, which are designed to provide
              you with the knowledge, resources, and connections you need to
              succeed.
            </p>
            <a
              href="#"
              className="group flex justify-center items-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-500 "
            >
              Read more{/* SVG removed */}
            </a>
          </div>
          <div className="relative w-full bg-gray-50 rounded-2xl  transition-all duration-500 py-16 px-9  md:w-2/5 xl:w-1/3 ">
            <div className="bg-indigo-100 rounded-full flex justify-center items-center mb-6 w-16 h-16 mx-auto">
              {/* SVG removed */}
            </div>
            <h4 className="text-xl font-medium text-gray-900 mb-3 capitalize transition-all duration-500 text-center">
              Coaching
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 text-center mb-6">
              Our focus on coaching ensures that you have access to the support
              and resources you need to succeed, no matter where you are in your
              journey.
            </p>
            <a
              href="#"
              className="group flex justify-center items-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-500 "
            >
              Read more{/* SVG removed */}
            </a>
          </div>
          <div className="relative w-full bg-gray-50 rounded-2xl  transition-all duration-500 py-16 px-9  md:w-2/5 xl:w-1/3 ">
            <div className="bg-indigo-100 rounded-full flex justify-center items-center mb-6 w-16 h-16 mx-auto">
              {/* SVG removed */}
            </div>
            <h4 className="text-xl font-medium text-gray-900 mb-3 capitalize transition-all duration-500 text-center">
              Result
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 text-center mb-6">
              Experience the value of our platform's performance and trackable
              results, which help you make informed decisions and optimize your
              business strategy.
            </p>
            <a
              href="#"
              className="group flex justify-center items-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-500 "
            >
              Read more{/* SVG removed */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
