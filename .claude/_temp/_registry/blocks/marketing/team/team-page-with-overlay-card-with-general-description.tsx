export default function TeamPageWithOverlayCardWithGeneralDescription() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-start gap-20">
          <div className="w-full xl:w-1/2">
            <div className="block">
              <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-6 xl:text-left">
                Our brilliant team of{" "}
                <span className="text-indigo-600">Pagedone</span>
              </h2>
              <p className="text-xl text-gray-500 text-center mb-14 xl:text-left">
                These people work on making our product best.
              </p>
              <button className="cursor-pointer py-3 px-9 bg-indigo-600 shadow-sm rounded-full text-base text-white font-semibold transition-all block text-center duration-500 hover:bg-indigo-700 mx-auto xl:mx-0">
                Join our team
              </button>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 max-md:max-w-sm max-xl:max-w-3xl max-xl:mx-auto">
              <div className="group w-full relative transition-all duration-500 ">
                <img
                  src="https://pagedone.io/asset/uploads/1696238838.png"
                  alt="Radhika image"
                  className="w-full h-72 rounded-2xl object-cover"
                />
                <div className="absolute flex justify-between bg-white rounded-lg transition-all duration-500 bottom-4 left-0 right-0 py-3 px-4  mx-4 opacity-0 group-hover:opacity-100">
                  <div className="block">
                    <h4 className="font-medium text-gray-900 mb-1">
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
              <div className="group w-full relative transition-all duration-500 ">
                <img
                  src="https://pagedone.io/asset/uploads/1696238917.png"
                  alt="Harsh image"
                  className=" w-full h-72 rounded-2xl object-cover"
                />
                <div className="absolute flex justify-between bg-white rounded-lg transition-all duration-500 bottom-4 left-0 right-0 py-3 px-4  mx-4 opacity-0 group-hover:opacity-100">
                  <div className="block">
                    <h4 className="font-medium text-gray-900 mb-1">
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
              <div className="group w-full relative transition-all duration-500 ">
                <img
                  src="https://pagedone.io/asset/uploads/1696238935.png"
                  alt="Alexa image"
                  className=" w-full h-72 rounded-2xl object-cover"
                />
                <div className="absolute flex justify-between bg-white rounded-lg transition-all duration-500 bottom-4 left-0 right-0 py-3 px-4  mx-4 opacity-0 group-hover:opacity-100">
                  <div className="block">
                    <h4 className="font-medium text-gray-900 mb-1">
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
              <div className="group w-full relative transition-all duration-500 ">
                <img
                  src="https://pagedone.io/asset/uploads/1696238954.png"
                  alt="Jim image"
                  className=" w-full h-72 rounded-2xl object-cover"
                />
                <div className="absolute flex justify-between bg-white rounded-lg transition-all duration-500 bottom-4 left-0 right-0 py-3 px-4  mx-4 opacity-0 group-hover:opacity-100">
                  <div className="block">
                    <h4 className="font-medium text-gray-900 mb-1">
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
  );
}
