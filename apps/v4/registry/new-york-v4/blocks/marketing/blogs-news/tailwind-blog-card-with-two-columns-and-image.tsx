export default function TailwindBlogCardWithTwoColumnsAndImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="block text-center lg:text-left">
            <h2 className="font-manrope mb-3 text-4xl font-bold text-gray-900">
              Latest news
            </h2>
            <p className="text-lg text-gray-500">
              Surround yourself with the community and resources to help bring
              your vision to life.
            </p>
          </div>
          <a
            href="#"
            className="flex w-52 items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-3 text-base text-white hover:bg-indigo-700"
          >
            More News {/* SVG removed */}
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
          <div className="group w-full transition-all duration-700 ease-in-out hover:scale-95 hover:opacity-80 lg:w-1/2">
            <div className="mb-8 flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1711018048.png"
                alt="blogs tailwind section"
                className="w-full rounded-3xl object-cover"
              />
            </div>
            <div className="block rounded-b-2xl transition-all duration-300">
              <h4 className="mb-8 text-3xl leading-9 font-semibold text-gray-900">
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
          <div className="group w-full transition-all duration-700 ease-in-out hover:scale-95 hover:opacity-80 lg:w-1/2">
            <div className="mb-8 flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1711018102.png"
                alt="blogs tailwind section"
                className="w-full rounded-3xl object-cover"
              />
            </div>
            <div className="block rounded-b-2xl transition-all duration-300">
              <h4 className="mb-8 text-3xl leading-9 font-semibold text-gray-900">
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
  )
}
