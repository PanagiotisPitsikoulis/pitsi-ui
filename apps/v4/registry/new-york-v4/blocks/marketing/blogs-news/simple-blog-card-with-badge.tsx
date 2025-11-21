export default function SimpleBlogCardWithBadge() {
  return (
    <div className="py-24 lg:pb-36">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 flex w-full flex-col items-center justify-center gap-4 sm:w-96 lg:w-full lg:flex-row lg:justify-between">
          <div className="block">
            <h2 className="font-manrope mb-3 text-center text-4xl leading-snug font-bold text-gray-900 max-sm:text-center lg:text-start">
              Our Extraordinary Blog
            </h2>
            <p className="max-w-2xl pr-9 text-center text-lg leading-8 font-normal text-gray-500 max-sm:text-center lg:text-start">
              This blog explores the importance of surrounding yourself with
              like-minded individuals, mentors, and networks.
            </p>
          </div>
          <button className="rounded-full bg-indigo-600 px-10 py-2.5 text-base font-semibold whitespace-nowrap text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-all duration-300 hover:bg-indigo-700">
            View All
          </button>
        </div>
        <div className="mx-auto grid w-full grid-cols-1 gap-6 sm:w-96 lg:w-full lg:grid-cols-3 xl:gap-8">
          <div>
            <div className="rounded-t-2xl border border-gray-300 bg-gray-50 p-5 pb-10">
              <span className="text-base font-medium text-indigo-600">
                Jan 01, 2024
              </span>
              <h5 className="mt-3 mb-3.5 text-xl leading-8 font-medium text-gray-900">
                How feedback can increase team productivity
              </h5>
              <p className="text-base font-normal text-gray-500">
                Discover how regular, constructive feedback can enhance
                communication.
              </p>
            </div>
            <img
              src="https://pagedone.io/asset/uploads/1722664437.png"
              alt="blog cover image"
              className="w-full rounded-b-2xl object-cover"
            />
          </div>
          <div>
            <div className="rounded-t-2xl border border-gray-300 bg-gray-50 p-5 pb-10">
              <span className="text-base font-medium text-indigo-600">
                Feb 01, 2024
              </span>
              <h5 className="mt-3 mb-3.5 text-xl leading-8 font-medium text-gray-900">
                exploring the latest electronic gadgets and innovations
              </h5>
              <p className="text-base font-normal text-gray-500">
                This blog delves into essential tech essentials that are shaping
                our digital.
              </p>
            </div>
            <img
              src="https://pagedone.io/asset/uploads/1722664450.png"
              alt="blog cover image"
              className="w-full rounded-b-2xl object-cover"
            />
          </div>
          <div>
            <div className="rounded-t-2xl border border-gray-300 bg-gray-50 p-5 pb-10">
              <span className="text-base font-medium text-indigo-600">
                Mar 01, 2024
              </span>
              <h5 className="mt-3 mb-3.5 text-xl leading-8 font-medium text-gray-900">
                Unlocking financial inclusion: how fintech is bridging the gap
              </h5>
              <p className="text-base font-normal text-gray-500">
                the transformative role of financial technology (fintech) in
                promoting financial.
              </p>
            </div>
            <img
              src="https://pagedone.io/asset/uploads/1722664466.png"
              alt="blog cover image"
              className="w-full rounded-b-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
