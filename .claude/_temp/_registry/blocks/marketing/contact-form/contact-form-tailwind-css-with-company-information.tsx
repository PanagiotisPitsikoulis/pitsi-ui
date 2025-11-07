export default function ContactFormTailwindCssWithCompanyInformation() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-black text-4xl font-bold leading-10 mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-500 text-center text-base font-normal leading-6">
          Feel free to contact us? submit your queries here and we will get back
          to you as soon as possible.
        </p>
        <div className="md:my-14 my-0 mt-10 mb-5 grid md:grid-cols-3 grid-cols-1 gap-x-8">
          <div className="group bg-indigo-50 hover:bg-indigo-600 transition-all duration-700 rounded-lg flex items-center justify-center lg:mb-0 mb-10 py-11 px-6">
            <a href="#">
              {/* SVG removed */}
              <span className="text-gray-900 text-center text-lg font-medium leading-7 transition-all duration-700 group-hover:text-white">
                789 Oak Lane, Lakeside, TX 54321
              </span>
            </a>
          </div>
          <div className="flex items-center justify-center lg:mb-0 mb-10 bg-indigo-600 transition-all duration-700 hover:bg-indigo-800 rounded-lg py-11 px-6">
            <a href="#">
              {/* SVG removed */}
              <span className="text-white text-center text-lg font-medium leading-7">
                470-601-1911
              </span>
            </a>
          </div>
          <div className="group bg-indigo-50 z-10 hover:bg-indigo-600 transition-all duration-700 rounded-lg flex items-center justify-center lg:mb-0 mb-10 py-11 px-6">
            <a href="#">
              {/* SVG removed */}
              <span className="text-gray-900 text-center text-lg font-medium leading-7 break-all transition-all duration-700 group-hover:text-white">
                pagedone1234@gmail.com
              </span>
            </a>
          </div>
        </div>
        <form className="md:p-11 p-0">
          <h2 className="text-gray-900 text-center font-manrope md:text-3xl text-2xl font-semibold leading-10 mb-9">
            Send Us Message
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-8 md:gap-y-0 gap-y-8 mb-8">
            <input
              type="text"
              className="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 shadow-sm focus:outline-none pl-4"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 shadow-sm focus:outline-none pl-4"
              placeholder="Email"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-8 md:gap-y-0 gap-y-8 mb-8">
            <input
              type="text"
              className="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 shadow-sm focus:outline-none pl-4"
              placeholder="Phone"
            />
            <select
              id="Subject"
              className="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 shadow-sm focus:outline-none px-4"
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
            className="w-full h-48 resize-none text-gray-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 shadow-sm focus:outline-none pl-4 py-2 mb-8"
            placeholder="Write Message . . ."
          />
          <button className="w-full h-12 bg-gray-900 hover:bg-gray-800 transition-all duration-700 shadow-sm rounded-full border-none text-white text-center text-base font-semibold leading-6">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
