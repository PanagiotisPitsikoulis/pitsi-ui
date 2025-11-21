export default function AlternateBlogPost() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row">
          <div className="block text-center lg:text-left">
            <h2 className="font-manrope mb-3 text-4xl font-bold text-gray-900">
              Our recent blogs
            </h2>
            <p className="text-lg text-gray-500">
              Surround yourself with the community and resources to help bring
              your vision to life.
            </p>
          </div>
          <a
            href="javascript:;"
            className="mx-auto flex h-16 w-52 cursor-pointer justify-center rounded-full border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50 lg:mx-0"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-12 max-xl:mx-auto max-xl:max-w-3xl max-md:max-w-lg">
          <div className="group col-span-12 flex flex-col max-md:mb-8 md:flex-row md:gap-8 xl:col-span-4 xl:flex-col xl:gap-0">
            <div className="relative mb-8 h-64 w-full md:w-96 xl:w-full">
              <img
                src="https://pagedone.io/asset/uploads/1696246504.png"
                alt="blogs tailwind section"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="block flex-1">
              <h4 className="mb-2 text-xl leading-8 font-medium text-gray-900 transition-all duration-300 group-hover:text-indigo-600">
                Clever ways to invest in product to organize your..
              </h4>
              <p className="mb-4 text-gray-500">
                Discover smart investment strategies to streamline and organize
                your portfolio..
              </p>
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1704349572.png"
                    alt="Steven image"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <h6 className="text-gray-900">Steven Nice</h6>
                </div>
                <span className="text-gray-500">Sept 26, 2023</span>
              </div>
              <a
                href="javascript:;"
                className="mx-auto block w-fit cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white md:mx-0"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="col-span-12 grid gap-8 xl:col-span-8 xl:pl-8">
            <div className="group flex w-auto flex-col gap-8 md:flex-row">
              <div className="relative h-64 w-full md:w-96">
                <img
                  src="https://pagedone.io/asset/uploads/1696246523.png"
                  alt="blogs tailwind section"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
              <div className="block flex-1">
                <h4 className="mb-2 text-xl leading-8 font-medium text-gray-900 transition-all duration-300 group-hover:text-indigo-600">
                  How to grow your profit through systematic investment..
                </h4>
                <p className="mb-4 text-gray-500">
                  Unlock the power of systematic investment with us and watch
                  your profits soar. Our..
                </p>
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1704349572.png"
                      alt="Alexa image"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <h6 className="text-gray-900">Alexa Kimberly</h6>
                  </div>
                  <span className="text-gray-500">Oct 26, 2023</span>
                </div>
                <a
                  href="javascript:;"
                  className="mx-auto block w-fit cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white md:mx-0"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="group flex w-auto flex-col gap-8 md:flex-row">
              <div className="relative h-64 w-full md:w-96">
                <img
                  src="https://pagedone.io/asset/uploads/1696246542.png"
                  alt="blogs tailwind section"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
              <div className="block flex-1">
                <h4 className="mb-2 text-xl leading-8 font-medium text-gray-900 transition-all duration-300 group-hover:text-indigo-600">
                  How to analyze every holdings of your portfolio
                </h4>
                <p className="mb-4 text-gray-500">
                  Our comprehensive guide will equip you with the tools and
                  insights needed to..
                </p>
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1704349572.png"
                      alt="John image"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <h6 className="text-gray-900">John Doe</h6>
                  </div>
                  <span className="text-gray-500">Dec 26, 2023</span>
                </div>
                <a
                  href="javascript:;"
                  className="mx-auto block w-fit cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white md:mx-0"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
