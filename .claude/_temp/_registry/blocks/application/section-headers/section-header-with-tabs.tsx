export default function SectionHeaderWithTabs() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0 mb-7">
          <div className="block">
            <h2 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-3">
              Visitors Reports
            </h2>
            <p className="font-normal text-sm leading-6 text-gray-500">
              Passionate UI/UX designer with a keen eye for detail and a flair
              for creating visually stunning
            </p>
          </div>
          <form>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="text"
                id="default-search"
                className="block w-full lg:w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <ul className="flex items-center justify-between w-full overflow-auto max-md:flex-wrap">
          <li className="md:w-full">
            <a className="flex items-center justify-center w-max max-md:px-3 md:w-full max-[400px]:px-2 whitespace-nowrap py-3 border-b-2 border-solid border-indigo-600 font-medium text-base text-indigo-600 text-center transition-all duration-500 hover:border-indigo-600">
              Home
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex items-center justify-center w-max max-md:px-3 md:w-full max-[400px]:px-2 whitespace-nowrap py-3 border-b-2 border-solid border-gray-200 font-medium text-base text-gray-900 text-center transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600">
              About
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex items-center justify-center w-max max-md:px-3 md:w-full max-[400px]:px-2 whitespace-nowrap py-3 border-b-2 border-solid border-gray-200 font-medium text-base text-gray-900 text-center transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600">
              Contact
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex items-center justify-center w-max max-md:px-3 md:w-full max-[400px]:px-2 whitespace-nowrap py-3 border-b-2 border-solid border-gray-200 font-medium text-base text-gray-900 text-center transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600">
              Feature
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex items-center justify-center w-max max-md:px-3 md:w-full max-[400px]:px-2 whitespace-nowrap py-3 border-b-2 border-solid border-gray-200 font-medium text-base text-gray-900 text-center transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600">
              Pricing
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex items-center justify-center w-max max-md:px-3 md:w-full max-[400px]:px-2 whitespace-nowrap py-3 border-b-2 border-solid border-gray-200 font-medium text-base text-gray-900 text-center transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600">
              Blog
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex items-center justify-center w-max max-md:px-3 md:w-full max-[400px]:px-2 whitespace-nowrap py-3 border-b-2 border-solid border-gray-200 font-medium text-base text-gray-900 text-center transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600">
              career
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex items-center justify-center w-max max-md:px-3 md:w-full max-[400px]:px-2 whitespace-nowrap py-3 border-b-2 border-solid border-gray-200 font-medium text-base text-gray-900 text-center transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600">
              Legal
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
