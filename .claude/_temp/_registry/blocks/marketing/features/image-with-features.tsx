export default function ImageWithFeatures() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm text-center text-gray-500 font-medium mb-6 block">
            OUR 500+ STRATEGY OPTIONS
          </span>
          <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] lg:max-w-lg mx-auto">
            We have helpful resources to build best portfolio
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 lg:gap-28 lg:flex-row lg:justify-between ">
          <div className="w-full lg:w-2/5">
            <div className="grid grid-cols-1 gap-9 max-lg:max-w-2xl max-lg:mx-auto">
              <div className="flex  gap-5">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-lg font-medium text-gray-900">
                    Simplify Account Change
                  </h4>
                  <p className="text-sm text-gray-500 font-normal leading-6">
                    Experience the simplicity of our platform's account change
                    process.
                  </p>
                </div>
              </div>
              <div className="flex  gap-5">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-lg font-medium text-gray-900">
                    Easy to Customize
                  </h4>
                  <p className="text-sm text-gray-500 font-normal leading-6">
                    Platform is designed to be flexible &amp; customizable, so
                    you can tailor it to meet your unique business needs.
                  </p>
                </div>
              </div>
              <div className="flex  gap-5">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-lg font-medium text-gray-900">
                    Various Categories
                  </h4>
                  <p className="text-sm text-gray-500 font-normal leading-6">
                    Provides you multiple options of business categories to get
                    more from our platform
                  </p>
                </div>
              </div>
              <div className="flex  gap-5">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-lg font-medium text-gray-900">
                    Fast working{" "}
                  </h4>
                  <p className="text-sm text-gray-500 font-normal leading-6">
                    Optimize your workflow and maximize your output. with our
                    fast servers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <img
              src="https://pagedone.io/asset/uploads/1695030942.png"
              alt="Feature tailwind section"
              className="max-lg:mx-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
