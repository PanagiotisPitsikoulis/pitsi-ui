export default function TeamCardsWithBackground() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-4">
            Meet the team
          </h2>
          <p className="text-lg text-gray-500 text-center">
            These people work on making our product best.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-lg max-md:mx-auto">
          <div className="block group relative">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696238852.png"
                alt="Nikita image"
                className="w-full h-[30rem] rounded-2xl  transition-all duration-500 object-cover "
              />
            </div>
            <div className="absolute bottom-0 bg-gray-100 rounded-b-2xl w-full  z-10 p-7 flex justify-between transition-all duration-500 group-hover:bg-indigo-600">
              <div className="block">
                <h4 className="text-xl font-medium text-gray-900 mb-1 capitalize transition-all duration-500 group-hover:text-white">
                  Nikita Xing{" "}
                </h4>
                <span className="text-lg text-gray-600  block transition-all duration-500 group-hover:text-white">
                  HR manager
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
              </div>
            </div>
          </div>
          <div className="block group relative">
            <div className="relative">
              <img
                src="	https://pagedone.io/asset/uploads/1696238888.png"
                alt="Harsh image"
                className="w-full h-[30rem] rounded-2xl  transition-all duration-500 object-cover "
              />
            </div>
            <div className="absolute bottom-0 bg-gray-100  rounded-b-2xl w-full  z-10 p-7 flex justify-between transition-all duration-500 group-hover:bg-indigo-600">
              <div className="block">
                <h4 className="text-xl font-medium text-gray-900 mb-1 capitalize transition-all duration-500 group-hover:text-white">
                  Harsh Patel{" "}
                </h4>
                <span className="text-lg text-gray-600  block transition-all duration-500 group-hover:text-white">
                  Design Head
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
              </div>
            </div>
          </div>
          <div className="block group relative md:col-span-2 lg:col-span-1 md:w-1/2 md:mx-auto lg:w-full">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696238903.png"
                alt="Sasha image"
                className="w-full h-[30rem] rounded-2xl  transition-all duration-500 object-cover"
              />
            </div>
            <div className="absolute bottom-0 bg-gray-100 rounded-b-2xl w-full  z-10 p-7 flex justify-between transition-all duration-500 group-hover:bg-indigo-600">
              <div className="block">
                <h4 className="text-xl font-medium text-gray-900 mb-1 capitalize transition-all duration-500 group-hover:text-white">
                  Sasha Grey{" "}
                </h4>
                <span className="text-lg text-gray-600  block transition-all duration-500 group-hover:text-white">
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
  );
}
