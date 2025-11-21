export default function ThreeColumnVideoCardsTestimonial() {
  return (
    <section className="py-24">
      <div className="relative py-20">
        <div className="absolute bottom-0 hidden h-96 w-full bg-indigo-50 lg:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-manrope mb-6 text-center text-4xl font-bold text-gray-900">
              What people says about us
            </h2>
          </div>
          <div className="mx-auto mb-8 grid max-w-sm grid-cols-1 gap-8 sm:max-w-2xl sm:grid-cols-2 lg:max-w-full lg:grid-cols-3">
            <div className="group w-full">
              <div className="relative">
                <img
                  src="https://pagedone.io/asset/uploads/1709788150.png"
                  alt="Nolan image"
                  className="w-full rounded-3xl object-cover"
                />
                <div className="absolute bottom-0 flex w-full items-center justify-between px-8 py-6">
                  <div className="block">
                    <h5 className="mb-2 text-xl font-semibold text-white">
                      Nolan George{" "}
                    </h5>
                    <span className="text-sm text-gray-300">
                      CEO Fintech Company{" "}
                    </span>
                  </div>
                  <a
                    href="javascript:;"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-solid border-white bg-white/10 backdrop-blur-sm"
                  >
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="group w-full">
              <div className="relative">
                <img
                  src="https://pagedone.io/asset/uploads/1696230660.png"
                  alt="Rayna image"
                  className="w-full rounded-3xl object-cover"
                />
                <div className="absolute bottom-0 flex w-full items-center justify-between px-8 py-6">
                  <div className="block">
                    <h5 className="mb-2 text-xl font-semibold text-white">
                      Rayna Aminof{" "}
                    </h5>
                    <span className="text-sm text-gray-300">
                      Founder Sisyphus Ventures{" "}
                    </span>
                  </div>
                  <a
                    href="javascript:;"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-solid border-white bg-white/10 backdrop-blur-sm"
                  >
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="group mx-auto w-full sm:col-span-2 sm:w-1/2 lg:col-span-1 lg:w-full">
              <div className="relative">
                <img
                  src="https://pagedone.io/asset/uploads/1709788184.png"
                  alt="Robert image"
                  className="w-full rounded-3xl object-cover"
                />
                <div className="absolute bottom-0 flex w-full items-center justify-between px-8 py-6">
                  <div className="block">
                    <h5 className="mb-2 text-xl font-semibold text-white">
                      Robert Fox{" "}
                    </h5>
                    <span className="text-sm text-gray-300">
                      Manager At Amzon
                    </span>
                  </div>
                  <a
                    href="javascript:;"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-solid border-white bg-white/10 backdrop-blur-sm"
                  >
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="javascript:;"
              className="relative rounded-full bg-indigo-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700"
            >
              View All People
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
