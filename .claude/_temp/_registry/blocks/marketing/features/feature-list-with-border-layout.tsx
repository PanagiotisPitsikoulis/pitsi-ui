export default function FeatureListWithBorderLayout() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 max-w-full lg:max-w-3xl lg:mx-auto">
            Every feature designed for the user
          </h2>
          <p className="text-lg font-normal text-gray-500 leading-[1.8rem] lg:max-w-3xl lg:mx-auto ">
            At every step of our process, we prioritize the user, ensuring that
            our products and services are designed with their needs in mind.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b xl:border-r border-gray-200 xl:border-b lg:border-b lg:border-r md:border-r md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg font-medium text-gray-900 leading-7 mb-3 capitalize transition-all duration-500 ">
              Result
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-[1.4rem] ">
              Accurate results are our top priority, ensuring you always have
              reliable information at your fingertips.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10  border-b xl:border-r border-gray-200 xl:border-b lg:border-b lg:border-r md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg font-medium text-gray-900 leading-7 mb-3 capitalize transition-all duration-500 ">
              Quality
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-[1.4rem] ">
              We are committed to providing high-quality products and services
              that exceed your expectations.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b border-gray-200 xl:border-b lg:border-b lg:border-r-0 md:border-r md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg font-medium text-gray-900 leading-7 mb-3 capitalize transition-all duration-500 ">
              Product
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-[1.4rem] ">
              Experience the difference of our feature-rich product that offers
              everything you requires and many more
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b border-gray-200 xl:border-r  lg:border-r lg:border-b-0  md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg font-medium text-gray-900 leading-7 mb-3 capitalize transition-all duration-500 ">
              Sales
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-[1.4rem] ">
              Experience the difference of our personalized sales approach,
              where you are always our top priority.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b border-gray-200 xl:border-r  lg:border-r md:border-r md:border-b-0">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg font-medium text-gray-900 leading-7 mb-3 capitalize transition-all duration-500 ">
              Onboarding
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-[1.4rem] ">
              Our onboarding process is designed to be simple and intuitive, so
              you can start using our platform right away
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-gray-200 ">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg font-medium text-gray-900 leading-7 mb-3 capitalize transition-all duration-500 ">
              Support
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-[1.4rem] ">
              Our commitment to exceptional support ensures that you receive the
              assistance you need, whenever you need it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
