export default function ProfileHeadersWithBackgroundImage() {
  return (
    <section className="relative pt-36 sm:pt-60 pb-24">
      <img
        src="https://pagedone.io/asset/uploads/1705474304.png"
        alt="cover-image"
        className="w-full absolute top-0 left-0 z-0 h-48 sm:h-[350px] object-cover"
      />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between flex-col lg:flex-row gap-9 relative z-10 mb-5">
          <img
            src="https://pagedone.io/asset/uploads/1705471668.png"
            alt="user-avatar-image"
            className="border-4 border-solid border-white rounded-full max-sm:w-20 object-cover"
          />
          <div className="w-full block">
            <div className="flex items-center justify-center lg:justify-between lg:py-4 mb-5">
              <h3 className="font-manrope font-semibold text-3xl sm:text-5xl sm:leading-snug text-gray-900 lg:text-white max-lg:text-center">
                Rachel Rose
              </h3>
              <button className="max-[400px]:hidden absolute lg:relative top-0 right-0 rounded-full bg-black p-2 sm:py-3 sm:px-4 flex items-center">
                <span className="px-2 font-semibold text-xs sm:text-sm sm:leading-6 text-white">
                  Edit Cover
                </span>
              </button>
            </div>
            <div className="flex items-center max-lg:flex-col-reverse justify-center max-lg:gap-5 lg:justify-between py-2 lg:py-6">
              <ul className="flex items-center max-sm:justify-center max-sm:w-full flex-wrap gap-y-4">
                <li>
                  <a
                    href="javascript:;"
                    className="py-3 px-3 sm:px-6 xl:px-10 border-b-2 whitespace-nowrap border-solid border-gray-200 font-semibold text-sm leading-6 text-indigo-600 tab-avtive:border-indigo-600 transition-all duration-500 hover:border-indigo-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="py-3 px-3 sm:px-6 xl:px-10 border-b-2 whitespace-nowrap border-solid border-gray-200 font-semibold text-sm leading-6 text-indigo-600 tab-avtive:border-indigo-600 transition-all duration-500 hover:border-indigo-600"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="py-3 px-3 sm:px-6 xl:px-10 border-b-2 whitespace-nowrap border-solid border-gray-200 font-semibold text-sm leading-6 text-indigo-600 tab-avtive:border-indigo-600 transition-all duration-500 hover:border-indigo-600"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="py-3 px-3 sm:px-6 xl:px-10 border-b-2 whitespace-nowrap border-solid border-gray-200 font-semibold text-sm leading-6 text-indigo-600 tab-avtive:border-indigo-600 transition-all duration-500 hover:border-indigo-600"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="py-3 px-3 sm:px-6 xl:px-10 border-b-2 whitespace-nowrap border-solid border-gray-200 font-semibold text-sm leading-6 text-indigo-600 tab-avtive:border-indigo-600 transition-all duration-500 hover:border-indigo-600"
                  >
                    Feature
                  </a>
                </li>
              </ul>
              <a
                href="javascript:;"
                className="max-lg:hidden group rounded-lg border border-gray-200 bg-white transition-all duration-500 hover:bg-indigo-100"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
