export default function BlogListingWithHighlightedBlog() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Our Prestigious Blog
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500">
              Discover in-depth insights and expert analysis on our prestigious
              blog.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-start justify-center gap-5">
              <div className="flex flex-col items-center justify-start gap-5 rounded-xl border border-gray-200 p-3 transition-all duration-700 ease-in-out hover:border-indigo-600 sm:flex-row">
                <img
                  className="h-auto w-full rounded-lg object-cover sm:w-auto"
                  src="https://pagedone.io/asset/uploads/1722234219.png"
                  alt="blog and news image"
                />
                <div className="inline-flex flex-col items-start justify-start gap-1">
                  <h6 className="text-base leading-relaxed font-medium text-gray-600">
                    8 min
                  </h6>
                  <h4 className="text-xl leading-8 font-medium text-gray-900">
                    The Future of Workspaces: Trends in Office Design and Remote
                    Work Integration
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-5 rounded-xl border border-gray-200 p-3 transition-all duration-700 ease-in-out hover:border-indigo-600 sm:flex-row">
                <img
                  className="h-auto w-full rounded-lg object-cover sm:w-auto"
                  src="https://pagedone.io/asset/uploads/1722234229.png"
                  alt="blog and news image"
                />
                <div className="inline-flex flex-col items-start justify-start gap-1">
                  <h6 className="text-base leading-relaxed font-medium text-gray-600">
                    5 min
                  </h6>
                  <h4 className="text-xl leading-8 font-medium text-gray-900">
                    The Role of Virtual Events in the Modern World: Challenges
                    and Best Practices
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-5 rounded-xl border border-gray-200 p-3 transition-all duration-700 ease-in-out hover:border-indigo-600 sm:flex-row">
                <img
                  className="h-auto w-full rounded-lg object-cover sm:w-auto"
                  src="https://pagedone.io/asset/uploads/1722234238.png"
                  alt="blog and news image"
                />
                <div className="inline-flex flex-col items-start justify-start gap-1">
                  <h6 className="text-base leading-relaxed font-medium text-gray-600">
                    12 min
                  </h6>
                  <h4 className="text-xl leading-8 font-medium text-gray-900">
                    The Benefits of Incorporating Artificial Intelligence in
                    Healthcare Diagnostics
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-5 rounded-xl border border-gray-200 p-3 transition-all duration-700 ease-in-out hover:border-indigo-600 sm:flex-row">
                <img
                  className="h-auto w-full rounded-lg object-cover sm:w-auto"
                  src="https://pagedone.io/asset/uploads/1722234248.png"
                  alt="blog and news image"
                />
                <div className="inline-flex flex-col items-start justify-start gap-1">
                  <h6 className="text-base leading-relaxed font-medium text-gray-600">
                    15 min
                  </h6>
                  <h4 className="text-xl leading-8 font-medium text-gray-900">
                    The Future of Renewable Energy Storage: Innovations and
                    Challenges in Solutions
                  </h4>
                </div>
              </div>
            </div>
            <div className="inline-flex h-full w-full flex-col items-center justify-start gap-5 rounded-2xl border border-gray-200 p-5">
              <img
                className="h-auto w-full rounded-xl object-cover lg:h-full"
                src="https://pagedone.io/asset/uploads/1722234344.png"
                alt="blog and news image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-4">
                <div className="flex w-full flex-col items-start justify-start gap-3">
                  <h6 className="text-base leading-relaxed font-medium text-gray-600">
                    20 min
                  </h6>
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                      The Benefits of Minimalism: How Simplifying Your Life Can
                      Boost Happiness
                    </h3>
                    <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                      Looks at the principles of minimalism and how decluttering
                      and simplifying can lead to greater personal satisfaction
                      and well-being.
                    </h5>
                  </div>
                </div>
                <div className="inline-flex items-center justify-start gap-3">
                  <div className="flex h-8 w-8 items-start justify-start gap-2.5 rounded-full bg-gray-200">
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1722234394.png"
                      alt="blog and news avtar image"
                    />
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-gray-900">
                    Sanvi Brown
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
