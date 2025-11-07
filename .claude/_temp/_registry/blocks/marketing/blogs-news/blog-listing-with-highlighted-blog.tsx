export default function BlogListingWithHighlightedBlog() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Our Prestigious Blog
            </h2>
            <p className="text-center text-gray-500 text-lg font-normal leading-relaxed">
              Discover in-depth insights and expert analysis on our prestigious
              blog.
            </p>
          </div>
          <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center items-start gap-5 inline-flex">
              <div className="p-3 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-start items-center gap-5 flex sm:flex-row flex-col">
                <img
                  className="rounded-lg sm:w-auto w-full h-auto object-cover"
                  src="https://pagedone.io/asset/uploads/1722234219.png"
                  alt="blog and news image"
                />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <h6 className="text-gray-600 text-base font-medium leading-relaxed">
                    8 min
                  </h6>
                  <h4 className="text-gray-900 text-xl font-medium leading-8">
                    The Future of Workspaces: Trends in Office Design and Remote
                    Work Integration
                  </h4>
                </div>
              </div>
              <div className="p-3 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-start items-center gap-5 flex sm:flex-row flex-col">
                <img
                  className="rounded-lg sm:w-auto w-full h-auto object-cover"
                  src="https://pagedone.io/asset/uploads/1722234229.png"
                  alt="blog and news image"
                />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <h6 className="text-gray-600 text-base font-medium leading-relaxed">
                    5 min
                  </h6>
                  <h4 className="text-gray-900 text-xl font-medium leading-8">
                    The Role of Virtual Events in the Modern World: Challenges
                    and Best Practices
                  </h4>
                </div>
              </div>
              <div className="p-3 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-start items-center gap-5 flex sm:flex-row flex-col">
                <img
                  className="rounded-lg sm:w-auto w-full h-auto object-cover"
                  src="https://pagedone.io/asset/uploads/1722234238.png"
                  alt="blog and news image"
                />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <h6 className="text-gray-600 text-base font-medium leading-relaxed">
                    12 min
                  </h6>
                  <h4 className="text-gray-900 text-xl font-medium leading-8">
                    The Benefits of Incorporating Artificial Intelligence in
                    Healthcare Diagnostics
                  </h4>
                </div>
              </div>
              <div className="p-3 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-start items-center gap-5 flex sm:flex-row flex-col">
                <img
                  className="rounded-lg sm:w-auto w-full h-auto object-cover"
                  src="https://pagedone.io/asset/uploads/1722234248.png"
                  alt="blog and news image"
                />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <h6 className="text-gray-600 text-base font-medium leading-relaxed">
                    15 min
                  </h6>
                  <h4 className="text-gray-900 text-xl font-medium leading-8">
                    The Future of Renewable Energy Storage: Innovations and
                    Challenges in Solutions
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full h-full p-5 rounded-2xl border border-gray-200 flex-col justify-start items-center gap-5 inline-flex">
              <img
                className="rounded-xl w-full lg:h-full h-auto object-cover"
                src="https://pagedone.io/asset/uploads/1722234344.png"
                alt="blog and news image"
              />
              <div className="w-full flex-col justify-start items-start gap-4 flex">
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <h6 className="text-gray-600 text-base font-medium leading-relaxed">
                    20 min
                  </h6>
                  <div className="flex-col justify-start items-start gap-1.5 flex">
                    <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      The Benefits of Minimalism: How Simplifying Your Life Can
                      Boost Happiness
                    </h3>
                    <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                      Looks at the principles of minimalism and how decluttering
                      and simplifying can lead to greater personal satisfaction
                      and well-being.
                    </h5>
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="w-8 h-8 bg-gray-200 rounded-full justify-start items-start gap-2.5 flex">
                    <img
                      className="w-8 h-8 rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1722234394.png"
                      alt="blog and news avtar image"
                    />
                  </div>
                  <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                    Sanvi Brown
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
