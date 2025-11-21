export default function ProfileHeaderWithUserSExperiences() {
  return (
    <section className="relative pt-40 pb-24">
      <img
        src="https://pagedone.io/asset/uploads/1705474585.png"
        alt="cover-image"
        className="absolute top-0 left-0 z-0 h-60 w-full object-cover"
      />
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="relative z-10 mb-5 flex items-end justify-between">
          <img
            src="https://pagedone.io/asset/uploads/1705471668.png"
            alt="user-avatar-image"
            className="rounded-full border-4 border-solid border-white object-cover"
          />
          <div className="hidden items-center gap-2.5 lg:flex">
            <button className="rounded-full bg-indigo-50 px-7 py-3.5 text-base leading-7 font-semibold text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-gray-300">
              Message
            </button>
            <button className="rounded-full bg-indigo-600 px-7 py-3.5 text-base leading-7 font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-gray-300">
              Message
            </button>
            <button className="group rounded-full bg-white text-base leading-7 font-semibold text-gray-700 transition-all duration-500 hover:bg-gray-100"></button>
          </div>
        </div>
        <div className="flex flex-col justify-between max-lg:gap-4 lg:flex-row lg:items-center">
          <div className="block">
            <h3 className="font-manrope mb-1 text-4xl font-bold text-gray-900">
              Emma Smith
            </h3>
            <p className="mb-1 text-base leading-7 font-normal text-gray-500">
              Engineer at BB Agency Industry
            </p>
            <ul className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-7">
              <li>
                <a
                  href="javascript:;"
                  className="group flex items-center gap-2 py-1 text-base leading-7 font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 sm:py-3.5"
                >
                  San francisco, CA
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="group flex items-center gap-2 py-1 text-base leading-7 font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 sm:py-3.5"
                >
                  Joined April 2021
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="group flex items-center gap-2 py-1 text-base leading-7 font-medium text-gray-500 transition-all duration-500 hover:text-gray-900 sm:py-3.5"
                >
                  5.0(12)
                </a>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2 lg:hidden">
              <button className="rounded-full bg-indigo-50 px-7 py-3.5 text-base leading-7 font-semibold text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-gray-300">
                Message
              </button>
              <button className="rounded-full bg-indigo-600 px-7 py-3.5 text-base leading-7 font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-gray-300">
                Message
              </button>
              <button className="group rounded-full bg-white text-base leading-7 font-semibold text-gray-700 transition-all duration-500"></button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-7 min-[440px]:grid-cols-2">
            <div className="rounded-2xl bg-indigo-50 p-5">
              <p className="mb-2 text-xl leading-8 font-semibold text-indigo-600">
                351
              </p>
              <p className="text-sm leading-6 font-normal text-indigo-900">
                Completed Sessions
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-5">
              <p className="mb-2 text-xl leading-8 font-semibold text-sky-600">
                2+
              </p>
              <p className="text-sm leading-6 font-normal text-cyan-900">
                Years Experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
