export default function VerticalFeatureCardWithTailwindCss() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="mb-7 text-center text-4xl font-bold text-white">
            Explore our features
          </h2>
          <p className="mx-auto text-center text-base font-normal text-gray-400 lg:max-w-2xl">
            We provide all the advantages that can simplify all your financial
            transactions without any further requirements{" "}
          </p>
        </div>
        <div className="mx-auto grid max-w-sm grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
          <div className="group relative w-full overflow-hidden rounded-3xl border border-solid border-gray-500 transition-all duration-500 hover:bg-indigo-600">
            <div className="block">
              <img
                src="https://pagedone.io/asset/uploads/1695031411.png"
                alt="Feature tailwind section"
                className="w-full rounded-t-2xl object-cover"
              />
            </div>
            <div className="p-9">
              <h4 className="mb-5 text-center text-xl font-semibold text-white">
                Customer Experience{" "}
              </h4>
              <p className="mb-6 text-center text-sm leading-6 font-normal text-gray-400 transition-all duration-500 group-hover:text-white">
                We prioritize our customer experience, ensuring that every
                interaction with our platform is seamless and intuitive.
              </p>
              <a
                href="javascript:;"
                className="flex items-center justify-center gap-2 text-xs font-semibold text-white"
              >
                Learn More {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="group relative w-full overflow-hidden rounded-3xl border border-solid border-gray-500 transition-all duration-500 hover:bg-indigo-600">
            <div className="block">
              <img
                src="https://pagedone.io/asset/uploads/1695031434.png"
                alt="Feature tailwind section"
                className="w-full rounded-t-2xl object-cover"
              />
            </div>
            <div className="p-9">
              <h4 className="mb-5 text-center text-xl font-semibold text-white">
                Pro Advisors{" "}
              </h4>
              <p className="mb-6 text-center text-sm leading-6 font-normal text-gray-400 transition-all duration-500 group-hover:text-white">
                Stand-by pro advisors to provide personalized recommendations
                and insights for your business growth.
              </p>
              <a
                href="javascript:;"
                className="flex items-center justify-center gap-2 text-xs font-semibold text-white"
              >
                Learn More {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="group relative w-full overflow-hidden rounded-3xl border border-solid border-gray-500 transition-all duration-500 hover:bg-indigo-600 md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-full">
            <div className="block">
              <img
                src="https://pagedone.io/asset/uploads/1695031452.png"
                alt="Feature tailwind section"
                className="w-full rounded-t-2xl object-cover"
              />
            </div>
            <div className="p-9">
              <h4 className="mb-5 text-center text-xl font-semibold text-white">
                Sales and Marketing
              </h4>
              <p className="mb-6 text-center text-sm leading-6 font-normal text-gray-400 transition-all duration-500 group-hover:text-white">
                Our sales and marketing team works together to provide you with
                a comprehensive solution that is tailored to your needs.
              </p>
              <a
                href="javascript:;"
                className="flex items-center justify-center gap-2 text-xs font-semibold text-white"
              >
                Learn More {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
