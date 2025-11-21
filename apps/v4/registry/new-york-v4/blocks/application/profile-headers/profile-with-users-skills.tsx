export default function ProfileWithUsersSkills() {
  return (
    <section className="relative pt-40 pb-24">
      <img
        src="https://pagedone.io/asset/uploads/1705473378.png"
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
        <div className="mb-5 flex flex-col items-center justify-between max-sm:gap-5 sm:flex-row">
          <div className="block">
            <h3 className="font-manrope mb-1 text-4xl font-bold text-gray-900">
              Emma Smith
            </h3>
            <p className="text-base leading-7 font-normal text-gray-500">
              Los Anbeles, California
            </p>
          </div>
          <button className="group flex items-center rounded-full bg-gray-100 px-5 py-3.5 transition-all duration-500 hover:bg-indigo-100">
            <span className="px-2 text-base leading-7 font-medium text-gray-700 transition-all duration-500 group-hover:text-indigo-600">
              Software Engineer
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-between py-0.5 max-lg:gap-5 lg:flex-row">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-indigo-600 px-5 py-3.5 text-base leading-7 font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-gray-100">
              Edit Profile
            </button>
            <button className="rounded-full bg-indigo-50 px-5 py-3.5 text-base leading-7 font-semibold text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100">
              Settings
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <p className="flex items-center gap-2 text-lg leading-8 font-medium text-gray-400">
              Skills
            </p>
            <ul className="flex items-center gap-2.5 max-sm:flex-wrap max-sm:justify-center">
              <li className="rounded-full bg-orange-50 px-7 py-3.5 text-base leading-7 font-semibold text-gray-700">
                HTML
              </li>
              <li className="rounded-full bg-orange-50 px-7 py-3.5 text-base leading-7 font-semibold text-gray-700">
                CSS
              </li>
              <li className="rounded-full bg-orange-50 px-7 py-3.5 text-base leading-7 font-semibold text-gray-700">
                Dart
              </li>
              <li className="rounded-full bg-orange-50 px-7 py-3.5 text-base leading-7 font-semibold text-gray-700">
                C++
              </li>
              <li className="rounded-full bg-orange-50 px-7 py-3.5 text-base leading-7 font-semibold text-gray-700">
                UI Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
