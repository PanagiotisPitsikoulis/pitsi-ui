export default function TailwindBlogPostWithFeatureList() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope w-full pb-12 text-center text-5xl leading-loose font-bold text-black lg:text-left">
          Our Blog
        </h2>
        <div className="relative mb-56 grid grid-cols-12 gap-x-0 gap-y-56 sm:mb-44 sm:gap-y-40 md:mb-40 md:gap-y-40 lg:mb-44 lg:gap-x-8 lg:gap-y-0">
          <div className="group relative col-span-12 inline-flex h-full flex-col items-end justify-start lg:col-span-6 xl:col-span-5">
            <div className="relative inline-flex h-full w-full items-start justify-start gap-2.5 overflow-hidden rounded-2xl">
              <img
                className="relative h-full w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-125"
                src="https://pagedone.io/asset/uploads/1711017803.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="absolute -bottom-44 mx-8 inline-flex flex-col items-start justify-start gap-3 rounded-xl bg-white p-8 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] transition-all duration-700 ease-in-out sm:-bottom-32 md:-bottom-28 lg:-bottom-28 lg:mx-4 lg:p-4 xl:mx-8 xl:p-8">
              <div className="flex flex-col items-start justify-start gap-1">
                <h4 className="text-sm leading-snug font-normal text-gray-800">
                  Technology
                </h4>
                <h5 className="text-sm leading-snug font-normal text-gray-500">
                  4 Oct 2023
                </h5>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h3 className="text-xl leading-loose font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  Innovations Unleashed: Exploring the Latest in Technology
                </h3>
                <p className="text-base leading-relaxed font-normal text-gray-500">
                  Discover the newest in technology.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative col-span-12 inline-flex h-full w-full flex-col items-end justify-start lg:col-span-6 xl:col-span-7">
            <div className="relative inline-flex h-full w-full items-start justify-start gap-2.5 overflow-hidden rounded-2xl">
              <img
                className="h-full w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-125"
                src="https://pagedone.io/asset/uploads/1711017823.png"
                alt="Mia Thompson image"
              />
            </div>
            <div className="absolute -bottom-44 mx-8 inline-flex flex-col items-start justify-start gap-3 rounded-xl bg-white p-8 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] transition-all duration-700 ease-in-out sm:-bottom-32 md:-bottom-28 lg:-bottom-28 lg:mx-4 lg:p-4 xl:mx-8 xl:p-8">
              <div className="flex flex-col items-start justify-start gap-1">
                <h4 className="text-sm leading-snug font-normal text-gray-800">
                  Economy
                </h4>
                <h5 className="text-sm leading-snug font-normal text-gray-500">
                  4 Oct 2023
                </h5>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h3 className="text-xl leading-loose font-medium break-all text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  Designing Tomorrow: The Economic Impact of Architects of
                  Abundance
                </h3>
                <p className="text-base leading-relaxed font-normal break-all text-gray-500">
                  Architects crafting economic for flourishing future.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <h2 className="font-manrope w-full pb-8 text-center text-3xl leading-tight font-semibold text-black xl:pb-5 xl:text-start">
            Recent
          </h2>
          <div className="mb-16 flex w-full flex-wrap justify-center lg:flex-row lg:flex-nowrap lg:gap-8 xl:justify-start">
            <div className="group relative col-span-12 mb-32 inline-flex h-full w-full flex-col items-end justify-start md:mb-24 lg:col-span-6 lg:mb-0 xl:col-span-7">
              <div className="relative inline-flex h-full w-full items-start justify-start gap-2.5 overflow-hidden rounded-2xl">
                <img
                  className="h-full w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-125"
                  src="https://pagedone.io/asset/uploads/1711017847.png"
                  alt="Mia Thompson image"
                />
              </div>
              <div className="absolute -bottom-24 mx-8 inline-flex flex-col items-start justify-start gap-3 rounded-xl bg-white p-8 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] transition-all duration-700 ease-in-out md:-bottom-16 lg:-bottom-20 lg:mx-4 lg:p-4 xl:-bottom-28 xl:mx-8 xl:p-8">
                <div className="inline-flex items-center justify-start gap-2.5">
                  <h4 className="border-r border-gray-200 pr-2.5 text-sm leading-snug font-normal text-gray-800">
                    Sports
                  </h4>
                  <h5 className="text-sm leading-snug font-normal text-gray-500">
                    31 Dec 2023
                  </h5>
                </div>
                <h3 className="text-xl leading-loose font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  Tech and Tactics: Innovations in Sports
                </h3>
              </div>
            </div>
            <div className="group relative col-span-12 mb-32 inline-flex h-full w-full flex-col items-end justify-start md:mb-24 lg:col-span-6 lg:mb-0 xl:col-span-7">
              <div className="relative inline-flex h-full w-full items-start justify-start gap-2.5 overflow-hidden rounded-2xl">
                <img
                  className="h-full w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-125"
                  src="https://pagedone.io/asset/uploads/1711017858.png"
                  alt="Mia Thompson image"
                />
              </div>
              <div className="absolute -bottom-24 mx-8 inline-flex flex-col items-start justify-start gap-3 rounded-xl bg-white p-8 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] transition-all duration-700 ease-in-out md:-bottom-16 lg:-bottom-20 lg:mx-4 lg:p-4 xl:-bottom-28 xl:mx-8 xl:p-8">
                <div className="inline-flex items-center justify-start gap-2.5">
                  <h4 className="border-r border-gray-200 pr-2.5 text-sm leading-snug font-normal text-gray-800">
                    Travel
                  </h4>
                  <h5 className="text-sm leading-snug font-normal text-gray-500">
                    2 Jan 2024
                  </h5>
                </div>
                <h3 className="text-xl leading-loose font-medium break-all text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  Roaming Horizons: Capturing Travel Adventures
                </h3>
              </div>
            </div>
            <div className="group relative col-span-12 mb-32 inline-flex h-full w-full flex-col items-end justify-start md:mb-24 lg:col-span-6 lg:mb-0 xl:col-span-7">
              <div className="relative inline-flex h-full w-full items-start justify-start gap-2.5 overflow-hidden rounded-2xl">
                <img
                  className="h-full w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-125"
                  src="https://pagedone.io/asset/uploads/1711017869.png"
                  alt="Mia Thompson image"
                />
              </div>
              <div className="absolute -bottom-24 mx-8 inline-flex flex-col items-start justify-start gap-3 rounded-xl bg-white p-8 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] transition-all duration-700 ease-in-out md:-bottom-16 lg:-bottom-20 lg:mx-4 lg:p-4 xl:-bottom-28 xl:mx-8 xl:p-8">
                <div className="inline-flex items-center justify-start gap-2.5">
                  <h4 className="border-r border-gray-200 pr-2.5 text-sm leading-snug font-normal text-gray-800">
                    Life Style
                  </h4>
                  <h5 className="text-sm leading-snug font-normal text-gray-500">
                    2 Jan 2024
                  </h5>
                </div>
                <h3 className="text-xl leading-loose font-medium break-all text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  Wellness Wonders: A Healthy Lifestyle Guide
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
