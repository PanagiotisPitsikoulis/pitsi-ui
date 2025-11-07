export default function VerticalFeatureCardWithTailwindCss() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-4xl text-center font-bold text-white mb-7">
            Explore our features
          </h2>
          <p className="text-base text-center text-gray-400 font-normal lg:max-w-2xl mx-auto">
            We provide all the advantages that can simplify all your financial
            transactions without any further requirements{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-sm md:max-w-2xl mx-auto lg:max-w-full">
          <div className="group relative w-full border border-solid border-gray-500 rounded-3xl transition-all duration-500 overflow-hidden hover:bg-indigo-600">
            <div className="block">
              <img
                src="https://pagedone.io/asset/uploads/1695031411.png"
                alt="Feature tailwind section"
                className="w-full rounded-t-2xl object-cover"
              />
            </div>
            <div className="p-9">
              <h4 className="mb-5 text-xl text-white text-center font-semibold">
                Customer Experience{" "}
              </h4>
              <p className="text-sm text-gray-400 font-normal mb-6 text-center leading-6 transition-all duration-500 group-hover:text-white">
                We prioritize our customer experience, ensuring that every
                interaction with our platform is seamless and intuitive.
              </p>
              <a
                href="javascript:;"
                className="flex items-center gap-2 justify-center text-xs font-semibold text-white"
              >
                Learn More {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="group relative w-full border border-solid border-gray-500 rounded-3xl transition-all duration-500 overflow-hidden hover:bg-indigo-600">
            <div className="block">
              <img
                src="https://pagedone.io/asset/uploads/1695031434.png"
                alt="Feature tailwind section"
                className="w-full rounded-t-2xl object-cover"
              />
            </div>
            <div className="p-9">
              <h4 className="mb-5 text-xl text-white text-center font-semibold">
                Pro Advisors{" "}
              </h4>
              <p className="text-sm text-gray-400 font-normal mb-6 text-center leading-6 transition-all duration-500 group-hover:text-white">
                Stand-by pro advisors to provide personalized recommendations
                and insights for your business growth.
              </p>
              <a
                href="javascript:;"
                className="flex items-center gap-2 justify-center text-xs font-semibold text-white"
              >
                Learn More {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="group relative w-full border border-solid border-gray-500 rounded-3xl transition-all duration-500 overflow-hidden hover:bg-indigo-600 md:col-span-2 md:w-1/2 md:mx-auto lg:w-full lg:col-span-1">
            <div className="block">
              <img
                src="https://pagedone.io/asset/uploads/1695031452.png"
                alt="Feature tailwind section"
                className="w-full rounded-t-2xl object-cover"
              />
            </div>
            <div className="p-9">
              <h4 className="mb-5 text-xl text-white text-center font-semibold">
                Sales and Marketing
              </h4>
              <p className="text-sm text-gray-400 font-normal mb-6 text-center leading-6 transition-all duration-500 group-hover:text-white">
                Our sales and marketing team works together to provide you with
                a comprehensive solution that is tailored to your needs.
              </p>
              <a
                href="javascript:;"
                className="flex items-center gap-2 justify-center text-xs font-semibold text-white"
              >
                Learn More {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
