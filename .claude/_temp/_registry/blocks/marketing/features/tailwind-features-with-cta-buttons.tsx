export default function TailwindFeaturesWithCtaButtons() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 md:grid-cols-2 lg:gap-24 max-w-md mx-auto md:max-w-3xl lg:max-w-full">
          <div className=" relative w-full transition-all duration-500 lg:max-w-md">
            <div className="relative mb-4"></div>
            <h4 className="text-lg font-semibold text-gray-900 leading-7 mb-2 capitalize transition-all duration-500 ">
              Privacy Center
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-[1.3rem] mb-4">
              We have the most up-to-date security to support all our customers
              in carrying out all transactions.
            </p>
            <a
              href="#"
              className="group flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-500 "
            >
              Read more {/* SVG removed */}
            </a>
          </div>
          <div className=" relative w-full transition-all duration-500 lg:max-w-md">
            <div className="relative mb-4"></div>
            <h4 className="text-lg font-semibold text-gray-900 leading-7 mb-2 capitalize transition-all duration-500 ">
              Quick &amp; Easy Transaction
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-[1.3rem] mb-4">
              We provide faster transaction speeds than competitors, so money
              arrives and is received faster.
            </p>
            <a
              href="#"
              className="group flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-500 "
            >
              Read more {/* SVG removed */}
            </a>
          </div>
          <div className=" relative w-full transition-all duration-500 lg:max-w-md">
            <div className="relative mb-4"></div>
            <h4 className="text-lg font-semibold text-gray-900 leading-7 mb-2 capitalize transition-all duration-500 ">
              Customer Service
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-[1.3rem] mb-4">
              Our commitment to exceptional support ensures that you receive the
              assistance you need, whenever you need it
            </p>
            <a
              href="#"
              className="group flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-500 "
            >
              Read more {/* SVG removed */}
            </a>
          </div>
          <div className=" relative w-full transition-all duration-500 lg:max-w-md">
            <div className="relative mb-4"></div>
            <h4 className="text-lg font-semibold text-gray-900 leading-7 mb-2 capitalize transition-all duration-500 ">
              Accurate Result
            </h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-[1.3rem] mb-4">
              Accurate results are our top priority, ensuring you always have
              reliable information at your fingertips.
            </p>
            <a
              href="#"
              className="group flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-500 "
            >
              Read more {/* SVG removed */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
