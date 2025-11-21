export default function TeamCardsWithBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-gray-900">
            Meet the team
          </h2>
          <p className="text-center text-lg text-gray-500">
            These people work on making our product best.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 max-md:mx-auto max-md:max-w-lg md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative block">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696238852.png"
                alt="Nikita image"
                className="h-[30rem] w-full rounded-2xl object-cover transition-all duration-500"
              />
            </div>
            <div className="absolute bottom-0 z-10 flex w-full justify-between rounded-b-2xl bg-gray-100 p-7 transition-all duration-500 group-hover:bg-indigo-600">
              <div className="block">
                <h4 className="mb-1 text-xl font-medium text-gray-900 capitalize transition-all duration-500 group-hover:text-white">
                  Nikita Xing{" "}
                </h4>
                <span className="block text-lg text-gray-600 transition-all duration-500 group-hover:text-white">
                  HR manager
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
              </div>
            </div>
          </div>
          <div className="group relative block">
            <div className="relative">
              <img
                src="	https://pagedone.io/asset/uploads/1696238888.png"
                alt="Harsh image"
                className="h-[30rem] w-full rounded-2xl object-cover transition-all duration-500"
              />
            </div>
            <div className="absolute bottom-0 z-10 flex w-full justify-between rounded-b-2xl bg-gray-100 p-7 transition-all duration-500 group-hover:bg-indigo-600">
              <div className="block">
                <h4 className="mb-1 text-xl font-medium text-gray-900 capitalize transition-all duration-500 group-hover:text-white">
                  Harsh Patel{" "}
                </h4>
                <span className="block text-lg text-gray-600 transition-all duration-500 group-hover:text-white">
                  Design Head
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
              </div>
            </div>
          </div>
          <div className="group relative block md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-full">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696238903.png"
                alt="Sasha image"
                className="h-[30rem] w-full rounded-2xl object-cover transition-all duration-500"
              />
            </div>
            <div className="absolute bottom-0 z-10 flex w-full justify-between rounded-b-2xl bg-gray-100 p-7 transition-all duration-500 group-hover:bg-indigo-600">
              <div className="block">
                <h4 className="mb-1 text-xl font-medium text-gray-900 capitalize transition-all duration-500 group-hover:text-white">
                  Sasha Grey{" "}
                </h4>
                <span className="block text-lg text-gray-600 transition-all duration-500 group-hover:text-white">
                  Team Lead
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
