export default function ReviewPageWithSummaryChart() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <div className="w-full">
          <h2 className="font-manrope font-bold text-4xl text-black mb-8 text-center">
            Our customer reviews
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
            <div className="box flex flex-col gap-y-4 w-full ">
              <div className="flex items-center w-full">
                <p className="font-medium text-lg text-black mr-0.5">5</p>

                <p className="h-2 w-full sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                  <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex" />
                </p>
                <p className="font-medium text-lg  text-black mr-0.5">989</p>
              </div>
              <div className="flex items-center w-full">
                <p className="font-medium text-lg text-black mr-0.5">4</p>

                <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                  <span className="h-full w-[40%] rounded-3xl bg-amber-400 flex" />
                </p>
                <p className="font-medium text-lg text-black mr-0.5">4.5K</p>
              </div>
              <div className="flex items-center">
                <p className="font-medium text-lg text-black mr-0.5">3</p>

                <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                  <span className="h-full w-[20%] rounded-3xl bg-amber-400 flex" />
                </p>
                <p className="font-medium text-lg text-black mr-0.5">50</p>
              </div>
              <div className="flex items-center">
                <p className="font-medium text-lg text-black mr-0.5">2</p>

                <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                  <span className="h-full w-[16%] rounded-3xl bg-amber-400 flex" />
                </p>
                <p className="font-medium text-lg text-black mr-0.5">16</p>
              </div>
              <div className="flex items-center">
                <p className="font-medium text-lg text-black mr-0.5">1</p>

                <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                  <span className="h-full w-[8%] rounded-3xl bg-amber-400 flex" />
                </p>
                <p className="font-medium text-lg py-[1px] text-black mr-0.5">
                  8
                </p>
              </div>
            </div>
            <div className="p-8 bg-amber-50 rounded-3xl flex items-center justify-center flex-col">
              <h2 className="font-manrope font-bold text-5xl text-amber-400 mb-6">
                4.3
              </h2>
              <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4"></div>
              <p className="font-medium text-xl leading-8 text-gray-900 text-center">
                46 Ratings
              </p>
            </div>
          </div>
          <div className="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
            <div className="flex items-center gap-3 mb-4"></div>
            <h3 className="font-manrope font-semibold text-xl sm:text-2xl leading-9 text-black mb-6">
              Outstanding Experience!!!
            </h3>
            <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="John image"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h6 className="font-semibold text-lg leading-8 text-indigo-600 ">
                  John Watson
                </h6>
              </div>
              <p className="font-normal text-lg leading-8 text-gray-400">
                Nov 01, 2023
              </p>
            </div>
            <p className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">
              One of the standout features of Pagedone is its intuitive and
              user-friendly interface. Navigating through the system feels
              natural, and the layout makes it easy to locate and utilize
              various design elements. This is particularly beneficial for
              designers looking to streamline their workflow.
            </p>
          </div>
          <div className="pt-8 max-xl:max-w-2xl max-xl:mx-auto">
            <div className="flex items-center gap-3 mb-4"></div>
            <h3 className="font-manrope font-semibold text-xl sm:text-2xl leading-9 text-black mb-6">
              Pagedone's design system seamlessly bridges the gap between
              designers and developers!
            </h3>
            <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1704351103.png"
                  alt="Robert image"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h6 className="font-semibold text-lg leading-8 text-indigo-600">
                  Robert Karmazov
                </h6>
              </div>
              <p className="font-normal text-lg leading-8 text-gray-400">
                Nov 01, 2023
              </p>
            </div>
            <p className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">
              Pagedone doesn't disappoint when it comes to the variety and
              richness of its design components. From pre-built templates to
              customizable elements, the system caters to both beginners and
              seasoned designers. The extensive library ensures a diverse range
              of options to bring creative visions to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
