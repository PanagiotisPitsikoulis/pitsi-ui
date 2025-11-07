export default function BasicFeedbackForm() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full lg:p-16 p-8 bg-white rounded-2xl flex-col justify-start items-center gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="w-full text-center text-black text-4xl font-bold font-manrope leading-normal">
              Give Feedback
            </h2>
            <p className="w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              How to satisfy you with your experience with us
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start gap-6 flex">
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
              <h4 className="text-gray-900 text-xl font-medium leading-8">
                Rate Your Experience
              </h4>
              <div className="w-full justify-start items-center gap-1 inline-flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
              <h4 className="text-black text-xl font-medium leading-loose">
                Do you have any thoughts you’d like to share?
              </h4>
              <textarea
                name=""
                rows={8}
                className="w-full h-44 focus:outline-none resize-none px-3.5 py-2 rounded-xl border border-gray-300 placeholder-gray-400 text-gray-900 text-sm font-normal leading-snug"
                placeholder="Enter a description..."
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
              <h4 className="text-black text-xl font-medium leading-loose break-all">
                Do you have time for a few more questions about your overall
                experience?
              </h4>
              <div className="justify-start items-start gap-5 inline-flex">
                <div className="py-0.5 w-full flex items-center ">
                  <input
                    id="radio_1"
                    type="radio"
                    name="radio"
                    className="hidden sr-only peer"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio_1"
                    className="py-[1px] text-gray-600 text-base font-normal leading-6 w-full flex items-center cursor-pointer"
                  >
                    <span className="w-5 h-5 mr-2 rounded-full border border-indigo-600" />
                    Yes
                  </label>
                </div>
                <div className="py-0.5 w-full flex items-center ">
                  <input
                    id="radio_2"
                    type="radio"
                    name="radio"
                    className="hidden sr-only peer"
                  />
                  <label
                    htmlFor="radio_2"
                    className="py-[1px] text-gray-600 text-base font-normal leading-6 w-full flex items-center cursor-pointer"
                  >
                    <span className="w-5 h-5 mr-2 rounded-full border border-indigo-600" />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full justify-start items-start sm:gap-8 gap-6 flex sm:flex-row flex-col">
            <button className="sm:w-fit w-full px-5 py-2.5 bg-gradient-to-tr from-indigo-600 to-violet-500 hover:from-indigo-700 hover:to-violet-600 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Send Feedback
              </span>
            </button>
            <button className="group sm:w-fit w-full px-5 py-2.5 bg-indigo-50 hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-violet-500 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
              <span className="px-2 py-px text-indigo-600 group-hover:text-white transition-all duration-500 ease-in-out text-base font-semibold leading-relaxed">
                Cancel Feedback
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
