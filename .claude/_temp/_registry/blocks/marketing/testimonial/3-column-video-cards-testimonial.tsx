export default function ThreeColumnVideoCardsTestimonial() {
  return (
    <section className="py-24 ">
      <div className="relative py-20 ">
        <div className="absolute bottom-0 w-full h-96 bg-indigo-50 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 ">
            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center mb-6">
              What people says about us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto mb-8">
            <div className="group w-full">
              <div className="relative">
                <img
                  src="https://pagedone.io/asset/uploads/1709788150.png"
                  alt="Nolan image"
                  className="w-full rounded-3xl object-cover"
                />
                <div className="absolute bottom-0 w-full flex justify-between items-center px-8 py-6">
                  <div className="block">
                    <h5 className="text-xl text-white font-semibold mb-2">
                      Nolan George{" "}
                    </h5>
                    <span className="text-sm text-gray-300">
                      CEO Fintech Company{" "}
                    </span>
                  </div>
                  <a
                    href="javascript:;"
                    className="w-11 h-11 rounded-full bg-white/10 border border-solid border-white backdrop-blur-sm flex justify-center items-center"
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
                <div className="absolute bottom-0 w-full flex justify-between items-center px-8 py-6">
                  <div className="block">
                    <h5 className="text-xl text-white font-semibold mb-2">
                      Rayna Aminof{" "}
                    </h5>
                    <span className="text-sm text-gray-300">
                      Founder Sisyphus Ventures{" "}
                    </span>
                  </div>
                  <a
                    href="javascript:;"
                    className="w-11 h-11 rounded-full bg-white/10 border border-solid border-white backdrop-blur-sm flex justify-center items-center"
                  >
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="group w-full sm:col-span-2 sm:w-1/2 lg:w-full mx-auto lg:col-span-1 ">
              <div className="relative">
                <img
                  src="https://pagedone.io/asset/uploads/1709788184.png"
                  alt="Robert image"
                  className="w-full rounded-3xl object-cover"
                />
                <div className="absolute bottom-0 w-full flex justify-between items-center px-8 py-6">
                  <div className="block">
                    <h5 className="text-xl text-white font-semibold mb-2">
                      Robert Fox{" "}
                    </h5>
                    <span className="text-sm text-gray-300">
                      Manager At Amzon
                    </span>
                  </div>
                  <a
                    href="javascript:;"
                    className="w-11 h-11 rounded-full bg-white/10 border border-solid border-white backdrop-blur-sm flex justify-center items-center"
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
              className=" bg-indigo-600 shadow-sm rounded-full transition-all duration-500 py-3 px-7 text-base text-white font-semibold relative hover:bg-indigo-700"
            >
              View All People
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
