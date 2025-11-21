export default function FeedbackFrom() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="mx-auto flex w-full flex-col items-center justify-center rounded-[10px] sm:max-w-xl">
          <div className="flex w-full flex-col items-center justify-start gap-5 rounded-2xl bg-white p-7 lg:p-10">
            <div className="inline-flex w-full items-center justify-end gap-2.5">
              <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gray-100 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-200"></button>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-8 lg:gap-12">
              <div className="flex w-full flex-col items-center justify-start gap-3">
                <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                  Rate Us!
                </h2>
                <p className="text-center text-base leading-relaxed font-normal text-gray-400">
                  We would like your feedback to improve our website.
                </p>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-6">
                  <div className="flex w-full flex-col items-start justify-start gap-3.5">
                    <h4 className="w-full text-center text-xl leading-loose font-semibold text-gray-900">
                      How would your rate our website?
                    </h4>
                    <div className="inline-flex w-full items-start justify-between">
                      <a className="group inline-flex w-full flex-col items-center justify-start gap-3.5">
                        <div className="group-hover:bg-primary inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-50 p-4 transition-all duration-700 ease-in-out">
                          <img
                            className="h-6 w-6 object-cover"
                            alt="Terrible emoji image"
                            src="https://pagedone.io/asset/uploads/1716459879.png"
                          />
                        </div>
                        <h6 className="text-center text-base leading-relaxed font-medium text-blue-200 transition-all duration-700 ease-in-out group-hover:text-blue-600">
                          Terrible
                        </h6>
                      </a>
                      <a className="group inline-flex w-full flex-col items-center justify-start gap-3.5">
                        <div className="group-hover:bg-primary inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-50 p-4 transition-all duration-700 ease-in-out">
                          <img
                            className="h-6 w-6 object-cover"
                            alt="Bad emoji image"
                            src="https://pagedone.io/asset/uploads/1716459892.png"
                          />
                        </div>
                        <h6 className="text-center text-base leading-relaxed font-medium text-blue-200 transition-all duration-700 ease-in-out group-hover:text-blue-600">
                          Terrible
                        </h6>
                      </a>
                      <a className="group inline-flex w-full flex-col items-center justify-start gap-3.5">
                        <div className="group-hover:bg-primary inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-50 p-4 transition-all duration-700 ease-in-out">
                          <img
                            className="h-6 w-6 object-cover"
                            alt="Ok emoji image"
                            src="https://pagedone.io/asset/uploads/1716459904.png"
                          />
                        </div>
                        <h6 className="text-center text-base leading-relaxed font-medium text-blue-200 transition-all duration-700 ease-in-out group-hover:text-blue-600">
                          Ok
                        </h6>
                      </a>
                      <a className="group inline-flex w-full flex-col items-center justify-start gap-3.5">
                        <div className="group-hover:bg-primary inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-50 p-4 transition-all duration-700 ease-in-out">
                          <img
                            className="h-6 w-6 object-cover"
                            alt="Good emoji image"
                            src="https://pagedone.io/asset/uploads/1716459918.png"
                          />
                        </div>
                        <h6 className="text-center text-base leading-relaxed font-medium text-blue-200 transition-all duration-700 ease-in-out group-hover:text-blue-600">
                          Good
                        </h6>
                      </a>
                      <a className="group inline-flex w-full flex-col items-center justify-start gap-3.5">
                        <div className="group-hover:bg-primary inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-50 p-4 transition-all duration-700 ease-in-out">
                          <img
                            className="h-6 w-6 object-cover"
                            alt="Great emoji image"
                            src="https://pagedone.io/asset/uploads/1716459929.png"
                          />
                        </div>
                        <h6 className="text-center text-base leading-relaxed font-medium text-blue-200 transition-all duration-700 ease-in-out group-hover:text-blue-600">
                          Great
                        </h6>
                      </a>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center justify-start">
                    <textarea
                      name=""
                      rows={7}
                      className="w-full resize-none rounded-xl border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Share feedback..."
                    />
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-blue-800 sm:w-fit">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                    Submit Review
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
