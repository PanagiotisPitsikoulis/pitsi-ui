export default function ContactFormTailwindCssWithCompanyInformation() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-4 text-center text-4xl leading-10 font-bold text-black">
          Get In Touch
        </h2>
        <p className="text-center text-base leading-6 font-normal text-gray-500">
          Feel free to contact us? submit your queries here and we will get back
          to you as soon as possible.
        </p>
        <div className="my-0 mt-10 mb-5 grid grid-cols-1 gap-x-8 md:my-14 md:grid-cols-3">
          <div className="group mb-10 flex items-center justify-center rounded-lg bg-indigo-50 px-6 py-11 transition-all duration-700 hover:bg-indigo-600 lg:mb-0">
            <a href="#">
              {/* SVG removed */}
              <span className="text-center text-lg leading-7 font-medium text-gray-900 transition-all duration-700 group-hover:text-white">
                789 Oak Lane, Lakeside, TX 54321
              </span>
            </a>
          </div>
          <div className="mb-10 flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-11 transition-all duration-700 hover:bg-indigo-800 lg:mb-0">
            <a href="#">
              {/* SVG removed */}
              <span className="text-center text-lg leading-7 font-medium text-white">
                470-601-1911
              </span>
            </a>
          </div>
          <div className="group z-10 mb-10 flex items-center justify-center rounded-lg bg-indigo-50 px-6 py-11 transition-all duration-700 hover:bg-indigo-600 lg:mb-0">
            <a href="#">
              {/* SVG removed */}
              <span className="text-center text-lg leading-7 font-medium break-all text-gray-900 transition-all duration-700 group-hover:text-white">
                pagedone1234@gmail.com
              </span>
            </a>
          </div>
        </div>
        <form className="p-0 md:p-11">
          <h2 className="font-manrope mb-9 text-center text-2xl leading-10 font-semibold text-gray-900 md:text-3xl">
            Send Us Message
          </h2>
          <div className="mb-8 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-0">
            <input
              type="text"
              className="h-12 w-full rounded-full border border-gray-200 pl-4 text-lg leading-7 font-normal text-gray-400 shadow-sm focus:outline-none"
              placeholder="Name"
            />
            <input
              type="text"
              className="h-12 w-full rounded-full border border-gray-200 pl-4 text-lg leading-7 font-normal text-gray-400 shadow-sm focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className="mb-8 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-0">
            <input
              type="text"
              className="h-12 w-full rounded-full border border-gray-200 pl-4 text-lg leading-7 font-normal text-gray-400 shadow-sm focus:outline-none"
              placeholder="Phone"
            />
            <select
              id="Subject"
              className="h-12 w-full rounded-full border border-gray-200 px-4 text-lg leading-7 font-normal text-gray-400 shadow-sm focus:outline-none"
            >
              <option selected>Subject</option>
              <option value="US">English</option>
              <option value="CA">Maths</option>
              <option value="FR">Hindi</option>
              <option value="DE">Gujarati</option>
            </select>
          </div>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="mb-8 h-48 w-full resize-none rounded-2xl border border-gray-200 py-2 pl-4 text-lg leading-7 font-normal text-gray-400 shadow-sm focus:outline-none"
            placeholder="Write Message . . ."
          />
          <button className="h-12 w-full rounded-full border-none bg-gray-900 text-center text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-gray-800">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
