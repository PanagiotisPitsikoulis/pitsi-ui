export default function ImageWithFeatures() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-6 block text-center text-sm font-medium text-gray-500">
            OUR 500+ STRATEGY OPTIONS
          </span>
          <h2 className="mx-auto text-center text-4xl leading-[3.25rem] font-bold text-gray-900 lg:max-w-lg">
            We have helpful resources to build best portfolio
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:gap-28">
          <div className="w-full lg:w-2/5">
            <div className="grid grid-cols-1 gap-9 max-lg:mx-auto max-lg:max-w-2xl">
              <div className="flex gap-5">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-lg font-medium text-gray-900">
                    Simplify Account Change
                  </h4>
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    Experience the simplicity of our platform's account change
                    process.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-lg font-medium text-gray-900">
                    Easy to Customize
                  </h4>
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    Platform is designed to be flexible &amp; customizable, so
                    you can tailor it to meet your unique business needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-lg font-medium text-gray-900">
                    Various Categories
                  </h4>
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    Provides you multiple options of business categories to get
                    more from our platform
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-lg font-medium text-gray-900">
                    Fast working{" "}
                  </h4>
                  <p className="text-sm leading-6 font-normal text-gray-500">
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
              className="rounded-2xl object-cover max-lg:mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
