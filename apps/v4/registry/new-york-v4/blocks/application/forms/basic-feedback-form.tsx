export default function BasicFeedbackForm() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-12 rounded-2xl bg-white p-8 lg:p-16">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-black">
              Give Feedback
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500">
              How to satisfy you with your experience with us
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-6">
            <div className="flex w-full flex-col items-start justify-start gap-3.5">
              <h4 className="text-xl leading-8 font-medium text-gray-900">
                Rate Your Experience
              </h4>
              <div className="inline-flex w-full items-center justify-start gap-1">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-3.5">
              <h4 className="text-xl leading-loose font-medium text-black">
                Do you have any thoughts you’d like to share?
              </h4>
              <textarea
                name=""
                rows={8}
                className="h-44 w-full resize-none rounded-xl border border-gray-300 px-3.5 py-2 text-sm leading-snug font-normal text-gray-900 placeholder-gray-400 focus:outline-none"
                placeholder="Enter a description..."
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-3.5">
              <h4 className="text-xl leading-loose font-medium break-all text-black">
                Do you have time for a few more questions about your overall
                experience?
              </h4>
              <div className="inline-flex items-start justify-start gap-5">
                <div className="flex w-full items-center py-0.5">
                  <input
                    id="radio_1"
                    type="radio"
                    name="radio"
                    className="peer sr-only hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio_1"
                    className="flex w-full cursor-pointer items-center py-[1px] text-base leading-6 font-normal text-gray-600"
                  >
                    <span className="mr-2 h-5 w-5 rounded-full border border-indigo-600" />
                    Yes
                  </label>
                </div>
                <div className="flex w-full items-center py-0.5">
                  <input
                    id="radio_2"
                    type="radio"
                    name="radio"
                    className="peer sr-only hidden"
                  />
                  <label
                    htmlFor="radio_2"
                    className="flex w-full cursor-pointer items-center py-[1px] text-base leading-6 font-normal text-gray-600"
                  >
                    <span className="mr-2 h-5 w-5 rounded-full border border-indigo-600" />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row sm:gap-8">
            <button className="flex w-full items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:from-indigo-700 hover:to-violet-600 sm:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Send Feedback
              </span>
            </button>
            <button className="group flex w-full items-center justify-center rounded-xl bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-violet-500 sm:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-500 ease-in-out group-hover:text-white">
                Cancel Feedback
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
