export default function FourColumnGridLayoutWithSocialMediaAndCta() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex justify-between items-center flex-col lg:flex-row gap-8">
          <div className="block">
            <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-2 lg:text-left">
              Our brilliant team
            </h2>
            <p className="text-lg text-gray-500 text-center xl:text-left">
              These people work on making our product best.
            </p>
          </div>
          <a
            href="javascript:;"
            className="py-3 px-8 bg-indigo-600 shadow-sm rounded-xl w-48 text-base text-white font-semibold transition-all block text-center duration-500 hover:bg-indigo-700 mx-auto xl:mx-0"
          >
            Join our team
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-sm mx-auto sm:max-w-xl md:max-w-xl lg:max-w-full">
          <div className="group w-full relative transition-all duration-500 ">
            <img
              src="https://pagedone.io/asset/uploads/1696238665.png"
              alt="Sasha image"
              className=" w-full h-72 rounded-2xl object-cover mb-6 border-t-2 border-b-2 border-transparent transition-all duration-500 group-hover:border-indigo-600"
            />
            <div className="block relative before:content[''] before:absolute before:bottom-0 before:w-10 before:h-[1px] before:bg-gray-300 mb-4 pb-4">
              <h4 className="text-lg text-gray-900 font-medium mb-1 ">
                Sasha Grey
              </h4>
              <p className="text-sm text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                Design Lead
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
            </div>
          </div>
          <div className="group w-full relative transition-all duration-500 ">
            <img
              src="https://pagedone.io/asset/uploads/1696238852.png"
              alt="Nikita image"
              className=" w-full h-72 rounded-2xl object-cover mb-6 border-t-2 border-b-2 border-transparent transition-all duration-500 group-hover:border-indigo-600"
            />
            <div className="block relative before:content[''] before:absolute before:bottom-0 before:w-10 before:h-[1px] before:bg-gray-300 mb-4 pb-4">
              <h4 className="text-lg text-gray-900 font-medium mb-1 ">
                Nikita Xing
              </h4>
              <p className="text-sm text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                Product Manager
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
            </div>
          </div>
          <div className="group w-full relative transition-all duration-500 ">
            <img
              src="https://pagedone.io/asset/uploads/1696238954.png"
              alt="Anuj image"
              className=" w-full h-72 rounded-2xl object-cover mb-6 border-t-2 border-b-2 border-transparent transition-all duration-500 group-hover:border-indigo-600"
            />
            <div className="block relative before:content[''] before:absolute before:bottom-0 before:w-10 before:h-[1px] before:bg-gray-300 mb-4 pb-4">
              <h4 className="text-lg text-gray-900 font-medium mb-1 ">
                Anuj mishra
              </h4>
              <p className="text-sm text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                Creative Leader
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
            </div>
          </div>
          <div className="group w-full relative transition-all duration-500 ">
            <img
              src="https://pagedone.io/asset/uploads/1696238771.png"
              alt="Alexa image"
              className=" w-full h-72 rounded-2xl object-cover mb-6 border-t-2 border-b-2 border-transparent transition-all duration-500 group-hover:border-indigo-600"
            />
            <div className="block relative before:content[''] before:absolute before:bottom-0 before:w-10 before:h-[1px] before:bg-gray-300 mb-4 pb-4">
              <h4 className="text-lg text-gray-900 font-medium mb-1 ">
                Alexa Monic
              </h4>
              <p className="text-sm text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                Marketing Head
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
