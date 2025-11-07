export default function CustomReviewTailwindCssFrom() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full lg:p-11 md:p-9 p-7 bg-white rounded-2xl flex-col justify-start items-center lg:gap-14 gap-9 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-4 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Customer Review
            </h2>
            <p className="max-w-2xl text-center text-gray-500 text-base font-normal leading-relaxed">
              Customer reviews are evaluations and opinions shared by consumers
              regarding their experiences with a product, service, or business.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-center gap-8 flex">
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
              <label
                htmlFor=""
                className="text-gray-600 text-xl font-medium leading-8"
              >
                Your Email (Required)
              </label>
              <input
                type="text"
                required
                className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 h-14 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                placeholder="user@email.com"
              />
            </div>
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
              <h4 className="text-gray-600 text-xl font-medium leading-8">
                Your Rating
              </h4>
              <div className="w-full justify-start items-start gap-5 inline-flex">
                <a className="p-2.5 hover:bg-yellow-100 transition-all duration-700 ease-in-out rounded-full justify-start items-start gap-2.5 flex">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1716283891.png"
                    alt="emoji image"
                  />
                </a>
                <a className="p-2.5 hover:bg-yellow-100 transition-all duration-700 ease-in-out rounded-full justify-start items-start gap-2.5 flex">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1716283900.png"
                    alt="emoji image"
                  />
                </a>
                <a className="p-2.5 hover:bg-yellow-100 transition-all duration-700 ease-in-out rounded-full justify-start items-start gap-2.5 flex">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1716283919.png"
                    alt="emoji image"
                  />
                </a>
                <a className="p-2.5 bg-yellow-100 transition-all duration-700 ease-in-out rounded-full justify-start items-start gap-2.5 flex">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1716283949.png"
                    alt="emoji image"
                  />
                </a>
                <a className="p-2.5 hover:bg-yellow-100 transition-all duration-700 ease-in-out rounded-full justify-start items-start gap-2.5 flex">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1716283959.png"
                    alt="emoji image"
                  />
                </a>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
              <h4 className="text-gray-600 text-xl font-medium leading-8">
                What can We Improve
              </h4>
              <div className="w-full justify-start items-start sm:gap-7 gap-5 flex flex-wrap">
                <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    AI Chatbot
                  </span>
                </button>
                <button className="group px-5 py-2.5 rounded-full shadow border border-indigo-600 hover:border-transparent hover:bg-indigo-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                  <span className="px-2 group-hover:text-white transition-all duration-700 ease-in-out text-indigo-600 text-base font-semibold leading-relaxed">
                    User Interface
                  </span>
                </button>
                <button className="group px-5 py-2.5 rounded-full shadow border border-indigo-600 hover:border-transparent hover:bg-indigo-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                  <span className="px-2 group-hover:text-white transition-all duration-700 ease-in-out text-indigo-600 text-base font-semibold leading-relaxed">
                    Custom Themes
                  </span>
                </button>
                <button className="group px-5 py-2.5 rounded-full shadow border border-indigo-600 hover:border-transparent hover:bg-indigo-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                  <span className="px-2 group-hover:text-white transition-all duration-700 ease-in-out text-indigo-600 text-base font-semibold leading-relaxed">
                    Internationalization
                  </span>
                </button>
                <button className="group px-5 py-2.5 rounded-full shadow border border-indigo-600 hover:border-transparent hover:bg-indigo-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                  <span className="px-2 group-hover:text-white transition-all duration-700 ease-in-out text-indigo-600 text-base font-semibold leading-relaxed">
                    Addons
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
              <label
                htmlFor=""
                className="text-gray-600 text-xl font-medium leading-8"
              >
                Do you have any thoughts you’d like to share?
              </label>
              <textarea
                name=""
                rows={5}
                className="w-full h-44 resize-none focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                placeholder="Your Feedback (Required)"
              />
            </div>
          </div>
          <button className="sm:w-fit w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
            <span className="px-2 text-center text-white text-lg font-semibold leading-8">
              Submit
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
