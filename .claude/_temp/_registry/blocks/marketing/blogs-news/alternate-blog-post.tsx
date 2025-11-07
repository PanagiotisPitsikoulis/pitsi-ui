export default function AlternateBlogPost() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex justify-between flex-col lg:flex-row gap-8">
          <div className="block text-center lg:text-left">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-3">
              Our recent blogs
            </h2>
            <p className="text-lg text-gray-500">
              Surround yourself with the community and resources to help bring
              your vision to life.
            </p>
          </div>
          <a
            href="javascript:;"
            className="text-lg font-semibold cursor-pointer transition-all duration-500 border border-gray-300 py-4 px-8 rounded-full text-gray-900 w-52 h-16 flex justify-center hover:bg-gray-50 mx-auto lg:mx-0"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-12 max-md:max-w-lg max-xl:max-w-3xl max-xl:mx-auto">
          <div className="group col-span-12 xl:col-span-4 flex flex-col md:flex-row xl:flex-col md:gap-8 xl:gap-0 max-md:mb-8">
            <div className="relative w-full md:w-96 xl:w-full h-64 mb-8">
              <img
                src="https://pagedone.io/asset/uploads/1696246504.png"
                alt="blogs tailwind section"
                className="rounded-2xl object-cover h-full w-full"
              />
            </div>
            <div className="block flex-1">
              <h4 className="text-xl text-gray-900 font-medium leading-8 mb-2 transition-all duration-300 group-hover:text-indigo-600">
                Clever ways to invest in product to organize your..
              </h4>
              <p className="text-gray-500 mb-4">
                Discover smart investment strategies to streamline and organize
                your portfolio..
              </p>
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1704349572.png"
                    alt="Steven image"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <h6 className="text-gray-900">Steven Nice</h6>
                </div>
                <span className="text-gray-500">Sept 26, 2023</span>
              </div>
              <a
                href="javascript:;"
                className="py-3 px-6 rounded-full cursor-pointer bg-indigo-50 block w-fit md:mx-0 mx-auto text-sm text-indigo-600 font-semibold transition-all duration-300  group-hover:bg-indigo-600 group-hover:text-white"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-8 grid gap-8 xl:pl-8">
            <div className="group flex flex-col w-auto gap-8 md:flex-row">
              <div className="relative  w-full md:w-96  h-64 ">
                <img
                  src="https://pagedone.io/asset/uploads/1696246523.png"
                  alt="blogs tailwind section"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div className="block flex-1">
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-2 transition-all duration-300 group-hover:text-indigo-600">
                  How to grow your profit through systematic investment..
                </h4>
                <p className="text-gray-500 mb-4">
                  Unlock the power of systematic investment with us and watch
                  your profits soar. Our..
                </p>
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1704349572.png"
                      alt="Alexa image"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <h6 className="text-gray-900">Alexa Kimberly</h6>
                  </div>
                  <span className="text-gray-500">Oct 26, 2023</span>
                </div>
                <a
                  href="javascript:;"
                  className="py-3 px-6 rounded-full cursor-pointer bg-indigo-50 block w-fit md:mx-0 mx-auto text-sm text-indigo-600 font-semibold transition-all duration-300  group-hover:bg-indigo-600 group-hover:text-white"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="group flex flex-col w-auto gap-8 md:flex-row">
              <div className="relative  w-full md:w-96 h-64 ">
                <img
                  src="https://pagedone.io/asset/uploads/1696246542.png"
                  alt="blogs tailwind section"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div className="block flex-1">
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-2 transition-all duration-300 group-hover:text-indigo-600">
                  How to analyze every holdings of your portfolio
                </h4>
                <p className="text-gray-500 mb-4">
                  Our comprehensive guide will equip you with the tools and
                  insights needed to..
                </p>
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1704349572.png"
                      alt="John image"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <h6 className="text-gray-900">John Doe</h6>
                  </div>
                  <span className="text-gray-500">Dec 26, 2023</span>
                </div>
                <a
                  href="javascript:;"
                  className="py-3 px-6 rounded-full cursor-pointer bg-indigo-50 block w-fit md:mx-0 mx-auto text-sm text-indigo-600 font-semibold transition-all duration-300  group-hover:bg-indigo-600 group-hover:text-white"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
