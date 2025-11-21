export default function FeatureListWithBorderLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-5 max-w-full text-center text-4xl leading-[3.25rem] font-bold text-gray-900 lg:mx-auto lg:max-w-3xl">
            Every feature designed for the user
          </h2>
          <p className="text-lg leading-[1.8rem] font-normal text-gray-500 lg:mx-auto lg:max-w-3xl">
            At every step of our process, we prioritize the user, ensuring that
            our products and services are designed with their needs in mind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative w-full border-b border-gray-200 bg-transparent p-5 text-center transition-all duration-500 md:border-r md:border-b lg:border-r lg:border-b xl:border-r xl:border-b xl:p-10">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
              Result
            </h4>
            <p className="text-sm leading-[1.4rem] font-normal text-gray-500 transition-all duration-500">
              Accurate results are our top priority, ensuring you always have
              reliable information at your fingertips.
            </p>
          </div>
          <div className="relative w-full border-b border-gray-200 bg-transparent p-5 text-center transition-all duration-500 md:border-b lg:border-r lg:border-b xl:border-r xl:border-b xl:p-10">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
              Quality
            </h4>
            <p className="text-sm leading-[1.4rem] font-normal text-gray-500 transition-all duration-500">
              We are committed to providing high-quality products and services
              that exceed your expectations.
            </p>
          </div>
          <div className="relative w-full border-b border-gray-200 bg-transparent p-5 text-center transition-all duration-500 md:border-r md:border-b lg:border-r-0 lg:border-b xl:border-b xl:p-10">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
              Product
            </h4>
            <p className="text-sm leading-[1.4rem] font-normal text-gray-500 transition-all duration-500">
              Experience the difference of our feature-rich product that offers
              everything you requires and many more
            </p>
          </div>
          <div className="relative w-full border-b border-gray-200 bg-transparent p-5 text-center transition-all duration-500 md:border-b lg:border-r lg:border-b-0 xl:border-r xl:p-10">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
              Sales
            </h4>
            <p className="text-sm leading-[1.4rem] font-normal text-gray-500 transition-all duration-500">
              Experience the difference of our personalized sales approach,
              where you are always our top priority.
            </p>
          </div>
          <div className="relative w-full border-b border-gray-200 bg-transparent p-5 text-center transition-all duration-500 md:border-r md:border-b-0 lg:border-r xl:border-r xl:p-10">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
              Onboarding
            </h4>
            <p className="text-sm leading-[1.4rem] font-normal text-gray-500 transition-all duration-500">
              Our onboarding process is designed to be simple and intuitive, so
              you can start using our platform right away
            </p>
          </div>
          <div className="relative w-full border-gray-200 bg-transparent p-5 text-center transition-all duration-500 xl:p-10">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center transition-all duration-500">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-lg leading-7 font-medium text-gray-900 capitalize transition-all duration-500">
              Support
            </h4>
            <p className="text-sm leading-[1.4rem] font-normal text-gray-500 transition-all duration-500">
              Our commitment to exceptional support ensures that you receive the
              assistance you need, whenever you need it
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
