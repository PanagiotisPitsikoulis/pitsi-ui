export default function CustomReviewTailwindCssFrom() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-9 rounded-2xl bg-white p-7 md:p-9 lg:gap-14 lg:p-11">
          <div className="flex w-full flex-col items-center justify-start gap-4">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Customer Review
            </h2>
            <p className="max-w-2xl text-center text-base leading-relaxed font-normal text-gray-500">
              Customer reviews are evaluations and opinions shared by consumers
              regarding their experiences with a product, service, or business.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-3.5">
              <label
                htmlFor=""
                className="text-xl leading-8 font-medium text-gray-600"
              >
                Your Email (Required)
              </label>
              <input
                type="text"
                required
                className="inline-flex h-14 w-full items-center justify-start gap-2 rounded-xl border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="user@email.com"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-3.5">
              <h4 className="text-xl leading-8 font-medium text-gray-600">
                Your Rating
              </h4>
              <div className="inline-flex w-full items-start justify-start gap-5">
                <a className="flex items-start justify-start gap-2.5 rounded-full p-2.5 transition-all duration-700 ease-in-out hover:bg-yellow-100">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1716283891.png"
                    alt="emoji image"
                  />
                </a>
                <a className="flex items-start justify-start gap-2.5 rounded-full p-2.5 transition-all duration-700 ease-in-out hover:bg-yellow-100">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1716283900.png"
                    alt="emoji image"
                  />
                </a>
                <a className="flex items-start justify-start gap-2.5 rounded-full p-2.5 transition-all duration-700 ease-in-out hover:bg-yellow-100">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1716283919.png"
                    alt="emoji image"
                  />
                </a>
                <a className="flex items-start justify-start gap-2.5 rounded-full bg-yellow-100 p-2.5 transition-all duration-700 ease-in-out">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1716283949.png"
                    alt="emoji image"
                  />
                </a>
                <a className="flex items-start justify-start gap-2.5 rounded-full p-2.5 transition-all duration-700 ease-in-out hover:bg-yellow-100">
                  <img
                    className="object-cover"
                    src="https://pagedone.io/asset/uploads/1716283959.png"
                    alt="emoji image"
                  />
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-3.5">
              <h4 className="text-xl leading-8 font-medium text-gray-600">
                What can We Improve
              </h4>
              <div className="flex w-full flex-wrap items-start justify-start gap-5 sm:gap-7">
                <button className="flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                    AI Chatbot
                  </span>
                </button>
                <button className="group flex items-center justify-center rounded-full border border-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600">
                  <span className="px-2 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                    User Interface
                  </span>
                </button>
                <button className="group flex items-center justify-center rounded-full border border-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600">
                  <span className="px-2 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                    Custom Themes
                  </span>
                </button>
                <button className="group flex items-center justify-center rounded-full border border-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600">
                  <span className="px-2 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                    Internationalization
                  </span>
                </button>
                <button className="group flex items-center justify-center rounded-full border border-indigo-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600">
                  <span className="px-2 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-white">
                    Addons
                  </span>
                </button>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-3.5">
              <label
                htmlFor=""
                className="text-xl leading-8 font-medium text-gray-600"
              >
                Do you have any thoughts you’d like to share?
              </label>
              <textarea
                name=""
                rows={5}
                className="inline-flex h-44 w-full resize-none items-center justify-start gap-2 rounded-xl border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Your Feedback (Required)"
              />
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
            <span className="px-2 text-center text-lg leading-8 font-semibold text-white">
              Submit
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
