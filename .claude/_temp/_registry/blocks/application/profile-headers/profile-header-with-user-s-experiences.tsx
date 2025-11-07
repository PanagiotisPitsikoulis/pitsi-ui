export default function ProfileHeaderWithUserSExperiences() {
  return (
    <section className="relative pt-40 pb-24">
      <img
        src="https://pagedone.io/asset/uploads/1705474585.png"
        alt="cover-image"
        className="w-full absolute top-0 left-0 z-0 h-60 object-cover"
      />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between relative z-10 mb-5">
          <img
            src="https://pagedone.io/asset/uploads/1705471668.png"
            alt="user-avatar-image"
            className="border-4 border-solid border-white rounded-full object-cover"
          />
          <div className="hidden lg:flex items-center gap-2.5">
            <button className="rounded-full bg-indigo-50 py-3.5 px-7 font-semibold text-base leading-7 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-indigo-100">
              Message
            </button>
            <button className="rounded-full bg-indigo-600 py-3.5 px-7 font-semibold text-base leading-7 text-white shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-indigo-700">
              Message
            </button>
            <button className="rounded-full group  bg-white  font-semibold text-base leading-7 text-gray-700 transition-all duration-500 hover:bg-gray-100"></button>
          </div>
        </div>
        <div className="flex lg:items-center flex-col max-lg:gap-4 lg:flex-row justify-between">
          <div className="block">
            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">
              Emma Smith
            </h3>
            <p className="font-normal text-base leading-7 text-gray-500 mb-1">
              Engineer at BB Agency Industry
            </p>
            <ul className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-7">
              <li>
                <a
                  href="javascript:;"
                  className="flex items-center gap-2 py-1 sm:py-3.5 font-medium text-base leading-7 text-gray-500 group transition-all duration-500 hover:text-gray-900"
                >
                  San francisco, CA
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="flex items-center gap-2 py-1 sm:py-3.5 font-medium text-base leading-7 text-gray-500 group transition-all duration-500 hover:text-gray-900"
                >
                  Joined April 2021
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="flex items-center gap-2 py-1 sm:py-3.5 font-medium text-base leading-7 text-gray-500 group transition-all duration-500 hover:text-gray-900"
                >
                  5.0(12)
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2 lg:hidden mt-4">
              <button className="rounded-full bg-indigo-50 py-3.5 px-7 font-semibold text-base leading-7 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-indigo-100">
                Message
              </button>
              <button className="rounded-full bg-indigo-600 py-3.5 px-7 font-semibold text-base leading-7 text-white shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-indigo-700">
                Message
              </button>
              <button className="rounded-full group bg-white font-semibold text-base leading-7 text-gray-700 transition-all duration-500 "></button>
            </div>
          </div>
          <div className="grid grid-cols-1 min-[440px]:grid-cols-2 gap-7">
            <div className="p-5 rounded-2xl bg-indigo-50 ">
              <p className="font-semibold text-xl leading-8 text-indigo-600 mb-2">
                351
              </p>
              <p className="font-normal text-sm leading-6 text-indigo-900">
                Completed Sessions
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-sky-50 ">
              <p className="font-semibold text-xl leading-8 text-sky-600 mb-2">
                2+
              </p>
              <p className="font-normal text-sm leading-6 text-cyan-900">
                Years Experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
