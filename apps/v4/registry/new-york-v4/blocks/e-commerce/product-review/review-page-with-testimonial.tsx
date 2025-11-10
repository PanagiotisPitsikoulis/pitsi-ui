export default function ReviewPageWithTestimonial() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12 w-full max-lg:mx-auto max-lg:max-w-sm lg:col-span-4">
            <div className="w-full border-gray-200 lg:border-r lg:pr-11">
              <p className="font-manrope mb-4 text-center text-2xl leading-9 font-bold text-black">
                AVERAGE RATING
              </p>
              <div className="flex items-center justify-center gap-3 border-b border-gray-100 pb-8"></div>
              <div className="star-box pt-8 lg:px-10">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4 lg:gap-2"></div>
                  <p className="text-lg leading-8 font-medium text-black">
                    (4.5k)
                  </p>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4 lg:gap-2"></div>
                  <p className="text-lg leading-8 font-medium text-black">
                    (789)
                  </p>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4 lg:gap-2"></div>
                  <p className="text-lg leading-8 font-medium text-black">
                    (98)
                  </p>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4 lg:gap-2"></div>
                  <p className="text-lg leading-8 font-medium text-black">
                    (21)
                  </p>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4 lg:gap-2"></div>
                  <p className="text-lg leading-8 font-medium text-black">
                    (9)
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <button className="h-[52px] w-[171px] rounded-[100px] bg-indigo-600 px-5 py-[14px] text-center text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                    Write a review
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex w-full items-center max-lg:mx-auto max-lg:mt-8 max-lg:max-w-2xl lg:col-span-8 lg:pl-11">
            <div>
              <div className="mb-7 flex items-center gap-2 max-lg:justify-center"></div>
              <h4 className="font-manrope mb-7 text-2xl leading-9 font-semibold text-black max-lg:text-center">
                Outstanding Experience!!!
              </h4>
              <div className="mb-7 flex items-center max-lg:justify-center">
                <img
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="John image"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <p className="mx-3 text-lg font-semibold text-black">
                  John Watson
                </p>
                <span className="flex items-center gap-1.5 rounded-full bg-indigo-50 py-1.5 pr-2 pl-1.5 text-sm font-medium text-indigo-600">
                  Verified
                </span>
              </div>
              <p className="mb-11 text-lg font-normal text-gray-500 max-lg:text-center">
                One of the standout features of Pagedone is its intuitive and
                user-friendly interface. Navigating through the system feels
                natural, and the layout makes it easy to locate and utilize
                various design elements. This is particularly beneficial for
                designers looking to streamline their workflow.
              </p>
              <div className="flex items-center gap-7 max-lg:justify-center">
                <button className="group rounded-full border border-gray-200 p-2 shadow-sm shadow-transparent transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600 hover:shadow-indigo-300 sm:p-4"></button>
                <button className="group rounded-full border border-gray-200 p-2 shadow-sm shadow-transparent transition-all duration-500 hover:border-indigo-600 hover:bg-indigo-600 hover:shadow-indigo-300 sm:p-4"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
