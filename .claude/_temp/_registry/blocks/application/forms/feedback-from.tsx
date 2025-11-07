export default function FeedbackFrom() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="sm:max-w-xl mx-auto w-full rounded-[10px] flex-col justify-center items-center flex">
          <div className="w-full lg:p-10 p-7 bg-white rounded-2xl flex-col justify-start items-center gap-5 flex">
            <div className="w-full justify-end items-center gap-2.5 inline-flex">
              <button className="w-[34px] h-[34px] justify-center items-center flex bg-gray-100 hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]"></button>
            </div>
            <div className="w-full flex-col justify-start items-center lg:gap-12 gap-8 flex">
              <div className="w-full flex-col justify-start items-center gap-3 flex">
                <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                  Rate Us!
                </h2>
                <p className="text-center text-gray-400 text-base font-normal leading-relaxed">
                  We would like your feedback to improve our website.
                </p>
              </div>
              <div className="w-full flex-col justify-start items-center gap-8 flex">
                <div className="w-full flex-col justify-start items-start gap-6 flex">
                  <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                    <h4 className="w-full text-center text-gray-900 text-xl font-semibold leading-loose">
                      How would your rate our website?
                    </h4>
                    <div className="w-full justify-between items-start inline-flex">
                      <a className="group w-full flex-col justify-start items-center gap-3.5 inline-flex">
                        <div className="p-4 bg-blue-50 group-hover:bg-blue-500 transition-all duration-700 ease-in-out rounded-full justify-center items-center gap-2.5 inline-flex">
                          <img
                            className="w-6 h-6 object-cover"
                            alt="Terrible emoji image"
                            src="https://pagedone.io/asset/uploads/1716459879.png"
                          />
                        </div>
                        <h6 className="text-center text-blue-200 group-hover:text-blue-600 transition-all duration-700 ease-in-out text-base font-medium leading-relaxed">
                          Terrible
                        </h6>
                      </a>
                      <a className="group w-full flex-col justify-start items-center gap-3.5 inline-flex">
                        <div className="p-4 bg-blue-50 group-hover:bg-blue-500 transition-all duration-700 ease-in-out rounded-full justify-center items-center gap-2.5 inline-flex">
                          <img
                            className="w-6 h-6 object-cover"
                            alt="Bad emoji image"
                            src="https://pagedone.io/asset/uploads/1716459892.png"
                          />
                        </div>
                        <h6 className="text-center text-blue-200 group-hover:text-blue-600 transition-all duration-700 ease-in-out text-base font-medium leading-relaxed">
                          Terrible
                        </h6>
                      </a>
                      <a className="group w-full flex-col justify-start items-center gap-3.5 inline-flex">
                        <div className="p-4 bg-blue-50 group-hover:bg-blue-500 transition-all duration-700 ease-in-out rounded-full justify-center items-center gap-2.5 inline-flex">
                          <img
                            className="w-6 h-6 object-cover"
                            alt="Ok emoji image"
                            src="https://pagedone.io/asset/uploads/1716459904.png"
                          />
                        </div>
                        <h6 className="text-center text-blue-200 group-hover:text-blue-600 transition-all duration-700 ease-in-out text-base font-medium leading-relaxed">
                          Ok
                        </h6>
                      </a>
                      <a className="group w-full flex-col justify-start items-center gap-3.5 inline-flex">
                        <div className="p-4 bg-blue-50 group-hover:bg-blue-500 transition-all duration-700 ease-in-out rounded-full justify-center items-center gap-2.5 inline-flex">
                          <img
                            className="w-6 h-6 object-cover"
                            alt="Good emoji image"
                            src="https://pagedone.io/asset/uploads/1716459918.png"
                          />
                        </div>
                        <h6 className="text-center text-blue-200 group-hover:text-blue-600 transition-all duration-700 ease-in-out text-base font-medium leading-relaxed">
                          Good
                        </h6>
                      </a>
                      <a className="group w-full flex-col justify-start items-center gap-3.5 inline-flex">
                        <div className="p-4 bg-blue-50 group-hover:bg-blue-500 transition-all duration-700 ease-in-out rounded-full justify-center items-center gap-2.5 inline-flex">
                          <img
                            className="w-6 h-6 object-cover"
                            alt="Great emoji image"
                            src="https://pagedone.io/asset/uploads/1716459929.png"
                          />
                        </div>
                        <h6 className="text-center text-blue-200 group-hover:text-blue-600 transition-all duration-700 ease-in-out text-base font-medium leading-relaxed">
                          Great
                        </h6>
                      </a>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-center flex">
                    <textarea
                      name=""
                      rows={7}
                      className="w-full focus:outline-none resize-none placeholder-gray-400 text-gray-900 text-sm font-normal leading-relaxed py-2 px-3.5 rounded-xl border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]"
                      placeholder="Share feedback..."
                    />
                  </div>
                </div>
                <button className="sm:w-fit w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    Submit Review
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
