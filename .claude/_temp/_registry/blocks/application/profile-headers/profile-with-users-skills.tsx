export default function ProfileWithUsersSkills() {
  return (
    <section className="relative pt-40 pb-24">
      <img
        src="https://pagedone.io/asset/uploads/1705473378.png"
        alt="cover-image"
        className="w-full absolute top-0 left-0 z-0 h-60 object-cover"
      />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
          <img
            src="https://pagedone.io/asset/uploads/1705471668.png"
            alt="user-avatar-image"
            className="border-4 border-solid border-white rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
          <div className="block">
            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">
              Emma Smith
            </h3>
            <p className="font-normal text-base leading-7 text-gray-500">
              Los Anbeles, California
            </p>
          </div>
          <button className="rounded-full py-3.5 px-5 bg-gray-100 flex items-center group transition-all duration-500 hover:bg-indigo-100 ">
            <span className="px-2 font-medium text-base leading-7 text-gray-700 transition-all duration-500 group-hover:text-indigo-600">
              Software Engineer
            </span>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row max-lg:gap-5 items-center justify-between py-0.5">
          <div className="flex items-center gap-4">
            <button className="py-3.5 px-5 rounded-full bg-indigo-600 text-white font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-100 hover:bg-indigo-700">
              Edit Profile
            </button>
            <button className="py-3.5 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100">
              Settings
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 ">
            <p className="flex items-center gap-2 font-medium text-lg leading-8 text-gray-400 ">
              Skills
            </p>
            <ul className="flex items-center max-sm:justify-center max-sm:flex-wrap gap-2.5">
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">
                HTML
              </li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">
                CSS
              </li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">
                Dart
              </li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">
                C++
              </li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">
                UI Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
