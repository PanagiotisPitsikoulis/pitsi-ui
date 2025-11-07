export default function ProfileHeaderWithButtons() {
  return (
    <section className="relative pt-40 pb-24">
      <img
        src="https://pagedone.io/asset/uploads/1705473908.png"
        alt="cover-image"
        className="absolute top-0 left-0 z-0 h-60 w-full object-cover"
      />
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="relative z-10 mb-5 flex items-center justify-center sm:justify-start">
          <img
            src="https://pagedone.io/asset/uploads/1705471668.png"
            alt="user-avatar-image"
            className="rounded-full border-4 border-solid border-white object-cover"
          />
        </div>
        <div className="mb-5 flex flex-col items-center justify-center max-sm:gap-5 sm:flex-row sm:justify-between">
          <div className="block">
            <h3 className="font-manrope mb-1 text-4xl font-bold text-gray-900 max-sm:text-center">
              Emma Smith
            </h3>
            <p className="text-base leading-7 font-normal text-gray-500 max-sm:text-center">
              Engineer at BB Agency Industry <br className="hidden sm:block" />
              New York, United States
            </p>
          </div>
          <button className="flex items-center rounded-full bg-indigo-600 px-5 py-3.5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700">
            <span className="px-2 text-base leading-7 font-semibold text-white">
              Send Message
            </span>
          </button>
        </div>
        <div className="flex items-center gap-4 max-sm:flex-wrap max-sm:justify-center">
          <a
            href="javascript:;"
            className="rounded-full bg-stone-100 px-6 py-3 text-sm leading-6 font-semibold text-gray-700 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900"
          >
            Ux Research
          </a>
          <a
            href="javascript:;"
            className="rounded-full bg-stone-100 px-6 py-3 text-sm leading-6 font-semibold text-gray-700 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900"
          >
            CX Strategy
          </a>
          <a
            href="javascript:;"
            className="rounded-full bg-stone-100 px-6 py-3 text-sm leading-6 font-semibold text-gray-700 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900"
          >
            Project Manager
          </a>
        </div>
      </div>
    </section>
  )
}
