export default function TeamPageWithOverlayCardWithGeneralDescription() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-20 xl:flex-row xl:justify-start">
          <div className="w-full xl:w-1/2">
            <div className="block">
              <h2 className="font-manrope mb-6 text-center text-5xl font-bold text-gray-900 xl:text-left">
                Our brilliant team of{" "}
                <span className="text-indigo-600">Pagedone</span>
              </h2>
              <p className="mb-14 text-center text-xl text-gray-500 xl:text-left">
                These people work on making our product best.
              </p>
              <button className="mx-auto block cursor-pointer rounded-full bg-indigo-600 px-9 py-3 text-center text-base font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 xl:mx-0">
                Join our team
              </button>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 max-xl:mx-auto max-xl:max-w-3xl max-md:max-w-sm md:grid-cols-2">
              <div className="group relative w-full transition-all duration-500">
                <img
                  src="https://pagedone.io/asset/uploads/1696238838.png"
                  alt="Radhika image"
                  className="h-72 w-full rounded-2xl object-cover"
                />
                <div className="absolute right-0 bottom-4 left-0 mx-4 flex justify-between rounded-lg bg-white px-4 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="block">
                    <h4 className="mb-1 font-medium text-gray-900">
                      Radhika Lesli
                    </h4>
                    <span className="text-xs text-indigo-600">Sales Chief</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="cursor-pointer"></p>
                    <p className="cursor-pointer"></p>
                  </div>
                </div>
              </div>
              <div className="group relative w-full transition-all duration-500">
                <img
                  src="https://pagedone.io/asset/uploads/1696238917.png"
                  alt="Harsh image"
                  className="h-72 w-full rounded-2xl object-cover"
                />
                <div className="absolute right-0 bottom-4 left-0 mx-4 flex justify-between rounded-lg bg-white px-4 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="block">
                    <h4 className="mb-1 font-medium text-gray-900">
                      Harsh Patel
                    </h4>
                    <span className="text-xs text-indigo-600">Developer</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="cursor-pointer"></p>
                    <p className="cursor-pointer"></p>
                  </div>
                </div>
              </div>
              <div className="group relative w-full transition-all duration-500">
                <img
                  src="https://pagedone.io/asset/uploads/1696238935.png"
                  alt="Alexa image"
                  className="h-72 w-full rounded-2xl object-cover"
                />
                <div className="absolute right-0 bottom-4 left-0 mx-4 flex justify-between rounded-lg bg-white px-4 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="block">
                    <h4 className="mb-1 font-medium text-gray-900">
                      Alexa Kimberly
                    </h4>
                    <span className="text-xs text-indigo-600">
                      Lead Designer
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="cursor-pointer"></p>
                    <p className="cursor-pointer"></p>
                  </div>
                </div>
              </div>
              <div className="group relative w-full transition-all duration-500">
                <img
                  src="https://pagedone.io/asset/uploads/1696238954.png"
                  alt="Jim image"
                  className="h-72 w-full rounded-2xl object-cover"
                />
                <div className="absolute right-0 bottom-4 left-0 mx-4 flex justify-between rounded-lg bg-white px-4 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="block">
                    <h4 className="mb-1 font-medium text-gray-900">
                      Jim Carry
                    </h4>
                    <span className="text-xs text-indigo-600">
                      Product Manager
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="cursor-pointer"></p>
                    <p className="cursor-pointer"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
