export default function ProfileHeadersWithCenterImage() {
  return (
    <section className="relative pt-36 pb-24">
      <img
        src="https://pagedone.io/asset/uploads/1705471739.png"
        alt="cover-image"
        className="absolute top-0 left-0 z-0 h-60 w-full object-cover"
      />
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="relative z-10 mb-2.5 flex items-center justify-center">
          <img
            src="https://pagedone.io/asset/uploads/1705471668.png"
            alt="user-avatar-image"
            className="rounded-full border-4 border-solid border-white object-cover"
          />
        </div>
        <div className="mb-5 flex flex-col items-center justify-between max-sm:gap-5 sm:flex-row">
          <ul className="flex items-center gap-5">
            <li>
              {" "}
              <a
                href="javascript:;"
                className="group flex cursor-pointer items-center gap-2"
              >
                <span className="text-base leading-7 font-medium text-gray-900">
                  Home
                </span>
              </a>
            </li>
            <li>
              {" "}
              <a
                href="javascript:;"
                className="group flex cursor-pointer items-center gap-2"
              >
                <span className="text-base leading-7 font-medium text-gray-400">
                  Account
                </span>
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className="group flex cursor-pointer items-center gap-2"
              >
                <span className="text-base leading-7 font-medium text-gray-400">
                  Profile
                </span>
                <span className="flex items-center justify-center rounded-full bg-indigo-50 px-2.5 py-1.5 text-xs font-medium text-indigo-600">
                  New
                </span>
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <button className="rounded-full border border-solid border-gray-300 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-300 hover:bg-gray-100 hover:shadow-gray-50">
              Message
            </button>
            <button className="rounded-full border border-solid border-indigo-600 bg-indigo-600 px-4 py-3 text-sm font-semibold whitespace-nowrap text-white shadow-sm shadow-transparent transition-all duration-500 hover:border-indigo-700 hover:bg-indigo-700 hover:shadow-gray-200">
              Book a Session
            </button>
          </div>
        </div>
        <h3 className="font-manrope mb-3 text-center text-3xl leading-10 font-bold text-gray-900">
          Jenny Wilson
        </h3>
        <p className="mb-8 text-center text-base leading-7 font-normal text-gray-500">
          A social media influencers and singer
        </p>
        <div className="flex items-center justify-center gap-5">
          <a
            href="javascript:;"
            className="group rounded-full border border-solid border-gray-300 bg-gray-50 p-3 transition-all duration-500 hover:border-indigo-700 hover:bg-indigo-700"
          ></a>
          <a
            href="javascript:;"
            className="group rounded-full border border-solid border-gray-300 bg-gray-50 p-3 transition-all duration-500 hover:border-indigo-700 hover:bg-indigo-700"
          ></a>
          <a
            href="javascript:;"
            className="group rounded-full border border-solid border-gray-300 bg-gray-50 p-3 transition-all duration-500 hover:border-indigo-700 hover:bg-indigo-700"
          ></a>
          <a
            href="javascript:;"
            className="group rounded-full border border-solid border-gray-300 bg-gray-50 p-3 transition-all duration-500 hover:border-indigo-700 hover:bg-indigo-700"
          ></a>
          <a
            href="javascript:;"
            className="group rounded-full border border-solid border-gray-300 bg-gray-50 p-3 transition-all duration-500 hover:border-indigo-700 hover:bg-indigo-700"
          ></a>
        </div>
      </div>
    </section>
  )
}
