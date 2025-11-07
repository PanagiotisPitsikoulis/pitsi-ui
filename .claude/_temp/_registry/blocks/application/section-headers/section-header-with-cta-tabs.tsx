export default function SectionHeaderWithCtaTabs() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0 mb-7">
          <div className="block">
            <h2 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-3">
              Projects
            </h2>
            <p className="font-normal text-sm leading-6 text-gray-500">
              Passionate UI/UX designer with a keen eye for detail and a flair
              for creating visually stunning
            </p>
          </div>
          <div className="flex flex-col min-[450px]:flex-row min-[450px]:items-center gap-8">
            <div className="flex items-center">
              <img
                src="assets/images/section-head-6-1.png"
                className="border border-solid border-white rounded-full object-cover"
              />
              <img
                src="assets/images/section-head-6-2.png"
                className="-ml-2.5 border border-solid border-white rounded-full object-cover"
              />
              <img
                src="assets/images/section-head-6-3.png"
                className="-ml-2.5 border border-solid border-white rounded-full object-cover"
              />
              <img
                src="assets/images/section-head-6-4.png"
                className="-ml-2.5 border border-solid border-white rounded-full object-cover"
              />
              <img
                src="assets/images/section-head-6-5.png"
                className="-ml-2.5 border border-solid border-white rounded-full object-cover"
              />
              <button className="-ml-2.5 border border-solid border-white rounded-full w-10 h-10 bg-gray-100 font-semibold text-sm text-gray-600 flex items-center justify-center">
                +5
              </button>
            </div>
            <button className="rounded-full max-[450px]:w-max py-2.5 px-4 pr-6 flex items-center gap-2 bg-indigo-600 text-white font-medium text-sm shadow-sm shadow-gray-50 transition-all duration-500 hover:bg-indigo-700 hover:shadow-gray-300">
              Add Member
            </button>
          </div>
        </div>
        <ul className="flex items-center justify-between w-full gap-2 overflow-auto max-lg:flex-wrap">
          <li className="lg:w-full">
            <a className="flex items-center justify-center w-full max-[450px]:px-3.5 max-lg:text-sm max-[450px]:py-2.5 whitespace-nowrap py-3 px-5 bg-indigo-50 rounded-full font-semibold text-lg text-indigo-600 text-center transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600">
              Home
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex items-center justify-center w-full max-[450px]:px-3.5 max-lg:text-sm max-[450px]:py-2.5 whitespace-nowrap py-3 px-5 bg-gray-50 rounded-full font-semibold text-lg text-gray-900 text-center transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600">
              About
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex items-center justify-center w-full max-[450px]:px-3.5 max-lg:text-sm max-[450px]:py-2.5 whitespace-nowrap py-3 px-5 bg-gray-50 rounded-full font-semibold text-lg text-gray-900 text-center transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600">
              Contect
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex items-center justify-center w-full max-[450px]:px-3.5 max-lg:text-sm max-[450px]:py-2.5 whitespace-nowrap py-3 px-5 bg-gray-50 rounded-full font-semibold text-lg text-gray-900 text-center transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600">
              Blog
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex items-center justify-center w-full max-[450px]:px-3.5 max-lg:text-sm max-[450px]:py-2.5 whitespace-nowrap py-3 px-5 bg-gray-50 rounded-full font-semibold text-lg text-gray-900 text-center transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600">
              Feature
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex items-center justify-center w-full max-[450px]:px-3.5 max-lg:text-sm max-[450px]:py-2.5 whitespace-nowrap py-2.5 px-5 bg-gray-50 rounded-full font-semibold text-lg text-gray-900 text-center transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600">
              pricing
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex items-center justify-center w-full max-[450px]:px-3.5 max-lg:text-sm max-[450px]:py-2.5 whitespace-nowrap py-2.5 px-5 bg-gray-50 rounded-full font-semibold text-lg text-gray-900 text-center transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600">
              Career
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex items-center justify-center w-full max-[450px]:px-3.5 max-lg:text-sm max-[450px]:py-2.5 whitespace-nowrap py-2.5 px-5 bg-gray-50 rounded-full font-semibold text-lg text-gray-900 text-center transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600">
              Legal
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
