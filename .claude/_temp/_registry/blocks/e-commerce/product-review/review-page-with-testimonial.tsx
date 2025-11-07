export default function ReviewPageWithTestimonial() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4 w-full max-lg:max-w-sm max-lg:mx-auto">
            <div className="w-full lg:pr-11 lg:border-r border-gray-200">
              <p className="font-manrope font-bold text-2xl leading-9 text-black text-center mb-4 ">
                AVERAGE RATING
              </p>
              <div className="flex items-center justify-center gap-3 pb-8 border-b border-gray-100"></div>
              <div className="star-box lg:px-10 pt-8">
                <div className="flex items-center justify-between mb-2 gap-3">
                  <div className="flex items-center gap-4 lg:gap-2"></div>
                  <p className="font-medium text-lg leading-8 text-black ">
                    (4.5k)
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2 gap-3">
                  <div className="flex items-center gap-4 lg:gap-2"></div>
                  <p className="font-medium text-lg leading-8 text-black ">
                    (789)
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2 gap-3">
                  <div className="flex items-center gap-4 lg:gap-2"></div>
                  <p className="font-medium text-lg leading-8 text-black ">
                    (98)
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2 gap-3">
                  <div className="flex items-center gap-4 lg:gap-2"></div>
                  <p className="font-medium text-lg leading-8 text-black ">
                    (21)
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2 gap-3">
                  <div className="flex items-center gap-4 lg:gap-2"></div>
                  <p className="font-medium text-lg leading-8 text-black ">
                    (9)
                  </p>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <button className="w-[171px] h-[52px] py-[14px] px-5 font-semibold text-base text-white text-center bg-indigo-600 rounded-[100px] shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                    Write a review
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:pl-11 w-full max-lg:mt-8 max-lg:max-w-2xl max-lg:mx-auto flex items-center">
            <div>
              <div className="flex items-center gap-2 mb-7 max-lg:justify-center"></div>
              <h4 className="font-manrope font-semibold text-2xl leading-9 text-black mb-7 max-lg:text-center">
                Outstanding Experience!!!
              </h4>
              <div className="flex items-center mb-7 max-lg:justify-center">
                <img
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="John image"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="font-semibold text-lg text-black mx-3">
                  John Watson
                </p>
                <span className="py-1.5 pl-1.5 pr-2 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm flex items-center gap-1.5">
                  Verified
                </span>
              </div>
              <p className="font-normal text-lg text-gray-500 mb-11 max-lg:text-center">
                One of the standout features of Pagedone is its intuitive and
                user-friendly interface. Navigating through the system feels
                natural, and the layout makes it easy to locate and utilize
                various design elements. This is particularly beneficial for
                designers looking to streamline their workflow.
              </p>
              <div className="flex items-center gap-7 max-lg:justify-center">
                <button className="p-2 sm:p-4 rounded-full border group border-gray-200 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:shadow-indigo-300 hover:border-indigo-600"></button>
                <button className="p-2 sm:p-4 rounded-full border group border-gray-200 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:shadow-indigo-300 hover:border-indigo-600"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
