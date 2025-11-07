export default function TailwindBlogCardWithTwoColumnsAndImage() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between flex-col lg:flex-row gap-8">
          <div className="block text-center lg:text-left">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-3">
              Latest news
            </h2>
            <p className="text-lg text-gray-500">
              Surround yourself with the community and resources to help bring
              your vision to life.
            </p>
          </div>
          <a
            href="#"
            className="text-base bg-indigo-600 py-3 px-8 rounded-full text-white w-52 flex items-center justify-center gap-2 hover:bg-indigo-700"
          >
            More News {/* SVG removed */}
          </a>
        </div>
        <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="group w-full lg:w-1/2 hover:scale-95 hover:opacity-80 transition-all duration-700 ease-in-out ">
            <div className="flex items-center mb-8">
              <img
                src="https://pagedone.io/asset/uploads/1711018048.png"
                alt="blogs tailwind section"
                className="rounded-3xl w-full object-cover"
              />
            </div>
            <div className="block transition-all duration-300 rounded-b-2xl ">
              <h4 className="text-3xl text-gray-900 font-semibold leading-9 mb-8">
                How technology is revolutionizing the travel experience
              </h4>
              <div className="flex items-center gap-14">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1704349572.png"
                    alt="Steven image"
                    className="rounded-full object-cover"
                  />
                  <h6 className="mb-0 text-xl text-gray-600">By Steven Nice</h6>
                </div>
                <div className="flex items-center gap-3">
                  {/* SVG removed */}
                  <h6 className="mb-0 text-xl text-gray-600">2 minutes ago</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="group w-full lg:w-1/2 hover:scale-95 hover:opacity-80 transition-all duration-700 ease-in-out ">
            <div className="flex items-center mb-8 ">
              <img
                src="https://pagedone.io/asset/uploads/1711018102.png"
                alt="blogs tailwind section"
                className="rounded-3xl w-full object-cover"
              />
            </div>
            <div className="block transition-all duration-300 rounded-b-2xl ">
              <h4 className="text-3xl text-gray-900 font-semibold leading-9 mb-8">
                From Payments to Investments: Unveiling the Future of Fintech
              </h4>
              <div className="flex items-center gap-14">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1704349572.png"
                    alt="Steven image"
                    className="rounded-full object-cover"
                  />
                  <h6 className="mb-0 text-xl text-gray-600">By Steven Nice</h6>
                </div>
                <div className="flex items-center gap-3">
                  {/* SVG removed */}
                  <h6 className="mb-0 text-xl text-gray-600">1 minutes ago</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
