export default function ProfileHeadersWithBackgroundImage() {
  return (
    <section className="relative pt-36 pb-24 sm:pt-60">
      <img
        src="https://pagedone.io/asset/uploads/1705474304.png"
        alt="cover-image"
        className="absolute top-0 left-0 z-0 h-48 w-full object-cover sm:h-[350px]"
      />
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="relative z-10 mb-5 flex flex-col items-center justify-between gap-9 lg:flex-row">
          <img
            src="https://pagedone.io/asset/uploads/1705471668.png"
            alt="user-avatar-image"
            className="rounded-full border-4 border-solid border-white object-cover max-sm:w-20"
          />
          <div className="block w-full">
            <div className="mb-5 flex items-center justify-center lg:justify-between lg:py-4">
              <h3 className="font-manrope text-3xl font-semibold text-gray-900 max-lg:text-center sm:text-5xl sm:leading-snug lg:text-white">
                Rachel Rose
              </h3>
              <button className="absolute top-0 right-0 flex items-center rounded-full bg-black p-2 max-[400px]:hidden sm:px-4 sm:py-3 lg:relative">
                <span className="px-2 text-xs font-semibold text-white sm:text-sm sm:leading-6">
                  Edit Cover
                </span>
              </button>
            </div>
            <div className="flex items-center justify-center py-2 max-lg:flex-col-reverse max-lg:gap-5 lg:justify-between lg:py-6">
              <ul className="flex flex-wrap items-center gap-y-4 max-sm:w-full max-sm:justify-center">
                <li>
                  <a
                    href="javascript:;"
                    className="tab-avtive:border-indigo-600 border-b-2 border-solid border-gray-200 px-3 py-3 text-sm leading-6 font-semibold whitespace-nowrap text-indigo-600 transition-all duration-500 hover:border-indigo-600 sm:px-6 xl:px-10"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="tab-avtive:border-indigo-600 border-b-2 border-solid border-gray-200 px-3 py-3 text-sm leading-6 font-semibold whitespace-nowrap text-indigo-600 transition-all duration-500 hover:border-indigo-600 sm:px-6 xl:px-10"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="tab-avtive:border-indigo-600 border-b-2 border-solid border-gray-200 px-3 py-3 text-sm leading-6 font-semibold whitespace-nowrap text-indigo-600 transition-all duration-500 hover:border-indigo-600 sm:px-6 xl:px-10"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="tab-avtive:border-indigo-600 border-b-2 border-solid border-gray-200 px-3 py-3 text-sm leading-6 font-semibold whitespace-nowrap text-indigo-600 transition-all duration-500 hover:border-indigo-600 sm:px-6 xl:px-10"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="tab-avtive:border-indigo-600 border-b-2 border-solid border-gray-200 px-3 py-3 text-sm leading-6 font-semibold whitespace-nowrap text-indigo-600 transition-all duration-500 hover:border-indigo-600 sm:px-6 xl:px-10"
                  >
                    Feature
                  </a>
                </li>
              </ul>
              <a
                href="javascript:;"
                className="group rounded-lg border border-gray-200 bg-white transition-all duration-500 hover:bg-indigo-100 max-lg:hidden"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
