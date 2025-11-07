export default function SimpleFooterWithCtaButton() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-center text-5xl font-bold text-gray-900">
            Our team{" "}
          </h2>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 min-[500px]:grid-cols-2 md:max-w-3xl md:grid-cols-6 lg:max-w-full lg:grid-cols-5">
          <div className="group block md:col-span-2 lg:col-span-1">
            <div className="relative mb-6">
              <img
                src="https://pagedone.io/asset/uploads/1696238374.png"
                alt="Antonio image"
                className="mx-auto h-40 w-40 rounded-full border border-solid border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
              />
            </div>
            <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-indigo-600">
              Antonio Roberto{" "}
            </h4>
            <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
              Founder
            </span>
          </div>
          <div className="group block md:col-span-2 lg:col-span-1">
            <div className="relative mb-6">
              <img
                src="https://pagedone.io/asset/uploads/1696238396.png"
                alt="Patricia image"
                className="mx-auto h-40 w-40 rounded-full border border-solid border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
              />
            </div>
            <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-indigo-600">
              Patricia Angely{" "}
            </h4>
            <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
              Co-Founder
            </span>
          </div>
          <div className="group group md:col-span-2 lg:col-span-1">
            <div className="relative mb-6">
              <img
                src="	https://pagedone.io/asset/uploads/1696238411.png"
                alt="Jerom image"
                className="mx-auto h-40 w-40 rounded-full border border-solid border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
              />
            </div>
            <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-indigo-600">
              Jerom Bell{" "}
            </h4>
            <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
              Chairman
            </span>
          </div>
          <div className="group block md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-4">
            <div className="relative mb-6">
              <img
                src="	https://pagedone.io/asset/uploads/1696238425.png"
                alt="Yasmine image"
                className="mx-auto h-40 w-40 rounded-full border border-solid border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
              />
            </div>
            <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-indigo-600">
              Yasmine Tano{" "}
            </h4>
            <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
              CEO
            </span>
          </div>
          <div className="group mx-auto block min-[500px]:col-span-2 md:col-span-2 lg:col-span-1">
            <div className="relative mb-6">
              <img
                src="https://pagedone.io/asset/uploads/1696238446.png"
                alt="Martin image"
                className="mx-auto h-40 w-40 rounded-full border border-solid border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
              />
            </div>
            <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-indigo-600">
              Martin Darbys
            </h4>
            <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
              Product Manager
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
